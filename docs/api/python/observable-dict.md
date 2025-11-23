# ObservableDict

Auto-syncing dictionary that triggers callbacks on mutations.

::: pynodewidget.observable_dict.ObservableDict

::: pynodewidget.observable_dict.ObservableDictTrait

## Overview

`ObservableDict` is a specialized dictionary subclass that automatically notifies a callback function whenever it's mutated. This enables automatic synchronization with Traitlets without manual reassignment.

## The Problem It Solves

Standard Python dictionaries don't trigger Traitlet observers when nested values change:

```python
# ❌ This doesn't trigger sync to JavaScript
flow.node_values["node-1"]["threshold"] = 0.8

# ✅ This works but is cumbersome
values = flow.node_values["node-1"]
values["threshold"] = 0.8
flow.node_values = flow.node_values  # Manual trigger
```

`ObservableDict` makes nested mutations work automatically:

```python
# ✅ This triggers sync automatically
flow.node_values["node-1"]["threshold"] = 0.8
```

## Basic Usage

### Creating an ObservableDict

```python
from pynodewidget import ObservableDict

def on_change():
    print("Dictionary was modified!")

# Create with callback
data = ObservableDict(callback=on_change)

# Mutations trigger callback
data["key"] = "value"  # Prints: "Dictionary was modified!"
data.update({"a": 1, "b": 2})  # Prints: "Dictionary was modified!"
del data["key"]  # Prints: "Dictionary was modified!"
```

### From Existing Dict

```python
existing = {"a": 1, "b": 2, "c": {"nested": 3}}
observable = ObservableDict(existing, callback=on_change)

# Nested dicts are automatically wrapped
observable["c"]["nested"] = 4  # Triggers callback!
```

### Without Callback

```python
# Can be used as a regular dict
data = ObservableDict({"x": 1, "y": 2})
data["z"] = 3  # No callback triggered
```

## Supported Operations

All standard dictionary operations trigger the callback:

```python
data = ObservableDict(callback=on_change)

# Assignment
data["key"] = "value"  # ✓ Triggers

# Update
data.update({"a": 1, "b": 2})  # ✓ Triggers

# Deletion
del data["key"]  # ✓ Triggers

# Pop
value = data.pop("a")  # ✓ Triggers

# Pop item
key, value = data.popitem()  # ✓ Triggers

# Clear
data.clear()  # ✓ Triggers

# Set default
data.setdefault("new_key", "default")  # ✓ Triggers (if key doesn't exist)

# Read operations don't trigger
value = data["key"]  # ✗ No trigger
keys = data.keys()  # ✗ No trigger
```

## Nested Dictionaries

ObservableDict automatically wraps nested dictionaries:

```python
data = ObservableDict(callback=on_change)

# Assigning a regular dict converts it to ObservableDict
data["config"] = {"threshold": 0.5, "enabled": True}

# Now nested mutations trigger the callback
data["config"]["threshold"] = 0.8  # ✓ Triggers!

# Works recursively
data["deep"] = {"level1": {"level2": {"value": 42}}}
data["deep"]["level1"]["level2"]["value"] = 100  # ✓ Triggers!
```

## Usage in NodeFlowWidget

### The node_values Trait

`NodeFlowWidget.node_values` uses `ObservableDictTrait` to automatically wrap values:

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget()

# node_values is automatically an ObservableDict
flow.node_values["node-1"] = {"threshold": 0.5}

# Nested mutations automatically sync to JavaScript
flow.node_values["node-1"]["threshold"] = 0.8  # ✓ Syncs!
```

### How It Works Internally

```python
class NodeFlowWidget(anywidget.AnyWidget):
    node_values = ObservableDictTrait().tag(sync=True)
```

When you assign to `node_values`, `ObservableDictTrait`:

1. Wraps the value in `ObservableDict`
2. Sets callback to notify Traitlets
3. Ensures nested dicts are also wrapped

## ObservableDictTrait

Custom Traitlet for maintaining ObservableDict across serialization.

### Purpose

Ensures values are always wrapped in `ObservableDict` with correct callbacks, even after deserialization from JavaScript.

### Usage

```python
import traitlets as t
from pynodewidget import ObservableDictTrait

class MyWidget(anywidget.AnyWidget):
    data = ObservableDictTrait().tag(sync=True)
```

### Validation

The trait automatically:

1. Wraps plain dicts in `ObservableDict`
2. Re-wires callbacks after deserialization
3. Recursively wraps nested dicts

```python
# All of these work correctly
widget.data = {"a": 1}  # Plain dict → wrapped
widget.data = ObservableDict({"a": 1})  # Already wrapped → callback re-wired
widget.data = {"nested": {"value": 1}}  # Nested dicts → wrapped recursively
```

## Advanced Usage

### Custom Callbacks

```python
class MyWidget:
    def __init__(self):
        self.changes = []
        self.data = ObservableDict(callback=self._on_change)
    
    def _on_change(self):
        self.changes.append(dict(self.data))
        print(f"Total changes: {len(self.changes)}")

