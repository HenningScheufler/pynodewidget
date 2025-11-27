"""Base component class for all UI components."""

from pydantic import BaseModel, Field


class Component(BaseModel):
    """Base class for all atomic components."""
    id: str = Field(..., description="Unique component ID")
    type: str = Field(..., description="Component type discriminator")
