import React from "react";
import type { JsonSchema, FieldValue, FieldConfig, ValidationConfig } from "../types/schema";
import { FieldFactory } from "./fields/FieldFactory";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface NodeFormProps {
  nodeId: string;
  parameters: JsonSchema;
  values?: Record<string, FieldValue>;
  onValueChange: (key: string, value: FieldValue) => void;
  fieldConfigs?: Record<string, FieldConfig>;
  validation?: ValidationConfig;
}

export function NodeForm({ 
  nodeId, 
  parameters, 
  values, 
  onValueChange, 
  fieldConfigs,
  validation 
}: NodeFormProps) {
  if (!parameters?.properties) {
    return null;
  }

  /**
   * Check if a field should be visible based on conditional configuration
   */
  const isFieldVisible = (key: string, config?: FieldConfig): boolean => {
    if (config?.hidden) return false;
    
    if (config?.showWhen) {
      const condition = config.showWhen;
      const conditionValue = values?.[condition.field];
      
      switch (condition.operator) {
        case "equals":
          return conditionValue === condition.value;
        case "notEquals":
          return conditionValue !== condition.value;
        case "greaterThan":
          return Number(conditionValue) > Number(condition.value);
        case "lessThan":
          return Number(conditionValue) < Number(condition.value);
        case "contains":
          return String(conditionValue).includes(String(condition.value));
        default:
          return true;
      }
    }
    
    return true;
  };

  return (
    <div 
      className="p-3 flex flex-col gap-2.5"
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      {Object.entries(parameters.properties).map(([key, prop]) => {
        const fieldConfig = fieldConfigs?.[key];
        
        // Skip hidden fields or conditionally invisible fields
        if (!isFieldVisible(key, fieldConfig)) {
          return null;
        }
        
        const value = values?.[key] ?? prop.default ?? "";
        const isRequired = parameters.required?.includes(key);
        const inputId = `node-${nodeId}-field-${key}`;
        const isDisabled = fieldConfig?.disabled || fieldConfig?.readonly;

        return (
          <div 
            key={key} 
            className={cn("flex flex-col gap-1", fieldConfig?.className)}
            title={fieldConfig?.tooltip}
          >
            <Label 
              htmlFor={inputId}
              className={cn(
                "text-xs font-medium flex items-center gap-1",
                isRequired && "after:content-['*'] after:text-destructive after:ml-0.5",
                isDisabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {prop.title || key}
            </Label>
            <FieldFactory
              fieldKey={key}
              property={prop}
              value={value}
              onChange={(v) => !isDisabled && onValueChange(key, v)}
              inputId={inputId}
            />
          </div>
        );
      })}
    </div>
  );
}
