"""Handle components for node connections."""

from typing import Literal, Optional
from pydantic import Field
from .base import Component


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


# Type alias for all handle types
Handle = BaseHandle | LabeledHandle | ButtonHandle
