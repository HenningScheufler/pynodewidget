"""Simple marimo notebook for integration testing with Playwright.

Tests a basic Marimo slider component to demonstrate Playwright + Marimo integration.
"""

import marimo

__generated_with = "0.18.0"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo
    return (mo,)


@app.cell
def _(mo):
    mo.md("""
    # Simple Slider Test
    """)
    return


@app.cell
def _(mo):
    # Create a simple slider using marimo
    slider = mo.ui.slider(start=0, stop=100, value=25, label="Temperature")
    slider
    return (slider,)


@app.cell
def _(mo, slider):
    mo.md(f"""
    Current value: **{slider.value}**
    """)
    return


if __name__ == "__main__":
    app.run()
