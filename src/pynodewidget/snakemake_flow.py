"""Represent Snakemake rules as a PyNodeWidget node graph.

A Snakemake workflow is a set of *rules*, each declaring the files it consumes
(``input``) and produces (``output``) plus a ``shell`` command. The dependencies
between rules form a DAG: a rule that consumes a file depends on the rule that
produces it.

This module maps that model onto PyNodeWidget:

- each rule becomes a **node** with an input handle, an output handle, and text
  fields for its name / input / output / shell command;
- the file-dependency DAG becomes the **edges** between nodes.

The core of this module has no dependency on the ``snakemake`` package: rules are
parsed from a small ``.smk`` subset by :func:`parse_snakefile` and emitted back
by :func:`rules_to_snakefile`. The real ``snakemake`` package is only an optional
extra used to *validate* generated Snakefiles (see the tests).

This is intentionally a small first cut. Growth points are marked with ``TODO``.
"""

from __future__ import annotations

import itertools
import re
from dataclasses import dataclass, field
from pathlib import Path
import colorsys
from typing import Dict, List, Optional, Sequence, Tuple, Union

from .widget import NodeFlowWidget, _to_plain_dict
from .grid_layouts import create_three_column_grid, json_schema_to_components
from .models import (
    EntryGroupComponent,
    EntryGroupValue,
    HeaderComponent,
    LabeledHandle,
    TextField,
)

__all__ = [
    "Rule",
    "parse_snakefile",
    "rules_to_flow",
    "rules_to_snakefile",
    "data_type_of",
    "DotNode",
    "parse_dot",
    "dot_to_flow",
    "ParamSource",
    "sweep_to_flow",
    "sweep_to_snakefile",
    "RuleSpec",
    "RuleRegistry",
    "registry_to_flow",
    "build_pattern_edges",
    "autowire",
    "SweepDesign",
    "flow_to_sweep",
    "sources_from_params_yaml",
    "paramspace_snakefile",
    "SweepExport",
    "export_sweep",
]

#: Prefix for the per-rule node type (keeps rule names clear of reserved names
#: like ``input``/``output``).
RULE_TYPE_PREFIX = "rule_"

#: Prefix for the per-dimension parameter-block node type.
BLOCK_TYPE_PREFIX = "block_"

#: Component id of the entry group inside a parameter-source node.
GROUP_COMPONENT_ID = "entries"


def data_type_of(filename: str) -> str:
    """Infer a port data type from a file name (its lowercased extension).

    ``"data/raw.csv"`` -> ``"csv"``; ``"Snakefile"`` -> ``"file"``. The data type
    is attached to each handle so the frontend can color ports and reject
    connections between mismatched types.
    """
    base = filename.rsplit("/", 1)[-1]
    if "." in base and not base.endswith("."):
        return base.rsplit(".", 1)[1].lower()
    return "file"


def _basename(filename: str) -> str:
    return filename.rsplit("/", 1)[-1]


def _in_handle_id(filename: str) -> str:
    return f"in:{filename}"


def _out_handle_id(filename: str) -> str:
    return f"out:{filename}"


def _dedup(items: List[str]) -> List[str]:
    """Order-preserving de-duplication."""
    seen: set = set()
    out: List[str] = []
    for item in items:
        if item not in seen:
            seen.add(item)
            out.append(item)
    return out


@dataclass
class Rule:
    """A single Snakemake rule (simple subset).

    Attributes:
        name: The rule name (e.g. ``"step1"``).
        input: Files consumed by the rule.
        output: Files produced by the rule.
        shell: The shell command, if any.
    """

    name: str
    input: List[str] = field(default_factory=list)
    output: List[str] = field(default_factory=list)
    shell: Optional[str] = None
    # TODO: params, wildcards, run/script directives, named I/O.


@dataclass
class ParamSource:
    """A parameter-sweep source: a wildcard name and the values it sweeps over.

    ``ParamSource("sample", ["A", "B", "C"])`` drives a sweep over ``{sample}``.
    In the graph it is a node whose output port feeds every rule that uses the
    ``{sample}`` wildcard; when generating a Snakefile it becomes a list variable
    (``samples = ["A", "B", "C"]``) and an ``expand(...)`` over the aggregating
    rule's inputs.

    Attributes:
        name: The wildcard / parameter name (e.g. ``"sample"``).
        values: The sweep values.
    """

    name: str
    values: List[str] = field(default_factory=list)


# ---------------------------------------------------------------------------
# Parsing (.smk -> Rule)
# ---------------------------------------------------------------------------

_RULE_RE = re.compile(r"^rule\s+([A-Za-z_]\w*)\s*:\s*$")
_DIRECTIVE_RE = re.compile(r"^(input|output|shell)\s*:\s*(.*)$")
_STRING_RE = re.compile(r"""(['"])(.*?)\1""")


def _extract_strings(text: str) -> List[str]:
    """Return every quoted string found in ``text`` (order preserved)."""
    return [m.group(2) for m in _STRING_RE.finditer(text)]


def parse_snakefile(path: Union[str, Path]) -> List[Rule]:
    """Parse a simple ``.smk`` file into a list of :class:`Rule`.

    Supports ``rule NAME:`` blocks whose ``input`` / ``output`` / ``shell``
    directives hold one or more quoted strings, either inline
    (``output: "a.txt"``) or indented on following lines. This is a deliberately
    small subset; anything else is ignored.

    Args:
        path: Path to the ``.smk`` / ``Snakefile``.

    Returns:
        The rules in file order.
    """
    lines = Path(path).read_text().splitlines()

    rules: List[Rule] = []
    current: Optional[Rule] = None
    directive: Optional[str] = None

    def indent(s: str) -> int:
        return len(s) - len(s.lstrip())

    for raw in lines:
        line = raw.rstrip()
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue

        rule_match = _RULE_RE.match(stripped)
        if rule_match:
            current = Rule(name=rule_match.group(1))
            rules.append(current)
            directive = None
            continue

        if current is None:
            continue

        # A top-level (unindented) statement ends the current rule block.
        if indent(line) == 0:
            current = None
            directive = None
            continue

        directive_match = _DIRECTIVE_RE.match(stripped)
        if directive_match:
            directive = directive_match.group(1)
            inline = directive_match.group(2).strip()
            if inline:
                _apply(current, directive, _extract_strings(inline))
            continue

        # Continuation line belonging to the active directive.
        if directive is not None:
            _apply(current, directive, _extract_strings(stripped))

    return rules


