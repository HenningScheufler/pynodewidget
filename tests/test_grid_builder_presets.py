"""Tests for GridBuilder preset functionality."""

import pytest
from pynodewidget.layout import GridBuilder, PRESETS
from pynodewidget.models import (
    TextField, NumberField, LabeledHandle, NodeGrid
)


def test_preset_names():
    """Test that all expected presets exist."""
    assert "three_column" in PRESETS
    assert "holy_grail" in PRESETS
    assert "sidebar" in PRESETS
    assert "header_body" in PRESETS


def test_gridbuilder_preset_initialization():
    """Test creating GridBuilder with preset."""
    builder = GridBuilder.preset("three_column")
    assert builder._preset == "three_column"


def test_gridbuilder_preset_unknown_raises():
    """Test that unknown preset raises ValueError."""
    with pytest.raises(ValueError, match="Unknown preset"):
        GridBuilder.preset("unknown_preset")


def test_gridbuilder_slot_without_preset_raises():
    """Test that using slot() without preset raises ValueError."""
    builder = GridBuilder()
    
    with pytest.raises(ValueError, match="slot\\(\\) can only be used with preset layouts"):
        builder.slot("left", [TextField(id="test", label="Test")])


def test_preset_three_column():
    """Test three_column preset."""
    input_handle = LabeledHandle(id="in1", handle_type="input", label="Input")
    text_field = TextField(id="name", label="Name", value="test")
    output_handle = LabeledHandle(id="out1", handle_type="output", label="Output")
    
    grid = (GridBuilder.preset("three_column")
            .slot("left", [input_handle])
            .slot("center", [text_field])
            .slot("right", [output_handle])
            .build())
    
    assert isinstance(grid, NodeGrid)
    assert grid.rows == ["1fr"]
    assert grid.columns == ["auto", "1fr", "auto"]
    assert len(grid.cells) == 3
    
    # Check left cell
    left_cell = next(c for c in grid.cells if c.id == "left-cell")
    assert left_cell.coordinates.row == 1
    assert left_cell.coordinates.col == 1
    assert len(left_cell.components) == 1
    assert left_cell.components[0].id == "in1"
    
    # Check center cell
    center_cell = next(c for c in grid.cells if c.id == "center-cell")
    assert center_cell.coordinates.row == 1
    assert center_cell.coordinates.col == 2
    assert center_cell.components[0].id == "name"
    
    # Check right cell
    right_cell = next(c for c in grid.cells if c.id == "right-cell")
    assert right_cell.coordinates.row == 1
    assert right_cell.coordinates.col == 3
    assert right_cell.components[0].id == "out1"


def test_preset_three_column_partial_slots():
    """Test three_column preset with only some slots filled."""
    text_field = TextField(id="name", label="Name")
    
    grid = (GridBuilder.preset("three_column")
            .slot("center", [text_field])
            .build())
    
    assert len(grid.cells) == 1
    assert grid.cells[0].id == "center-cell"


def test_preset_holy_grail():
    """Test holy_grail preset."""
    from pynodewidget.models import HeaderComponent, ButtonHandle
    
    header = HeaderComponent(id="h1", label="Header")
    left_input = ButtonHandle(id="in1", handle_type="input", label="Input")
    main_field = TextField(id="main", label="Main Content")
    right_output = ButtonHandle(id="out1", handle_type="output", label="Output")
    footer = HeaderComponent(id="f1", label="Footer")
    
    grid = (GridBuilder.preset("holy_grail")
            .slot("header", [header])
            .slot("left", [left_input])
            .slot("main", [main_field])
            .slot("right", [right_output])
            .slot("footer", [footer])
            .build())
    
    assert isinstance(grid, NodeGrid)
    assert grid.rows == ["auto", "1fr", "auto"]
    assert grid.columns == ["auto", "1fr", "auto"]
    assert len(grid.cells) == 5
    
    # Check header spans full width
    header_cell = next(c for c in grid.cells if c.id == "header-cell")
    assert header_cell.coordinates.col_span == 3
    
    # Check footer spans full width
    footer_cell = next(c for c in grid.cells if c.id == "footer-cell")
    assert footer_cell.coordinates.col_span == 3


def test_preset_sidebar():
    """Test sidebar preset."""
    from pynodewidget.models import ButtonHandle
    
    sidebar_input = ButtonHandle(id="in1", handle_type="input", label="Sidebar")
    main_field = TextField(id="main", label="Main")
    
    grid = (GridBuilder.preset("sidebar")
            .slot("sidebar", [sidebar_input])
            .slot("main", [main_field])
            .build())
    
    assert grid.rows == ["1fr"]
    assert grid.columns == ["auto", "1fr"]
    assert len(grid.cells) == 2


def test_preset_header_body():
    """Test header_body preset."""
    from pynodewidget.models import HeaderComponent
    
    header = HeaderComponent(id="h1", label="My Node")
    body_field = TextField(id="field1", label="Field")
    
    grid = (GridBuilder.preset("header_body")
            .slot("header", [header])
            .slot("body", [body_field])
            .build())
    
    assert grid.rows == ["auto", "1fr"]
    assert grid.columns == ["1fr"]
    assert len(grid.cells) == 2


def test_preset_invalid_slot_name():
    """Test that invalid slot name raises ValueError."""
    text_field = TextField(id="test", label="Test")
    
    builder = (GridBuilder.preset("three_column")
               .slot("invalid_slot", [text_field]))
    
    with pytest.raises(ValueError, match="Unknown slot 'invalid_slot'"):
        builder.build()


def test_preset_custom_gap():
    """Test preset with custom gap."""
    text_field = TextField(id="test", label="Test")
    
    grid = (GridBuilder.preset("three_column")
            .gap("16px")
            .slot("center", [text_field])
            .build())
    
    assert grid.gap == "16px"


def test_preset_multiple_components_in_slot():
    """Test adding multiple components to a slot."""
    fields = [
        TextField(id="f1", label="Field 1"),
        NumberField(id="f2", label="Field 2", value=10),
        TextField(id="f3", label="Field 3"),
    ]
    
    grid = (GridBuilder.preset("three_column")
            .slot("center", fields)
            .build())
    
    center_cell = grid.cells[0]
    assert len(center_cell.components) == 3
    assert center_cell.components[0].id == "f1"
    assert center_cell.components[1].id == "f2"
    assert center_cell.components[2].id == "f3"
