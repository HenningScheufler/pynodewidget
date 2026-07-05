"""Tests for representing Snakemake rules as a PyNodeWidget node graph."""

from pathlib import Path

import pytest

from pynodewidget.snakemake_flow import (
    ParamSource,
    Rule,
    RuleRegistry,
    RuleSpec,
    autowire,
    build_pattern_edges,
    data_type_of,
    dot_to_flow,
    export_sweep,
    flow_to_sweep,
    parse_dot,
    parse_snakefile,
    paramspace_snakefile,
    registry_to_flow,
    sources_from_params_yaml,
    rules_to_flow,
    rules_to_snakefile,
    sweep_to_flow,
    sweep_to_snakefile,
)

FIXTURE = Path(__file__).parent / "fixtures" / "simple.smk"

DOT_TEXT = """\
digraph snakemake_dag {
    node[shape=box, style=rounded];
        0[label = "all", color = "0.00 0.6 0.85", style="rounded"];
        1[label = "summary", color = "0.17 0.6 0.85", style="rounded"];
        2[label = "clean", color = "0.67 0.6 0.85", style="rounded"];
        3[label = "download", color = "0.83 0.6 0.85", style="rounded"];
        1 -> 0
        2 -> 1
        3 -> 2
}
"""


def _handles(template: dict) -> list:
    """Collect every handle component from a node template's grid."""
    handles = []
    for cell in template["definition"]["grid"]["cells"]:
        for comp in cell.get("components", []):
            if str(comp.get("type", "")).endswith("-handle"):
                handles.append(comp)
    return handles


def test_parse_snakefile():
    """The simple .smk fixture parses into two chained rules."""
    rules = parse_snakefile(FIXTURE)

    assert [r.name for r in rules] == ["step1", "step2"]

    step1, step2 = rules
    assert step1.input == []
    assert step1.output == ["intermediate.txt"]
    assert step1.shell == "echo hello > {output}"

    assert step2.input == ["intermediate.txt"]
    assert step2.output == ["result.txt"]
    assert step2.shell == "cat {input} > {output}"


def test_data_type_of():
    """Data type is the lowercased file extension (or 'file')."""
    assert data_type_of("data/raw.csv") == "csv"
    assert data_type_of("results/plot.PNG") == "png"
    assert data_type_of("intermediate.txt") == "txt"
    assert data_type_of("Snakefile") == "file"


def test_one_node_type_per_rule():
    """Each rule is registered as its own node type (one sidebar entry each)."""
    rules = parse_snakefile(FIXTURE)
    flow = rules_to_flow(rules)

    types = [t["type"] for t in flow.node_templates]
    assert types == ["rule_step1", "rule_step2"]
    # Sidebar shows the bare rule name as the label.
    labels = {t["type"]: t["label"] for t in flow.node_templates}
    assert labels == {"rule_step1": "step1", "rule_step2": "step2"}


def test_per_file_typed_ports():
    """Each input/output file becomes a typed handle on the rule node."""
    rules = parse_snakefile(FIXTURE)
    flow = rules_to_flow(rules)
    templates = {t["type"]: t for t in flow.node_templates}

    # step1: no inputs, one typed output port for intermediate.txt.
    step1_handles = _handles(templates["rule_step1"])
    assert not [h for h in step1_handles if h["handle_type"] == "input"]
    out1 = [h for h in step1_handles if h["handle_type"] == "output"]
    assert len(out1) == 1
    assert out1[0]["id"] == "out:intermediate.txt"
    assert out1[0]["dataType"] == "txt"

    # step2: input port for intermediate.txt, output port for result.txt.
    step2_handles = _handles(templates["rule_step2"])
    in2 = [h for h in step2_handles if h["handle_type"] == "input"]
    out2 = [h for h in step2_handles if h["handle_type"] == "output"]
    assert [h["id"] for h in in2] == ["in:intermediate.txt"]
    assert [h["id"] for h in out2] == ["out:result.txt"]
    assert in2[0]["dataType"] == "txt"
    assert in2[0]["label"] == "intermediate.txt"


