# %%
"""GridBuilder Preset Examples for VS Code

This demo shows how to use GridBuilder presets to create layouts with minimal code.
Available presets: three_column, simple_node
"""

from pynodewidget import NodeFlowWidget, GridBuilder
from pynodewidget.models import (
    LabeledHandle, ButtonHandle, TextField, NumberField, 
    BoolField, SelectField, HeaderComponent, DividerComponent
)

widget = NodeFlowWidget()

# %%
# Example 1: Three Column Preset (Classic Input-Process-Output)
# Perfect for simple processors with inputs, parameters, and outputs

grid_three_column = (
    GridBuilder.preset("three_column")
    .slot("left", [
        LabeledHandle(id="data_in", handle_type="input", label="Data Input"),
        LabeledHandle(id="config_in", handle_type="input", label="Config"),
    ])
    .slot("center", [
        TextField(id="name", value="Data Processor"),
        NumberField(id="threshold", value=50, min=0, max=100),
        BoolField(id="enabled", value=True),
    ])
    .slot("right", [
        LabeledHandle(id="result_out", handle_type="output", label="Result"),
        LabeledHandle(id="log_out", handle_type="output", label="Logs"),
    ])
    .build()
)

widget.add_node_type(
    type_name="three_col_processor",
    label="Three Column Processor",
    icon="⚙️",
    grid_layout=grid_three_column
)

# %%
# Example 2: Three Column with Header and Footer
# Best for complex nodes with header, three-column layout, and footer

grid_three_column_full = (
    GridBuilder.preset("three_column")
    .slot("header", [
        HeaderComponent(id="header", label="Advanced Processor", icon="🚀")
    ])
    .slot("left", [
        ButtonHandle(id="input1", handle_type="input", label="Input 1"),
        ButtonHandle(id="input2", handle_type="input", label="Input 2"),
    ])
    .slot("center", [
        TextField(id="operation", value="transform"),
        SelectField(id="mode", value="fast", options=["fast", "accurate", "balanced"]),
        NumberField(id="iterations", value=100, min=1, max=1000),
    ])
    .slot("right", [
        ButtonHandle(id="output1", handle_type="output", label="Primary"),
        ButtonHandle(id="output2", handle_type="output", label="Secondary"),
    ])
    .slot("footer", [
        BoolField(id="verbose", value=False),
    ])
    .build()
)

widget.add_node_type(
    type_name="three_column_full",
    label="Three Column with Header/Footer",
    icon="🏛️",
    grid_layout=grid_three_column_full
)

# %%
# Example 3: Simple Node Preset (Minimal Layout)
# Perfect for basic nodes with header, single field, and input/output handles

grid_simple_node = (
    GridBuilder.preset("simple_node")
    .slot("header", [
        HeaderComponent(id="header", label="Transform Node", icon="🔄", bgColor="#4f46e5")
    ])
    .slot("input", [
        ButtonHandle(id="input", handle_type="input", label="In"),
    ])
    .slot("center", [
        TextField(id="function", value="uppercase"),
    ])
    .slot("output", [
        ButtonHandle(id="output", handle_type="output", label="Out"),
    ])
    .gap("0px")  # No gap between header and body for seamless look
    .build()
)

widget.add_node_type(
    type_name="simple_transform",
    label="Simple Node Layout",
    icon="📄",
    grid_layout=grid_simple_node
)

# %%
# Display the widget
widget

# %%
# Working with node values (same as before)
print("Current nodes:", list(widget.nodes.keys()))
print("Current values:", dict(widget.values))

# Access and modify values
if widget.nodes:
    node_id = list(widget.nodes.keys())[0]
    print(f"\nNode {node_id} values:", dict(widget.values[node_id]))
    
    # Modify a value
    if "threshold" in widget.values[node_id]:
        widget.values[node_id]["threshold"] = 75
        print(f"Updated threshold to: {widget.values[node_id]['threshold']}")

# %%
