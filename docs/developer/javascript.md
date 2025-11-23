# JavaScript Development

This guide covers developing and extending the JavaScript/TypeScript frontend of PyNodeWidget.

## When to Work on JavaScript

You'll need to work on the JavaScript side when:

- **Contributing to the core library**: Fixing bugs, adding features
- **Creating custom field types**: Building specialized input components
- **Developing plugins**: Extending the field/layout/handle registries
- **Performance optimization**: Improving rendering or state management

For typical usage, you only need Python! See the [User Guide](../guides/index.md) instead.

## Prerequisites

- **[Bun](https://bun.sh)**: JavaScript runtime and bundler
- **Node.js** knowledge (Bun is Node-compatible)
- **React** experience
- **TypeScript** familiarity

## Setup

### 1. Install Dependencies

```bash
cd js
bun install
```

### 2. Development Server

Start Vite dev server with hot reload:

```bash
bun run dev
```

This starts a standalone development app at `http://localhost:5173` where you can test components without Python.

### 3. Build for Production

```bash
bun run build
```

Outputs to `js/dist/`:
- `index.js` - Main widget bundle
- `index.css` - Styles
- `json_schema_node_entry.js` - Standalone node widget
- `json_schema_node_entry.css` - Node widget styles

## Project Structure

```
js/
├── src/
│   ├── index.tsx                    # AnyWidget entry point
│   ├── NodePanel.tsx                # Node sidebar
│   ├── json_schema_node_entry.ts    # Standalone node entry
│   ├── components/
│   │   ├── FlowCanvas.tsx           # Main canvas component
│   │   ├── FlowToolbar.tsx          # Toolbar
│   │   ├── NodeFactory.ts           # Node registry
│   │   ├── NodeForm.tsx             # Form generator
│   │   ├── NodeHandles.tsx          # Handle renderer
│   │   ├── fields/
│   │   │   ├── FieldFactory.tsx     # Field router
│   │   │   ├── FieldRegistry.ts     # Custom field registry
│   │   │   ├── StringField.tsx      # Built-in fields
│   │   │   ├── NumberField.tsx
│   │   │   ├── BooleanField.tsx
│   │   │   └── SelectField.tsx
│   │   ├── layouts/
│   │   │   ├── LayoutFactory.tsx    # Layout registry
│   │   │   ├── HorizontalLayout.tsx
│   │   │   ├── VerticalLayout.tsx
│   │   │   └── CompactLayout.tsx
│   │   ├── handles/
│   │   │   ├── HandleFactory.tsx    # Handle registry
│   │   │   ├── BaseHandle.tsx
│   │   │   ├── ButtonHandle.tsx
│   │   │   └── LabeledHandle.tsx
│   │   └── ui/                      # shadcn/ui components
│   ├── hooks/
│   │   ├── useAutoLayout.ts         # Dagre layout hook
│   │   ├── useExport.ts             # Export hook
│   │   └── useContextMenu.ts        # Context menu
│   ├── services/
│   │   ├── nodeDataService.ts       # Node data logic
│   │   └── nodeLayoutService.ts     # Layout algorithms
│   ├── stores/
│   │   └── valueStore.ts            # Zustand state
│   ├── types/
│   │   ├── fieldRenderer.ts         # Field type definitions
│   │   └── schema.ts                # JSON Schema types
│   └── utils/
│       ├── nodeBuilder.ts           # Data utilities
│       └── NodeComponentBuilder.tsx # Component generator
├── dev/
│   ├── DevApp.tsx                   # Development app
│   ├── mockModel.ts                 # Mock AnyWidget model
│   └── components/                  # Dev UI components
├── tests/
│   ├── NodeComponentBuilder.test.tsx # Component tests
│   ├── NodeFactory.test.tsx
│   └── utils.test.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Development Workflow

### Hot Reload Development

```bash
# Terminal 1: Start dev server
cd js
bun run dev

# Terminal 2: Watch Python changes
cd ..
# Make Python changes, they don't need rebuild
```

The dev app (`dev/DevApp.tsx`) provides:
- **Mock model**: Simulates AnyWidget communication
- **Component preview**: Test individual components
- **Node editor**: Interactive node editing
- **Hot reload**: Instant updates on file changes

### Building Changes

After JavaScript changes:

```bash
cd js
bun run build
cd ..

# Restart Python kernel to reload widget
```

### Testing

```bash
# Run tests
bun test

# Watch mode
bun test --watch

# Coverage
bun test --coverage
```

## Key Technologies

### React 18

Component framework for UI.

```typescript
import { useState, useEffect } from 'react';

export function MyComponent() {
  const [count, setCount] = useState(0);
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### ReactFlow 12

Node graph library (`@xyflow/react`).

```typescript
import { ReactFlow, Node, Edge } from '@xyflow/react';

export function FlowCanvas() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={handleNodesChange}
      onEdgesChange={handleEdgesChange}
    />
  );
}
```

### Zustand

State management library.

```typescript
import { create } from 'zustand';

interface ValueStore {
  values: Record<string, any>;
  updateValue: (nodeId: string, key: string, value: any) => void;
}

export const useValueStore = create<ValueStore>((set) => ({
  values: {},
  updateValue: (nodeId, key, value) =>
    set((state) => ({
      values: {
        ...state.values,
        [nodeId]: { ...state.values[nodeId], [key]: value }
      }
    }))
}));
```

### TypeScript

Type safety throughout.

```typescript
interface CustomNodeData {
  label: string;
  parameters: JsonSchema;
  values: Record<string, FieldValue>;
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
}


```

### Tailwind CSS

Utility-first CSS framework.

```tsx
<div className="flex flex-col gap-2 p-4 rounded-lg shadow-md bg-white">
  <h2 className="text-lg font-semibold">{label}</h2>
  <p className="text-sm text-gray-600">{description}</p>
</div>
```

### shadcn/ui

Pre-built accessible components.

```typescript
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function MyForm() {
  return (
    <div>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </div>
  );
}
```

## AnyWidget Integration

### Entry Point

`src/index.tsx` exports the render function:

```typescript
import { createRoot } from 'react-dom/client';
import { ReactFlowProvider } from '@xyflow/react';

export function render({ model, el }: { model: AnyWidgetModel; el: HTMLElement }) {
  const root = createRoot(el);
  
  root.render(
    <ReactFlowProvider>
      <ModelProvider model={model}>
        <FieldRegistryProvider>
          <NodeFlowComponent />
        </FieldRegistryProvider>
      </ModelProvider>
    </ReactFlowProvider>
  );
}
```

### Model Communication

Access Python state via the model:

```typescript
// Read from Python
const nodes = model.get("nodes");
const edges = model.get("edges");
const nodeValues = model.get("node_values");

// Listen for changes
model.on("change:nodes", () => {
  const newNodes = model.get("nodes");
  setNodes(newNodes);
});

// Write to Python
model.set("nodes", updatedNodes);
model.save_changes();
```

### Context Providers

Make the model available throughout the app:

```typescript
const ModelContext = createContext<AnyWidgetModel | null>(null);

export function ModelProvider({ model, children }: ModelProviderProps) {
  return (
    <ModelContext.Provider value={model}>
      {children}
    </ModelContext.Provider>
  );
}

export function useModel() {
  const model = useContext(ModelContext);
  if (!model) throw new Error("useModel must be used within ModelProvider");
  return model;
}
```

Usage in components:

```typescript
export function MyComponent() {
  const model = useModel();
  
  useEffect(() => {
    const handleChange = () => {
      const nodes = model.get("nodes");
      // Update UI
    };
    
    model.on("change:nodes", handleChange);
    return () => model.off("change:nodes", handleChange);
  }, [model]);
}
```

## Registry System

### Field Registry

Register custom field types:

```typescript
// In your extension code
import { fieldRegistry } from 'pynodewidget';

fieldRegistry.register("color", ({ value, onChange, schema, config }) => {
  return (
    <input
      type="color"
      value={String(value || "#000000")}
      onChange={(e) => onChange(e.target.value)}
      disabled={config?.disabled}
    />
  );
});
```

From Python:

```python
# Use your custom field type
widget.add_node_type_from_schema(
    json_schema={
        "properties": {
            "background": {"type": "color", "default": "#ffffff"}
        }
    },
    type_name="styled_node",
    label="Styled Node"
)
```

### Layout Registry

Register custom layouts:

```typescript
import { LayoutFactory } from './components/layouts/LayoutFactory';

const MyLayout: React.FC<LayoutProps> = ({ inputs, outputs, children }) => {
  return (
    <div className="custom-layout">
      <div className="inputs">{/* Render inputs */}</div>
      <div className="content">{children}</div>
      <div className="outputs">{/* Render outputs */}</div>
    </div>
  );
};

LayoutFactory.register("custom", MyLayout);
```

### Handle Registry

Register custom handle types:

```typescript
import { HandleFactory } from './components/handles/HandleFactory';

const CustomHandle: React.FC<HandleProps> = ({ type, position, id, label }) => {
  return (
    <Handle
      type={type}
      position={position}
      id={id}
      className="custom-handle"
    >
      {label && <span className="handle-label">{label}</span>}
    </Handle>
  );
};

HandleFactory.register("custom", CustomHandle);
```

## Component Development

### Creating a Field Component

```typescript
interface ColorFieldProps {
  value: any;
  onChange: (value: any) => void;
  schema: JsonSchema;
  config?: FieldConfig;
}

export function ColorField({ value, onChange, schema, config }: ColorFieldProps) {
  const [color, setColor] = useState(String(value || "#000000"));
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    onChange(newColor);
  };
  
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        {schema.title || "Color"}
      </label>
      <div className="flex gap-2">
        <input
          type="color"
          value={color}
          onChange={handleChange}
          disabled={config?.disabled}
          className="w-12 h-8 rounded"
        />
        <input
          type="text"
          value={color}
          onChange={handleChange}
          disabled={config?.disabled}
          className="flex-1 px-2 py-1 border rounded"
        />
      </div>
      {schema.description && (
        <p className="text-xs text-gray-500">{schema.description}</p>
      )}
    </div>
  );
}
```

### Creating a Layout Component

```typescript
interface LayoutProps {
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
  children?: React.ReactNode;
  handleType?: HandleType;
}

export function GridLayout({ inputs, outputs, children, handleType }: LayoutProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="col-span-2">{children}</div>
      
      <div className="flex flex-col gap-1">
        {inputs?.map((input) => (
          <BaseHandle
            key={input.id}
            id={input.id}
            type="target"
            position={Position.Left}
            label={input.label}
            handleType={handleType}
          />
        ))}
      </div>
      
      <div className="flex flex-col gap-1">
        {outputs?.map((output) => (
          <BaseHandle
            key={output.id}
            id={output.id}
            type="source"
            position={Position.Right}
            label={output.label}
            handleType={handleType}
          />
        ))}
      </div>
    </div>
  );
}
```

## Build Configuration

### Vite Config (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.tsx',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
```

### TypeScript Config (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Testing

### Component Tests

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StringField } from './StringField';

describe('StringField', () => {
  it('renders with value', () => {
    render(
      <StringField
        value="test"
        onChange={() => {}}
        schema={{ type: 'string', title: 'Name' }}
      />
    );
    
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });
  
  it('calls onChange when edited', () => {
    const onChange = vi.fn();
    render(
      <StringField
        value="test"
        onChange={onChange}
        schema={{ type: 'string' }}
      />
    );
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(onChange).toHaveBeenCalledWith('new value');
  });
});
```

### Hook Tests

```typescript
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useValueStore } from './valueStore';

describe('useValueStore', () => {
  it('updates values', () => {
    const { result } = renderHook(() => useValueStore());
    
    act(() => {
      result.current.updateValue('node-1', 'threshold', 0.8);
    });
    
    expect(result.current.values['node-1']).toEqual({ threshold: 0.8 });
  });
});
```

## Debugging

### Browser DevTools

```typescript
// Add debug logging
console.log('Nodes:', nodes);
console.log('Values:', values);

// Inspect model
console.log('Model state:', model.get('nodes'));

// React DevTools
// Install React DevTools extension to inspect component tree
```

### Source Maps

Source maps are enabled in development, so you can debug TypeScript directly in the browser.

### Hot Reload Issues

If hot reload stops working:

```bash
# Restart dev server
pkill -f vite
bun run dev
```

## Performance

### React.memo

Memoize expensive components:

```typescript

```

### useMemo and useCallback

```typescript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const handleClick = useCallback(() => {
  doSomething(id);
