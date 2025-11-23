# PyNodeWidget

A Python wrapper for ReactFlow using AnyWidget - build interactive node graphs without JavaScript.

## Quick Start

```python
from pynodewidget import NodeFlowWidget

# Create a simple flow
widget = NodeFlowWidget()
widget.nodes = [
    {"id": "1", "position": {"x": 0, "y": 0}, "data": {"label": "Node 1"}},
    {"id": "2", "position": {"x": 0, "y": 100}, "data": {"label": "Node 2"}},
]
widget.edges = [
    {"id": "e1-2", "source": "1", "target": "2"},
]

# Display in Jupyter
widget
```

## Development

Requires:
- Python 3.12+
- [Bun](https://bun.sh) for JavaScript bundling

```bash
# Install dependencies
uv sync
uv pip install -e ".[dev,docs]"

# Build JavaScript assets
cd js && bun install && bun run build

# Build Python package (automatically builds JS)
uv build
```

### Documentation

```bash
# Serve documentation locally with live reload
task docs-serve

# Build static documentation
task docs-build

# Deploy to GitHub Pages
task docs-deploy
```

See full documentation at the project's GitHub Pages or run locally.

## Project Structure

- `src/pynodewidget/` - Python package
- `js/` - ReactFlow TypeScript/React code
- `js/dist/` - Built JavaScript bundle
- `src/pynodewidget/static/` - Bundled assets included in package
