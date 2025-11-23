# Layout System API

Control how fields and handles are arranged within nodes. PyNodeWidget provides built-in layouts and allows custom implementations.

## Quick Start

```typescript
import { registerLayout } from 'pynodewidget';

// Register custom layout
registerLayout("grid", ({ children, inputs, outputs }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
    {children}
  </div>
));
```

```python
# Use in Python
class GridNode(JsonSchemaNodeWidget):
    label = "Grid Node"
    layout = "grid"  # ✅ Custom layout
```

---

## Built-in Layouts

### Horizontal (Default)
Fields in a vertical column, handles on left/right sides.

```python
layout = "horizontal"  # or omit for default
```

### Vertical
Fields in a vertical column, handles on top/bottom.

```python
layout = "vertical"
```

### Compact
Minimal spacing, suitable for small nodes.

```python
layout = "compact"
```

---

## API Reference

```typescript
import { registerLayout, getLayout, getAvailableLayouts } from 'pynodewidget';

// Register a layout
registerLayout(type: string, component: LayoutComponent): void

// Get a layout component
getLayout(type?: string): LayoutComponent

// List all layouts
getAvailableLayouts(): string[]
```

### LayoutComponent Interface

```typescript
interface LayoutProps {
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
  children?: React.ReactNode;      // Field components
  handleType?: HandleType;         // Global handle type
  inputHandleType?: HandleType;    // Input handle override
  outputHandleType?: HandleType;   // Output handle override
}

type LayoutComponent = React.ComponentType<LayoutProps>;
```

---

## Custom Layout Example

```typescript
import { registerLayout } from 'pynodewidget';
import type { LayoutProps } from 'pynodeflow';

const TwoColumnLayout: React.FC<LayoutProps> = ({ 
  children, 
  inputs, 
  outputs 
}) => (
  <div style={{ display: "flex", gap: "16px" }}>
    {/* Left column: inputs */}
    <div style={{ flex: 1 }}>
      {inputs?.map(input => (
        <Handle key={input.id} {...input} type="target" />
      ))}
    </div>
    
    {/* Center: fields */}
    <div style={{ flex: 2 }}>
      {children}
    </div>
    
    {/* Right column: outputs */}
    <div style={{ flex: 1 }}>
      {outputs?.map(output => (
        <Handle key={output.id} {...output} type="source" />
      ))}
    </div>
  </div>
);

registerLayout("two-column", TwoColumnLayout);
```

---

## Python Integration

```python
from pynodewidget import JsonSchemaNodeWidget

class CustomLayoutNode(JsonSchemaNodeWidget):
    label = "Custom"
    layout = "two-column"  # ✅ Use custom layout
    parameters = MyParams
```

---

## See Also

- [Handle System](handles.md) - Custom handle components
- [Field Registry](field-registry.md) - Custom field types
- [Architecture](architecture.md) - System overview
