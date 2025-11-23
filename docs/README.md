# PyNodeWidget Documentation

This directory contains the source for PyNodeWidget's documentation, built with [MkDocs](https://www.mkdocs.org/) and the [Material theme](https://squidfunk.github.io/mkdocs-material/).

## Building the Documentation

### Prerequisites

Install documentation dependencies:

```bash
# Using uv (recommended)
uv pip install -e ".[dev,docs]"

# Or using pip
pip install -e ".[docs]"
```

### Local Development

Using taskipy (recommended):

```bash
# Serve with live reload
task docs-serve

# Build static site
task docs-build

# Clean build directory
task docs-clean

# Deploy to GitHub Pages
task docs-deploy
```

Or using mkdocs directly:

```bash
mkdocs serve    # Visit http://127.0.0.1:8000
mkdocs build    # Output in site/
```

## Documentation Structure

```
docs/
├── index.md                    # Homepage
├── getting-started/            # Getting started guides
│   ├── installation.md         # Installation instructions
│   ├── quickstart.md          # Quick start tutorial
│   └── concepts.md            # Core concepts
├── guides/                     # User guides
│   ├── custom-nodes.md        # Creating custom nodes
│   ├── custom-fields.md       # Custom field types
│   ├── layouts.md             # Layouts and styling
│   └── ...
├── api/                       # API reference
│   ├── python/                # Python API docs
│   │   ├── index.md          # Overview
│   │   ├── widget.md         # NodeFlowWidget
│   │   ├── json-schema-node.md  # JsonSchemaNodeWidget
│   │   └── ...
│   └── javascript/            # JavaScript API docs
│       ├── index.md          # Overview
│       ├── field-registry.md # Field Registry
│       └── ...
├── examples/                  # Example documentation
├── advanced/                  # Advanced topics
└── contributing/             # Contributing guides
```

## Current Status

### ✅ Completed
- MkDocs configuration and theme setup
- Getting Started section (installation, quickstart, concepts)
- Python API reference (widget, json-schema-node, overview)
- Build system integration

### 🚧 In Progress
- Python API remaining pages (node-builder, observable-dict, protocols)
- User guides (custom nodes, fields, layouts)
- JavaScript API reference
- Examples documentation
- Advanced topics

See [DOCS_PROGRESS.md](../DOCS_PROGRESS.md) for detailed tracking.

## Writing Documentation

### Markdown Extensions

The documentation supports:

- **Code blocks** with syntax highlighting
- **Admonitions** (note, warning, tip, danger)
- **Tabs** for grouping content
- **Mermaid diagrams** for visualizations
- **Code copy buttons**
- **Search with suggestions**

Example admonition:

```markdown
!!! tip "Pro Tip"
    Use `mkdocs serve` for live preview while editing.
```

### API Documentation

We use mkdocstrings to auto-generate API docs from Python docstrings:

```markdown
::: pynodewidget.widget.NodeFlowWidget
    options:
      show_source: true
      members:
        - __init__
        - register_node_type
```

### Code Examples

Keep code examples:
- **Runnable**: Users should be able to copy and run them
- **Complete**: Include necessary imports
- **Practical**: Show real-world usage patterns

## Contributing

When adding new documentation:

1. Follow the existing structure and style
2. Use descriptive headings and clear organization
3. Include practical code examples
4. Link to related pages
5. Test that it builds without errors: `mkdocs build --strict`

## Deployment

The documentation can be deployed to GitHub Pages:

```bash
mkdocs gh-deploy
```

This builds the docs and pushes them to the `gh-pages` branch.

## Questions?

- Check the [MkDocs documentation](https://www.mkdocs.org/)
- See [Material theme docs](https://squidfunk.github.io/mkdocs-material/)
- Review existing pages for examples
