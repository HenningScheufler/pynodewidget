"""Type definitions for PyNodeWidget using TypedDict.

Provides structured types for node data, templates, and configurations
that match the TypeScript interfaces on the frontend.
"""

from typing import TypedDict, List, Dict, Optional, Literal, Any, Union


# =============================================================================
# Field and Component Types
# =============================================================================

class BaseHandleDict(TypedDict, total=False):
    """Base handle component."""
    id: str
    type: Literal["base-handle"]
    handle_type: Literal["input", "output"]
    label: str
    dataType: Optional[str]
    required: Optional[bool]


class LabeledHandleDict(TypedDict, total=False):
    """Labeled handle component."""
    id: str
    type: Literal["labeled-handle"]
    handle_type: Literal["input", "output"]
    label: str
    dataType: Optional[str]
    required: Optional[bool]


class ButtonHandleDict(TypedDict, total=False):
    """Button handle component."""
    id: str
    type: Literal["button-handle"]
    handle_type: Literal["input", "output"]
    label: str
    dataType: Optional[str]
    required: Optional[bool]


class TextFieldDict(TypedDict, total=False):
    """Text field component."""
    id: str
    type: Literal["text"]
    label: str
    value: Optional[str]
    placeholder: Optional[str]


class NumberFieldDict(TypedDict, total=False):
    """Number field component."""
    id: str
    type: Literal["number"]
    label: str
    value: Optional[float]
    min: Optional[float]
    max: Optional[float]


class BoolFieldDict(TypedDict, total=False):
    """Boolean field component."""
    id: str
    type: Literal["bool"]
    label: str
    value: Optional[bool]


class SelectFieldDict(TypedDict, total=False):
    """Select field component."""
    id: str
    type: Literal["select"]
    label: str
    value: Optional[str]
    options: Optional[List[str]]


# Union of all component types
ComponentDict = Union[
    BaseHandleDict,
    LabeledHandleDict,
    ButtonHandleDict,
    TextFieldDict,
    NumberFieldDict,
    BoolFieldDict,
    SelectFieldDict,
]


# =============================================================================
# Grid Layout Types
# =============================================================================

class GridCoordinatesDict(TypedDict, total=False):
    """Grid cell coordinates (1-indexed)."""
    row: int
    col: int
    row_span: Optional[int]
    col_span: Optional[int]


class CellLayoutDict(TypedDict, total=False):
    """Cell layout configuration."""
    type: Optional[Literal["flex", "grid", "stack"]]
    direction: Optional[Literal["row", "column"]]
    align: Optional[Literal["start", "center", "end", "stretch"]]
    justify: Optional[Literal["start", "center", "end", "space-between"]]
    gap: Optional[str]


class GridCellDict(TypedDict):
    """Grid cell containing components."""
    id: str
    coordinates: GridCoordinatesDict
    layout: Optional[CellLayoutDict]
    components: List[ComponentDict]


class NodeGridDict(TypedDict):
    """Top-level node grid layout."""
    rows: List[str]
    columns: List[str]
    gap: Optional[str]
    cells: List[GridCellDict]


# =============================================================================
# Node Configuration Types
# =============================================================================

class NodeHeaderDict(TypedDict, total=False):
    """Node header configuration."""
    show: bool
    icon: Optional[str]
    bgColor: Optional[str]
    textColor: Optional[str]
    className: Optional[str]


class NodeFooterDict(TypedDict, total=False):
    """Node footer configuration."""
    show: bool
    text: Optional[str]
    className: Optional[str]


class NodeStyleDict(TypedDict, total=False):
    """Node styling configuration."""
    minWidth: Optional[Union[str, int]]
    maxWidth: Optional[Union[str, int]]
    className: Optional[str]
    borderRadius: Optional[str]
    shadow: Optional[Literal["sm", "md", "lg", "xl", "none"]]


# =============================================================================
# Node Data Types
# =============================================================================

class NodeDataDict(TypedDict, total=False):
    """Complete node data configuration.
    
    Matches CustomNodeData interface in TypeScript.
    """
    label: str
    
    # Grid system
    grid: Optional[NodeGridDict]
    
    # Configuration
    handleType: Optional[Literal["base", "button", "labeled"]]
    header: Optional[NodeHeaderDict]
    footer: Optional[NodeFooterDict]
    style: Optional[NodeStyleDict]
    description: Optional[str]
    category: Optional[str]
    icon: Optional[str]


class NodeTemplateDict(TypedDict):
    """Node template definition.
    
    Matches NodeTemplate interface in TypeScript.
    """
    type: str
    label: str
    description: Optional[str]
    icon: Optional[str]
    defaultData: NodeDataDict


# =============================================================================
# State Types
# =============================================================================

class NodeValuesDict(TypedDict):
    """Field values for a single node."""
    # Dynamic keys - node field IDs map to their values


# Complete nodes dict - keys are node IDs
NodesDict = Dict[str, Dict[str, Any]]  # node_id -> node_data

# All node values - keys are node IDs
AllNodeValuesDict = Dict[str, NodeValuesDict]  # node_id -> field_values
