"""Node configuration and template models."""

from typing import Any, Dict, List, Literal, Optional, TYPE_CHECKING
from pydantic import BaseModel, Field

if TYPE_CHECKING:
    from .grid import NodeGrid


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


class NodeDefinition(BaseModel):
    """Template-level visual structure (immutable, shared across instances).
    
    Defines HOW a node looks - its layout and styling.
    This is stored once per node type and referenced by many instances.
    
    Uses the three-layer grid system (NodeGrid → GridCell → Components).
    """
    grid: 'NodeGrid' = Field(..., description="Three-layer grid layout (NodeGrid → GridCell → Components)")
    style: Optional[NodeStyle] = Field(None, description="Styling configuration")


class NodeTemplate(BaseModel):
    """Complete node type definition.
    
    Registered once, used to create many node instances.
    Separates template (structure) from instance (data).
    """
    type: str = Field(..., description="Unique node type identifier")
    label: str = Field(..., description="Display label for node type")
    description: str = Field(default="", description="Node description")
    icon: str = Field(default="", description="Unicode emoji or icon")
    category: str = Field(default="general", description="Node category")
    definition: NodeDefinition = Field(..., description="Visual structure (grid + style)")
    defaultValues: Dict[str, Any] = Field(
        default_factory=dict, 
        description="Default field values for new instances"
    )
