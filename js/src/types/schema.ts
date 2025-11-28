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
 * Field value discriminated union for type-safe value handling
 * Use this when you need to know the exact type at compile time
 */
export type FieldValue = 
  | { type: 'string'; value: string }
  | { type: 'number'; value: number }
  | { type: 'boolean'; value: boolean }
  | { type: 'null'; value: null };

/**
 * Configuration for node header customization
 */
export interface NodeHeaderConfig {
  show?: boolean; // Whether to show the header (default: true)
  icon?: string; // Icon to display in header
  className?: string; // Custom CSS classes for header
  bgColor?: string; // Background color (CSS color string)
  textColor?: string; // Text color (CSS color string)
  showMinimize?: boolean; // Show minimize button (future)
}

/**
 * Configuration for node footer
 */
export interface NodeFooterConfig {
  show?: boolean; // Whether to show footer
  text?: string; // Footer text
  className?: string; // Custom CSS classes
}

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
  value: FieldValue; // Value to compare against
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

export interface CustomNodeData extends Record<string, unknown> {
  label: string;
  
  // Three-layer grid system (required)
  grid: NodeGrid;
  
  // Field values
  values?: Record<string, PrimitiveFieldValue>;
  
  // Layout configuration
  handleType?: "base" | "button" | "labeled"; // Global handle type
  inputHandleType?: "base" | "button" | "labeled"; // Input-specific handle type
  outputHandleType?: "base" | "button" | "labeled"; // Output-specific handle type
  
  // Enhanced configuration options
  header?: NodeHeaderConfig; // Header customization
  footer?: NodeFooterConfig; // Footer configuration
  style?: NodeStyleConfig; // Style customization
  validation?: ValidationConfig; // Validation settings
  fieldConfigs?: Record<string, FieldConfig>; // Per-field configuration
  description?: string; // Node description (shown as tooltip or in header)
  category?: string; // Node category for organization
  icon?: string; // Node icon (fallback if not in header config)
  
  // Behavior flags
  collapsible?: boolean; // Whether the node can be collapsed (future)
  resizable?: boolean; // Whether the node is resizable (future)
}

export interface NodeTemplate {
  type: string;
  label: string;
  description?: string;
  icon?: string;
  defaultData: CustomNodeData;
}

export interface ContextMenuState {
  id: string;
  type: "node" | "edge";
  x: number;
  y: number;
}

// =============================================================================
// NEW ARCHITECTURE: Template + Instance Split
// =============================================================================

/**
 * NodeDefinition - Template-level visual structure (immutable, shared)
 * Stored once per node type, referenced by many instances
 */
export interface NodeDefinition {
  grid: NodeGrid;
  style?: NodeStyleConfig;
}

/**
 * NodeTemplate - Complete node type definition
 * Registered once, used to create many node instances
 */
export interface NodeTemplateV2 {
  type: string;                          // Unique type identifier
  label: string;                         // Display name
  description?: string;                  // Description
  icon?: string;                         // Icon (emoji or path)
  definition: NodeDefinition;            // Visual structure
  defaultValues?: Record<string, FieldValue>; // Default field values
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
export type NodeValues = Record<string, Record<string, FieldValue>>;
