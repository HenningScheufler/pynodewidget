"""Fluent builder for creating grid layouts."""

from typing import Dict, List, Literal, Optional, TYPE_CHECKING
from .presets import PRESETS, PresetConfig

if TYPE_CHECKING:
    from ..models import NodeGrid, Component, ComponentType


class GridBuilder:
    """Fluent builder for creating grid layouts.
    
    Provides a clean, chainable API for building complex grid layouts
    with significantly less code than manual construction.
    
    Example:
        >>> # Using a preset
        >>> grid = (GridBuilder.preset("three_column")
        ...     .slot("left", [InputHandle(...)])
        ...     .slot("center", [TextField(...)])
        ...     .slot("right", [OutputHandle(...)])
        ...     .build())
        
        >>> # Using rows/cols
        >>> grid = (GridBuilder()
        ...     .rows("auto", "1fr")
        ...     .cols("1fr")
        ...     .gap("12px")
        ...     .row(1, HeaderComponent(...))
        ...     .row(2, TextField(...), NumberField(...))
        ...     .build())
        
        >>> # Using custom cells with layout control
        >>> grid = (GridBuilder()
        ...     .rows("auto", "1fr")
        ...     .cols("auto", "1fr", "auto")
        ...     .cell(1, 1, components=[InputHandle(...)],
        ...           layout_type="flex", direction="column", gap="8px")
        ...     .cell(1, 2, components=[TextField(...)],
        ...           layout_type="flex", direction="column", gap="12px")
        ...     .build())
    """
    
    def __init__(self):
        """Initialize a new GridBuilder."""
        self._preset: Optional[str] = None
        self._rows: Optional[List[str]] = None
        self._cols: Optional[List[str]] = None
        self._gap: str = "8px"
        self._slots: Dict[str, List['ComponentType']] = {}
        self._cells: List[Dict] = []  # Store cell data as dicts temporarily
        
    @classmethod
    def preset(cls, preset_name: str) -> "GridBuilder":
        """Create a GridBuilder using a preset layout.
        
        Args:
            preset_name: Name of preset ("three_column", "holy_grail", "sidebar", "header_body")
            
        Returns:
            GridBuilder instance configured with preset
            
        Raises:
            ValueError: If preset_name is not recognized
            
        Example:
            >>> grid = (GridBuilder.preset("three_column")
            ...     .slot("left", [InputHandle(id="in1")])
            ...     .slot("center", [TextField(id="name")])
            ...     .slot("right", [OutputHandle(id="out1")])
            ...     .build())
        """
        if preset_name not in PRESETS:
            valid_presets = ', '.join(PRESETS.keys())
            raise ValueError(
                f"Unknown preset: '{preset_name}'. Valid presets: {valid_presets}"
            )
        
        builder = cls()
        builder._preset = preset_name
        return builder
    
    def slot(self, name: str, components: List['ComponentType']) -> "GridBuilder":
        """Assign components to a named slot (for preset layouts).
        
        Args:
            name: Slot name (depends on preset, e.g., "left", "center", "right")
            components: List of components to place in this slot
            
        Returns:
            Self for method chaining
            
        Raises:
            ValueError: If no preset is configured
            
        Example:
            >>> builder.slot("left", [InputHandle(id="in1"), InputHandle(id="in2")])
        """
        if self._preset is None:
            raise ValueError("slot() can only be used with preset layouts")
        
        self._slots[name] = components
        return self
    
    def rows(self, *row_sizes: str) -> "GridBuilder":
        """Define grid row sizes.
        
        Args:
            *row_sizes: CSS grid row definitions (e.g., "auto", "1fr", "100px")
            
        Returns:
            Self for method chaining
            
        Example:
            >>> builder.rows("auto", "1fr", "auto")
        """
        self._rows = list(row_sizes)
        return self
    
    def cols(self, *col_sizes: str) -> "GridBuilder":
        """Define grid column sizes.
        
        Args:
            *col_sizes: CSS grid column definitions (e.g., "auto", "1fr", "80px")
            
        Returns:
            Self for method chaining
            
        Example:
            >>> builder.cols("auto", "1fr", "auto")
        """
        self._cols = list(col_sizes)
        return self
    
    def gap(self, gap: str) -> "GridBuilder":
        """Set gap between grid cells.
        
        Args:
            gap: CSS gap value (e.g., "8px", "1rem")
            
        Returns:
            Self for method chaining
            
        Example:
            >>> builder.gap("12px")
        """
        self._gap = gap
        return self
    
    def cell(
        self,
        row: int,
        col: int,
        components: List['ComponentType'],
        row_span: int = 1,
        col_span: int = 1,
        layout_type: Literal["flex", "grid", "stack"] = "flex",
        direction: Literal["row", "column"] = "column",
        align: Literal["start", "center", "end", "stretch"] = "start",
        justify: Literal["start", "center", "end", "space-between"] = "start",
        gap: str = "4px"
    ) -> "GridBuilder":
        """Add a custom cell with explicit layout configuration.
        
        Args:
            row: Row position (1-indexed)
            col: Column position (1-indexed)
            components: List of components to place in this cell
            row_span: Number of rows to span (default: 1)
            col_span: Number of columns to span (default: 1)
            layout_type: How to layout components ("flex", "grid", "stack")
            direction: Layout direction for flex ("row" or "column")
            align: Align items ("start", "center", "end", "stretch")
            justify: Justify content ("start", "center", "end", "space-between")
            gap: Gap between components in cell (CSS value)
            
        Returns:
            Self for method chaining
            
        Example:
            >>> builder.cell(1, 1, [InputHandle(id="in1")],
            ...              layout_type="flex", direction="column", 
            ...              align="stretch", gap="8px")
        """
        self._cells.append({
            "row": row,
            "col": col,
            "row_span": row_span,
            "col_span": col_span,
            "components": components,
            "layout": {
                "type": layout_type,
                "direction": direction,
                "align": align,
                "justify": justify,
                "gap": gap
            }
        })
        return self
    
    def row(self, row_num: int, *components: 'ComponentType') -> "GridBuilder":
        """Add components to a row, auto-distributing across columns.
        
        Creates one cell per component, positioned in the specified row.
        Automatically expands columns if needed.
        
        Args:
            row_num: Row number (1-indexed)
            *components: Components to place in this row
            
        Returns:
            Self for method chaining
            
        Example:
            >>> builder.row(1, HeaderComponent(id="h1"))
            >>> builder.row(2, TextField(id="f1"), NumberField(id="f2"))
        """
        if not components:
            return self
        
        # Auto-expand columns if needed
        num_cols = len(components)
        if self._cols is None:
            self._cols = ["1fr"] * num_cols
        elif len(self._cols) < num_cols:
            self._cols.extend(["1fr"] * (num_cols - len(self._cols)))
        
        # Create a cell for each component
        for col_idx, component in enumerate(components, start=1):
            self._cells.append({
                "row": row_num,
                "col": col_idx,
                "row_span": 1,
                "col_span": 1,
                "components": [component],
                "layout": {
                    "type": "flex",
                    "direction": "column",
                    "align": "start",
                    "justify": "start",
                    "gap": "4px"
                }
            })
        
        # Auto-expand rows if needed
        if self._rows is None:
            self._rows = ["auto"] * row_num
        elif len(self._rows) < row_num:
            self._rows.extend(["auto"] * (row_num - len(self._rows)))
        
        return self
    
    def col(self, col_num: int, *components: 'ComponentType') -> "GridBuilder":
        """Add components to a column, auto-distributing across rows.
        
        Creates one cell per component, positioned in the specified column.
        Automatically expands rows if needed.
        
        Args:
            col_num: Column number (1-indexed)
            *components: Components to place in this column
            
        Returns:
            Self for method chaining
            
        Example:
            >>> builder.col(1, InputHandle(id="in1"), InputHandle(id="in2"))
            >>> builder.col(2, TextField(id="f1"), NumberField(id="f2"))
        """
        if not components:
            return self
        
        # Auto-expand rows if needed
        num_rows = len(components)
        if self._rows is None:
            self._rows = ["auto"] * num_rows
        elif len(self._rows) < num_rows:
            self._rows.extend(["auto"] * (num_rows - len(self._rows)))
        
        # Create a cell for each component
        for row_idx, component in enumerate(components, start=1):
            self._cells.append({
                "row": row_idx,
                "col": col_num,
                "row_span": 1,
                "col_span": 1,
                "components": [component],
                "layout": {
                    "type": "flex",
                    "direction": "column",
                    "align": "start",
                    "justify": "start",
                    "gap": "4px"
                }
            })
        
        # Auto-expand columns if needed
        if self._cols is None:
            self._cols = ["1fr"] * col_num
        elif len(self._cols) < col_num:
            self._cols.extend(["1fr"] * (col_num - len(self._cols)))
        
        return self
    
    def build(self) -> 'NodeGrid':
        """Build the final NodeGrid from the configured layout.
        
        Returns:
            Constructed NodeGrid instance
            
        Raises:
            ValueError: If configuration is invalid
            
        Example:
            >>> grid = builder.build()
        """
        if self._preset is not None:
            return self._build_from_preset()
        else:
            return self._build_from_cells()
    
    def _build_from_preset(self) -> 'NodeGrid':
        """Build NodeGrid using preset configuration."""
        preset = PRESETS[self._preset]
        return preset.build(self._slots, self._gap)
    
    def _build_from_cells(self) -> 'NodeGrid':
        """Build NodeGrid from manual cell configuration."""
        from ..models import NodeGrid, GridCell, GridCoordinates, CellLayout
        
        if not self._cells:
            raise ValueError("No cells defined. Use .cell(), .row(), or .col() to add content")
        
        if self._rows is None:
            raise ValueError("No rows defined. Use .rows() to define grid rows")
        
        if self._cols is None:
            raise ValueError("No columns defined. Use .cols() to define grid columns")
        
        # Convert cell dicts to GridCell objects
        cells = []
        for idx, cell_data in enumerate(self._cells):
            cells.append(GridCell(
                id=f"cell-{idx}",
                coordinates=GridCoordinates(
                    row=cell_data["row"],
                    col=cell_data["col"],
                    row_span=cell_data["row_span"],
                    col_span=cell_data["col_span"]
                ),
                layout=CellLayout(**cell_data["layout"]),
                components=cell_data["components"]
            ))
        
        return NodeGrid(
            rows=self._rows,
            columns=self._cols,
            gap=self._gap,
            cells=cells
        )
