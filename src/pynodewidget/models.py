"""Pydantic models for grid layout configuration.

This module provides typed Pydantic models for defining grid layouts,
ensuring type safety and validation for grid configurations.
"""

from typing import List, Optional, Literal, Dict, Any, Union, Annotated
from pydantic import BaseModel, Field


# =============================================================================
# LAYER 3: COMPONENTS (Bottom Layer - Atomic UI Units)
# =============================================================================

class Component(BaseModel):
    """Base class for all atomic components."""
    id: str = Field(..., description="Unique component ID")
    type: str = Field(..., description="Component type discriminator")


# Handle Components (with handle_type enum)

class BaseHandle(Component):
    """Minimal dot/circle handle with handle_type enum.
    
    Type discriminator: "base-handle"
    
    handle_type enum:
    - "input": Target connection point (receives data)
    - "output": Source connection point (sends data)
    """
    type: Literal["base-handle"] = "base-handle"
    handle_type: Literal["input", "output"] = Field(..., description="Connection direction")
    label: str = Field(..., description="Display label")
    dataType: Optional[str] = Field(None, description="For connection validation")
    required: bool = Field(default=False, description="Whether handle is required")


class LabeledHandle(Component):
    """Handle with integrated text label and handle_type enum.
    
    Type discriminator: "labeled-handle"
    
    handle_type enum:
    - "input": Target connection point (receives data)
    - "output": Source connection point (sends data)
    """
    type: Literal["labeled-handle"] = "labeled-handle"
    handle_type: Literal["input", "output"] = Field(..., description="Connection direction")
    label: str = Field(..., description="Display label")
    dataType: Optional[str] = Field(None, description="For connection validation")
    required: bool = Field(default=False, description="Whether handle is required")


class ButtonHandle(Component):
    """Button-styled handle with handle_type enum.
    
    Type discriminator: "button-handle"
    
    handle_type enum:
    - "input": Target connection point (receives data)
    - "output": Source connection point (sends data)
    """
    type: Literal["button-handle"] = "button-handle"
    handle_type: Literal["input", "output"] = Field(..., description="Connection direction")
    label: str = Field(..., description="Display label")
    dataType: Optional[str] = Field(None, description="For connection validation")
    required: bool = Field(default=False, description="Whether handle is required")


# Field Components

class TextField(Component):
    """Text input field."""
    type: Literal["text"] = "text"
    label: str = Field(..., description="Field label")
    value: str = Field(default="", description="Current value")
    placeholder: str = Field(default="", description="Placeholder text")


class NumberField(Component):
    """Number input field."""
    type: Literal["number"] = "number"
    label: str = Field(..., description="Field label")
    value: float = Field(default=0, description="Current value")
    min: Optional[float] = Field(None, description="Minimum value")
    max: Optional[float] = Field(None, description="Maximum value")


class BoolField(Component):
    """Boolean checkbox/toggle field."""
    type: Literal["bool"] = "bool"
    label: str = Field(..., description="Field label")
    value: bool = Field(default=False, description="Current value")


class SelectField(Component):
    """Dropdown select field."""
    type: Literal["select"] = "select"
    label: str = Field(..., description="Field label")
    value: str = Field(default="", description="Currently selected value")
    options: List[str] = Field(default_factory=list, description="Available options")


# Other Components

class HeaderComponent(Component):
    """Header with icon and title."""
    type: Literal["header"] = "header"
    label: str = Field(..., description="Header text")
    icon: Optional[str] = Field(None, description="Unicode emoji or icon")
    bgColor: Optional[str] = Field(None, description="Background color (CSS)")
    textColor: Optional[str] = Field(None, description="Text color (CSS)")


class ButtonComponent(Component):
    """Action button."""
    type: Literal["button"] = "button"
    label: str = Field(..., description="Button text")
    action: str = Field(..., description="Action identifier")
    variant: Literal["primary", "secondary"] = Field(default="primary", description="Button style")


