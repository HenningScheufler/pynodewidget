# Import and Export

Save and load workflows with JSON serialization, or export as standalone HTML for visualization.

## Overview

PyNodeWidget workflows can be **exported** in multiple formats:

### JSON Export
For **persistence, sharing, and version control**:
- Nodes (configuration, position, type)
- Edges (connections between nodes)
- Node values (current field values)
- Viewport (zoom and pan state)
- Node templates (registered node types)

### HTML Export
For **visualization and documentation** (no Python/Jupyter required):
- Standalone HTML files that work in any web browser
- Interactive or static (view-only) modes
- Self-contained with embedded JavaScript and CSS
- Perfect for sharing DAG visualizations, documentation, and reports

## Basic Export/Import

### Export to File

Save current workflow:

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget()

# Build workflow...
# ...

# Export to JSON file
flow.export_json("my_workflow.json")
# ✓ Flow exported to my_workflow.json
```

### Import from File

Load saved workflow:

```python
flow = NodeFlowWidget()

# Load workflow
flow.load_json("my_workflow.json")
# ✓ Flow loaded from my_workflow.json
```

### Custom Filenames

```python
# Export with custom name
flow.export_json("data_pipeline_v2.json")

# Load from custom location
flow.load_json("/path/to/saved_workflow.json")
```

## JSON Structure

### Complete Export

Exported JSON contains:

```json
{
  "nodes": [
    {
      "id": "node-1",
      "type": "data_loader",
      "position": {"x": 100, "y": 100},
      "data": {
        "label": "Data Loader",
        "values": {
          "file_path": "data.csv",
          "format": "csv"
        }
      }
    }
  ],
  "edges": [
    {
      "id": "edge-1",
      "source": "node-1",
      "target": "node-2",
      "sourceHandle": "data",
      "targetHandle": "input"
    }
  ],
  "viewport": {
    "x": 0,
    "y": 0,
    "zoom": 1
  },
  "node_templates": [
    {
      "type": "data_loader",
      "label": "Data Loader",
      "defaultData": {...}
    }
  ]
}
```

### Node Structure

Each node contains:

```json
{
  "id": "unique-node-id",
  "type": "node-type-name",
  "position": {"x": 100, "y": 200},
  "data": {
    "label": "Node Label",
    "parameters": {...},  // JSON Schema
    "inputs": [...],
    "outputs": [...],
    "values": {...}  // Current field values
  }
}
```

### Edge Structure

Each edge contains:

```json
{
  "id": "unique-edge-id",
  "source": "source-node-id",
  "target": "target-node-id",
  "sourceHandle": "output-handle-id",
  "targetHandle": "input-handle-id"
}
```

## Programmatic Access

### Get Flow Data

Access flow data as dictionary:

```python
# Get complete flow data
data = flow.get_flow_data()

# Access components
nodes = data["nodes"]
edges = data["edges"]
viewport = data["viewport"]
```

### Export to Dictionary

```python
# Get as dict instead of file
flow_dict = {
    "nodes": flow.nodes,
    "edges": flow.edges,
    "viewport": flow.viewport,
    "node_templates": flow.node_templates
}

# Use for custom serialization
import json
json_string = json.dumps(flow_dict, indent=2)
```

### Import from Dictionary

```python
import json

# Load JSON string
json_string = '{"nodes": [...], "edges": [...]}'
data = json.loads(json_string)

# Apply to widget
flow.nodes = data["nodes"]
flow.edges = data["edges"]
flow.viewport = data.get("viewport", {"x": 0, "y": 0, "zoom": 1})
```

## Node Values

### Include Values in Export

Node values are automatically included:

```python
# Set node values
flow.set_node_values("processor-1", {
    "threshold": 0.8,
    "mode": "advanced",
    "workers": 8
})

# Export (includes values)
flow.export_json("workflow_with_values.json")
```

### Access Node Values from JSON

```python
# Load workflow
flow.load_json("workflow_with_values.json")

