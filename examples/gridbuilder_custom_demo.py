# %%
"""GridBuilder Custom Cell Examples for VS Code

This demo shows how to use cell() for complete control over grid layouts.
Use cell() when you need:
- Cells that span multiple rows/columns
- Custom layout properties (flex, direction, alignment)
- Precise positioning
"""

from pynodewidget import NodeFlowWidget, GridBuilder
from pynodewidget.models import (
    TextField, NumberField, BoolField, SelectField,
    LabeledHandle, ButtonHandle, HeaderComponent, 
    DividerComponent, ButtonComponent, ProgressField
)

widget = NodeFlowWidget()

# %%
# Example 1: Header with Spanning
# Header cell spans all 3 columns

grid_spanning = (
    GridBuilder()
    .rows("auto", "1fr")
    .cols("auto", "1fr", "auto")
    .cell(1, 1, 
        components=[HeaderComponent(id="header", label="Multi-Column Header", icon="📊")],
        col_span=3,  # Span all 3 columns
        layout_type="flex",
        direction="row",
        justify="center"
    )
    .cell(2, 1, [
        LabeledHandle(id="in1", handle_type="input"),
        LabeledHandle(id="in2", handle_type="input"),
    ])
    .cell(2, 2, [
        TextField(id="name", value="Processor"),
        NumberField(id="value", value=50),
    ])
    .cell(2, 3, [
        LabeledHandle(id="out1", handle_type="output"),
        LabeledHandle(id="out2", handle_type="output"),
    ])
    .gap("8px")
    .build()
)

widget.add_node_type(
    type_name="spanning_header",
    label="Spanning Header",
    icon="📏",
    grid_layout=grid_spanning
)

# %%
# Example 2: Dashboard Layout with Different Cell Sizes
# Mix of spanning and regular cells

grid_dashboard = (
    GridBuilder()
    .rows("auto", "auto", "1fr")
    .cols("1fr", "1fr")
    .cell(1, 1,
        components=[HeaderComponent(id="title", label="Dashboard", icon="📈", bgColor="#059669")],
        col_span=2,  # Title spans both columns
        layout_type="flex",
        direction="row",
        justify="center"
    )
    .cell(2, 1, [
        TextField(id="metric1", value="CPU: 45%"),
        ProgressField(id="cpu_progress", value=45, min=0, max=100),
    ])
    .cell(2, 2, [
        TextField(id="metric2", value="Memory: 60%"),
        ProgressField(id="mem_progress", value=60, min=0, max=100),
    ])
    .cell(3, 1, [
        NumberField(id="refresh_rate", value=5, min=1, max=60),
        BoolField(id="auto_refresh", value=True),
    ], col_span=2)  # Settings span both columns
    .gap("12px")
    .build()
)

widget.add_node_type(
    type_name="dashboard",
    label="Dashboard Layout",
    icon="📊",
    grid_layout=grid_dashboard
)

# %%
# Example 3: Sidebar with Spanning Main Area
# Left sidebar, right main content spanning multiple rows

grid_sidebar_span = (
    GridBuilder()
    .rows("auto", "1fr", "auto")
    .cols("80px", "1fr")
    .cell(1, 1, [
        ButtonHandle(id="in1", handle_type="input", label="In"),
    ], row_span=3,  # Sidebar spans all rows
       layout_type="flex",
       direction="column",
       justify="space-between",
       gap="8px"
    )
    .cell(1, 2, [
        HeaderComponent(id="header", label="Content Area"),
    ])
    .cell(2, 2, [
        TextField(id="content", value="Main content area"),
        NumberField(id="items", value=10),
        SelectField(id="view", value="grid", options=["list", "grid", "table"]),
    ])
    .cell(3, 2, [
        ButtonHandle(id="out1", handle_type="output", label="Out"),
    ])
    .gap("8px")
    .build()
)

widget.add_node_type(
    type_name="sidebar_spanning",
    label="Sidebar Spanning",
    icon="🎛️",
    grid_layout=grid_sidebar_span
)

# %%
# Example 4: Complex Grid with Custom Alignments
# Different alignment and direction for each cell

