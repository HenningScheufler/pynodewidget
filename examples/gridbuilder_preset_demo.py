# %%
"""GridBuilder Preset Examples for VS Code

This demo shows how to use GridBuilder presets to create layouts with minimal code.
Available presets: three_column, holy_grail, sidebar, header_body
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
# Example 2: Holy Grail Preset (Header + Sidebar Layout)
# Best for complex nodes with header, multiple sections, and footer

grid_holy_grail = (
    GridBuilder.preset("holy_grail")
    .slot("header", [
        HeaderComponent(id="header", label="Advanced Processor", icon="🚀")
    ])
    .slot("left", [
        ButtonHandle(id="input1", handle_type="input", label="Input 1"),
        ButtonHandle(id="input2", handle_type="input", label="Input 2"),
    ])
    .slot("main", [
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
    type_name="holy_grail_processor",
    label="Holy Grail Layout",
    icon="🏛️",
    grid_layout=grid_holy_grail
)

# %%
# Example 3: Sidebar Preset (Compact Two-Column)
# Great for nodes with side controls and main content area

grid_sidebar = (
    GridBuilder.preset("sidebar")
    .slot("sidebar", [
        LabeledHandle(id="input", handle_type="input"),
        LabeledHandle(id="output", handle_type="output"),
    ])
    .slot("main", [
        TextField(id="title", value="Processor Node"),
        NumberField(id="value", value=0),
        SelectField(id="type", value="standard", options=["standard", "advanced"]),
    ])
    .build()
)

widget.add_node_type(
    type_name="sidebar_processor",
    label="Sidebar Layout",
    icon="📱",
    grid_layout=grid_sidebar
)

# %%
# Example 4: Header-Body Preset (Clean Vertical Layout)
# Perfect for nodes with a title area and main content

grid_header_body = (
    GridBuilder.preset("header_body")
    .slot("header", [
        HeaderComponent(id="header", label="Transform Node", icon="🔄", bgColor="#4f46e5")
    ])
    .slot("body", [
        LabeledHandle(id="input", handle_type="input"),
        TextField(id="function", value="uppercase"),
        NumberField(id="repeat", value=1, min=1, max=10),
        LabeledHandle(id="output", handle_type="output"),
    ])
    .gap("0px")  # No gap between header and body for seamless look
    .build()
)

widget.add_node_type(
    type_name="header_body_processor",
    label="Header-Body Layout",
    icon="📄",
    grid_layout=grid_header_body
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