class DividerComponent(Component):
    """Visual divider/separator."""
    type: Literal["divider"] = "divider"
    orientation: Literal["horizontal", "vertical"] = Field(default="horizontal", description="Divider orientation")


class SpacerComponent(Component):
    """Empty space for layout control."""
    type: Literal["spacer"] = "spacer"
    size: str = Field(default="8px", description="Size of space (CSS value)")


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


# Discriminated Union of all components
ComponentType = Annotated[
    Union[
        BaseHandle,
        LabeledHandle,
        ButtonHandle,
        TextField,
        NumberField,
        BoolField,
        SelectField,
        HeaderComponent,
        ButtonComponent,
        DividerComponent,
        SpacerComponent,
        GridLayoutComponent,  # NEW: Nested grid layout support
    ],
    Field(discriminator="type")
]


# =============================================================================
# LAYER 2: GRID CELL (Middle Layer - Layouts Components)
# =============================================================================

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
    components: List[ComponentType] = Field(default_factory=list, description="Components in this cell")


# =============================================================================
# LAYER 1: NODE GRID (Top Layer - Positions Cells)
# =============================================================================

class NodeGrid(BaseModel):
    """Top-level CSS Grid layout."""
    rows: List[str] = Field(..., description="Grid rows (e.g., ['auto', '1fr'])")
    columns: List[str] = Field(..., description="Grid columns (e.g., ['80px', '1fr', '80px'])")
    gap: str = Field(default="8px", description="Gap between cells")
    cells: List[GridCell] = Field(..., description="Grid cells to position")


# =============================================================================
# OLD GRID SYSTEM (Deprecated but kept for reference)
# =============================================================================

class GridAreaStyle(BaseModel):
    """CSS styles for a grid area."""
    justifyContent: Optional[str] = None
    alignItems: Optional[str] = None
    padding: Optional[str] = None
    className: Optional[str] = None


class GridArea(BaseModel):
    """Definition of a content area within the grid layout."""
    area: Literal["inputs", "outputs", "parameters"] = Field(
        ...,
        description="Which content to render in this area"
    )
    column: int = Field(..., ge=1, description="Column position (1-indexed)")
    row: int = Field(..., ge=1, description="Row position (1-indexed)")
    columnSpan: Optional[int] = Field(None, ge=1, description="Number of columns to span")
    rowSpan: Optional[int] = Field(None, ge=1, description="Number of rows to span")
    style: Optional[GridAreaStyle] = Field(None, description="CSS styles for this area")


class GridTemplate(BaseModel):
    """Grid template configuration for CSS Grid."""
    columns: str = Field(..., description="CSS grid-template-columns value")
    rows: str = Field(..., description="CSS grid-template-rows value")
    gap: str = Field(default="8px", description="Gap between grid cells")


class GridLayoutConfig(BaseModel):
    """Complete grid layout configuration."""
    type: Literal["grid"] = "grid"
    template: GridTemplate = Field(..., description="Grid template configuration")
    areas: List[GridArea] = Field(..., description="Content area definitions")
    
    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "type": "grid",
                    "template": {
                        "columns": "auto 1fr auto",
                        "rows": "1fr",
                        "gap": "8px"
                    },
                    "areas": [
                        {"area": "inputs", "column": 1, "row": 1},
                        {"area": "parameters", "column": 2, "row": 1},
                        {"area": "outputs", "column": 3, "row": 1}
                    ]
                }
            ]
        }
    }


class NodeHeader(BaseModel):
    """Node header configuration."""
    show: bool = Field(default=True, description="Whether to show the header")
    icon: Optional[str] = Field(None, description="Unicode emoji or icon")
    bgColor: Optional[str] = Field(None, description="Background color (CSS color)")
    textColor: Optional[str] = Field(None, description="Text color (CSS color)")
    className: Optional[str] = Field(None, description="Additional CSS classes")


class NodeFooter(BaseModel):
    """Node footer configuration."""
    show: bool = Field(default=False, description="Whether to show the footer")
    text: Optional[str] = Field(None, description="Footer text")
    className: Optional[str] = Field(None, description="CSS classes for styling")


