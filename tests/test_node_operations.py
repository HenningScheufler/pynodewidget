"""Tests for node and edge operations (v2.0 Simplified API)."""

import pytest
from pynodewidget import NodeFlowWidget


def test_direct_node_data_access():
    """Test getting node data via direct access (v2.0)."""
    widget = NodeFlowWidget()
    widget.nodes = {
        "1": {"id": "1", "data": {"label": "Node 1", "value": 42}},
        "2": {"id": "2", "data": {"label": "Node 2", "value": 100}}
    }
    
    data = widget.nodes["1"]["data"]
    assert data == {"label": "Node 1", "value": 42}
    
    data = widget.nodes["2"]["data"]
    assert data == {"label": "Node 2", "value": 100}


def test_node_data_access_not_found():
    """Test accessing data for non-existent node."""
    widget = NodeFlowWidget()
    widget.nodes = {"1": {"id": "1", "data": {"label": "Node 1"}}}
    
    # Direct dict access requires error handling
    data = widget.nodes.get("999", {}).get("data")
    assert data is None


def test_node_data_access_no_data_field():
    """Test accessing node when it has no data field."""
    widget = NodeFlowWidget()
    widget.nodes = {"1": {"id": "1"}}
    
    data = widget.nodes["1"].get("data", {})
    assert data == {}
