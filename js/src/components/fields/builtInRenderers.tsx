/**
 * Built-in field renderers for standard JSON schema types.
 */

import React from "react";
import { StringField } from "./StringField";
import { NumberField } from "./NumberField";
import { BooleanField } from "./BooleanField";
import { ProgressField } from "./ProgressField";
import type { FieldRenderer } from "../../types/fieldRenderer";
import { fieldRegistry } from "./FieldRegistry";

// String type renderer
const stringRenderer: FieldRenderer = ({ value, property, onChange, label }) => (
  <StringField
    value={String(value || "")}
    onChange={onChange}
    placeholder={property.description}
    label={label}
  />
);

// Number type renderer
const numberRenderer: FieldRenderer = ({ value, property, onChange, label }) => (
  <NumberField
    value={typeof value === "number" ? value : Number(value) || 0}
    onChange={onChange}
    isInteger={false}
    placeholder={property.description}
    label={label}
  />
);

// Integer type renderer
const integerRenderer: FieldRenderer = ({ value, property, onChange, label }) => (
  <NumberField
    value={typeof value === "number" ? value : Number(value) || 0}
    onChange={onChange}
    isInteger={true}
    placeholder={property.description}
    label={label}
  />
);

// Boolean type renderer
const booleanRenderer: FieldRenderer = ({ value, onChange, label }) => (
  <BooleanField value={!!value} onChange={onChange} label={label} />
);

// Progress type renderer
const progressRenderer: FieldRenderer = ({ value, property, onChange, label }) => (
  <ProgressField
    value={typeof value === "number" ? value : Number(value) || 0}
    onChange={onChange}
    property={property}
    label={label}
  />
);

// Default renderer for unknown types (generic JSON field)
export const defaultRenderer: FieldRenderer = ({ value, property, onChange, label }) => (
  <StringField
    value={value ? JSON.stringify(value) : ""}
    onChange={(v) => {
      try {
        onChange(JSON.parse(String(v)));
      } catch {
        onChange(v);
      }
    }}
    placeholder={property.description}
    label={label}
  />
);

/**
 * Register all built-in field renderers.
 * This is called automatically when the module is imported.
 */
export function registerBuiltInRenderers(): void {
  fieldRegistry.register("string", stringRenderer);
  fieldRegistry.register("number", numberRenderer);
  fieldRegistry.register("integer", integerRenderer);
  fieldRegistry.register("boolean", booleanRenderer);
  fieldRegistry.register("progress", progressRenderer);
}

// Auto-register built-in types
registerBuiltInRenderers();
