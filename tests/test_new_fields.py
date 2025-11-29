"""Tests for new field components: ProgressField and ButtonComponent."""

import pytest
from pynodewidget.models import ProgressField, ButtonComponent


class TestProgressField:
    """Test ProgressField component."""
    
    def test_progress_field_basic(self):
        """Test basic ProgressField creation."""
        progress = ProgressField(id="progress", value=50)
        
        assert progress.id == "progress"
        assert progress.type == "progress"
        assert progress.label == "progress"
        assert progress.value == 50
        assert progress.min == 0
        assert progress.max == 100
    
    def test_progress_field_with_custom_range(self):
        """Test ProgressField with custom min/max."""
        progress = ProgressField(id="loading", value=0.5, min=0.0, max=1.0)
        
        assert progress.value == 0.5
        assert progress.min == 0.0
        assert progress.max == 1.0
    
    def test_progress_field_with_explicit_label(self):
        """Test ProgressField with explicit label."""
        progress = ProgressField(id="progress", label="Loading Progress", value=75)
        
        assert progress.label == "Loading Progress"
    
    def test_progress_field_label_inference(self):
        """Test that label defaults to id."""
        progress = ProgressField(id="download_progress", value=30)
        
        assert progress.label == "download_progress"


class TestButtonComponent:
    """Test ButtonComponent component."""
    
    def test_button_component_basic(self):
        """Test basic ButtonComponent creation."""
        button = ButtonComponent(id="submit", action="submit_form")
        
        assert button.id == "submit"
        assert button.type == "button"
        assert button.label == "submit"
        assert button.action == "submit_form"
        assert button.variant == "default"
        assert button.size == "default"
        assert button.disabled is False
    
    def test_button_component_with_all_options(self):
        """Test ButtonComponent with all customization options."""
        button = ButtonComponent(
            id="delete",
            label="Delete Item",
            action="delete_item",
            variant="destructive",
            size="lg",
            disabled=True
        )
        
        assert button.label == "Delete Item"
        assert button.action == "delete_item"
        assert button.variant == "destructive"
        assert button.size == "lg"
        assert button.disabled is True
    
    def test_button_component_variants(self):
        """Test all ButtonComponent variants."""
        variants = ["default", "destructive", "outline", "secondary", "ghost", "link"]
        
        for variant in variants:
            button = ButtonComponent(id=f"btn_{variant}", action="test", variant=variant)
            assert button.variant == variant
    
    def test_button_component_sizes(self):
        """Test all ButtonComponent sizes."""
        sizes = ["default", "sm", "lg", "icon"]
        
        for size in sizes:
            button = ButtonComponent(id=f"btn_{size}", action="test", size=size)
            assert button.size == size
    
    def test_button_component_label_inference(self):
        """Test that label defaults to id."""
        button = ButtonComponent(id="start_process", action="start")
        
        assert button.label == "start_process"
    
    def test_button_component_requires_action(self):
        """Test that action is required."""
        with pytest.raises(Exception):  # Pydantic ValidationError
            ButtonComponent(id="button")  # Missing required 'action' field


class TestFieldIntegration:
    """Test integration of new fields with the widget."""
    
    def test_fields_in_node_template(self):
        """Test that new fields can be used in node templates."""
        from pynodewidget import NodeFlowWidget
        from pynodewidget.grid_layouts import create_three_column_grid
        from pynodewidget.models import LabeledHandle
        
        widget = NodeFlowWidget()
        
        grid_layout = create_three_column_grid(
            left_components=[
                LabeledHandle(id="input", handle_type="input")
            ],
            center_components=[
                ProgressField(id="progress", value=50),
                ButtonComponent(id="run", action="execute")
            ],
            right_components=[
                LabeledHandle(id="output", handle_type="output")
            ]
        )
        
        widget.add_node_type(
            type_name="test_node",
            label="Test Node",
            grid_layout=grid_layout
        )
        
        assert len(widget.node_templates) == 1
        template = widget.node_templates[0]
        
        # Check that components are in the template
        center_cell = template['definition']['grid']['cells'][1]
        component_types = [comp['type'] for comp in center_cell['components']]
        
        assert "progress" in component_types
        assert "button" in component_types
    
    def test_fields_validation_in_grid(self):
        """Test that fields are properly validated in grid layouts."""
        from pynodewidget import NodeFlowWidget
        from pynodewidget.grid_layouts import create_vertical_stack_grid
        
        widget = NodeFlowWidget()
        
        # Create a valid layout
        grid_layout = create_vertical_stack_grid(
            middle_components=[
                ProgressField(id="progress1", value=25),
                ButtonComponent(id="action1", action="test"),
                ProgressField(id="progress2", value=75),
            ]
        )
        
        # Should succeed
        widget.add_node_type(
            type_name="multi_field_node",
            label="Multi Field Node",
            grid_layout=grid_layout
        )
        
        assert len(widget.node_templates) == 1
