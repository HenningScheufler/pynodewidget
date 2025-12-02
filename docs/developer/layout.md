# Layout System

PyNodeWidget uses a powerful **three-layer grid system** that provides flexible and precise control over node layouts. This architecture separates concerns cleanly: grid positioning, component arrangement, and individual component rendering.

## Overview

The layout system consists of three distinct layers:

1. **Layer 1: NodeGrid** - CSS Grid positioning of cells
2. **Layer 2: GridCell** - Flexbox/Grid arrangement of components within cells
3. **Layer 3: Components** - Individual UI elements (fields, handles, etc.)

This separation enables:

- **Precise control** over component positioning
- **Flexible layouts** from simple to complex
- **Cell spanning** across multiple rows/columns
- **Nested layouts** for advanced use cases
- **Responsive design** with CSS Grid's fr units

## Layer 1: NodeGrid - Cell Positioning

The `NodeGrid` defines the overall structure using CSS Grid. It positions cells in a grid layout.

### Structure

```python
from pynodewidget.models import NodeGrid

grid = NodeGrid(
    rows=["auto", "1fr", "auto"],      # Row heights
    columns=["200px", "1fr", "200px"], # Column widths
    gap="8px",                          # Gap between cells
    cells=[...]                         # GridCell objects
)
```

**TypeScript:**
```typescript
interface NodeGrid {
  rows: string[];        // CSS Grid row definitions
  columns: string[];     // CSS Grid column definitions
  gap?: string;          // Gap between cells
  cells: GridCell[];     // Array of positioned cells
}
```

### Grid Sizing

Rows and columns use standard CSS Grid values:

- `"1fr"` - Flexible fraction of available space
- `"200px"` - Fixed pixel size
- `"auto"` - Size to content
- `"minmax(100px, 1fr)"` - Min/max constraints
- `"repeat(3, 1fr)"` - Repeat pattern

**Example:**
```python
grid = NodeGrid(
    rows=["60px", "1fr", "40px"],      # Fixed header/footer, flexible body
    columns=["auto", "1fr", "auto"],   # Flexible center, auto sides
    gap="12px",
    cells=[...]
)
```

### Implementation

**Frontend (React):**
```tsx
// js/src/components/GridRenderer.tsx
export function NodeGridRenderer({ grid, nodeId, onValueChange }) {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: grid.rows.join(" "),
    gridTemplateColumns: grid.columns.join(" "),
    gap: grid.gap || "8px",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="node-grid" style={gridStyle}>
      {grid.cells.map((cell) => (
        <div
          key={cell.id}
          className="grid-cell"
          style={{
            gridRow: `${cell.coordinates.row} / span ${cell.coordinates.row_span || 1}`,
            gridColumn: `${cell.coordinates.col} / span ${cell.coordinates.col_span || 1}`,
          }}
        >
          <GridCellRenderer cell={cell} nodeId={nodeId} onValueChange={onValueChange} />
        </div>
      ))}
    </div>
  );
}
```

## Layer 2: GridCell - Component Arrangement

Each `GridCell` defines its position in the grid and how components within it are arranged.

### Structure

```python
from pynodewidget.models import GridCell, GridCoordinates, CellLayout

cell = GridCell(
    id="left-cell",
    coordinates=GridCoordinates(
        row=1,           # Starting row (1-indexed)
        col=1,           # Starting column (1-indexed)
        row_span=2,      # Span 2 rows
        col_span=1       # Span 1 column
    ),
    layout=CellLayout(
        type="flex",         # "flex" | "grid" | "stack"
        direction="column",  # "row" | "column"
        align="stretch",     # "start" | "center" | "end" | "stretch"
        justify="start",     # "start" | "center" | "end" | "space-between"
        gap="8px"
    ),
    components=[...]         # List of components
)
```

**TypeScript:**
```typescript
interface GridCell {
  id: string;
  coordinates: GridCoordinates;
  layout?: CellLayout;
  components: ComponentType[];
}

interface GridCoordinates {
  row: number;         // Starting row (1-indexed)
  col: number;         // Starting column (1-indexed)
  row_span?: number;   // Rows to span
  col_span?: number;   // Columns to span
}

interface CellLayout {
  type?: "flex" | "grid" | "stack";
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "space-between";
  gap?: string;
}
```

### Cell Spanning

Cells can span multiple rows and/or columns:

