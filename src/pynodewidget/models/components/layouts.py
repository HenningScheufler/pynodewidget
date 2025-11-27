"""Nested grid layout component for recursive composition."""

from typing import List, Literal, Optional, TYPE_CHECKING
from pydantic import Field
from .base import Component

if TYPE_CHECKING:
    from ..grid import GridCell


class GridLayoutComponent(Component):
    """Nested grid layout component that can contain cells with components.
    
    This enables recursive layout composition, allowing grids within grids
    for complex node structures.
    
    Type discriminator: "grid-layout"
    
    Example use cases:
    - Sidebar layout with its own grid
    - Tabbed sections with independent layouts
    - Complex forms with grouped sections
    - Dashboard-style layouts within nodes
    """
    type: Literal["grid-layout"] = "grid-layout"
    
    # Grid template definition
    rows: List[str] = Field(
        ..., 
        description="Grid row template (CSS values, e.g., ['auto', '1fr', 'auto'])"
    )
    columns: List[str] = Field(
        ..., 
        description="Grid column template (CSS values, e.g., ['80px', '1fr', '80px'])"
    )
    gap: str = Field(
        default="8px", 
        description="Gap between grid cells (CSS value)"
    )
    
    # Cells within this nested grid (forward reference for recursion)
    cells: List['GridCell'] = Field(
        default_factory=list, 
        description="Grid cells positioned within this nested grid"
    )
    
    # Optional styling/behavior
    minHeight: Optional[str] = Field(
        None, 
        description="Minimum height of nested grid (CSS value, e.g., '100px')"
    )
    minWidth: Optional[str] = Field(
        None, 
        description="Minimum width of nested grid (CSS value, e.g., '200px')"
    )
    className: Optional[str] = Field(
        None, 
        description="Additional CSS classes for styling"
    )
