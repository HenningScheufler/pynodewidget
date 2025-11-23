# NodeFlowWidget

The main widget for creating and managing interactive node-based workflows in Jupyter notebooks.

::: pynodewidget.widget.NodeFlowWidget
    options:
      show_source: true
      members:
        - __init__
        - register_node_type
        - update_node_value
        - get_node_values
        - set_node_values
        - get_node_value
        - get_node_data
        - export_json
        - load_json
        - clear
        - get_flow_data
        - add_node_type_from_schema
        - add_node_type_from_pydantic

## Overview

`NodeFlowWidget` is the entry point for creating node-based UIs in Jupyter. It manages:

- **Node types**: Registry of available node classes
- **Graph state**: Nodes, edges, and their positions
- **Values**: Current parameter values for all nodes
- **Viewport**: Canvas position and zoom level

## Basic Usage

### Creating a Widget

```python
from pynodewidget import NodeFlowWidget

# Empty widget
flow = NodeFlowWidget()

# With registered node types
flow = NodeFlowWidget(nodes=[MyNode1, MyNode2])

# Custom height
flow = NodeFlowWidget(height="800px")
```

### Registering Node Types

```python
# Register during initialization
flow = NodeFlowWidget(nodes=[ProcessorNode, SourceNode])

# Register after creation
flow.register_node_type(SinkNode)

# Register with custom type name
flow.register_node_type(MyNode, type_name="custom_processor")
```

## Working with Values

### Getting Values

```python
# Get all values for a node
values = flow.get_node_values("node-1")
# Returns: {"threshold": 0.5, "enabled": True}

# Get single value with default
threshold = flow.get_node_value("node-1", "threshold", default=0.5)
```

### Setting Values

```python
# Update single value
flow.update_node_value("node-1", "threshold", 0.8)

# Update multiple values
flow.set_node_values("node-1", {
    "threshold": 0.8,
    "enabled": False,
    "mode": "advanced"
})
```

### Value Synchronization

The `node_values` trait uses `ObservableDict` for automatic synchronization:

```python
# This triggers an update to the JavaScript UI
flow.node_values["node-1"]["threshold"] = 0.8

# Changes in the UI automatically update this dict
print(flow.node_values["node-1"]["threshold"])
```

## Managing Graph Structure

### Accessing Nodes and Edges

```python
# Get all nodes
nodes = flow.nodes
# [{"id": "node-1", "type": "ProcessorNode", "position": {...}, ...}]

# Get all edges
edges = flow.edges
# [{"id": "e1-2", "source": "node-1", "target": "node-2", ...}]

# Get specific node data
node_data = flow.get_node_data("node-1")
```

### Modifying Graph

```python
# Add a node programmatically
flow.nodes = [
    *flow.nodes,
    {
        "id": "new-node",
        "type": "ProcessorNode",
        "position": {"x": 100, "y": 100},
        "data": {}
    }
]

# Add an edge
flow.edges = [
    *flow.edges,
    {
        "id": "e-new",
        "source": "node-1",
        "target": "new-node",
        "sourceHandle": "out",
        "targetHandle": "in"
    }
]

# Clear everything
flow.clear()
```

## Import and Export

### Export to File

```python
# Export complete workflow
flow.export_json("workflow.json")

# Export returns the filename
filename = flow.export_json("my_workflow.json")
print(f"Saved to {filename}")
```

The exported JSON contains:

```json
{
  "nodes": [...],
  "edges": [...],
  "viewport": {"x": 0, "y": 0, "zoom": 1},
  "node_templates": [...]
}
```

### Import from File

```python
# Load workflow
flow.load_json("workflow.json")

# Method chaining
flow.clear().load_json("workflow.json")
```

!!! warning "Node Types Must Be Registered"
    Before loading a workflow, ensure all node types used in the workflow are registered, or they won't render correctly.

### Export as Dictionary

```python
# Get flow data as dict
flow_data = flow.get_flow_data()
# Returns: {"nodes": [...], "edges": [...]}

# Full export including templates and viewport
import json
full_export = {
    "nodes": flow.nodes,
    "edges": flow.edges,
    "node_templates": flow.node_templates,
    "viewport": flow.viewport,
    "node_values": dict(flow.node_values)
}
```

## Traits (Synchronized Attributes)

These attributes automatically sync between Python and JavaScript:

### `nodes: List[Dict]`
List of node objects in the graph.

```python
flow.nodes = [
    {
        "id": "node-1",
        "type": "ProcessorNode",
        "position": {"x": 100, "y": 50},
        "data": {...}
    }
]
```

