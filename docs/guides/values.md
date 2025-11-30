# Working with Values

Read and update node field values from Python with automatic bidirectional sync.

## Overview

PyNodeWidget provides bidirectional synchronization between Python and JavaScript using AnyWidget:

- UI changes automatically update Python values
- Python changes automatically update the UI
- Powered by `ObservableDict` for automatic sync

## Widget-Level Value Access

### Reading Node Values

Get all values for a node:

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget()

# Get all values for a node
values = flow.get_node_values("processor-1")
# Returns: {"threshold": 0.5, "enabled": True, "mode": "auto"}

# Access specific value
threshold = values.get("threshold", 0.5)
```

Get a single value:

```python
# Get specific value with default
workers = flow.get_node_value("processor-1", "workers", default=4)

# Equivalent to:
values = flow.get_node_values("processor-1")
workers = values.get("workers", 4)
```

### Setting Node Values

Update multiple values:

```python
# Set multiple values at once
flow.set_node_values("processor-1", {
    "threshold": 0.8,
    "enabled": False,
    "mode": "advanced"
})
```

Update single value:

```python
# Update one value
flow.update_node_value("processor-1", "workers", 20)
```

### Checking Node Existence

```python
# Check if node has any values
if "processor-1" in flow.node_values:
    values = flow.node_values["processor-1"]
```

## Node-Level Value Access

When working with node instances directly:

### Reading Values

```python
from pynodewidget import JsonSchemaNodeWidget

class ProcessorNode(JsonSchemaNodeWidget):
    label = "Processor"
    parameters = ProcessorParams

# Create node instance
node = ProcessorNode(threshold=0.5, enabled=True)

# Get all values
values = node.get_values()
# Returns: {"threshold": 0.5, "enabled": True, "mode": "auto"}

# Access specific value
threshold = values["threshold"]
```

### Setting Values

Update multiple values:

```python
# Set multiple values
node.set_values({
    "threshold": 0.8,
    "enabled": False
})

# Verify update
print(node.get_values())
# {"threshold": 0.8, "enabled": False, "mode": "auto"}
```

Update single value:

```python
# Set one value
node.set_value("workers", 20)

# Equivalent to:
node.set_values({"workers": 20})
```

## Bidirectional Sync

### Python → UI

Changes in Python automatically appear in the UI:

```python
flow = NodeFlowWidget()

# User creates a node in the UI with ID "node-1"
# ...

# Update from Python
flow.update_node_value("node-1", "threshold", 0.9)

# UI updates automatically! No refresh needed.
```

### UI → Python

Changes in the UI automatically update Python:

```python
# User changes threshold slider in UI from 0.5 to 0.8
# ...

# Read updated value in Python
threshold = flow.get_node_value("node-1", "threshold")
print(threshold)  # 0.8 - automatically synced!
```

### Observing Changes

Monitor value changes with Traitlets observers:

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget()

def on_values_change(change):
    """Called when any node value changes."""
    node_id = change["name"]
    new_values = change["new"]
    print(f"Node {node_id} values changed to: {new_values}")

# Observe all node_values changes
flow.observe(on_values_change, names=["node_values"])
```

Observe specific node:

```python
def on_processor_change(change):
    """Monitor specific node."""
    values = change["new"]
    if "node-1" in values:
        node_values = values["node-1"]
        print(f"Processor values: {node_values}")

flow.observe(on_processor_change, names=["node_values"])
```

## Nested Values

ObservableDict supports nested dictionaries:

```python
# Nested configuration
flow.update_node_value("node-1", "advanced", {
    "timeout": 30,
    "retries": 3,
    "cache": {"enabled": True, "ttl": 3600}
})

# Update nested value (still syncs!)
flow.node_values["node-1"]["advanced"]["timeout"] = 60

# Access nested value
cache_ttl = flow.node_values["node-1"]["advanced"]["cache"]["ttl"]
```

## Value Patterns

### Default Values

Provide defaults when reading:

```python
# Get with default
threshold = flow.get_node_value("node-1", "threshold", default=0.5)

# Or use dict.get
values = flow.get_node_values("node-1")
workers = values.get("workers", 4)
mode = values.get("mode", "auto")
```

### Batch Updates

Update multiple nodes efficiently:

```python
# Update multiple nodes
for node_id in ["node-1", "node-2", "node-3"]:
    flow.set_node_values(node_id, {
        "enabled": False,
        "status": "paused"
    })
```

### Conditional Updates

Update based on current value:

```python
# Get current value
current = flow.get_node_value("node-1", "count", 0)

# Increment
flow.update_node_value("node-1", "count", current + 1)
```

### Reset to Defaults

```python
# Reset node to default values
default_values = node.FieldsModel().model_dump()
flow.set_node_values("node-1", default_values)
```

## Real-World Examples

