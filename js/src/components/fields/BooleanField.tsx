import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface BooleanFieldProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

export function BooleanField({ value, onChange, label }: BooleanFieldProps) {
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