def _apply(rule: Rule, directive: str, strings: List[str]) -> None:
    if not strings:
        return
    if directive == "input":
        rule.input.extend(strings)
    elif directive == "output":
        rule.output.extend(strings)
    elif directive == "shell":
        # A shell command is a single string; keep the first (last wins if reset).
        rule.shell = strings[0]


# ---------------------------------------------------------------------------
# Rules -> PyNodeWidget graph
# ---------------------------------------------------------------------------

def rules_to_flow(
    rules: List[Rule],
    widget: Optional[NodeFlowWidget] = None,
    x_step: int = 460,
    y_step: int = 220,
) -> NodeFlowWidget:
    """Build a :class:`NodeFlowWidget` graph from a list of rules.

    Registers one node type per rule (so every rule appears in the "Add Nodes"
    sidebar), where each **input file is a typed input port** on the left and each
    **output file is a typed output port** on the right. Creates one node per rule
    (keyed by rule name) and connects a producer's output port to a consumer's
    input port for every shared file. Nodes are positioned in dependency layers
    (left to right) so the DAG reads cleanly.

    Args:
        rules: Rules to render.
        widget: Optional existing widget to populate; a new one is created if
            omitted.
        x_step: Horizontal spacing between dependency layers.
        y_step: Vertical spacing between nodes within a layer.

    Returns:
        The populated widget.
    """
    if widget is None:
        widget = NodeFlowWidget()

    for rule in rules:
        _register_rule_type(widget, rule)

    edges = _build_edges(rules)
    positions = _layout(rules, edges, x_step, y_step)

    widget.nodes = {
        rule.name: {
            "type": _type_name(rule.name),
            "position": positions[rule.name],
            "data": {},
        }
        for rule in rules
    }

    widget.edges = edges
    return widget


def _type_name(rule_name: str) -> str:
    return f"{RULE_TYPE_PREFIX}{rule_name}"


def _layout(rules: List[Rule], edges: List[dict], x_step: int, y_step: int) -> dict:
    """Position each rule by its dependency depth (longest path from a root)."""
    parents: dict = {rule.name: [] for rule in rules}
    for edge in edges:
        parents[edge["target"]].append(edge["source"])

    depth: dict = {}

    def compute(name: str, seen: frozenset) -> int:
        if name in depth:
            return depth[name]
        if name in seen:  # cycle guard (Snakemake DAGs are acyclic)
            return 0
        ps = parents[name]
        value = 0 if not ps else 1 + max(compute(p, seen | {name}) for p in ps)
        depth[name] = value
        return value

    for rule in rules:
        compute(rule.name, frozenset())

    positions: dict = {}
    row_in_layer: dict = {}
    for rule in rules:  # preserve file order within a layer
        d = depth[rule.name]
        row = row_in_layer.get(d, 0)
        positions[rule.name] = {"x": d * x_step, "y": row * y_step}
        row_in_layer[d] = row + 1
    return positions


def _register_rule_type(widget: NodeFlowWidget, rule: Rule) -> None:
    """Register a node type for a single rule (one input/output port per file)."""
    type_name = _type_name(rule.name)
    if any(t.get("type") == type_name for t in widget.node_templates):
        return

    input_handles = [
        LabeledHandle(
            id=_in_handle_id(f),
            label=_basename(f),
            handle_type="input",
            dataType=data_type_of(f),
            required=True,
        )
        for f in _dedup(rule.input)
    ]
    output_handles = [
        LabeledHandle(
            id=_out_handle_id(f),
            label=_basename(f),
            handle_type="output",
            dataType=data_type_of(f),
        )
        for f in _dedup(rule.output)
    ]

    center = [HeaderComponent(id="header", label=rule.name, icon="🐍")]
    if rule.shell is not None:
        center.append(TextField(id="shell", label="shell", value=rule.shell))

    widget.add_node_type(
        type_name=type_name,
        label=rule.name,
        icon="🐍",
        description=f"Snakemake rule '{rule.name}'",
        grid_layout=create_three_column_grid(
            left_components=input_handles or None,
            center_components=center,
            right_components=output_handles or None,
        ),
    )


def _build_edges(rules: List[Rule]) -> List[dict]:
    """Connect a producer's output port to a consumer's input port per file."""
    return build_pattern_edges(rules)


def _normalize_pattern(pattern: str) -> str:
    """Replace every ``{name}`` wildcard with the fixed token ``{*}``.

    Two file patterns are considered the same file if their normalized forms
    are equal, so wildcard names unify positionally: ``results/{case}/out.dat``
    matches ``results/{c}/out.dat`` but not ``results/{case}/other.dat``. A
    pattern without wildcards degenerates to plain string equality.
    """
    return _WILDCARD_RE.sub("{*}", pattern)


def build_pattern_edges(
    rules: Sequence[Rule], ids: Optional[Sequence[str]] = None
) -> List[dict]:
    """Connect producer output ports to consumer input ports by file pattern.

    Generalizes exact filename matching to wildcard patterns via
    :func:`_normalize_pattern`. Each edge's handles keep the raw pattern of the
    respective side (handle ids are node-local).

    Args:
        rules: The rules to wire up.
        ids: Optional node id per rule (parallel to ``rules``); defaults to the
            rule names. Pass canvas node ids when wiring node instances.

    Returns:
        Edge dicts in deterministic (rule, file) order.
    """
    if ids is None:
        ids = [rule.name for rule in rules]

    producers: Dict[str, Tuple[str, str]] = {}
    for rule, node_id in zip(rules, ids):
        for out in rule.output:
            producers[_normalize_pattern(out)] = (node_id, out)

    edges: List[dict] = []
    for rule, node_id in zip(rules, ids):
        for infile in _dedup(rule.input):
            hit = producers.get(_normalize_pattern(infile))
            if hit is None or hit[0] == node_id:
                continue
            source_id, out_pattern = hit
            edges.append({
                "id": f"{source_id}->{node_id}:{infile}",
                "source": source_id,
                "target": node_id,
                "sourceHandle": _out_handle_id(out_pattern),
                "targetHandle": _in_handle_id(infile),
            })
    return edges


