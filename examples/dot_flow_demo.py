#%%
"""Visualize a Snakemake DAG from its Graphviz DOT output.

Snakemake can emit its dependency graph as DOT::

    snakemake --rulegraph > workflow.dot      # one node per rule
    snakemake --dag       > workflow.dot      # one node per job

This demo parses ``examples/workflow.dot`` and renders it as a PyNodeWidget graph
where each DOT node becomes a colored node (using the rule's DOT color) and each
arrow becomes an edge.

Run in marimo/Jupyter to interact, or as a script to export standalone HTML/JSON.
"""

from pathlib import Path

from pynodewidget.snakemake_flow import parse_dot, dot_to_flow

DOT = Path(__file__).parent / "workflow.dot"

nodes, edges = parse_dot(DOT)
print(f"Parsed {len(nodes)} nodes, {len(edges)} edges from {DOT.name}")

widget = dot_to_flow(nodes, edges)
widget.height = "640px"

# In marimo/Jupyter this line renders the interactive graph.
widget

#%%
widget.export_html(
    "dot_flow.html",
    title="Snakemake DAG (from DOT)",
    interactive=True,
    embed_assets=True,
)
widget.export_json("dot_flow.json")
print("Wrote dot_flow.html and dot_flow.json")

# %%
