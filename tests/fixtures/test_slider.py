"""Simple marimo notebook for integration testing with Playwright."""
import marimo

__generated_with = "0.9.14"
app = marimo.App(width="medium")


@app.cell
def __():
    import marimo as mo
    return mo,


@app.cell
def __(mo):
    # Create a simple slider using marimo
    slider = mo.ui.slider(start=0, stop=100, value=50, label="Test Slider")
    slider
    return slider,


@app.cell
def __(mo, slider):
    mo.md(f"Current slider value: **{slider.value}**")
    return


@app.cell
def __(slider):
    # Display the current value for testing
    slider_output = slider.value
    return slider_output,


if __name__ == "__main__":
    app.run()
