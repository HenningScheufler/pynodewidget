"""Node configuration and template models."""

from typing import Any, Dict, List, Literal, Optional, TYPE_CHECKING
from pydantic import BaseModel, Field

if TYPE_CHECKING:
    from .grid import NodeGrid


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
    
    Uses the new three-layer grid system (NodeGrid).
    """
    label: str = Field(..., description="Node display label")
    
    # New three-layer grid system
    grid: Optional['NodeGrid'] = Field(None, description="Three-layer grid layout")
    
    # Optional fields (some for backward compatibility)
    parameters: Optional[Dict[str, Any]] = Field(None, description="JSON Schema for parameters")
    inputs: List[NodeHandle] = Field(default_factory=list, description="Input handles")
    outputs: List[NodeHandle] = Field(default_factory=list, description="Output handles")
    values: Dict[str, Any] = Field(default_factory=dict, description="Current parameter values")
    handleType: Literal["base", "button", "labeled"] = Field(
        default="base",
        description="Default handle type for all handles"
    )
    header: Optional[NodeHeader] = Field(None, description="Header configuration")
    footer: Optional[NodeFooter] = Field(None, description="Footer configuration")
    style: Optional[NodeStyle] = Field(None, description="Styling configuration")
    description: Optional[str] = Field(None, description="Node description")


class NodeTemplate(BaseModel):
    """Node template for registering node types."""
    type: str = Field(..., description="Unique node type identifier")
    label: str = Field(..., description="Display label for node type")
    icon: str = Field(default="", description="Unicode emoji or icon")
    description: str = Field(default="", description="Node description")
    category: str = Field(default="general", description="Node category")
    defaultData: CustomNodeData = Field(..., description="Default node configuration")
