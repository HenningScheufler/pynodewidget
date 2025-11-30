import React from "react";
import * as v from "valibot";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { PrimitiveFieldValue } from "@/types/schema";
import { useNodeDataContext } from "@/contexts/NodeDataContext";

// Valibot schema for SelectField component
export const SelectFieldSchema = v.object({
  id: v.string(),
  type: v.literal("select"),
  label: v.string(),
  value: v.optional(v.string()),
  options: v.optional(v.array(v.string())),
});

export type SelectField = v.InferOutput<typeof SelectFieldSchema>;

interface SelectFieldProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

type SelectFieldComponentProps = 
  | SelectFieldProps
  | { component: SelectField; onValueChange?: (id: string, value: PrimitiveFieldValue) => void };

export function SelectField(props: SelectFieldComponentProps) {
  // If schema component is passed, render with label
  if ('component' in props) {
    const { component, onValueChange } = props;
    const context = useNodeDataContext();
    
    // Get value from nodeData.values if context available, fallback to component.value
    const currentValue = (context?.nodeData.values?.[component.id] as string) ?? component.value ?? "";
    
    return (
      <div className="component-select-field">
        <label className="text-xs text-gray-600 mb-1">{component.label}</label>
        <Select value={currentValue} onValueChange={(value) => onValueChange?.(component.id, value)}>
          <SelectTrigger 
            className="h-8 text-xs"
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label={component.label}
          >
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            {(component.options || []).map((option) => (
              <SelectItem key={option} value={option} className="text-xs">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }
  
  // Otherwise handle simple props
  const { value, options, onChange, placeholder, label } = props;
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger 
        className="h-8 text-xs"
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label={label}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option} className="text-xs">
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
