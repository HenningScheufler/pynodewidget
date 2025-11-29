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
def _():
    widget = NodeFlowWidget.from_json("workflow.json")
    widget
    return (widget,)


@app.cell
def _(widget):
    widget.node_values
    return


@app.cell
def _(widget):
    widget.edges
    return


@app.cell
def _():
    slider = mo.ui.slider(start=0,stop=100,step=1)
    slider
    return (slider,)


@app.cell
def _(slider, widget):
    for node_id in widget.nodes:
        widget.values[node_id]["value"] = slider.value
        widget.values[node_id]["progress"] = widget.values[node_id]["button"]*10
    return


@app.cell
def _(widget):
    time.sleep(1)
    widget.export_image(filename="workflow.png")
    return


@app.cell
def _(widget):
    time.sleep(1)
    widget.export_image(filename="workflow.jpeg")
    return


@app.cell
def _():
    import os
    return (os,)


@app.cell
def _(os):
    os.listdir()
    return


@app.cell
def _(widget):
    widget.export("workflow.json")      # JSON
    widget.export("workflow.yaml")      # YAML
    return


if __name__ == "__main__":
    app.run()