def test_edges_connect_matching_ports():
    """A producer's output port connects to the consumer's input port per file."""
    rules = parse_snakefile(FIXTURE)
    flow = rules_to_flow(rules)

    assert set(flow.nodes) == {"step1", "step2"}
    assert flow.nodes["step2"]["type"] == "rule_step2"

    assert len(flow.edges) == 1
    edge = flow.edges[0]
    assert edge["source"] == "step1"
    assert edge["target"] == "step2"
    assert edge["sourceHandle"] == "out:intermediate.txt"
    assert edge["targetHandle"] == "in:intermediate.txt"


def test_fan_out_and_fan_in():
    """A file consumed by two rules yields two edges; a rule with two inputs too."""
    rules = [
        Rule(name="clean", input=["raw.csv"], output=["clean.csv"]),
        Rule(name="analyze", input=["clean.csv"], output=["stats.txt"]),
        Rule(name="plot", input=["clean.csv"], output=["plot.png"]),
        Rule(name="summary", input=["stats.txt", "plot.png"], output=["out.txt"]),
    ]
    flow = rules_to_flow(rules)

    pairs = {(e["source"], e["target"]) for e in flow.edges}
    # clean fans out to analyze + plot; summary fans in from analyze + plot.
    assert ("clean", "analyze") in pairs
    assert ("clean", "plot") in pairs
    assert ("analyze", "summary") in pairs
    assert ("plot", "summary") in pairs


def test_rules_to_flow_registers_type_once():
    """Reusing a widget does not duplicate the per-rule node types."""
    rules = parse_snakefile(FIXTURE)
    flow = rules_to_flow(rules)
    flow = rules_to_flow(rules, widget=flow)

    assert [t["type"] for t in flow.node_templates] == ["rule_step1", "rule_step2"]


def test_rules_to_snakefile_roundtrip():
    """Serializing rules and re-parsing yields equivalent rules."""
    rules = parse_snakefile(FIXTURE)
    text = rules_to_snakefile(rules)
    reparsed = parse_snakefile_from_text(text)

    assert reparsed == rules


def test_rules_to_snakefile_shape():
    """Generated text contains the expected rule blocks and directives."""
    rules = [Rule(name="a", output=["a.txt"], shell="touch {output}")]
    text = rules_to_snakefile(rules)

    assert "rule a:" in text
    assert "    output:" in text
    assert '        "a.txt"' in text
    assert "    shell:" in text


def _snakemake_cli():
    """Return the snakemake CLI path, or skip if the extra isn't installed."""
    pytest.importorskip("snakemake")
    import shutil

    cli = shutil.which("snakemake")
    if cli is None:
        pytest.skip("snakemake CLI not on PATH")
    return cli


def test_generated_snakefile_valid_with_snakemake(tmp_path):
    """The generated Snakefile builds a valid rule graph under real snakemake.

    Optional: skipped unless the ``snakemake`` extra is installed. Uses the CLI
    (the stable interface) rather than snakemake's private Python API.
    """
    import subprocess

    cli = _snakemake_cli()
    rules = parse_snakefile(FIXTURE)
    (tmp_path / "Snakefile").write_text(rules_to_snakefile(rules))

    result = subprocess.run(
        [cli, "--rulegraph"], cwd=tmp_path, capture_output=True, text=True
    )
    # Exit 0 + a rule graph means snakemake parsed and resolved the file.
    assert result.returncode == 0, result.stderr
    assert "digraph" in result.stdout
    assert "step1" in result.stdout


def test_generated_sweep_dag_expands(tmp_path):
    """The generated parametric Snakefile expands into one job per sweep value."""
    import subprocess

    cli = _snakemake_cli()
    (tmp_path / "Snakefile").write_text(
        sweep_to_snakefile(SWEEP_SOURCES, SWEEP_RULES)
    )
    data = tmp_path / "data"
    data.mkdir()
    for s in ("A", "B", "C"):
        (data / f"{s}.in").touch()

    result = subprocess.run(
        [cli, "--dag"], cwd=tmp_path, capture_output=True, text=True
    )
    assert result.returncode == 0, result.stderr
    # The {sample} sweep expanded into three simulate jobs.
    for s in ("A", "B", "C"):
        assert f"sample: {s}" in result.stdout
    assert result.stdout.count('label = "simulate') == 3


