# Field Registry System

The PyNodeWidget field registry system allows you to register custom field renderers for node properties. This enables you to create specialized input types beyond the built-in string, number, integer, and boolean fields.

## Built-in Field Types

The following field types are registered by default:

- **`string`** - Text input field
- **`number`** - Numeric input (allows decimals)
- **`integer`** - Integer-only numeric input
- **`boolean`** - Checkbox input
- **`enum`** - Automatically uses a select dropdown when `enum` is defined in the schema

## Registering Custom Field Types

You can register custom field renderers from your application code:

### TypeScript/React Example

```typescript
import { fieldRegistry } from 'pynodewidget';

// Register a color picker field
fieldRegistry.register("color", ({ value, onChange }) => (
  <input
    type="color"
    value={String(value || "#000000")}
    onChange={(e) => onChange(e.target.value)}
    style={{ width: "100%", height: "32px", cursor: "pointer" }}
  />
));

// Register a date picker field
fieldRegistry.register("date", ({ value, onChange }) => (
  <input
    type="date"
    value={String(value || "")}
    onChange={(e) => onChange(e.target.value)}
  />
));

// Register a textarea field
fieldRegistry.register("text", ({ value, property, onChange }) => (
  <textarea
    value={String(value || "")}
    onChange={(e) => onChange(e.target.value)}
    placeholder={property.description}
    rows={4}
    style={{ width: "100%", resize: "vertical" }}
  />
));

// Register a slider field
fieldRegistry.register("slider", ({ value, property, onChange }) => {
  const numValue = typeof value === "number" ? value : Number(value) || 0;
  return (
    <div>
      <input
        type="range"
        value={numValue}
        min={0}
        max={100}
        step={1}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%" }}
      />
      <span style={{ fontSize: "12px" }}>{numValue}</span>
    </div>
  );
});
```

### Using Custom Fields in Python

To use your custom field types, set the `type` in your JSON schema:

```python
from pynodewidget import NodeFlowWidget

widget = NodeFlowWidget()

# Node with custom color field
widget.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "background": {
                "type": "color",  # Uses your custom color renderer
                "title": "Background Color",
                "default": "#ff0000"
            },
            "border": {
                "type": "color",
                "title": "Border Color",
                "default": "#000000"
            }
        }
    },
    type_name="styled_node",
    label="Styled Node",
    icon="🎨"
)

# Node with custom date field
widget.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "start_date": {
                "type": "date",  # Uses your custom date renderer
                "title": "Start Date",
                "default": "2024-01-01"
            },
            "end_date": {
                "type": "date",
                "title": "End Date",
                "default": "2024-12-31"
            }
        }
    },
    type_name="date_range",
    label="Date Range",
    icon="📅"
)

# Node with custom textarea field
widget.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "notes": {
                "type": "text",  # Uses your custom textarea renderer
                "title": "Notes",
                "description": "Enter detailed notes here",
                "default": ""
            }
        }
    },
    type_name="note_node",
    label="Notes",
    icon="📝"
)
```

## Field Renderer API

Your custom field renderer receives the following props:

```typescript
interface FieldRendererProps {
  value: any;                    // Current field value
  property: JsonSchemaProperty;  // Schema definition for this field
  onChange: (value: any) => void; // Callback to update the value
}

interface JsonSchemaProperty {
  type: string;                  // Field type (e.g., "string", "color", "date")
  title?: string;                // Display label
  default?: any;                 // Default value
  description?: string;          // Placeholder or help text
  enum?: Array<string | number>; // For select fields (auto-handled)
}
```

### Important: Stop Event Propagation

When creating custom field components, remember to stop mouse/pointer events from propagating to prevent node dragging:

```typescript
fieldRegistry.register("custom", ({ value, onChange }) => (
  <input
    type="text"
    value={String(value || "")}
    onChange={(e) => onChange(e.target.value)}
    onMouseDown={(e) => e.stopPropagation()}
    onPointerDown={(e) => e.stopPropagation()}
  />
));
```

## Advanced Examples

### File Upload Field

```typescript
fieldRegistry.register("file", ({ value, onChange }) => (
  <input
    type="file"
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (file) {
        onChange(file.name);
      }
    }}
    onMouseDown={(e) => e.stopPropagation()}
    onPointerDown={(e) => e.stopPropagation()}
  />
));
```

### Multi-Select Field

```typescript
fieldRegistry.register("multiselect", ({ value, property, onChange }) => {
  const options = property.enum || [];
  const selected = Array.isArray(value) ? value : [];
  
  return (
    <select
      multiple
      value={selected}
      onChange={(e) => {
        const values = Array.from(e.target.selectedOptions, opt => opt.value);
        onChange(values);
      }}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      style={{ width: "100%", minHeight: "60px" }}
    >
      {options.map((opt) => (
        <option key={String(opt)} value={String(opt)}>
          {opt}
        </option>
      ))}
    </select>
  );
});
```

### Rich Text Editor (with external library)

```typescript
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

fieldRegistry.register("richtext", ({ value, onChange }) => (
  <div onMouseDown={(e) => e.stopPropagation()}>
    <ReactQuill
      value={String(value || "")}
      onChange={onChange}
      theme="snow"
    />
  </div>
));
```

## Managing Registrations

The field registry provides several utility methods:

```typescript
import { fieldRegistry } from 'pynodewidget';

// Check if a type is registered
if (fieldRegistry.has("color")) {
  console.log("Color field is registered");
}

// Get all registered types
const types = fieldRegistry.getRegisteredTypes();
console.log("Registered types:", types);
// Output: ["string", "number", "integer", "boolean", "color", "date", ...]

// Unregister a field type
fieldRegistry.unregister("color");

// Clear all registrations (be careful!)
fieldRegistry.clear();

// Re-register built-in types if needed
import { registerBuiltInRenderers } from 'pynodewidget';
registerBuiltInRenderers();
```

## Best Practices

1. **Register early**: Register custom field types before rendering the widget
2. **Type safety**: Use TypeScript for better type checking
3. **Stop propagation**: Always stop mouse/pointer events to prevent node dragging
4. **Handle null values**: Always provide fallback values for `value` props
5. **Use descriptions**: Leverage the `property.description` for placeholders
6. **Test thoroughly**: Test your custom fields with different data types

## Architecture

The field registry system uses a pluggable architecture:

```
┌─────────────────────────────────────┐
│  CustomNode.tsx                     │
│  ┌───────────────────────────────┐  │
│  │ FieldFactory                  │  │
│  │  ├─ Checks for enum          │  │
│  │  ├─ Looks up in registry     │  │
│  │  └─ Falls back to default    │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│  FieldRegistry                      │
│  ┌───────────────────────────────┐  │
│  │ Map<string, FieldRenderer>    │  │
│  │  ├─ "string" → StringField    │  │
│  │  ├─ "number" → NumberField    │  │
│  │  ├─ "color"  → ColorPicker    │  │
│  │  └─ "date"   → DatePicker     │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

This architecture makes it easy to extend PyNodeWidget with custom field types without modifying the core code.