### `edges: List[Dict]`
List of edge objects connecting nodes.

```python
flow.edges = [
    {
        "id": "e1-2",
        "source": "node-1",
        "target": "node-2",
        "sourceHandle": "out",
        "targetHandle": "in"
    }
]
```

### `node_templates: List[Dict]`
Registered node type definitions. Populated by `register_node_type()`.

### `node_values: ObservableDict`
Current parameter values for all nodes, keyed by node ID.

```python
flow.node_values = {
    "node-1": {"threshold": 0.5, "enabled": True},
    "node-2": {"count": 10}
}
```

### `viewport: Dict`
Current viewport position and zoom.

```python
flow.viewport = {"x": 100, "y": 50, "zoom": 1.5}
```

### `height: str`
Widget height (CSS value).

```python
flow.height = "800px"
flow.height = "100vh"
```

## Legacy Methods

These methods are provided for backward compatibility:

### `add_node_type_from_schema()`
Register a node type from a raw JSON schema.

```python
flow.add_node_type_from_schema(
    json_schema={"type": "object", "properties": {...}},
    type_name="processor",
    label="Processor",
    icon="⚙️",
    inputs=[{"id": "in", "label": "Input"}],
    outputs=[{"id": "out", "label": "Output"}]
)
```

!!! note "Prefer register_node_type()"
    For new code, use `register_node_type()` with a `JsonSchemaNodeWidget` subclass instead.

### `add_node_type_from_pydantic()`
Register a node type from a Pydantic model.

```python
from pydantic import BaseModel

class ProcessorParams(BaseModel):
    threshold: float = 0.5

flow.add_node_type_from_pydantic(
    model_class=ProcessorParams,
    type_name="processor",
    label="Processor",
    icon="⚙️"
)
```

## Examples

### Complete Workflow Example

```python
from pydantic import BaseModel, Field
from pynodewidget import NodeFlowWidget, JsonSchemaNodeWidget

# Define parameters
class FilterParams(BaseModel):
    threshold: float = Field(default=0.5, ge=0, le=1)
    enabled: bool = True

# Define node
class FilterNode(JsonSchemaNodeWidget):
    label = "Filter"
    parameters = FilterParams
    icon = "🔍"
    inputs = [{"id": "in", "label": "Data"}]
    outputs = [{"id": "out", "label": "Filtered"}]
    
    def execute(self, inputs):
        config = self.get_values()
        if not config["enabled"]:
            return {"out": inputs["in"]}
        
        data = inputs["in"]
        threshold = config["threshold"]
        return {"out": [x for x in data if x >= threshold]}

# Create widget
flow = NodeFlowWidget(nodes=[FilterNode], height="600px")

# Later: Update values from Python
flow.update_node_value("filter-1", "threshold", 0.8)

# Execute workflow (custom logic)
def run_workflow(flow):
    # Your execution logic here
    pass

# Export for later use
flow.export_json("filter_workflow.json")
```

### Multiple Node Types

```python
class SourceNode(JsonSchemaNodeWidget):
    label = "Data Source"
    parameters = SourceParams
    outputs = [{"id": "data", "label": "Data"}]

class ProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    inputs = [{"id": "in", "label": "Input"}]
    outputs = [{"id": "out", "label": "Output"}]

class SinkNode(JsonSchemaNodeWidget):
    label = "Data Sink"
    parameters = SinkParams
    inputs = [{"id": "data", "label": "Data"}]

# Create comprehensive workflow
flow = NodeFlowWidget(
    nodes=[SourceNode, ProcessorNode, SinkNode],
    height="800px"
)
```

### Programmatic Graph Construction

```python
# Create widget
flow = NodeFlowWidget(nodes=[MyNode])

# Add nodes programmatically
flow.nodes = [
    {
        "id": "source",
        "type": "my_node",
        "position": {"x": 0, "y": 0},
        "data": {}
    },
    {
        "id": "processor",
        "type": "my_node",
        "position": {"x": 200, "y": 0},
        "data": {}
    }
]

# Connect them
flow.edges = [
    {
        "id": "e1",
        "source": "source",
        "target": "processor",
        "sourceHandle": "out",
        "targetHandle": "in"
    }
]

# Set initial values
flow.set_node_values("processor", {"threshold": 0.7})
```

## See Also

- **[JsonSchemaNodeWidget](json-schema-node.md)**: Create custom nodes
- **[Node Builder](node-builder.md)**: Configuration helpers
- **[ObservableDict](observable-dict.md)**: Auto-syncing dictionary
- **[Protocols](protocols.md)**: Extension protocols
