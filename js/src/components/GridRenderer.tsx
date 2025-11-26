/**
 * Grid Renderers: Three-layer architecture implementation
 * 
 * Layer 1: NodeGridRenderer - Positions cells using CSS Grid
 * Layer 2: GridCellRenderer - Layouts components within a cell
 * Layer 3: ComponentFactory - Renders individual components
 */

import React from "react";
import type { NodeGrid, GridCell, CellLayout } from "../types/schema";
import { ComponentFactory } from "./ComponentFactory";

interface NodeGridRendererProps {
  grid: NodeGrid;
  nodeId: string;
  onValueChange?: (componentId: string, value: any) => void;
}

/**
 * Layer 1: Node Grid Renderer
 * Positions cells using CSS Grid
 */
export function NodeGridRenderer({ grid, nodeId, onValueChange }: NodeGridRendererProps) {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: grid.rows.join(" "),
    gridTemplateColumns: grid.columns.join(" "),
    gap: grid.gap || "8px",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="node-grid" style={gridStyle}>
      {grid.cells.map((cell) => (
        <div
          key={cell.id}
          className="grid-cell"
          style={{
            gridRow: `${cell.coordinates.row} / span ${cell.coordinates.row_span || 1}`,
            gridColumn: `${cell.coordinates.col} / span ${cell.coordinates.col_span || 1}`,
          }}
        >
          <GridCellRenderer 
            cell={cell} 
            nodeId={nodeId}
            onValueChange={onValueChange}
          />
        </div>
      ))}
    </div>
  );
}

interface GridCellRendererProps {
  cell: GridCell;
  nodeId: string;
  onValueChange?: (componentId: string, value: any) => void;
}

/**
 * Layer 2: Grid Cell Renderer
 * Layouts components within a cell
 */
function GridCellRenderer({ cell, nodeId, onValueChange }: GridCellRendererProps) {
  const layout = cell.layout || { type: "flex", direction: "column" };
  const cellStyle = getCellStyle(layout);

  return (
    <div className="grid-cell-content" style={cellStyle}>
      {cell.components.map((component) => (
        <ComponentFactory 
          key={component.id} 
          component={component}
          nodeId={nodeId}
          onValueChange={onValueChange}
        />
      ))}
    </div>
  );
}

/**
 * Convert CellLayout to CSS styles
 */
function getCellStyle(layout: CellLayout): React.CSSProperties {
  if (layout.type === "flex" || !layout.type) {
    return {
      display: "flex",
      flexDirection: layout.direction || "column",
      alignItems: layout.align || "start",
      justifyContent: layout.justify || "start",
      gap: layout.gap || "4px",
    };
  }
  
  if (layout.type === "grid") {
    return {
      display: "grid",
      gap: layout.gap || "4px",
      alignItems: layout.align || "start",
      justifyContent: layout.justify || "start",
    };
  }
  
  if (layout.type === "stack") {
    return {
      display: "flex",
      flexDirection: "column",
      gap: layout.gap || "4px",
    };
  }
  
  return {};
}
