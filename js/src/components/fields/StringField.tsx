import React from "react";
import { Input } from "@/components/ui/input";

interface StringFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function StringField({ value, onChange, placeholder, label }: StringFieldProps) {
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
