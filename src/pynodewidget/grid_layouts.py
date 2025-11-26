"""Grid layout helper functions for PyNodeWidget.

This module provides Python functions to create grid layout configurations
that match the TypeScript grid layout helpers on the frontend.

Example:
    >>> from pynodewidget.grid_layouts import (
    ...     create_horizontal_grid_layout,
    ...     create_vertical_grid_layout,
    ...     create_sidebar_grid_layout
    ... )
    >>> 
    >>> # Create a node with horizontal grid layout
    >>> widget = NodeFlowWidget()
    >>> widget.add_node_type_from_schema(
    ...     json_schema={"type": "object", "properties": {...}},
    ...     type_name="processor",
    ...     label="Data Processor",
    ...     grid_layout=create_horizontal_grid_layout()
    ... )
"""

from typing import Dict, Any, List, Literal, Optional
from pynodewidget.models import (
    NodeGrid,
    GridCell,
    GridCoordinates,
    CellLayout,
    ComponentType,
    BaseHandle,
    LabeledHandle,
    ButtonHandle,
    TextField,
    NumberField,
    BoolField,
    SelectField,
)


# Type aliases
ContentArea = Literal["inputs", "outputs", "parameters"]


# =============================================================================
# NEW THREE-LAYER GRID HELPERS
# =============================================================================

def create_three_column_grid(
    left_components: Optional[List[ComponentType]] = None,
    center_components: Optional[List[ComponentType]] = None,
    right_components: Optional[List[ComponentType]] = None,
    column_widths: Optional[List[str]] = None,
    gap: str = "8px"
) -> NodeGrid:
    """Create a three-column grid layout with custom components.
    
    This is the new component-based version of the horizontal layout.
    
    Args:
        left_components: Components for left column (typically inputs)
        center_components: Components for center column (typically parameters)
        right_components: Components for right column (typically outputs)
        column_widths: CSS grid column widths
        gap: Gap between cells
        
    Returns:
        NodeGrid with three-column layout
        
    Example:
        >>> from pynodewidget.models import ButtonHandle, TextField
        >>> grid = create_three_column_grid(
        ...     left_components=[
        ...         ButtonHandle(id="in1", label="Input", handle_type="input")
        ...     ],
        ...     center_components=[
        ...         TextField(id="name", label="Name", value="test")
        ...     ],
        ...     right_components=[
        ...         ButtonHandle(id="out1", label="Output", handle_type="output")
        ...     ]
        ... )
    """
    if column_widths is None:
        column_widths = ["auto", "1fr", "auto"]
    
    cells = []
    
    if left_components:
        cells.append(GridCell(
            id="left-cell",
            coordinates=GridCoordinates(row=1, col=1),
            layout=CellLayout(type="flex", direction="column", align="stretch", gap="8px"),
            components=left_components
        ))
    
    if center_components:
        cells.append(GridCell(
            id="center-cell",
            coordinates=GridCoordinates(row=1, col=2),
            layout=CellLayout(type="flex", direction="column", gap="12px"),
            components=center_components
        ))
    
    if right_components:
        cells.append(GridCell(
            id="right-cell",
            coordinates=GridCoordinates(row=1, col=3),
            layout=CellLayout(type="flex", direction="column", align="stretch", gap="8px"),
            components=right_components
        ))
    
    return NodeGrid(
        rows=["1fr"],
        columns=column_widths,
        gap=gap,
        cells=cells
    )


def create_vertical_stack_grid(
    top_components: Optional[List[ComponentType]] = None,
    middle_components: Optional[List[ComponentType]] = None,
    bottom_components: Optional[List[ComponentType]] = None,
    row_heights: Optional[List[str]] = None,
    gap: str = "8px"
) -> NodeGrid:
    """Create a vertical stack grid layout with custom components.
    
    Args:
        top_components: Components for top row
        middle_components: Components for middle row
        bottom_components: Components for bottom row
        row_heights: CSS grid row heights
        gap: Gap between cells
        
    Returns:
        NodeGrid with vertical stack layout
    """
    if row_heights is None:
        row_heights = ["auto", "1fr", "auto"]
    
    cells = []
    
    if top_components:
        cells.append(GridCell(
            id="top-cell",
            coordinates=GridCoordinates(row=1, col=1),
            layout=CellLayout(type="flex", direction="row", justify="center", gap="8px"),
            components=top_components
        ))
    
    if middle_components:
        cells.append(GridCell(
            id="middle-cell",
            coordinates=GridCoordinates(row=2, col=1),
            layout=CellLayout(type="flex", direction="column", gap="12px"),
            components=middle_components
        ))
    
    if bottom_components:
        cells.append(GridCell(
            id="bottom-cell",
            coordinates=GridCoordinates(row=3, col=1),
            layout=CellLayout(type="flex", direction="row", justify="center", gap="8px"),
            components=bottom_components
        ))
    
    return NodeGrid(
        rows=row_heights,
        columns=["1fr"],
        gap=gap,
        cells=cells
    )


