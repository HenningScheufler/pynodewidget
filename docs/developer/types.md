# TypeScript Types

Core type definitions for PyNodeWidget's TypeScript API.

## Field Types

```typescript
// Field value types
type FieldValue = string | number | boolean | null;

// Field renderer interface
interface FieldRendererProps {
  value: FieldValue;
  property: JsonSchemaProperty;
  onChange: (value: FieldValue) => void;
  label?: string;
}

type FieldRenderer = (props: FieldRendererProps) => JSX.Element;
```

---

## Schema Types

```typescript
// JSON Schema property definition
interface JsonSchemaProperty {
  type: string;                      // "string", "number", "color", etc.
  title?: string;                    // Display label
  default?: any;                     // Default value
  description?: string;              // Help text
  enum?: Array<string | number>;     // Enum options
  minimum?: number;                  // Min value (numbers)
  maximum?: number;                  // Max value (numbers)
  multipleOf?: number;               // Step value
}

// Full JSON Schema
interface JsonSchema {
  type: "object";
  properties: Record<string, JsonSchemaProperty>;
  required?: string[];
}
```

---

## Node Types

```typescript
// Handle configuration
interface HandleConfig {
  id: string;
  label?: string;
  handle_type?: HandleType;
}

type HandleType = "base" | "button" | "labeled";

// Node data structure
interface NodeData {
  label: string;
  icon?: string;
  type_name: string;
  parameters?: JsonSchema;
  values?: Record<string, any>;
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
  layout?: string;
  handle_type?: HandleType;
}
```

---

## Layout Types

```typescript
interface LayoutProps {
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
  children?: React.ReactNode;
  handleType?: HandleType;
  inputHandleType?: HandleType;
  outputHandleType?: HandleType;
}

type LayoutComponent = React.ComponentType<LayoutProps>;
```

---

## Context Menu Types

```typescript
interface ContextMenuState {
  id: string;
  type: "node" | "edge";
  x: number;
  y: number;
}
```

---

## Store Types

```typescript
// Value store
interface NodeValues {
  [nodeId: string]: {
    [fieldName: string]: any;
  };
}

interface ValueStoreState {
  values: NodeValues;
  updateValue: (nodeId: string, fieldName: string, value: any) => void;
  updateNodeValues: (nodeId: string, values: Record<string, any>) => void;
  getNodeValues: (nodeId: string) => Record<string, any> | undefined;
  initializeFromNodes: (nodes: Node[]) => void;
  syncToNodes: (nodes: Node[]) => Node[];
  clear: () => void;
}
```

---

## ReactFlow Integration

PyNodeWidget extends ReactFlow's types:

```typescript
import type { Node, Edge, NodeProps } from '@xyflow/react';

// PyNodeWidget node extends ReactFlow Node
type PyNodeWidgetNode = Node<NodeData>;

// Custom node component
type NodeComponent = React.ComponentType<NodeProps<NodeData>>;
```

---

## Import Paths

```typescript
// From main package
import type { FieldRenderer, FieldRendererProps } from 'pynodeflow';
import type { LayoutComponent, LayoutProps } from 'pynodeflow';
import type { HandleType } from 'pynodeflow';

// From ReactFlow
import type { Node, Edge, NodeProps } from '@xyflow/react';
```

---

## See Also

- [Field Registry](field-registry.md) - Using FieldRenderer
- [Layout System](layouts.md) - Using LayoutComponent
- [State Management](state.md) - Store types
- [Component Library](components.md) - Component props
