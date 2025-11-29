import marimo

__generated_with = "0.18.0"
app = marimo.App(width="medium")

with app.setup:
    import marimo as mo
    from pynodewidget import NodeFlowWidget
    from pynodewidget.grid_layouts import create_three_column_grid
    from pynodewidget.models import ButtonHandle, NumberField, LabeledHandle, TextField, ProgressField, ButtonComponent


@app.cell
def _():

    # Create widget with v2.0 Simplified API
    # NOTE: If you updated the code, restart the kernel to get the latest version
    widget = NodeFlowWidget()

    # Create grid layout using helper function
    grid_layout = create_three_column_grid(
        left_components=[
            LabeledHandle(id="input", handle_type="input")
        ],
        center_components=[
            NumberField(id="value", value=50, min=0, max=100),
            TextField(id="name", value="Processor"),
            ProgressField(id="progress",min=0,max=100,value=5),
            ButtonComponent(id="button",action="asda")
        ],
        right_components=[
            LabeledHandle(id="output", handle_type="output")
        ]
    )

    widget.add_node_type(
        type_name="processor",
        label="Processor",
        icon="⚙️",
        grid_layout=grid_layout
    )
    widget = mo.ui.anywidget(widget)
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
def _():
    return


if __name__ == "__main__":
    app.run()
