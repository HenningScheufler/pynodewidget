"""Tests for node template creation and management."""

import pytest
from pynodewidget import NodeFlowWidget


def test_add_node_type_from_schema():
    """Test adding node type from JSON schema."""
    widget = NodeFlowWidget()
    
    schema = {
        "type": "object",
        "properties": {
            "name": {"type": "string", "title": "Name", "default": "test"},
            "count": {"type": "number", "title": "Count", "default": 10},
            "enabled": {"type": "boolean", "title": "Enabled", "default": True}
        },
        "required": ["name"]
    }
    
    widget.add_node_type_from_schema(
        json_schema=schema,
        type_name="test_node",
        label="Test Node",
        description="A test node",
        icon="🧪"
    )
    
    assert len(widget.node_templates) == 1
    template = widget.node_templates[0]
    assert template["type"] == "test_node"
    assert template["label"] == "Test Node"
    assert template["description"] == "A test node"
    assert template["icon"] == "🧪"
    assert "grid" in template["definition"]
    assert "cells" in template["definition"]["grid"]


def test_add_node_type_default_values():
    """Test that default values from schema are extracted."""
    widget = NodeFlowWidget()
    
    schema = {
        "type": "object",
        "properties": {
            "name": {"type": "string", "default": "processor"},
            "count": {"type": "number", "default": 42}
        }
    }
    
    widget.add_node_type_from_schema(
        json_schema=schema,
        type_name="processor",
        label="Processor"
    )
    
    template = widget.node_templates[0]
    values = template["defaultValues"]
    assert values["name"] == "processor"
    assert values["count"] == 42


def test_add_node_type_without_handles():
    """Test adding node type without explicit inputs/outputs."""
    widget = NodeFlowWidget()
    
    widget.add_node_type_from_schema(
        json_schema={"type": "object", "properties": {}},
        type_name="simple",
        label="Simple Node"
    )
    
    template = widget.node_templates[0]
    # Check grid exists
    assert "grid" in template["definition"]


def test_multiple_node_types():
    """Test adding multiple node types."""
    widget = NodeFlowWidget()
    
    widget.add_node_type_from_schema(
        json_schema={"type": "object"},
        type_name="type1",
        label="Type 1"
    )
    
    widget.add_node_type_from_schema(
        json_schema={"type": "object"},
        type_name="type2",
        label="Type 2"
    )
    
    assert len(widget.node_templates) == 2
    assert widget.node_templates[0]["type"] == "type1"
    assert widget.node_templates[1]["type"] == "type2"


def test_method_chaining():
    """Test that methods support chaining."""
    widget = NodeFlowWidget()
    
    result = widget.add_node_type_from_schema(
        json_schema={"type": "object"},
        type_name="test1",
        label="Test 1"
    ).add_node_type_from_schema(
        json_schema={"type": "object"},
        type_name="test2",
        label="Test 2"
    )
    
    assert result is widget
    assert len(widget.node_templates) == 2


def test_add_node_type_with_pydantic_schema():
    """Test adding node type using Pydantic model schema."""
    pytest.importorskip("pydantic")
    from pydantic import BaseModel, Field
    
    class TestModel(BaseModel):
        name: str = Field(default="test", description="Name field")
        count: int = Field(default=5, ge=0, le=100)
        enabled: bool = True
    
    widget = NodeFlowWidget()
    # Use add_node_type_from_schema with Pydantic's model_json_schema()
    widget.add_node_type_from_schema(
        json_schema=TestModel.model_json_schema(),
        type_name="pydantic_node",
        label="Pydantic Node",
        icon="🐍"
    )
    
    assert len(widget.node_templates) == 1
    template = widget.node_templates[0]
    assert template["type"] == "pydantic_node"
    assert template["icon"] == "🐍"
    assert "grid" in template["definition"]
    assert "cells" in template["definition"]["grid"]
