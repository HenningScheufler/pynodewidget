"""Protocol definitions for PyNodeWidget node types.

This module defines the NodeFactory protocol that all custom nodes must implement.
"""

from typing import Protocol, Dict, List, Any, Optional, Type, Union, runtime_checkable, Literal
from pydantic import BaseModel


class HandleSpec(BaseModel):
    """Specification for a node handle (input or output connection point).
    
    Attributes:
        id: Unique identifier for the handle within the node
        label: Display name shown in the UI
        handle_type: Type of handle component to render ("base", "button", or "labeled")
    """
    id: str
    label: str
    handle_type: Literal["base", "button", "labeled"] = "base"


@runtime_checkable
class NodeFactory(Protocol):
    """Protocol defining the interface for node type definitions.
    
    DEPRECATION WARNING: The 'parameters' attribute is deprecated.
    Instead, define nodes using the grid-based architecture:
    - grid_layout: Dict defining NodeGrid → GridCell → Components structure
    - Use HandleComponent (BaseHandle, ButtonHandle, LabeledHandle) for inputs/outputs
    - Use FieldComponent (TextField, NumberField, etc.) for configuration fields
    
    Any class implementing this protocol can be registered with NodeFlowWidget
    to create custom node types in the visual editor.
    
    Required Attributes:
        label (str): Display name for the node shown in UI
        parameters (Type[BaseModel]): DEPRECATED - Use grid_layout instead
    
    Optional Attributes:
        icon (str): Unicode emoji or icon identifier (default: "")
        category (str): Category for grouping nodes in UI (default: "general")
        description (str): Help text shown to users (default: "")
        inputs (List[Dict[str, str]]): DEPRECATED - Define in grid_layout instead
        outputs (List[Dict[str, str]]): DEPRECATED - Define in grid_layout instead
        grid_layout (Dict[str, Any]): Grid layout configuration (RECOMMENDED)
    
    Required Methods:
        __init__: Initialize node instance with optional initial values
        get_values: Get current configuration values as a dictionary
        set_values: Update configuration values from a dictionary
    
    Optional Methods:
        validate: Validate current configuration, returns True if valid
        execute: Execute node logic (for future execution engine)
    
    Example (deprecated approach):
        >>> from pydantic import BaseModel
        >>> 
        >>> class ProcessingConfig(BaseModel):
        ...     threshold: float = 0.5
        ...     mode: str = "auto"
        >>> 
        >>> class ImageProcessor:
        ...     label = "Image Processor"
        ...     parameters = ProcessingConfig
        ...     icon = "🖼️"
        
    Example (recommended grid-based approach):
        >>> from pynodewidget.grid_layouts import create_three_column_grid
        >>> from pynodewidget.models import ButtonHandle, TextField
        >>> 
        >>> class ImageProcessor:
        ...     label = "Image Processor"
        ...     icon = "🖼️"
        ...     grid_layout = create_three_column_grid(
        ...         left_components=[ButtonHandle(id="in", label="Input", handle_type="input")],
        ...         center_components=[TextField(id="mode", label="Mode", value="auto")],
        ...         right_components=[ButtonHandle(id="out", label="Output", handle_type="output")]
        ...     )
    """
    
    # Required class attributes
    label: str
    parameters: Type[BaseModel]
    
    # Optional class attributes with defaults
    icon: str
    category: str
    description: str
    grid_layout: Optional[Dict[str, Any]]
    
    def __init__(self, **initial_values: Any) -> None:
        """Initialize node instance with optional initial values.
        
        Args:
            **initial_values: Initial configuration values for the node parameters
        """
        ...
    
    def get_values(self) -> Dict[str, Any]:
        """Get current configuration values.
        
        Returns:
            Dictionary containing all current parameter values
        """
        ...
    
    def set_values(self, values: Dict[str, Any]) -> None:
        """Update configuration values.
        
        Args:
            values: Dictionary of parameter values to update
        """
        ...
    
    def validate(self) -> bool:
        """Validate current configuration.
        
        Returns:
            True if configuration is valid, False otherwise
        """
        ...
    
    def execute(self, inputs: Dict[str, Any]) -> Dict[str, Any]:
        """Execute node logic with provided inputs.
        
        This method is optional and used by the execution engine.
        
        Args:
            inputs: Dictionary of input values from connected nodes
            
        Returns:
            Dictionary of output values to pass to connected nodes
        """
        ...


