"""Handle components for node connections."""

from typing import Literal, Optional
from pydantic import Field, model_validator
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
    label: Optional[str] = Field(None, description="Display label (auto-inferred from id if not provided)")
    dataType: Optional[str] = Field(None, description="For connection validation")
    required: bool = Field(default=False, description="Whether handle is required")
    
    @model_validator(mode='after')
    def _infer_label(self):
        """Use id as label if not explicitly provided."""
        if self.label is None:
            self.label = self.id
        return self


class LabeledHandle(Component):
    """Handle with integrated text label and handle_type enum.
    
    Type discriminator: "labeled-handle"
    
    handle_type enum:
    - "input": Target connection point (receives data)
    - "output": Source connection point (sends data)
    """
    type: Literal["labeled-handle"] = "labeled-handle"
    handle_type: Literal["input", "output"] = Field(..., description="Connection direction")
    label: Optional[str] = Field(None, description="Display label (auto-inferred from id if not provided)")
    dataType: Optional[str] = Field(None, description="For connection validation")
    required: bool = Field(default=False, description="Whether handle is required")
    
    @model_validator(mode='after')
    def _infer_label(self):
        """Use id as label if not explicitly provided."""
        if self.label is None:
            self.label = self.id
        return self


class ButtonHandle(Component):
    """Button-styled handle with handle_type enum.
    
    Type discriminator: "button-handle"
    
    handle_type enum:
    - "input": Target connection point (receives data)
    - "output": Source connection point (sends data)
    """
    type: Literal["button-handle"] = "button-handle"
    handle_type: Literal["input", "output"] = Field(..., description="Connection direction")
    label: Optional[str] = Field(None, description="Display label (auto-inferred from id if not provided)")
    dataType: Optional[str] = Field(None, description="For connection validation")
    required: bool = Field(default=False, description="Whether handle is required")
    
    @model_validator(mode='after')
    def _infer_label(self):
        """Use id as label if not explicitly provided."""
        if self.label is None:
            self.label = self.id
        return self


# Type alias for all handle types
Handle = BaseHandle | LabeledHandle | ButtonHandle
