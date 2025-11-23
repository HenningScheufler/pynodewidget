# Installation

PyNodeWidget requires Python 3.12 or higher and runs in Jupyter notebooks.

## Install from PyPI

```bash
pip install pynodewidget
```

Or using `uv`:

```bash
uv pip install pynodewidget
```

## Install with Documentation Dependencies

If you want to build the documentation locally:

```bash
pip install pynodewidget[docs]
```

## Development Installation

To contribute or develop PyNodeWidget, you'll need additional tools:

### Prerequisites

- **Python 3.12+**: Core runtime
- **[Bun](https://bun.sh)**: JavaScript bundler (required for building JS assets)
- **[uv](https://github.com/astral-sh/uv)** (optional): Fast Python package manager

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/HenningScheufler/pynodewidget.git
cd pynodewidget

# Install Python dependencies
uv sync

# Or with pip
pip install -e ".[dev,docs]"

# Build JavaScript assets
cd js
bun install
bun run build
cd ..
```

### Development Workflow

The JavaScript frontend needs to be rebuilt when you make changes:

```bash
# Development mode with hot reload
cd js
bun run dev

# Production build
bun run build
```

The built assets are automatically copied to `src/pynodewidget/static/` during the Python package build.

## Verify Installation

Test your installation in a Jupyter notebook:

```python
from pynodewidget import NodeFlowWidget

# Create a simple widget
widget = NodeFlowWidget()
widget
```

You should see an empty node canvas with a toolbar.

## Requirements

PyNodeWidget has the following core dependencies (automatically installed):

- **anywidget** >= 0.9.0: Jupyter widget framework
- **pydantic** >= 2.12.4: Data validation and schemas
- **traitlets** >= 5.14.0: Observable attributes

## Jupyter Environments

PyNodeWidget works in:

- **JupyterLab** 4.0+
- **Jupyter Notebook** 7.0+
- **VS Code Jupyter** extension
- **Google Colab** (with some limitations)
- **Marimo** notebooks

## Troubleshooting

### Widget not displaying

If the widget doesn't appear, try:

```python
# Enable widget extensions in JupyterLab
jupyter labextension enable anywidget
```

### JavaScript build errors

Ensure Bun is installed correctly:

```bash
bun --version
```

If you see bundling errors, try cleaning the build:

```bash
cd js
rm -rf node_modules dist
bun install
bun run build
```

### Import errors

Make sure you're using Python 3.12+:

```bash
python --version
```

## Next Steps

- **[Quick Start Guide](quickstart.md)**: Create your first node workflow
- **[Core Concepts](concepts.md)**: Understand the key components
- **[API Reference](../api/python/index.md)**: Explore the full API
