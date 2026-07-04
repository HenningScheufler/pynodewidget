"""Render the Snakemake-workflow graph to a PNG using Playwright.

Parses ``examples/workflow.smk`` into a PyNodeWidget graph, exports a
self-contained interactive HTML file, then loads that HTML in a headless
Chromium (via Playwright) and screenshots it.

Requires the optional ``playwright`` package and its browser::

    uv pip install playwright
    python -m playwright install chromium

Usage::

    python examples/screenshot_snakemake_flow.py [output.png]
"""

import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

from pynodewidget.snakemake_flow import parse_snakefile, rules_to_flow

HERE = Path(__file__).parent
WORKFLOW = HERE / "workflow.smk"

# Match the viewport to the browser window so the exported graph fills the frame.
VIEWPORT = {"width": 1820, "height": 700}


def build_html(out_html: Path) -> None:
    """Parse the workflow and export a standalone interactive HTML file."""
    rules = parse_snakefile(WORKFLOW)
    widget = rules_to_flow(rules)
    widget.height = f"{VIEWPORT['height']}px"
    widget.export_html(
        str(out_html),
        title="Snakemake Workflow",
        interactive=True,
        embed_assets=True,
    )


def screenshot(out_html: Path, out_png: Path) -> None:
    """Open the HTML in headless Chromium and capture a PNG."""
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport=VIEWPORT, device_scale_factor=2)
        page.goto(out_html.as_uri())
        # Wait until ReactFlow has rendered every rule node.
        page.wait_for_selector(".react-flow__node")
        page.wait_for_function(
            "document.querySelectorAll('.react-flow__node').length === 6"
        )
        # Let the on-load fit-view settle before capturing.
        page.wait_for_timeout(800)
        page.screenshot(path=str(out_png))
        browser.close()


def main() -> None:
    out_png = Path(sys.argv[1]) if len(sys.argv) > 1 else HERE / "snakemake_flow.png"
    out_html = out_png.with_suffix(".html")
    build_html(out_html)
    screenshot(out_html, out_png)
    print(f"Wrote {out_html}")
    print(f"Wrote {out_png}")


if __name__ == "__main__":
    main()
