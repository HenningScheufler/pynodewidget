# Field Registry API

Register custom React components for field types in node forms. Extend PyNodeWidget with color pickers, date selectors, code editors, and more.

## Quick Start

```typescript
import { fieldRegistry } from 'pynodewidget';

// Register a color picker
fieldRegistry.register("color", ({ value, onChange }) => (
  <input
    type="color"
    value={String(value || "#000000")}
    onChange={(e) => onChange(e.target.value)}
    onMouseDown={(e) => e.stopPropagation()}  // Prevent node dragging
  />
));
```

```python
from pydantic import BaseModel, Field

```

---

## How It Works

---

## How It Works

```mermaid
graph LR
    A[Python Model] -->|type: "color"| B[FieldFactory]
    B -->|Lookup| C[fieldRegistry]
    C -->|Return| D[ColorPicker Component]
    D -->|onChange| E[Update Node State]
```

1. Python defines a field with `json_schema_extra={"type": "color"}`
2. FieldFactory looks up `"color"` in the registry
3. Your registered component renders
4. Changes sync back to Python via AnyWidget

---

## API Reference

### Core Methods

```typescript
import { fieldRegistry } from 'pynodewidget';

// Register a renderer
fieldRegistry.register(type: string, renderer: FieldRenderer): void

// Check if registered
fieldRegistry.has(type: string): boolean

// Get all registered types
fieldRegistry.getRegisteredTypes(): string[]

// Unregister
fieldRegistry.unregister(type: string): boolean
```

### FieldRenderer Type

```typescript
type FieldRenderer = (props: FieldRendererProps) => JSX.Element;

interface FieldRendererProps {
  value: string | number | boolean | null;
  property: JsonSchemaProperty;
  onChange: (value: any) => void;
  label?: string;
}
```

### Built-in Types

- `string` - Text input
- `number` - Numeric input (decimals)
- `integer` - Integer input
- `boolean` - Checkbox
- `progress` - Progress bar

---

## Common Examples

### Date Picker

```typescript
fieldRegistry.register("date", ({ value, onChange }) => (
  <input
    type="date"
    value={String(value || "")}
    onChange={(e) => onChange(e.target.value)}
    onMouseDown={(e) => e.stopPropagation()}
  />
));
```

### Textarea

```typescript
fieldRegistry.register("text", ({ value, property, onChange }) => (
  <textarea
    value={String(value || "")}
    onChange={(e) => onChange(e.target.value)}
    placeholder={property.description}
    rows={4}
    style={{ width: "100%", resize: "vertical" }}
    onMouseDown={(e) => e.stopPropagation()}
  />
));
```

### Slider

```typescript
fieldRegistry.register("slider", ({ value, onChange }) => {
  const num = Number(value) || 0;
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <input
        type="range"
        value={num}
        min={0}
        max={100}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ flex: 1 }}
        onMouseDown={(e) => e.stopPropagation()}
      />
      <span style={{ minWidth: "32px" }}>{num}</span>
    </div>
  );
});
```

### Select with Custom Options

```typescript
fieldRegistry.register("priority", ({ value, onChange }) => (
  <select
    value={String(value || "medium")}
    onChange={(e) => onChange(e.target.value)}
    onMouseDown={(e) => e.stopPropagation()}
    style={{ width: "100%" }}
  >
    <option value="low">🟢 Low</option>
    <option value="medium">🟡 Medium</option>
    <option value="high">🔴 High</option>
  </select>
));
```

---

## Python Integration

### Override Field Type

Use `json_schema_extra` to set custom types:

```python
from pydantic import BaseModel, Field

class NodeParams(BaseModel):
    color: str = Field(
        default="#ffffff",
        json_schema_extra={"type": "color"}  # ✅ Custom type
    )
    start: str = Field(
        default="2024-01-01",
        json_schema_extra={"type": "date"}
    )
    notes: str = Field(
        default="",
        json_schema_extra={"type": "text"}  # Textarea
    )
    level: int = Field(
        default=50,
        json_schema_extra={"type": "slider"}
    )
```

---

## Important: Event Propagation

!!! danger "Always Stop Propagation"
    Custom inputs must stop mouse events to prevent node dragging:

```typescript
// ✅ Correct
<input
  onChange={...}
  onMouseDown={(e) => e.stopPropagation()}
  onPointerDown={(e) => e.stopPropagation()}
/>

// ❌ Wrong - node will drag instead of input working
<input onChange={...} />
```

---

## Best Practices

1. **Register early** - Before widget renders
2. **Handle nulls** - Use `String(value || "default")`
3. **Stop events** - Always `onMouseDown={(e) => e.stopPropagation()}`
4. **Use property** - Leverage `property.description` for placeholders
5. **Type safety** - Use TypeScript `FieldRenderer` type

---

## Complete Example

See [`examples/custom_fields_example.py`](../../examples/custom_fields_example.py):

```python
from pydantic import BaseModel, Field

```

**JavaScript:**
```typescript
import { fieldRegistry } from 'pynodewidget';

fieldRegistry.register("color", ({ value, onChange }) => (
  <input type="color" value={String(value)} onChange={(e) => onChange(e.target.value)} />
));

fieldRegistry.register("slider", ({ value, onChange }) => (
  <input type="range" value={Number(value)} onChange={(e) => onChange(Number(e.target.value))} />
));
```

---

## See Also

- [Architecture](architecture.md) - Python ↔ JavaScript communication
- [JavaScript Development](javascript.md) - Development setup
- [Layout System](layouts.md) - Custom node layouts
- [Handle System](handles.md) - Custom handle components

