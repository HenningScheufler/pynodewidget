"""Component models for PyNodeWidget."""

from typing import Annotated, Union
from pydantic import Field

# Import all component types
from .base import Component
from .handles import BaseHandle, LabeledHandle, ButtonHandle, Handle
from .fields import TextField, NumberField, BoolField, SelectField, Field_
from .ui import HeaderComponent, ButtonComponent, DividerComponent, SpacerComponent
from .layouts import GridLayoutComponent

# Discriminated union - matches TypeScript ComponentType exactly
ComponentType = Annotated[
    Union[
        BaseHandle,
        LabeledHandle,
        ButtonHandle,
        TextField,
        NumberField,
        BoolField,
        SelectField,
        HeaderComponent,
        ButtonComponent,
        DividerComponent,
        SpacerComponent,
        GridLayoutComponent,
    ],
    Field(discriminator="type")
]

__all__ = [
    "Component",
    "ComponentType",
    # Handles
    "BaseHandle",
    "LabeledHandle",
    "ButtonHandle",
    "Handle",
    # Fields
    "TextField",
    "NumberField",
    "BoolField",
    "SelectField",
    "Field_",
    # UI Components
    "HeaderComponent",
    "ButtonComponent",
    "DividerComponent",
    "SpacerComponent",
    # Layouts
    "GridLayoutComponent",
]