# ---------------------------------------------------------------------------
# Rules -> .smk text
# ---------------------------------------------------------------------------

def rules_to_snakefile(rules: List[Rule]) -> str:
    """Emit Snakefile text from a list of rules (inverse of parsing).

    Args:
        rules: Rules to serialize.

    Returns:
        Snakefile text; re-parsing it with :func:`parse_snakefile` yields
        equivalent rules.
    """
    blocks: List[str] = []
    for rule in rules:
        lines = [f"rule {rule.name}:"]
        if rule.input:
            lines.append("    input:")
            lines.extend(_string_lines(rule.input))
        if rule.output:
            lines.append("    output:")
            lines.extend(_string_lines(rule.output))
        if rule.shell:
            lines.append("    shell:")
            lines.append(f'        "{rule.shell}"')
        blocks.append("\n".join(lines))
    return "\n\n".join(blocks) + "\n"


def _string_lines(items: List[str]) -> List[str]:
    """Render quoted, comma-separated file entries, one per line."""
    out = []
    for i, item in enumerate(items):
        comma = "," if i < len(items) - 1 else ""
        out.append(f'        "{item}"{comma}')
    return out


# ---------------------------------------------------------------------------
# Snakemake DOT (Graphviz) -> PyNodeWidget graph
#
# Snakemake emits its DAG as Graphviz DOT via ``snakemake --rulegraph`` (one node
# per rule) or ``snakemake --dag`` (one node per job). Both share the same simple
# shape, so a light regex parser (no graphviz/pydot dependency) is enough:
#
#     digraph snakemake_dag {
#         node[...];
#         0[label = "all", color = "0.00 0.6 0.85", style="rounded"];
#         1[label = "summary", color = "0.17 0.6 0.85", style="rounded"];
#         1 -> 0
#     }
# ---------------------------------------------------------------------------

# Default-attribute lines (``graph[...]``, ``node[...]``, ``edge[...]``) are not
# real nodes.
_DOT_DEFAULT_IDS = {"graph", "node", "edge"}
_DOT_NODE_RE = re.compile(r'^\s*("?[\w.]+"?)\s*\[(.*)\]\s*;?\s*$')
_DOT_EDGE_RE = re.compile(r'^\s*("?[\w.]+"?)\s*->\s*("?[\w.]+"?)')
_DOT_LABEL_RE = re.compile(r'label\s*=\s*"([^"]*)"')
_DOT_COLOR_RE = re.compile(r'color\s*=\s*"([^"]*)"')


@dataclass
class DotNode:
    """A node parsed from a Snakemake DOT graph.

    Attributes:
        id: The DOT node id (e.g. ``"0"``).
        label: The node label (rule name, possibly with wildcards).
        color: The raw DOT ``color`` attribute (an ``"H S V"`` triple), if any.
    """

    id: str
    label: str
    color: Optional[str] = None


def _unquote(token: str) -> str:
    return token[1:-1] if len(token) >= 2 and token[0] == token[-1] == '"' else token


def parse_dot(source: Union[str, "Path"]) -> Tuple[List[DotNode], List[Tuple[str, str]]]:
    """Parse a Snakemake DOT graph into nodes and directed edges.

    Args:
        source: A path to a ``.dot`` file, or the DOT text itself.

    Returns:
        ``(nodes, edges)`` where ``edges`` are ``(source_id, target_id)`` pairs
        following the DOT arrow direction (producer -> consumer).
    """
    text = str(source)
    try:
        if "\n" not in text and Path(text).exists():
            text = Path(text).read_text()
    except (OSError, ValueError):  # pragma: no cover - defensive
        pass

    nodes: List[DotNode] = []
    edges: List[Tuple[str, str]] = []
    seen: set = set()

    for line in text.splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("//"):
            continue

        edge_match = _DOT_EDGE_RE.match(stripped)
        if edge_match:
            edges.append((_unquote(edge_match.group(1)), _unquote(edge_match.group(2))))
            continue

        node_match = _DOT_NODE_RE.match(stripped)
        if node_match:
            node_id = _unquote(node_match.group(1))
            if node_id in _DOT_DEFAULT_IDS:
                continue
            attrs = node_match.group(2)
            label_match = _DOT_LABEL_RE.search(attrs)
            color_match = _DOT_COLOR_RE.search(attrs)
            label = label_match.group(1) if label_match else node_id
            # DOT labels use "\n" to wrap (rule name + wildcards); flatten it.
            label = label.replace("\\n", " · ").strip()
            if node_id not in seen:
                seen.add(node_id)
                nodes.append(DotNode(
                    id=node_id,
                    label=label,
                    color=color_match.group(1) if color_match else None,
                ))

    return nodes, edges


def _dot_color_to_hex(color: Optional[str]) -> Optional[str]:
    """Convert a DOT ``"H S V"`` color triple (each in 0..1) to a ``#rrggbb`` hex."""
    if not color:
        return None
    parts = color.split()
    if len(parts) != 3:
        return None
    try:
        h, s, v = (float(p) for p in parts)
    except ValueError:
        return None
    r, g, b = colorsys.hsv_to_rgb(h, s, v)
    return "#{:02x}{:02x}{:02x}".format(int(r * 255), int(g * 255), int(b * 255))


