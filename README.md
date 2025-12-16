# PyNodeWidget

A Python wrapper for ReactFlow using AnyWidget - build interactive node graphs without JavaScript.

## Quick Start

```python
from pynodewidget import NodeFlowWidget
from pynodewidget.grid_layouts import create_three_column_grid
from pynodewidget.models import ButtonHandle, NumberField, LabeledHandle, TextField

widget = NodeFlowWidget()

grid_layout = create_three_column_grid(
    left_components=[
        LabeledHandle(id="input", handle_type="input")
    ],
    center_components=[
        NumberField(id="value", value=50, min=0, max=100),
        TextField(id="name", value="Processor")
    ],
    right_components=[
        LabeledHandle(id="output", handle_type="output")
    ]
)

widget.add_node_type(
    type_name="processor",
    label="Processor",
    icon="⚙️",
    grid_layout=grid_layout
)
widget
```

## Demo

![Demo](imgs/widget_example.gif)

## Features

- **Interactive Node Graphs**: Build visual workflows with drag-and-drop nodes
- **No JavaScript Required**: Pure Python API for defining node types and layouts
- **JSON Schema Integration**: Automatically generate node UIs from JSON schemas
- **Static HTML Export**: Export workflows as standalone HTML files for documentation and sharing
  - Interactive or view-only modes
  - Self-contained files that work without Python/Jupyter
  - Perfect for visualizing DAGs and data pipelines
- **Jupyter & Marimo Support**: Works seamlessly in Jupyter notebooks and Marimo apps
- **Flexible Layouts**: Customizable grid-based node layouts with various components
- **Type-Safe**: Built with Pydantic for robust type validation

## Export Workflows

```python
# Export as standalone HTML (no Python required to view)
widget.export_html("workflow.html", interactive=True)

# Export as JSON for persistence
widget.export_json("workflow.json")
```


## Development

Requires:
- Python 3.12+ (uv)
- [Bun](https://bun.sh) for JavaScript bundling

```bash
# Install dependencies
uv venv
uv pip install -e .[all]

task
```

### Documentation

```bash
# Serve documentation locally with live reload
task docs-serve

# Build static documentation
task docs-build
```

See full [documentation](https://henningscheufler.github.io/pynodewidget/) at the project's GitHub Pages or run locally.


