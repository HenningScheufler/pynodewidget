#%%
"""
Example demonstrating how to export PyNodeWidget workflows as standalone HTML files.

This example shows how to:
1. Create a workflow with multiple node types
2. Add nodes and connections to form a DAG
3. Export the workflow as a standalone HTML file that can be viewed in any browser

The exported HTML files are self-contained and don't require Python or Jupyter.
"""

from pynodewidget import NodeFlowWidget, GridBuilder
from pynodewidget.models import (
    TextField, NumberField, BoolField, SelectField,
    LabeledHandle, HeaderComponent, DividerComponent
)


def create_data_processing_workflow():
    """Create a data processing workflow to demonstrate HTML export."""
    
    # Initialize widget
    widget = NodeFlowWidget(height="700px")
    
    # Define a Data Source node type using GridBuilder
    grid_source = (
        GridBuilder()
        .rows("auto", "1fr")
        .cols("auto", "1fr", "auto")
        .cell(1, 1,
            components=[HeaderComponent(id="header", label="Data Source", icon="📂", bgColor="#3b82f6")],
            col_span=3,
            layout_type="flex",
            direction="row",
            justify="center"
        )
        .cell(2, 2, [
            SelectField(id="source_type", value="file", options=["file", "database", "api"]),
            TextField(id="path", value="/data/input.csv"),
            NumberField(id="refresh_interval", value=60, min=1, max=3600),
        ])
        .cell(2, 3, [
            LabeledHandle(id="output", handle_type="output", label="Out"),
        ],
        layout_type="flex",
        direction="column",
        align="center")
        .gap("8px")
        .build()
    )
    
    widget.add_node_type(
        type_name="data_source",
        label="Data Source",
        icon="📂",
        grid_layout=grid_source
    )
    
    # Define a Processor node type using GridBuilder
    grid_processor = (
        GridBuilder()
        .rows("auto", "1fr")
        .cols("auto", "1fr", "auto")
        .cell(1, 1,
            components=[HeaderComponent(id="header", label="Processor", icon="⚙️", bgColor="#8b5cf6")],
            col_span=3,
            layout_type="flex",
            direction="row",
            justify="center"
        )
        .cell(2, 1, [
            LabeledHandle(id="input", handle_type="input", label="In"),
        ],
        layout_type="flex",
        direction="column",
        align="center")
        .cell(2, 2, [
            SelectField(id="operation", value="filter", options=["filter", "transform", "aggregate"]),
            NumberField(id="threshold", value=0.5, min=0, max=1, step=0.1),
            BoolField(id="enabled", value=True),
        ])
        .cell(2, 3, [
            LabeledHandle(id="output", handle_type="output", label="Out"),
        ],
        layout_type="flex",
        direction="column",
        align="center")
        .build()
    )
    
    widget.add_node_type(
        type_name="processor",
        label="Processor",
        icon="⚙️",
        grid_layout=grid_processor
    )
    
    # Define an Analyzer node type using GridBuilder
    grid_analyzer = (
        GridBuilder()
        .rows("auto", "1fr")
        .cols("auto", "1fr", "auto")
        .cell(1, 1,
            components=[HeaderComponent(id="header", label="Analyzer", icon="📊", bgColor="#059669")],
            col_span=3,
            layout_type="flex",
            direction="row",
            justify="center"
        )
        .cell(2, 1, [
            LabeledHandle(id="input", handle_type="input", label="In"),
        ],
        layout_type="flex",
        direction="column",
        align="center")
        .cell(2, 2, [
            SelectField(id="analysis_type", value="statistics", options=["statistics", "trends", "anomalies"]),
            NumberField(id="confidence", value=0.95, min=0.5, max=1, step=0.05),
            BoolField(id="detailed", value=False),
        ])
        .cell(2, 3, [
            LabeledHandle(id="output", handle_type="output", label="Out"),
        ],
        layout_type="flex",
        direction="column",
        align="center")
        .build()
    )
    
    widget.add_node_type(
        type_name="analyzer",
        label="Analyzer",
        icon="📊",
        grid_layout=grid_analyzer
    )
    
    # Define an Output node type using GridBuilder
    grid_output = (
        GridBuilder()
        .rows("auto", "1fr")
        .cols("auto", "1fr")
        .cell(1, 1,
            components=[HeaderComponent(id="header", label="Output", icon="💾", bgColor="#dc2626")],
            col_span=2,
            layout_type="flex",
            direction="row",
            justify="center"
        )
        .cell(2, 1, [
            LabeledHandle(id="input", handle_type="input", label="In"),
        ],
        layout_type="flex",
        direction="column",
        align="center")
        .cell(2, 2, [
            SelectField(id="format", value="json", options=["json", "csv", "parquet"]),
            TextField(id="destination", value="/output/results.json"),
            BoolField(id="compress", value=False),
        ])
        .build()
    )
    
    widget.add_node_type(
        type_name="output",
        label="Output",
        icon="💾",
        grid_layout=grid_output
    )
    
    # Add nodes to create a workflow DAG
    widget.nodes = {
        "source-1": {
            "type": "data_source",
            "position": {"x": 100, "y": 100},
            "data": {}
        },
        "processor-1": {
            "type": "processor",
            "position": {"x": 400, "y": 50},
            "data": {}
        },
        "processor-2": {
            "type": "processor",
            "position": {"x": 400, "y": 200},
            "data": {}
        },
        "analyzer-1": {
            "type": "analyzer",
            "position": {"x": 700, "y": 100},
            "data": {}
        },
        "output-1": {
            "type": "output",
            "position": {"x": 1000, "y": 100},
            "data": {}
        }
    }
    
    # Add edges to connect the nodes
    widget.edges = [
        {
            "id": "e1",
            "source": "source-1",
            "target": "processor-1",
            "sourceHandle": "output",
            "targetHandle": "input"
        },
        {
            "id": "e2",
            "source": "source-1",
            "target": "processor-2",
            "sourceHandle": "output",
            "targetHandle": "input"
        },
        {
            "id": "e3",
            "source": "processor-1",
            "target": "analyzer-1",
            "sourceHandle": "output",
            "targetHandle": "input"
        },
        {
            "id": "e4",
            "source": "processor-2",
            "target": "analyzer-1",
            "sourceHandle": "output",
            "targetHandle": "input"
        },
        {
            "id": "e5",
            "source": "analyzer-1",
            "target": "output-1",
            "sourceHandle": "output",
            "targetHandle": "input"
        }
    ]
    
    # Set some initial values
    widget.values["source-1"] = {
        "source_type": "database",
        "path": "postgresql://localhost/mydb",
        "refresh_interval": 30
    }
    
    widget.values["processor-1"] = {
        "operation": "filter",
        "threshold": 0.7,
        "enabled": True
    }
    
    widget.values["processor-2"] = {
        "operation": "transform",
        "threshold": 0.8,
        "enabled": True
    }
    
    widget.values["analyzer-1"] = {
        "analysis_type": "trends",
        "confidence": 0.95,
        "detailed": True
    }
    
    widget.values["output-1"] = {
        "format": "parquet",
        "destination": "/output/results.parquet",
        "compress": True
    }
    
    return widget