```python
# Span across 2 rows and 2 columns (featured content area)
featured_cell = GridCell(
    id="featured",
    coordinates=GridCoordinates(row=1, col=1, row_span=2, col_span=2),
    layout=CellLayout(type="flex", direction="column"),
    components=[HeaderComponent(...)]
)

# Header spanning full width
header_cell = GridCell(
    id="header",
    coordinates=GridCoordinates(row=1, col=1, col_span=3),
    layout=CellLayout(type="flex", direction="row"),
    components=[HeaderComponent(...)]
)
```

### Layout Types

#### Flex Layout (Default)

Uses CSS Flexbox for one-dimensional layouts:

```python
CellLayout(
    type="flex",
    direction="column",   # Stack vertically
    align="stretch",      # Stretch to fill width
    justify="start",      # Align to top
    gap="12px"           # Space between components
)
```

#### Grid Layout

Uses CSS Grid for two-dimensional layouts:

```python
CellLayout(
    type="grid",
    gap="8px",
    align="center",
    justify="start"
)
```

#### Stack Layout

Vertical stacking (shorthand for flex column):

```python
CellLayout(
    type="stack",
    gap="8px"
)
```

### Implementation

**Frontend (React):**
```tsx
// js/src/components/layouts/GridCellComponent.tsx
export function GridCellComponent({ cell, nodeId, onValueChange }) {
  const layout = cell.layout || { type: "flex", direction: "column" };
  const cellStyle = getCellStyle(cell);
  const layoutStyle = getLayoutStyle(layout);

  return (
    <div className="nested-grid-cell" style={cellStyle}>
      <div className="nested-grid-cell-content" style={layoutStyle}>
        {cell.components.map((component) => (
          <ComponentFactory
            key={component.id}
            component={component}
            nodeId={nodeId}
            onValueChange={onValueChange}
          />
        ))}
      </div>
    </div>
  );
}

function getCellStyle(cell: GridCell): React.CSSProperties {
  const rowSpan = cell.coordinates.row_span || 1;
  const colSpan = cell.coordinates.col_span || 1;
    
  return {
    gridRow: `${cell.coordinates.row} / span ${rowSpan}`,
    gridColumn: `${cell.coordinates.col} / span ${colSpan}`,
  };
}

function getLayoutStyle(layout?: CellLayout): React.CSSProperties {
  if (!layout || layout.type === "flex" || !layout.type) {
    return {
      display: "flex",
      flexDirection: layout?.direction || "column",
      alignItems: layout?.align || "start",
      justifyContent: layout?.justify || "start",
      gap: layout?.gap || "4px",
      height: "100%",
      width: "100%",
    };
  }

  if (layout.type === "grid") {
    return {
      display: "grid",
      gap: layout.gap || "4px",
      alignItems: layout.align || "start",
      justifyContent: layout.justify || "start",
      height: "100%",
      width: "100%",
    };
  }

  if (layout.type === "stack") {
    return {
      display: "flex",
      flexDirection: "column",
      gap: layout.gap || "4px",
      height: "100%",
      width: "100%",
    };
  }

  return {};
}
```

## Layer 3: Components

Individual UI components render within cells. See [Component Library](components.md) for details.

Components automatically fill their container when spanning:

```python
# HeaderComponent with background color - fills entire cell
HeaderComponent(
    id="header",
    label="Node Title",
    bgColor="#3b82f6",
    textColor="#ffffff"
)

# FooterComponent spanning full width
FooterComponent(
    id="footer",
    text="Status: Active",
    bgColor="#f3f4f6"
)
```

**Implementation note:** Components must set `width: 100%` and `height: 100%` to properly fill spanning cells:

```tsx
// js/src/components/HeaderComponent.tsx
export function HeaderComponent({ component }) {
  return (
    <div 
      className="component-header px-3 py-2 font-semibold flex items-center gap-2"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: component.bgColor,
        color: component.textColor,
      }}
    >
      {component.icon && <span>{component.icon}</span>}
      <span>{component.label}</span>
    </div>
  );
}
```

## Common Layout Patterns

### Three-Column Layout

Classic layout with inputs, parameters, and outputs:

```python
from pynodewidget.grid_layouts import create_three_column_grid
from pynodewidget.models import ButtonHandle, NumberField, TextField

grid = create_three_column_grid(
    left_components=[
        ButtonHandle(id="input1", handle_type="input", label="Input 1"),
        ButtonHandle(id="input2", handle_type="input", label="Input 2"),
    ],
    center_components=[
        TextField(id="name", value="Processor"),
        NumberField(id="value", value=50, min=0, max=100),
    ],
    right_components=[
        ButtonHandle(id="output", handle_type="output", label="Output"),
    ],
    column_widths=["auto", "1fr", "auto"]
)
```