class NodeStyle(BaseModel):
    """Node styling configuration."""
    minWidth: Optional[str] = Field(None, description="Minimum node width (CSS value)")
    maxWidth: Optional[str] = Field(None, description="Maximum node width (CSS value)")
    shadow: Optional[Literal["sm", "md", "lg", "xl", "none"]] = Field(None, description="Shadow size")
    className: Optional[str] = Field(None, description="Additional CSS classes")


class NodeHandle(BaseModel):
    """Node handle (input/output) configuration."""
    id: str = Field(..., description="Unique handle identifier")
    label: str = Field(..., description="Display label")
    handleType: Optional[Literal["base", "button", "labeled"]] = Field(
        None, 
        description="Handle style override"
    )


class CustomNodeData(BaseModel):
    """Complete node data configuration with grid layout support.
    
    This is the main model that defines a node's complete structure,
    including its parameters, layout, styling, and handles.
    
    Now supports both old grid system (GridLayoutConfig) and new three-layer
    system (NodeGrid).
    """
    label: str = Field(..., description="Node display label")
    
    # New three-layer grid system (preferred)
    grid: Optional[NodeGrid] = Field(None, description="New three-layer grid layout")
    
    # Old grid system (deprecated but still supported)
    parameters: Optional[Dict[str, Any]] = Field(None, description="JSON Schema for parameters (old system)")
    gridLayout: Optional[GridLayoutConfig] = Field(None, description="Grid layout configuration (old system)")
    
    # Optional fields
    inputs: List[NodeHandle] = Field(default_factory=list, description="Input handles (old system)")
    outputs: List[NodeHandle] = Field(default_factory=list, description="Output handles (old system)")
    values: Dict[str, Any] = Field(default_factory=dict, description="Current parameter values")
    handleType: Literal["base", "button", "labeled"] = Field(
        default="base",
        description="Default handle type for all handles"
    )
    header: Optional[NodeHeader] = Field(None, description="Header configuration")
    footer: Optional[NodeFooter] = Field(None, description="Footer configuration")
    style: Optional[NodeStyle] = Field(None, description="Styling configuration")
    description: Optional[str] = Field(None, description="Node description")
    
    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "label": "Data Processor",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "name": {"type": "string", "title": "Name"}
                        }
                    },
                    "gridLayout": {
                        "type": "grid",
                        "template": {"columns": "auto 1fr auto", "rows": "1fr", "gap": "8px"},
                        "areas": [
                            {"area": "inputs", "column": 1, "row": 1},
                            {"area": "parameters", "column": 2, "row": 1},
                            {"area": "outputs", "column": 3, "row": 1}
                        ]
                    },
                    "inputs": [{"id": "in", "label": "Input"}],
                    "outputs": [{"id": "out", "label": "Output"}],
                    "handleType": "base"
                }
            ]
        }
    }


class NodeTemplate(BaseModel):
    """Node template for registering node types."""
    type: str = Field(..., description="Unique node type identifier")
    label: str = Field(..., description="Display label for node type")
    icon: str = Field(default="", description="Unicode emoji or icon")
    description: str = Field(default="", description="Node description")
    category: str = Field(default="general", description="Node category")
    defaultData: CustomNodeData = Field(..., description="Default node configuration")
    
    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "type": "processor",
                    "label": "Data Processor",
                    "icon": "⚙️",
                    "description": "Process data",
                    "defaultData": {
                        "label": "Processor",
                        "parameters": {"type": "object", "properties": {}},
                        "gridLayout": {
                            "type": "grid",
                            "template": {"columns": "auto 1fr auto", "rows": "1fr"},
                            "areas": []
                        }
                    }
                }
            ]
        }
    }


# =============================================================================
# FORWARD REFERENCE RESOLUTION
# =============================================================================
# Resolve forward references for recursive structures
# This is required for GridLayoutComponent which contains GridCell,
# which in turn can contain GridLayoutComponent (recursion)
GridLayoutComponent.model_rebuild()
GridCell.model_rebuild()
