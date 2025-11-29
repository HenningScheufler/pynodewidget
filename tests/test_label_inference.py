"""Tests for label inference and ID uniqueness validation."""

import pytest
from pynodewidget import NodeFlowWidget
from pynodewidget.models import (
    NumberField, TextField, BoolField, SelectField,
    GridCell, GridCoordinates, CellLayout, NodeGrid
)
from pynodewidget.grid_layouts import create_three_column_grid


class TestLabelInference:
    """Test that labels are correctly inferred from component IDs."""
    
    def test_simple_id_inference(self):
        """Test label inference from simple single-word IDs."""
        field = NumberField(id="value", value=42)
        assert field.label == "Value"
        
        field = TextField(id="name", value="test")
        assert field.label == "Name"
    
    def test_underscore_id_inference(self):
        """Test label inference from IDs with underscores."""
        field = NumberField(id="max_value", value=100)
        assert field.label == "Max Value"
        
        field = TextField(id="user_name", value="")
        assert field.label == "User Name"
        
        field = BoolField(id="is_enabled", value=True)
        assert field.label == "Is Enabled"
    
    def test_hyphen_id_inference(self):
        """Test label inference from IDs with hyphens."""
        field = NumberField(id="max-count", value=50)
        assert field.label == "Max Count"
        
        field = TextField(id="input-port", value="")
        assert field.label == "Input Port"
    
    def test_camelcase_id_inference(self):
        """Test label inference from camelCase IDs."""
        field = NumberField(id="maxValue", value=100)
        assert field.label == "Max Value"
        
        field = TextField(id="userName", value="")
        assert field.label == "User Name"
        
        field = BoolField(id="isEnabled", value=True)
        assert field.label == "Is Enabled"
    
    def test_explicit_label_override(self):
        """Test that explicit labels override inference."""
        field = NumberField(id="value", label="Custom Label", value=42)
        assert field.label == "Custom Label"
        
        field = TextField(id="name", label="Override", value="")
        assert field.label == "Override"
    
    def test_all_field_types_inference(self):
        """Test that all field types support label inference."""
        # TextField
        text_field = TextField(id="input_text", value="")
        assert text_field.label == "Input Text"
        
        # NumberField
        num_field = NumberField(id="max_count", value=10)
        assert num_field.label == "Max Count"
        
        # BoolField
        bool_field = BoolField(id="is_active", value=True)
        assert bool_field.label == "Is Active"
        
        # SelectField
        select_field = SelectField(id="selected_mode", options=["a", "b"])
        assert select_field.label == "Selected Mode"


class TestIDUniquenessValidation:
    """Test that duplicate component IDs are detected and rejected."""
    
    def test_duplicate_ids_in_same_cell(self):
        """Test that duplicate IDs in the same cell are rejected."""
        with pytest.raises(ValueError, match="Duplicate component ID found: 'field1'"):
            grid = create_three_column_grid(
                center_components=[
                    NumberField(id="field1", value=10),
                    TextField(id="field1", value="duplicate")  # Same ID
                ]
            )
            
            widget = NodeFlowWidget()
            widget.add_node_type(
                type_name="test",
                label="Test",
                grid_layout=grid
            )
    
    def test_duplicate_ids_across_cells(self):
        """Test that duplicate IDs across different cells are rejected."""
        with pytest.raises(ValueError, match="Duplicate component ID found: 'shared'"):
            grid = create_three_column_grid(
                left_components=[
                    NumberField(id="shared", value=1)
                ],
                center_components=[
                    TextField(id="shared", value="duplicate")  # Same ID in different cell
                ]
            )
            
            widget = NodeFlowWidget()
            widget.add_node_type(
                type_name="test",
                label="Test",
                grid_layout=grid
            )
    
    def test_unique_ids_accepted(self):
        """Test that unique IDs are accepted."""
        grid = create_three_column_grid(
            left_components=[
                NumberField(id="field1", value=1)
            ],
            center_components=[
                TextField(id="field2", value=""),
                NumberField(id="field3", value=3)
            ],
            right_components=[
                BoolField(id="field4", value=True)
            ]
        )
        
        widget = NodeFlowWidget()
        widget.add_node_type(
            type_name="test",
            label="Test",
            grid_layout=grid
        )
        
        # Should succeed without errors
        assert len(widget.node_templates) == 1
    
    def test_duplicate_ids_in_nested_grid(self):
        """Test that duplicate IDs in nested grids are detected."""
        from pynodewidget.models import GridLayoutComponent
        
        # Create a nested grid with duplicate ID
        inner_grid = GridLayoutComponent(
            id="inner",
            type="grid-layout",
            rows=["auto"],
            columns=["1fr"],
            cells=[
                GridCell(
                    id="inner-cell",
                    coordinates=GridCoordinates(row=1, col=1),
                    components=[
                        NumberField(id="duplicate_id", value=42)
                    ]
                )
            ]
        )
        
        grid = NodeGrid(
            rows=["auto"],
            columns=["1fr"],
            cells=[
                GridCell(
                    id="outer-cell",
                    coordinates=GridCoordinates(row=1, col=1),
                    components=[
                        NumberField(id="duplicate_id", value=1),  # Same ID as in nested grid
                        inner_grid
                    ]
                )
            ]
        )
        
        with pytest.raises(ValueError, match="Duplicate component ID found: 'duplicate_id'"):
            widget = NodeFlowWidget()
            widget.add_node_type(
                type_name="test",
                label="Test",
                grid_layout=grid
            )
    
    def test_error_message_includes_node_type(self):
        """Test that error messages include the node type name."""
        with pytest.raises(ValueError, match="Invalid grid layout for node type 'my_processor'"):
            grid = create_three_column_grid(
                center_components=[
                    NumberField(id="field1", value=10),
                    TextField(id="field1", value="duplicate")
                ]
            )
            
            widget = NodeFlowWidget()
            widget.add_node_type(
                type_name="my_processor",
                label="My Processor",
                grid_layout=grid
            )


class TestLabelInferenceIntegration:
    """Test label inference works in full widget integration."""
    
    def test_node_creation_without_labels(self):
        """Test creating a node without specifying labels."""
        widget = NodeFlowWidget()
        
        grid = create_three_column_grid(
            center_components=[
                NumberField(id="max_value", value=100),
                TextField(id="user_name", value="Alice"),
                BoolField(id="is_enabled", value=True)
            ]
        )
        
        widget.add_node_type(
            type_name="processor",
            label="Processor",
            grid_layout=grid
        )
        
        # Verify the template was created
        assert len(widget.node_templates) == 1
        template = widget.node_templates[0]
        
        # Check that components exist in the grid
        cells = template["definition"]["grid"]["cells"]
        assert len(cells) > 0
        
        # Find the center cell
        center_cell = next(
            cell for cell in cells 
            if cell["coordinates"]["col"] == 2
        )
        
        # Verify components have inferred labels
        components = center_cell["components"]
        assert len(components) == 3
        
        # Labels should be inferred from IDs
        assert components[0]["label"] == "Max Value"
        assert components[1]["label"] == "User Name"
        assert components[2]["label"] == "Is Enabled"
