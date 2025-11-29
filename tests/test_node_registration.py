"""Tests for node registration in NodeFlowWidget (v2.0 Simplified API)."""

import pytest
from pydantic import BaseModel, Field
from pynodewidget import NodeFlowWidget
from pynodewidget.models import NodeGrid, GridCell, CellLayout


# Test parameter classes
class SimpleParams(BaseModel):
    """Simple parameters."""
    name: str = Field(default="test")
    value: int = Field(default=42)


class AdvancedParams(BaseModel):
    """Advanced parameters with constraints."""
    threshold: float = Field(default=0.5, ge=0, le=1)
    mode: str = Field(default="auto")


class TestAddNodeTypeFromSchema:
    """Test add_node_type_from_schema() method (v2.0 still supported)."""
    
    def test_add_node_type_basic(self):
        """Test basic node type registration."""
        flow = NodeFlowWidget()
        schema = SimpleParams.model_json_schema()
        
        flow.add_node_type_from_schema(
            schema,
            type_name="test_node",
            label="Test Node"
        )
        
        assert len(flow.node_templates) == 1
        template = flow.node_templates[0]
        
        assert template["type"] == "test_node"
        assert template["label"] == "Test Node"
        assert "grid" in template["definition"]
        assert "cells" in template["definition"]["grid"]
    
    def test_add_node_type_with_metadata(self):
        """Test adding node with full metadata."""
        flow = NodeFlowWidget()
        schema = AdvancedParams.model_json_schema()
        
        flow.add_node_type_from_schema(
            schema,
            type_name="advanced_node",
            label="Advanced Node",
            description="An advanced node",
            icon="⚙️"
        )
        
        template = flow.node_templates[0]
        assert template["label"] == "Advanced Node"
        assert template["icon"] == "⚙️"
        assert template["description"] == "An advanced node"
    
    def test_add_node_type_method_chaining(self):
        """Test that method returns self for chaining."""
        flow = NodeFlowWidget()
        result = flow.add_node_type_from_schema(
            SimpleParams.model_json_schema(),
            type_name="node1",
            label="Node 1"
        )
        
        assert result is flow
    
    def test_default_values_extracted(self):
        """Test that default values are extracted from schema."""
        flow = NodeFlowWidget()
        schema = SimpleParams.model_json_schema()
        
        flow.add_node_type_from_schema(
            schema,
            type_name="test",
            label="Test"
        )
        
        template = flow.node_templates[0]
        assert "defaultValues" in template
        assert template["defaultValues"]["name"] == "test"
        assert template["defaultValues"]["value"] == 42
