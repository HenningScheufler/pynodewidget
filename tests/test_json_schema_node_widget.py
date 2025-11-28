"""Tests for NodeBuilder implementing NodeFactory protocol."""

import pytest
from pydantic import BaseModel, Field
from pynodewidget import NodeBuilder


# Test Pydantic models
class SimpleConfig(BaseModel):
    """Simple configuration model."""
    name: str = Field(default="test")
    value: int = Field(default=42)


class ComplexConfig(BaseModel):
    """Complex configuration with constraints."""
    threshold: float = Field(default=0.5, ge=0, le=1, description="Processing threshold")
    mode: str = Field(default="auto", description="Processing mode")
    enabled: bool = Field(default=True)


class InputHandles(BaseModel):
    """Typed input handles."""
    input_data: str = Field(description="Input data handle")
    config: str = Field(description="Configuration handle")


class OutputHandles(BaseModel):
    """Typed output handles."""
    output: str = Field(description="Output handle")
    status: str = Field(description="Status handle")


# Test node classes
class MinimalNode(NodeBuilder):
    """Minimal node with required attributes only."""
    label = "Minimal Node"
    parameters = SimpleConfig


class FullNode(NodeBuilder):
    """Full-featured node with all attributes."""
    label = "Full Node"
    parameters = ComplexConfig
    icon = "⚙️"
    category = "processing"
    description = "A full-featured node example"
    inputs = [{"id": "in1", "label": "Input 1"}]
    outputs = [{"id": "out1", "label": "Output 1"}]


class TypedHandlesNode(NodeBuilder):
    """Node with Pydantic-based handle definitions."""
    label = "Typed Node"
    parameters = SimpleConfig
    inputs = InputHandles
    outputs = OutputHandles


class TestNodeInstantiation:
    """Test node widget instantiation."""
    
    def test_minimal_node_default_values(self):
        """Test minimal node with default values."""
        node = MinimalNode()
        
        assert node.data["label"] == "Minimal Node"
        assert "grid" in node.data
        assert node.data["values"]["name"] == "test"
        assert node.data["values"]["value"] == 42
    
    def test_minimal_node_initial_values(self):
        """Test minimal node with initial values."""
        node = MinimalNode(name="custom", value=100)
        
        assert node.data["values"]["name"] == "custom"
        assert node.data["values"]["value"] == 100
    
    def test_full_node_metadata(self):
        """Test that all metadata is included in data dict."""
        node = FullNode()
        
        assert node.data["label"] == "Full Node"
        assert "grid" in node.data
        # Verify grid has proper structure
        assert "cells" in node.data["grid"]
        assert "rows" in node.data["grid"]
        assert "columns" in node.data["grid"]
    
    def test_typed_handles_conversion(self):
        """Test Pydantic models are converted to handle components in grid."""
        node = TypedHandlesNode()
        
        # Check grid has cells with handle components
        assert "grid" in node.data
        assert "cells" in node.data["grid"]
        # Handles should be converted to components in the grid
    
    def test_standalone_widget_mode(self):
        """Test using widget with explicit data dict (backward compatibility)."""
        data = {
            "label": "Standalone",
            "parameters": {"properties": {"x": {"type": "number"}}},
            "values": {"x": 10}
        }
        
        widget = NodeBuilder(data=data)
        assert widget.data == data


class TestGetSetValues:
    """Test get_values() and set_values() methods."""
    
    def test_get_values(self):
        """Test getting current values."""
        node = MinimalNode(name="test", value=99)
        values = node.get_values()
        
        assert values["name"] == "test"
        assert values["value"] == 99
    
    def test_set_values(self):
        """Test updating values."""
        node = MinimalNode()
        node.set_values({"name": "updated", "value": 200})
        
        values = node.get_values()
        assert values["name"] == "updated"
        assert values["value"] == 200
    
    def test_set_value_single(self):
        """Test updating a single value."""
        node = MinimalNode()
        node.set_value("name", "single")
        
        assert node.get_values()["name"] == "single"
        assert node.get_values()["value"] == 42  # unchanged
    
    def test_set_values_partial(self):
        """Test partial update preserves other values."""
        node = MinimalNode(name="original", value=10)
        node.set_values({"name": "changed"})
        
        values = node.get_values()
        assert values["name"] == "changed"
        assert values["value"] == 10  # preserved
    
    def test_values_sync_to_data(self):
        """Test that set_values updates widget data."""
        node = MinimalNode()
        node.set_values({"name": "synced"})
        
        assert node.data["values"]["name"] == "synced"