def dot_to_flow(
    nodes: List[DotNode],
    edges: List[Tuple[str, str]],
    widget: Optional[NodeFlowWidget] = None,
    x_step: int = 320,
    y_step: int = 140,
) -> NodeFlowWidget:
    """Build a :class:`NodeFlowWidget` graph from a parsed Snakemake DOT graph.

    Each DOT node becomes a graph node (header labeled with the rule, tinted with
    the rule's DOT color) with a single input and output handle; each DOT arrow
    becomes an edge. Nodes are positioned in dependency layers.

    Args:
        nodes: Parsed DOT nodes.
        edges: ``(source_id, target_id)`` pairs from :func:`parse_dot`.
        widget: Optional existing widget to populate.
        x_step: Horizontal spacing between dependency layers.
        y_step: Vertical spacing between nodes within a layer.

    Returns:
        The populated widget.
    """
    if widget is None:
        widget = NodeFlowWidget()

    # One node type per distinct label (keeps repeated jobs sharing a type).
    label_to_type: dict = {}
    for node in nodes:
        if node.label not in label_to_type:
            type_name = f"dot_{len(label_to_type)}"
            label_to_type[node.label] = type_name
            _register_dot_type(widget, type_name, node.label, node.color)

    positions = _layered_positions(
        [n.id for n in nodes], edges, x_step, y_step
    )

    widget.nodes = {
        node.id: {
            "type": label_to_type[node.label],
            "position": positions[node.id],
            "data": {},
        }
        for node in nodes
    }

    widget.edges = [
        {
            "id": f"{src}->{tgt}",
            "source": src,
            "target": tgt,
            "sourceHandle": "out",
            "targetHandle": "in",
        }
        for src, tgt in edges
    ]
    return widget


def _register_dot_type(
    widget: NodeFlowWidget, type_name: str, label: str, color: Optional[str]
) -> None:
    if any(t.get("type") == type_name for t in widget.node_templates):
        return
    bg = _dot_color_to_hex(color)
    widget.add_node_type(
        type_name=type_name,
        label=label,
        description=f"Snakemake DAG node '{label}'",
        grid_layout=create_three_column_grid(
            left_components=[
                LabeledHandle(id="in", label="", handle_type="input"),
            ],
            center_components=[
                HeaderComponent(id="header", label=label, bgColor=bg),
            ],
            right_components=[
                LabeledHandle(id="out", label="", handle_type="output"),
            ],
        ),
    )


def _layered_positions(
    node_ids: List[str],
    edges: List[Tuple[str, str]],
    x_step: int,
    y_step: int,
) -> dict:
    """Position nodes by dependency depth (longest path from a root)."""
    parents: dict = {nid: [] for nid in node_ids}
    for src, tgt in edges:
        if tgt in parents:
            parents[tgt].append(src)

    depth: dict = {}

    def compute(nid: str, seen: frozenset) -> int:
        if nid in depth:
            return depth[nid]
        if nid in seen:  # cycle guard (DAGs are acyclic)
            return 0
        ps = parents.get(nid, [])
        value = 0 if not ps else 1 + max(compute(p, seen | {nid}) for p in ps)
        depth[nid] = value
        return value

    for nid in node_ids:
        compute(nid, frozenset())

    positions: dict = {}
    row_in_layer: dict = {}
    for nid in node_ids:
        d = depth[nid]
        row = row_in_layer.get(d, 0)
        positions[nid] = {"x": d * x_step, "y": row * y_step}
        row_in_layer[d] = row + 1
    return positions


# ---------------------------------------------------------------------------
# Parameter sweeps: source nodes + rules -> graph and generated Snakefile
#
# A parameter sweep is a ParamSource (a wildcard and its values) feeding rules
# that carry that ``{wildcard}``. The graph is the source of truth: it maps to a
# Snakefile that lists the values and aggregates the swept outputs with expand().
# ---------------------------------------------------------------------------

_WILDCARD_RE = re.compile(r"\{(\w+)\}")


def _list_var(name: str) -> str:
    """Snakefile list-variable name for a sweep parameter ('sample' -> 'samples')."""
    return f"{name}s"


def _param_handle_id(name: str) -> str:
    return f"param:{name}"


def _wildcards_of_rule(rule: Rule, source_names: List[str]) -> List[str]:
    """Sweep parameter names whose ``{name}`` appears in the rule's files."""
    found: List[str] = []
    for f in list(rule.input) + list(rule.output):
        for match in _WILDCARD_RE.findall(f):
            if match in source_names and match not in found:
                found.append(match)
    return found


def _wildcards_in_file(filename: str, source_names: List[str]) -> List[str]:
    """Sweep wildcard names appearing in a single file pattern, in order."""
    found: List[str] = []
    for match in _WILDCARD_RE.findall(filename):
        if match in source_names and match not in found:
            found.append(match)
    return found


def sweep_to_snakefile(sources: List[ParamSource], rules: List[Rule]) -> str:
    """Generate a parametric Snakefile from sweep sources and rules.

    Each source becomes a list variable; a rule with **no output** (the target,
    e.g. ``all``) has its wildcard inputs wrapped in ``expand(...)`` over the
    matching source, producing a real Snakemake parameter sweep.
    """
    source_names = [s.name for s in sources]

    blocks: List[str] = []

    if sources:
        header = []
        for s in sources:
            values = ", ".join(f'"{v}"' for v in s.values)
            header.append(f"{_list_var(s.name)} = [{values}]")
        blocks.append("\n".join(header))

    for rule in rules:
        aggregate = not rule.output
        lines = [f"rule {rule.name}:"]
        if rule.input:
            lines.append("    input:")
            lines.extend(_sweep_input_lines(rule, source_names, aggregate))
        if rule.output:
            lines.append("    output:")
            lines.extend(_string_lines(rule.output))
        if rule.shell:
            lines.append("    shell:")
            lines.append(f'        "{rule.shell}"')
        blocks.append("\n".join(lines))

    return "\n\n".join(blocks) + "\n"


def _sweep_input_lines(
    rule: Rule, source_names: List[str], aggregate: bool
) -> List[str]:
    """Input lines for a rule; aggregator inputs with a wildcard use expand()."""
    files = _dedup(rule.input)
    out: List[str] = []
    for i, f in enumerate(files):
        comma = "," if i < len(files) - 1 else ""
        wildcards = _wildcards_in_file(f, source_names)
        if aggregate and wildcards:
            kwargs = ", ".join(f"{w}={_list_var(w)}" for w in wildcards)
            out.append(f'        expand("{f}", {kwargs}){comma}')
        else:
            out.append(f'        "{f}"{comma}')
    return out


