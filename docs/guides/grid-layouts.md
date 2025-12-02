# Grid Layouts with GridBuilder

Build complex node layouts efficiently using the GridBuilder API, which reduces layout code by 60-70% compared to manual grid construction.

## Overview

GridBuilder provides a fluent API for creating CSS grid layouts within nodes. Instead of manually constructing `NodeGrid`, `GridCell`, and `GridCoordinates` objects, you can use a chainable builder pattern with preset templates for common layouts.

**Key features:**
- 🎨 **Preset layouts**: Ready-to-use templates (three-column, holy-grail, sidebar, header-body)
- 🔧 **Fluent API**: Chainable methods for readable code
- 📐 **Row/column helpers**: Convenient methods for horizontal and vertical layouts
- ⚡ **Reduced boilerplate**: 60-70% less code than manual construction
- 🎯 **Type-safe**: Full Pydantic validation

## Quick Start

### Using Presets

The fastest way to create common layouts:

```python
from pynodewidget import JsonSchemaNodeWidget, GridBuilder, PRESETS
from pydantic import BaseModel, Field

class Params(BaseModel):
    threshold: float = Field(default=0.5, ge=0, le=1)
    enabled: bool = True

class DashboardNode(JsonSchemaNodeWidget):
    label = "Dashboard"
    parameters = Params
    icon = "📊"
    
    # Header-body preset
    grid = (
        GridBuilder()
        .preset(PRESETS.header_body)
        .slot("header", HeaderComponent(id="header", label="Settings"))
        .slot("body", TextField(id="notes", label="Notes", multiline=True))
        .build()
    )
```

### Custom Grid Layouts

Build custom layouts cell-by-cell:

```python
class CustomNode(JsonSchemaNodeWidget):
    label = "Custom Layout"
    parameters = Params
    
    grid = (
        GridBuilder()
        .rows(["60px", "1fr", "40px"])
        .cols(["200px", "1fr"])
        .gap("0.5rem")
        .cell(row=1, col=1, col_span=2, components=[
            HeaderComponent(id="header", label="Title")
        ])
        .cell(row=2, col=1, components=[
            TextField(id="sidebar", label="Sidebar")
        ])
        .cell(row=2, col=2, components=[
            TextField(id="content", label="Content", multiline=True)
        ])
        .cell(row=3, col=1, col_span=2, components=[
            ButtonHandle(id="submit", label="Submit", action="execute")
        ])
        .build()
    )
```

## Preset Layouts

GridBuilder includes four common layout presets:

### 1. Header-Body

Two-row layout with header and body sections.

```python
from pynodewidget import GridBuilder, PRESETS

grid = (
    GridBuilder()
    .preset(PRESETS.header_body)
    .slot("header", HeaderComponent(id="header", label="Node Title"))
    .slot("body", TextField(id="content", label="Content"))
    .build()
)
```

**Structure:**
```
┌─────────────────┐
│     Header      │  60px
├─────────────────┤
│                 │
│      Body       │  1fr (fills space)
│                 │
└─────────────────┘
```

**Slot names:** `"header"`, `"body"`

### 2. Three-Column

Three equal-width columns.

```python
grid = (
    GridBuilder()
    .preset(PRESETS.three_column)
    .slot("left", TextField(id="left", label="Left"))
    .slot("center", TextField(id="center", label="Center"))
    .slot("right", TextField(id="right", label="Right"))
    .build()
)
```

**Structure:**
```
┌──────┬──────┬──────┐
│      │      │      │
│ Left │Center│Right │  1fr
│      │      │      │
└──────┴──────┴──────┘
   1fr    1fr    1fr
```

**Slot names:** `"left"`, `"center"`, `"right"`

### 3. Sidebar

Fixed-width sidebar with flexible content area.

```python
grid = (
    GridBuilder()
    .preset(PRESETS.sidebar)
    .slot("sidebar", SelectField(id="mode", label="Mode", options=["auto", "manual"]))
    .slot("content", TextField(id="data", label="Data", multiline=True))
    .build()
)
```

