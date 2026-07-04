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

import re
from dataclasses import dataclass, field
from pathlib import Path
import colorsys
from typing import List, Optional, Tuple, Union

from .widget import NodeFlowWidget
from .grid_layouts import create_three_column_grid
from .models import HeaderComponent, LabeledHandle, TextField

__all__ = [
    "Rule",
    "parse_snakefile",
    "rules_to_flow",
    "rules_to_snakefile",
    "data_type_of",
    "DotNode",
    "parse_dot",
    "dot_to_flow",
]

#: Prefix for the per-rule node type (keeps rule names clear of reserved names
#: like ``input``/``output``).
RULE_TYPE_PREFIX = "rule_"


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
    edges: List[dict] = []
    producers = {out: rule.name for rule in rules for out in rule.output}
    for consumer in rules:
        for infile in _dedup(consumer.input):
            producer = producers.get(infile)
            if producer is None or producer == consumer.name:
                continue
            edges.append({
                "id": f"{producer}->{consumer.name}:{infile}",
                "source": producer,
                "target": consumer.name,
                "sourceHandle": _out_handle_id(infile),
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
