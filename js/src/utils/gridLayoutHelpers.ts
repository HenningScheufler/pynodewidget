/**
 * Helper utilities for creating grid layouts.
 * 
 * These utilities make it easy to create common grid layouts for nodes,
 * providing convenient factory functions for typical patterns.
 */

import type { NodeGridLayoutConfig, GridLayout, GridItem } from "../types/grid";

/**
 * Create a simple horizontal grid layout (inputs | parameters | outputs)
 */
export function createHorizontalGridLayout(): NodeGridLayoutConfig {
  return {
    type: "grid",
    layout: {
      grid: {
        rows: 1,
        cols: ["auto", "1fr", "auto"],
        gap: "12px",
      },
      items: [
        {
          id: "inputs",
          coordinates: { row: 1, col: 1, row_span: 1, col_span: 1 },
          content: { type: "inputs" },
        },
        {
          id: "parameters",
          coordinates: { row: 1, col: 2, row_span: 1, col_span: 1 },
          content: { type: "parameters" },
        },
        {
          id: "outputs",
          coordinates: { row: 1, col: 3, row_span: 1, col_span: 1 },
          content: { type: "outputs" },
        },
      ],
    },
  };
}

/**
 * Create a simple vertical grid layout (inputs / parameters / outputs)
 */
export function createVerticalGridLayout(): NodeGridLayoutConfig {
  return {
    type: "grid",
    layout: {
      grid: {
        rows: ["auto", "1fr", "auto"],
        cols: 1,
        gap: "8px",
      },
      items: [
        {
          id: "inputs",
          coordinates: { row: 1, col: 1, row_span: 1, col_span: 1 },
          content: { type: "inputs" },
        },
        {
          id: "parameters",
          coordinates: { row: 2, col: 1, row_span: 1, col_span: 1 },
          content: { type: "parameters" },
        },
        {
          id: "outputs",
          coordinates: { row: 3, col: 1, row_span: 1, col_span: 1 },
          content: { type: "outputs" },
        },
      ],
    },
  };
}

/**
 * Create a compact grid layout (just parameters)
 */
export function createCompactGridLayout(): NodeGridLayoutConfig {
  return {
    type: "grid",
    layout: {
      grid: {
        rows: 1,
        cols: 1,
        gap: "4px",
      },
      items: [
        {
          id: "parameters",
          coordinates: { row: 1, col: 1, row_span: 1, col_span: 1 },
          content: { type: "parameters" },
        },
      ],
    },
  };
}

/**
 * Create a custom grid layout with specified configuration
 */
export function createCustomGridLayout(
  rows: number | string[],
  cols: number | string[],
  items: GridItem[],
  options?: {
    gap?: string | [string, string];
    class_name?: string;
    style?: React.CSSProperties;
  }
): NodeGridLayoutConfig {
  return {
    type: "grid",
    layout: {
      grid: {
        rows,
        cols,
        gap: options?.gap || "8px",
      },
      items,
      class_name: options?.class_name,
      style: options?.style,
    },
  };
}

/**
 * Create a 2-column layout with inputs on left, outputs on right, parameters below
 */
export function createTwoColumnGridLayout(): NodeGridLayoutConfig {
  return {
    type: "grid",
    layout: {
      grid: {
        rows: ["auto", "1fr"],
        cols: 2,
        gap: "8px",
      },
      items: [
        {
          id: "inputs",
          coordinates: { row: 1, col: 1, row_span: 1, col_span: 1 },
          content: { type: "inputs" },
        },
        {
          id: "outputs",
          coordinates: { row: 1, col: 2, row_span: 1, col_span: 1 },
          content: { type: "outputs" },
        },
        {
          id: "parameters",
          coordinates: { row: 2, col: 1, row_span: 1, col_span: 2 },
          content: { type: "parameters" },
        },
      ],
    },
  };
}

/**
 * Create a sidebar layout with inputs/outputs on sides, parameters in center
 */
export function createSidebarGridLayout(): NodeGridLayoutConfig {
  return {
    type: "grid",
    layout: {
      grid: {
        rows: 1,
        cols: ["60px", "1fr", "60px"],
        gap: "8px",
      },
      items: [
        {
          id: "inputs",
          coordinates: { row: 1, col: 1, row_span: 1, col_span: 1 },
          content: { type: "inputs" },
        },
        {
          id: "parameters",
          coordinates: { row: 1, col: 2, row_span: 1, col_span: 1 },
          content: { type: "parameters" },
        },
        {
          id: "outputs",
          coordinates: { row: 1, col: 3, row_span: 1, col_span: 1 },
          content: { type: "outputs" },
        },
      ],
    },
  };
}
