"""PyNodeWidget models - Data structures for node graphs."""

# Component models
from .components import (
    Component,
    ComponentType,
    # Handles
    BaseHandle,
    LabeledHandle,
    ButtonHandle,
    Handle,
    # Fields
    TextField,
    NumberField,
    BoolField,
    SelectField,
    Field_,
    # UI Components
    HeaderComponent,
    ButtonComponent,
    DividerComponent,
    SpacerComponent,
    # Layouts
    GridLayoutComponent,
)

# Grid system
from .grid import (
    GridCoordinates,
    CellLayout,
    GridCell,
    NodeGrid,
)

# Node configuration
from .node import (
    NodeStyle,
    NodeHandle,
    NodeDefinition,
    NodeTemplate,
)

# Fix forward references for recursive models
GridLayoutComponent.model_rebuild()
GridCell.model_rebuild()
NodeDefinition.model_rebuild()

__all__ = [
    # Components
    "Component",
    "ComponentType",
    "BaseHandle",
    "LabeledHandle",
    "ButtonHandle",
    "Handle",
    "TextField",
    "NumberField",
    "BoolField",
    "SelectField",
    "Field_",
    "HeaderComponent",
    "ButtonComponent",
    "DividerComponent",
    "SpacerComponent",
    "GridLayoutComponent",
    # Grid
    "GridCoordinates",
    "CellLayout",
    "GridCell",
    "NodeGrid",
    # Node
    "NodeStyle",
    "NodeHandle",
    "NodeDefinition",
    "NodeTemplate",
]
