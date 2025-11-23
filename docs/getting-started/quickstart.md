# Quick Start

Get started with PyNodeWidget in minutes. This guide walks you through creating your first interactive node-based workflow.

## Basic Widget

The simplest way to use PyNodeWidget is to create an empty canvas:

```python
from pynodewidget import NodeFlowWidget

# Create widget
flow = NodeFlowWidget()

# Display in Jupyter
flow
```

This creates an interactive canvas where you can add nodes manually using the UI.

## Creating a Custom Node

The real power comes from defining custom node types with Python:

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget, NodeFlowWidget

# 1. Define parameters with Pydantic
class FilterParams(BaseModel):
    threshold: float = Field(
        default=0.5,
        ge=0,
        le=1,
        description="Minimum value to pass through"
    )
    enabled: bool = Field(
        default=True,
        description="Enable filtering"
    )

# 2. Create node class
class FilterNode(JsonSchemaNodeWidget):
    label = "Filter"
    parameters = FilterParams
    icon = "🔍"
    category = "processing"
    
    # Define inputs and outputs
    inputs = [
        {"id": "data_in", "label": "Input"}
    ]
    outputs = [
        {"id": "data_out", "label": "Output"}
    ]
    
    def execute(self, inputs):
        """Process data through the filter."""
        config = self.get_values()
        
        if not config["enabled"]:
            return {"data_out": inputs.get("data_in")}
        
        # Filter logic
        data = inputs.get("data_in", [])
        threshold = config["threshold"]
        filtered = [x for x in data if x >= threshold]
        
        return {"data_out": filtered}

# 3. Create widget with node
flow = NodeFlowWidget(nodes=[FilterNode])
flow
```

When you display this widget:

1. The "Filter" node appears in the left sidebar
2. You can drag it onto the canvas
3. The form shows threshold and enabled fields
4. Changes sync automatically to Python

## Accessing Node Values

Read values from Python:

```python
# Get values for a specific node
values = flow.get_node_values("node-id")
print(values["threshold"])  # 0.5
print(values["enabled"])    # True

# Update values from Python
flow.update_node_value("node-id", "threshold", 0.8)
```

## Multiple Node Types

Register multiple node types for a complete workflow:

```python
from pydantic import BaseModel, Field

# Source node
class SourceParams(BaseModel):
    count: int = Field(default=10, ge=1, le=100)

class SourceNode(JsonSchemaNodeWidget):
    label = "Data Source"
    parameters = SourceParams
    icon = "📥"
    outputs = [{"id": "out", "label": "Data"}]
    
    def execute(self, inputs):
        count = self.get_values()["count"]
        data = list(range(count))
        return {"out": data}

# Sink node
class SinkParams(BaseModel):
    format: str = Field(default="json")

class SinkNode(JsonSchemaNodeWidget):
    label = "Data Sink"
    parameters = SinkParams
    icon = "📤"
    inputs = [{"id": "in", "label": "Data"}]
    
    def execute(self, inputs):
        data = inputs.get("in")
        format_type = self.get_values()["format"]
        print(f"Saving {len(data)} items as {format_type}")
        return {}

# Create workflow
flow = NodeFlowWidget(
    nodes=[SourceNode, FilterNode, SinkNode],
    height="600px"
)
flow
```

Now you can:

1. Drag all three node types onto the canvas
2. Connect them: Source → Filter → Sink
3. Adjust parameters in each node's form
4. Execute the workflow

## Working with Connections

Access the graph structure:

```python
# Get all edges
print(flow.edges)
# [{'id': 'e1', 'source': 'node-1', 'target': 'node-2', ...}]

# Get all nodes
print(flow.nodes)
# [{'id': 'node-1', 'type': 'FilterNode', 'position': {...}, ...}]

# Export workflow
workflow_json = flow.export_flow()

# Import workflow
flow.import_flow(workflow_json)
```

## Styling Your Nodes

Customize node appearance:

```python
from pynodeflow.node_builder import with_style

class StyledNode(JsonSchemaNodeWidget):
    label = "Styled Node"
    parameters = FilterParams
    
    # Add custom styling
    style = {
        "minWidth": "300px",
        "borderRadius": "8px",
        "shadow": "lg"
    }
    
    header = {
        "show": True,
        "icon": "✨",
        "bgColor": "bg-gradient-to-r from-purple-500 to-pink-500",
        "textColor": "text-white"
    }
```

## Conditional Fields

Show/hide fields based on other field values:

```python
from pydantic import BaseModel, Field

class AdvancedParams(BaseModel):
    mode: str = Field(default="simple")
    # Only shown when mode == "advanced"
    threshold: float = Field(default=0.5, ge=0, le=1)
    iterations: int = Field(default=10, ge=1)

class AdvancedNode(JsonSchemaNodeWidget):
    label = "Advanced Processor"
    parameters = AdvancedParams
    
    # Configure field visibility
    fieldConfigs = {
        "threshold": {
            "showWhen": {
                "field": "mode",
                "operator": "equals",
                "value": "advanced"
            }
        },
        "iterations": {
            "showWhen": {
                "field": "mode",
                "operator": "equals",
                "value": "advanced"
            }
        }
    }
```

## Auto-Layout

Let PyNodeWidget arrange your nodes automatically:

```python
# After adding nodes and connections
# Click the "Auto Layout" button in the toolbar
# Or programmatically (when feature is available)
```

## Next Steps

Now that you've created your first nodes, explore:

- **[Core Concepts](concepts.md)**: Understand nodes, handles, and workflows
- **[Custom Nodes Guide](../guides/custom-nodes.md)**: Advanced node creation techniques
- **[Custom Fields](../guides/custom-fields.md)**: Create specialized input types
- **[API Reference](../api/python/widget.md)**: Complete NodeFlowWidget documentation
