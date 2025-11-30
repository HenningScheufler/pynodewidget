"""Tests for import/export functionality."""

import pytest
import json
import tempfile
import pathlib
from pynodewidget import NodeFlowWidget


def test_export_json():
    """Test exporting flow to JSON."""
    widget = NodeFlowWidget()
    widget.nodes = {"1": {"id": "1", "type": "test", "position": {"x": 0, "y": 0}}}
    widget.edges = [{"id": "e1", "source": "1", "target": "2"}]
    widget.node_templates = [{"type": "test", "label": "Test"}]
    widget.node_values = {"1": {"field1": "value1"}}
    
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
        assert data["node_values"] == {"1": {"field1": "value1"}}
        assert "viewport" in data
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)


def test_load_json():
    """Test loading flow from JSON."""
    widget = NodeFlowWidget()
    
    test_data = {
        "nodes": {"1": {"id": "1", "type": "test", "position": {"x": 100, "y": 200}}},
        "edges": [{"id": "e1", "source": "1", "target": "2"}],
        "viewport": {"x": 10, "y": 20, "zoom": 1.5},
        "node_templates": [{"type": "test", "label": "Test"}],
        "node_values": {"1": {"param": "test_value"}}
    }
    
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.json') as f:
        json.dump(test_data, f)
        filename = f.name
    
    try:
        widget = NodeFlowWidget.from_json(filename)
        
        assert widget.nodes == test_data["nodes"]
        assert widget.edges == test_data["edges"]
        assert widget.viewport == test_data["viewport"]
        assert widget.node_templates == test_data["node_templates"]
        assert dict(widget.node_values) == test_data["node_values"]
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)


def test_load_json_without_templates():
    """Test loading JSON without node_templates field."""
    widget = NodeFlowWidget()
    
    test_data = {
        "nodes": {"1": {"id": "1"}},
        "edges": []
    }
    
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.json') as f:
        json.dump(test_data, f)
        filename = f.name
    
    try:
        widget = NodeFlowWidget.from_json(filename)
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
        icon="⚙️"
    )
    
    # Simulate adding nodes
    widget1.nodes = {
        "node1": {
            "id": "node1",
            "type": "processor",
            "position": {"x": 100, "y": 100},
            "data": {"label": "Processor 1", "values": {"param": "test"}}
        }
    }
    
    # Export to temp file
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.json') as f:
        filename = f.name
    
    try:
        widget1.export_json(filename)
        
        # Load into new widget
        widget2 = NodeFlowWidget.from_json(filename)
        
        # Verify data
        assert len(widget2.nodes) == 1
        assert widget2.nodes["node1"]["id"] == "node1"
        assert widget2.nodes["node1"]["data"]["label"] == "Processor 1"
        
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)


def test_export_yaml():
    """Test exporting flow to YAML."""
    pytest.importorskip("yaml")
    
    widget = NodeFlowWidget()
    widget.nodes = {"1": {"id": "1", "type": "test", "position": {"x": 0, "y": 0}}}
    widget.edges = [{"id": "e1", "source": "1", "target": "2"}]
    widget.node_templates = [{"type": "test", "label": "Test"}]
    widget.node_values = {"1": {"field1": "value1"}}
    
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.yaml') as f:
        filename = f.name
    
    try:
        result = widget.export_yaml(filename)
        assert result == filename
        
        import yaml
        with open(filename, 'r') as f:
            data = yaml.safe_load(f)
        
        assert data["nodes"] == widget.nodes
        assert data["edges"] == widget.edges
        assert data["node_templates"] == widget.node_templates
        assert data["node_values"] == {"1": {"field1": "value1"}}
        assert "viewport" in data
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)


def test_export_yaml_without_pyyaml():
    """Test that export_yaml raises ImportError without pyyaml."""
    import sys
    import importlib
    
    # Save original yaml module
    yaml_module = sys.modules.get('yaml')
    
    try:
        # Remove yaml from sys.modules if present
        if 'yaml' in sys.modules:
            del sys.modules['yaml']
        
        # Block yaml import
        sys.modules['yaml'] = None
        
        widget = NodeFlowWidget()
        
        with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.yaml') as f:
            filename = f.name
        
        try:
            with pytest.raises(ImportError, match="PyYAML is required"):
                widget.export_yaml(filename)
        finally:
            pathlib.Path(filename).unlink(missing_ok=True)
    finally:
        # Restore original yaml module
        if yaml_module is None and 'yaml' in sys.modules:
            del sys.modules['yaml']
        elif yaml_module is not None:
            sys.modules['yaml'] = yaml_module


def test_export_auto_detect_json():
    """Test export() method auto-detects JSON format."""
    widget = NodeFlowWidget()
    widget.nodes = {"1": {"id": "1", "type": "test"}}
    
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.json') as f:
        filename = f.name
    
    try:
        result = widget.export(filename)
        assert result == filename
        
        with open(filename, 'r') as f:
            data = json.load(f)
        
        assert "nodes" in data
        assert "edges" in data
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)


def test_export_auto_detect_yaml():
    """Test export() method auto-detects YAML format."""
    pytest.importorskip("yaml")
    
    widget = NodeFlowWidget()
    widget.nodes = {"1": {"id": "1", "type": "test"}}
    
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.yaml') as f:
        filename = f.name
    
    try:
        result = widget.export(filename)
        assert result == filename
        
        import yaml
        with open(filename, 'r') as f:
            data = yaml.safe_load(f)
        
        assert "nodes" in data
        assert "edges" in data
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)


def test_export_explicit_format():
    """Test export() method with explicit format parameter."""
    pytest.importorskip("yaml")
    
    widget = NodeFlowWidget()
    widget.nodes = {"1": {"id": "1", "type": "test"}}
    
    # Force YAML format even with .txt extension
    with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as f:
        filename = f.name
    
    try:
        result = widget.export(filename, format='yaml')
        assert result == filename
        
        import yaml
        with open(filename, 'r') as f:
            data = yaml.safe_load(f)
        
        assert "nodes" in data
    finally:
        pathlib.Path(filename).unlink(missing_ok=True)
