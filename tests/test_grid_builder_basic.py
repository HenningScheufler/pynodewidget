"""Tests for GridBuilder basic functionality."""

import pytest
from pynodewidget.layout import GridBuilder
from pynodewidget.models import (
    TextField, NumberField, BoolField,
    LabeledHandle, NodeGrid, GridCell
)


def test_gridbuilder_initialization():
    """Test basic GridBuilder initialization."""
    builder = GridBuilder()
    assert builder._preset is None
    assert builder._rows is None
    assert builder._cols is None
    assert builder._gap == "8px"
    assert builder._slots == {}
    assert builder._cells == []


def test_gridbuilder_rows_cols_gap():
    """Test rows, cols, and gap configuration."""
    builder = GridBuilder()
    
    # Test rows
    builder.rows("auto", "1fr", "auto")
    assert builder._rows == ["auto", "1fr", "auto"]
    
    # Test cols
    builder.cols("80px", "1fr", "80px")
    assert builder._cols == ["80px", "1fr", "80px"]
    
    # Test gap
    builder.gap("12px")
    assert builder._gap == "12px"


def test_gridbuilder_chaining():
    """Test method chaining."""
    builder = (GridBuilder()
               .rows("auto", "1fr")
               .cols("1fr")
               .gap("10px"))
    
    assert builder._rows == ["auto", "1fr"]
    assert builder._cols == ["1fr"]
    assert builder._gap == "10px"


def test_gridbuilder_cell_method():
    """Test adding cells with cell() method."""
    text_field = TextField(id="name", label="Name", value="test")
    
    builder = (GridBuilder()
               .rows("auto")
               .cols("1fr")
               .cell(1, 1, [text_field],
                     layout_type="flex", direction="column", gap="8px"))
    
    assert len(builder._cells) == 1
    cell_data = builder._cells[0]
    assert cell_data["row"] == 1
    assert cell_data["col"] == 1
    assert cell_data["row_span"] == 1
    assert cell_data["col_span"] == 1
    assert cell_data["components"] == [text_field]
    assert cell_data["layout"]["type"] == "flex"
    assert cell_data["layout"]["direction"] == "column"
    assert cell_data["layout"]["gap"] == "8px"


def test_gridbuilder_cell_with_spanning():
    """Test cell with row and column spanning."""
    text_field = TextField(id="text", label="Text")
    
    builder = (GridBuilder()
               .rows("auto", "1fr")
               .cols("1fr", "1fr")
               .cell(1, 1, [text_field], row_span=2, col_span=2))
    
    cell_data = builder._cells[0]
    assert cell_data["row_span"] == 2
    assert cell_data["col_span"] == 2


def test_gridbuilder_build_from_cells():
    """Test building a NodeGrid from cells."""
    text_field = TextField(id="name", label="Name")
    number_field = NumberField(id="age", label="Age", value=30)
    
    grid = (GridBuilder()
            .rows("auto", "1fr")
            .cols("1fr")
            .cell(1, 1, [text_field])
            .cell(2, 1, [number_field])
            .build())
    
    assert isinstance(grid, NodeGrid)
    assert grid.rows == ["auto", "1fr"]
    assert grid.columns == ["1fr"]
    assert grid.gap == "8px"
    assert len(grid.cells) == 2
    
    # Check first cell
    assert grid.cells[0].coordinates.row == 1
    assert grid.cells[0].coordinates.col == 1
    assert len(grid.cells[0].components) == 1
    assert grid.cells[0].components[0].id == "name"
    
    # Check second cell
    assert grid.cells[1].coordinates.row == 2
    assert grid.cells[1].coordinates.col == 1
    assert len(grid.cells[1].components) == 1
    assert grid.cells[1].components[0].id == "age"


def test_gridbuilder_build_without_rows_raises():
    """Test that building without rows raises ValueError."""
    text_field = TextField(id="test", label="Test")
    
    builder = (GridBuilder()
               .cols("1fr")
               .cell(1, 1, [text_field]))
    
    with pytest.raises(ValueError, match="No rows defined"):
        builder.build()


def test_gridbuilder_build_without_cols_raises():
    """Test that building without columns raises ValueError."""
    text_field = TextField(id="test", label="Test")
    
    builder = (GridBuilder()
               .rows("1fr")
               .cell(1, 1, [text_field]))
    
    with pytest.raises(ValueError, match="No columns defined"):
        builder.build()


def test_gridbuilder_build_without_cells_raises():
    """Test that building without cells raises ValueError."""
    builder = (GridBuilder()
               .rows("1fr")
               .cols("1fr"))
    
    with pytest.raises(ValueError, match="No cells defined"):
        builder.build()


def test_gridbuilder_multiple_cells():
    """Test creating a grid with multiple cells."""
    components = [
        TextField(id="f1", label="Field 1"),
        TextField(id="f2", label="Field 2"),
        NumberField(id="f3", label="Field 3", value=0),
    ]
    
    grid = (GridBuilder()
            .rows("auto", "auto", "auto")
            .cols("1fr", "1fr")
            .cell(1, 1, [components[0]])
            .cell(1, 2, [components[1]])
            .cell(2, 1, [components[2]], col_span=2)
            .build())
    
    assert len(grid.cells) == 3
    assert grid.cells[2].coordinates.col_span == 2


def test_gridbuilder_custom_gap():
    """Test building grid with custom gap."""
    text_field = TextField(id="test", label="Test")
    
    grid = (GridBuilder()
            .rows("1fr")
            .cols("1fr")
            .gap("16px")
            .cell(1, 1, [text_field])
            .build())
    
    assert grid.gap == "16px"


def test_gridbuilder_layout_variations():
    """Test different layout configurations."""
    text_field = TextField(id="test", label="Test")
    
    # Test flex row layout
    grid1 = (GridBuilder()
             .rows("1fr")
             .cols("1fr")
             .cell(1, 1, [text_field], 
                   layout_type="flex", direction="row", align="center", justify="space-between")
             .build())
    
    assert grid1.cells[0].layout.type == "flex"
    assert grid1.cells[0].layout.direction == "row"
    assert grid1.cells[0].layout.align == "center"
    assert grid1.cells[0].layout.justify == "space-between"
    
    # Test stack layout
    grid2 = (GridBuilder()
             .rows("1fr")
             .cols("1fr")
             .cell(1, 1, [text_field], layout_type="stack", gap="12px")
             .build())
    
    assert grid2.cells[0].layout.type == "stack"
    assert grid2.cells[0].layout.gap == "12px"
