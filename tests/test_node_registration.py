"""Tests for node registration in NodeFlowWidget."""

import pytest
from pydantic import BaseModel, Field
from pynodewidget import NodeFlowWidget, NodeBuilder


# Test node classes
class SimpleParams(BaseModel):
    """Simple parameters."""
    name: str = Field(default="test")
    value: int = Field(default=42)


class SimpleNode(NodeBuilder):
    """Simple test node."""
    label = "Simple Node"
    parameters = SimpleParams


class AdvancedParams(BaseModel):
    """Advanced parameters with constraints."""
    threshold: float = Field(default=0.5, ge=0, le=1)
    mode: str = Field(default="auto")


class AdvancedNode(NodeBuilder):
    """Advanced test node with all features."""
    label = "Advanced Node"
    parameters = AdvancedParams
    icon = "⚙️"
    category = "processing"
    description = "An advanced processing node"
    inputs = [{"id": "input", "label": "Input"}]
    outputs = [{"id": "output", "label": "Output"}]


class InvalidNode:
    """Node without required attributes."""
    pass


class TestNodeRegistration:
    """Test register_node_type() method."""
    
    def test_register_single_node(self):
        """Test registering a single node class."""
        flow = NodeFlowWidget()
        flow.register_node_type(SimpleNode)
        
        assert len(flow.node_templates) == 1
        template = flow.node_templates[0]
        
        assert template["type"] == "simple_node"
        assert template["label"] == "Simple Node"
        assert "grid" in template["defaultData"]
        assert "cells" in template["defaultData"]["grid"]
    
    def test_register_node_with_custom_type_name(self):
        """Test registering with custom type name."""
        flow = NodeFlowWidget()
        flow.register_node_type(SimpleNode, type_name="custom_name")
        
        template = flow.node_templates[0]
        assert template["type"] == "custom_name"
    
    def test_register_multiple_nodes(self):
        """Test registering multiple node classes."""
        flow = NodeFlowWidget()
        flow.register_node_type(SimpleNode)
        flow.register_node_type(AdvancedNode)
        
        assert len(flow.node_templates) == 2
        assert flow.node_templates[0]["type"] == "simple_node"
        assert flow.node_templates[1]["type"] == "advanced_node"
    
    def test_register_node_method_chaining(self):
        """Test that register_node_type returns self for chaining."""
        flow = NodeFlowWidget()
        result = flow.register_node_type(SimpleNode)
        
        assert result is flow
        
        # Should support chaining with a new flow instance
        flow2 = NodeFlowWidget()
        flow2.register_node_type(SimpleNode).register_node_type(AdvancedNode)
        assert len(flow2.node_templates) == 2
    
    def test_register_node_with_all_metadata(self):
        """Test that all metadata is extracted correctly."""
        flow = NodeFlowWidget()
        flow.register_node_type(AdvancedNode)
        
        template = flow.node_templates[0]
        assert template["label"] == "Advanced Node"
        assert template["icon"] == "⚙️"
        assert template["category"] == "processing"
        assert template["description"] == "An advanced processing node"
        
        data = template["defaultData"]
        # Check grid structure instead of inputs/outputs
        assert "grid" in data
        assert "cells" in data["grid"]
    
    def test_register_invalid_node_raises_error(self):
        """Test that registering invalid node raises AttributeError."""
        flow = NodeFlowWidget()
        
        with pytest.raises(AttributeError) as exc_info:
            flow.register_node_type(InvalidNode)
        
        assert "missing required attribute" in str(exc_info.value).lower()
    
    def test_schema_generation(self):
        """Test that grid layout is generated from node definition."""
        flow = NodeFlowWidget()
        flow.register_node_type(AdvancedNode)
        
        template = flow.node_templates[0]
        grid = template["defaultData"]["grid"]
        
        assert "cells" in grid
        assert "rows" in grid
    
    def test_camel_case_to_snake_case_conversion(self):
        """Test that class names are converted to snake_case type names."""
        class MyComplexNodeName(NodeBuilder):
            label = "Test"
            parameters = SimpleParams
        
        flow = NodeFlowWidget()
        flow.register_node_type(MyComplexNodeName)
        
        assert flow.node_templates[0]["type"] == "my_complex_node_name"


