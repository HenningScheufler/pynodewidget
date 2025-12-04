"""Preset grid layout configurations."""

from dataclasses import dataclass
from typing import Dict, List, Tuple, TYPE_CHECKING

if TYPE_CHECKING:
    from ..models import NodeGrid, CellLayout


@dataclass
class PresetConfig:
    """Configuration for a layout preset.
    
    Attributes:
        name: Unique identifier for the preset
        rows: CSS grid row definitions (e.g., ['auto', '1fr'])
        columns: CSS grid column definitions (e.g., ['auto', '1fr', 'auto'])
        slot_mappings: Maps slot names to (row, col, row_span, col_span) tuples
        default_layouts: Default CellLayout config for each slot
    """
    name: str
    rows: List[str]
    columns: List[str]
    slot_mappings: Dict[str, Tuple[int, int, int, int]]  # (row, col, row_span, col_span)
    default_layouts: Dict[str, Dict[str, str]]  # slot_name -> layout kwargs
    
    def build(self, slots: Dict[str, List], gap: str) -> 'NodeGrid':
        """Build a NodeGrid from slot assignments.
        
        Args:
            slots: Dictionary mapping slot names to component lists
            gap: Gap between cells
            
        Returns:
            Constructed NodeGrid
            
        Raises:
            ValueError: If unknown slot name is provided
        """
        from ..models import NodeGrid, GridCell, GridCoordinates, CellLayout
        
        cells = []
        for slot_name, components in slots.items():
            if slot_name not in self.slot_mappings:
                valid_slots = ', '.join(self.slot_mappings.keys())
                raise ValueError(
                    f"Unknown slot '{slot_name}' for preset '{self.name}'. "
                    f"Valid slots: {valid_slots}"
                )
            
            row, col, row_span, col_span = self.slot_mappings[slot_name]
            layout_kwargs = self.default_layouts.get(slot_name, {})
            
            cells.append(GridCell(
                id=f"{slot_name}-cell",
                coordinates=GridCoordinates(
                    row=row,
                    col=col,
                    row_span=row_span,
                    col_span=col_span
                ),
                layout=CellLayout(**layout_kwargs),
                components=components
            ))
        
        return NodeGrid(
            rows=self.rows,
            columns=self.columns,
            gap=gap,
            cells=cells
        )


# Preset definitions
PRESETS = {
    "three_column": PresetConfig(
        name="three_column",
        rows=["auto", "1fr", "auto"],
        columns=["auto", "1fr", "auto"],
        slot_mappings={
            "header": (1, 1, 1, 3),
            "left": (2, 1, 1, 1),
            "center": (2, 2, 1, 1),
            "right": (2, 3, 1, 1),
            "footer": (3, 1, 1, 3),
        },
        default_layouts={
            "header": {"type": "flex", "direction": "row", "justify": "space-between", "align": "center", "gap": "8px"},
            "left": {"type": "flex", "direction": "column", "align": "stretch", "gap": "8px"},
            "center": {"type": "flex", "direction": "column", "gap": "12px"},
            "right": {"type": "flex", "direction": "column", "align": "stretch", "gap": "8px"},
            "footer": {"type": "flex", "direction": "row", "justify": "center", "gap": "8px"},
        }
    ),
    
    "simple_node": PresetConfig(
        name="simple_node",
        rows=["auto", "1fr"],
        columns=["auto", "1fr", "auto"],
        slot_mappings={
            "header": (1, 1, 1, 3),
            "input": (2, 1, 1, 1),
            "center": (2, 2, 1, 1),
            "output": (2, 3, 1, 1),
        },
        default_layouts={
            "header": {"type": "flex", "direction": "row", "justify": "space-between", "align": "center", "gap": "8px"},
            "input": {"type": "flex", "direction": "column", "align": "center", "justify": "center", "gap": "4px"},
            "center": {"type": "flex", "direction": "column", "gap": "8px"},
            "output": {"type": "flex", "direction": "column", "align": "center", "justify": "center", "gap": "4px"},
        }
    ),
}