def test_parse_dot():
    """A Snakemake DOT graph parses into nodes (label + color) and edges."""
    nodes, edges = parse_dot(DOT_TEXT)

    assert [n.id for n in nodes] == ["0", "1", "2", "3"]
    assert [n.label for n in nodes] == ["all", "summary", "clean", "download"]
    assert nodes[0].color == "0.00 0.6 0.85"
    # Default-attribute lines (node[...]) are not treated as nodes.
    assert "node" not in [n.id for n in nodes]

    assert edges == [("1", "0"), ("2", "1"), ("3", "2")]


def test_parse_dot_from_file(tmp_path):
    """parse_dot accepts a file path as well as raw text."""
    path = tmp_path / "dag.dot"
    path.write_text(DOT_TEXT)
    nodes, edges = parse_dot(path)
    assert [n.label for n in nodes] == ["all", "summary", "clean", "download"]
    assert len(edges) == 3


def test_parse_dot_flattens_multiline_labels():
    """DOT '\\n' in labels (rule + wildcards) is flattened to one line."""
    nodes, _ = parse_dot(
        'digraph d {\n 0[label = "analyze\\nsample: A", color = "0.1 0.6 0.85"];\n}'
    )
    assert nodes[0].label == "analyze · sample: A"


def test_dot_to_flow():
    """DOT nodes become colored graph nodes; arrows become edges."""
    nodes, edges = parse_dot(DOT_TEXT)
    flow = dot_to_flow(nodes, edges)

    # One node type per distinct label; header tinted with the DOT color.
    labels = [t["label"] for t in flow.node_templates]
    assert labels == ["all", "summary", "clean", "download"]
    header = _header(flow.node_templates[0])
    assert header["bgColor"] == "#d85656"  # HSV 0.00 0.6 0.85 -> red

    assert set(flow.nodes) == {"0", "1", "2", "3"}
    assert len(flow.edges) == 3
    edge = next(e for e in flow.edges if e["source"] == "1")
    assert edge["target"] == "0"
    assert edge["sourceHandle"] == "out"
    assert edge["targetHandle"] == "in"

    # Layered layout: download (root) left of all (leaf).
    assert flow.nodes["3"]["position"]["x"] < flow.nodes["0"]["position"]["x"]


SWEEP_SOURCES = [ParamSource("sample", ["A", "B", "C"])]
SWEEP_RULES = [
    Rule("all", input=["results/{sample}.out"]),
    Rule(
        "simulate",
        input=["data/{sample}.in"],
        output=["results/{sample}.out"],
        shell="python run.py {input} {output}",
    ),
]


def test_sweep_to_snakefile():
    """A sweep generates a list variable and an expand() over the aggregator."""
    text = sweep_to_snakefile(SWEEP_SOURCES, SWEEP_RULES)

    assert 'samples = ["A", "B", "C"]' in text
    # `all` has no output -> its wildcard input is expanded over the sweep.
    assert 'expand("results/{sample}.out", sample=samples)' in text
    # `simulate` keeps the plain wildcard patterns (Snakemake resolves them).
    assert '        "data/{sample}.in"' in text
    assert '        "results/{sample}.out"' in text
    assert "python run.py {input} {output}" in text


def test_sweep_to_flow_source_and_param_ports():
    """The source node feeds a param port on every rule using its wildcard."""
    flow = sweep_to_flow(SWEEP_SOURCES, SWEEP_RULES)

    types = {t["type"] for t in flow.node_templates}
    assert {"param_sample", "rule_all", "rule_simulate"} <= types

    # The sample source node exists with a typed 'param:sample' output port.
    src = next(t for t in flow.node_templates if t["type"] == "param_sample")
    out = [h for h in _handles(src) if h["handle_type"] == "output"]
    assert out[0]["dataType"] == "param:sample"

    # simulate has a param:sample input port (plus its file port).
    sim = next(t for t in flow.node_templates if t["type"] == "rule_simulate")
    param_ports = [h for h in _handles(sim) if h["id"] == "param:sample"]
    assert param_ports and param_ports[0]["dataType"] == "param:sample"

    # A param edge connects the source to both swept rules.
    param_edges = [e for e in flow.edges if e["source"] == "src_sample"]
    assert {e["target"] for e in param_edges} == {"all", "simulate"}
    assert all(e["targetHandle"] == "param:sample" for e in param_edges)

    # The file dependency simulate -> all is still present.
    file_edges = [e for e in flow.edges if e["source"] == "simulate"]
    assert file_edges and file_edges[0]["target"] == "all"


