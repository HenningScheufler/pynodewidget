# JavaScript Development

Quick setup guide for JavaScript/TypeScript development.

## Prerequisites

- **Bun** (JavaScript runtime and package manager)
- **Python 3.12+** (for integration testing)

Install Bun:
```bash
curl -fsSL https://bun.sh/install | bash
```

## Project Structure

```
js/
├── src/
│   ├── components/        # React components
│   │   ├── fields/        # Field types (TextField, NumberField, etc.)
│   │   ├── handles/       # Handle types (BaseHandle, ButtonHandle, etc.)
│   │   └── layouts/       # Grid layouts
│   ├── hooks/            # Custom React hooks
│   ├── services/         # Business logic services
│   ├── contexts/         # React contexts
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   └── index.tsx         # Main entry point
├── dev/                  # Development app
│   ├── app.html          # Dev server HTML
│   ├── DevApp.tsx        # Standalone dev app
│   └── mockModel.ts      # Mock AnyWidget model
├── tests/                # Test files (mirrors src/ structure)
└── package.json          # Dependencies and scripts
```

## JavaScript Commands

All commands run from the `js/` directory:

```bash
cd js
```

### Development

```bash
# Install dependencies (first time)
bun install

# Start dev server with hot reload
bun run dev

# Opens http://localhost:5173/dev/app.html
```

### Testing

```bash
# Run all tests once
bun run test

# Watch mode (re-run on file changes)
bun run test:watch

# Interactive UI
bun run test:ui

# With coverage report
bun run test:coverage
```

### Building

```bash
# Build for production
bun run build

# Creates two bundles:
# - dist/index.js       (main widget)
# - dist/json_schema.js (JSON schema node widget)
```

## Python Commands

Run from project root:

```bash
# Install with dev dependencies
pip install -e ".[dev]"
```

### Testing

```bash
# Python tests only
task test-py

# JavaScript tests only
task test-js

# Both Python and JavaScript
task test

# Python coverage
task test-py-cov

# JavaScript coverage  
task test-js-cov

# Install Playwright (for integration tests)
task playwright-install
```

### Documentation

```bash
# Serve docs locally with hot reload
task docs-serve

# Build static docs
task docs-build
```

## Development Workflow

### 1. Start Dev Server

```bash
cd js
bun run dev
```

This opens a standalone app with:
- Mock AnyWidget model
- Sample node types
- Hot module reloading

### 2. Make Changes

Edit files in `src/`. The browser auto-refreshes.

### 3. Add Tests

Create test file next to component:

```
src/components/fields/ColorField.tsx
tests/components/fields/ColorField.test.tsx
```

### 4. Run Tests

```bash
bun run test:watch
```

### 5. Build

```bash
bun run build
```

### 6. Test in Python

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget()
# Test your changes
```

## Common Tasks

### Adding a New Component

1. Create component file in `src/components/`
2. Define Valibot schema
3. Implement React component
4. Register in `ComponentFactory.tsx`
5. Add tests
6. Export from `src/index.tsx` (if public API)

See [Extension Guide](extending.md) for detailed recipes.

### Debugging

**Dev Tools:**
- React DevTools browser extension
- Console logs in components
- Inspect model state: `model.get("property")`

**Common Issues:**

| Problem | Solution |
|---------|----------|
| Changes not reflected | Check hot reload, refresh browser |
| Type errors | Run `bun run build` to see TypeScript errors |
| Tests failing | Check test file naming (`*.test.tsx`) |
| Import errors | Verify export in `index.tsx` |

### Code Style

- **TypeScript** for type safety
- **Valibot** for runtime validation
- **Tailwind CSS** for styling
- **Vitest** for testing

## Build System

### Vite Configuration

Three entry points:

1. **`vite.config.index.ts`** - Main widget bundle
2. **`vite.config.json_schema.ts`** - JSON schema widget
3. **`vite.config.ts`** - Dev server

### Output

```
dist/
├── index.js           # Main widget (ESM)
├── json_schema.js     # JSON schema widget (ESM)
└── style.css          # Styles (inlined)
```

These are embedded in the Python package via `hatch_build.py`.

## Testing Architecture

```mermaid
graph TB
    A[Vitest] --> B[Component Tests]
    A --> C[Service Tests]
    A --> D[Utils Tests]
    
    B --> E[@testing-library/react]
    B --> F[user-event]
    
    C --> G[Mock Data]
    
    style A fill:#e3f2fd
    style B fill:#f3e5f5
    style C fill:#fff3e0
    style D fill:#e8f5e9
```

### Test Example

```typescript
import { render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("renders with label", () => {
    render(<TextField id="test" label="Name" nodeId="node-1" />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });
});
```

## Next Steps

- **[Architecture](architecture.md)** - Understand the rendering system
- **[Extension Guide](extending.md)** - Add custom components
- **[Hooks Reference](hooks.md)** - Available React hooks