# Access values
values = flow.get_node_values("processor-1")
print(values)  # {"threshold": 0.8, "mode": "advanced", "workers": 8}
```

### Clear Values Before Export

```python
# Clear all node values
flow.node_values = {}

# Export without values
flow.export_json("workflow_template.json")
```

## Workflow Templates

### Create Template

Export workflow as reusable template:

```python
from pynodewidget import NodeFlowWidget

# Create template workflow
template = NodeFlowWidget(nodes=[DataLoader, Processor, OutputNode])

# Add template nodes (no connections)
template.nodes = [
    {
        "id": "loader",
        "type": "data_loader",
        "position": {"x": 50, "y": 100},
        "data": {...}
    },
    {
        "id": "processor",
        "type": "processor",
        "position": {"x": 300, "y": 100},
        "data": {...}
    },
    {
        "id": "output",
        "type": "output",
        "position": {"x": 550, "y": 100},
        "data": {...}
    }
]

# Export as template
template.export_json("data_pipeline_template.json")
```

### Use Template

```python
# Load template
flow = NodeFlowWidget()
flow.load_json("data_pipeline_template.json")

# Customize and use
flow.set_node_values("loader", {"file_path": "my_data.csv"})
```

## Sharing Workflows

### Export for Sharing

```python
# Export with descriptive name
flow.export_json("ml_training_pipeline.json")

# Share the JSON file
# Users can load it with:
# flow.load_json("ml_training_pipeline.json")
```

### Version Control

```python
# Export with version in filename
version = "v1.2"
flow.export_json(f"workflow_{version}.json")

# Commit to git
# git add workflow_v1.2.json
# git commit -m "Update workflow to v1.2"
```

### Documentation

Include README with workflow:

```python
# Export workflow
flow.export_json("workflow.json")

# Create README
readme = """
# Data Processing Workflow

## Description
This workflow processes CSV data and generates visualizations.

## Nodes
- Data Loader: Load CSV from file
- Processor: Clean and transform data
- Visualizer: Generate charts

## Usage
1. Load workflow: `flow.load_json("workflow.json")`
2. Set input file: `flow.set_node_values("loader", {"file_path": "data.csv"})`
3. Run pipeline

## Requirements
- pandas
- matplotlib
"""

with open("workflow_README.md", "w") as f:
    f.write(readme)
```

## Real-World Examples

### Save Progress

Auto-save during long workflow:

```python
import time

flow = NodeFlowWidget()

# Build complex workflow
for i in range(10):
    # Add nodes, configure...
    
    # Auto-save every step
    flow.export_json(f"workflow_backup_{i}.json")
    
    time.sleep(1)

# Final save
flow.export_json("workflow_final.json")
```

### Workflow Variants

Create multiple configurations:

```python
# Base workflow
flow = NodeFlowWidget()
# ... configure ...
flow.export_json("base_workflow.json")

# High-performance variant
flow.set_node_values("processor", {"workers": 16, "batch_size": 1000})
flow.export_json("workflow_high_perf.json")

# Low-memory variant
flow.set_node_values("processor", {"workers": 2, "batch_size": 100})
flow.export_json("workflow_low_mem.json")
```

### Migration

Update saved workflows:

```python
import json

# Load old workflow
with open("old_workflow.json", "r") as f:
    data = json.load(f)

# Update node types
for node in data["nodes"]:
    if node["type"] == "old_processor":
        node["type"] = "new_processor"
        # Migrate values
        if "data" in node and "values" in node["data"]:
            values = node["data"]["values"]
            # Update field names
            if "threads" in values:
                values["workers"] = values.pop("threads")

# Save migrated workflow
with open("migrated_workflow.json", "w") as f:
    json.dump(data, f, indent=2)

print("✓ Workflow migrated")
```

### Batch Processing

Process multiple workflows:

```python
import os

