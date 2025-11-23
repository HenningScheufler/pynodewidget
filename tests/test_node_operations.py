"""Tests for node and edge operations."""

import pytest
from pynodewidget import NodeFlowWidget


def test_get_node_data():
    """Test getting node data by ID."""
    widget = NodeFlowWidget()
    widget.nodes = [
        {"id": "1", "data": {"label": "Node 1", "value": 42}},
        {"id": "2", "data": {"label": "Node 2", "value": 100}}
    ]
    
    data = widget.get_node_data("1")
    assert data == {"label": "Node 1", "value": 42}
    
    data = widget.get_node_data("2")
    assert data == {"label": "Node 2", "value": 100}


def test_get_node_data_not_found():
    """Test getting node data for non-existent node."""
    widget = NodeFlowWidget()
    widget.nodes = [{"id": "1", "data": {"label": "Node 1"}}]
    
    data = widget.get_node_data("999")
    assert data is None


def test_get_node_data_no_data_field():
    """Test getting node data when node has no data field."""
    widget = NodeFlowWidget()
    widget.nodes = [{"id": "1"}]
    
    data = widget.get_node_data("1")
    assert data == {}
