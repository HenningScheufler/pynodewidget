"""Core NodeFlowWidget implementation."""

import pathlib
import anywidget
import traitlets as t
from typing import List, Dict, Any, Optional, Type
import json
from .observable_dict import ObservableDict, ObservableDictTrait


class NodeFlowWidget(anywidget.AnyWidget):
    """A Jupyter widget wrapping ReactFlow for interactive node graph visualization.
    
    This widget can be initialized with a list of node classes that implement the
    NodeFactory protocol. Node types will be automatically registered and made
    available in the visual editor.
    
    Examples:
        >>> from pynodewidget import NodeFlowWidget
        >>> 
        >>> class MyNode(JsonSchemaNodeWidget):
        ...     label = "My Node"
        ...     parameters = MyParams
        >>> 
        >>> flow = NodeFlowWidget(
        ...     nodes=[MyNode],
        ...     height="800px"
        ... )
    """
    
    _esm = pathlib.Path(__file__).parent / "static" / "index.js"
    _css = pathlib.Path(__file__).parent / "static" / "index.css"
    
    # Graph data
    nodes = t.List(trait=t.Dict()).tag(sync=True)
    edges = t.List(trait=t.Dict()).tag(sync=True)
    node_templates = t.List(trait=t.Dict()).tag(sync=True)
    
    # Track node values separately for efficient sync - keyed by node ID
    # Using ObservableDictTrait for automatic sync on mutations
    node_values = ObservableDictTrait().tag(sync=True)

    # Viewport state
    viewport = t.Dict(default_value={"x": 0, "y": 0, "zoom": 1}).tag(sync=True)
    
    # Configuration
    fit_view = t.Bool(default_value=True).tag(sync=True)
    height = t.Unicode(default_value="600px").tag(sync=True)
    
    def update_node_value(self, node_id: str, key: str, value: any) -> None:
        """Update a specific value for a node. Auto-syncs to frontend.
        
        Args:
            node_id: ID of the node to update
            key: Key within the node's values dict
            value: New value to set
            
        Example:
            >>> flow.update_node_value("processor-1", "workers", 20)
        """
        if node_id not in self.node_values:
            self.node_values[node_id] = {}
        self.node_values[node_id][key] = value
    
    def get_node_values(self, node_id: str) -> Dict[str, Any]:
        """Get all values for a specific node.
        
        Args:
            node_id: ID of the node
            
        Returns:
            Dictionary of values for the node, or empty dict if not found
            
        Example:
            >>> values = flow.get_node_values("processor-1")
            >>> workers = values.get("workers", 4)
        """
        return self.node_values.get(node_id, {})
    
    def set_node_values(self, node_id: str, values: Dict[str, Any]) -> None:
        """Set multiple values for a node at once. Auto-syncs to frontend.
        
        Args:
            node_id: ID of the node
            values: Dictionary of values to set
            
        Example:
            >>> flow.set_node_values("processor-1", {"workers": 8, "progress": 50})
        """
        if node_id not in self.node_values:
            self.node_values[node_id] = {}
        self.node_values[node_id].update(values)
    
    def get_node_value(self, node_id: str, key: str, default: Any = None) -> Any:
        """Get a specific value from a node.
        
        Args:
            node_id: ID of the node
            key: Key of the value to get
            default: Default value if not found
            
        Returns:
            The value, or default if not found
            
        Example:
            >>> workers = flow.get_node_value("processor-1", "workers", 4)
        """
        values = self.get_node_values(node_id)
        return values.get(key, default)
    
    def __init__(self, nodes: Optional[List[Type]] = None, height: str = "600px", **kwargs):
        """Initialize the NodeFlowWidget.
        
        Args:
            nodes: Optional list of node classes implementing NodeFactory protocol.
                   Each class will be validated and registered automatically.
            height: Height of the widget canvas (default: "600px")
            **kwargs: Additional widget configuration options
        """
        super().__init__(**kwargs)
        self.height = height
        
        # node_values is automatically an ObservableDict via ObservableDictTrait
        # No need to manually wrap - the trait handles it
        
        # Register node classes if provided
        if nodes:
            for node_class in nodes:
                self.register_node_type(node_class)
    
    def register_node_type(
        self,
        node_class: Type,
        type_name: Optional[str] = None
    ) -> "NodeFlowWidget":
        """Register a node class implementing the NodeFactory protocol.
        
        This method extracts metadata from the node class and registers
        it as a node type that can be instantiated in the visual editor.
        
        Args:
            node_class: Class implementing NodeFactory protocol (typically a
                       subclass of JsonSchemaNodeWidget)
            type_name: Optional custom type name. If not provided, uses the
                      class name (converted to snake_case)
        
        Returns:
            Self for method chaining
        
        Raises:
            AttributeError: If required attributes (label, parameters) are missing
            TypeError: If parameters is not a Pydantic BaseModel subclass
            
        Example:
            >>> flow = NodeFlowWidget()
            >>> flow.register_node_type(MyCustomNode)
            >>> flow.register_node_type(AnotherNode, type_name="custom_name")
        """
        from .protocols import NodeMetadata
        import re
        
        # Generate type_name from class name if not provided
        if type_name is None:
            # Convert CamelCase to snake_case
            type_name = re.sub(r'(?<!^)(?=[A-Z])', '_', node_class.__name__).lower()
        
        # Extract metadata from the node class (this will validate the class)
        metadata = NodeMetadata.from_node_class(node_class, type_name)
        
        # Convert to template dict and add to node_templates
        template = metadata.to_dict()
        self.node_templates = self.node_templates + [template]
        return self
    
    def add_node_type_from_schema(
        self, 
        json_schema: Dict[str, Any],
        type_name: str,
        label: str,
        description: str = "",
        icon: str = "",
        inputs: Optional[List[Dict[str, str]]] = None,
        outputs: Optional[List[Dict[str, str]]] = None,
        grid_layout: Optional[Dict[str, Any]] = None,
        handle_type: str = "base",
        header: Optional[Dict[str, Any]] = None,
        footer: Optional[Dict[str, Any]] = None,
        style: Optional[Dict[str, Any]] = None
    ):
        """Add a node type from a JSON schema with grid layout support.
        
        Args:
            json_schema: JSON Schema definition (can be from Pydantic model_json_schema())
            type_name: Unique type identifier
            label: Display label for the node
            description: Description shown in the panel
            icon: Unicode emoji or symbol (e.g., "🔧", "⚙️", "📊")
            inputs: List of input handles with id and label, e.g., 
                   [{"id": "in1", "label": "Input 1"}, {"id": "in2", "label": "Input 2"}]
            outputs: List of output handles with id and label, e.g.,
                    [{"id": "out1", "label": "Output 1"}]
            grid_layout: Grid layout configuration (use helpers from grid_layouts module).
                        If not provided, defaults to horizontal grid layout.
            handle_type: Handle style - "base", "button", or "labeled" (default: "base")
            header: Header configuration dict with 'show', 'icon', 'bgColor', 'textColor', etc.
            footer: Footer configuration dict with 'show', 'text', 'className', etc.
            style: Style configuration dict with 'minWidth', 'maxWidth', 'shadow', etc.
            
        Example:
            >>> from pynodewidget.grid_layouts import create_vertical_grid_layout
            >>> 
            >>> widget.add_node_type_from_schema(
            ...     json_schema={"type": "object", "properties": {...}},
            ...     type_name="processor",
            ...     label="Data Processor",
            ...     icon="⚙️",
            ...     grid_layout=create_vertical_grid_layout(),
            ...     handle_type="button",
            ...     header={"show": True, "bgColor": "#3b82f6", "textColor": "#ffffff"}
            ... )
        """
        from .grid_layouts import create_horizontal_grid_layout
        from .models import CustomNodeData, NodeTemplate
        
        # Initialize default values from schema
        default_values = {}
        if json_schema and "properties" in json_schema:
            for key, prop in json_schema["properties"].items():
                if "default" in prop:
                    default_values[key] = prop["default"]
        
        # Use horizontal grid layout as default if none provided
        if grid_layout is None:
            grid_layout = create_horizontal_grid_layout()
        
        # Build default data with grid layout
        default_data_dict = {
            "label": label,
            "parameters": json_schema,
            "inputs": inputs or [],
            "outputs": outputs or [],
            "values": default_values,
            "gridLayout": grid_layout,
            "handleType": handle_type
        }
        
        # Add optional configurations
        if header is not None:
            default_data_dict["header"] = header
        if footer is not None:
            default_data_dict["footer"] = footer
        if style is not None:
            default_data_dict["style"] = style
        
        # Validate using Pydantic models
        try:
            default_data = CustomNodeData(**default_data_dict)
            template_dict = {
                "type": type_name,
                "label": label,
                "description": description,
                "icon": icon,
                "defaultData": default_data.model_dump()
            }
            template = NodeTemplate(**template_dict)
            
            # Add validated template
            self.node_templates = self.node_templates + [template.model_dump()]
        except Exception as e:
            raise ValueError(f"Failed to create valid node template: {e}")
        
        return self
    
    def add_node_type_from_pydantic(
        self, 
        model_class,  # Pydantic BaseModel class
        type_name: str,
        label: str,
        description: str = "",
        icon: str = "",
        inputs: Optional[List[Dict[str, str]]] = None,
        outputs: Optional[List[Dict[str, str]]] = None
    ):
        """Add a node type from a Pydantic model.
        
        Args:
            model_class: Pydantic model class
            type_name: Unique type identifier
            label: Display label for the node
            description: Description shown in the panel
            icon: Unicode emoji or symbol (e.g., "🔧", "⚙️", "📊")
            inputs: List of input handles with id and label
            outputs: List of output handles with id and label
        """
        try:
            from pydantic import BaseModel
            if not isinstance(model_class, type) or not issubclass(model_class, BaseModel):
                raise ValueError("model_class must be a Pydantic BaseModel class")
            schema = model_class.model_json_schema()
        except ImportError:
            raise ImportError("pydantic is required for add_node_type_from_pydantic")
        
        return self.add_node_type_from_schema(
            schema, type_name, label, description, icon, inputs, outputs
        )
    
    def export_json(self, filename: str = "flow.json"):
        """Export the current flow to a JSON file.
        
        Args:
            filename: Output filename
        """
        data = {
            "nodes": self.nodes,
            "edges": self.edges,
            "viewport": self.viewport,
            "node_templates": self.node_templates
        }
        
        with open(filename, 'w') as f:
            json.dump(data, f, indent=2)
        
        print(f"✓ Flow exported to {filename}")
        return filename
    
    def load_json(self, filename: str):
        """Load a flow from a JSON file.
        
        Args:
            filename: Input filename
        """
        with open(filename, 'r') as f:
            data = json.load(f)
        
        self.nodes = data.get("nodes", [])
        self.edges = data.get("edges", [])
        self.viewport = data.get("viewport", {"x": 0, "y": 0, "zoom": 1})
        if "node_templates" in data:
            self.node_templates = data["node_templates"]
        
        print(f"✓ Flow loaded from {filename}")
        return self
    
    def get_node_data(self, node_id: str) -> Optional[Dict[str, Any]]:
        """Get the data for a specific node.
        
        Args:
            node_id: Node ID
        
        Returns:
            Node data dict or None if not found
        """
        for node in self.nodes:
            if node.get("id") == node_id:
                return node.get("data", {})
        return None
    
    def clear(self):
        """Clear all nodes and edges."""
        self.nodes = []
        self.edges = []
        return self
    
    def get_flow_data(self) -> Dict[str, Any]:
        """Get the current flow data as a dictionary.
        
        Returns:
            Dictionary with nodes and edges
        """
        return {
            "nodes": self.nodes,
            "edges": self.edges
        }