def create_custom_grid(
    rows: List[str],
    columns: List[str],
    cells: List[GridCell],
    gap: str = "8px"
) -> NodeGrid:
    """Create a fully custom grid layout.
    
    Args:
        rows: CSS grid row definitions
        columns: CSS grid column definitions
        cells: List of GridCell objects
        gap: Gap between cells
        
    Returns:
        NodeGrid with custom layout
    """
    return NodeGrid(
        rows=rows,
        columns=columns,
        gap=gap,
        cells=cells
    )


def create_header_body_grid(
    header_components: List[ComponentType],
    body_components: List[ComponentType],
    gap: str = "0px"
) -> NodeGrid:
    """Create a grid with header and body sections.
    
    Args:
        header_components: Components for header row
        body_components: Components for body row
        gap: Gap between cells
        
    Returns:
        NodeGrid with header/body layout
    """
    return NodeGrid(
        rows=["auto", "1fr"],
        columns=["1fr"],
        gap=gap,
        cells=[
            GridCell(
                id="header-cell",
                coordinates=GridCoordinates(row=1, col=1),
                layout=CellLayout(type="flex", direction="row", justify="space-between", align="center"),
                components=header_components
            ),
            GridCell(
                id="body-cell",
                coordinates=GridCoordinates(row=2, col=1),
                layout=CellLayout(type="flex", direction="column", gap="8px"),
                components=body_components
            )
        ]
    )


# =============================================================================
# MIGRATION HELPERS: Convert old handles to new components
# =============================================================================

def convert_handles_to_components(
    inputs: Optional[List[Dict[str, Any]]] = None,
    outputs: Optional[List[Dict[str, Any]]] = None,
    handle_style: Literal["base", "labeled", "button"] = "base"
) -> tuple[List[ComponentType], List[ComponentType]]:
    """Convert old handle dictionaries to new component types.
    
    Args:
        inputs: List of input handle dicts with 'id' and 'label'
        outputs: List of output handle dicts with 'id' and 'label'
        handle_style: Handle style to use
        
    Returns:
        Tuple of (input_components, output_components)
    """
    HandleClass = {
        "base": BaseHandle,
        "labeled": LabeledHandle,
        "button": ButtonHandle
    }[handle_style]
    
    input_components = []
    if inputs:
        for h in inputs:
            input_components.append(
                HandleClass(
                    id=h["id"],
                    label=h["label"],
                    handle_type="input",
                    dataType=h.get("dataType"),
                    required=h.get("required", False)
                )
            )
    
    output_components = []
    if outputs:
        for h in outputs:
            output_components.append(
                HandleClass(
                    id=h["id"],
                    label=h["label"],
                    handle_type="output",
                    dataType=h.get("dataType"),
                    required=h.get("required", False)
                )
            )
    
    return input_components, output_components


def json_schema_to_components(
    json_schema: Dict[str, Any],
    values: Optional[Dict[str, Any]] = None
) -> List[ComponentType]:
    """Convert JSON Schema properties to component list.
    
    Args:
        json_schema: JSON Schema object with properties
        values: Current field values
        
    Returns:
        List of field components
    """
    components = []
    values = values or {}
    
    if "properties" not in json_schema:
        return components
    
    for field_id, prop in json_schema["properties"].items():
        field_type = prop.get("type", "string")
        label = prop.get("title", field_id)
        value = values.get(field_id)
        
        if field_type == "string":
            if "enum" in prop:
                components.append(SelectField(
                    id=field_id,
                    label=label,
                    value=value or prop.get("default", ""),
                    options=prop["enum"]
                ))
            else:
                components.append(TextField(
                    id=field_id,
                    label=label,
                    value=value or prop.get("default", ""),
                    placeholder=prop.get("description", "")
                ))
        elif field_type in ("number", "integer"):
            components.append(NumberField(
                id=field_id,
                label=label,
                value=value if value is not None else prop.get("default", 0),
                min=prop.get("minimum"),
                max=prop.get("maximum")
            ))
        elif field_type == "boolean":
            components.append(BoolField(
                id=field_id,
                label=label,
                value=value if value is not None else prop.get("default", False)
            ))
    
    return components


# =============================================================================
# OLD GRID SYSTEM HELPERS (Deprecated)
# =============================================================================