# A 2-parameter grid sweep: {sample} x {method}.
GRID_SOURCES = [
    ParamSource("sample", ["A", "B", "C"]),
    ParamSource("method", ["fast", "slow"]),
]
GRID_RULES = [
    Rule("all", input=["results/{sample}_{method}.txt"]),
    Rule("simulate", input=["data/{sample}.in"], output=["sim/{sample}.raw"],
         shell="simulate {input} {output}"),
    Rule("analyze", input=["sim/{sample}.raw"],
         output=["results/{sample}_{method}.txt"],
         shell="analyze --method {wildcards.method} {input} {output}"),
]


def test_multi_wildcard_expand():
    """An aggregator input with two wildcards expands over both sweeps."""
    text = sweep_to_snakefile(GRID_SOURCES, GRID_RULES)

    assert 'samples = ["A", "B", "C"]' in text
    assert 'methods = ["fast", "slow"]' in text
    assert (
        'expand("results/{sample}_{method}.txt", sample=samples, method=methods)'
        in text
    )
    # simulate only uses {sample}, so its input is not expanded.
    assert '        "data/{sample}.in"' in text


def test_multi_param_rule_ports_and_edges():
    """A rule using two wildcards gets both param ports; sources only feed the
    rules that use their wildcard."""
    flow = sweep_to_flow(GRID_SOURCES, GRID_RULES)

    analyze = next(t for t in flow.node_templates if t["type"] == "rule_analyze")
    ids = {h["id"] for h in _handles(analyze)}
    assert {"param:sample", "param:method"} <= ids

    # 'method' feeds analyze + all (which use {method}); not simulate.
    method_targets = {e["target"] for e in flow.edges if e["source"] == "src_method"}
    assert method_targets == {"analyze", "all"}
    sample_targets = {e["target"] for e in flow.edges if e["source"] == "src_sample"}
    assert sample_targets == {"simulate", "analyze", "all"}


def test_generated_grid_sweep_dag_expands(tmp_path):
    """snakemake --dag expands the grid into 3 simulate + 6 analyze jobs."""
    import subprocess

    cli = _snakemake_cli()
    (tmp_path / "Snakefile").write_text(sweep_to_snakefile(GRID_SOURCES, GRID_RULES))
    data = tmp_path / "data"
    data.mkdir()
    for s in ("A", "B", "C"):
        (data / f"{s}.in").touch()

    result = subprocess.run(
        [cli, "--dag"], cwd=tmp_path, capture_output=True, text=True
    )
    assert result.returncode == 0, result.stderr
    assert result.stdout.count('label = "simulate') == 3
    assert result.stdout.count('label = "analyze') == 6


# ---------------------------------------------------------------------------
# Rule registry, auto-wiring, and the canvas -> workflow-directory round trip
# ---------------------------------------------------------------------------

from pydantic import BaseModel


class MeshCfg(BaseModel):
    nx: int = 100
    ny: int = 100


class SolverCfg(BaseModel):
    tol: float = 1e-6
    scheme: str = "implicit"


MODELS_PY = '''\
from pydantic import BaseModel


class MeshCfg(BaseModel):
    nx: int = 100
    ny: int = 100


class SolverCfg(BaseModel):
    tol: float = 1e-6
    scheme: str = "implicit"
'''


def _registry() -> RuleRegistry:
    reg = RuleRegistry(models_module="models")
    reg.add(RuleSpec(
        "simulate",
        output=["results/{case}/out.dat"],
        shell="cat {input[0]} > {output}",
        params_models={"mesh": MeshCfg, "solver": SolverCfg},
    ))
    reg.add(RuleSpec(
        "post",
        input=["results/{case}/out.dat"],
        output=["results/{case}/report.txt"],
        shell="cat {input} > {output}",
        params_models={"solver": SolverCfg},
    ))
    reg.add(RuleSpec("all", input=["results/{case}/report.txt"]))
    return reg