def sweep_to_flow(
    sources: List[ParamSource],
    rules: List[Rule],
    widget: Optional[NodeFlowWidget] = None,
    x_step: int = 460,
    y_step: int = 220,
) -> NodeFlowWidget:
    """Build a graph of sweep source nodes feeding rule nodes.

    Each source is a node whose typed ``param`` output port connects to a matching
    ``param`` input port on every rule that uses its ``{wildcard}``. Rules keep
    their per-file typed ports and file-dependency edges (see :func:`rules_to_flow`).
    """
    if widget is None:
        widget = NodeFlowWidget()

    source_names = [s.name for s in sources]

    for source in sources:
        _register_source_type(widget, source)
    for rule in rules:
        _register_sweep_rule_type(widget, rule, source_names)

    file_edges = _build_edges(rules)
    edges = list(file_edges)

    consumers_of: dict = {}
    for source in sources:
        using = [r.name for r in rules if source.name in _wildcards_of_rule(r, source_names)]
        consumers_of[source.name] = using
        for rule_name in using:
            edges.append({
                "id": f"param:{source.name}->{rule_name}",
                "source": _source_node_id(source.name),
                "target": rule_name,
                "sourceHandle": "out",
                "targetHandle": _param_handle_id(source.name),
            })

    # Lay out the rules by their file dependencies only, then dock each source
    # next to the rule that introduces its wildcard (its earliest consumer), so
    # the source sits close to where its {wildcard} enters the pipeline.
    rule_ids = [r.name for r in rules]
    rule_pos = _layered_positions(
        rule_ids, [(f["source"], f["target"]) for f in file_edges], x_step, y_step
    )

    source_pos: dict = {}
    stacked: dict = {}
    for source in sources:
        sid = _source_node_id(source.name)
        using = consumers_of[source.name]
        if using:
            earliest = min(using, key=lambda n: (rule_pos[n]["x"], rule_pos[n]["y"]))
            k = stacked.get(earliest, 0)
            stacked[earliest] = k + 1
            source_pos[sid] = {
                "x": rule_pos[earliest]["x"] - int(x_step * 0.55),
                "y": rule_pos[earliest]["y"] - int(y_step * (0.85 + k)),
            }
        else:
            source_pos[sid] = {"x": -x_step, "y": 0}

    nodes = {}
    for source in sources:
        sid = _source_node_id(source.name)
        nodes[sid] = {
            "type": _source_type_name(source.name),
            "position": source_pos[sid],
            "data": {},
        }
    for rule in rules:
        nodes[rule.name] = {
            "type": _type_name(rule.name),
            "position": rule_pos[rule.name],
            "data": {},
        }
    widget.nodes = nodes
    widget.edges = edges
    return widget


def _source_node_id(name: str) -> str:
    return f"src_{name}"


def _source_type_name(name: str) -> str:
    return f"param_{name}"


def _register_source_type(widget: NodeFlowWidget, source: ParamSource) -> None:
    type_name = _source_type_name(source.name)
    if any(t.get("type") == type_name for t in widget.node_templates):
        return
    widget.add_node_type(
        type_name=type_name,
        label=source.name,
        icon="🎚️",
        description=f"Parameter sweep '{source.name}'",
        grid_layout=create_three_column_grid(
            center_components=[
                HeaderComponent(id="header", label=source.name, icon="🎚️", bgColor="#f59e0b"),
                TextField(id="values", label="values", value=", ".join(source.values)),
            ],
            right_components=[
                LabeledHandle(
                    id="out",
                    label=source.name,
                    handle_type="output",
                    dataType=_param_handle_id(source.name),
                ),
            ],
        ),
    )


def _register_sweep_rule_type(
    widget: NodeFlowWidget, rule: Rule, source_names: List[str]
) -> None:
    type_name = _type_name(rule.name)
    if any(t.get("type") == type_name for t in widget.node_templates):
        return

    param_handles = [
        LabeledHandle(
            id=_param_handle_id(w),
            label=w,
            handle_type="input",
            dataType=_param_handle_id(w),
            required=True,
        )
        for w in _wildcards_of_rule(rule, source_names)
    ]
    input_handles = [
        LabeledHandle(
            id=_in_handle_id(f),
            label=_basename(f),
            handle_type="input",
            dataType=data_type_of(f),
            required=True,
        )
        for f in _dedup(rule.input)
    ]
    output_handles = [
        LabeledHandle(
            id=_out_handle_id(f),
            label=_basename(f),
            handle_type="output",
            dataType=data_type_of(f),
        )
        for f in _dedup(rule.output)
    ]

    center = [HeaderComponent(id="header", label=rule.name, icon="🐍")]
    if rule.shell is not None:
        center.append(TextField(id="shell", label="shell", value=rule.shell))

    widget.add_node_type(
        type_name=type_name,
        label=rule.name,
        icon="🐍",
        description=f"Snakemake rule '{rule.name}'",
        grid_layout=create_three_column_grid(
            left_components=(param_handles + input_handles) or None,
            center_components=center,
            right_components=output_handles or None,
        ),
    )


# ---------------------------------------------------------------------------
# Rule registry: predefined, pydantic-configured rules as a drag-in palette
#
# The on-disk data layout this builds toward (see snakemake_paramspace.py):
#
#   sweep.csv      case,mesh,solver          (rows = combinations)
#   params.yaml    mesh: {fine: {...}, ...}  (named blocks per dimension)
#   configs/       {case}/{rule}.json        (materialized per-rule configs)
#
# In the editor, each RuleSpec is one node template; each parameter dimension
# is a "block" template whose fields come from the dimension's pydantic model.
# The user drags nodes in, edits block fields, autowire() draws the edges, and
# export_sweep() writes the runnable workflow directory.
# ---------------------------------------------------------------------------

def _cfg_handle_id(dim: str) -> str:
    return f"cfg:{dim}"


def _block_type_name(dim: str) -> str:
    return f"{BLOCK_TYPE_PREFIX}{dim}"


