"""JsonSchemaNodeWidget - Base class for creating custom nodes.

This module provides the JsonSchemaNodeWidget base class that implements the
NodeFactory protocol. It serves as a convenient base class for defining custom
node types with Pydantic models.
"""

import anywidget
import traitlets as t
import pathlib
from typing import Dict, Any, Type, List, Optional, Union
from pydantic import BaseModel


class JsonSchemaNodeWidget(anywidget.AnyWidget):
    """Base class for custom node widgets implementing the NodeFactory protocol.
    
    This class can be used in two ways:
    1. As a standalone widget for configuration UI
    2. As a base class for custom node types registered with NodeFlowWidget
    
    To create a custom node, inherit from this class and define:
    - parameters: A Pydantic BaseModel class defining configuration fields
    - label: Display name for the node
    - Optional: icon, category, description, inputs, outputs
    
    Example:
        >>> from pydantic import BaseModel, Field
        >>> 
        >>> class ProcessingConfig(BaseModel):
        ...     threshold: float = Field(default=0.5, ge=0, le=1)
        ...     mode: str = "auto"
        >>> 
        >>> class ProcessingNode(JsonSchemaNodeWidget):
        ...     parameters = ProcessingConfig
        ...     label = "Image Processor"
        ...     icon = "🖼️"
        ...     category = "processing"
        ...     inputs = [{"id": "input", "label": "Image"}]
        ...     outputs = [{"id": "output", "label": "Processed"}]
    """
    
    _esm = pathlib.Path(__file__).parent / "static" / "json_schema_node_entry.js"
    _css = pathlib.Path(__file__).parent / "static" / "json_schema_node_entry.css"
    
    # Traitlets for widget synchronization
    id = t.Unicode("json-schema-node").tag(sync=True)
    data = t.Dict(default_value={}).tag(sync=True)
    selected = t.Bool(False).tag(sync=True)
    
    # NodeFactory protocol attributes (to be defined in subclasses)
    label: str = "Node"
    parameters: Type[BaseModel] = None  # Must be overridden in subclass
    icon: str = ""
    category: str = "general"
    description: str = ""
    inputs: Union[Type[BaseModel], List[Dict[str, str]]] = []
    outputs: Union[Type[BaseModel], List[Dict[str, str]]] = []
    grid_layout: Optional[Dict[str, Any]] = None  # Grid layout config
    handle_type: str = "base"
    
    def __init__(self, id=None, data=None, selected=None, **initial_values):
        """Initialize the node widget.
        
        Args:
            id: Widget ID (default: "json-schema-node")
            data: Initial data dict (for standalone widget mode)
            selected: Selection state
            **initial_values: Initial parameter values (passed to Pydantic model)
        """
        super().__init__()
        
        # Initialize Pydantic model instance for parameters
        if self.__class__.parameters is not None:
            try:
                self._config = self.__class__.parameters(**initial_values)
            except Exception as e:
                # If initialization fails, create with defaults
                self._config = self.__class__.parameters()
        else:
            self._config = None
        
        # Set widget properties
        if id is not None:
            self.id = id
        
        # Handle two modes: standalone widget vs. node definition
        if data is not None:
            # Standalone widget mode: use provided data dict
            self.data = data
        elif self.__class__.parameters is not None:
            # Node definition mode: generate data from class attributes
            self.data = self._generate_data_dict()
        
        if selected is not None:
            self.selected = selected
    
    def _generate_data_dict(self) -> Dict[str, Any]:
        """Generate the data dict from class attributes and current values.
        
        This is used when the widget is instantiated as a node definition,
        not as a standalone widget with pre-existing data.
        
        Returns:
            Dictionary with label, parameters schema, inputs, outputs, and values
        """
        if self.__class__.parameters is None:
            return {}
        
        # Generate JSON Schema from Pydantic model
        parameters_schema = self.__class__.parameters.model_json_schema()
        
        # Get current values from config instance
        values = self._config.model_dump() if self._config else {}
        
        # Convert inputs/outputs if they're Pydantic models
        inputs = self.__class__.inputs
        outputs = self.__class__.outputs
        
        if isinstance(inputs, type) and issubclass(inputs, BaseModel):
            inputs = self._pydantic_to_handles(inputs)
        if isinstance(outputs, type) and issubclass(outputs, BaseModel):
            outputs = self._pydantic_to_handles(outputs)
        
        # Get grid layout, use default if not specified
        from .grid_layouts import create_three_column_grid, convert_handles_to_components
        from .models import CustomNodeData
        
        grid_layout = self.__class__.grid_layout
        if grid_layout is None:
            # Convert handles to components for the new system
            input_comps, output_comps = convert_handles_to_components(
                inputs if isinstance(inputs, list) else [],
                outputs if isinstance(outputs, list) else [],
                self.__class__.handle_type
            )
            grid_layout = create_three_column_grid(
                left_components=input_comps,
                center_components=[],  # Parameters will be auto-generated from schema
                right_components=output_comps
            )
        
        # Build and validate data dict using Pydantic
        data_dict = {
            "label": self.__class__.label,
            "grid": grid_layout,
            "parameters": parameters_schema,
            "inputs": inputs if isinstance(inputs, list) else [],
            "outputs": outputs if isinstance(inputs, list) else [],
            "values": values,
            "handleType": self.__class__.handle_type,
        }
        
        try:
            # Validate the data structure
            validated_data = CustomNodeData(**data_dict)
            return validated_data.model_dump()
        except Exception as e:
            raise ValueError(f"Failed to create valid node data: {e}")
    
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
            handles.append({
                "id": field_name,
                "label": field_info.title or field_name.replace("_", " ").title(),
            })
        return handles
    
    # NodeFactory protocol methods
    
    def get_values(self) -> Dict[str, Any]:
        """Get current configuration values.
        
        Returns:
            Dictionary containing all current parameter values
        """
        if self._config is not None:
            return self._config.model_dump()
        
        # Fallback for standalone widget mode
        return self.data.get("values", {})
    
    def set_values(self, values: Dict[str, Any]) -> None:
        """Update configuration values.
        
        Args:
            values: Dictionary of parameter values to update
        """
        if self._config is not None:
            # Update Pydantic model with new values
            current_values = self._config.model_dump()
            current_values.update(values)
            self._config = self.__class__.parameters(**current_values)
            
            # Update widget data
            if "values" in self.data:
                self.data = {**self.data, "values": self._config.model_dump()}
        else:
            # Fallback for standalone widget mode
            if "values" in self.data:
                self.data = {**self.data, "values": {**self.data["values"], **values}}
    
    def set_value(self, key: str, value: Any) -> None:
        """Update a single configuration value.
        
        Args:
            key: Parameter name
            value: New value
        """
        self.set_values({key: value})
    
    def validate(self) -> bool:
        """Validate current configuration.
        
        Returns:
            True if configuration is valid, False otherwise
        """
        if self._config is None:
            return True
        
        try:
            # Pydantic validation happens automatically on assignment
            # If we can recreate the model with current values, it's valid
            self.__class__.parameters(**self._config.model_dump())
            return True
        except Exception:
            return False
    
    def execute(self, inputs: Dict[str, Any]) -> Dict[str, Any]:
        """Execute node logic (to be overridden in subclasses).
        
        This is a placeholder for future execution engine support.
        Subclasses can override this to implement custom node logic.
        
        Args:
            inputs: Dictionary of input values from connected nodes
            
        Returns:
            Dictionary of output values
        """
        raise NotImplementedError(
            f"{self.__class__.__name__} does not implement execute(). "
            "Override this method to add execution logic."
        )
    
    # Factory methods for backward compatibility
    
    @classmethod
    def from_pydantic(
        cls,
        model_class: Type[BaseModel],
        label: Optional[str] = None,
        icon: str = "",
        category: str = "general",
        description: str = "",
        inputs: Optional[Union[Type[BaseModel], List[Dict[str, str]]]] = None,
        outputs: Optional[Union[Type[BaseModel], List[Dict[str, str]]]] = None,
        layout_type: str = "horizontal",
        handle_type: str = "base",
        input_handle_type: Optional[str] = None,
        output_handle_type: Optional[str] = None,
        initial_values: Optional[Dict[str, Any]] = None,
        # Enhanced configuration options
        header: Optional[Dict[str, Any]] = None,
        footer: Optional[Dict[str, Any]] = None,
        style: Optional[Dict[str, Any]] = None,
        validation: Optional[Dict[str, Any]] = None,
        fieldConfigs: Optional[Dict[str, Dict[str, Any]]] = None,
        **kwargs: Any,  # Catch any additional config options
    ) -> "JsonSchemaNodeWidget":
        """Create a widget from a Pydantic model (factory method for convenience).
        
        This is a convenience method for creating a node widget without
        defining a full subclass. For better code organization, prefer
        creating a proper subclass instead.
        
        Args:
            model_class: Pydantic BaseModel class
            label: Display name
            icon: Unicode emoji or icon
            category: Node category
            description: Help text
            inputs: Input handle definitions
            outputs: Output handle definitions
            layout_type: Layout style (e.g., "horizontal", "vertical")
            handle_type: Default handle type ("base", "button", or "labeled")
            input_handle_type: Handle type for inputs (overrides handle_type)
            output_handle_type: Handle type for outputs (overrides handle_type)
            initial_values: Initial parameter values
            header: Header configuration dict
            footer: Footer configuration dict
            style: Style configuration dict
            validation: Validation configuration dict
            fieldConfigs: Per-field configuration dict
            **kwargs: Additional configuration options
            
        Returns:
            New JsonSchemaNodeWidget instance
        """
        # Create anonymous subclass
        class AnonymousNode(cls):
            pass
        
        # Set class attributes
        AnonymousNode.parameters = model_class
        AnonymousNode.label = label or model_class.__name__
        AnonymousNode.icon = icon
        AnonymousNode.category = category
        AnonymousNode.description = description
        AnonymousNode.inputs = inputs or []
        AnonymousNode.outputs = outputs or []
        AnonymousNode.layout_type = layout_type
        AnonymousNode.handle_type = handle_type
        
        # Create instance with initial values
        instance = AnonymousNode(**(initial_values or {}))
        
        # Apply enhanced configuration to the data dict
        data = instance.data.copy()
        
        if input_handle_type:
            data["inputHandleType"] = input_handle_type
        if output_handle_type:
            data["outputHandleType"] = output_handle_type
        if header:
            data["header"] = header
        if footer:
            data["footer"] = footer
        if style:
            data["style"] = style
        if validation:
            data["validation"] = validation
        if fieldConfigs:
            data["fieldConfigs"] = fieldConfigs
        
        # Apply any additional kwargs to data
        for key, value in kwargs.items():
            if value is not None:
                data[key] = value
        
        instance.data = data
        return instance
    
    @classmethod
    def from_schema(
        cls,
        schema: Dict[str, Any],
        label: str,
        icon: str = "",
        category: str = "general",
        description: str = "",
        inputs: Optional[List[Dict[str, str]]] = None,
        outputs: Optional[List[Dict[str, str]]] = None,
        initial_values: Optional[Dict[str, Any]] = None,
    ) -> "JsonSchemaNodeWidget":
        """Create a widget from a JSON schema (legacy support).
        
        This method provides backward compatibility for code using raw JSON schemas.
        For new code, use Pydantic models with the parameters attribute instead.
        
        Args:
            schema: JSON Schema definition
            label: Display name
            icon: Unicode emoji or icon
            category: Node category
            description: Help text
            inputs: Input handle definitions
            outputs: Output handle definitions
            initial_values: Initial parameter values
            
        Returns:
            New JsonSchemaNodeWidget instance
        """
        # Extract default values from schema
        default_values = {}
        if schema and "properties" in schema:
            for key, prop in schema["properties"].items():
                if "default" in prop:
                    default_values[key] = prop["default"]
        
        # Merge with initial values
        if initial_values:
            default_values.update(initial_values)
        
        # Create standalone widget with data dict
        data = {
            "label": label,
            "parameters": schema,  # Note: using 'parameters' instead of 'schema'
            "inputs": inputs or [],
            "outputs": outputs or [],
            "values": default_values,
        }
        
        widget = cls()
        widget.data = data
        return widget