workflows = [
    "workflow1.json",
    "workflow2.json",
    "workflow3.json"
]

results = []

for workflow_file in workflows:
    flow = NodeFlowWidget()
    flow.load_json(workflow_file)
    
    # Process
    result = process_workflow(flow)
    results.append(result)
    
    # Export results
    flow.export_json(f"processed_{workflow_file}")

print(f"✓ Processed {len(workflows)} workflows")
```

## Advanced Usage

### Selective Export

Export only specific components:

```python
import json

# Export only nodes
with open("nodes_only.json", "w") as f:
    json.dump({"nodes": flow.nodes}, f, indent=2)

# Export only connections
with open("edges_only.json", "w") as f:
    json.dump({"edges": flow.edges}, f, indent=2)

# Export configuration only
with open("config_only.json", "w") as f:
    json.dump({"node_templates": flow.node_templates}, f, indent=2)
```

### Merge Workflows

Combine multiple workflows:

```python
import json

# Load workflow A
with open("workflow_a.json", "r") as f:
    workflow_a = json.load(f)

# Load workflow B
with open("workflow_b.json", "r") as f:
    workflow_b = json.load(f)

# Merge nodes and edges
merged = {
    "nodes": workflow_a["nodes"] + workflow_b["nodes"],
    "edges": workflow_a["edges"] + workflow_b["edges"],
    "viewport": {"x": 0, "y": 0, "zoom": 1},
    "node_templates": workflow_a.get("node_templates", [])
}

# Avoid ID conflicts
# (Production code should rename IDs)

# Save merged
with open("workflow_merged.json", "w") as f:
    json.dump(merged, f, indent=2)
```

### Extract Subgraph

Export portion of workflow:

```python
import json

# Load full workflow
flow = NodeFlowWidget()
flow.load_json("full_workflow.json")

# Select nodes to extract
selected_ids = ["node-1", "node-2", "node-3"]

# Extract nodes
selected_nodes = [n for n in flow.nodes if n["id"] in selected_ids]

# Extract relevant edges
selected_edges = [
    e for e in flow.edges
    if e["source"] in selected_ids and e["target"] in selected_ids
]

# Create subgraph
subgraph = {
    "nodes": selected_nodes,
    "edges": selected_edges,
    "viewport": {"x": 0, "y": 0, "zoom": 1}
}

# Save
with open("subgraph.json", "w") as f:
    json.dump(subgraph, f, indent=2)
```

## HTML Export (Static Visualization)

Export workflows as **standalone HTML files** for visualization without Python or Jupyter. Perfect for:

- **Documentation**: Include interactive DAG visualizations in reports
- **Sharing**: Send workflow visualizations to non-technical stakeholders
- **Publishing**: Embed on websites or wikis
- **Presentations**: Show workflow architecture in presentations

### Basic HTML Export

```python
from pynodewidget import NodeFlowWidget

flow = NodeFlowWidget()

# Build workflow...
# ...

# Export as interactive HTML
flow.export_html("workflow.html")
# ✓ HTML exported to workflow.html

# Open in any web browser - no Python required!
```

### Interactive vs Static

**Interactive Mode** (default): Users can pan, zoom, and interact with the visualization.

```python
# Interactive: users can pan, zoom, select nodes
flow.export_html(
    "workflow_interactive.html",
    interactive=True  # Default
)
```

**Static Mode**: View-only visualization, no interaction.

```python
# Static: view-only, no interaction
flow.export_html(
    "workflow_static.html",
    interactive=False
)
```

### Customization Options

#### Custom Title

```python
flow.export_html(
    "data_pipeline.html",
    title="Data Processing Pipeline v2.0"
)
```

#### Custom Height

```python
# Fixed height
flow.export_html(
    "workflow.html",
    height="800px"
)

