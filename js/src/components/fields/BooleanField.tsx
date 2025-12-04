import React from "react";
import * as v from "valibot";
import { Checkbox } from "@/components/ui/checkbox";
import type { PrimitiveFieldValue } from "@/types/schema";
import { useNodeDataContext } from "@/contexts/NodeDataContext";

// Valibot schema for BoolField component
export const BoolFieldSchema = v.object({
  id: v.string(),
  type: v.literal("bool"),
  label: v.string(),
  value: v.optional(v.boolean()),
});

export type BoolField = v.InferOutput<typeof BoolFieldSchema>;

interface BooleanFieldProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

type BooleanFieldComponentProps = 
  | BooleanFieldProps
  | { component: BoolField; onValueChange?: (id: string, value: PrimitiveFieldValue) => void };

export function BooleanField(props: BooleanFieldComponentProps) {
  // If schema component is passed, render with label
  if ('component' in props) {
    const { component, onValueChange } = props;
    const context = useNodeDataContext();
    
    // Get value from nodeData.values if context available, fallback to component.value
    const currentValue = (context?.nodeData.values?.[component.id] as boolean) ?? component.value ?? false;
    
    return (
      <div className="component-bool-field w-full flex items-center gap-2">
        <Checkbox
          checked={currentValue}
          onCheckedChange={(checked) => onValueChange?.(component.id, checked === true)}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label={component.label}
          className="h-4 w-4"
        />
        <label className="text-sm text-gray-700">{component.label}</label>
      </div>
    );
  }
  
  // Otherwise handle simple props
  const { value, onChange, label } = props;
  return (
    <Checkbox
      checked={value}
      onCheckedChange={(checked) => onChange(checked === true)}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      aria-label={label}
      className="h-4 w-4"
    />
  );
}
