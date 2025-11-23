# Import and Export

Save and load workflows with JSON serialization.

## Overview

PyNodeWidget workflows can be **exported to JSON** for:

- **Persistence**: Save workflows between sessions
- **Sharing**: Share workflows with others
- **Version control**: Track workflow changes in git
- **Templates**: Create reusable workflow templates
- **Backup**: Archive workflow configurations

The exported JSON includes:
- Nodes (configuration, position, type)
- Edges (connections between nodes)
- Node values (current field values)
- Viewport (zoom and pan state)
- Node templates (registered node types)

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

## Best Practices

### 1. Version Filenames

Include version or date:

```python
from datetime import datetime

# Date-based
date_str = datetime.now().strftime("%Y%m%d")
flow.export_json(f"workflow_{date_str}.json")

# Version-based
version = "1.2.3"
flow.export_json(f"workflow_v{version}.json")
```

### 2. Validate Before Export

```python
def validate_workflow(flow):
    """Check workflow is valid before export."""
    if not flow.nodes:
        return False, "No nodes in workflow"
    
    if not flow.node_templates:
        return False, "No node templates registered"
    
    # Check all node types exist
    valid_types = {t["type"] for t in flow.node_templates}
    for node in flow.nodes:
        if node.get("type") not in valid_types:
            return False, f"Unknown node type: {node.get('type')}"
    
    return True, "Valid"

# Validate before export
is_valid, message = validate_workflow(flow)
if is_valid:
    flow.export_json("workflow.json")
else:
    print(f"Cannot export: {message}")
```

### 3. Include Metadata

Add metadata to exports:

```python
import json
from datetime import datetime

# Standard export
flow.export_json("workflow.json")

# Load and add metadata
with open("workflow.json", "r") as f:
    data = json.load(f)

data["metadata"] = {
    "created": datetime.now().isoformat(),
    "author": "user@example.com",
    "version": "1.0",
    "description": "Data processing pipeline"
}

# Save with metadata
with open("workflow.json", "w") as f:
    json.dump(data, f, indent=2)
```

### 4. Error Handling

Handle errors gracefully:

```python
def safe_export(flow, filename):
    """Export with error handling."""
    try:
        flow.export_json(filename)
        return True
    except Exception as e:
        print(f"Export failed: {e}")
        return False

def safe_load(flow, filename):
    """Load with error handling."""
    try:
        flow.load_json(filename)
        return True
    except FileNotFoundError:
        print(f"File not found: {filename}")
        return False
    except json.JSONDecodeError:
        print(f"Invalid JSON in {filename}")
        return False
    except Exception as e:
        print(f"Load failed: {e}")
        return False

# Usage
if safe_export(flow, "workflow.json"):
    print("Export successful")

if safe_load(flow, "workflow.json"):
    print("Load successful")
```

### 5. Backup Before Load

```python
# Backup current workflow before loading new one
flow.export_json("backup_before_load.json")

# Now safe to load
flow.load_json("new_workflow.json")
```

## Troubleshooting

### File Not Found

Check file path:

```python
import os

filename = "workflow.json"

if not os.path.exists(filename):
    print(f"File not found: {filename}")
    print(f"Current directory: {os.getcwd()}")
    print(f"Files available: {os.listdir('.')}")
```

### Invalid JSON

Validate JSON before loading:

```python
import json

try:
    with open("workflow.json", "r") as f:
        data = json.load(f)
    print("✓ Valid JSON")
except json.JSONDecodeError as e:
    print(f"Invalid JSON: {e}")
```

### Missing Node Templates

Ensure node types are registered:

```python
# Load workflow
flow.load_json("workflow.json")

# Check for unknown types
used_types = {node["type"] for node in flow.nodes}
registered_types = {t["type"] for t in flow.node_templates}

unknown = used_types - registered_types
if unknown:
    print(f"Warning: Unknown node types: {unknown}")
    print("Register these node types before using the workflow")
```

### Large Files

Handle large workflows:

```python
import json

# Check file size before loading
import os
size_mb = os.path.getsize("workflow.json") / (1024 * 1024)

if size_mb > 10:
    print(f"Warning: Large file ({size_mb:.1f} MB)")
    response = input("Continue loading? (y/n): ")
    if response.lower() != 'y':
        exit()

# Load
flow.load_json("workflow.json")
```

## Next Steps

- **[Working with Values](values.md)**: Manage node values in workflows
- **[Creating Custom Nodes](custom-nodes.md)**: Build exportable node types
- **[NodeFlowWidget API](../api/python/widget.md)**: Full widget API