**Structure:**
```
┌────────┬─────────────┐
│        │             │
│Sidebar │   Content   │  1fr
│        │             │
└────────┴─────────────┘
  200px        1fr
```

**Slot names:** `"sidebar"`, `"content"`

### 4. Holy Grail

Classic layout with header, three columns, and footer.

```python
grid = (
    GridBuilder()
    .preset(PRESETS.holy_grail)
    .slot("header", HeaderComponent(id="header", label="Title"))
    .slot("left_sidebar", TextField(id="nav", label="Navigation"))
    .slot("content", TextField(id="main", label="Main Content", multiline=True))
    .slot("right_sidebar", TextField(id="tools", label="Tools"))
    .slot("footer", ButtonHandle(id="save", label="Save", action="save"))
    .build()
)
```

**Structure:**
```
┌──────────────────────────┐
│         Header           │  60px
├──────┬─────────┬─────────┤
│      │         │         │
│ Left │ Content │  Right  │  1fr
│      │         │         │
├──────┴─────────┴─────────┤
│         Footer           │  40px
└──────────────────────────┘
  200px     1fr     200px
```

**Slot names:** `"header"`, `"left_sidebar"`, `"content"`, `"right_sidebar"`, `"footer"`

## Row and Column Helpers

Convenience methods for linear layouts:

### row() - Horizontal Layout

Create a single-row layout with multiple columns:

```python
from pynodewidget import GridBuilder, TextField, NumberField

grid = (
    GridBuilder()
    .row(
        TextField(id="name", label="Name"),
        NumberField(id="age", label="Age"),
        TextField(id="email", label="Email")
    )
    .build()
)
```

**Equivalent to:**
```python
grid = (
    GridBuilder()
    .rows(["1fr"])
    .cols(["1fr", "1fr", "1fr"])
    .cell(row=1, col=1, components=[TextField(id="name", label="Name")])
    .cell(row=1, col=2, components=[NumberField(id="age", label="Age")])
    .cell(row=1, col=3, components=[TextField(id="email", label="Email")])
    .build()
)
```

### col() - Vertical Layout

Create a single-column layout with multiple rows:

```python
grid = (
    GridBuilder()
    .col(
        HeaderComponent(id="header", label="Form"),
        TextField(id="name", label="Name"),
        NumberField(id="count", label="Count"),
        ButtonHandle(id="submit", label="Submit", action="execute")
    )
    .build()
)
```

**Equivalent to:**
```python
grid = (
    GridBuilder()
    .rows(["auto", "auto", "auto", "auto"])
    .cols(["1fr"])
    .cell(row=1, col=1, components=[HeaderComponent(...)])
    .cell(row=2, col=1, components=[TextField(...)])
    .cell(row=3, col=1, components=[NumberField(...)])
    .cell(row=4, col=1, components=[ButtonHandle(...)])
    .build()
)
```

### Combining row() with Customization

```python
grid = (
    GridBuilder()
    .row(
        TextField(id="input1", label="Input 1"),
        TextField(id="input2", label="Input 2")
    )
    .gap("1rem")  # Add spacing
    .build()
)
```

## Custom Grid Building

### Basic Grid Configuration

Set up grid dimensions and spacing:

```python
grid = (
    GridBuilder()
    .rows(["60px", "1fr", "40px"])  # 3 rows: fixed, flexible, fixed
    .cols(["1fr", "2fr"])            # 2 cols: 1:2 ratio
    .gap("0.5rem")                   # Spacing between cells
    .build()
)
```

**Row/column sizing options:**
- `"auto"`: Size to content
- `"1fr"`, `"2fr"`, etc.: Fractional units (flexible)
- `"100px"`, `"50%"`: Fixed sizes
- `"minmax(100px, 1fr)"`: Min/max constraints

### Adding Cells

Place components in grid cells:

```python
grid = (
    GridBuilder()
    .rows(["60px", "1fr"])
    .cols(["1fr"])
    .cell(
        row=1,          # Grid row (1-indexed)
        col=1,          # Grid column (1-indexed)
        components=[    # List of components
            HeaderComponent(id="header", label="Title", icon="📋")
        ]
    )
    .cell(
        row=2,
        col=1,
        components=[
            TextField(id="notes", label="Notes", multiline=True)
        ]
    )
    .build()
)
```

### Cell Spanning

Cells can span multiple rows or columns:

```python
grid = (
    GridBuilder()
    .rows(["60px", "1fr"])
    .cols(["1fr", "1fr", "1fr"])
    .cell(
        row=1,
        col=1,
        col_span=3,  # Span all 3 columns
        components=[HeaderComponent(id="header", label="Full Width Header")]
    )
    .cell(row=2, col=1, components=[TextField(id="col1", label="Column 1")])
    .cell(row=2, col=2, components=[TextField(id="col2", label="Column 2")])
    .cell(row=2, col=3, components=[TextField(id="col3", label="Column 3")])
    .build()
)
```

**Spanning options:**
- `col_span`: Number of columns to span
- `row_span`: Number of rows to span

### Cell Layout Options

Customize alignment and padding within cells:

```python
grid = (
    GridBuilder()
    .rows(["auto"])
    .cols(["1fr"])
    .cell(
        row=1,
        col=1,
        components=[ButtonHandle(id="btn", label="Click", action="execute")],
        # Cell-level layout
        h_align="center",      # Horizontal: "start", "center", "end", "stretch"
        v_align="center",      # Vertical: "start", "center", "end", "stretch"
        padding="1rem"         # Internal padding
    )
    .build()
)
```

## Complete Examples

### Dashboard with Statistics

```python
from pynodewidget import (
    JsonSchemaNodeWidget, GridBuilder,
    HeaderComponent, TextField, NumberField, BoolField, ButtonHandle
)
from pydantic import BaseModel, Field

class DashboardParams(BaseModel):
    title: str = Field(default="Dashboard")
    metric1: float = Field(default=0.0)
    metric2: float = Field(default=0.0)
    enabled: bool = True

class DashboardNode(JsonSchemaNodeWidget):
    label = "Dashboard"
    parameters = DashboardParams
    icon = "📊"
    color = "blue"
    
    grid = (
        GridBuilder()
        .rows(["60px", "auto", "1fr", "40px"])
        .cols(["1fr", "1fr"])
        .gap("0.5rem")
        # Header spanning full width
        .cell(
            row=1, col=1, col_span=2,
            components=[HeaderComponent(
                id="header",
                label="Analytics Dashboard",
                icon="📈",
                bgColor="#1e40af"
            )]
        )
        # Metrics row
        .cell(row=2, col=1, components=[
            NumberField(id="metric1", label="Metric 1", value=0.0)
        ])
        .cell(row=2, col=2, components=[
            NumberField(id="metric2", label="Metric 2", value=0.0)
        ])
        # Content spanning full width
        .cell(
            row=3, col=1, col_span=2,
            components=[TextField(
                id="notes",
                label="Analysis Notes",
                multiline=True,
                placeholder="Enter your analysis..."
            )]
        )
        # Footer with controls
        .cell(row=4, col=1, components=[
            BoolField(id="enabled", label="Enable Updates")
        ])
        .cell(row=4, col=2, components=[
            ButtonHandle(id="refresh", label="Refresh", action="refresh")
        ], h_align="end")
        .build()
    )
```

### Form with Sections

```python
class FormParams(BaseModel):
    name: str = Field(default="")
    email: str = Field(default="")
    age: int = Field(default=18, ge=0, le=120)
    newsletter: bool = False

class FormNode(JsonSchemaNodeWidget):
    label = "Registration Form"
    parameters = FormParams
    icon = "📝"
    
    grid = (
        GridBuilder()
        .col(
            HeaderComponent(id="h1", label="Personal Information", bgColor="#059669"),
            TextField(id="name", label="Full Name"),
            TextField(id="email", label="Email"),
            NumberField(id="age", label="Age"),
            HeaderComponent(id="h2", label="Preferences", bgColor="#0891b2"),
            BoolField(id="newsletter", label="Subscribe to newsletter"),
            ButtonHandle(id="submit", label="Submit", action="register")
        )
        .gap("0.5rem")
        .build()
    )
```

