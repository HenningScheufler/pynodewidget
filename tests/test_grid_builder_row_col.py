"""Tests for GridBuilder row() and col() methods."""

import pytest
from pynodewidget.layout import GridBuilder
from pynodewidget.models import (
    TextField, NumberField, BoolField, HeaderComponent
)


def test_row_single_component():
    """Test adding a single component to a row."""
    text_field = TextField(id="f1", label="Field 1")
    
    grid = (GridBuilder()
            .row(1, text_field)
            .build())
    
    assert grid.rows == ["auto"]
    assert grid.columns == ["1fr"]
    assert len(grid.cells) == 1
    assert grid.cells[0].coordinates.row == 1
    assert grid.cells[0].coordinates.col == 1
    assert grid.cells[0].components[0].id == "f1"


def test_row_multiple_components():
    """Test adding multiple components to a row."""
    f1 = TextField(id="f1", label="Field 1")
    f2 = NumberField(id="f2", label="Field 2", value=0)
    f3 = BoolField(id="f3", label="Field 3")
    
    grid = (GridBuilder()
            .row(1, f1, f2, f3)
            .build())
    
    assert grid.rows == ["auto"]
    assert grid.columns == ["1fr", "1fr", "1fr"]
    assert len(grid.cells) == 3
    
    # Check each cell
    assert grid.cells[0].coordinates.col == 1
    assert grid.cells[0].components[0].id == "f1"
    
    assert grid.cells[1].coordinates.col == 2
    assert grid.cells[1].components[0].id == "f2"
    
    assert grid.cells[2].coordinates.col == 3
    assert grid.cells[2].components[0].id == "f3"


def test_row_multiple_rows():
    """Test adding multiple rows."""
    header = HeaderComponent(id="h1", label="Header")
    f1 = TextField(id="f1", label="Field 1")
    f2 = TextField(id="f2", label="Field 2")
    
    grid = (GridBuilder()
            .row(1, header)
            .row(2, f1, f2)
            .build())
    
    assert grid.rows == ["auto", "auto"]
    assert grid.columns == ["1fr", "1fr"]
    assert len(grid.cells) == 3
    
    # Check row 1
    assert grid.cells[0].coordinates.row == 1
    assert grid.cells[0].components[0].id == "h1"
    
    # Check row 2
    assert grid.cells[1].coordinates.row == 2
    assert grid.cells[1].coordinates.col == 1
    assert grid.cells[2].coordinates.row == 2
    assert grid.cells[2].coordinates.col == 2


def test_col_single_component():
    """Test adding a single component to a column."""
    text_field = TextField(id="f1", label="Field 1")
    
    grid = (GridBuilder()
            .col(1, text_field)
            .build())
    
    assert grid.rows == ["auto"]
    assert grid.columns == ["1fr"]
    assert len(grid.cells) == 1
    assert grid.cells[0].coordinates.row == 1
    assert grid.cells[0].coordinates.col == 1


def test_col_multiple_components():
    """Test adding multiple components to a column."""
    f1 = TextField(id="f1", label="Field 1")
    f2 = NumberField(id="f2", label="Field 2", value=0)
    f3 = BoolField(id="f3", label="Field 3")
    
    grid = (GridBuilder()
            .col(1, f1, f2, f3)
            .build())
    
    assert grid.rows == ["auto", "auto", "auto"]
    assert grid.columns == ["1fr"]
    assert len(grid.cells) == 3
    
    # Check each cell
    assert grid.cells[0].coordinates.row == 1
    assert grid.cells[0].components[0].id == "f1"
    
    assert grid.cells[1].coordinates.row == 2
    assert grid.cells[1].components[0].id == "f2"
    
    assert grid.cells[2].coordinates.row == 3
    assert grid.cells[2].components[0].id == "f3"


def test_col_multiple_columns():
    """Test adding multiple columns."""
    from pynodewidget.models import LabeledHandle
    
    in1 = LabeledHandle(id="in1", handle_type="input", label="Input 1")
    in2 = LabeledHandle(id="in2", handle_type="input", label="Input 2")
    out1 = LabeledHandle(id="out1", handle_type="output", label="Output 1")
    out2 = LabeledHandle(id="out2", handle_type="output", label="Output 2")
    
    grid = (GridBuilder()
            .col(1, in1, in2)
            .col(2, out1, out2)
            .build())
    
    assert grid.rows == ["auto", "auto"]
    assert grid.columns == ["1fr", "1fr"]
    assert len(grid.cells) == 4