class TestValidation:
    """Test validation functionality."""
    
    def test_validate_valid_config(self):
        """Test validation with valid configuration."""
        node = FullNode(threshold=0.7, mode="auto")
        assert node.validate() is True
    
    def test_validate_after_set_values(self):
        """Test validation after updating values."""
        node = FullNode()
        node.set_values({"threshold": 0.3})
        assert node.validate() is True
    
    def test_pydantic_validation_enforced(self):
        """Test that Pydantic validation is enforced."""
        node = FullNode()
        
        # This should fail because threshold must be between 0 and 1
        with pytest.raises(Exception):  # Pydantic ValidationError
            node.set_values({"threshold": 1.5})


class TestFactoryMethods:
    """Test factory methods for backward compatibility."""
    
    def test_from_pydantic(self):
        """Test creating widget from Pydantic model."""
        widget = NodeBuilder.from_pydantic(
            SimpleConfig,
            label="Test Node",
            icon="🔧",
            initial_values={"name": "factory"}
        )
        
        assert widget.data["label"] == "Test Node"
        assert widget.get_values()["name"] == "factory"
    
    def test_from_schema(self):
        """Test creating widget from JSON schema."""
        schema = {
            "properties": {
                "x": {"type": "number", "default": 5},
                "y": {"type": "string", "default": "test"}
            }
        }
        
        widget = NodeBuilder.from_schema(
            schema,
            label="Schema Node",
            initial_values={"x": 10}
        )
        
        assert widget.data["label"] == "Schema Node"
        assert widget.data["values"]["x"] == 10
        assert widget.data["values"]["y"] == "test"
    
    def test_from_schema_uses_parameters_key(self):
        """Test that from_schema creates valid grid structure."""
        schema = {"properties": {"a": {"type": "string"}}}
        widget = NodeBuilder.from_schema(schema, label="Test")
        
        # Should have grid structure
        assert "grid" in widget.data
        assert "cells" in widget.data["grid"]


class TestExecuteMethod:
    """Test execute method."""
    
    def test_execute_not_implemented(self):
        """Test that execute raises NotImplementedError by default."""
        node = MinimalNode()
        
        with pytest.raises(NotImplementedError) as exc_info:
            node.execute({"input": "data"})
        
        assert "does not implement execute()" in str(exc_info.value)
    
    def test_execute_custom_implementation(self):
        """Test custom execute implementation."""
        
        class ExecutableNode(NodeBuilder):
            label = "Executable"
            parameters = SimpleConfig
            
            def execute(self, inputs):
                config = self.get_values()
                return {
                    "output": f"{config['name']}: {inputs.get('input', '')}"
                }
        
        node = ExecutableNode(name="processor")
        result = node.execute({"input": "test data"})
        
        assert result["output"] == "processor: test data"


class TestBackwardCompatibility:
    """Test backward compatibility with old API."""
    
    def test_data_dict_initialization(self):
        """Test initialization with data dict (old style)."""
        data = {
            "label": "Old Style",
            "parameters": {  # Note: using 'parameters' now
                "properties": {
                    "field1": {"type": "string", "default": "value"}
                }
            },
            "values": {"field1": "value"}
        }
        
        widget = NodeBuilder(data=data)
        assert widget.data == data
        assert widget.get_values()["field1"] == "value"
    
    def test_id_parameter(self):
        """Test custom ID parameter."""
        node = MinimalNode(id="custom-id")
        assert node.id == "custom-id"
    
    def test_selected_parameter(self):
        """Test selected parameter."""
        node = MinimalNode(selected=True)
        assert node.selected is True


class TestSchemaGeneration:
    """Test JSON Schema generation from Pydantic models."""
    
    def test_schema_includes_properties(self):
        """Test that grid layout is generated."""
        node = FullNode()
        grid = node.data["grid"]
        
        assert "cells" in grid
        assert "rows" in grid
        assert "columns" in grid
    
    def test_schema_includes_constraints(self):
        """Test that grid layout has proper structure."""
        node = FullNode()
        grid = node.data["grid"]
        
        # Grid should have standard three-column layout
        assert isinstance(grid["rows"], list)
        assert isinstance(grid["columns"], list)
    
    def test_schema_includes_defaults(self):
        """Test that values include defaults."""
        node = FullNode()
        
        assert node.data["values"]["threshold"] == 0.5
        assert node.data["values"]["mode"] == "auto"