class NodeMetadata:
    """Metadata extracted from a NodeFactory class for serialization.
    
    This class is used internally to extract and serialize node metadata
    for transmission to the JavaScript layer.
    """
    
    def __init__(
        self,
        type_name: str,
        label: str,
        parameters_schema: Dict[str, Any],
        icon: str = "",
        category: str = "general",
        description: str = "",
        grid_layout: Optional[Dict[str, Any]] = None,
    ):
        """Initialize node metadata.
        
        Args:
            type_name: Unique identifier for the node type
            label: Display name for the node
            parameters_schema: JSON Schema for node parameters
            icon: Unicode emoji or icon identifier
            category: Category for grouping nodes
            description: Help text
            grid_layout: Grid layout configuration
        """
        self.type_name = type_name
        self.label = label
        self.parameters_schema = parameters_schema
        self.icon = icon
        self.category = category
        self.description = description
        self.grid_layout = grid_layout
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert metadata to dictionary for JSON serialization.
        
        Returns:
            Dictionary representation of node metadata
        """
        from .grid_layouts import create_vertical_stack_grid, json_schema_to_components
        from .models import NodeDefinition, NodeTemplate
        
        # Get grid layout if specified, otherwise create default vertical grid
        grid = self.grid_layout
        if grid is None:
            # Generate default grid with JSON schema fields
            field_components = json_schema_to_components(self.parameters_schema, {})
            grid = create_vertical_stack_grid(middle_components=field_components)
        
        # Extract default values from schema
        default_values = {}
        if "properties" in self.parameters_schema:
            for key, prop in self.parameters_schema["properties"].items():
                if "default" in prop:
                    default_values[key] = prop["default"]
        
        # Build NodeDefinition (visual structure only)
        definition_dict = {
            "grid": grid,
        }
        
        try:
            # Validate the definition structure
            definition = NodeDefinition(**definition_dict)
            
            # Create and validate the full template
            template_dict = {
                "type": self.type_name,
                "label": self.label,
                "icon": self.icon,
                "category": self.category,
                "description": self.description,
                "definition": definition.model_dump(),
                "defaultValues": default_values
            }
            template = NodeTemplate(**template_dict)
            
            return template.model_dump()
        except Exception as e:
            raise ValueError(f"Failed to create valid node template from metadata: {e}")
    
    @classmethod
    def from_node_class(cls, node_class: Type[NodeFactory], type_name: Optional[str] = None) -> "NodeMetadata":
        """Extract metadata from a NodeFactory class.
        
        Args:
            node_class: Class implementing NodeFactory protocol
            type_name: Optional custom type name (defaults to class name)
            
        Returns:
            NodeMetadata instance
            
        Raises:
            AttributeError: If required attributes are missing
            TypeError: If parameters is not a Pydantic BaseModel subclass
        """
        # Validate required attributes
        if not hasattr(node_class, 'label'):
            raise AttributeError(f"Node class {node_class.__name__} missing required attribute: 'label'")
        
        if not hasattr(node_class, 'parameters'):
            raise AttributeError(f"Node class {node_class.__name__} missing required attribute: 'parameters'")
        
        # Validate parameters is a Pydantic model
        parameters = node_class.parameters
        if not (isinstance(parameters, type) and issubclass(parameters, BaseModel)):
            raise TypeError(
                f"Node class {node_class.__name__} 'parameters' must be a Pydantic BaseModel subclass, "
                f"got {type(parameters)}"
            )
        
        # Generate JSON Schema from Pydantic model
        parameters_schema = parameters.model_json_schema()
        
        # Extract optional attributes with defaults
        icon = getattr(node_class, 'icon', '')
        category = getattr(node_class, 'category', 'general')
        description = getattr(node_class, 'description', '')
        grid_layout = getattr(node_class, 'grid_layout', None)
        
        # Use class name as type_name if not provided
        if type_name is None:
            type_name = node_class.__name__
        
        return cls(
            type_name=type_name,
            label=node_class.label,
            parameters_schema=parameters_schema,
            icon=icon,
            category=category,
            description=description,
            grid_layout=grid_layout,
        )
