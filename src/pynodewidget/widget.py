"""Core NodeFlowWidget implementation."""

import pathlib
import anywidget
import traitlets as t
from typing import List, Dict, Any, Optional, Type, Set
import json
from .observable_dict import ObservableDict, ObservableDictTrait


def _validate_unique_component_ids(grid_layout: Dict[str, Any]) -> None:
    """Validate that all component IDs in a grid layout are unique.
    
    Recursively traverses the grid layout structure to find all components,
    including nested grid layouts, and ensures no duplicate IDs exist.
    
    Args:
        grid_layout: Grid layout configuration dict
        
    Raises:
        ValueError: If duplicate component IDs are found
    """
    def collect_ids(layout_dict: Dict[str, Any], ids: Set[str]) -> None:
        """Recursively collect all component IDs from layout."""
        if not isinstance(layout_dict, dict):
            return
            
        # Check if this is a grid layout with cells
        if "cells" in layout_dict:
            for cell in layout_dict.get("cells", []):
                if not isinstance(cell, dict):
                    continue
                    
                # Process components in the cell
                for component in cell.get("components", []):
                    if not isinstance(component, dict):
                        continue
                    
                    # Check if component has an ID
                    if "id" in component:
                        comp_id = component["id"]
                        if comp_id in ids:
                            raise ValueError(
                                f"Duplicate component ID found: '{comp_id}'. "
                                f"All component IDs within a node must be unique."
                            )
                        ids.add(comp_id)
                    
                    # If this is a nested grid layout, recurse
                    if component.get("type") == "grid-layout":
                        collect_ids(component, ids)
    
    ids: Set[str] = set()
    collect_ids(grid_layout, ids)


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
    
    # defines the available node types/templates
    node_templates = t.List(trait=t.Dict()).tag(sync=True)

    # Graph data - nodes as dict keyed by ID for efficient per-node updates
    nodes = t.Dict(trait=t.Dict()).tag(sync=True)
    edges = t.List(trait=t.Dict()).tag(sync=True)
    
    # Track node values separately for efficient sync - keyed by node ID
    # Using ObservableDictTrait for automatic sync on mutations
    node_values = ObservableDictTrait().tag(sync=True)

    # Viewport state
    viewport = t.Dict(default_value={"x": 0, "y": 0, "zoom": 1}).tag(sync=True)
    
    # Configuration
    fit_view = t.Bool(default_value=True).tag(sync=True)
    height = t.Unicode(default_value="600px").tag(sync=True)
    
    @property
    def values(self) -> ObservableDict:
        """Direct dict-like access to node values (v2.0 simplified API).
        
        Provides Pythonic access without wrapper methods.
        
        Examples:
            >>> # Set single value
            >>> widget.values["processor-1"]["threshold"] = 0.8
            >>> 
            >>> # Set multiple values
            >>> widget.values["processor-1"] = {"threshold": 0.8, "enabled": True}
            >>> 
            >>> # Get single value
            >>> value = widget.values["processor-1"].get("threshold", 0.5)
            >>> 
            >>> # Get all values for a node
            >>> all_values = widget.values["processor-1"]
        """
        return self.node_values
    
    @property
    def templates(self) -> List[Dict[str, Any]]:
        """Alias for node_templates (v2.0 simplified API).
        
        Returns:
            List of registered node type definitions.
            
        Example:
            >>> for template in widget.templates:
            ...     print(template['label'])
        """
        return self.node_templates
    
    def __init__(self, height: str = "600px", **kwargs: Any) -> None:
        """Initialize the NodeFlowWidget.
        
        Args:
            height: Height of the widget canvas (default: "600px")
            **kwargs: Additional widget configuration options
        """
        super().__init__(**kwargs)
        self.height = height
    
    def add_node_type(
        self,
        type_name: str,
        label: str,
        grid_layout: Any,
        icon: str = "",
        description: str = "",
        style: Optional[Dict[str, Any]] = None
    ) -> "NodeFlowWidget":
        """Add node type with grid layout (v2.0 simplified API).
        
        Simplified method with clearer naming - no JSON schema required.
        Grid layout defines all UI components directly.
        
        Args:
            type_name: Unique type identifier
            label: Display label for the node
            grid_layout: Grid layout configuration (NodeGrid model or dict).
                        Use helpers from grid_layouts module:
                        - create_three_column_grid()
                        - create_vertical_stack_grid()
                        - create_header_body_grid()
            icon: Unicode emoji or symbol (e.g., "🔧", "⚙️", "📊")
            description: Description shown in the panel
            style: Style configuration dict with 'minWidth', 'maxWidth', 'shadow', etc.
            
        Returns:
            Self for method chaining
            
        Example:
            >>> from pynodewidget.grid_layouts import create_three_column_grid
            >>> from pynodewidget.models import ButtonHandle, NumberField
            >>> 
            >>> widget.add_node_type(
            ...     type_name="processor",
            ...     label="Data Processor",
            ...     icon="⚙️",
            ...     grid_layout=create_three_column_grid(
            ...         left_components=[ButtonHandle(id="in", label="Input", handle_type="input")],
            ...         center_components=[NumberField(id="value", label="Value", value=42)],
            ...         right_components=[ButtonHandle(id="out", label="Output", handle_type="output")]
            ...     )
            ... )
            >>> 
            >>> # Access values with Pythonic dict syntax
            >>> widget.values["processor-1"]["value"] = 50
        """
        from .models import NodeGrid
        
        # Convert NodeGrid model to dict if needed
        if isinstance(grid_layout, NodeGrid):
            grid_layout = grid_layout.model_dump()
        
        # Extract default values from grid layout components
        default_values = {}
        if isinstance(grid_layout, dict) and "cells" in grid_layout:
            for cell in grid_layout["cells"]:
                if "components" in cell:
                    for component in cell["components"]:
                        # Extract value from components that have an id and value
                        if isinstance(component, dict) and "id" in component and "value" in component:
                            default_values[component["id"]] = component["value"]
        
        # Call the existing implementation with extracted defaults
        return self.add_node_type_from_schema(
            json_schema={},
            type_name=type_name,
            label=label,
            description=description,
            icon=icon,
            grid_layout=grid_layout,
            style=style,
            _default_values_override=default_values
        )
    
    def add_node_type_from_schema(
        self, 
        json_schema: Dict[str, Any],
        type_name: str,
        label: str,
        description: str = "",
        icon: str = "",
        grid_layout: Optional[Dict[str, Any]] = None,
        style: Optional[Dict[str, Any]] = None,
        _default_values_override: Optional[Dict[str, Any]] = None
    ):
        """Add a node type from a JSON schema with grid layout support.
        
        Args:
            json_schema: JSON Schema definition (can be from Pydantic model_json_schema())
            type_name: Unique type identifier
            label: Display label for the node
            description: Description shown in the panel
            icon: Unicode emoji or symbol (e.g., "🔧", "⚙️", "📊")
            grid_layout: Grid layout configuration (use helpers from grid_layouts module).
                        Can be a dict or a NodeGrid Pydantic model.
                        If not provided, defaults to vertical layout with JSON schema fields.
            style: Style configuration dict with 'minWidth', 'maxWidth', 'shadow', etc.
            _default_values_override: Internal parameter to override default values extraction
            
        Example:
            >>> from pynodewidget.grid_layouts import create_three_column_grid
            >>> from pynodewidget.models import BaseHandle, TextField
            >>> 
            >>> widget.add_node_type_from_schema(
            ...     json_schema={"type": "object", "properties": {...}},
            ...     type_name="processor",
            ...     label="Data Processor",
            ...     icon="⚙️",
            ...     grid_layout=create_three_column_grid(
            ...         left_components=[BaseHandle(id="in1", label="Input", handle_type="input")],
            ...         center_components=[TextField(id="name", label="Name")],
            ...         right_components=[BaseHandle(id="out1", label="Output", handle_type="output")]
            ...     )
            ... )
        """
        from .grid_layouts import create_vertical_stack_grid, json_schema_to_components
        from .models import NodeDefinition, NodeTemplate, NodeGrid
        
        # Initialize default values from schema or override
        if _default_values_override is not None:
            default_values = _default_values_override
        else:
            default_values = {}
            if json_schema and "properties" in json_schema:
                for key, prop in json_schema["properties"].items():
                    if "default" in prop:
                        default_values[key] = prop["default"]
        
        # Use vertical stack grid with JSON schema fields as default if none provided
        if grid_layout is None:
            field_components = json_schema_to_components(json_schema, default_values)
            grid_layout = create_vertical_stack_grid(middle_components=field_components)
        
        # Convert NodeGrid model to dict if needed
        if isinstance(grid_layout, NodeGrid):
            grid_layout = grid_layout.model_dump()
        
        # Validate that all component IDs are unique
        try:
            _validate_unique_component_ids(grid_layout)
        except ValueError as e:
            raise ValueError(f"Invalid grid layout for node type '{type_name}': {e}")
        
        # Build NodeDefinition (visual structure only)
        definition_dict = {
            "grid": grid_layout
        }
        
        # Add optional style configuration
        if style is not None:
            definition_dict["style"] = style
        
        # Validate using Pydantic models
        try:
            definition = NodeDefinition(**definition_dict)
            template_dict = {
                "type": type_name,
                "label": label,
                "description": description,
                "icon": icon,
                "definition": definition.model_dump(),
                "defaultValues": default_values
            }
            template = NodeTemplate(**template_dict)
            
            # Add validated template
            self.node_templates = self.node_templates + [template.model_dump()]
        except Exception as e:
            raise ValueError(f"Failed to create valid node template: {e}")
        
        return self
    
    def export_json(self, filename: str = "flow.json") -> str:
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
    
    def load_json(self, filename: str) -> None:
        """Load a flow from a JSON file.
        
        Args:
            filename: Input filename
        """
        with open(filename, 'r') as f:
            data = json.load(f)
        
        self.nodes = data.get("nodes", {})  # Dict instead of list
        self.edges = data.get("edges", [])
        self.viewport = data.get("viewport", {"x": 0, "y": 0, "zoom": 1})
        if "node_templates" in data:
            self.node_templates = data["node_templates"]
        
        print(f"✓ Flow loaded from {filename}")
        return self
    
    def clear(self) -> None:
        """Clear all nodes and edges."""
        self.nodes = {}  # Empty dict instead of list
        self.edges = []
        self.node_values = {}  # Clear values too
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