@dataclass
class RuleSpec:
    """A predefined Snakemake rule with pydantic-modelled parameters.

    Attributes:
        name: The rule name.
        input: Input file patterns (may contain wildcards like ``{case}``).
        output: Output file patterns.
        shell: The shell command, if any.
        params_models: Parameter dimensions used by this rule, mapped to the
            pydantic model that validates each dimension's blocks.
        icon: Sidebar / header icon.
    """

    name: str
    input: List[str] = field(default_factory=list)
    output: List[str] = field(default_factory=list)
    shell: Optional[str] = None
    params_models: Dict[str, type] = field(default_factory=dict)
    icon: str = "🐍"

    @property
    def dims(self) -> List[str]:
        """The parameter dimensions this rule uses, in declaration order."""
        return list(self.params_models)

    def config_input(
        self, configs_dir: str = "configs", case_wildcard: str = "case"
    ) -> Optional[str]:
        """The rule's materialized config pattern, or None without parameters."""
        if not self.params_models:
            return None
        return f"{configs_dir}/{{{case_wildcard}}}/{self.name}.json"

    def as_rule(
        self,
        configs_dir: Optional[str] = None,
        case_wildcard: str = "case",
    ) -> Rule:
        """Adapt to a plain :class:`Rule`.

        Args:
            configs_dir: If given, the materialized config JSON is prepended to
                the inputs (as in the generated Snakefile).
            case_wildcard: The case wildcard name.
        """
        inputs = list(self.input)
        if configs_dir is not None:
            cfg = self.config_input(configs_dir, case_wildcard)
            if cfg is not None:
                inputs.insert(0, cfg)
        return Rule(
            name=self.name, input=inputs, output=list(self.output), shell=self.shell
        )


@dataclass
class RuleRegistry:
    """The palette of predefined rules and their parameter dimensions.

    Attributes:
        models_module: Import path of the module holding the pydantic models
            (e.g. ``"myproject.models"``); the generated Snakefile imports the
            models from there at workflow runtime.
        rules: The registered rules, keyed by name.
        case_wildcard: The wildcard naming one sweep case.
    """

    models_module: str
    rules: Dict[str, RuleSpec] = field(default_factory=dict)
    case_wildcard: str = "case"

    def add(self, spec: RuleSpec) -> "RuleRegistry":
        """Register a rule (chainable). Raises on duplicate names."""
        if spec.name in self.rules:
            raise ValueError(f"rule '{spec.name}' is already registered")
        self.rules[spec.name] = spec
        return self

    def dims(self) -> Dict[str, type]:
        """All parameter dimensions across rules, mapped to their models.

        Raises:
            ValueError: If two rules bind the same dimension to different models.
        """
        out: Dict[str, type] = {}
        for spec in self.rules.values():
            for dim, model in spec.params_models.items():
                if dim in out and out[dim] is not model:
                    raise ValueError(
                        f"dimension '{dim}' is bound to conflicting models: "
                        f"{out[dim].__name__} and {model.__name__}"
                    )
                out[dim] = model
        return out


def registry_to_flow(
    registry: RuleRegistry, widget: Optional[NodeFlowWidget] = None
) -> NodeFlowWidget:
    """Register the palette: one template per rule, one per parameter dimension.

    The canvas starts empty — the user adds nodes from the sidebar. Connect
    them with :func:`autowire` and export with :func:`export_sweep`.
    """
    if widget is None:
        widget = NodeFlowWidget()
    for spec in registry.rules.values():
        _register_rule_spec_type(widget, spec)
    for dim, model in registry.dims().items():
        _register_block_type(widget, dim, model)
    return widget


def _register_rule_spec_type(widget: NodeFlowWidget, spec: RuleSpec) -> None:
    """Register a rule node type: config port per dimension + typed file ports."""
    type_name = _type_name(spec.name)
    if any(t.get("type") == type_name for t in widget.node_templates):
        return

    cfg_handles = [
        LabeledHandle(
            id=_cfg_handle_id(dim),
            label=dim,
            handle_type="input",
            dataType=_cfg_handle_id(dim),
            required=True,
        )
        for dim in spec.dims
    ]
    input_handles = [
        LabeledHandle(
            id=_in_handle_id(f),
            label=_basename(f),
            handle_type="input",
            dataType=data_type_of(f),
            required=True,
        )
        for f in _dedup(spec.input)
    ]
    output_handles = [
        LabeledHandle(
            id=_out_handle_id(f),
            label=_basename(f),
            handle_type="output",
            dataType=data_type_of(f),
        )
        for f in _dedup(spec.output)
    ]

    center = [HeaderComponent(id="header", label=spec.name, icon=spec.icon)]
    if spec.shell is not None:
        center.append(TextField(id="shell", label="shell", value=spec.shell))

    widget.add_node_type(
        type_name=type_name,
        label=spec.name,
        icon=spec.icon,
        description=f"Snakemake rule '{spec.name}'",
        grid_layout=create_three_column_grid(
            left_components=(cfg_handles + input_handles) or None,
            center_components=center,
            right_components=output_handles or None,
        ),
    )


def _register_block_type(widget: NodeFlowWidget, dim: str, model: type) -> None:
    """Register a grouped parameter-source node type for one dimension.

    The node is a view into the dimension's ``params.yaml`` section: an entry
    group whose entries are the named parameter blocks (dropdown to switch,
    add/rename/delete in the UI) and whose fields come from the pydantic
    model's JSON schema. The typed ``cfg:{dim}`` output port only connects to
    rules that declare the dimension.
    """
    type_name = _block_type_name(dim)
    if any(t.get("type") == type_name for t in widget.node_templates):
        return

    fields = json_schema_to_components(model.model_json_schema())
    default_entry = {f.id: f.value for f in fields}
    center = [
        HeaderComponent(id="header", label=dim, icon="🧩", bgColor="#8b5cf6"),
        EntryGroupComponent(
            id=GROUP_COMPONENT_ID,
            label="blocks",
            fields=fields,
            value=EntryGroupValue(selected=dim, entries={dim: default_entry}),
        ),
    ]

    widget.add_node_type(
        type_name=type_name,
        label=dim,
        icon="🧩",
        description=f"Parameter blocks for dimension '{dim}' ({model.__name__})",
        grid_layout=create_three_column_grid(
            center_components=center,
            right_components=[
                LabeledHandle(
                    id="out",
                    label=dim,
                    handle_type="output",
                    dataType=_cfg_handle_id(dim),
                ),
            ],
        ),
    )


