# Component Library

Core React components for building node-based UIs.

## NodeFactory

Registry for node type components.

```typescript
import { nodeFactory } from 'pynodewidget';

// Register a node type
nodeFactory.register("custom", CustomNodeComponent);

// Check if registered
if (nodeFactory.has("custom")) {
  const Component = nodeFactory.get("custom");
}

// Get all node types for ReactFlow
const nodeTypes = nodeFactory.getAll();

<ReactFlow nodeTypes={nodeTypes} />
```

**Methods:**
- `register(type, component, options?)` - Register node component
- `registerCustom(type, component)` - Register custom (non-parameters) node
- `registerParameters(type, component)` - Register parameters-based node
- `get(type)` - Get component for type
- `has(type)` - Check if type exists
- `getAll()` - Get all as `Record<string, Component>`

---

## NodePanel

Sidebar with draggable node types.

```typescript
import { NodePanel } from 'pynodewidget';

<NodePanel
  nodeTypes={[
    { type: "input", label: "Input", icon: "📥" },
    { type: "process", label: "Process", icon: "⚙️" },
    { type: "output", label: "Output", icon: "📤" }
  ]}
  onNodeDragStart={handleDragStart}
/>
```

---

## FlowCanvas

Main ReactFlow canvas wrapper with common features.

```typescript
import { FlowCanvas } from 'pynodewidget';

<FlowCanvas
  nodes={nodes}
  edges={edges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  onConnect={onConnect}
  nodeTypes={nodeTypes}
/>
```

Includes: minimap, controls, background, connection line.

---

## FlowToolbar

Action buttons for common operations.

```typescript
import { FlowToolbar } from 'pynodewidget';

<FlowToolbar
  onAutoLayout={() => onLayout("TB")}
  onExport={exportToJSON}
  onClear={() => {
    setNodes([]);
    setEdges([]);
  }}
/>
```

---

## NodeForm

Renders field inputs from JSON schema.

```typescript
import { NodeForm } from 'pynodewidget';

<NodeForm
  schema={node.data.parameters}
  values={values}
  onChange={(field, value) => updateValue(node.id, field, value)}
/>
```

Uses `FieldFactory` internally to render appropriate field types.

---

## BaseHandle, ButtonHandle, LabeledHandle

Handle components from the [Handle System](handles.md).

```typescript
import { BaseHandle, ButtonHandle, LabeledHandle } from 'pynodewidget';

<BaseHandle type="target" position="left" id="in" />
<ButtonHandle type="source" position="right" id="out" />
<LabeledHandle type="target" position="left" id="data" label="Data" />
```

---

## ContextMenu

Right-click menu component.

```typescript
import { ContextMenu } from 'pynodewidget';

<ContextMenu
  x={contextMenu.x}
  y={contextMenu.y}
  onDelete={handleDelete}
  onDuplicate={handleDuplicate}
  onClose={handleClose}
/>
```

---

## See Also

- [Hooks API](hooks.md) - React hooks
- [State Management](state.md) - Zustand stores
- [TypeScript Types](types.md) - Type definitions