### Split View Editor

```python
class EditorParams(BaseModel):
    source: str = Field(default="")
    compiled: str = Field(default="")
    auto_compile: bool = True

class EditorNode(JsonSchemaNodeWidget):
    label = "Code Editor"
    parameters = EditorParams
    icon = "💻"
    
    grid = (
        GridBuilder()
        .rows(["60px", "1fr", "40px"])
        .cols(["1fr", "1fr"])
        .gap("0.5rem")
        # Header
        .cell(
            row=1, col=1, col_span=2,
            components=[HeaderComponent(
                id="header",
                label="Code Compiler",
                icon="⚙️"
            )]
        )
        # Source code
        .cell(row=2, col=1, components=[
            TextField(
                id="source",
                label="Source Code",
                multiline=True,
                placeholder="Enter code..."
            )
        ])
        # Compiled output
        .cell(row=2, col=2, components=[
            TextField(
                id="compiled",
                label="Compiled Output",
                multiline=True,
                disabled=True
            )
        ])
        # Footer controls
        .cell(row=3, col=1, components=[
            BoolField(id="auto_compile", label="Auto-compile")
        ])
        .cell(row=3, col=2, components=[
            ButtonHandle(id="compile", label="Compile Now", action="compile")
        ], h_align="end")
        .build()
    )
```

### Sidebar Navigation

```python
class NavParams(BaseModel):
    current_page: str = Field(default="home")
    content: str = Field(default="")

class NavNode(JsonSchemaNodeWidget):
    label = "Page Layout"
    parameters = NavParams
    icon = "🗂️"
    
    grid = (
        GridBuilder()
        .preset(PRESETS.sidebar)
        .slot("sidebar", SelectField(
            id="current_page",
            label="Navigation",
            options=["home", "dashboard", "settings", "help"]
        ))
        .slot("content", TextField(
            id="content",
            label="Page Content",
            multiline=True,
            placeholder="Content goes here..."
        ))
        .build()
    )
```

### Asymmetric Dashboard

```python
class AsymmetricParams(BaseModel):
    featured: str = Field(default="")
    widget1: str = Field(default="")
    widget2: str = Field(default="")
    widget3: str = Field(default="")

class AsymmetricNode(JsonSchemaNodeWidget):
    label = "Asymmetric Layout"
    parameters = AsymmetricParams
    icon = "📐"
    
    grid = (
        GridBuilder()
        .rows(["60px", "200px", "100px"])
        .cols(["1fr", "1fr", "1fr"])
        .gap("0.5rem")
        # Header
        .cell(row=1, col=1, col_span=3, components=[
            HeaderComponent(id="header", label="Dashboard")
        ])
        # Featured content (spans 2 columns)
        .cell(row=2, col=1, col_span=2, components=[
            TextField(id="featured", label="Featured", multiline=True)
        ])
        # Side widget
        .cell(row=2, col=3, components=[
            TextField(id="widget1", label="Quick Stats")
        ])
        # Bottom row (3 equal widgets)
        .cell(row=3, col=1, components=[
            TextField(id="widget2", label="Widget 2")
        ])
        .cell(row=3, col=2, components=[
            TextField(id="widget3", label="Widget 3")
        ])
        .cell(row=3, col=3, components=[
            ButtonHandle(id="action", label="Action", action="execute")
        ])
        .build()
    )
```

## Comparison: Manual vs GridBuilder

### Manual Construction (Old Way)

```python
from pynodewidget.models import NodeGrid, GridCell, GridCoordinates, CellLayout

grid = NodeGrid(
    rows=["60px", "1fr"],
    columns=["1fr"],
    gap="0.5rem",
    cells=[
        GridCell(
            id="cell-header",
            coordinates=GridCoordinates(row=1, col=1),
            layout=CellLayout(),
            components=[
                HeaderComponent(id="header", label="Title")
            ]
        ),
        GridCell(
            id="cell-body",
            coordinates=GridCoordinates(row=2, col=1),
            layout=CellLayout(),
            components=[
                TextField(id="content", label="Content")
            ]
        )
    ]
)
```

