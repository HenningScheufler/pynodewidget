# User Guide

PyNodeWidget enables you to build node-based workflows entirely from Python. Define nodes with Pydantic models, and the UI is automatically generated.

## Core Topics

<div class="grid cards" markdown>

-   :material-node: **[Creating Custom Nodes](custom-nodes.md)**

    ---

    Create custom node types using Pydantic models with parameters, inputs, outputs, and execution logic.

-   :material-palette: **[Styling Nodes](styling.md)**

    ---

    Customize node appearance with headers, footers, colors, and layouts from Python.

-   :material-eye-off: **[Conditional Fields](conditional-fields.md)**

    ---

    Show or hide fields dynamically based on other field values.

-   :material-connection: **[Handle Types](handles.md)**

    ---

    Configure connection point styles: base, button, or labeled handles.

-   :material-database: **[Working with Values](values.md)**

    ---

    Read and update node values from Python with automatic UI sync.

-   :material-export: **[Import/Export Workflows](import-export.md)**

    ---

    Save and load workflows as JSON for sharing and version control.

</div>

## Quick Example

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget, NodeFlowWidget

# Define parameters with Pydantic
class FilterParams(BaseModel):
    threshold: float = Field(default=0.5, ge=0, le=1)
    enabled: bool = True

# Create node class
class FilterNode(JsonSchemaNodeWidget):
    label = "Data Filter"
    parameters = FilterParams
    icon = "🔍"
    
    inputs = [{"id": "data_in", "label": "Data"}]
    outputs = [{"id": "filtered", "label": "Filtered"}]
    
    def execute(self, inputs):
        config = self.get_values()
        if not config["enabled"]:
            return {"filtered": inputs["data_in"]}
        data = inputs["data_in"]
        return {"filtered": [x for x in data if x >= config["threshold"]]}

# Create and display widget
flow = NodeFlowWidget(nodes=[FilterNode])
flow
```

## Architecture

PyNodeWidget uses [AnyWidget](https://anywidget.dev) to bridge Python and JavaScript:

- **Python side**: Define nodes, manage state, handle execution
- **JavaScript side**: Renders UI using ReactFlow (automatically managed)
- **Bidirectional sync**: Changes in Python update the UI, and vice versa

```python
# Python → UI
flow.update_node_value("node-1", "threshold", 0.8)

# UI → Python (automatic)
values = flow.get_node_values("node-1")  # Shows user's changes
```

For architecture details, see **[Developer Documentation](../developer/architecture.md)**.

## Key Concepts

### Pydantic Models Define UI

UI is automatically generated from Pydantic models:

```python
from pydantic import BaseModel, Field
from typing import Literal

class Params(BaseModel):
    name: str = Field(default="", description="Name")
    threshold: float = Field(default=0.5, ge=0, le=1)  # Slider
    enabled: bool = True  # Checkbox
    mode: Literal["auto", "manual"] = "auto"  # Dropdown
```

### Type-Safe Configuration

Use Python dictionaries and Pydantic for configuration:

```python
class MyNode(JsonSchemaNodeWidget):
    label = "My Node"
    parameters = MyParams
    icon = "⚙️"
    color = "blue"
    layout_type = "horizontal"
```

### Automatic Sync

ObservableDict enables automatic synchronization between Python and JavaScript without manual intervention.

## Next Steps

Start with **[Creating Custom Nodes](custom-nodes.md)** to build your first node, then explore other guides as needed.
