# JavaScript Development

## Installation

```bash
bun install
```

## Build Commands

- **Production build** (minified, no source maps):
  ```bash
  bun run build
  ```
  This is used automatically by the Python package build process.

- **Development build** (with source maps for debugging):
  ```bash
  bun run dev
  ```

- **Watch mode** (rebuilds on file changes with source maps):
  ```bash
  bun run watch
  ```

- **Development server** (auto-rebuild + live server):
  ```bash
  bun run serve
  ```
  Opens `http://localhost:3000` with the widget in a standalone HTML page.

## Debugging

### Using VS Code

1. Build with source maps: `bun run dev` or `bun run watch`
2. Start your Jupyter notebook/server (usually on `http://localhost:8888`)
3. Press `F5` or go to Run & Debug panel
4. Select "Debug JavaScript (Chrome)" or "Debug JavaScript (Edge)"
5. Set breakpoints in your `.tsx` files and debug!

### Using Browser DevTools

1. Build with source maps: `bun run dev`
2. Open your Jupyter notebook with the widget
3. Open browser DevTools (F12)
4. Navigate to the Sources tab
5. Find your TypeScript files under the source maps
6. Set breakpoints and debug

**Note:** The production `build` script (used by Python packaging) creates minified output without source maps to keep the package size small. This debugging setup doesn't affect the Python build process.