**Result:**
```
┌────────┬──────────────┬────────┐
│ Input1 │ Name: [...]  │ Output │
│ Input2 │ Value: [50]  │        │
└────────┴──────────────┴────────┘
```

### Header-Body Layout

Header spanning full width with content below:

```python
from pynodewidget.grid_layouts import create_header_body_grid
from pynodewidget.models import HeaderComponent, TextField, NumberField

grid = create_header_body_grid(
    header_components=[
        HeaderComponent(id="header", label="Processor Node", icon="⚙️"),
    ],
    body_components=[
        TextField(id="name", value="Node"),
        NumberField(id="count", value=1),
    ]
)
```

**Result:**
```
┌──────────────────────────┐
│ ⚙️ Processor Node        │ ← Header spans full width
├──────────────────────────┤
│ Name: [Node]             │
│ Count: [1]               │
└──────────────────────────┘
```

### Sidebar Layout

Fixed sidebar spanning multiple rows:

```python
grid = NodeGrid(
    rows=["60px", "1fr", "60px"],
    columns=["200px", "1fr"],
    gap="8px",
    cells=[
        # Sidebar spanning all 3 rows
        GridCell(
            id="sidebar",
            coordinates=GridCoordinates(row=1, col=1, row_span=3),
            layout=CellLayout(type="flex", direction="column"),
            components=[...]
        ),
        # Header
        GridCell(
            id="header",
            coordinates=GridCoordinates(row=1, col=2),
            components=[HeaderComponent(...)]
        ),
        # Content
        GridCell(
            id="content",
            coordinates=GridCoordinates(row=2, col=2),
            components=[...]
        ),
        # Footer
        GridCell(
            id="footer",
            coordinates=GridCoordinates(row=3, col=2),
            components=[FooterComponent(...)]
        ),
    ]
)
```

**Result:**
```
┌─────────┬──────────────┐
│         │   Header     │
│ Sidebar ├──────────────┤
│         │   Content    │
│ (spans  ├──────────────┤
│ 3 rows) │   Footer     │
└─────────┴──────────────┘
```

### Dashboard with Featured Content

Featured area spanning 2x2 grid:

```python
grid = NodeGrid(
    rows=["80px", "80px", "80px"],
    columns=["1fr", "1fr", "1fr"],
    gap="8px",
    cells=[
        # Featured content spanning 2 rows × 2 columns
        GridCell(
            id="featured",
            coordinates=GridCoordinates(row=1, col=1, row_span=2, col_span=2),
            components=[HeaderComponent(id="feat", label="Featured", bgColor="#8b5cf6")]
        ),
        # Widgets in top-right
        GridCell(id="w1", coordinates=GridCoordinates(row=1, col=3), components=[...]),
        GridCell(id="w2", coordinates=GridCoordinates(row=2, col=3), components=[...]),
        # Bottom row info
        GridCell(id="i1", coordinates=GridCoordinates(row=3, col=1), components=[...]),
        GridCell(id="i2", coordinates=GridCoordinates(row=3, col=2), components=[...]),
        GridCell(id="i3", coordinates=GridCoordinates(row=3, col=3), components=[...]),
    ]
)
```

**Result:**
```
┌───────────────────┬─────────┐
│                   │ Widget1 │
│   Featured        ├─────────┤
│   (2×2 span)      │ Widget2 │
├──────┬──────┬─────┴─────────┤
│ Info1│ Info2│ Info3         │
└──────┴──────┴───────────────┘
```

## Python Helper Functions

### GridBuilder API (Recommended)

**New in v2.0:** The `GridBuilder` class provides a fluent, chainable API that reduces layout code by 60-70%:

```python
from pynodewidget import GridBuilder, PRESETS

# Using presets (easiest)
grid = (
    GridBuilder()
    .preset(PRESETS.header_body)
    .slot("header", HeaderComponent(id="header", label="Title"))
    .slot("body", TextField(id="content", label="Content"))
    .build()
)

# Custom grids (full control)
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
        TextField(id="content", label="Content")
    ])
    .build()
)

# Row/column helpers (linear layouts)
grid = GridBuilder().row(
    TextField(id="field1", label="Field 1"),
    TextField(id="field2", label="Field 2"),
    TextField(id="field3", label="Field 3")
).build()
```

**Benefits:**
- ✅ Chainable, readable API
- ✅ Preset templates for common layouts
- ✅ No manual cell ID generation
- ✅ Type-safe with Pydantic validation
- ✅ 60-70% less code