### GridBuilder (New Way)

```python
from pynodewidget import GridBuilder, PRESETS

grid = (
    GridBuilder()
    .preset(PRESETS.header_body)
    .slot("header", HeaderComponent(id="header", label="Title"))
    .slot("body", TextField(id="content", label="Content"))
    .build()
)
```

**Benefits:**
- ✅ 70% less code
- ✅ Chainable, readable API
- ✅ No manual ID generation for cells
- ✅ Type-safe with Pydantic validation
- ✅ Preset templates for common layouts

## Best Practices

### 1. Start with Presets

Use presets for standard layouts before building custom grids:

```python
# ✅ Good: Use preset when it fits
grid = GridBuilder().preset(PRESETS.header_body)...

# ❌ Avoid: Rebuilding common layouts manually
grid = GridBuilder().rows(["60px", "1fr"]).cols(["1fr"])...
```

### 2. Use row() and col() for Linear Layouts

```python
# ✅ Good: Use row() for horizontal layout
grid = GridBuilder().row(field1, field2, field3).build()

# ❌ Avoid: Manual cell placement for simple rows
grid = GridBuilder().rows(["1fr"]).cols(["1fr", "1fr", "1fr"])
    .cell(row=1, col=1, components=[field1])
    .cell(row=1, col=2, components=[field2])...
```

### 3. Chain Methods for Readability

```python
# ✅ Good: Chain methods
grid = (
    GridBuilder()
    .rows(["60px", "1fr"])
    .cols(["200px", "1fr"])
    .gap("0.5rem")
    .cell(...)
    .build()
)

# ❌ Avoid: Breaking chain unnecessarily
builder = GridBuilder()
builder = builder.rows(["60px", "1fr"])
builder = builder.cols(["200px", "1fr"])
grid = builder.build()
```

### 4. Use Descriptive Component IDs

```python
# ✅ Good: Clear IDs
.slot("header", HeaderComponent(id="main-header", label="Title"))
.slot("body", TextField(id="notes-content", label="Notes"))

# ❌ Avoid: Generic IDs
.slot("header", HeaderComponent(id="comp1", label="Title"))
.slot("body", TextField(id="comp2", label="Notes"))
```

### 5. Leverage Spanning for Headers/Footers

```python
# ✅ Good: Span full width for headers
.cell(row=1, col=1, col_span=3, components=[HeaderComponent(...)])

# ❌ Avoid: Multiple header cells
.cell(row=1, col=1, components=[HeaderComponent(...)])
.cell(row=1, col=2, components=[HeaderComponent(...)])
.cell(row=1, col=3, components=[HeaderComponent(...)])
```

### 6. Set Appropriate Row Sizes

```python
# ✅ Good: Fixed size for headers/footers, flexible for content
.rows(["60px", "1fr", "40px"])

# ❌ Avoid: All flexible rows when you need fixed sizes
.rows(["1fr", "1fr", "1fr"])
```

### 7. Add Gap for Visual Separation

```python
# ✅ Good: Consistent spacing
GridBuilder().rows([...]).cols([...]).gap("0.5rem")

# ❌ Avoid: No gap (components touch)
GridBuilder().rows([...]).cols([...])  # gap defaults to "0"
```

## Troubleshooting

### Grid Not Displaying

**Problem**: Grid appears empty or components don't show.

**Solutions:**
- Ensure you call `.build()` at the end
- Check that component IDs are unique
- Verify row/col indices are 1-based (not 0-based)

```python
# ✅ Correct
.cell(row=1, col=1, components=[...])

# ❌ Wrong (0-based indexing)
.cell(row=0, col=0, components=[...])
```

### Spanning Not Working

**Problem**: Cell doesn't span as expected.

