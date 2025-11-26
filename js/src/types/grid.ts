/**
 * TypeScript types for grid-based layout system.
 * 
 * This file defines a simplified grid layout system that positions existing
 * node components (inputs, outputs, parameters) in a CSS Grid.
 */

// =============================================================================
// ALIGNMENT TYPES
// =============================================================================

export type AlignmentType = "start" | "end" | "center" | "stretch" | "space-between";

// =============================================================================
// GRID COORDINATE SYSTEM
// =============================================================================

/**
 * Grid positioning with 1-based indexing (CSS Grid convention).
 */
export interface GridCoordinates {
  row: number;
  col: number;
  row_span: number;
  col_span: number;
}

// =============================================================================
// GRID DEFINITION
// =============================================================================

/**
 * Defines the grid structure (rows, columns, sizing, gaps).
 * 
 * Examples:
 * - Simple 3x3: { rows: 3, cols: 3 }
 * - Fixed sides: { rows: 1, cols: ["100px", "1fr", "100px"] }
 * - Header/footer: { rows: ["auto", "1fr", "auto"], cols: 3 }
 */
export interface GridDefinition {
  rows: number | string[];
  cols: number | string[];
  row_sizes?: string[];
  col_sizes?: string[];
  gap?: string | [string, string];
  auto_rows?: string;
  auto_cols?: string;
  justify_items?: AlignmentType;
  align_items?: AlignmentType;
}

// =============================================================================
// CONTENT AREA TYPES (What goes in each grid cell)
// =============================================================================

/**
 * Content area types - specifies what should be rendered in a grid cell
 */
export type ContentAreaType = "inputs" | "outputs" | "parameters";

/**
 * Content area configuration
 */
export interface ContentArea {
  type: ContentAreaType;
  // Future: Add filtering or customization options
  fields?: string[]; // For parameters: specific fields to show
  handleType?: string; // For inputs/outputs: override handle type
}

// =============================================================================
// GRID ITEM
// =============================================================================

/**
 * A single item in the grid layout.
 * Combines positioning (coordinates) with content (content area type).
 */
export interface GridItem {
  id: string;
  coordinates: GridCoordinates;
  content: ContentArea;
  class_name?: string;
  style?: React.CSSProperties;
}

// =============================================================================
// GRID LAYOUT (MAIN)
// =============================================================================

/**
 * Complete grid layout specification.
 * Supports recursive nesting via LayoutWidget.
 */
export interface GridLayout {
  grid: GridDefinition;
  items: GridItem[];
  class_name?: string;
  style?: React.CSSProperties;
}

// =============================================================================
// NODE INTEGRATION
// =============================================================================

/**
 * Configuration for node layouts in NodeComponentBuilder.
 * Extends GridLayout with node-specific metadata.
 */
export interface NodeGridLayoutConfig {
  type: "grid";
  layout: GridLayout;
  enable_handles?: boolean;
  handle_position?: string;
}