def test_row_with_explicit_rows_cols():
    """Test row() with explicitly defined rows and cols."""
    f1 = TextField(id="f1", label="Field 1")
    f2 = TextField(id="f2", label="Field 2")
    
    grid = (GridBuilder()
            .rows("auto", "1fr")
            .cols("200px", "1fr")
            .row(1, f1, f2)
            .build())
    
    # Should keep explicit definitions
    assert grid.rows == ["auto", "1fr"]
    assert grid.columns == ["200px", "1fr"]


def test_col_with_explicit_rows_cols():
    """Test col() with explicitly defined rows and cols."""
    f1 = TextField(id="f1", label="Field 1")
    f2 = TextField(id="f2", label="Field 2")
    
    grid = (GridBuilder()
            .rows("100px", "200px")
            .cols("auto", "1fr")
            .col(1, f1, f2)
            .build())
    
    # Should keep explicit definitions
    assert grid.rows == ["100px", "200px"]
    assert grid.columns == ["auto", "1fr"]


def test_row_auto_expand_columns():
    """Test that row() auto-expands columns when needed."""
    f1 = TextField(id="f1", label="Field 1")
    f2 = TextField(id="f2", label="Field 2")
    f3 = TextField(id="f3", label="Field 3")
    f4 = TextField(id="f4", label="Field 4")
    
    grid = (GridBuilder()
            .row(1, f1, f2)
            .row(2, f3, f4, TextField(id="f5", label="Field 5"))
            .build())
    
    # Second row has 3 components, so columns should expand
    assert len(grid.columns) == 3
    assert grid.columns == ["1fr", "1fr", "1fr"]


def test_col_auto_expand_rows():
    """Test that col() auto-expands rows when needed."""
    f1 = TextField(id="f1", label="Field 1")
    f2 = TextField(id="f2", label="Field 2")
    f3 = TextField(id="f3", label="Field 3")
    f4 = TextField(id="f4", label="Field 4")
    
    grid = (GridBuilder()
            .col(1, f1, f2)
            .col(2, f3, f4, TextField(id="f5", label="Field 5"))
            .build())
    
    # Second column has 3 components, so rows should expand
    assert len(grid.rows) == 3
    assert grid.rows == ["auto", "auto", "auto"]


def test_row_empty_components():
    """Test that row() with no components does nothing."""
    grid = (GridBuilder()
            .rows("1fr")
            .cols("1fr")
            .row(1)
            .cell(1, 1, [TextField(id="f1", label="Field 1")])
            .build())
    
    # Should only have the cell we explicitly added
    assert len(grid.cells) == 1


def test_col_empty_components():
    """Test that col() with no components does nothing."""
    grid = (GridBuilder()
            .rows("1fr")
            .cols("1fr")
            .col(1)
            .cell(1, 1, [TextField(id="f1", label="Field 1")])
            .build())
    
    # Should only have the cell we explicitly added
    assert len(grid.cells) == 1


def test_mixed_row_col_cell():
    """Test mixing row(), col(), and cell() methods."""
    header = HeaderComponent(id="h1", label="Header")
    left_field = TextField(id="left", label="Left")
    center_field = TextField(id="center", label="Center")
    right_field = TextField(id="right", label="Right")
    
    grid = (GridBuilder()
            .row(1, header)
            .row(2, left_field, center_field)
            .cell(2, 3, [right_field], layout_type="flex", direction="row")
            .build())
    
    assert len(grid.cells) == 4
    assert grid.cells[0].components[0].id == "h1"
    assert grid.cells[1].components[0].id == "left"
    assert grid.cells[2].components[0].id == "center"
    assert grid.cells[3].components[0].id == "right"


def test_row_with_custom_gap():
    """Test row() with custom gap setting."""
    f1 = TextField(id="f1", label="Field 1")
    f2 = TextField(id="f2", label="Field 2")
    
    grid = (GridBuilder()
            .gap("16px")
            .row(1, f1, f2)
            .build())
    
    assert grid.gap == "16px"


def test_complex_layout_with_rows():
    """Test creating a complex layout using row()."""
    from pynodewidget.models import HeaderComponent, DividerComponent
    
    header = HeaderComponent(id="h1", label="My Node")
    divider = DividerComponent(id="d1")
    f1 = TextField(id="f1", label="Name")
    f2 = NumberField(id="f2", label="Age", value=0)
    f3 = BoolField(id="f3", label="Active")
    
    grid = (GridBuilder()
            .gap("12px")
            .row(1, header)
            .row(2, divider)
            .row(3, f1)
            .row(4, f2, f3)
            .build())
    
    assert len(grid.cells) == 5
    assert grid.gap == "12px"
    assert grid.rows == ["auto", "auto", "auto", "auto"]
