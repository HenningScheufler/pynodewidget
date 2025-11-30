"""
Tests for Nested Grid Layout functionality
"""

import pytest
from pynodewidget.models import (
    NodeGrid,
    GridCell,
    GridCoordinates,
    CellLayout,
    GridLayoutComponent,
    TextField,
    NumberField,
    BaseHandle,
)


def test_grid_layout_component_basic():
    """Test basic GridLayoutComponent creation"""
    grid_layout = GridLayoutComponent(
        id="test-grid",
        type="grid-layout",
        rows=["auto", "1fr"],
        columns=["1fr", "1fr"],
        gap="8px",
        cells=[],
    )
    
    assert grid_layout.id == "test-grid"
    assert grid_layout.type == "grid-layout"
    assert grid_layout.rows == ["auto", "1fr"]
    assert grid_layout.columns == ["1fr", "1fr"]
    assert grid_layout.gap == "8px"
    assert grid_layout.cells == []


def test_grid_layout_component_with_cells():
    """Test GridLayoutComponent with cells"""
    grid_layout = GridLayoutComponent(
        id="test-grid",
        type="grid-layout",
        rows=["auto"],
        columns=["1fr"],
        cells=[
            GridCell(
                id="cell1",
                coordinates=GridCoordinates(row=1, col=1),
                components=[
                    TextField(
                        id="field1",
                        type="text",
                        label="Test Field",
                        value="Hello",
                    )
                ],
            )
        ],
    )
    
    assert len(grid_layout.cells) == 1
    assert grid_layout.cells[0].id == "cell1"
    assert len(grid_layout.cells[0].components) == 1
    assert grid_layout.cells[0].components[0].type == "text"


def test_nested_grid_layout_one_level():
    """Test single level of nesting"""
    node_grid = NodeGrid(
        rows=["auto"],
        columns=["1fr"],
        cells=[
            GridCell(
                id="main-cell",
                coordinates=GridCoordinates(row=1, col=1),
                components=[
                    GridLayoutComponent(
                        id="nested-grid",
                        type="grid-layout",
                        rows=["auto", "1fr"],
                        columns=["200px", "1fr"],
                        cells=[
                            GridCell(
                                id="nested-cell",
                                coordinates=GridCoordinates(row=1, col=1),
                                components=[
                                    TextField(
                                        id="field1",
                                        type="text",
                                        label="Nested Field",
                                    )
                                ],
                            )
                        ],
                    )
                ],
            )
        ],
    )
    
    assert len(node_grid.cells) == 1
    assert len(node_grid.cells[0].components) == 1
    
    nested_grid = node_grid.cells[0].components[0]
    assert nested_grid.type == "grid-layout"
    assert len(nested_grid.cells) == 1


def test_nested_grid_layout_two_levels():
    """Test two levels of nesting"""
    node_grid = NodeGrid(
        rows=["auto"],
        columns=["1fr"],
        cells=[
            GridCell(
                id="outer-cell",
                coordinates=GridCoordinates(row=1, col=1),
                components=[
                    GridLayoutComponent(
                        id="level1-grid",
                        type="grid-layout",
                        rows=["auto"],
                        columns=["1fr"],
                        cells=[
                            GridCell(
                                id="level1-cell",
                                coordinates=GridCoordinates(row=1, col=1),
                                components=[
                                    GridLayoutComponent(
                                        id="level2-grid",
                                        type="grid-layout",
                                        rows=["auto"],
                                        columns=["1fr"],
                                        cells=[
                                            GridCell(
                                                id="level2-cell",
                                                coordinates=GridCoordinates(row=1, col=1),
                                                components=[
                                                    TextField(
                                                        id="deep-field",
                                                        type="text",
                                                        label="Deep Field",
                                                    )
                                                ],
                                            )
                                        ],
                                    )
                                ],
                            )
                        ],
                    )
                ],
            )
        ],
    )
    
    # Navigate to level 1
    level1_grid = node_grid.cells[0].components[0]
    assert level1_grid.type == "grid-layout"
    assert level1_grid.id == "level1-grid"
    
    # Navigate to level 2
    level2_grid = level1_grid.cells[0].components[0]
    assert level2_grid.type == "grid-layout"
    assert level2_grid.id == "level2-grid"
    
    # Navigate to the deep field
    deep_field = level2_grid.cells[0].components[0]
    assert deep_field.type == "text"
    assert deep_field.id == "deep-field"


def test_grid_layout_serialization():
    """Test that nested grids can be serialized to JSON"""
    node_grid = NodeGrid(
        rows=["auto"],
        columns=["1fr"],
        cells=[
            GridCell(
                id="main",
                coordinates=GridCoordinates(row=1, col=1),
                components=[
                    GridLayoutComponent(
                        id="nested",
                        type="grid-layout",
                        rows=["auto"],
                        columns=["1fr"],
                        cells=[
                            GridCell(
                                id="nested-cell",
                                coordinates=GridCoordinates(row=1, col=1),
                                components=[
                                    TextField(id="field", type="text", label="Test")
                                ],
                            )
                        ],
                    )
                ],
            )
        ],
    )
    
    # Test JSON serialization
    json_data = node_grid.model_dump_json()
    assert json_data is not None
    assert "grid-layout" in json_data
    
    # Test JSON deserialization
    node_grid_restored = NodeGrid.model_validate_json(json_data)
    assert node_grid_restored.cells[0].id == "main"
    nested_grid = node_grid_restored.cells[0].components[0]
    assert nested_grid.type == "grid-layout"


