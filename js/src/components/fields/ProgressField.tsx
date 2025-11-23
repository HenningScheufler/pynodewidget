import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressFieldProps {
  value: number;
  onChange?: (value: number) => void;
  label?: string;
  property?: {
    minimum?: number;
    maximum?: number;
    description?: string;
  };
}

export function ProgressField({ value, onChange, label, property }: ProgressFieldProps) {
  const max = property?.maximum ?? 100;
  const min = property?.minimum ?? 0;
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">
          {property?.description || "Progress"}
        </span>
        <span className="font-medium text-xs tabular-nums">
          {Math.round(percentage)}%
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}
