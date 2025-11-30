"""Basic tests for NodeFlowWidget initialization and configuration."""

import pytest
from pynodewidget import NodeFlowWidget


def test_widget_initialization():
    """Test basic widget initialization."""
    widget = NodeFlowWidget()
    assert widget.nodes == {}
    assert widget.edges == []
    assert widget.height == "600px"
    assert widget.fit_view is True


def test_widget_custom_height():
    """Test widget with custom height."""
    widget = NodeFlowWidget(height="800px")
    assert widget.height == "800px"


def test_viewport_default():
    """Test default viewport value."""
    widget = NodeFlowWidget()
    assert widget.viewport == {"x": 0, "y": 0, "zoom": 1}


def test_static_files_exist():
    """Test that static files are present."""
    import pathlib
    widget = NodeFlowWidget()
    assert widget._esm is not None
    assert widget._css is not None


def test_clear():
    """Test clearing all nodes and edges."""
    widget = NodeFlowWidget()
    widget.nodes = {"1": {"id": "1"}, "2": {"id": "2"}}
    widget.edges = [{"id": "e1"}]
    
    result = widget.clear()
    
    assert widget.nodes == {}
    assert widget.edges == []
    assert result is widget  # Check method chaining


def test_get_flow_data():
    """Test getting flow data."""
    widget = NodeFlowWidget()
    widget.nodes = {"1": {"id": "1"}}
    widget.edges = [{"id": "e1"}]
    
    data = widget.get_flow_data()
    
    assert data == {
        "nodes": {"1": {"id": "1"}},
        "edges": [{"id": "e1"}]
    }