def test_grid_layout_mixed_components():
    """Test grid layout with mixed component types"""
    node_grid = NodeGrid(
        rows=["auto"],
        columns=["1fr"],
        cells=[
            GridCell(
                id="mixed-cell",
                coordinates=GridCoordinates(row=1, col=1),
                components=[
                    TextField(id="field1", type="text", label="Before Grid"),
                    GridLayoutComponent(
                        id="middle-grid",
                        type="grid-layout",
                        rows=["auto"],
                        columns=["1fr"],
                        cells=[
                            GridCell(
                                id="inner",
                                coordinates=GridCoordinates(row=1, col=1),
                                components=[
                                    NumberField(
                                        id="num1",
                                        type="number",
                                        label="Number",
                                        value=42,
                                    )
                                ],
                            )
                        ],
                    ),
                    TextField(id="field2", type="text", label="After Grid"),
                ],
            )
        ],
    )
    
    components = node_grid.cells[0].components
    assert len(components) == 3
    assert components[0].type == "text"
    assert components[1].type == "grid-layout"
    assert components[2].type == "text"


def test_grid_layout_optional_fields():
    """Test optional fields on GridLayoutComponent"""
    grid_layout = GridLayoutComponent(
        id="test-grid",
        type="grid-layout",
        rows=["auto"],
        columns=["1fr"],
        cells=[],
        minHeight="100px",
        minWidth="200px",
        className="custom-grid",
    )
    
    assert grid_layout.minHeight == "100px"
    assert grid_layout.minWidth == "200px"
    assert grid_layout.className == "custom-grid"


def test_grid_layout_default_gap():
    """Test default gap value"""
    grid_layout = GridLayoutComponent(
        id="test-grid",
        type="grid-layout",
        rows=["auto"],
        columns=["1fr"],
        cells=[],
    )
    
    assert grid_layout.gap == "8px"  # Default value


def test_complex_nested_structure():
    """Test a complex nested structure with multiple levels and components"""
    node_grid = NodeGrid(
        rows=["auto"],
        columns=["1fr"],
        cells=[
            GridCell(
                id="root",
                coordinates=GridCoordinates(row=1, col=1),
                components=[
                    GridLayoutComponent(
                        id="level1",
                        type="grid-layout",
                        rows=["auto", "1fr"],
                        columns=["200px", "1fr"],
                        cells=[
                            # Sidebar
                            GridCell(
                                id="sidebar",
                                coordinates=GridCoordinates(row=1, col=1, row_span=2),
                                components=[
                                    BaseHandle(
                                        id="input",
                                        type="base-handle",
                                        handle_type="input",
                                        label="Input",
                                    ),
                                    TextField(
                                        id="name",
                                        type="text",
                                        label="Name",
                                    ),
                                ],
                            ),
                            # Header
                            GridCell(
                                id="header",
                                coordinates=GridCoordinates(row=1, col=2),
                                components=[
                                    TextField(id="title", type="text", label="Title")
                                ],
                            ),
                            # Content with nested grid
                            GridCell(
                                id="content",
                                coordinates=GridCoordinates(row=2, col=2),
                                components=[
                                    GridLayoutComponent(
                                        id="level2",
                                        type="grid-layout",
                                        rows=["1fr"],
                                        columns=["1fr", "1fr"],
                                        cells=[
                                            GridCell(
                                                id="left",
                                                coordinates=GridCoordinates(row=1, col=1),
                                                components=[
                                                    NumberField(
                                                        id="val1",
                                                        type="number",
                                                        label="Value 1",
                                                    )
                                                ],
                                            ),
                                            GridCell(
                                                id="right",
                                                coordinates=GridCoordinates(row=1, col=2),
                                                components=[
                                                    NumberField(
                                                        id="val2",
                                                        type="number",
                                                        label="Value 2",
                                                    )
                                                ],
                                            ),
                                        ],
                                    )
                                ],
                            ),
                        ],
                    )
                ],
            )
        ],
    )
    
    # Validate structure
    assert len(node_grid.cells) == 1
    level1_grid = node_grid.cells[0].components[0]
    assert level1_grid.type == "grid-layout"
    assert len(level1_grid.cells) == 3
    
    # Check nested grid in content cell
    content_cell = level1_grid.cells[2]
    assert content_cell.id == "content"
    level2_grid = content_cell.components[0]
    assert level2_grid.type == "grid-layout"
    assert len(level2_grid.cells) == 2


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
