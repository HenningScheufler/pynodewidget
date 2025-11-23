# Testing Documentation

## Setup

Install test dependencies:

```bash
cd js
bun install
```

The following packages are required:
- `vitest` - Fast test runner
- `@testing-library/react` - React component testing utilities
- `@testing-library/jest-dom` - Custom matchers for DOM assertions
- `@testing-library/user-event` - User interaction simulation
- `happy-dom` - Lightweight DOM implementation for tests
- `@vitejs/plugin-react` - React support for Vite/Vitest
- `@vitest/ui` - UI for viewing test results

## Running Tests

**Important:** Use `bun run test` instead of `bun test`. The `bun test` command invokes Bun's built-in test runner which doesn't support the vitest/happy-dom setup properly.

```bash
# Run tests once
bun run test

# Run tests in watch mode (re-runs on file changes)
bun run test:watch

# Run tests with UI
bun run test:ui

# Run tests with coverage
bun run test:coverage
```

## Test Structure

```
tests/
├── setup.ts                 # Test setup and global configuration
├── mocks/
│   └── anywidget.tsx       # Mocks for @anywidget/react
├── CustomNode.test.tsx     # CustomNode component tests
├── NodePanel.test.tsx      # NodePanel component tests
└── utils.test.ts           # Utility function tests
```

## Test Coverage

### CustomNode.test.tsx
Tests for the `CustomNode` component covering:
- **Node Rendering**: Label display, selected state, handles
- **Schema Form Inputs**: String, number, integer, boolean, enum inputs
- **Input Interactions**: Change handlers for all input types
- **Edge Cases**: Missing schema, default values, value precedence

### NodePanel.test.tsx
Tests for the `NodePanel` component covering:
- Template rendering
- Click handlers
- Empty state
- Multiple templates

## Writing New Tests

Example test:

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MyComponent } from '../src/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles clicks', () => {
    const onClick = vi.fn();
    render(<MyComponent onClick={onClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
```

## Mocking

### Mocking @anywidget/react

The `useModelState` hook is mocked in `tests/mocks/anywidget.tsx`:

```typescript
import { useModelState } from '@anywidget/react';

// In tests, use setMockModelData to set initial state
setMockModelData({
  nodes: [],
  edges: [],
});
```

### Mocking ReactFlow

ReactFlow's `useReactFlow` is mocked inline in test files when needed:

```typescript
vi.mock('@xyflow/react', async () => {
  const actual = await vi.importActual('@xyflow/react');
  return {
    ...actual,
    useReactFlow: () => ({
      setNodes: vi.fn(),
      getNodes: vi.fn(() => []),
    }),
  };
});
```

## Best Practices

1. **Use descriptive test names**: Test names should clearly describe what is being tested
2. **Arrange-Act-Assert pattern**: Structure tests with clear setup, action, and verification sections
3. **Test user behavior**: Focus on testing what users see and do, not implementation details
4. **Mock external dependencies**: Mock API calls, hooks, and external libraries
5. **Clean up after tests**: The setup file automatically cleans up after each test
6. **Use data-testid sparingly**: Prefer querying by role, label, or text

## Troubleshooting

### Tests fail with "Cannot find module"
Run `bun install` to ensure all dependencies are installed.

### DOM queries fail
Make sure you're using React Testing Library's queries (`screen.getByRole`, `screen.getByText`, etc.) and that elements are actually rendered.

### Async tests fail
Use `waitFor` for asynchronous operations:
```typescript
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});
```

### Mock not working
Ensure mocks are set up before importing the modules that use them, typically at the top of the test file.
