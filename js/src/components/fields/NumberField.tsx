import React from "react";
import * as v from "valibot";
import { Input } from "@/components/ui/input";
import type { PrimitiveFieldValue } from "@/types/schema";
import { useNodeDataContext } from "@/contexts/NodeDataContext";

// Valibot schema for NumberField component
export const NumberFieldSchema = v.object({
  id: v.string(),
  type: v.literal("number"),
  label: v.string(),
  value: v.optional(v.number()),
  min: v.optional(v.number()),
  max: v.optional(v.number()),
});

export type NumberField = v.InferOutput<typeof NumberFieldSchema>;

interface NumberFieldProps {
  value: number;
  onChange: (value: number) => void;
  isInteger?: boolean;
  placeholder?: string;
  label?: string;
}

type NumberFieldComponentProps = 
  | NumberFieldProps
  | { component: NumberField; onValueChange?: (id: string, value: PrimitiveFieldValue) => void };

export function NumberField(props: NumberFieldComponentProps) {
  // If schema component is passed, render with label
  if ('component' in props) {
    const { component, onValueChange } = props;
    const context = useNodeDataContext();
    
    // Get value from nodeData.values if context available, fallback to component.value
    const currentValue = (context?.nodeData.values?.[component.id] as number) ?? component.value ?? 0;
    
    return (
      <div className="component-number-field">
        <label className="text-xs text-gray-600 mb-1">{component.label}</label>
        <Input
          type="number"
          value={currentValue}
          step="any"
          onChange={(e) => onValueChange?.(component.id, Number(e.target.value))}
          onMouseDownCapture={(e) => e.stopPropagation()}
          onPointerDownCapture={(e) => e.stopPropagation()}
          onWheel={(e) => e.currentTarget.blur()}
          aria-label={component.label}
          className="h-8 text-xs"
        />
      </div>
    );
  }
  
  // Otherwise handle simple props
  const { value, onChange, isInteger, placeholder, label } = props;
  return (
    <Input
      type="number"
      value={value}
      step={isInteger ? 1 : "any"}
      onChange={(e) => onChange(Number(e.target.value))}
      onMouseDownCapture={(e) => e.stopPropagation()}
      onPointerDownCapture={(e) => e.stopPropagation()}
      onWheel={(e) => e.currentTarget.blur()}
      placeholder={placeholder}
      aria-label={label}
      className="h-8 text-xs"
    />
  );
}
