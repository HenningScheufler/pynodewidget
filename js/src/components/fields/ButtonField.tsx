import React from "react";
import * as v from "valibot";
import { Button } from "@/components/ui/button";
import type { PrimitiveFieldValue } from "@/types/schema";

// Valibot schema for ButtonField component
export const ButtonFieldSchema = v.object({
  id: v.string(),
  type: v.literal("button-field"),
  label: v.optional(v.string()),
  action: v.string(),
  variant: v.optional(v.picklist(["default", "destructive", "outline", "secondary", "ghost", "link"])),
  size: v.optional(v.picklist(["default", "sm", "lg", "icon"])),
  disabled: v.optional(v.boolean()),
});

export type ButtonFieldType = v.InferOutput<typeof ButtonFieldSchema>;

interface ButtonFieldProps {
  label: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
}

type ButtonFieldComponentProps = 
  | ButtonFieldProps
  | { component: ButtonFieldType; onValueChange?: (id: string, value: PrimitiveFieldValue) => void };

export function ButtonField(props: ButtonFieldComponentProps) {
  // If schema component is passed, render with component properties
  if ('component' in props) {
    const { component, onValueChange } = props;
    
    const handleClick = () => {
      if (onValueChange) {
        // Emit the action event
        onValueChange(component.id, component.action);
      }
      console.log(`Button action triggered: ${component.action}`);
    };
    
    return (
      <div className="component-button-field">
        <Button
          onClick={handleClick}
          variant={component.variant ?? "default"}
          size={component.size ?? "default"}
          disabled={component.disabled ?? false}
          onMouseDown={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          className="w-full"
        >
          {component.label ?? component.id}
        </Button>
      </div>
    );
  }
  
  // Otherwise handle simple props
  const { label, onClick, variant = "default", size = "default", disabled = false } = props;
  
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      className="w-full"
    >
      {label}
    </Button>
  );
}