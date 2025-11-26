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
    
    Any class implementing this protocol can be registered with NodeFlowWidget
    to create custom node types in the visual editor.
    
    Required Attributes:
        label (str): Display name for the node shown in UI
        parameters (Type[BaseModel]): Pydantic model defining node configuration fields
    
    Optional Attributes:
        icon (str): Unicode emoji or icon identifier (default: "")
        category (str): Category for grouping nodes in UI (default: "general")
        description (str): Help text shown to users (default: "")
        inputs (Type[BaseModel] | List[Dict[str, str]]): Input handle definitions (default: [])
        outputs (Type[BaseModel] | List[Dict[str, str]]): Output handle definitions (default: [])
    
    Required Methods:
        __init__: Initialize node instance with optional initial values
        get_values: Get current configuration values as a dictionary
        set_values: Update configuration values from a dictionary
    
    Optional Methods:
        validate: Validate current configuration, returns True if valid
        execute: Execute node logic (for future execution engine)
    
    Example:
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
        ...     
        ...     def __init__(self, **initial_values):
        ...         self.config = self.parameters(**initial_values)
        ...     
        ...     def get_values(self) -> Dict[str, Any]:
        ...         return self.config.model_dump()
        ...     
        ...     def set_values(self, values: Dict[str, Any]) -> None:
        ...         self.config = self.parameters(**values)
    """
    
    # Required class attributes
    label: str
    parameters: Type[BaseModel]
    
    # Optional class attributes with defaults
    icon: str
    category: str
    description: str
    inputs: Union[Type[BaseModel], List[Dict[str, str]], List[HandleSpec]]
    outputs: Union[Type[BaseModel], List[Dict[str, str]], List[HandleSpec]]
    grid_layout: Optional[Dict[str, Any]]
    handle_type: str
    
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
        inputs: List[Dict[str, str]] = None,
        outputs: List[Dict[str, str]] = None,
        grid_layout: Dict[str, Any] = None,
        handle_type: str = "base",
    ):
        """Initialize node metadata.
        
        Args:
            type_name: Unique identifier for the node type
            label: Display name for the node
            parameters_schema: JSON Schema for node parameters
            icon: Unicode emoji or icon identifier
            category: Category for grouping nodes
            description: Help text
            inputs: List of input handle configurations
            outputs: List of output handle configurations
            grid_layout: Grid layout configuration (replaces layout_type)
            handle_type: Default handle type for all handles (e.g., "base", "button", "labeled")
        """
        self.type_name = type_name
        self.label = label
        self.parameters_schema = parameters_schema
        self.icon = icon
        self.category = category
        self.description = description
        self.inputs = inputs or []
        self.outputs = outputs or []
        self.grid_layout = grid_layout
        self.handle_type = handle_type
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert metadata to dictionary for JSON serialization.
        
        Returns:
            Dictionary representation of node metadata
        """
        from .grid_layouts import create_horizontal_grid_layout
        from .models import CustomNodeData, NodeTemplate
        
        # Get grid layout if specified, otherwise use default horizontal
        grid_layout = getattr(self, 'grid_layout', None)
        if grid_layout is None:
            grid_layout = create_horizontal_grid_layout()
        
        # Build and validate default data using Pydantic
        default_data_dict = {
            "label": self.label,
            "parameters": self.parameters_schema,
            "inputs": self.inputs,
            "outputs": self.outputs,
            "gridLayout": grid_layout,
            "handleType": self.handle_type,
            "values": {},
        }
        
        try:
            # Validate the default data structure
            default_data = CustomNodeData(**default_data_dict)
            
            # Create and validate the full template
            template_dict = {
                "type": self.type_name,
                "label": self.label,
                "icon": self.icon,
                "category": self.category,
                "description": self.description,
                "defaultData": default_data.model_dump()
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
        inputs = getattr(node_class, 'inputs', [])
        outputs = getattr(node_class, 'outputs', [])
        grid_layout = getattr(node_class, 'grid_layout', None)
        handle_type = getattr(node_class, 'handle_type', 'base')
        
        # Convert Pydantic models for inputs/outputs to handle configs
        if isinstance(inputs, type) and issubclass(inputs, BaseModel):
            inputs = cls._pydantic_to_handles(inputs)
        if isinstance(outputs, type) and issubclass(outputs, BaseModel):
            outputs = cls._pydantic_to_handles(outputs)
        
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
            inputs=inputs,
            outputs=outputs,
            grid_layout=grid_layout,
            handle_type=handle_type,
        )
    
    @staticmethod
    def _pydantic_to_handles(model: Type[BaseModel]) -> List[Dict[str, str]]:
        """Convert a Pydantic model to handle configurations.
        
        Args:
            model: Pydantic BaseModel defining handles
            
        Returns:
            List of handle configuration dictionaries
        """
        handles = []
        for field_name, field_info in model.model_fields.items():
            handle_config = {
                "id": field_name,
                "label": field_info.title or field_name.replace("_", " ").title(),
            }
            # Check if field has handle_type in metadata
            if hasattr(field_info, 'json_schema_extra') and field_info.json_schema_extra:
                if isinstance(field_info.json_schema_extra, dict) and 'handle_type' in field_info.json_schema_extra:
                    handle_config["handle_type"] = field_info.json_schema_extra['handle_type']
            handles.append(handle_config)
        return handles