def _canvas_nodes(widget: NodeFlowWidget, registry: RuleRegistry):
    """Resolve canvas nodes against the registry.

    Returns:
        ``(rule_nodes, block_nodes)`` where ``rule_nodes`` is a list of
        ``(node_id, RuleSpec)`` and ``block_nodes`` maps each dimension to its
        block node ids.

    Raises:
        ValueError: If a rule- or block-typed node is unknown to the registry.
    """
    dims = registry.dims()
    rule_nodes: List[Tuple[str, RuleSpec]] = []
    block_nodes: Dict[str, List[str]] = {}
    for node_id, node in widget.nodes.items():
        type_name = node.get("type", "")
        if type_name.startswith(RULE_TYPE_PREFIX):
            name = type_name[len(RULE_TYPE_PREFIX):]
            spec = registry.rules.get(name)
            if spec is None:
                raise ValueError(f"node '{node_id}': unknown rule type '{type_name}'")
            rule_nodes.append((node_id, spec))
        elif type_name.startswith(BLOCK_TYPE_PREFIX):
            dim = type_name[len(BLOCK_TYPE_PREFIX):]
            if dim not in dims:
                raise ValueError(
                    f"node '{node_id}': unknown parameter dimension '{dim}'"
                )
            block_nodes.setdefault(dim, []).append(node_id)
    return rule_nodes, block_nodes


def autowire(widget: NodeFlowWidget, registry: RuleRegistry) -> List[dict]:
    """Wire up the canvas: file-pattern edges plus block -> rule config edges.

    File edges connect matching output/input patterns across the rule nodes on
    the canvas (see :func:`build_pattern_edges`); config edges connect every
    parameter-block node to every rule node using its dimension. Sets
    ``widget.edges`` and returns them.
    """
    rule_nodes, block_nodes = _canvas_nodes(widget, registry)

    edges = build_pattern_edges(
        [spec.as_rule() for _, spec in rule_nodes],
        ids=[node_id for node_id, _ in rule_nodes],
    )

    for dim in sorted(block_nodes):
        for target_id, spec in rule_nodes:
            if dim not in spec.params_models:
                continue
            for source_id in block_nodes[dim]:
                edges.append({
                    "id": f"{source_id}->{target_id}:{_cfg_handle_id(dim)}",
                    "source": source_id,
                    "target": target_id,
                    "sourceHandle": "out",
                    "targetHandle": _cfg_handle_id(dim),
                })

    widget.edges = edges
    return edges


# ---------------------------------------------------------------------------
# Graph -> sweep data -> generated workflow directory
# ---------------------------------------------------------------------------

@dataclass
class SweepDesign:
    """The sweep read back out of the canvas.

    Attributes:
        rules: The distinct rules on the canvas (canvas order).
        blocks: params.yaml content: ``{dim: {block_name: params}}``.
        combinations: sweep.csv rows (each including the case column).
    """

    rules: List[RuleSpec]
    blocks: Dict[str, Dict[str, dict]]
    combinations: List[Dict[str, str]]


def flow_to_sweep(
    widget: NodeFlowWidget,
    registry: RuleRegistry,
    combinations: Optional[List[Dict[str, str]]] = None,
) -> SweepDesign:
    """Extract the sweep design from the canvas.

    Each source node's entry group (``widget.node_values``) holds the named
    parameter blocks of one dimension; every entry is validated against the
    dimension's pydantic model. Unless ``combinations`` is given, the sweep is
    the full cross product of the block names per dimension (case names join
    the block names in sorted-dimension order).

    Raises:
        ValueError: On unknown node types, empty/duplicate block names, failed
            pydantic validation, or a canvas rule whose dimension has no block.
    """
    dims = registry.dims()
    rule_nodes, block_nodes = _canvas_nodes(widget, registry)

    rules: List[RuleSpec] = []
    for _, spec in rule_nodes:
        if spec not in rules:
            rules.append(spec)

    blocks: Dict[str, Dict[str, dict]] = {}
    for dim in sorted(block_nodes):
        model = dims[dim]
        dim_blocks = blocks.setdefault(dim, {})
        for node_id in block_nodes[dim]:
            values = _to_plain_dict(widget.node_values.get(node_id, {}) or {})
            group = values.get(GROUP_COMPONENT_ID) or {}
            entries = group.get("entries") or {}
            if not entries:
                raise ValueError(
                    f"node '{node_id}' ({dim}): no parameter blocks defined"
                )
            for name, params in entries.items():
                name = str(name).strip()
                if not name:
                    raise ValueError(
                        f"node '{node_id}' ({dim}): the block name must not "
                        f"be empty"
                    )
                if name in dim_blocks:
                    raise ValueError(
                        f"duplicate block name '{name}' for dimension '{dim}'"
                    )
                try:
                    dim_blocks[name] = model.model_validate(
                        params or {}
                    ).model_dump(mode="json")
                except Exception as e:
                    raise ValueError(
                        f"node '{node_id}': block '{dim}.{name}' failed "
                        f"validation against {model.__name__}: {e}"
                    ) from e

    for _, spec in rule_nodes:
        for dim in spec.dims:
            if dim not in blocks:
                raise ValueError(
                    f"rule '{spec.name}' uses dimension '{dim}' but the canvas "
                    f"has no '{dim}' parameter block"
                )

    if combinations is None:
        dim_order = sorted(blocks)
        names_per_dim = [sorted(blocks[dim]) for dim in dim_order]
        combinations = []
        for combo in itertools.product(*names_per_dim):
            case = "_".join(combo) or "default"
            row = {registry.case_wildcard: case}
            row.update(zip(dim_order, combo))
            combinations.append(row)

    return SweepDesign(rules=rules, blocks=blocks, combinations=combinations)


