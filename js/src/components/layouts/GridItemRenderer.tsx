/**
 * Renders a single grid item with proper positioning.
 * 
 * This component:
 * - Converts GridCoordinates to CSS grid-area
 * - Applies custom styling and classes
 * - Delegates content rendering to ContentRenderer
 */

import React from "react";
import type { GridItem, GridCoordinates } from "../../types/grid";
import { ContentRenderer } from "./ContentRenderer";

interface GridItemRendererProps {
  item: GridItem;
}

/**
 * GridItemRenderer - positions and renders a single grid item
 */
export const GridItemRenderer: React.FC<GridItemRendererProps> = ({ item }) => {
  const gridArea = buildGridArea(item.coordinates);
  
  return (
    <div
      className={`grid-item ${item.class_name || ""}`.trim()}
      style={{
        gridArea,
        ...item.style,
      }}
      data-grid-item-id={item.id}
    >
      <ContentRenderer content={item.content} />
    </div>
  );
};

/**
 * Convert GridCoordinates to CSS grid-area value
 * 
 * Format: row-start / col-start / row-end / col-end
 * Example: 1 / 1 / 3 / 4 (spans from row 1 to row 3, col 1 to col 4)
 */
function buildGridArea(coords: GridCoordinates): string {
  const rowEnd = coords.row + coords.row_span;
  const colEnd = coords.col + coords.col_span;
  return `${coords.row} / ${coords.col} / ${rowEnd} / ${colEnd}`;
}