def _canvas(registry: RuleRegistry):
    """A widget with palette + hand-placed nodes shaped like frontend adds.

    One grouped source node per dimension; the solver source holds two named
    blocks (its entry group is a view into the params.yaml 'solver' section).
    """
    widget = registry_to_flow(registry)
    pos = {"x": 0, "y": 0}
    widget.nodes = {
        "node-1": {"type": "rule_simulate", "position": pos, "data": {}},
        "node-2": {"type": "rule_post", "position": pos, "data": {}},
        "node-3": {"type": "rule_all", "position": pos, "data": {}},
        "node-4": {"type": "block_mesh", "position": pos, "data": {}},
        "node-5": {"type": "block_solver", "position": pos, "data": {}},
    }
    widget.node_values = {
        "node-4": {"entries": {
            "selected": "fine",
            "entries": {"fine": {"nx": 200, "ny": 200}},
        }},
        "node-5": {"entries": {
            "selected": "fast",
            "entries": {
                "fast": {"tol": 1e-3, "scheme": "explicit"},
                "exact": {"tol": 1e-9, "scheme": "implicit"},
            },
        }},
    }
    return widget


def test_registry_templates():
    """One template per rule plus one schema-driven template per dimension."""
    flow = registry_to_flow(_registry())
    templates = {t["type"]: t for t in flow.node_templates}
    assert set(templates) == {
        "rule_simulate", "rule_post", "rule_all", "block_mesh", "block_solver",
    }

    # The source template holds an entry group whose fields come from the
    # pydantic model; the default is one entry named after the dimension.
    mesh = templates["block_mesh"]
    assert mesh["defaultValues"] == {
        "entries": {"selected": "mesh", "entries": {"mesh": {"nx": 100, "ny": 100}}}
    }
    group = next(
        comp
        for cell in mesh["definition"]["grid"]["cells"]
        for comp in cell.get("components", [])
        if comp.get("type") == "entry-group"
    )
    assert {f["id"] for f in group["fields"]} == {"nx", "ny"}
    out = [h for h in _handles(mesh) if h["handle_type"] == "output"]
    assert [h["dataType"] for h in out] == ["cfg:mesh"]

    # The rule template has a required config port per dimension + file ports.
    sim = templates["rule_simulate"]
    inputs = [h for h in _handles(sim) if h["handle_type"] == "input"]
    assert {h["id"] for h in inputs} == {"cfg:mesh", "cfg:solver"}
    assert all(h["required"] for h in inputs)
    outputs = [h for h in _handles(sim) if h["handle_type"] == "output"]
    assert [h["id"] for h in outputs] == ["out:results/{case}/out.dat"]


def test_registry_rejects_duplicates_and_conflicts():
    reg = _registry()
    with pytest.raises(ValueError, match="already registered"):
        reg.add(RuleSpec("simulate"))

    class OtherCfg(BaseModel):
        x: int = 0

    reg.add(RuleSpec("clash", params_models={"mesh": OtherCfg}))
    with pytest.raises(ValueError, match="conflicting models"):
        reg.dims()


def test_build_pattern_edges_unifies_wildcard_names():
    """Patterns match positionally regardless of wildcard names."""
    rules = [
        Rule("produce", output=["results/{case}/out.dat"]),
        Rule("consume", input=["results/{c}/out.dat"]),
        Rule("other", input=["results/{case}/other.dat"]),
    ]
    edges = build_pattern_edges(rules)
    assert len(edges) == 1
    edge = edges[0]
    assert (edge["source"], edge["target"]) == ("produce", "consume")
    # Each side keeps its own raw pattern in the handle id.
    assert edge["sourceHandle"] == "out:results/{case}/out.dat"
    assert edge["targetHandle"] == "in:results/{c}/out.dat"


def test_autowire_files_and_configs():
    """autowire connects file patterns and block -> rule config ports."""
    registry = _registry()
    widget = _canvas(registry)
    edges = autowire(widget, registry)

    pairs = {(e["source"], e["target"], e["targetHandle"]) for e in edges}
    # File chain simulate -> post -> all.
    assert ("node-1", "node-2", "in:results/{case}/out.dat") in pairs
    assert ("node-2", "node-3", "in:results/{case}/report.txt") in pairs
    # mesh feeds simulate only; the solver source feeds simulate and post.
    assert ("node-4", "node-1", "cfg:mesh") in pairs
    assert ("node-4", "node-2", "cfg:mesh") not in pairs
    assert ("node-5", "node-1", "cfg:solver") in pairs
    assert ("node-5", "node-2", "cfg:solver") in pairs
    assert widget.edges == edges


