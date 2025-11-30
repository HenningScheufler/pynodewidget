"""Tests for node registration in NodeFlowWidget (v2.0 Simplified API)."""

from pydantic import BaseModel, Field
from pynodewidget import NodeFlowWidget


# Test parameter classes
class SimpleParams(BaseModel):
    """Simple parameters."""
    name: str = Field(default="test")
    value: int = Field(default=42)


class AdvancedParams(BaseModel):
    """Advanced parameters with constraints."""
    threshold: float = Field(default=0.5, ge=0, le=1)
    mode: str = Field(default="auto")


class TestLabelInference:
    """Test automatic label inference from component IDs."""
    
    def test_field_label_defaults_to_id(self):
        """Test that label defaults to id for fields."""
        from pynodewidget.models import TextField, NumberField, BoolField, SelectField
        
        # Labels should default to id
        text_field = TextField(id="name", value="test")
        assert text_field.label == "name"
        
        number_field = NumberField(id="value", value=42)
        assert number_field.label == "value"
        
        bool_field = BoolField(id="enabled", value=True)
        assert bool_field.label == "enabled"
        
        select_field = SelectField(id="mode", value="auto", options=["auto", "manual"])
        assert select_field.label == "mode"
    
    def test_field_label_with_underscores(self):
        """Test that underscores in id are preserved in label."""
        from pynodewidget.models import TextField, NumberField, BoolField
        
        text_field = TextField(id="max_value", value="test")
        assert text_field.label == "max_value"
        
        number_field = NumberField(id="min_threshold", value=10)
        assert number_field.label == "min_threshold"
        
        bool_field = BoolField(id="is_enabled", value=True)
        assert bool_field.label == "is_enabled"
    
    def test_field_label_with_camelcase(self):
        """Test that camelCase in id is preserved in label."""
        from pynodewidget.models import TextField, NumberField, BoolField
        
        text_field = TextField(id="maxValue", value="test")
        assert text_field.label == "maxValue"
        
        number_field = NumberField(id="minThreshold", value=10)
        assert number_field.label == "minThreshold"
        
        bool_field = BoolField(id="isEnabled", value=True)
        assert bool_field.label == "isEnabled"
    
    def test_field_explicit_label_override(self):
        """Test that explicit labels override the default id."""
        from pynodewidget.models import TextField, NumberField, BoolField, SelectField
        
        text_field = TextField(id="name", label="Custom Label", value="test")
        assert text_field.label == "Custom Label"
        
        number_field = NumberField(id="value", label="Special Value", value=42)
        assert number_field.label == "Special Value"
        
        bool_field = BoolField(id="enabled", label="Is Active", value=True)
        assert bool_field.label == "Is Active"
        
        select_field = SelectField(id="mode", label="Operation Mode", value="auto", options=["auto"])
        assert select_field.label == "Operation Mode"
    
    def test_handle_label_defaults_to_id(self):
        """Test that label defaults to id for handles."""
        from pynodewidget.models import BaseHandle, LabeledHandle, ButtonHandle
        
        base_handle = BaseHandle(id="input", handle_type="input")
        assert base_handle.label == "input"
        
        labeled_handle = LabeledHandle(id="output", handle_type="output")
        assert labeled_handle.label == "output"
        
        button_handle = ButtonHandle(id="trigger", handle_type="input")
        assert button_handle.label == "trigger"
    
    def test_handle_label_with_underscores(self):
        """Test that underscores in handle id are preserved in label."""
        from pynodewidget.models import BaseHandle, LabeledHandle, ButtonHandle
        
        base_handle = BaseHandle(id="data_input", handle_type="input")
        assert base_handle.label == "data_input"
        
        labeled_handle = LabeledHandle(id="result_output", handle_type="output")
        assert labeled_handle.label == "result_output"
        
        button_handle = ButtonHandle(id="error_signal", handle_type="output")
        assert button_handle.label == "error_signal"
    
    def test_handle_label_with_camelcase(self):
        """Test that camelCase in handle id is preserved in label."""
        from pynodewidget.models import BaseHandle, LabeledHandle, ButtonHandle
        
        base_handle = BaseHandle(id="dataInput", handle_type="input")
        assert base_handle.label == "dataInput"
        
        labeled_handle = LabeledHandle(id="resultOutput", handle_type="output")
        assert labeled_handle.label == "resultOutput"
        
        button_handle = ButtonHandle(id="errorSignal", handle_type="output")
        assert button_handle.label == "errorSignal"
    
    def test_handle_explicit_label_override(self):
        """Test that explicit labels override the default id for handles."""
        from pynodewidget.models import BaseHandle, LabeledHandle, ButtonHandle
        
        base_handle = BaseHandle(id="input", label="Primary Input", handle_type="input")
        assert base_handle.label == "Primary Input"
        
        labeled_handle = LabeledHandle(id="output", label="Main Output", handle_type="output")
        assert labeled_handle.label == "Main Output"
        
        button_handle = ButtonHandle(id="trigger", label="Execute", handle_type="input")
        assert button_handle.label == "Execute"


class TestDuplicateIDValidation:
    """Test duplicate component ID validation."""
    
    def test_duplicate_id_detection(self):
        """Test that duplicate IDs are detected and raise an error."""
        from pynodewidget.grid_layouts import create_three_column_grid
        from pynodewidget.models import TextField, NumberField
        import pytest
        
        flow = NodeFlowWidget()
        
        # Create layout with duplicate IDs
        grid_layout = create_three_column_grid(
            center_components=[
                TextField(id="value", value="test1"),
                NumberField(id="value", value=42)  # Duplicate ID!
            ]
        )
        
        # Should raise ValueError for duplicate IDs
        with pytest.raises(ValueError, match="Duplicate component ID.*value"):
            flow.add_node_type(
                type_name="test_node",
                label="Test Node",
                grid_layout=grid_layout
            )
    
    def test_unique_ids_pass(self):
        """Test that unique IDs pass validation."""
        from pynodewidget.grid_layouts import create_three_column_grid
        from pynodewidget.models import TextField, NumberField
        
        flow = NodeFlowWidget()
        
        # Create layout with unique IDs
        grid_layout = create_three_column_grid(
            center_components=[
                TextField(id="name", value="test"),
                NumberField(id="value", value=42)
            ]
        )
        
        # Should succeed
        flow.add_node_type(
            type_name="test_node",
            label="Test Node",
            grid_layout=grid_layout
        )
        
        assert len(flow.node_templates) == 1
    
    def test_duplicate_across_columns(self):
        """Test duplicate ID detection across different columns."""
        from pynodewidget.grid_layouts import create_three_column_grid
        from pynodewidget.models import TextField, LabeledHandle
        import pytest
        
        flow = NodeFlowWidget()
        
        # Create layout with duplicate IDs across columns
        grid_layout = create_three_column_grid(
            left_components=[
                LabeledHandle(id="input", handle_type="input")
            ],
            center_components=[
                TextField(id="input", value="test")  # Duplicate ID!
            ]
        )
        
        # Should raise ValueError for duplicate IDs
        with pytest.raises(ValueError, match="Duplicate component ID.*input"):
            flow.add_node_type(
                type_name="test_node",
                label="Test Node",
                grid_layout=grid_layout
            )


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
