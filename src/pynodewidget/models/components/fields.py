"""Field components for interactive inputs."""

from typing import List, Literal, Optional
from pydantic import Field
from .base import Component


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


# Type alias for all field types
Field_ = TextField | NumberField | BoolField | SelectField
