# %%
"""GridBuilder row() and col() Examples for VS Code

This demo shows how to use row() and col() methods for simple, intuitive layouts.
These methods automatically handle grid sizing and are perfect for vertical or horizontal arrangements.
"""

from pynodewidget import NodeFlowWidget, GridBuilder
from pynodewidget.models import (
    TextField, NumberField, BoolField, SelectField,
    LabeledHandle, HeaderComponent, DividerComponent, ButtonComponent
)

widget = NodeFlowWidget()

# %%
# Example 1: Simple Vertical Stack using row()
# Each row() call adds components horizontally

grid_vertical = (
    GridBuilder()
    .row(1, HeaderComponent(id="h1", label="Configuration", icon="⚙️"))
    .row(2, DividerComponent(id="d1"))
    .row(3, TextField(id="name", value="My Node"))
    .row(4, NumberField(id="value", value=42))
    .row(5, BoolField(id="active", value=True))
    .gap("8px")
    .build()
)

widget.add_node_type(
    type_name="vertical_stack",
    label="Vertical Stack",
    icon="⬇️",
    grid_layout=grid_vertical
)

# %%
# Example 2: Side-by-Side Fields using row() with multiple components
# Components in same row() call are placed side-by-side

grid_horizontal = (
    GridBuilder()
    .row(1, HeaderComponent(id="h1", label="Data Input"))
    .row(2, TextField(id="first_name", value="John"), TextField(id="last_name", value="Doe"))
    .row(3, NumberField(id="age", value=30, min=0, max=120), 
         SelectField(id="gender", value="other", options=["male", "female", "other"]))
    .row(4, BoolField(id="subscribe", value=False), BoolField(id="agree", value=True))
    .gap("12px")
    .build()
)

widget.add_node_type(
    type_name="horizontal_fields",
    label="Horizontal Fields",
    icon="↔️",
    grid_layout=grid_horizontal
)

# %%
# Example 3: Column Layout using col()
# Useful for creating side-by-side sections

grid_columns = (
    GridBuilder()
    .col(1,
        HeaderComponent(id="h_left", label="Inputs"),
        LabeledHandle(id="in1", handle_type="input", label="Input 1"),
        LabeledHandle(id="in2", handle_type="input", label="Input 2"),
        LabeledHandle(id="in3", handle_type="input", label="Input 3"),
    )
    .col(2,
        HeaderComponent(id="h_center", label="Settings"),
        TextField(id="operation", value="process"),
        NumberField(id="speed", value=1, min=1, max=10),
        BoolField(id="verbose", value=False),
    )
    .col(3,
        HeaderComponent(id="h_right", label="Outputs"),
        LabeledHandle(id="out1", handle_type="output", label="Output 1"),
        LabeledHandle(id="out2", handle_type="output", label="Output 2"),
        LabeledHandle(id="out3", handle_type="output", label="Output 3"),
    )
    .gap("16px")
    .build()
)

widget.add_node_type(
    type_name="three_columns",
    label="Three Columns",
    icon="⚏",
    grid_layout=grid_columns
)

# %%
# Example 4: Mixed Layout - Combining row() calls
# Header spans full width, then multiple fields below

grid_mixed = (
    GridBuilder()
    .row(1, HeaderComponent(id="header", label="Image Processor", icon="🖼️"))
    .row(2, 
        TextField(id="filename", value="image.jpg"),
        NumberField(id="quality", value=85, min=0, max=100)
    )
    .row(3,
        SelectField(id="format", value="png", options=["png", "jpg", "webp"]),
        BoolField(id="compress", value=True)
    )
    .row(4, ButtonComponent(id="process_btn", label="Process Image", variant="default"))
    .gap("10px")
    .build()
)

widget.add_node_type(
    type_name="mixed_layout",
    label="Mixed Layout",
    icon="🎨",
    grid_layout=grid_mixed
)

# %%
# Example 5: Compact Form using row() with many fields
# Great for data entry nodes

grid_form = (
    GridBuilder()
    .row(1, HeaderComponent(id="h1", label="User Registration", icon="👤"))
    .row(2, TextField(id="username", value=""))
    .row(3, TextField(id="email", value=""))
    .row(4, TextField(id="password", value=""))
    .row(5, NumberField(id="age", value=18, min=13, max=120))
    .row(6, SelectField(id="country", value="US", options=["US", "UK", "DE", "FR", "JP"]))
    .row(7, BoolField(id="terms", value=False))
    .row(8, ButtonComponent(id="submit", label="Register", variant="default"))
    .gap("6px")
    .build()
)

widget.add_node_type(
    type_name="form_layout",
    label="Form Layout",
    icon="📝",
    grid_layout=grid_form
)

# %%
# Example 6: Input/Output Column Layout
# Classic two-column with handles on sides

grid_io_columns = (
    GridBuilder()
    .col(1,
        LabeledHandle(id="data", handle_type="input", label="Data"),
        LabeledHandle(id="params", handle_type="input", label="Parameters"),
        LabeledHandle(id="config", handle_type="input", label="Config"),
    )
    .col(2,
        TextField(id="operation", value="transform"),
        NumberField(id="multiplier", value=1.0),
        BoolField(id="normalize", value=False),
    )
    .col(3,
        LabeledHandle(id="result", handle_type="output", label="Result"),
        LabeledHandle(id="metadata", handle_type="output", label="Metadata"),
        LabeledHandle(id="logs", handle_type="output", label="Logs"),
    )
    .gap("8px")
    .build()
)

widget.add_node_type(
    type_name="io_columns",
    label="I/O Columns",
    icon="🔌",
    grid_layout=grid_io_columns
)

# %%
# Display widget
widget

# %%
# Inspect created layouts
print("Available node types:")
for template in widget.templates:
    print(f"  - {template['type']}: {template['label']}")

print("\nCurrent nodes:", list(widget.nodes.keys()))
if widget.nodes:
    node_id = list(widget.nodes.keys())[0]
    print(f"Values for {node_id}:", dict(widget.values[node_id]))