# Full viewport height
flow.export_html(
    "workflow.html",
    height="100vh"
)
```

#### Asset Embedding

**Embedded Assets** (default): All JavaScript and CSS inline in single file.

```python
# Single self-contained HTML file
flow.export_html(
    "workflow.html",
    embed_assets=True  # Default
)
```

**Separate Assets**: JavaScript and CSS in separate files.

```python
# Creates: workflow.html, standalone.iife.js, standalone.css
flow.export_html(
    "workflow.html",
    embed_assets=False
)
```

### Complete Example

```python
from pynodewidget import NodeFlowWidget

# Create workflow
flow = NodeFlowWidget()

# Add node types
flow.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "input": {"type": "string", "default": "data.csv"}
        }
    },
    type_name="data_source",
    label="Data Source",
    icon="📂"
)

flow.add_node_type_from_schema(
    json_schema={
        "type": "object",
        "properties": {
            "operation": {
                "type": "string",
                "enum": ["filter", "transform", "aggregate"]
            }
        }
    },
    type_name="processor",
    label="Processor",
    icon="⚙️"
)

# Add nodes
flow.nodes = {
    "source-1": {
        "type": "data_source",
        "position": {"x": 100, "y": 100},
        "data": {}
    },
    "processor-1": {
        "type": "processor",
        "position": {"x": 400, "y": 100},
        "data": {}
    }
}

# Add edge
flow.edges = [{
    "id": "e1",
    "source": "source-1",
    "target": "processor-1"
}]

# Export multiple formats
flow.export_html(
    "pipeline_interactive.html",
    title="Interactive Pipeline",
    interactive=True
)

flow.export_html(
    "pipeline_static.html",
    title="Static Pipeline View",
    interactive=False
)

flow.export_html(
    "pipeline_fullscreen.html",
    title="Fullscreen Pipeline",
    height="100vh"
)
```

### Use Cases

#### Documentation

```python
# Export workflow for technical documentation
flow.export_html(
    "architecture/data_pipeline.html",
    title="Data Pipeline Architecture",
    height="800px",
    interactive=True
)
```

#### Presentations

```python
# Full-screen view for presentations
flow.export_html(
    "presentation/workflow_demo.html",
    title="Workflow Demo",
    height="100vh",
    interactive=True  # Allow zoom during presentation
)
```

#### Reports

```python
# Static view for PDF conversion
flow.export_html(
    "report/workflow_snapshot.html",
    title="Workflow Snapshot - 2024-12-16",
    interactive=False  # Static for consistent screenshots
)
```

### Generic Export Method

The `export()` method auto-detects format from file extension:

```python
# Auto-detects HTML format
flow.export("workflow.html")  # → calls export_html()

# Auto-detects JSON format
flow.export("workflow.json")  # → calls export_json()

# Explicit format
flow.export("workflow.xyz", format="html")
```

### Browser Compatibility

HTML exports work in all modern browsers:

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Requirements**: JavaScript must be enabled (standard for all modern browsers).

### File Size

| Mode | Typical Size |
|------|-------------|
| Interactive (embedded) | ~900KB - 1.5MB |
| Interactive (separate) | ~10KB HTML + ~900KB JS |
| Static (embedded) | ~900KB - 1.5MB |

Size includes React, ReactFlow, and all dependencies bundled as single file.
```

## Best Practices

- **Version filenames**: Include version or date in filename
- **Validate before export**: Check workflow is valid
- **Include metadata**: Add creation date, author, version info
- **Error handling**: Use try/except for safe export/import
- **Backup before load**: Export current state before loading new workflow

## Troubleshooting

**File not found**: Check file path and current directory.

**Invalid JSON**: Validate JSON syntax before loading.

**Missing node templates**: Register all node types before loading workflow.

**Large files**: Check file size and confirm before loading very large workflows.

## Next Steps

- **[Working with Values](values.md)**: Manage node values in workflows
- **[Creating Custom Nodes](custom-nodes.md)**: Build exportable node types
- **[NodeFlowWidget API](../api/python/widget.md)**: Full widget API