def test_flow_to_sweep_blocks_and_combinations():
    """Block values validate against the models; combinations cross-product."""
    registry = _registry()
    widget = _canvas(registry)
    design = flow_to_sweep(widget, registry)

    assert [spec.name for spec in design.rules] == ["simulate", "post", "all"]
    assert design.blocks["mesh"]["fine"] == {"nx": 200, "ny": 200}
    assert design.blocks["solver"]["fast"] == {"tol": 1e-3, "scheme": "explicit"}

    assert design.combinations == [
        {"case": "fine_exact", "mesh": "fine", "solver": "exact"},
        {"case": "fine_fast", "mesh": "fine", "solver": "fast"},
    ]


def test_flow_to_sweep_validation_errors():
    registry = _registry()
    widget = _canvas(registry)

    widget.node_values["node-4"] = {
        "entries": {"selected": "fine", "entries": {"fine": {"nx": "oops"}}}
    }
    with pytest.raises(ValueError, match="'mesh.fine' failed validation"):
        flow_to_sweep(widget, registry)

    widget.node_values["node-4"] = {
        "entries": {"selected": "", "entries": {"": {"nx": 1, "ny": 1}}}
    }
    with pytest.raises(ValueError, match="block name must not be empty"):
        flow_to_sweep(widget, registry)

    widget.node_values["node-4"] = {"entries": {"selected": "", "entries": {}}}
    with pytest.raises(ValueError, match="no parameter blocks defined"):
        flow_to_sweep(widget, registry)

    # A block name repeated across two source nodes of one dim is an error.
    widget.node_values["node-4"] = {
        "entries": {"selected": "fine", "entries": {"fine": {"nx": 1, "ny": 1}}}
    }
    nodes = dict(widget.nodes)
    nodes["node-6"] = {"type": "block_mesh", "position": {"x": 0, "y": 0}, "data": {}}
    widget.nodes = nodes
    widget.node_values["node-6"] = {
        "entries": {"selected": "fine", "entries": {"fine": {"nx": 2, "ny": 2}}}
    }
    with pytest.raises(ValueError, match="duplicate block name 'fine'"):
        flow_to_sweep(widget, registry)

    # A rule whose dimension has no block on the canvas is an error.
    nodes = dict(widget.nodes)
    del nodes["node-4"], nodes["node-6"]
    widget.nodes = nodes
    with pytest.raises(ValueError, match="no 'mesh' parameter block"):
        flow_to_sweep(widget, registry)


def test_sources_from_params_yaml_round_trip(tmp_path):
    """params.yaml exported from one canvas seeds another, yielding the same
    blocks — the source nodes are a real view into the file."""
    pytest.importorskip("yaml")
    registry = _registry()
    widget = _canvas(registry)
    design = flow_to_sweep(widget, registry)
    export_sweep(widget, registry, tmp_path)

    fresh = registry_to_flow(registry)
    node_ids = sources_from_params_yaml(fresh, registry, tmp_path / "params.yaml")
    assert set(node_ids) == {"mesh", "solver"}
    assert fresh.nodes[node_ids["solver"]]["type"] == "block_solver"
    solver_group = fresh.node_values[node_ids["solver"]]["entries"]
    assert set(solver_group["entries"]) == {"fast", "exact"}

    # Add the rule nodes back; the extracted design matches the original.
    pos = {"x": 0, "y": 0}
    fresh.nodes = {
        **fresh.nodes,
        "r1": {"type": "rule_simulate", "position": pos, "data": {}},
        "r2": {"type": "rule_post", "position": pos, "data": {}},
        "r3": {"type": "rule_all", "position": pos, "data": {}},
    }
    assert flow_to_sweep(fresh, registry).blocks == design.blocks


def test_sources_from_params_yaml_errors(tmp_path):
    pytest.importorskip("yaml")
    from pynodewidget.snakemake_paramspace import write_params_yaml

    registry = _registry()

    write_params_yaml(tmp_path / "bad_dim.yaml", {"unknown": {"a": {}}})
    with pytest.raises(ValueError, match="unknown dimension 'unknown'"):
        sources_from_params_yaml(registry_to_flow(registry), registry,
                                 tmp_path / "bad_dim.yaml")

    write_params_yaml(tmp_path / "bad_val.yaml",
                      {"mesh": {"fine": {"nx": "oops"}}})
    with pytest.raises(ValueError, match="'mesh.fine' failed validation"):
        sources_from_params_yaml(registry_to_flow(registry), registry,
                                 tmp_path / "bad_val.yaml")


