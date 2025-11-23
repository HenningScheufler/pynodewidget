# Handle System API

Customize the appearance and behavior of input/output connection points (handles) on nodes.

## Quick Start

```typescript
import { registerHandle } from 'pynodewidget';

// Register custom handle
registerHandle("icon", ({ id, type, position }) => (
  <Handle
    id={id}
    type={type}
    position={position}
    style={{ background: "#ff0", width: "16px", height: "16px" }}
  >
    🔌
  </Handle>
));
```

```python
# Use in Python
class IconNode(JsonSchemaNodeWidget):
    label = "Icon Node"
    inputs = [{"id": "in", "handle_type": "icon"}]
```

---

## Built-in Handle Types

### Base Handle (Default)
Simple circular connection point.

```python
handle_type = "base"  # or omit for default
```

### Button Handle
Interactive button that can trigger actions.

```python
handle_type = "button"
```

### Labeled Handle
Shows label text next to the handle.

```python
inputs = [{"id": "in", "label": "Input", "handle_type": "labeled"}]
```

---

## API Reference

```typescript
import { registerHandle, getHandle, getAvailableHandles } from 'pynodewidget';

// Register a handle component
registerHandle(type: string, component: React.ComponentType<any>): void

// Get a handle component
getHandle(type?: HandleType): React.ComponentType<any>

// List all handle types
getAvailableHandles(): string[]
```

---

## Custom Handle Example

```typescript
import { registerHandle } from 'pynodewidget';
import { Handle } from '@xyflow/react';

const PulseHandle: React.FC<any> = (props) => (
  <Handle
    {...props}
    style={{
      width: "12px",
      height: "12px",
      background: "#4CAF50",
      animation: "pulse 2s infinite",
    }}
  />
);

registerHandle("pulse", PulseHandle);
```

**CSS:**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}
```

---

## Python Integration

### Per-Handle Configuration

```python
from pynodewidget import JsonSchemaNodeWidget

class StyledNode(JsonSchemaNodeWidget):
    label = "Styled"
    inputs = [
        {"id": "data", "label": "Data", "handle_type": "labeled"},
        {"id": "trigger", "handle_type": "button"}
    ]
    outputs = [
        {"id": "out", "handle_type": "pulse"}
    ]
```

### Global Handle Type

```python
class AllLabeledNode(JsonSchemaNodeWidget):
    label = "All Labeled"
    handle_type = "labeled"  # ✅ Apply to all handles
    inputs = [{"id": "in1"}, {"id": "in2"}]
    outputs = [{"id": "out"}]
```

---

## See Also

- [Layout System](layouts.md) - Custom node layouts
- [Field Registry](field-registry.md) - Custom field types
- [Examples](../../examples/labeled-handles.md) - Labeled handles example