**Solutions:**
- Verify you have enough rows/columns for the span
- Check that col_span and row_span are integers
- Ensure no overlapping cells

```python
# ✅ Correct: 3 columns available for col_span=3
.cols(["1fr", "1fr", "1fr"])
.cell(row=1, col=1, col_span=3, components=[...])

# ❌ Wrong: Only 2 columns, can't span 3
.cols(["1fr", "1fr"])
.cell(row=1, col=1, col_span=3, components=[...])
```

### Components Overlap

**Problem**: Components render on top of each other.

**Solutions:**
- Add gap between cells: `.gap("0.5rem")`
- Check for overlapping cell coordinates
- Verify spanning doesn't create conflicts

### Preset Slot Not Found

**Problem**: `ValueError: Unknown slot name 'xyz'`

**Solutions:**
- Check preset documentation for correct slot names
- Use `PRESETS.header_body`, `PRESETS.three_column`, etc.
- Verify spelling of slot names

```python
# ✅ Correct
.preset(PRESETS.header_body)
.slot("header", ...)
.slot("body", ...)

# ❌ Wrong slot name
.preset(PRESETS.header_body)
.slot("title", ...)  # Should be "header"
```

## API Reference

### GridBuilder Methods

#### `.preset(preset: PresetConfig) -> GridBuilder`
Apply a preset configuration.

**Parameters:**
- `preset`: One of `PRESETS.header_body`, `PRESETS.three_column`, `PRESETS.sidebar`, `PRESETS.holy_grail`

**Returns:** Self (for chaining)

---

#### `.slot(name: str, *components) -> GridBuilder`
Assign components to a preset slot.

**Parameters:**
- `name`: Slot name from preset (e.g., "header", "body", "left")
- `*components`: Component instances to place in the slot

**Returns:** Self (for chaining)

**Raises:** `ValueError` if slot name not found in preset

---

#### `.rows(sizes: list[str]) -> GridBuilder`
Set grid row sizes.

**Parameters:**
- `sizes`: List of CSS grid row sizes (e.g., `["60px", "1fr", "auto"]`)

**Returns:** Self (for chaining)

---

#### `.cols(sizes: list[str]) -> GridBuilder`
Set grid column sizes.

**Parameters:**
- `sizes`: List of CSS grid column sizes (e.g., `["200px", "1fr"]`)

**Returns:** Self (for chaining)

---

#### `.gap(gap: str) -> GridBuilder`
Set spacing between grid cells.

**Parameters:**
- `gap`: CSS gap value (e.g., `"0.5rem"`, `"10px"`)

**Returns:** Self (for chaining)

---

#### `.cell(row: int, col: int, components: list, ...) -> GridBuilder`
Add a cell to the grid.

**Parameters:**
- `row`: Row number (1-indexed)
- `col`: Column number (1-indexed)
- `components`: List of component instances
- `row_span`: (Optional) Number of rows to span (default: 1)
- `col_span`: (Optional) Number of columns to span (default: 1)
- `h_align`: (Optional) Horizontal alignment: "start", "center", "end", "stretch"
- `v_align`: (Optional) Vertical alignment: "start", "center", "end", "stretch"
- `padding`: (Optional) Cell padding (CSS value)

**Returns:** Self (for chaining)

---

#### `.row(*components) -> GridBuilder`
Create single-row layout with components as columns.

**Parameters:**
- `*components`: Component instances to place in columns

**Returns:** Self (for chaining)

---

#### `.col(*components) -> GridBuilder`
Create single-column layout with components as rows.

**Parameters:**
- `*components`: Component instances to place in rows

**Returns:** Self (for chaining)

---

#### `.build() -> NodeGrid`
Build and return the final grid configuration.

**Returns:** `NodeGrid` instance ready for use in node classes

## Next Steps

- **[Styling Nodes](styling.md)**: Customize node appearance
- **[Custom Nodes](custom-nodes.md)**: Build complete custom nodes
- **[Handles Configuration](handles.md)**: Configure connection points
- **[Developer Architecture](../developer/architecture.md)**: Understand internal structure
