import React from "react";
import * as v from "valibot";
import { Input } from "@/components/ui/input";
import type { PrimitiveFieldValue } from "@/types/schema";
import { useNodeDataContext } from "@/contexts/NodeDataContext";

/**
 * Infer a human-readable label from a component ID.
 * Handles underscores, hyphens, and camelCase.
 */
function inferLabelFromId(id: string): string {
  // Replace underscores and hyphens with spaces
  let label = id.replace(/[_-]/g, ' ');
  
  // Insert spaces before capital letters in camelCase (but not at the start)
  label = label.replace(/(?<!^)(?=[A-Z])/g, ' ');
  
  // Title case each word
  label = label.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
  
  return label;
}

// Valibot schema for TextField component
export const TextFieldSchema = v.object({
  id: v.string(),
  type: v.literal("text"),
  label: v.optional(v.string()),
  value: v.optional(v.string()),
  placeholder: v.optional(v.string()),
});

export type TextField = v.InferOutput<typeof TextFieldSchema>;

interface StringFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

type StringFieldComponentProps = 
  | StringFieldProps
  | { component: TextField; onValueChange?: (id: string, value: PrimitiveFieldValue) => void };

export function StringField(props: StringFieldComponentProps) {
  // If schema component is passed, render with label
  if ('component' in props) {
    const { component, onValueChange } = props;
    const context = useNodeDataContext();
    
    // Get value from nodeData.values if context available, fallback to component.value
    const currentValue = (context?.nodeData.values?.[component.id] as string) ?? component.value ?? "";
    
    // Infer label from id if not provided
    const displayLabel = component.label ?? inferLabelFromId(component.id);
    
    return (
      <div className="component-text-field">
        <label className="text-xs text-gray-600 mb-1">{displayLabel}</label>
        <Input
          type="text"
          value={currentValue}
          onChange={(e) => onValueChange?.(component.id, e.target.value)}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          placeholder={component.placeholder}
          aria-label={displayLabel}
          className="h-8 text-xs"
        />
      </div>
    );
  }
  
  // Otherwise handle simple props
  const { value, onChange, placeholder, label } = props;
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      placeholder={placeholder}
      aria-label={label}
      className="h-8 text-xs"
    />
  );
}