### Progress Tracking

Update progress from Python:

```python
import time

flow = NodeFlowWidget()

# Simulate long-running process
for i in range(100):
    # Update progress (UI shows immediately)
    flow.update_node_value("processor-1", "progress", i)
    flow.update_node_value("processor-1", "status", "processing")
    
    time.sleep(0.1)

# Mark complete
flow.update_node_value("processor-1", "status", "complete")
flow.update_node_value("processor-1", "progress", 100)
```

### Dynamic Configuration

Adjust based on data:

```python
# Load data
data = load_dataset()

# Auto-configure based on data
flow.set_node_values("loader-1", {
    "rows": len(data),
    "columns": len(data.columns),
    "format": detect_format(data)
})
```

### Validation Feedback

Show validation errors:

```python
def validate_node(node_id):
    """Validate node configuration."""
    values = flow.get_node_values(node_id)
    
    threshold = values.get("threshold", 0.5)
    if threshold < 0 or threshold > 1:
        flow.update_node_value(node_id, "error", "Threshold must be 0-1")
        flow.update_node_value(node_id, "valid", False)
        return False
    
    flow.update_node_value(node_id, "error", "")
    flow.update_node_value(node_id, "valid", True)
    return True

# Validate before processing
if validate_node("processor-1"):
    process_data()
```

### Multi-Node Coordination

Coordinate multiple nodes:

```python
# Configure data flow pipeline
flow.set_node_values("loader-1", {
    "file_path": "data.csv",
    "status": "ready"
})

flow.set_node_values("processor-1", {
    "input_ready": True,
    "status": "waiting"
})

flow.set_node_values("output-1", {
    "format": "json",
    "status": "waiting"
})

# Start pipeline
flow.update_node_value("loader-1", "status", "loading")
data = load_data()

flow.update_node_value("processor-1", "status", "processing")
result = process_data(data)

flow.update_node_value("output-1", "status", "saving")
save_result(result)

# Mark all complete
for node_id in ["loader-1", "processor-1", "output-1"]:
    flow.update_node_value(node_id, "status", "complete")
```

### Reactive Updates

React to user changes:

```python
def on_mode_change(change):
    """Adjust settings when mode changes."""
    values = change["new"]
    
    for node_id, node_values in values.items():
        mode = node_values.get("mode")
        
        if mode == "advanced":
            # Enable advanced settings
            flow.update_node_value(node_id, "show_debug", True)
            flow.update_node_value(node_id, "log_level", "debug")
        elif mode == "simple":
            # Disable advanced settings
            flow.update_node_value(node_id, "show_debug", False)
            flow.update_node_value(node_id, "log_level", "info")

flow.observe(on_mode_change, names=["node_values"])
```

## Jupyter Integration

### Display Current Values

```python
# In a Jupyter cell
flow = NodeFlowWidget()

# Show node values
import json
print(json.dumps(flow.node_values, indent=2))
```

### Interactive Updates

```python
from ipywidgets import FloatSlider, VBox

# Create Python widget
slider = FloatSlider(min=0, max=1, step=0.1, value=0.5)

# Link to node value
def on_slider_change(change):
    flow.update_node_value("processor-1", "threshold", change["new"])

slider.observe(on_slider_change, names=["value"])

# Display both
VBox([slider, flow])
```

### Computed Values

```python
# Cell 1: Create widget
flow = NodeFlowWidget()

# Cell 2: Compute based on values
def compute_stats():
    values = flow.get_node_values("analyzer-1")
    sample_size = values.get("sample_size", 100)
    confidence = values.get("confidence", 0.95)
    
    # Calculate margin of error
    margin = 1.96 * (0.5 / (sample_size ** 0.5))
    
    return {
        "sample_size": sample_size,
        "confidence": confidence,
        "margin_of_error": margin
    }

stats = compute_stats()
print(stats)
```

## Best Practices

- **Descriptive keys**: Use clear field names
- **Provide defaults**: Always use defaults when reading values
- **Batch updates**: Use `set_node_values()` for multiple changes
- **Type safety**: Ensure values match Pydantic model types
- **Validate**: Check values before processing

## Troubleshooting

**Values not syncing**: Ensure widget is displayed in Jupyter before updates.

**Nested update not syncing**: Use `update_node_value()` or explicit `update()` call.

**Node ID not found**: Print `list(flow.node_values.keys())` to verify node exists.

**Type errors**: Ensure value types match Pydantic model definitions.

**Observer not triggering**: Check observer is registered with correct trait name (`"node_values"`).

## Next Steps

- **[Creating Custom Nodes](custom-nodes.md)**: Build nodes with custom value management
- **[NodeFlowWidget API](../api/python/widget.md)**: Full widget API reference
- **[Import/Export](import-export.md)**: Save and load workflows with values
