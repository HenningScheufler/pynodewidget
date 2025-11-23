# Development Setup

This guide covers setting up a development environment for contributing to PyNodeWidget.

## Prerequisites

- **Python 3.12+**: Core runtime
- **[uv](https://github.com/astral-sh/uv)**: Fast Python package manager (recommended)
- **[Bun](https://bun.sh)**: JavaScript bundler for building frontend assets
- **Git**: Version control

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/HenningScheufler/pynodewidget.git
cd pynodewidget
```

### 2. Install Dependencies

Using `uv` (recommended):

```bash
# Install Python dependencies
uv sync

# Install development dependencies
uv pip install -e ".[dev,docs]"

# Install documentation dependencies separately if needed
uv pip install mkdocs mkdocs-material 'mkdocstrings[python]' pymdown-extensions
```

Using `pip`:

```bash
pip install -e ".[dev,docs]"
```

### 3. Build JavaScript Assets

```bash
cd js
bun install
bun run build
cd ..
```

## Development Workflow

### JavaScript Development

For frontend development with hot reload:

```bash
cd js
bun run dev
```

This starts Vite in development mode with hot module replacement.

### Building JavaScript

```bash
cd js
bun run build
```

Built assets are automatically copied to `src/pynodewidget/static/`.

### Python Development

The package is installed in editable mode, so changes to Python files are immediately available:

```python
from pynodewidget import NodeFlowWidget

# Your changes are live
flow = NodeFlowWidget()
```

### Testing Your Changes

In a Jupyter notebook:

```python
from pynodewidget import NodeFlowWidget, JsonSchemaNodeWidget

# Test your changes
flow = NodeFlowWidget()
flow
```

## Documentation

### Serving Documentation Locally

With taskipy (recommended):

```bash
# Start live documentation server
task docs-serve
```

Or directly:

```bash
mkdocs serve
```

Visit http://127.0.0.1:8000 to view the documentation. Changes to markdown files are reflected automatically.

### Building Documentation

With taskipy:

```bash
# Build static documentation
task docs-build

# Clean build directory
task docs-clean
```

Or directly:

```bash
mkdocs build
rm -rf site/  # clean
```

### Testing Documentation Build

Ensure documentation builds without errors:

```bash
mkdocs build --strict
```

The `--strict` flag treats warnings as errors.

### Deploying Documentation

With taskipy:

```bash
# Deploy to GitHub Pages
task docs-deploy
```

Or directly:

```bash
mkdocs gh-deploy --force
```

## Available Tasks

PyNodeWidget uses [taskipy](https://github.com/taskipy/taskipy) for common development tasks:

```bash
# Testing
task test            # Run all tests (Python + JavaScript)
task test-py         # Run Python tests with pytest
task test-js         # Run JavaScript tests with Vitest

# Documentation
task docs-serve      # Start documentation server with live reload
task docs-build      # Build static documentation site

# View all tasks
task --list
```

Tasks are defined in `pyproject.toml` under `[tool.taskipy.tasks]`:

```toml
[tool.taskipy.tasks]
docs-serve = "mkdocs serve"
docs-build = "mkdocs build"
test-py = "pytest"
test-js = "bun --cwd=js run test"
test = "task test-py && task test-js"
```

## Project Structure

```
pynodeflow/
├── src/pynodewidget/          # Python package
│   ├── __init__.py
│   ├── widget.py            # Main widget
│   ├── json_schema_node.py  # Node base class
│   ├── node_builder.py      # Configuration helpers
│   ├── observable_dict.py   # Auto-sync dictionary
│   ├── protocols.py         # Extension protocols
│   └── static/              # Built JavaScript assets
├── js/                      # JavaScript/TypeScript source
│   ├── src/                 # React components
│   ├── dev/                 # Development app
│   ├── tests/               # JavaScript tests
│   └── package.json
├── docs/                    # Documentation source
│   ├── index.md
│   ├── getting-started/
│   ├── guides/
│   ├── api/
│   └── examples/
├── tests/                   # Python tests
├── examples/                # Example notebooks and scripts
├── pyproject.toml          # Python package config
├── mkdocs.yml              # Documentation config
└── hatch_build.py          # Custom build hook
```

## Running Tests

PyNodeWidget has comprehensive test suites for both Python and JavaScript. Use taskipy for convenient task running.

### All Tests

Run both Python and JavaScript tests:

```bash
task test
```

This executes `test-py` followed by `test-js`.

### Python Tests

Run Python tests with pytest:

```bash
task test-py
```

or use pytest directly

### JavaScript Tests

Run JavaScript/TypeScript tests with Vitest:

```bash
# Using taskipy (recommended)
task test-js

# Or directly
cd js
bun run test
```

## Code Style

### Python

We follow PEP 8 with some modifications. Format code with:

```bash
# If using black
black src/ tests/

# If using ruff
ruff format src/ tests/
```

### JavaScript/TypeScript

Format with Prettier:

```bash
cd js
bun run format
```

Lint with ESLint:

```bash
cd js
bun run lint
```

## Building the Package

### Development Build

```bash
# Install in editable mode
uv pip install -e .
```

### Production Build

```bash
# Build JavaScript first
cd js && bun run build && cd ..

# Build Python package
uv build

# Or with hatchling
python -m build
```

The build process:

1. Runs `hatch_build.py` custom hook
2. Builds JavaScript assets if needed
3. Copies built assets to `src/pynodewidget/static/`
4. Creates wheel and sdist

## Tips

### Fast Iteration

For rapid development:

1. Keep `mkdocs serve` running for documentation
2. Use `bun run dev` for JavaScript hot reload
3. Use Jupyter's `%autoreload` for Python:

```python
%load_ext autoreload
%autoreload 2

from pynodewidget import NodeFlowWidget
```

### Debugging

Enable verbose logging:

```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

Inspect widget state:

```python
flow = NodeFlowWidget()
print(flow.nodes)
print(flow.edges)
print(flow.node_values)
```

### Clean Slate

Start fresh:

```bash
# Clean Python
rm -rf src/pynodewidget/__pycache__
rm -rf src/pynodewidget/static/*

# Clean JavaScript
cd js
rm -rf node_modules dist
bun install
bun run build
cd ..

# Reinstall
uv pip install -e ".[dev,docs]"
```

## Common Issues

### Widget Not Updating

If the widget doesn't reflect your changes:

1. Rebuild JavaScript: `cd js && bun run build`
2. Restart Jupyter kernel
3. Check `src/pynodewidget/static/` contains latest files

### Import Errors

Ensure package is installed in editable mode:

```bash
uv pip install -e .
```

### JavaScript Build Fails

Check Bun is installed and up to date:

```bash
bun --version
bun upgrade
```

### Documentation Not Building

Ensure all dependencies are installed:

```bash
uv pip install mkdocs mkdocs-material 'mkdocstrings[python]' pymdown-extensions
```

## Next Steps

- **[Running Tests](testing.md)**: Learn about the test suite
- **[Building Documentation](building.md)**: Documentation development
- **[Contributing Guide](../index.md)**: How to contribute
