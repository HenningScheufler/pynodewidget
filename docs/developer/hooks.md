# Hooks API

React hooks for common PyNodeWidget operations: auto-layout, context menus, exports, and responsive design.

## useAutoLayout

Automatically arrange nodes using Dagre layout algorithm.

```typescript
import { useAutoLayout } from 'pynodewidget';

const { onLayout } = useAutoLayout(nodes, edges, setNodes);

// Vertical layout
<button onClick={() => onLayout("TB")}>Layout Vertical</button>

// Horizontal layout
<button onClick={() => onLayout("LR")}>Layout Horizontal</button>
```

**Parameters:**
- `nodes` - Array of ReactFlow nodes
- `edges` - Array of ReactFlow edges
- `setNodes` - Function to update nodes

**Returns:**
- `onLayout(direction: "TB" | "LR")` - Trigger layout

---

## useContextMenu

Right-click context menu for nodes and edges.

```typescript
import { useContextMenu } from 'pynodewidget';

const {
  contextMenu,
  onNodeContextMenu,
  onEdgeContextMenu,
  onPaneClick,
  onDelete,
  closeContextMenu
} = useContextMenu(setNodes, setEdges);

<ReactFlow
  onNodeContextMenu={onNodeContextMenu}
  onEdgeContextMenu={onEdgeContextMenu}
  onPaneClick={onPaneClick}
/>

{contextMenu && (
  <ContextMenu
    x={contextMenu.x}
    y={contextMenu.y}
    onDelete={onDelete}
    onClose={closeContextMenu}
  />
)}
```

**State:**
- `contextMenu: { id: string, type: "node" | "edge", x: number, y: number } | null`

---

## useExport

Export workflow to JSON file.

```typescript
import { useExport } from 'pynodewidget';

const { exportToJSON } = useExport(nodes, edges);

<button onClick={exportToJSON}>Export JSON</button>
```

Downloads `nodeflow-data.json` with current graph state.

---

## useMobile

Detect mobile device for responsive UI.

```typescript
import { useMobile } from 'pynodewidget';

const isMobile = useMobile();

{isMobile ? <MobileNav /> : <DesktopNav />}
```

Uses media query: `(max-width: 768px)`

---

## Complete Example

```typescript
import { 
  useAutoLayout, 
  useContextMenu, 
  useExport, 
  useMobile 
} from 'pynodeflow';

function NodeEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  const { onLayout } = useAutoLayout(nodes, edges, setNodes);
  const { exportToJSON } = useExport(nodes, edges);
  const contextMenu = useContextMenu(setNodes, setEdges);
  const isMobile = useMobile();
  
  return (
    <>
      <div className="toolbar">
        <button onClick={() => onLayout("TB")}>Auto Layout</button>
        <button onClick={exportToJSON}>Export</button>
      </div>
      
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeContextMenu={contextMenu.onNodeContextMenu}
        onPaneClick={contextMenu.onPaneClick}
        fitView={!isMobile}
      />
    </>
  );
}
```

---

## See Also

- [State Management](state.md) - Zustand stores
- [Component Library](components.md) - React components
- [Architecture](architecture.md) - System design