#%%
"""Main function to demonstrate HTML export capabilities."""

print("=" * 70)
print("PyNodeWidget - Standalone HTML Export Demo")
print("=" * 70)
print()

# Create the workflow
print("Creating data processing workflow...")
widget = create_data_processing_workflow()
widget

#%%
print(f"✓ Created workflow with {len(widget.nodes)} nodes and {len(widget.edges)} edges")
print()

# Export as interactive HTML (default)
print("Exporting as interactive HTML...")
widget.export_html(
    "workflow_interactive.html",
    title="Data Processing Pipeline - Interactive",
    interactive=True,
    embed_assets=True
)
print()

# Export as static view-only HTML
print("Exporting as static view-only HTML...")
widget.export_html(
    "workflow_static.html",
    title="Data Processing Pipeline - View Only",
    interactive=False,
    embed_assets=True
)
print()

# Export with full-screen height
print("Exporting with full-screen height...")
widget.export_html(
    "workflow_fullscreen.html",
    title="Data Processing Pipeline - Full Screen",
    height="100vh",
    interactive=True,
    embed_assets=True
)
print()

# Export with separate asset files
print("Exporting with separate asset files...")
widget.export_html(
    "workflow_separate_assets.html",
    title="Data Processing Pipeline - Separate Assets",
    interactive=True,
    embed_assets=False  # Creates separate JS/CSS files
)
print()

# Also export as JSON for comparison
print("Exporting workflow as JSON...")
widget.export_json("workflow.json")
print()

print("=" * 70)
print("Export Complete!")
print("=" * 70)
print()
print("Generated files:")
print("  • workflow_interactive.html    - Interactive, embedded assets")
print("  • workflow_static.html         - View-only, embedded assets")
print("  • workflow_fullscreen.html     - Full-screen interactive view")
print("  • workflow_separate_assets.html - Interactive with separate JS/CSS")
print("  • workflow.json                - Raw workflow data")
print()
print("Open any HTML file in your browser to view the workflow!")
print("The HTML files are self-contained and work without Python/Jupyter.")
print()



# %%
