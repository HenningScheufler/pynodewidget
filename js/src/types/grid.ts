/**
 * TypeScript types for grid-based layout system.
 * 
 * Old NodeGridLayoutConfig system has been removed.
 * The codebase now uses the three-layer system defined in schema.ts:
 * NodeGrid → GridCell → ComponentType
 * 
 * Kept minimal ContentArea types for backward compatibility only.
 */

// Minimal type kept for ContentRenderer backward compatibility
export type ContentAreaType = "inputs" | "outputs" | "parameters";

export interface ContentArea {
  type: ContentAreaType;
  fields?: string[]; // For parameters: specific fields to show
  handleType?: string; // For inputs/outputs: override handle type
}
