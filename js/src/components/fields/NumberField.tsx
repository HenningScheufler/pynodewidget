import React from "react";
import { Input } from "@/components/ui/input";

interface NumberFieldProps {
  value: number;
  onChange: (value: number) => void;
  isInteger?: boolean;
  placeholder?: string;
  label?: string;
}

export function NumberField({ value, onChange, isInteger, placeholder, label }: NumberFieldProps) {
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
