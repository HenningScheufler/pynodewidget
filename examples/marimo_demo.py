"""Marimo Demo with GridBuilder and Multiple Node Types

This demo showcases:
- Creating 3 different node types using GridBuilder
- Input Node (data source)
- Processing Node (transformation)
- Output Node (data sink)
"""

import marimo

__generated_with = "0.18.1"
app = marimo.App(width="full")


@app.cell
def _():
    import marimo as mo
    return (mo,)


@app.cell
def _(mo):
    mo.md("""
    # Node Flow Widget Demo with GridBuilder

    This demo shows how to create different node types using GridBuilder:
    - 🟢 **Input Node**: Data source with output handles
    - 🔵 **Processing Node**: Three-column layout with inputs, controls, and outputs
    - 🔴 **Output Node**: Data sink with input handles
    """)
    return


@app.cell
def _():
    from pynodewidget import NodeFlowWidget, GridBuilder
    from pynodewidget.models import (
        LabeledHandle, TextField, NumberField, BaseHandle,
        BoolField, SelectField, HeaderComponent, ButtonComponent,
        ProgressField, ButtonHandle
    )
    import json
    import time
    return (
        BaseHandle,
        BoolField,
        GridBuilder,
        HeaderComponent,
        LabeledHandle,
        NodeFlowWidget,
        NumberField,
        SelectField,
        TextField,
        time,
    )


@app.cell
def _(
    BaseHandle,
    BoolField,
    GridBuilder,
    HeaderComponent,
    LabeledHandle,
    NodeFlowWidget,
    NumberField,
    SelectField,
    TextField,
    mo,
):
    # Create the main widget
    widget = NodeFlowWidget()

    # Node Type 1: Input Node (Data Source)
    # Simple node with configuration and output handles
    grid_input_node = (
        GridBuilder.preset("simple_node")
        .slot("header", [
            HeaderComponent(id="header", label="Data Source", icon="📥", bgColor="#10b981")
        ])
        .slot("center", [
            TextField(id="source_name", value="DataSet-001"),
            SelectField(id="source_type", value="csv", options=["csv", "json", "parquet"]),
            NumberField(id="sample_size", value=1000, min=100, max=10000),
        ])
        .slot("output", [
            BaseHandle(id="data_out", handle_type="output", label="Data"),
            BaseHandle(id="metadata_out", handle_type="output", label="Metadata"),
        ])
        .gap("8px")
        .build()
    )

    widget.add_node_type(
        type_name="input_node",
        label="Input Node",
        icon="📥",
        grid_layout=grid_input_node
    )

    # Node Type 2: Processing Node (Three-Column Layout)
    # Full-featured processor with inputs, controls, and outputs
    grid_processing_node = (
        GridBuilder.preset("three_column")
        .slot("header", [
            HeaderComponent(id="header", label="Data Processor", icon="⚙️", bgColor="#3b82f6")
        ])
        .slot("left", [
            LabeledHandle(id="data_in", handle_type="input", label="Data Input"),
            LabeledHandle(id="config_in", handle_type="input", label="Config"),
        ])
        .slot("center", [
            TextField(id="operation", value="transform"),
            SelectField(id="method", value="standard", options=["standard", "advanced", "custom"]),
            NumberField(id="threshold", value=50, min=0, max=100),
            BoolField(id="enable_cache", value=True),
        ])
        .slot("right", [
            LabeledHandle(id="result_out", handle_type="output", label="Result"),
            LabeledHandle(id="logs_out", handle_type="output", label="Logs"),
        ])
        .slot("footer", [
            BoolField(id="verbose_mode", value=False),
        ])
        .build()
    )

    widget.add_node_type(
        type_name="processing_node",
        label="Processing Node",
        icon="⚙️",
        grid_layout=grid_processing_node
    )

    # Node Type 3: Output Node (Data Sink)
    # Simple node with input handles and export configuration
    grid_output_node = (
        GridBuilder.preset("simple_node")
        .slot("header", [
            HeaderComponent(id="header", label="Data Export", icon="📤", bgColor="#ef4444")
        ])
        .slot("input", [
            BaseHandle(id="data_in", handle_type="input", label="Data"),
            BaseHandle(id="format_in", handle_type="input", label="Format"),
        ])
        .slot("center", [
            TextField(id="output_path", value="/output/results.csv"),
            SelectField(id="format", value="csv", options=["csv", "json", "parquet", "xlsx"]),
            BoolField(id="compress", value=False),
        ])
        .gap("8px")
        .build()
    )

    widget.add_node_type(
        type_name="output_node",
        label="Output Node",
        icon="📤",
        grid_layout=grid_output_node
    )
    widget = mo.ui.anywidget(widget)
    widget
    return (widget,)


@app.cell
def _(mo):
    mo.md("""
    ## Node Values Monitor
    """)
    return


@app.cell
def _(widget):
    # Monitor node values
    widget.node_values
    return


@app.cell
def _(mo):
    mo.md("""
    ## Edge Connections Monitor
    """)
    return


@app.cell
def _(widget):
    # Monitor edges
    widget.edges
    return


@app.cell
def _(mo):
    mo.md("""
    ## Interactive Control

    Use this slider to update values across all nodes:
    """)
    return


@app.cell
def _(mo):
    slider = mo.ui.slider(start=0, stop=100, step=1, value=50, label="Global Threshold")
    slider
    return (slider,)


@app.cell
def _(slider, widget):
    # Update threshold values in all nodes
    for node_id in widget.nodes:
        if "threshold" in widget.values[node_id]:
            widget.values[node_id]["threshold"] = slider.value
        if "sample_size" in widget.values[node_id]:
            widget.values[node_id]["sample_size"] = slider.value * 100
    return


@app.cell
def _(mo):
    mo.md("""
    ## Export Options

    Export your workflow to different formats:
    """)
    return


@app.cell
def _(widget):
    # Export to JSON and YAML
    widget.export("workflow.json")      # JSON
    widget.export("workflow.yaml")      # YAML
    return


@app.cell
def _(mo):
    mo.md("""
    ### Export to Images
    """)
    return


@app.cell
def _(time, widget):
    # Export to images (with small delay for rendering)
    time.sleep(1)
    widget.export_image(filename="workflow.png")
    widget.export_image(filename="workflow.jpeg")
    return


if __name__ == "__main__":
    app.run()
