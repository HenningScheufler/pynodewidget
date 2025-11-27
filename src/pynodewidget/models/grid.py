"""Grid layout models for the three-layer system."""

from typing import List, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field

if TYPE_CHECKING:
    from .components import ComponentType


class GridCoordinates(BaseModel):
    """Position in the grid (1-indexed, CSS Grid convention)."""
    row: int = Field(..., ge=1, description="Row position (1-indexed)")
    col: int = Field(..., ge=1, description="Column position (1-indexed)")
    row_span: int = Field(default=1, ge=1, description="Number of rows to span")
    col_span: int = Field(default=1, ge=1, description="Number of columns to span")


class CellLayout(BaseModel):
    """How to layout components within a cell."""
    type: Literal["flex", "grid", "stack"] = Field(default="flex", description="Layout type")
    direction: Literal["row", "column"] = Field(default="column", description="Layout direction (for flex)")
    align: Literal["start", "center", "end", "stretch"] = Field(default="start", description="Align items")
    justify: Literal["start", "center", "end", "space-between"] = Field(default="start", description="Justify content")
    gap: str = Field(default="4px", description="Gap between components (CSS value)")


class GridCell(BaseModel):
    """A cell in the grid with its own layout system."""
    id: str = Field(..., description="Unique cell ID")
    coordinates: GridCoordinates = Field(..., description="Where cell is positioned")
    layout: CellLayout = Field(default_factory=CellLayout, description="How to arrange components inside cell")
    components: List['ComponentType'] = Field(default_factory=list, description="Components in this cell")


class NodeGrid(BaseModel):
    """Top-level CSS Grid layout.
    
    This is Layer 1 of the three-layer architecture:
    - Layer 1: NodeGrid - Positions cells in CSS Grid
    - Layer 2: GridCell - Arranges components within cells  
    - Layer 3: Components - Individual UI elements
    """
    rows: List[str] = Field(..., description="Grid rows (e.g., ['auto', '1fr'])")
    columns: List[str] = Field(..., description="Grid columns (e.g., ['80px', '1fr', '80px'])")
    gap: str = Field(default="8px", description="Gap between cells")
    cells: List[GridCell] = Field(..., description="Grid cells to position")
