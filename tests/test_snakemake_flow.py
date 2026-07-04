"""Tests for representing Snakemake rules as a PyNodeWidget node graph."""

from pathlib import Path

import pytest

from pynodewidget.snakemake_flow import (
    ParamSource,
    Rule,
    data_type_of,
    dot_to_flow,
    parse_dot,
    parse_snakefile,
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
