/**
 * Type definitions for JSON Schema and node data structures
 */

export type JsonSchemaType = "string" | "number" | "integer" | "boolean" | "object" | "array";

export interface JsonSchemaProperty {
  type: JsonSchemaType;
  title?: string;
  default?: string | number | boolean | null;
  enum?: Array<string | number>;
  description?: string;
}

export interface JsonSchema {
  type: "object";
  title?: string;
  properties: Record<string, JsonSchemaProperty>;
  required?: string[];
}

export interface HandleConfig {
  id: string;
  label: string;
  handle_type?: "base" | "button" | "labeled";
}

/**
 * Valid field value type
 */
export type FieldValue = string | number | boolean | null;

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
  parameters?: JsonSchema;
  values?: Record<string, FieldValue>;
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
  
  // Layout configuration
  layoutType?: string;
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

// Re-export field renderer types for convenience
export type { FieldRenderer, FieldRendererProps } from "./fieldRenderer";
