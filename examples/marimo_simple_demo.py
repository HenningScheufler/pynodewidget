import marimo

__generated_with = "0.18.0"
app = marimo.App(width="medium")

with app.setup:
    import marimo as mo
    from pynodewidget import NodeFlowWidget
    from pynodewidget.grid_layouts import create_three_column_grid
    from pynodewidget.models import ButtonHandle, NumberField, LabeledHandle, TextField, ProgressField, ButtonComponent
    import json
    import time


@app.cell
def _(widget):
    widget.node_values
    return


@app.cell
def _():
    return


@app.cell
def _():
    widget = NodeFlowWidget.from_json("workflow.json")
    widget = mo.ui.anywidget(widget)
    widget
    return (widget,)


@app.cell
def _():
    slider = mo.ui.slider(start=0,stop=100,step=1)
    slider
    return (slider,)


@app.cell
def _(slider, widget):
    for node_id in widget.nodes:
        widget.values[node_id]["value"] = slider.value
    return


@app.function
def some_function(change):
    print(f"{change.keys()=}")
    print(f"{change["old"]=}")
    print(f"some_function")
    print(f"{change=}")


@app.cell
def _(widget):
    widget.observe(some_function, "node_values")
    return


@app.cell
def _():
    return


if __name__ == "__main__":
    app.run()