grid_complex = (
    GridBuilder()
    .rows("auto", "1fr", "auto")
    .cols("100px", "1fr", "100px")
    .cell(1, 1,
        components=[HeaderComponent(id="h_left", label="Left")],
        layout_type="flex",
        direction="column",
        align="start"
    )
    .cell(1, 2,
        components=[HeaderComponent(id="h_center", label="Center Panel", icon="🎯")],
        layout_type="flex",
        direction="row",
        justify="center"
    )
    .cell(1, 3,
        components=[HeaderComponent(id="h_right", label="Right")],
        layout_type="flex",
        direction="column",
        align="end"
    )
    .cell(2, 1, [
        LabeledHandle(id="in1", handle_type="input"),
        LabeledHandle(id="in2", handle_type="input"),
    ], layout_type="flex", direction="column", align="stretch", gap="8px")
    .cell(2, 2, [
        TextField(id="main_field", value="Main content"),
        NumberField(id="value", value=100),
        BoolField(id="enabled", value=True),
    ], layout_type="flex", direction="column", gap="12px")
    .cell(2, 3, [
        LabeledHandle(id="out1", handle_type="output"),
        LabeledHandle(id="out2", handle_type="output"),
    ], layout_type="flex", direction="column", align="stretch", gap="8px")
    .cell(3, 1,
        components=[ButtonComponent(id="btn1", label="Action", action="execute", variant="default")],
        col_span=3,  # Footer button spans all columns
        layout_type="flex",
        direction="row",
        justify="center"
    )
    .gap("10px")
    .build()
)

widget.add_node_type(
    type_name="complex_grid",
    label="Complex Grid",
    icon="🏗️",
    grid_layout=grid_complex
)

# %%
# Example 5: Horizontal Layout with Custom Gaps and Alignment
# Precise control over spacing and alignment

grid_horizontal_custom = (
    GridBuilder()
    .rows("1fr")
    .cols("auto", "1fr", "auto")
    .cell(1, 1,
        components=[
            LabeledHandle(id="input", handle_type="input", label="Data In"),
        ],
        layout_type="flex",
        direction="column",
        align="center",
        gap="4px"
    )
    .cell(1, 2,
        components=[
            TextField(id="operation", value="transform"),
            SelectField(id="method", value="map", options=["map", "filter", "reduce"]),
            NumberField(id="batch_size", value=32, min=1, max=128),
        ],
        layout_type="flex",
        direction="column",
        align="stretch",
        gap="16px"
    )
    .cell(1, 3,
        components=[
            LabeledHandle(id="output", handle_type="output", label="Result"),
        ],
        layout_type="flex",
        direction="column",
        align="center",
        gap="4px"
    )
    .gap("20px")
    .build()
)

widget.add_node_type(
    type_name="horizontal_custom",
    label="Custom Horizontal",
    icon="↔️",
    grid_layout=grid_horizontal_custom
)

# %%
# Example 6: Grid within Grid Effect using Layout Properties
# Create distinct visual sections with different layouts

grid_sections = (
    GridBuilder()
    .rows("auto", "1fr", "auto")
    .cols("1fr")
    .cell(1, 1,
        components=[
            HeaderComponent(id="header", label="Advanced Processor", icon="⚡", bgColor="#7c3aed"),
            DividerComponent(id="div1"),
        ],
        layout_type="flex",
        direction="column",
        gap="0px"
    )
    .cell(2, 1,
        components=[
            TextField(id="field1", value="Option 1"),
            NumberField(id="field2", value=50),
            BoolField(id="field3", value=True),
            SelectField(id="field4", value="auto", options=["auto", "manual", "hybrid"]),
        ],
        layout_type="flex",
        direction="column",
        align="stretch",
        gap="12px"
    )
    .cell(3, 1,
        components=[
            DividerComponent(id="div2"),
            ButtonComponent(id="apply", label="Apply Settings", action="apply", variant="default"),
        ],
        layout_type="flex",
        direction="column",
        gap="8px"
    )
    .gap("0px")  # No gap between cells for seamless sections
    .build()
)

widget.add_node_type(
    type_name="sectioned_layout",
    label="Sectioned Layout",
    icon="🗂️",
    grid_layout=grid_sections
)

# %%
# Display widget
widget

# %%
# Working with the complex layouts
print("Available node types:")
for template in widget.templates:
    grid = template.get('grid')
    if grid:
        print(f"\n{template['label']}:")
        print(f"  Rows: {grid['rows']}")
        print(f"  Cols: {grid['columns']}")
        print(f"  Cells: {len(grid['cells'])}")

if widget.nodes:
    node_id = list(widget.nodes.keys())[0]
    print(f"\nNode values: {dict(widget.values[node_id])}")

# %%
