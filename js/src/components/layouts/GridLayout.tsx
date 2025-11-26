/**
 * Main grid layout component.
 * Renders CSS Grid container and places items according to GridLayout spec.
 * 
 * This component handles:
 * - Grid container styling (template rows/cols, gaps, alignment)
 * - Rendering grid items with proper positioning
 * - Support for both numeric and string-based grid definitions
 */

import React from "react";
import type { GridLayout as GridLayoutType, GridDefinition } from "../../types/grid";
import { GridItemRenderer } from "./GridItemRenderer";

interface GridLayoutProps {
  layout: GridLayoutType;
  children?: React.ReactNode;
}

/**
 * GridLayout component - renders a CSS Grid container
 */
export const GridLayout: React.FC<GridLayoutProps> = ({ layout }) => {
  const gridStyle = buildGridStyle(layout.grid);
  
  return (
    <div
      className={`grid-layout ${layout.class_name || ""}`.trim()}
      style={{
        ...gridStyle,
        ...layout.style,
      }}
    >
      {layout.items.map((item) => (
        <GridItemRenderer key={item.id} item={item} />
      ))}
    </div>
  );
};

/**
 * Build CSS Grid style object from GridDefinition
 */
function buildGridStyle(grid: GridDefinition): React.CSSProperties {
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: buildTemplateValue(grid.rows, grid.row_sizes),
    gridTemplateColumns: buildTemplateValue(grid.cols, grid.col_sizes),
    gap: Array.isArray(grid.gap) ? `${grid.gap[0]} ${grid.gap[1]}` : grid.gap || "8px",
  };
  
  // Optional advanced properties
  if (grid.auto_rows) {
    style.gridAutoRows = grid.auto_rows;
  }
  
  if (grid.auto_cols) {
    style.gridAutoColumns = grid.auto_cols;
  }
  
  if (grid.justify_items) {
    style.justifyItems = grid.justify_items;
  }
  
  if (grid.align_items) {
    style.alignItems = grid.align_items;
  }
  
  return style;
}

/**
 * Build grid-template-* value from rows/cols specification
 * 
 * Handles three cases:
 * 1. Number: Creates equal tracks (repeat(n, 1fr))
 * 2. Number + sizes array: Uses explicit sizes
 * 3. String array: Uses sizes directly
 */
function buildTemplateValue(
  dimension: number | string[],
  sizes?: string[]
): string {
  if (typeof dimension === "number") {
    // If explicit sizes provided, use them
    if (sizes && sizes.length > 0) {
      return sizes.join(" ");
    }
    // Otherwise, create equal tracks
    return `repeat(${dimension}, 1fr)`;
  }
  // Dimension is already an array of size strings
  return dimension.join(" ");
}
