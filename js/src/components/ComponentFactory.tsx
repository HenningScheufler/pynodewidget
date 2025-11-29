/**
 * Component Factory: Renders components based on discriminated union type
 * 
 * This is the core of the three-layer architecture. It takes a Component
 * discriminated union and renders the appropriate React component.
 */

import * as v from "valibot";
import type { PrimitiveFieldValue } from "../types/schema";

// Import component schemas
import { BaseHandle, BaseHandleSchema } from "./handles/BaseHandle";
import { LabeledHandle, LabeledHandleSchema } from "./handles/LabeledHandle";
import { ButtonHandle, ButtonHandleSchema } from "./handles/ButtonHandle";
import { StringField, TextFieldSchema } from "./fields/StringField";
import { NumberField, NumberFieldSchema } from "./fields/NumberField";
import { BooleanField, BoolFieldSchema } from "./fields/BooleanField";
import { SelectField, SelectFieldSchema } from "./fields/SelectField";
import { ProgressField, ProgressFieldSchema } from "./fields/ProgressField";
import { HeaderComponent, HeaderComponentSchema } from "./HeaderComponent";
import { FooterComponent, FooterComponentSchema } from "./FooterComponent";
import { ButtonComponent, ButtonComponentSchema } from "./ButtonComponent";
import { DividerComponent, DividerComponentSchema } from "./DividerComponent";
import { SpacerComponent, SpacerComponentSchema } from "./SpacerComponent";
import { 
  GridLayoutComponent, 
  GridCoordinatesSchema, 
  CellLayoutSchema,
  type GridCell,
  type NodeGrid,
} from "./layouts/GridLayoutComponent";

// Define ComponentType schema first (without grid-layout)
const BaseComponentTypeSchema = v.variant("type", [
  BaseHandleSchema,
  LabeledHandleSchema,
  ButtonHandleSchema,
  TextFieldSchema,
  NumberFieldSchema,
  BoolFieldSchema,
  SelectFieldSchema,
  ProgressFieldSchema,
  HeaderComponentSchema,
  FooterComponentSchema,
  ButtonComponentSchema,
  DividerComponentSchema,
  SpacerComponentSchema,
]);

// Now define GridCell schema that references ComponentType recursively
export const GridCellSchema: v.BaseSchema<unknown, GridCell, v.BaseIssue<unknown>> = v.object({
  id: v.string(),
  coordinates: GridCoordinatesSchema,
  layout: v.optional(CellLayoutSchema),
  components: v.array(v.lazy(() => ComponentTypeSchema)),
});

// Define GridLayoutComponent schema with proper GridCell reference
export const GridLayoutComponentSchema = v.object({
  id: v.string(),
  type: v.literal("grid-layout"),
  rows: v.array(v.string()),
  columns: v.array(v.string()),
  gap: v.optional(v.string()),
  cells: v.array(GridCellSchema),
  minHeight: v.optional(v.string()),
  minWidth: v.optional(v.string()),
  className: v.optional(v.string()),
});

// Complete ComponentType schema including grid-layout
export const ComponentTypeSchema = v.variant("type", [
  BaseHandleSchema,
  LabeledHandleSchema,
  ButtonHandleSchema,
  TextFieldSchema,
  NumberFieldSchema,
  BoolFieldSchema,
  SelectFieldSchema,
  ProgressFieldSchema,
  HeaderComponentSchema,
  FooterComponentSchema,
  ButtonComponentSchema,
  DividerComponentSchema,
  SpacerComponentSchema,
  GridLayoutComponentSchema,
]);

export type ComponentType = v.InferOutput<typeof ComponentTypeSchema>;

// Also export Handle union type for convenience
export const HandleSchema = v.variant("type", [
  BaseHandleSchema,
  LabeledHandleSchema,
  ButtonHandleSchema,
]);

export type Handle = v.InferOutput<typeof HandleSchema>;

// Export NodeGrid schema
export const NodeGridSchema = v.object({
  rows: v.array(v.string()),
  columns: v.array(v.string()),
  gap: v.optional(v.string()),
  cells: v.array(GridCellSchema),
});

export type { NodeGrid, GridCell };

interface ComponentFactoryProps {
  component: ComponentType;
  nodeId: string;
  onValueChange?: (componentId: string, value: PrimitiveFieldValue) => void;
}

/**
 * Main component factory - dispatches to the appropriate component
 */
export function ComponentFactory({ component, nodeId, onValueChange }: ComponentFactoryProps) {
  switch (component.type) {
    case "base-handle":
      return <BaseHandle component={component} />;
    
    case "labeled-handle":
      return <LabeledHandle component={component} />;
    
    case "button-handle":
      return <ButtonHandle component={component} />;
    
    case "text":
      return <StringField component={component} onValueChange={onValueChange} />;
    
    case "number":
      return <NumberField component={component} onValueChange={onValueChange} />;
    
    case "bool":
      return <BooleanField component={component} onValueChange={onValueChange} />;
    
    case "select":
      return <SelectField component={component} onValueChange={onValueChange} />;
    
    case "progress":
      return <ProgressField component={component} onValueChange={onValueChange} />;
    
    case "header":
      return <HeaderComponent component={component} />;
    
    case "footer":
      return <FooterComponent component={component} />;
    
    case "button":
      return <ButtonComponent component={component} onValueChange={onValueChange} />;
    
    case "divider":
      return <DividerComponent component={component} />;
    
    case "spacer":
      return <SpacerComponent component={component} />;
    
    case "grid-layout":
      return <GridLayoutComponent component={component} nodeId={nodeId} onValueChange={onValueChange} />;
    
    default:
      // TypeScript exhaustiveness check - if we reach here, we've handled all cases
      const _exhaustiveCheck: never = component;
      console.warn(`Unknown component type: ${(component as ComponentType).type}`);
      return null;
  }
}
