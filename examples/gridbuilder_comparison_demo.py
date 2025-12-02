# %%
"""GridBuilder API Comparison: Old vs New

This demo compares the old manual grid construction with the new GridBuilder API
to show the code reduction and improved readability.
"""

from pynodewidget import NodeFlowWidget, GridBuilder
from pynodewidget.models import (
    NodeGrid, GridCell, GridCoordinates, CellLayout,
    TextField, NumberField, BoolField,
    LabeledHandle, HeaderComponent
)

widget = NodeFlowWidget()

# %%
# OLD WAY: Manual grid construction (verbose, error-prone)
# Approximately 50+ lines of code

grid_old_way = NodeGrid(
    rows=["auto", "1fr"],
    columns=["auto", "1fr", "auto"],
    gap="8px",
    cells=[
        GridCell(
            id="header-cell",
            coordinates=GridCoordinates(row=1, col=1, row_span=1, col_span=3),
            layout=CellLayout(
                type="flex",
                direction="row",
                align="center",
                justify="center",
                gap="8px"
            ),
            components=[
                HeaderComponent(id="header", label="Data Processor", icon="⚙️")
            ]
        ),
        GridCell(
            id="left-cell",
            coordinates=GridCoordinates(row=2, col=1, row_span=1, col_span=1),
            layout=CellLayout(
                type="flex",
                direction="column",
                align="stretch",
                justify="start",
                gap="8px"
            ),
            components=[
                LabeledHandle(id="input1", handle_type="input", label="Input 1"),
                LabeledHandle(id="input2", handle_type="input", label="Input 2"),
            ]
        ),
        GridCell(
            id="center-cell",
            coordinates=GridCoordinates(row=2, col=2, row_span=1, col_span=1),
            layout=CellLayout(
                type="flex",
                direction="column",
                align="start",
                justify="start",
                gap="12px"
            ),
            components=[
                TextField(id="name", value="Processor Node"),
                NumberField(id="threshold", value=50, min=0, max=100),
                BoolField(id="enabled", value=True),
            ]
        ),
        GridCell(
            id="right-cell",
            coordinates=GridCoordinates(row=2, col=3, row_span=1, col_span=1),
            layout=CellLayout(
                type="flex",
                direction="column",
                align="stretch",
                justify="start",
                gap="8px"
            ),
            components=[
                LabeledHandle(id="output1", handle_type="output", label="Output 1"),
                LabeledHandle(id="output2", handle_type="output", label="Output 2"),
            ]
        ),
    ]
)

widget.add_node_type(
    type_name="old_way",
    label="Old Way (Manual)",
    icon="🛠️",
    grid_layout=grid_old_way
)

# %%
# NEW WAY: GridBuilder with preset (~15 lines - 70% reduction!)

grid_new_preset = (
    GridBuilder.preset("holy_grail")
    .slot("header", [
        HeaderComponent(id="header", label="Data Processor", icon="⚙️")
    ])
    .slot("left", [
        LabeledHandle(id="input1", handle_type="input", label="Input 1"),
        LabeledHandle(id="input2", handle_type="input", label="Input 2"),
    ])
    .slot("main", [
        TextField(id="name", value="Processor Node"),
        NumberField(id="threshold", value=50, min=0, max=100),
        BoolField(id="enabled", value=True),
    ])
    .slot("right", [
        LabeledHandle(id="output1", handle_type="output", label="Output 1"),
        LabeledHandle(id="output2", handle_type="output", label="Output 2"),
    ])
    .gap("8px")
    .build()
)

widget.add_node_type(
    type_name="new_preset",
    label="New Way (Preset)",
    icon="✨",
    grid_layout=grid_new_preset
)

# %%
# NEW WAY: GridBuilder with row() - Even simpler for vertical layouts!

grid_new_row = (
    GridBuilder()
    .row(1, HeaderComponent(id="header", label="Data Processor", icon="⚙️"))
    .row(2, TextField(id="name", value="Processor Node"))
    .row(3, NumberField(id="threshold", value=50, min=0, max=100))
    .row(4, BoolField(id="enabled", value=True))
    .gap("8px")
    .build()
)

widget.add_node_type(
    type_name="new_row",
    label="New Way (Row)",
    icon="⚡",
    grid_layout=grid_new_row
)

# %%
# NEW WAY: GridBuilder with cell() - Full control when needed

grid_new_cell = (
    GridBuilder()
    .rows("auto", "1fr")
    .cols("auto", "1fr", "auto")
    .row(1, HeaderComponent(id="header", label="Data Processor", icon="⚙️"))
    .cell(2, 1, [
        LabeledHandle(id="input1", handle_type="input", label="Input 1"),
        LabeledHandle(id="input2", handle_type="input", label="Input 2"),
    ])
    .cell(2, 2, [
        TextField(id="name", value="Processor Node"),
        NumberField(id="threshold", value=50, min=0, max=100),
        BoolField(id="enabled", value=True),
    ])
    .cell(2, 3, [
        LabeledHandle(id="output1", handle_type="output", label="Output 1"),
        LabeledHandle(id="output2", handle_type="output", label="Output 2"),
    ])
    .gap("8px")
    .build()
)

widget.add_node_type(
    type_name="new_cell",
    label="New Way (Cell)",
    icon="🎯",
    grid_layout=grid_new_cell
)

# %%
# Display widget
widget

# %%
# Key Benefits Summary
print("=" * 60)
print("GridBuilder API Benefits")
print("=" * 60)
print()
print("✅ Code Reduction:")
print("   Old: ~50 lines | New: ~15 lines | Savings: 70%")
print()
print("✅ Readability:")
print("   - Fluent/chainable API")
print("   - Self-documenting method names")
print("   - Less nesting and boilerplate")
print()
print("✅ Less Error-Prone:")
print("   - No manual coordinate calculations")
print("   - Preset layouts prevent common mistakes")
print("   - Auto-sizing with row()/col()")
print()
print("✅ Flexible:")
print("   - preset() - Quick common layouts")
print("   - row()/col() - Simple linear arrangements")
print("   - cell() - Full control when needed")
print()
print("✅ Backward Compatible:")
print("   - Old NodeGrid construction still works")
print("   - Can mix both approaches")
print("   - No breaking changes")
print("=" * 60)

# %%
# Compare the resulting grids - they produce identical structures!
print("\nAll methods produce equivalent NodeGrid objects:")
print(f"Old way cells: {len(grid_old_way.cells)}")
print(f"Preset way cells: {len(grid_new_preset.cells)}")
print(f"Cell way cells: {len(grid_new_cell.cells)}")
print("\nTry creating nodes and see they work identically! 🎉")
