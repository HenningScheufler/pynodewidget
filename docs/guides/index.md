# User Guide

This guide covers everything you need to know to use PyNodeWidget effectively in your Python projects. All examples focus on Python-only usage - no JavaScript required!

## What You'll Learn

PyNodeWidget is designed to be used entirely from Python. You define nodes, configure their appearance and behavior, and PyNodeWidget handles all the JavaScript visualization automatically.

### Core Topics

<div class="grid cards" markdown>

-   :material-node: **[Creating Custom Nodes](custom-nodes.md)**

    ---

    Learn how to create custom node types using Pydantic models. Define parameters, inputs, outputs, and execution logic entirely in Python.

-   :material-palette: **[Styling Nodes](styling.md)**

    ---

    Customize the appearance of your nodes with headers, footers, colors, and layouts - all configured from Python.

-   :material-eye-off: **[Conditional Fields](conditional-fields.md)**

    ---

    Show or hide fields dynamically based on other field values. Create adaptive UIs that respond to user input.

-   :material-connection: **[Handle Types](handles.md)**

    ---

    Choose between different connection point styles: base handles, button handles, or labeled handles.

-   :material-database: **[Working with Values](values.md)**

    ---

    Read and update node parameter values from Python. Sync state between your Python code and the UI.

-   :material-export: **[Import/Export Workflows](import-export.md)**

    ---

    Save and load complete workflows as JSON. Share configurations and reproduce results.

</div>

## Quick Example

Here's a complete example showing the Python-only approach:

```python
from pydantic import BaseModel, Field
from pynodewidget import JsonSchemaNodeWidget, NodeFlowWidget

# 1. Define parameters with Pydantic (pure Python)
class FilterParams(BaseModel):
    threshold: float = Field(default=0.5, ge=0, le=1)
    mode: str = Field(default="strict", pattern="^(strict|lenient)$")
    enabled: bool = True

# 2. Create node class (pure Python)
class FilterNode(JsonSchemaNodeWidget):
    label = "Data Filter"
    parameters = FilterParams
    icon = "🔍"
    
    # Define connections
    inputs = [{"id": "data_in", "label": "Data"}]
    outputs = [{"id": "filtered", "label": "Filtered Data"}]
    
    # Optional: Add execution logic
    def execute(self, inputs):
        config = self.get_values()
        if not config["enabled"]:
            return {"filtered": inputs["data_in"]}
        
        data = inputs["data_in"]
        threshold = config["threshold"]
        return {"filtered": [x for x in data if x >= threshold]}

# 3. Create widget and use it (pure Python)
flow = NodeFlowWidget(nodes=[FilterNode])

# Display in Jupyter
flow

# Later: Access values from Python
values = flow.get_node_values("filter-node-1")
print(f"Current threshold: {values['threshold']}")

# Update values from Python
flow.update_node_value("filter-node-1", "threshold", 0.8)
```

That's it! No JavaScript, no configuration files, no build steps. Just Python.

## Key Concepts

### Pydantic Models Drive Everything

PyNodeWidget uses Pydantic models to define node parameters. The UI is automatically generated from your model:

```python
from pydantic import BaseModel, Field

class MyParams(BaseModel):
    # Text input
    name: str = Field(default="default", description="Name")
    
    # Number input with validation
    threshold: float = Field(default=0.5, ge=0, le=1)
    
    # Checkbox
    enabled: bool = True
    
    # Dropdown
    mode: Literal["auto", "manual"] = "auto"
```

### Configuration Over Code

Instead of writing JavaScript, you configure node appearance with Python dictionaries:

```python
from pynodeflow.node_builder import create_processing_node, with_style

# Use pre-built configurations
config = create_processing_node("My Node", icon="⚙️")

# Customize with helper functions
config = with_style(config, min_width="300px", shadow="lg")

# Apply to your node
node = JsonSchemaNodeWidget.from_pydantic(
    MyParams,
    **config
)
```

### Bidirectional Sync

Changes in the UI automatically update Python, and vice versa:

```python
# Python → UI: This updates the form in the browser
flow.update_node_value("node-1", "threshold", 0.8)

# UI → Python: User edits update Python automatically
print(flow.get_node_values("node-1"))  # Shows user's changes
```

## Python-Only Philosophy

PyNodeWidget follows these principles:

1. **No JavaScript Required**: Everything can be done from Python
2. **Type Safety**: Pydantic models provide validation and type checking
3. **Configuration Over Code**: Use dictionaries and helper functions instead of writing code
4. **Familiar APIs**: Leverage Python libraries and patterns you already know

## When to Extend with JavaScript

You typically don't need to touch JavaScript. However, you might want to if you need:

- **Custom field types** not supported by HTML (e.g., color pickers, date pickers)
- **Complex interactive widgets** within nodes (e.g., embedded charts)
- **Custom rendering logic** beyond what configuration provides

For these cases, see:

- **[JavaScript API Reference](../api/javascript/index.md)**: For custom field types
- **[JavaScript Development](../contributing/javascript.md)**: For contributing to the JavaScript codebase
- **[Extending JavaScript](../advanced/extending-js.md)**: For plugin development

## Next Steps

Start with **[Creating Custom Nodes](custom-nodes.md)** to build your first node type, then explore other topics as needed.

All examples in this guide are complete and ready to run in Jupyter notebooks!
