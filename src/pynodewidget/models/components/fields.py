"""Field components for interactive inputs."""

from typing import List, Literal, Optional
from pydantic import Field, model_validator
from .base import Component


class TextField(Component):
    """Text input field."""
    type: Literal["text"] = "text"
    label: Optional[str] = Field(None, description="Field label (inferred from id if not provided)")
    value: str = Field(default="", description="Current value")
    placeholder: str = Field(default="", description="Placeholder text")
    
    @model_validator(mode='after')
    def _infer_label(self):
        """Use id as label if not explicitly provided."""
        if self.label is None:
            self.label = self.id
        return self


class NumberField(Component):
    """Number input field."""
    type: Literal["number"] = "number"
    label: Optional[str] = Field(None, description="Field label (inferred from id if not provided)")
    value: float = Field(default=0, description="Current value")
    min: Optional[float] = Field(None, description="Minimum value")
    max: Optional[float] = Field(None, description="Maximum value")
    
    @model_validator(mode='after')
    def _infer_label(self):
        """Use id as label if not explicitly provided."""
        if self.label is None:
            self.label = self.id
        return self


class BoolField(Component):
    """Boolean checkbox/toggle field."""
    type: Literal["bool"] = "bool"
    label: Optional[str] = Field(None, description="Field label (inferred from id if not provided)")
    value: bool = Field(default=False, description="Current value")
    
    @model_validator(mode='after')
    def _infer_label(self):
        """Use id as label if not explicitly provided."""
        if self.label is None:
            self.label = self.id
        return self


class SelectField(Component):
    """Dropdown select field."""
    type: Literal["select"] = "select"
    label: Optional[str] = Field(None, description="Field label (inferred from id if not provided)")
    value: str = Field(default="", description="Currently selected value")
    options: List[str] = Field(default_factory=list, description="Available options")
    
    @model_validator(mode='after')
    def _infer_label(self):
        """Use id as label if not explicitly provided."""
        if self.label is None:
            self.label = self.id
        return self


class ProgressField(Component):
    """Progress bar field (read-only display)."""
    type: Literal["progress"] = "progress"
    label: Optional[str] = Field(None, description="Field label (inferred from id if not provided)")
    value: float = Field(default=0, description="Current progress value")
    min: Optional[float] = Field(0, description="Minimum value (default: 0)")
    max: Optional[float] = Field(100, description="Maximum value (default: 100)")
    
    @model_validator(mode='after')
    def _infer_label(self):
        """Use id as label if not explicitly provided."""
        if self.label is None:
            self.label = self.id
        return self


# Type alias for all field types
Field_ = TextField | NumberField | BoolField | SelectField | ProgressField