**Available presets:**
- `PRESETS.header_body` - Header + body sections
- `PRESETS.three_column` - Three equal columns
- `PRESETS.sidebar` - Fixed sidebar + content
- `PRESETS.holy_grail` - Header + 3 columns + footer

See the [Grid Layouts User Guide](../guides/grid-layouts.md) for complete documentation.

### Legacy Helper Functions

The original helper functions are still available for backward compatibility:

```python
from pynodewidget.grid_layouts import (
    create_three_column_grid,
    create_vertical_stack_grid,
    create_header_body_grid,
    create_sidebar_grid,
    create_custom_grid,
)

# Three-column layout
grid = create_three_column_grid(
    left_components=[...],
    center_components=[...],
    right_components=[...],
    column_widths=["auto", "1fr", "auto"],
    gap="8px"
)

# Vertical stack
grid = create_vertical_stack_grid(
    components=[...],
    gap="12px"
)

# Custom grid
grid = create_custom_grid(
    rows=["60px", "1fr", "40px"],
    columns=["200px", "1fr", "200px"],
    cells=[...],
    gap="8px"
)
```

**Note:** Consider migrating to `GridBuilder` for more maintainable code.

## CSS Styling for Spanning

For components to properly fill spanning cells, the CSS cascade requires explicit sizing at each level:

### Level 1: Grid Cell (CSS Grid auto-sizes)
```css
.nested-grid-cell {
  /* CSS Grid automatically sizes based on gridRow/gridColumn */
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
}
```

### Level 2: Cell Content Wrapper (Must fill cell)
```css
.nested-grid-cell-content {
  display: flex;
  width: 100%;   /* Fill cell width */
  height: 100%;  /* Fill cell height */
}
```

### Level 3: Component (Must fill wrapper)
```css
.component-header {
  width: 100%;   /* Fill wrapper width */
  height: 100%;  /* Fill wrapper height */
  background-color: var(--bg-color);
}
```

Without this three-level sizing chain, components will only wrap their content rather than filling the spanning area.

## Testing Grid Layouts

The repository includes comprehensive test suites:

**Visual Testing:**
```bash
cd js && bun run dev
# Open http://localhost:3000 and click "Grid Spanning" tab
```

**Unit Tests:**
```bash
cd js && bun run test
# Tests in: js/tests/layouts/
```

**Test Files:**
- `GridLayoutComponent.test.tsx` - Basic grid rendering
- `GridLayoutSpanning.test.tsx` - Cell spanning behavior
- `GridLayoutPatterns.test.tsx` - Common layout patterns

## Advanced: Nested Grids

You can nest grids within cells for complex layouts:

```python
# Inner grid as a component
inner_grid = GridLayoutComponent(
    id="inner-grid",
    type="grid-layout",
    rows=["1fr", "1fr"],
    columns=["1fr", "1fr"],
    gap="4px",
    cells=[...]
)

# Outer grid containing the inner grid
outer_grid = NodeGrid(
    rows=["auto", "1fr"],
    columns=["1fr"],
    gap="8px",
    cells=[
        GridCell(
            id="header-cell",
            coordinates=GridCoordinates(row=1, col=1),
            components=[HeaderComponent(...)]
        ),
        GridCell(
            id="content-cell",
            coordinates=GridCoordinates(row=2, col=1),
            components=[inner_grid]  # Nested grid here
        ),
    ]
)
```

## Performance Considerations

- **Grid vs Flex**: Use CSS Grid for two-dimensional layouts, Flexbox for one-dimensional
- **Auto-sizing**: `auto` rows/columns measure content - use sparingly for better performance
- **Fixed sizes**: Use `px` or `fr` units when possible to avoid layout recalculation
- **Gap sizing**: Gap is applied between all cells - factor this into total dimensions

## Related Documentation

- [Component Library](components.md) - Available components for cells
- [Architecture](architecture.md) - Overall system design
- [JavaScript Development](javascript.md) - Frontend implementation details
- [User Guide: Custom Nodes](../guides/custom-nodes.md) - Creating nodes with custom layouts

## API Reference

### Python Models

```python
from pynodewidget.models import (
    NodeGrid,      # Top-level grid
    GridCell,      # Cell in grid
    GridCoordinates,  # Cell position
    CellLayout,    # Layout within cell
)
```

### TypeScript Types

```typescript
import type {
  NodeGrid,
  GridCell,
  GridCoordinates,
  CellLayout,
} from "@/types/schema";
```

### Helper Functions

```python
from pynodewidget.grid_layouts import (
    create_three_column_grid,
    create_vertical_stack_grid,
    create_header_body_grid,
    create_sidebar_grid,
    create_custom_grid,
)
```
