/**
 * Field factory component that renders the appropriate field type
 * based on JSON schema property definitions.
 */

import React from "react";
import { SelectField } from "./SelectField";
import type { JsonSchemaProperty } from "../../types/schema";
import { fieldRegistry } from "./FieldRegistry";
import { defaultRenderer } from "./builtInRenderers";
import "./builtInRenderers"; // Ensure built-in types are registered

interface FieldFactoryProps {
  fieldKey: string;
  property: JsonSchemaProperty;
  value: string | number | boolean | null;
  onChange: (value: string | number | boolean | null) => void;
  inputId?: string;
}

/**
 * FieldFactory component that dynamically renders the appropriate field
 * based on the property type and enum constraints.
 * 
 * Uses the fieldRegistry to look up custom or built-in renderers.
 */
export function FieldFactory({ fieldKey, property, value, onChange, label, inputId }: FieldFactoryProps) {
  // Enum fields use select dropdown (takes precedence over type)
  if (property.enum) {
    return (
      <SelectField
        value={String(value || "")}
        options={property.enum.map(String)}
        onChange={onChange}
        placeholder={property.description}
        id={inputId}
        label={label}
      />
    );
  }

  // Get the appropriate renderer from registry, fallback to default
  const renderer = fieldRegistry.get(property.type) || defaultRenderer;
  return renderer({ value, property, onChange, id: inputId, label });
}

