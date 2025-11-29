import React from "react";
import * as v from "valibot";
import { Progress } from "@/components/ui/progress";
import type { PrimitiveFieldValue } from "@/types/schema";
import { useNodeDataContext } from "@/contexts/NodeDataContext";

// Valibot schema for ProgressField component
export const ProgressFieldSchema = v.object({
  id: v.string(),
  type: v.literal("progress"),
  label: v.optional(v.string()),
  value: v.optional(v.number()),
  min: v.optional(v.number()),
  max: v.optional(v.number()),
});

export type ProgressFieldType = v.InferOutput<typeof ProgressFieldSchema>;

interface ProgressFieldProps {
  value: number;
  onChange?: (value: number) => void;
  label?: string;
  min?: number;
  max?: number;
}

type ProgressFieldComponentProps = 
  | ProgressFieldProps
  | { component: ProgressFieldType; onValueChange?: (id: string, value: PrimitiveFieldValue) => void };

export function ProgressField(props: ProgressFieldComponentProps) {
  // If schema component is passed, render with label
  if ('component' in props) {
    const { component } = props;
    const context = useNodeDataContext();
    
    // Get value from nodeData.values if context available, fallback to component.value
    const currentValue = (context?.nodeData.values?.[component.id] as number) ?? component.value ?? 0;
    const max = component.max ?? 100;
    const min = component.min ?? 0;
    const percentage = Math.min(100, Math.max(0, ((currentValue - min) / (max - min)) * 100));
    
    return (
      <div className="component-progress-field space-y-1.5">
        {component.label && (
          <label className="text-xs text-gray-600">{component.label}</label>
        )}
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            Progress
          </span>
          <span className="font-medium text-xs tabular-nums">
            {Math.round(percentage)}%
          </span>
        </div>
        <Progress value={percentage} className="h-2" />
      </div>
    );
  }
  
  // Otherwise handle simple props
  const { value, onChange, label, min = 0, max = 100 } = props;
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  
  return (
    <div className="space-y-1.5">
      {label && <label className="text-xs text-gray-600">{label}</label>}
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">
          Progress
        </span>
        <span className="font-medium text-xs tabular-nums">
          {Math.round(percentage)}%
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}
