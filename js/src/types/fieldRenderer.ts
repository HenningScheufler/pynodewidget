/**
 * Type definitions for field rendering system
 */

import type { JsonSchemaProperty } from "./schema";

/**
 * Valid field value types that can be stored in node data
 */
export type FieldValue = string | number | boolean | null;

/**
 * Props passed to field renderer components
 */
export interface FieldRendererProps {
  value: FieldValue;
  property: JsonSchemaProperty;
  onChange: (value: FieldValue) => void;
  label?: string;
}

/**
 * Function signature for field renderer components
 */
export type FieldRenderer = (props: FieldRendererProps) => JSX.Element;
