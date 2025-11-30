/**
 * Type definitions for node data structures
 * 
 * Component types (BaseHandle, TextField, etc.) have been migrated to Valibot schemas
 * and are now defined in their respective component files.
 * Import them from: @/components/ComponentFactory or individual component files
 */

// Import component types - these are now defined with Valibot
import type { 
  ComponentType, 
  Handle,
  GridCell,
  NodeGrid,
} from "@/components/ComponentFactory";

import type {
  GridCoordinates,
  CellLayout,
  GridLayoutComponent,
} from "@/components/layouts/GridLayoutComponent";

// Import individual component types for convenience
import type { BaseHandle } from "@/components/handles/BaseHandle";
import type { LabeledHandle } from "@/components/handles/LabeledHandle";
import type { ButtonHandle } from "@/components/handles/ButtonHandle";
import type { TextField } from "@/components/fields/StringField";
import type { NumberField } from "@/components/fields/NumberField";
import type { BoolField } from "@/components/fields/BooleanField";
import type { SelectField } from "@/components/fields/SelectField";
import type { HeaderComponent } from "@/components/HeaderComponent";
import type { FooterComponent } from "@/components/FooterComponent";
import type { ButtonComponent } from "@/components/ButtonComponent";
import type { DividerComponent } from "@/components/DividerComponent";
import type { SpacerComponent } from "@/components/SpacerComponent";

// Re-export all types for convenience
export type { 
  // Union types
  ComponentType, 
  Handle, 
  GridCell, 
  NodeGrid, 
  GridCoordinates, 
  CellLayout,
  GridLayoutComponent,
  // Handle types
  BaseHandle,
  LabeledHandle,
  ButtonHandle,
  // Field types
  TextField,
  NumberField,
  BoolField,
  SelectField,
  // UI component types
  HeaderComponent,
  FooterComponent,
  ButtonComponent,
  DividerComponent,
  SpacerComponent,
};

export interface HandleConfig {
  id: string;
  label: string;
  handle_type?: "base" | "button" | "labeled";
}

// =============================================================================
// FIELD VALUE TYPES
// =============================================================================

/**
 * Primitive field values - union of all allowed value types
 */
export type PrimitiveFieldValue = string | number | boolean | null;

/**
 * Configuration for node styling
 */
export interface NodeStyleConfig {
  minWidth?: string | number; // Minimum width (e.g., "200px" or 200)
  maxWidth?: string | number; // Maximum width
  className?: string; // Additional CSS classes for the card
  borderRadius?: string; // Border radius (e.g., "8px")
  shadow?: "sm" | "md" | "lg" | "xl" | "none"; // Shadow size
}

/**
 * Configuration for validation display
 */
export interface ValidationConfig {
  showErrors?: boolean; // Show validation errors inline (default: false)
  errorPosition?: "inline" | "tooltip" | "footer"; // Where to show errors
  validateOnChange?: boolean; // Validate as user types (default: false)
}

/**
 * Configuration for conditional field visibility
 */
export interface FieldCondition {
  field: string; // Field to check
  operator: "equals" | "notEquals" | "greaterThan" | "lessThan" | "contains";
  value: PrimitiveFieldValue; // Value to compare against
}

/**
 * Configuration for individual field customization
 */
export interface FieldConfig {
  hidden?: boolean; // Hide this field
  disabled?: boolean; // Disable editing
  readonly?: boolean; // Read-only display
  showWhen?: FieldCondition; // Conditional visibility
  tooltip?: string; // Tooltip text
  className?: string; // Custom CSS classes
}

export interface ContextMenuState {
  id: string;
  type: "node" | "edge";
  x: number;
  y: number;
}

// =============================================================================
// CORE ARCHITECTURE: Template + Instance Split
// =============================================================================

/**
 * FieldValue - Alias for primitive field values
 */
export type FieldValue = PrimitiveFieldValue;

/**
 * NodeDefinition - Template-level visual structure (immutable, shared)
 * Defines HOW a node looks
 * Stored once per node type, referenced by many instances
 */
export interface NodeDefinition {
  grid: NodeGrid;                        // Three-layer grid structure
  style?: NodeStyleConfig;               // Optional styling
}

/**
 * NodeTemplate - Complete node type definition
 * Registered once, used to create many node instances
 */
export interface NodeTemplate {
  type: string;                          // Unique type identifier
  label: string;                         // Display name
  description?: string;                  // Description
  icon?: string;                         // Icon (emoji or path)
  category?: string;                     // Category for organization
  definition: NodeDefinition;            // Visual structure (grid + style)
  defaultValues: Record<string, PrimitiveFieldValue>; // Default field values
}

/**
 * NodeInstance - Instance-level data (mutable, per-node)
 * Defines WHAT values a specific node instance has
 * This is synced with Python
 */
export interface NodeInstance {
  id: string;                            // Unique instance ID
  type: string;                          // References a NodeTemplate.type
  position: { x: number; y: number };    // Position in canvas
  values: Record<string, PrimitiveFieldValue>; // Field values
}

/**
 * NodesDict - Dict of nodes keyed by ID (from Python)
 * Python sends dict, JS converts to array for React Flow
 */
export type NodesDict = Record<string, Node>;

/**
 * NodeValues - Field values keyed by node ID
 * Synced separately from node structure for efficiency
 */
export type NodeValues = Record<string, Record<string, PrimitiveFieldValue>>;
