"""UI components for display and interaction."""

from typing import Literal, Optional
from pydantic import Field, model_validator
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
    label: Optional[str] = Field(None, description="Button text (inferred from id if not provided)")
    action: str = Field(..., description="Action identifier")
    value: int = Field(default=0, description="Click counter value")
    variant: Literal["default", "destructive", "outline", "secondary", "ghost", "link"] = Field(
        default="default", 
        description="Button visual style"
    )
    size: Literal["default", "sm", "lg", "icon"] = Field(default="default", description="Button size")
    disabled: bool = Field(default=False, description="Whether button is disabled")
    
    @model_validator(mode='after')
    def _infer_label(self):
        """Use id as label if not explicitly provided."""
        if self.label is None:
            self.label = self.id
        return self


class DividerComponent(Component):
    """Visual divider/separator."""
    type: Literal["divider"] = "divider"
    orientation: Literal["horizontal", "vertical"] = Field(default="horizontal", description="Divider orientation")


class SpacerComponent(Component):
    """Empty space for layout control."""
    type: Literal["spacer"] = "spacer"
    size: str = Field(default="8px", description="Size of space (CSS value)")