def test_paramspace_snakefile_shape():
    """The generated Snakefile wires YamlParamSpace, configs, and expand()."""
    registry = _registry()
    widget = _canvas(registry)
    text = paramspace_snakefile(registry, flow_to_sweep(widget, registry))

    assert "from pynodewidget.snakemake_paramspace import YamlParamSpace" in text
    assert "from models import MeshCfg, SolverCfg" in text
    assert '"mesh": MeshCfg' in text and '"solver": SolverCfg' in text
    assert "space.materialize(" in text
    assert "cases = space.cases" in text
    # The aggregator comes first (default target) and expands over the cases.
    assert text.index("rule all:") < text.index("rule simulate:")
    assert 'expand("results/{case}/report.txt", case=cases)' in text
    # Parametrized rules read their materialized config as first input.
    assert '"configs/{case}/simulate.json"' in text
    assert '"configs/{case}/post.json"' in text


def test_export_sweep_writes_runnable_directory(tmp_path):
    pytest.importorskip("yaml")
    registry = _registry()
    widget = _canvas(registry)
    autowire(widget, registry)

    export = export_sweep(widget, registry, tmp_path)

    assert export.sweep_csv.read_text().splitlines() == [
        "case,mesh,solver",
        "fine_exact,fine,exact",
        "fine_fast,fine,fast",
    ]
    import yaml
    blocks = yaml.safe_load(export.params_yaml.read_text())
    assert blocks["solver"]["exact"]["tol"] == 1e-9
    assert "rule simulate:" in export.snakefile.read_text()
    # Materialized configs hold only each rule's own dimensions.
    import json
    post_cfg = json.loads((tmp_path / "configs/fine_fast/post.json").read_text())
    assert set(post_cfg) == {"solver"}
    assert len(export.configs) == 4  # 2 cases x 2 parametrized rules


def test_exported_sweep_runs_under_snakemake(tmp_path):
    """End to end: canvas -> export -> snakemake run -> selective re-run.

    Optional: skipped unless the snakemake extra is installed.
    """
    import json
    import os
    import subprocess

    pytest.importorskip("yaml")
    cli = _snakemake_cli()

    registry = _registry()
    widget = _canvas(registry)
    autowire(widget, registry)
    export_sweep(widget, registry, tmp_path)
    (tmp_path / "models.py").write_text(MODELS_PY)

    env = {**os.environ, "PYTHONPATH": str(tmp_path)}

    def run(*args):
        return subprocess.run(
            [cli, *args], cwd=tmp_path, env=env, capture_output=True, text=True
        )

    # Dry run schedules one simulate + post per case plus the aggregator.
    result = run("-n")
    assert result.returncode == 0, result.stderr
    dag = result.stdout + result.stderr
    for case in ("fine_fast", "fine_exact"):
        assert f"wildcards: case={case}" in dag

    result = run("-c1")
    assert result.returncode == 0, result.stderr
    report = tmp_path / "results" / "fine_fast" / "report.txt"
    assert report.exists()
    # The report is the concatenated simulate config + output chain.
    assert json.loads((tmp_path / "configs/fine_fast/simulate.json").read_text())

    # Editing one solver block re-materializes at parse time and re-runs only
    # the affected case.
    from pynodewidget.snakemake_paramspace import read_params_yaml, write_params_yaml
    blocks = read_params_yaml(tmp_path / "params.yaml")
    blocks["solver"]["fast"]["tol"] = 5e-4
    write_params_yaml(tmp_path / "params.yaml", blocks)

    result = run("-n")
    assert result.returncode == 0, result.stderr
    dag = result.stdout + result.stderr
    assert "wildcards: case=fine_fast" in dag
    assert "wildcards: case=fine_exact" not in dag


def _header(template: dict) -> dict:
    for cell in template["definition"]["grid"]["cells"]:
        for comp in cell.get("components", []):
            if comp.get("type") == "header":
                return comp
    raise AssertionError("no header component found")


def parse_snakefile_from_text(text: str) -> list:
    """Helper: parse rules from an in-memory Snakefile string via a temp file."""
    import tempfile

    with tempfile.NamedTemporaryFile("w", suffix=".smk", delete=False) as fh:
        fh.write(text)
        name = fh.name
    try:
        return parse_snakefile(name)
    finally:
        Path(name).unlink()
