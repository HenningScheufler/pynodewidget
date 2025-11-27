"""UI components for display and interaction."""

from typing import Literal, Optional
from pydantic import Field
from .base import Component


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
