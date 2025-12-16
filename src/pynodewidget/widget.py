"""Core NodeFlowWidget implementation."""

import pathlib
import anywidget
import traitlets as t
from typing import List, Dict, Any, Optional, Type, Set
import json
from .observable_dict import ObservableDict, ObservableDictTrait

# Reserved node type names in ReactFlow that should not be used as custom node types
# Using these names causes rendering issues and layout problems because ReactFlow
# has built-in node types with these names. When you try to use them, ReactFlow
# falls back to its default rendering instead of using your custom layout.
#
# - 'input': ReactFlow's built-in input node (for data sources)
# - 'output': ReactFlow's built-in output node (for data sinks)  
# - 'default': ReactFlow's default node type
# - 'group': ReactFlow's group node for containing other nodes
#
# If validation blocks your preferred name, use alternatives like:
#   'output' → 'output_node', 'data_output', 'sink', 'destination'
#   'input' → 'input_node', 'data_input', 'source'
RESERVED_NODE_TYPES = {'input', 'output', 'default', 'group'}


def _to_plain_dict(obj):
    """Recursively convert ObservableDict to plain dict for serialization."""
    if isinstance(obj, (ObservableDict, dict)):
        return {k: _to_plain_dict(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [_to_plain_dict(item) for item in obj]
    else:
        return obj


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
    
    # Image export trigger (Python -> JS communication) - List to support rapid successive exports
    _export_image_trigger = t.List(trait=t.Dict()).tag(sync=True)
    # Image export data (JS -> Python communication, base64 encoded)
    _export_image_data = t.Unicode(default_value="").tag(sync=True)
    
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
        self._export_id = 0
        self._pending_exports = {}  # Maps export_id -> filename
        
        # Set up persistent observer for image data
        self.observe(self._on_image_data_received, names=['_export_image_data'])
    
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
            
        Raises:
            ValueError: If type_name is reserved by ReactFlow
            
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
        # Check for reserved node type names
        if type_name.lower() in RESERVED_NODE_TYPES:
            raise ValueError(
                f"Node type name '{type_name}' is reserved by ReactFlow and cannot be used. "
                f"Reserved names are: {', '.join(sorted(RESERVED_NODE_TYPES))}. "
                f"Please use a different name like '{type_name}_node' or 'data_{type_name}'."
            )
        
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
            "node_templates": self.node_templates,
            "node_values": dict(self.node_values)
        }
        
        with open(filename, 'w') as f:
            json.dump(data, f, indent=2)
        
        print(f"✓ Flow exported to {filename}")
        return filename
    
    def export_yaml(self, filename: str = "flow.yaml") -> str:
        """Export the current flow to a YAML file.
        
        Args:
            filename: Output filename
            
        Raises:
            ImportError: If pyyaml is not installed
        """
        try:
            import yaml
        except ImportError:
            raise ImportError(
                "PyYAML is required for YAML export. Install with: pip install pyyaml"
            )
        
        data = {
            "nodes": self.nodes,
            "edges": self.edges,
            "viewport": self.viewport,
            "node_templates": self.node_templates,
            "node_values": _to_plain_dict(self.node_values)
        }
        
        with open(filename, 'w') as f:
            yaml.dump(data, f, default_flow_style=False, sort_keys=False)
        
        print(f"✓ Flow exported to {filename}")
        return filename
    
    def export(self, filename: str, format: str = None) -> str:
        """Export the current flow to a file (auto-detects format from extension).
        
        Args:
            filename: Output filename
            format: Export format ('json', 'yaml', 'html', 'png', 'jpeg'). 
                   If None, auto-detects from filename
            
        Returns:
            Path to the exported file
        """
        if format is None:
            # Auto-detect format from file extension
            format = filename.split('.')[-1].lower()
        
        if format in ('yaml', 'yml'):
            return self.export_yaml(filename)
        elif format == 'json':
            return self.export_json(filename)
        elif format in ('html', 'htm'):
            return self.export_html(filename)
        elif format in ('png', 'jpeg'):
            return self.export_image(filename)
        else:
            # Default to JSON
            return self.export_json(filename)
    
    @classmethod
    def from_json(cls, filename: str, **kwargs) -> "NodeFlowWidget":
        """Create a new widget instance from a JSON file.
        
        This is a class method that creates and returns a new NodeFlowWidget
        with the state loaded from the JSON file.
        
        Args:
            filename: Path to the JSON file to load
            **kwargs: Additional arguments passed to NodeFlowWidget constructor
            
        Returns:
            New NodeFlowWidget instance with loaded state
            
        Examples:
            >>> # Create widget from saved workflow
            >>> widget = NodeFlowWidget.from_json("workflow.json")
            >>> 
            >>> # Create with custom height
            >>> widget = NodeFlowWidget.from_json("workflow.json", height="800px")
        """
        with open(filename, 'r') as f:
            data = json.load(f)
        
        widget = cls(**kwargs)
        widget.nodes = data.get("nodes", {})
        widget.edges = data.get("edges", [])
        widget.viewport = data.get("viewport", {"x": 0, "y": 0, "zoom": 1})
        if "node_templates" in data:
            widget.node_templates = data["node_templates"]
        if "node_values" in data:
            widget.node_values = data["node_values"]
        
        return widget
    
    def _on_image_data_received(self, change):
        """Handle image data received from JavaScript."""
        data_url = change['new']
        
        # Skip empty data
        if not data_url:
            return
        
        # Extract export ID from the data URL (appended by JS)
        # Format: data:image/png;base64,...|exportId=123
        export_id = None
        if '|exportId=' in data_url:
            data_url, export_id_str = data_url.rsplit('|exportId=', 1)
            try:
                export_id = int(export_id_str)
            except ValueError:
                pass
        
        # Skip if no export ID or filename is not tracked
        if export_id is None or export_id not in self._pending_exports:
            return
        
        filename = self._pending_exports.pop(export_id)
        
        # Decode and save
        if data_url.startswith('data:'):
            import base64
            from pathlib import Path
            
            try:
                _, encoded = data_url.split(',', 1)
                image_data = base64.b64decode(encoded)
                Path(filename).write_bytes(image_data)
                print(f"✓ Image saved to {filename}")
            except Exception as e:
                print(f"✗ Failed to save image: {e}")
    
    def export_html(
        self,
        filename: str = "workflow.html",
        title: str = "PyNodeWidget Workflow",
        height: str = None,
        interactive: bool = True,
        embed_assets: bool = True
    ) -> str:
        """Export the current flow as a standalone HTML file.
        
        Generates a self-contained HTML file that can be viewed in any web browser
        without requiring a Python runtime or Jupyter notebook. The HTML includes
        the complete ReactFlow visualization with all nodes, edges, and templates.
        
        Args:
            filename: Output HTML filename
            title: Page title for the HTML document
            height: Height of the visualization (e.g., "600px", "100vh"). 
                   If None, uses widget's current height setting
            interactive: If True, allows panning, zooming, and node manipulation.
                        If False, creates a static view-only visualization
            embed_assets: If True, inline all JavaScript and CSS into the HTML file
                         for single-file portability. If False, keeps assets separate.
            
        Returns:
            Path to the exported HTML file
            
        Examples:
            >>> # Export with default settings (interactive, embedded)
            >>> widget.export_html("workflow.html")
            >>> 
            >>> # Export static view-only version
            >>> widget.export_html("workflow.html", interactive=False)
            >>> 
            >>> # Export with separate asset files (smaller HTML)
            >>> widget.export_html("workflow.html", embed_assets=False)
            >>> 
            >>> # Custom height and title
            >>> widget.export_html(
            ...     "my_dag.html",
            ...     title="My DAG Visualization",
            ...     height="100vh"
            ... )
        """
        from jinja2 import Template
        from pathlib import Path
        
        # Use widget's height if not specified
        if height is None:
            height = self.height
        
        # Prepare flow data
        flow_data = {
            "nodes": self.nodes,
            "edges": self.edges,
            "viewport": self.viewport,
            "node_templates": self.node_templates,
            "node_values": _to_plain_dict(self.node_values),
            "height": height,
            "interactive": interactive
        }
        
        # Load template
        template_path = Path(__file__).parent / "templates" / "standalone.html.jinja2"
        if not template_path.exists():
            raise FileNotFoundError(
                f"HTML template not found at {template_path}. "
                "Please ensure the package is properly installed."
            )
        
        template_content = template_path.read_text()
        template = Template(template_content)
        
        # Load JavaScript bundle
        js_path = Path(__file__).parent / "static" / "standalone.iife.js"
        css_path = Path(__file__).parent / "static" / "standalone.css"
        
        if not js_path.exists():
            raise FileNotFoundError(
                f"Standalone JavaScript bundle not found at {js_path}. "
                "Please rebuild the package with: cd js && npm run build:standalone"
            )
        
        # Read assets
        js_content = js_path.read_text() if embed_assets else None
        css_content = css_path.read_text() if embed_assets and css_path.exists() else None
        
        # Render template
        html_content = template.render(
            title=title,
            flow_data=json.dumps(flow_data, indent=2),
            embed_js=embed_assets,
            embed_css=embed_assets and css_content is not None,
            js_content=js_content,
            css_content=css_content
        )
        
        # Write HTML file
        output_path = Path(filename)
        output_path.write_text(html_content)
        
        # Copy separate asset files if not embedding
        if not embed_assets:
            output_dir = output_path.parent
            import shutil
            shutil.copy(js_path, output_dir / "standalone.iife.js")
            if css_path.exists():
                shutil.copy(css_path, output_dir / "standalone.css")
        
        print(f"✓ HTML exported to {filename}")
        return str(filename)
    
    def export_image(
        self,
        filename: str,
        quality: float = 1.0,
        pixel_ratio: int = 2,
        save_to_file: bool = True,
        browser_download: bool = False
    ) -> None:
        """Export the flow visualization as an image.
        
        Triggers a browser-based image export using html-to-image. By default,
        saves the image data to Python and writes it to the specified file path.
        Optionally can also trigger a browser download.
        
        Note:
            This method only works in browser environments (Jupyter, Marimo).
            It cannot be used in pure Python scripts without a browser.
        
        Args:
            filename: File path to save the image (when save_to_file=True) or
                     suggested download name (when browser_download=True)
            quality: Image quality for JPEG (0.0-1.0)
            pixel_ratio: Pixel ratio for higher DPI (default: 2)
            save_to_file: If True, save image data to filesystem via Python (default: True)
            browser_download: If True, also trigger browser download (default: False)
            
        Examples:
            >>> # Save to filesystem via Python
            >>> widget.export_image("workflow.png")
            >>> 
            >>> # Browser download only
            >>> widget.export_image("workflow.png", save_to_file=False, browser_download=True)
            >>> 
            >>> # Both: save to file AND trigger browser download
            >>> widget.export_image("workflow.png", browser_download=True)
        """
        # Validate format
        format = filename.split('.')[-1].lower()
        if format not in ("png", "jpeg"):
            raise ValueError("Invalid format. Supported formats: png, jpeg")
        
        # Increment export ID
        self._export_id += 1
        export_id = self._export_id
        
        # Store filename for callback if saving to file
        if save_to_file:
            self._pending_exports[export_id] = filename
        
        # Append to trigger list - this ensures each export is processed separately
        # even when called multiple times rapidly without sleep
        self._export_image_trigger = self._export_image_trigger + [{
            "format": format,
            "filename": filename,
            "quality": quality,
            "pixelRatio": pixel_ratio,
            "saveToFile": save_to_file,
            "browserDownload": browser_download,
            "exportId": export_id
        }]
    
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
