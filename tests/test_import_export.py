"""Tests for import/export functionality."""

import pytest
import json
import tempfile
import pathlib
from pynodewidget import NodeFlowWidget


def test_export_json():
    """Test exporting flow to JSON."""
    widget = NodeFlowWidget()
    widget.nodes = [{"id": "1", "type": "test", "position": {"x": 0, "y": 0}}]
    widget.edges = [{"id": "e1", "source": "1", "target": "2"}]
    widget.node_templates = [{"type": "test", "label": "Test"}]
    
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.json') as f:
        filename = f.name
    
    try:
        result = widget.export_json(filename)
        assert result == filename
        
        with open(filename, 'r') as f:
            data = json.load(f)
        
        assert data["nodes"] == widget.nodes
        assert data["edges"] == widget.edges
        assert data["node_templates"] == widget.node_templates
        assert "viewport" in data
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)


def test_load_json():
    """Test loading flow from JSON."""
    widget = NodeFlowWidget()
    
    test_data = {
        "nodes": [{"id": "1", "type": "test", "position": {"x": 100, "y": 200}}],
        "edges": [{"id": "e1", "source": "1", "target": "2"}],
        "viewport": {"x": 10, "y": 20, "zoom": 1.5},
        "node_templates": [{"type": "test", "label": "Test"}]
    }
    
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.json') as f:
        json.dump(test_data, f)
        filename = f.name
    
    try:
        widget.load_json(filename)
        
        assert widget.nodes == test_data["nodes"]
        assert widget.edges == test_data["edges"]
        assert widget.viewport == test_data["viewport"]
        assert widget.node_templates == test_data["node_templates"]
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)


def test_load_json_without_templates():
    """Test loading JSON without node_templates field."""
    widget = NodeFlowWidget()
    
    test_data = {
        "nodes": [{"id": "1"}],
        "edges": []
    }
    
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.json') as f:
        json.dump(test_data, f)
        filename = f.name
    
    try:
        widget.load_json(filename)
        assert widget.nodes == test_data["nodes"]
        assert widget.edges == []
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)


def test_complete_workflow():
    """Test a complete workflow: create, add nodes, export, load."""
    # Create widget with node types
    widget1 = NodeFlowWidget(height="500px")
    widget1.add_node_type_from_schema(
        json_schema={
            "type": "object",
            "properties": {
                "param": {"type": "string", "default": "value"}
            }
        },
        type_name="processor",
        label="Processor",
        icon="⚙️",
        inputs=[{"id": "in", "label": "Input"}],
        outputs=[{"id": "out", "label": "Output"}]
    )
    
    # Simulate adding nodes
    widget1.nodes = [
        {
            "id": "node1",
            "type": "processor",
            "position": {"x": 100, "y": 100},
            "data": {"label": "Processor 1", "values": {"param": "test"}}
        }
    ]
    
    # Export to temp file
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.json') as f:
        filename = f.name
    
    try:
        widget1.export_json(filename)
        
        # Load into new widget
        widget2 = NodeFlowWidget()
        widget2.load_json(filename)
        
        # Verify data
        assert len(widget2.nodes) == 1
        assert widget2.nodes[0]["id"] == "node1"
        assert widget2.get_node_data("node1")["label"] == "Processor 1"
        
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)
