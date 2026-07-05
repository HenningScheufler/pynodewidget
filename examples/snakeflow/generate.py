"""Build a parameter-sweep Snakemake workflow with the node editor.

Demonstrates the registry -> canvas -> workflow round trip:

1. A :class:`RuleRegistry` declares predefined rules (``simulate``, ``post``,
   ``all``) whose parameters are pydantic models (see ``models.py``).
2. ``registry_to_flow`` registers the palette; the canvas holds the rules plus
   ONE grouped source node per dimension whose entry group (dropdown +
   add/rename/delete) is a live view into that dimension's params.yaml section.
3. ``autowire`` connects file patterns and source -> rule config ports.
4. ``export_sweep`` writes ``sweep.csv``, ``params.yaml``, ``Snakefile`` and
   the materialized ``configs/{case}/{rule}.json`` files into this directory.
5. ``snakemake --dag`` renders the expanded job DAG, which is imported back via
   ``parse_dot``/``dot_to_flow``.

With the optional ``playwright`` package installed (plus
``python -m playwright install chromium``), the script also captures
``canvas.png`` and ``dag.png``. Run from anywhere::

    python examples/snakeflow/generate.py

The exported workflow is directly runnable::

    cd examples/snakeflow && PYTHONPATH=. snakemake -c1
"""

import os
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).parent
sys.path.insert(0, str(HERE))

from models import MaterialCfg, MeshCfg, SolverCfg  # noqa: E402

from pynodewidget.snakemake_flow import (  # noqa: E402
    RuleRegistry,
    RuleSpec,
    autowire,
    dot_to_flow,
    export_sweep,
    parse_dot,
    registry_to_flow,
)

VIEWPORT = {"width": 1820, "height": 960}
# The expanded DAG is tall and narrow (27 case rows), so use a portrait frame.
DAG_VIEWPORT = {"width": 1200, "height": 3000}


def build_registry() -> RuleRegistry:
    return (
        RuleRegistry(models_module="models")
        .add(RuleSpec(
            "simulate",
            output=["results/{case}/out.dat"],
            shell="cp {input[0]} {output}",
            params_models={
                "mesh": MeshCfg, "solver": SolverCfg, "material": MaterialCfg,
            },
        ))
        .add(RuleSpec(
            "post",
            input=["results/{case}/out.dat"],
            output=["results/{case}/report.txt"],
            shell="cat {input} > {output}",
            params_models={"solver": SolverCfg},
        ))
        .add(RuleSpec("all", input=["results/{case}/report.txt"]))
    )


def build_canvas(registry: RuleRegistry):
    """The palette plus a hand-placed sweep: ONE grouped source node per
    dimension, each a view into its params.yaml section (3 x 3 x 3 = 27 cases).
    """
    widget = registry_to_flow(registry)
    widget.height = f"{VIEWPORT['height']}px"

    widget.nodes = {
        "src-mesh": {"type": "block_mesh", "position": {"x": 0, "y": 0}, "data": {}},
        "src-material": {"type": "block_material", "position": {"x": 0, "y": 330}, "data": {}},
        "src-solver": {"type": "block_solver", "position": {"x": 0, "y": 660}, "data": {}},
        "simulate": {"type": "rule_simulate", "position": {"x": 560, "y": 300}, "data": {}},
        "post": {"type": "rule_post", "position": {"x": 1120, "y": 430}, "data": {}},
        "all": {"type": "rule_all", "position": {"x": 1680, "y": 430}, "data": {}},
    }
    widget.node_values = {
        "src-mesh": {"entries": {"selected": "fine", "entries": {
            "coarse": {"nx": 50, "ny": 50},
            "medium": {"nx": 100, "ny": 100},
            "fine": {"nx": 200, "ny": 200},
        }}},
        "src-material": {"entries": {"selected": "water", "entries": {
            "air": {"density": 1.2, "viscosity": 1.8e-5},
            "water": {"density": 1000.0, "viscosity": 1e-3},
            "oil": {"density": 900.0, "viscosity": 0.05},
        }}},
        "src-solver": {"entries": {"selected": "fast", "entries": {
            "fast": {"tol": 1e-3, "scheme": "explicit"},
            "balanced": {"tol": 1e-6, "scheme": "implicit"},
            "exact": {"tol": 1e-9, "scheme": "implicit"},
        }}},
    }
    autowire(widget, registry)
    return widget


def render_dag(widget=None):
    """Run ``snakemake --dag`` on the exported workflow and import the DOT."""
    env = {**os.environ, "PYTHONPATH": str(HERE)}
    result = subprocess.run(
        ["snakemake", "--dag"], cwd=HERE, env=env, capture_output=True, text=True
    )
    if result.returncode != 0:
        raise RuntimeError(f"snakemake --dag failed:\n{result.stderr}")
    (HERE / "dag.dot").write_text(result.stdout)
    nodes, edges = parse_dot(result.stdout)
    dag = dot_to_flow(nodes, edges, widget=widget)
    dag.height = f"{DAG_VIEWPORT['height']}px"
    return dag


def screenshot(
    widget, out_png: Path, node_count: int, title: str, viewport=VIEWPORT
) -> bool:
    """Export standalone HTML and capture it with headless Chromium."""
    out_html = out_png.with_suffix(".html")
    widget.export_html(
        str(out_html), title=title, interactive=True, embed_assets=True
    )
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print(f"playwright not installed - wrote {out_html}, skipped {out_png}")
        return False

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport=viewport, device_scale_factor=2)
        page.goto(out_html.as_uri())
        page.wait_for_selector(".react-flow__node")
        page.wait_for_function(
            f"document.querySelectorAll('.react-flow__node').length === {node_count}"
        )
        page.wait_for_timeout(800)
        page.screenshot(path=str(out_png))
        browser.close()
    print(f"Wrote {out_png}")
    return True


def main() -> None:
    registry = build_registry()
    widget = build_canvas(registry)

    export = export_sweep(widget, registry, HERE)
    print(f"Wrote {export.sweep_csv}, {export.params_yaml}, {export.snakefile}")
    print(f"Materialized {len(export.configs)} config files")

    screenshot(widget, HERE / "canvas.png", len(widget.nodes), "Snakeflow canvas")

    dag = render_dag()
    screenshot(
        dag, HERE / "dag.png", len(dag.nodes), "Snakeflow DAG",
        viewport=DAG_VIEWPORT,
    )


if __name__ == "__main__":
    main()