def sources_from_params_yaml(
    widget: NodeFlowWidget,
    registry: RuleRegistry,
    path: Union[str, Path],
    *,
    x: int = 0,
    y: int = 0,
    x_step: int = 430,
) -> Dict[str, str]:
    """Seed one grouped source node per dimension from an existing params.yaml.

    Makes the canvas a real view into the file: every top-level key becomes
    (or updates) the source node ``src-{dim}``, whose entry group holds the
    dimension's named blocks (validated against the registry's pydantic
    models). Together with :func:`export_sweep` this round-trips params.yaml
    through the editor.

    Args:
        widget: The widget to populate (templates are registered if missing).
        registry: The rule registry providing the dimensions and models.
        path: Path to the params.yaml file.
        x: X position of the first source node.
        y: Y position of the source nodes.
        x_step: Horizontal spacing between source nodes.

    Returns:
        Mapping of dimension name to the node id created/updated for it.

    Raises:
        ValueError: If the file contains a dimension unknown to the registry,
            or an entry fails validation against its dimension's model.
    """
    from .snakemake_paramspace import read_params_yaml

    dims = registry.dims()
    data = read_params_yaml(path)

    node_ids: Dict[str, str] = {}
    new_nodes = dict(widget.nodes)
    for i, (dim, entries) in enumerate(data.items()):
        model = dims.get(dim)
        if model is None:
            raise ValueError(
                f"params file {path}: unknown dimension '{dim}' "
                f"(registry dimensions: {sorted(dims)})"
            )
        validated: Dict[str, dict] = {}
        for name, params in entries.items():
            try:
                validated[name] = model.model_validate(
                    params or {}
                ).model_dump(mode="json")
            except Exception as e:
                raise ValueError(
                    f"params file {path}: '{dim}.{name}' failed validation "
                    f"against {model.__name__}: {e}"
                ) from e

        _register_block_type(widget, dim, model)
        node_id = f"src-{dim}"
        node_ids[dim] = node_id
        if node_id not in new_nodes:
            new_nodes[node_id] = {
                "type": _block_type_name(dim),
                "position": {"x": x + i * x_step, "y": y},
                "data": {},
            }
        widget.node_values[node_id] = {
            GROUP_COMPONENT_ID: {
                "selected": next(iter(validated), ""),
                "entries": validated,
            }
        }
    widget.nodes = new_nodes
    return node_ids


def _rule_dims_of(design: SweepDesign) -> Dict[str, List[str]]:
    """Materialization map: rule name -> sorted dimensions (parametrized only)."""
    return {
        spec.name: sorted(spec.params_models)
        for spec in design.rules
        if spec.params_models
    }


def paramspace_snakefile(
    registry: RuleRegistry,
    design: SweepDesign,
    *,
    sweep_csv: str = "sweep.csv",
    params_yaml: str = "params.yaml",
    configs_dir: str = "configs",
) -> str:
    """Generate the Snakefile for a sweep design.

    The preamble imports :class:`~pynodewidget.snakemake_paramspace.YamlParamSpace`
    and the pydantic models from ``registry.models_module`` (that module must be
    importable in the workflow environment, e.g. via installation or
    ``PYTHONPATH``), builds the space, and materializes the per-case configs at
    parse time. Parametrized rules read their materialized JSON as their first
    input; aggregator rules (no output) expand case-wildcard inputs over
    ``space.cases``.
    """
    case = registry.case_wildcard
    used_dims: Dict[str, type] = {}
    for spec in design.rules:
        used_dims.update(spec.params_models)

    lines: List[str] = [
        "from pynodewidget.snakemake_paramspace import YamlParamSpace",
    ]
    model_names = sorted({model.__name__ for model in used_dims.values()})
    if model_names:
        lines.append(f"from {registry.models_module} import {', '.join(model_names)}")
    lines.append("")

    models_arg = ", ".join(
        f'"{dim}": {model.__name__}' for dim, model in sorted(used_dims.items())
    )
    space_args = f'"{sweep_csv}", "{params_yaml}", models={{{models_arg}}}'
    if case != "case":
        space_args += f', case_col="{case}"'
    lines.append(f"space = YamlParamSpace({space_args})")
    rule_dims = _rule_dims_of(design)
    if rule_dims:
        lines.append(f'space.materialize({rule_dims!r}, out_dir="{configs_dir}")')
    # The list variable _sweep_input_lines references in expand() calls.
    lines.append(f"{_list_var(case)} = space.cases")

    blocks = ["\n".join(lines)]

    ordered = sorted(design.rules, key=lambda spec: bool(spec.output))
    for spec in ordered:
        aggregate = not spec.output
        rule = spec.as_rule(configs_dir=configs_dir, case_wildcard=case)
        rule_lines = [f"rule {rule.name}:"]
        if rule.input:
            rule_lines.append("    input:")
            rule_lines.extend(_sweep_input_lines(rule, [case], aggregate))
        if rule.output:
            rule_lines.append("    output:")
            rule_lines.extend(_string_lines(rule.output))
        if rule.shell:
            rule_lines.append("    shell:")
            rule_lines.append(f'        "{rule.shell}"')
        blocks.append("\n".join(rule_lines))

    return "\n\n".join(blocks) + "\n"


@dataclass
class SweepExport:
    """The files written by :func:`export_sweep`."""

    sweep_csv: Path
    params_yaml: Path
    snakefile: Path
    configs: List[Path]


def export_sweep(
    widget: NodeFlowWidget,
    registry: RuleRegistry,
    out_dir: Union[str, Path],
    *,
    combinations: Optional[List[Dict[str, str]]] = None,
    materialize: bool = True,
) -> SweepExport:
    """Write the runnable workflow directory for the current canvas.

    Extracts the sweep design (:func:`flow_to_sweep`) and writes ``sweep.csv``,
    ``params.yaml``, and the ``Snakefile`` into ``out_dir``; with
    ``materialize=True`` the per-case configs are also written so the directory
    is immediately runnable with ``snakemake``.
    """
    from .snakemake_paramspace import (
        YamlParamSpace,
        write_params_yaml,
        write_sweep_csv,
    )

    design = flow_to_sweep(widget, registry, combinations=combinations)
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)

    sweep_path = out / "sweep.csv"
    params_path = out / "params.yaml"
    snakefile_path = out / "Snakefile"

    write_sweep_csv(sweep_path, design.combinations, case_col=registry.case_wildcard)
    write_params_yaml(params_path, design.blocks)
    snakefile_path.write_text(paramspace_snakefile(registry, design))

    configs: List[Path] = []
    if materialize:
        used_models = {
            dim: model
            for spec in design.rules
            for dim, model in spec.params_models.items()
        }
        space = YamlParamSpace(
            sweep_path, params_path, models=used_models,
            case_col=registry.case_wildcard,
        )
        configs = space.materialize(_rule_dims_of(design), out_dir=out / "configs")

    return SweepExport(
        sweep_csv=sweep_path,
        params_yaml=params_path,
        snakefile=snakefile_path,
        configs=configs,
    )
