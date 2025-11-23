/**
 * NodeBuilder utilities for common node configuration patterns.
 * 
 * These utilities provide convenient ways to create pre-configured node data
 * without requiring custom JavaScript code. All configurations can be used
 * directly from Python by constructing the appropriate data structures.
 */

import type { 
  CustomNodeData, 
  NodeHeaderConfig, 
  NodeFooterConfig, 
  NodeStyleConfig,
  FieldConfig,
  ValidationConfig 
} from "../types/schema";

/**
 * Builder class for creating configured nodes with a fluent API
 */
export class NodeBuilder {
  private data: Partial<CustomNodeData>;

  constructor(label: string) {
    this.data = {
      label,
      values: {},
    };
  }

  /**
   * Set the layout type
   */
  withLayout(layoutType: string): this {
    this.data.layoutType = layoutType;
    return this;
  }

  /**
   * Set handle types
   */
  withHandles(
    type: "base" | "button" | "labeled",
    inputType?: "base" | "button" | "labeled",
    outputType?: "base" | "button" | "labeled"
  ): this {
    this.data.handleType = type;
    if (inputType) this.data.inputHandleType = inputType;
    if (outputType) this.data.outputHandleType = outputType;
    return this;
  }

  /**
   * Configure the header
   */
  withHeader(config: NodeHeaderConfig): this {
    this.data.header = config;
    return this;
  }

  /**
   * Configure the footer
   */
  withFooter(config: NodeFooterConfig): this {
    this.data.footer = config;
    return this;
  }

  /**
   * Configure styles
   */
  withStyle(config: NodeStyleConfig): this {
    this.data.style = config;
    return this;
  }

  /**
   * Configure validation
   */
  withValidation(config: ValidationConfig): this {
    this.data.validation = config;
    return this;
  }

  /**
   * Set field configurations
   */
  withFieldConfigs(configs: Record<string, FieldConfig>): this {
    this.data.fieldConfigs = configs;
    return this;
  }

  /**
   * Add a single field configuration
   */
  withFieldConfig(fieldKey: string, config: FieldConfig): this {
    if (!this.data.fieldConfigs) {
      this.data.fieldConfigs = {};
    }
    this.data.fieldConfigs[fieldKey] = config;
    return this;
  }

  /**
   * Build the final node data
   */
  build(): Partial<CustomNodeData> {
    return this.data;
  }
}

/**
 * Pre-configured node templates
 */

/**
 * Create a minimal node configuration (no header, compact layout)
 */
export function createMinimalNode(label: string): Partial<CustomNodeData> {
  return {
    label,
    header: { show: false },
    style: {
      minWidth: "150px",
      shadow: "sm",
      className: "border",
    },
    layoutType: "compact",
    values: {},
  };
}

/**
 * Create a debug/inspector node (shows all internal state)
 */
export function createDebugNode(label: string = "Debug"): Partial<CustomNodeData> {
  return {
    label,
    header: {
      show: true,
      icon: "🔍",
      className: "bg-yellow-500 text-yellow-950",
    },
    footer: {
      show: true,
      text: "Debug mode enabled",
      className: "bg-yellow-50 text-yellow-800 border-yellow-200",
    },
    style: {
      className: "border-yellow-400",
      shadow: "lg",
    },
    validation: {
      showErrors: true,
      errorPosition: "inline",
      validateOnChange: true,
    },
    values: {},
  };
}

/**
 * Create a form-heavy node (optimized for many input fields)
 */
export function createFormNode(label: string): Partial<CustomNodeData> {
  return {
    label,
    header: {
      show: true,
      className: "bg-blue-600 text-white",
    },
    layoutType: "vertical",
    style: {
      minWidth: "300px",
      maxWidth: "500px",
      shadow: "md",
    },
    validation: {
      showErrors: true,
      errorPosition: "inline",
    },
    values: {},
  };
}

/**
 * Create a compact processing node (minimal UI, focus on I/O)
 */
export function createProcessingNode(label: string, icon?: string): Partial<CustomNodeData> {
  return {
    label,
    header: {
      show: true,
      icon: icon || "⚙️",
      className: "bg-gray-700 text-white",
    },
    layoutType: "horizontal",
    handleType: "button",
    style: {
      minWidth: "180px",
      shadow: "md",
    },
    values: {},
  };
}

/**
 * Create a data source node (emphasis on outputs)
 */
export function createSourceNode(label: string, icon?: string): Partial<CustomNodeData> {
  return {
    label,
    header: {
      show: true,
      icon: icon || "📥",
      className: "bg-green-600 text-white",
    },
    layoutType: "vertical",
    handleType: "labeled",
    style: {
      minWidth: "200px",
      shadow: "md",
      className: "border-green-500",
    },
    values: {},
  };
}

/**
 * Create a data sink node (emphasis on inputs)
 */
export function createSinkNode(label: string, icon?: string): Partial<CustomNodeData> {
  return {
    label,
    header: {
      show: true,
      icon: icon || "📤",
      className: "bg-red-600 text-white",
    },
    layoutType: "vertical",
    handleType: "labeled",
    style: {
      minWidth: "200px",
      shadow: "md",
      className: "border-red-500",
    },
    values: {},
  };
}

/**
 * Create a visualization node (larger, emphasis on display)
 */
export function createVisualizationNode(label: string): Partial<CustomNodeData> {
  return {
    label,
    header: {
      show: true,
      icon: "📊",
      className: "bg-purple-600 text-white",
    },
    layoutType: "vertical",
    style: {
      minWidth: "400px",
      shadow: "lg",
    },
    values: {},
  };
}

/**
 * Configuration preset for conditional field visibility
 */
export function createConditionalFields(
  triggerField: string,
  triggerValue: any,
  dependentFields: string[]
): Record<string, FieldConfig> {
  const configs: Record<string, FieldConfig> = {};
  
  for (const field of dependentFields) {
    configs[field] = {
      showWhen: {
        field: triggerField,
        operator: "equals",
        value: triggerValue,
      },
    };
  }
  
  return configs;
}

/**
 * Create a preset for readonly/display-only nodes
 */
export function createReadonlyNode(label: string): Partial<CustomNodeData> {
  return {
    label,
    header: {
      show: true,
      icon: "📋",
      className: "bg-slate-500 text-white",
    },
    style: {
      className: "opacity-90 border-slate-300",
      shadow: "sm",
    },
    values: {},
  };
}

/**
 * Apply readonly configuration to all fields
 */
export function makeAllFieldsReadonly(
  fieldKeys: string[]
): Record<string, FieldConfig> {
  const configs: Record<string, FieldConfig> = {};
  
  for (const key of fieldKeys) {
    configs[key] = { readonly: true };
  }
  
  return configs;
}

/**
 * Helper to merge node configurations
 */
export function mergeNodeConfigs(
  base: Partial<CustomNodeData>,
  override: Partial<CustomNodeData>
): Partial<CustomNodeData> {
  return {
    ...base,
    ...override,
    header: { ...base.header, ...override.header },
    footer: { ...base.footer, ...override.footer },
    style: { ...base.style, ...override.style },
    validation: { ...base.validation, ...override.validation },
    fieldConfigs: { ...base.fieldConfigs, ...override.fieldConfigs },
    values: { ...base.values, ...override.values },
  };
}
