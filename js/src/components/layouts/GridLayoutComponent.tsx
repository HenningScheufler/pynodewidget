import React from "react";
import * as v from "valibot";
import type { PrimitiveFieldValue } from "@/types/schema";
import { GridCellComponent } from "./GridCellComponent";

// Valibot schema for GridCoordinates
export const GridCoordinatesSchema = v.object({
  row: v.number(),
  col: v.number(),
  row_span: v.optional(v.number()),
  col_span: v.optional(v.number()),
});

export type GridCoordinates = v.InferOutput<typeof GridCoordinatesSchema>;

// Valibot schema for CellLayout
export const CellLayoutSchema = v.object({
  type: v.optional(v.union([v.literal("flex"), v.literal("grid"), v.literal("stack")])),
  direction: v.optional(v.union([v.literal("row"), v.literal("column")])),
  align: v.optional(v.union([v.literal("start"), v.literal("center"), v.literal("end"), v.literal("stretch")])),
  justify: v.optional(v.union([v.literal("start"), v.literal("center"), v.literal("end"), v.literal("space-between")])),
  gap: v.optional(v.string()),
});

export type CellLayout = v.InferOutput<typeof CellLayoutSchema>;

// GridCell and NodeGrid schemas will be defined in ComponentFactory
// to avoid circular dependencies, since GridCell contains ComponentType[]
// We export the types here for convenience
export type GridCell = {
  id: string;
  coordinates: GridCoordinates;
  layout?: CellLayout;
  components: any[]; // ComponentType[] - defined in ComponentFactory
};

export type NodeGrid = {
  rows: string[];
  columns: string[];
  gap?: string;
  cells: GridCell[];
};

export type GridLayoutComponent = {
  id: string;
  type: "grid-layout";
  rows: string[];
  columns: string[];
  gap?: string;
  cells: GridCell[];
  minHeight?: string;
  minWidth?: string;
  className?: string;
};

interface GridLayoutComponentProps {
  component: GridLayoutComponent;
  nodeId: string;
  onValueChange?: (id: string, value: PrimitiveFieldValue) => void;
}

/**
 * Grid Layout Component
 * Renders a grid layout that can be nested within cells
 * This enables recursive composition of layouts
 */
export function GridLayoutComponent({
  component,
  nodeId,
  onValueChange,
}: GridLayoutComponentProps) {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: component.rows.join(" "),
    gridTemplateColumns: component.columns.join(" "),
    gap: component.gap || "8px",
    minHeight: component.minHeight,
    minWidth: component.minWidth,
  };

  return (
    <div 
      className={`nested-grid ${component.className || ""}`} 
      style={gridStyle}
    >
      {component.cells.map((cell) => (
        <GridCellComponent
          key={cell.id}
          cell={cell}
          nodeId={nodeId}
          onValueChange={onValueChange}
        />
      ))}
    </div>
  );
}
