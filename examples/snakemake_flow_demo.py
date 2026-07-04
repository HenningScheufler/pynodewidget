#%%
"""Render a Snakemake workflow as a PyNodeWidget node graph.

This demo parses a small — but realistic — multi-rule Snakemake workflow
(``examples/workflow.smk``) into rules and builds an interactive node graph where
each rule is a node and file dependencies become edges.

The workflow has a fan-out (``clean`` feeds both ``analyze`` and ``plot``) and a
fan-in (``analyze`` + ``plot`` feed ``summary``), plus a target ``all`` rule::

    download -> clean -> analyze -\
                     \-> plot  ----+-> summary -> all

Run it in marimo/Jupyter to interact with the graph, or as a plain script to
export a standalone HTML / JSON. See ``screenshot_snakemake_flow.py`` for
rendering the exported HTML to a PNG with Playwright.
"""

from pathlib import Path

from pynodewidget.snakemake_flow import (
    parse_snakefile,
    rules_to_flow,
    rules_to_snakefile,
)

WORKFLOW = Path(__file__).parent / "workflow.smk"

rules = parse_snakefile(WORKFLOW)
print(f"Parsed {len(rules)} rules: {', '.join(r.name for r in rules)}")

# Build the node graph — nodes are laid out by dependency depth.
widget = rules_to_flow(rules)
widget.height = "640px"
print(f"Graph: {len(widget.nodes)} nodes, {len(widget.edges)} edges")

# In marimo/Jupyter this line renders the interactive widget.
widget

#%%
# Export a standalone, self-contained HTML file (viewable in any browser).
widget.export_html(
    "snakemake_flow.html",
    title="Snakemake Workflow",
    interactive=True,
    embed_assets=True,
)
print("Wrote snakemake_flow.html")

# Export the graph as JSON.
widget.export_json("snakemake_flow.json")
print("Wrote snakemake_flow.json")

#%%
# Round-trip check: the graph's rules serialize back to Snakefile text.
print(rules_to_snakefile(rules))

# %%