class TestConstructorWithNodes:
    """Test NodeFlowWidget constructor with nodes parameter."""
    
    def test_constructor_with_single_node(self):
        """Test passing single node to constructor."""
        flow = NodeFlowWidget(nodes=[SimpleNode])
        
        assert len(flow.node_templates) == 1
        assert flow.node_templates[0]["type"] == "simple_node"
    
    def test_constructor_with_multiple_nodes(self):
        """Test passing multiple nodes to constructor."""
        flow = NodeFlowWidget(nodes=[SimpleNode, AdvancedNode])
        
        assert len(flow.node_templates) == 2
        assert flow.node_templates[0]["type"] == "simple_node"
        assert flow.node_templates[1]["type"] == "advanced_node"
    
    def test_constructor_with_empty_list(self):
        """Test passing empty list doesn't cause errors."""
        flow = NodeFlowWidget(nodes=[])
        assert len(flow.node_templates) == 0
    
    def test_constructor_with_none(self):
        """Test passing None for nodes parameter."""
        flow = NodeFlowWidget(nodes=None)
        assert len(flow.node_templates) == 0
    
    def test_constructor_without_nodes_parameter(self):
        """Test constructor still works without nodes parameter."""
        flow = NodeFlowWidget()
        assert len(flow.node_templates) == 0
    
    def test_constructor_with_height_and_nodes(self):
        """Test constructor with both height and nodes."""
        flow = NodeFlowWidget(nodes=[SimpleNode], height="800px")
        
        assert flow.height == "800px"
        assert len(flow.node_templates) == 1
    
    def test_constructor_validates_nodes(self):
        """Test that constructor validates node classes."""
        with pytest.raises(AttributeError):
            NodeFlowWidget(nodes=[InvalidNode])


class TestBackwardCompatibility:
    """Test that legacy methods still work."""
    
    def test_add_node_type_from_schema_uses_parameters(self):
        """Test that legacy method now uses 'parameters' key."""
        flow = NodeFlowWidget()
        schema = {
            "properties": {
                "x": {"type": "number", "default": 5}
            }
        }
        
        flow.add_node_type_from_schema(
            schema,
            type_name="test_node",
            label="Test"
        )
        
        template = flow.node_templates[0]
        # Should have grid layout
        assert "grid" in template["defaultData"]
        assert "cells" in template["defaultData"]["grid"]
        assert "schema" not in template["defaultData"]
    
    def test_add_node_type_from_pydantic_still_works(self):
        """Test that legacy Pydantic method still works."""
        flow = NodeFlowWidget()
        
        flow.add_node_type_from_pydantic(
            SimpleParams,
            type_name="legacy_node",
            label="Legacy Node",
            icon="🔧"
        )
        
        assert len(flow.node_templates) == 1
        template = flow.node_templates[0]
        assert template["type"] == "legacy_node"
        assert template["label"] == "Legacy Node"
    
    def test_mix_new_and_legacy_methods(self):
        """Test mixing new and legacy registration methods."""
        flow = NodeFlowWidget()
        
        # New method
        flow.register_node_type(SimpleNode)
        
        # Legacy method
        flow.add_node_type_from_pydantic(
            SimpleParams,
            type_name="legacy",
            label="Legacy"
        )
        
        assert len(flow.node_templates) == 2


class TestTypedHandles:
    """Test nodes with Pydantic-based handle definitions."""
    
    def test_pydantic_inputs_converted(self):
        """Test Pydantic input models are converted to handle configs."""
        class InputHandles(BaseModel):
            data: str = Field(description="Data input")
            config: str = Field(description="Config input")
        
        class NodeWithTypedInputs(NodeBuilder):
            label = "Typed Inputs"
            parameters = SimpleParams
            inputs = InputHandles
        
        flow = NodeFlowWidget(nodes=[NodeWithTypedInputs])
        
        template = flow.node_templates[0]
        # Check grid has handle components
        grid = template["defaultData"]["grid"]
        assert "cells" in grid
    
    def test_pydantic_outputs_converted(self):
        """Test Pydantic output models are converted to handle configs."""
        class OutputHandles(BaseModel):
            result: str = Field(description="Result output")
            status: str = Field(description="Status output")
        
        class NodeWithTypedOutputs(NodeBuilder):
            label = "Typed Outputs"
            parameters = SimpleParams
            outputs = OutputHandles
        
        flow = NodeFlowWidget(nodes=[NodeWithTypedOutputs])
        
        template = flow.node_templates[0]
        # Check that grid has handle components
        grid = template["defaultData"]["grid"]
        assert "cells" in grid


class TestDefaultValues:
    """Test that default values are handled correctly."""
    
    def test_empty_values_dict(self):
        """Test that values dict is empty (defaults come from schema)."""
        flow = NodeFlowWidget(nodes=[SimpleNode])
        
        template = flow.node_templates[0]
        values = template["defaultData"]["values"]
        
        # Values should be empty - defaults are in the schema itself
        assert values == {}
    
    def test_schema_contains_defaults(self):
        """Test node registration creates template with proper grid structure."""
        flow = NodeFlowWidget(nodes=[SimpleNode])
        
        template = flow.node_templates[0]
        # Check that grid exists (values will be empty until node is instantiated)
        assert "grid" in template["defaultData"]
        assert "cells" in template["defaultData"]["grid"]
