import React from "react";
import type { GridCell, PrimitiveFieldValue } from "@/types/schema";
import { ComponentFactory } from "../ComponentFactory";

interface GridCellComponentProps {
  cell: GridCell;
  nodeId: string;
  onValueChange?: (id: string, value: PrimitiveFieldValue) => void;
}

/**
 * Grid Cell Component - Renders a cell within a grid
 */
export function GridCellComponent({
  cell,
  nodeId,
  onValueChange,
}: GridCellComponentProps) {
  const layout = cell.layout || { type: "flex", direction: "column" };
  const cellStyle = getCellStyle(cell);
  const layoutStyle = getLayoutStyle(layout);

  return (
    <div className="nested-grid-cell" style={cellStyle}>
      <div className="nested-grid-cell-content" style={layoutStyle}>
        {cell.components.map((component) => (
          <ComponentFactory
            key={component.id}
            component={component}
            nodeId={nodeId}
            onValueChange={onValueChange}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Get cell positioning style
 */
function getCellStyle(cell: GridCell): React.CSSProperties {
  return {
    gridRow: `${cell.coordinates.row} / span ${cell.coordinates.row_span || 1}`,
    gridColumn: `${cell.coordinates.col} / span ${cell.coordinates.col_span || 1}`,
  };
}

/**
 * Get layout style for cell content
 */
function getLayoutStyle(layout?: GridCell['layout']): React.CSSProperties {
  if (!layout || layout.type === "flex" || !layout.type) {
    return {
      display: "flex",
      flexDirection: layout?.direction || "column",
      alignItems: layout?.align || "start",
      justifyContent: layout?.justify || "start",
      gap: layout?.gap || "4px",
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
