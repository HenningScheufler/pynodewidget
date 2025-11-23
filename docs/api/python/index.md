# Python API Overview

PyNodeWidget's Python API consists of several key modules that work together to create interactive node-based UIs in Jupyter notebooks.

## Core Components

### [NodeFlowWidget](widget.md)
The main widget for creating and managing node-based workflows. This is your entry point for creating interactive node graphs in Jupyter.

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget(nodes=[MyNode], height="800px")
flow
```

**Key Features:**

- Register and manage node types
- Access and modify node values
- Import/export workflows as JSON
- Bidirectional synchronization with UI

---

### [JsonSchemaNodeWidget](json-schema-node.md)
Base class for creating custom node types. Implements the NodeFactory protocol and provides a convenient way to define nodes using Pydantic models.

```python
from pynodewidget import JsonSchemaNodeWidget

class MyNode(JsonSchemaNodeWidget):
    label = "My Node"
    parameters = MyParamsModel
    inputs = [{"id": "in", "label": "Input"}]
    outputs = [{"id": "out", "label": "Output"}]
```

**Key Features:**

- Pydantic-based parameter definition
- Automatic UI generation
- Validation and type safety
- Optional execute() method for processing logic

---

### [Node Builder Utilities](node-builder.md)
Helper functions for creating common node configurations without writing custom JavaScript.

```python
from pynodeflow.node_builder import create_processing_node, with_style

config = create_processing_node("Processor", icon="⚙️")
config = with_style(config, min_width="300px", shadow="lg")
```

**Key Features:**

- Pre-built node templates (source, sink, processing, form, etc.)
- Style and layout helpers
- Conditional field utilities
- Configuration merging

---

### [ObservableDict](observable-dict.md)
Auto-syncing dictionary that triggers callbacks on mutations. Used internally for efficient Python-JavaScript synchronization.

```python
from pynodewidget import ObservableDict

data = ObservableDict(callback=lambda: print("changed"))
data["key"] = "value"  # Triggers callback
```

---

### [Protocols](protocols.md)
Protocol definitions for extending PyNodeWidget with custom node factories.

```python
from pynodeflow.protocols import NodeFactory, NodeMetadata
```

## Quick Reference

### Creating a Widget

```python
from pynodewidget import NodeFlowWidget, JsonSchemaNodeWidget
from pydantic import BaseModel, Field

# Define parameters
class ProcessorParams(BaseModel):
    threshold: float = Field(default=0.5, ge=0, le=1)

# Define node class
class ProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    icon = "⚙️"
    inputs = [{"id": "in", "label": "Input"}]
    outputs = [{"id": "out", "label": "Output"}]

# Create widget
flow = NodeFlowWidget(nodes=[ProcessorNode])
flow
```

### Accessing Node Values

```python
# Get all values for a node
values = flow.get_node_values("node-1")

# Update a single value
flow.update_node_value("node-1", "threshold", 0.8)

# Get a specific value
threshold = flow.get_node_value("node-1", "threshold", default=0.5)

# Set multiple values
flow.set_node_values("node-1", {"threshold": 0.8, "enabled": True})
```

### Registering Node Types

```python
# Register during initialization
flow = NodeFlowWidget(nodes=[Node1, Node2, Node3])

# Register after initialization
flow.register_node_type(Node4)
flow.register_node_type(Node5, type_name="custom_name")
```

### Import/Export

```python
# Export workflow to file
flow.export_json("my_workflow.json")

# Load workflow from file
flow.load_json("my_workflow.json")

# Export as dict
workflow_data = flow.get_flow_data()

# Access nodes and edges
nodes = flow.nodes
edges = flow.edges
```

## Type System

PyNodeWidget uses Pydantic for type-safe parameter definitions:

```python
from pydantic import BaseModel, Field
from typing import Literal

class NodeParams(BaseModel):
    # String with validation
    name: str = Field(min_length=1, max_length=50)
    
    # Number with range
    threshold: float = Field(ge=0, le=1)
    
    # Integer
    count: int = Field(default=10, ge=1)
    
    # Boolean
    enabled: bool = True
    
    # Enum (becomes dropdown)
    mode: Literal["auto", "manual", "advanced"] = "auto"
    
    # Optional field
    description: str | None = None
```

These automatically generate appropriate UI inputs:

- `str` → Text input
- `int`, `float` → Number input
- `bool` → Checkbox
- `Literal` / Enum → Dropdown
- Optional → Nullable field

## Advanced Features

### Conditional Fields

Show/hide fields based on other field values:

```python
from pynodeflow.node_builder import make_fields_conditional

fieldConfigs = make_fields_conditional(
    trigger_field="mode",
    trigger_value="advanced",
    dependent_fields=["threshold", "iterations"]
)

node = JsonSchemaNodeWidget.from_pydantic(
    MyParams,
    label="Advanced",
    fieldConfigs=fieldConfigs
)
```

### Custom Styling

```python
from pynodeflow.node_builder import with_style, with_custom_header

config = create_processing_node("Styled Node")
config = with_style(config, 
    min_width="300px",
    shadow="lg",
    border_radius="12px"
)
config = with_custom_header(config,
    icon="✨",
    class_name="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
)
```

### Node Execution

Implement custom processing logic:

```python
class ProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams
    
    def execute(self, inputs: Dict[str, Any]) -> Dict[str, Any]:
        """Execute node logic."""
        # Get configuration
        config = self.get_values()
        threshold = config["threshold"]
        
        # Get input data
        data = inputs.get("data_in")
        
        # Process
        filtered = [x for x in data if x >= threshold]
        
        # Return outputs
        return {"data_out": filtered}
```

## Next Steps

- **[NodeFlowWidget Reference](widget.md)**: Complete widget API
- **[JsonSchemaNodeWidget Reference](json-schema-node.md)**: Node creation API
- **[Node Builder Utilities](node-builder.md)**: Configuration helpers
- **[User Guides](../../guides/custom-nodes.md)**: Practical tutorials