widget = MyWidget()
widget.data["a"] = 1  # Prints: "Total changes: 1"
widget.data["b"] = 2  # Prints: "Total changes: 2"
```

### Rewiring Callbacks

After serialization/deserialization, you may need to rewire callbacks:

```python
data = ObservableDict({"a": 1}, callback=lambda: print("Old callback"))

# Create new callback
def new_callback():
    print("New callback")

# Rewire recursively
data._rewrap_with_callback(new_callback)

data["a"] = 2  # Prints: "New callback"
```

This is handled automatically by `ObservableDictTrait`.

## Performance Considerations

### Overhead

Each mutation triggers the callback, which may:

- Notify Traitlets
- Serialize to JSON
- Send message to JavaScript

For bulk updates, consider batching:

```python
# ❌ Multiple syncs
for key, value in large_dict.items():
    flow.node_values["node-1"][key] = value  # Syncs each time!

# ✅ Single sync
flow.node_values["node-1"].update(large_dict)  # Syncs once
```

### Memory

ObservableDict stores a reference to the callback function. For large numbers of ObservableDicts, this adds minimal overhead.

Nested dicts are wrapped recursively, which adds wrapping objects but shares the same callback reference.

## Serialization

### Pickling

ObservableDict serializes as a regular dict:

```python
import pickle

data = ObservableDict({"a": 1}, callback=lambda: None)
serialized = pickle.dumps(data)
restored = pickle.loads(serialized)

# Restored as regular dict
assert type(restored) == dict
assert restored == {"a": 1}
```

This is intentional - callbacks don't survive serialization.

### JSON

ObservableDict works with JSON serialization:

```python
import json

data = ObservableDict({"a": 1, "b": {"c": 2}})
json_str = json.dumps(data)  # Works as regular dict
```

## Implementation Details

### Callback Storage

The callback is stored in `__dict__` to avoid triggering `__setitem__`:

```python
def __init__(self, *args, callback=None, **kwargs):
    super().__init__(*args, **kwargs)
    # Store in __dict__ to bypass __setitem__
    object.__setattr__(self, '_callback', callback)
```

### Notification Method

```python
def _notify(self):
    """Trigger the callback if set."""
    callback = object.__getattribute__(self, '_callback')
    if callback:
        callback()
```

Uses `object.__getattribute__` to bypass any custom `__getattribute__`.

### Wrapping on Assignment

```python
def __setitem__(self, key, value):
    """Set an item and trigger callback. Wraps nested dicts."""
    if isinstance(value, dict) and not isinstance(value, ObservableDict):
        callback = object.__getattribute__(self, '_callback')
        value = ObservableDict(value, callback=callback)
    super().__setitem__(key, value)
    self._notify()
```

Automatically wraps plain dicts and shares the callback.

## Examples

### Simple Callback

```python
def log_changes():
    print("Data changed!")

data = ObservableDict(callback=log_changes)

data["a"] = 1  # Prints: "Data changed!"
data.update({"b": 2, "c": 3})  # Prints: "Data changed!"
```

### Tracking Changes

```python
class ChangeTracker:
    def __init__(self):
        self.change_count = 0
        self.data = ObservableDict(callback=self.on_change)
    
    def on_change(self):
        self.change_count += 1

tracker = ChangeTracker()
tracker.data["a"] = 1
tracker.data["b"] = 2
print(tracker.change_count)  # 2
```

### Nested Data

```python
def on_change():
    print("Changed!")

data = ObservableDict(callback=on_change)

# Nested structures work automatically
data["user"] = {"name": "Alice", "settings": {"theme": "dark"}}

data["user"]["name"] = "Bob"  # Prints: "Changed!"
data["user"]["settings"]["theme"] = "light"  # Prints: "Changed!"
```

### With NodeFlowWidget

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget()

# Initialize node values
flow.node_values["node-1"] = {"threshold": 0.5, "enabled": True}

# Update nested value (syncs to JavaScript automatically)
flow.node_values["node-1"]["threshold"] = 0.8

# Batch update (one sync)
flow.node_values["node-1"].update({
    "threshold": 0.9,
    "enabled": False,
    "mode": "advanced"
})

# Read value (no sync)
threshold = flow.node_values["node-1"]["threshold"]
```

## Troubleshooting

### Callback Not Firing

Ensure callback is set:

```python
data = ObservableDict()  # No callback
data["key"] = "value"  # Nothing happens

data = ObservableDict(callback=lambda: print("Changed"))
data["key"] = "value"  # Prints: "Changed"
```

### Nested Dicts Not Observed

If you assign a dict directly to a nested location:

```python
data = {}  # Regular dict, not observable
data["nested"] = {"value": 1}

observable = ObservableDict(data, callback=on_change)
observable["nested"]["value"] = 2  # ✓ Triggers (wrapped during init)
```

### Performance Issues

If callbacks fire too frequently, consider batching:

```python
# Instead of
for i in range(1000):
    data[str(i)] = i  # 1000 callbacks!

# Use
updates = {str(i): i for i in range(1000)}
data.update(updates)  # 1 callback
```

## See Also

- **[NodeFlowWidget](widget.md)**: Uses ObservableDict for node_values
- **[Working with Values](../../guides/values.md)**: Guide on value management
- **[Python-JavaScript Architecture](../../contributing/architecture.md)**: How sync works
