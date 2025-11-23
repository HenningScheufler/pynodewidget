/**
 * NodeComponentBuilder - Builds React components from schema definitions
 * 
 * This builder takes a schema/configuration object from Python and generates
 * an optimized React component that can be registered in ReactFlow's nodeTypes.
 * 
 * Key features:
 * - Resolves layout and handle types at build time (not render time)
 * - Pre-computes static parts (header, footer, styles)
 * - Returns memoized component for optimal performance
 * - Validates schema structure and throws clear errors
 */

import * as React from "react";
import type { NodeProps } from "@xyflow/react";
import type { ComponentType } from "react";
import type { 
  CustomNodeData, 
  NodeTemplate,
  FieldValue,
} from "../types/schema";
import { getLayout } from "../components/layouts/LayoutFactory";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { NodeForm } from "../components/NodeForm";
import { cn } from "@/lib/utils";
import { useSetNodeValues } from "../index";

/**
 * NodeComponentBuilder class
 * 
 * @example
 * ```typescript
 * const schema: CustomNodeData = {
 *   label: "Processor",
 *   layoutType: "horizontal",
 *   handleType: "button",
 *   header: { show: true, icon: "⚙️" }
 * };
 * 
 * const component = NodeComponentBuilder.buildComponent(schema);
 * nodeFactory.register("processor", component);
 * ```
 */
export class NodeComponentBuilder {
  private schema: CustomNodeData;
  private LayoutComponent: ReturnType<typeof getLayout>;

  constructor(schema: CustomNodeData) {
    this.schema = schema;
    
    // Resolve layout at build time
    this.LayoutComponent = getLayout(schema.layoutType);
    if (!this.LayoutComponent) {
      throw new Error(`Unknown layoutType: "${schema.layoutType}".`);
    }
  }

  /**
   * Build header configuration and pre-render header element
   */
  private buildHeaderConfig() {
    const { header, label, icon } = this.schema;
    const showHeader = header?.show !== false;
    const headerIcon = header?.icon || icon;
    
    return {
      show: showHeader,
      element: showHeader ? (
        <CardHeader 
          className={cn(
            "p-2.5 space-y-0 px-2.5",
            header?.className || "bg-primary text-primary-foreground"
          )}
          style={{
            backgroundColor: header?.bgColor,
            color: header?.textColor,
          }}
        >
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            {headerIcon && <span className="text-base">{headerIcon}</span>}
            {label}
          </CardTitle>
        </CardHeader>
      ) : null
    };
  }

  /**
   * Build footer configuration and pre-render footer element
   */
  private buildFooterConfig() {
    const { footer } = this.schema;
    const showFooter = footer?.show === true;
    
    return {
      show: showFooter,
      element: showFooter && footer ? (
        <CardFooter 
          className={cn(
            "p-2 px-2.5 text-xs text-muted-foreground border-t",
            footer.className
          )}
        >
          {footer.text}
        </CardFooter>
      ) : null
    };
  }

  /**
   * Build style configuration and compute CSS properties
   */
  private buildStyleConfig() {
    const { style } = this.schema;
    
    const cardStyle: React.CSSProperties = {};
    if (style?.minWidth) {
      cardStyle.minWidth = typeof style.minWidth === 'number' 
        ? `${style.minWidth}px` 
        : style.minWidth;
    }
    if (style?.maxWidth) {
      cardStyle.maxWidth = typeof style.maxWidth === 'number'
        ? `${style.maxWidth}px`
        : style.maxWidth;
    }
    if (style?.borderRadius) {
      cardStyle.borderRadius = style.borderRadius;
    }
    
    const shadowClass = style?.shadow 
      ? `shadow-${style.shadow}`
      : "shadow-md";
    
    return {
      style: cardStyle,
      className: cn(
        "min-w-[200px] border-2 transition-all overflow-hidden p-0 gap-0",
        shadowClass,
        style?.className
      )
    };
  }

  /**
   * Build the complete React component with all configuration baked in
   * 
   * Returns a memoized component that only re-renders when necessary
   * (when id, selected, or values change).
   */
  buildComponent(): ComponentType<NodeProps> {
    const { schema, LayoutComponent } = this;
    const headerConfig = this.buildHeaderConfig();
    const footerConfig = this.buildFooterConfig();
    const styleConfig = this.buildStyleConfig();

    // Generate component with all config baked into closure
    const GeneratedNode: React.FC<NodeProps> = ({ id, data, selected }) => {
      const nodeData = data as CustomNodeData;
      const setNodeValues = useSetNodeValues();

      const handleInputChange = React.useCallback((key: string, value: FieldValue) => {
        setNodeValues(prev => ({
          ...prev,
          [id]: { ...prev[id], [key]: value }
        }));
      }, [id, setNodeValues]);

      return (
        <Card 
          className={cn(
            styleConfig.className,
            selected && "border-primary shadow-lg ring-2 ring-primary/20"
          )}
          style={styleConfig.style}
        >
          {headerConfig.element}
          
          <LayoutComponent 
            inputs={nodeData.inputs || schema.inputs} 
            outputs={nodeData.outputs || schema.outputs}
            handleType={schema.handleType}
            inputHandleType={schema.inputHandleType}
            outputHandleType={schema.outputHandleType}
          >
            {nodeData.parameters && (
              <NodeForm
                nodeId={id}
                parameters={nodeData.parameters}
                values={nodeData.values}
                onValueChange={handleInputChange}
                fieldConfigs={nodeData.fieldConfigs}
                validation={nodeData.validation}
              />
            )}
          </LayoutComponent>
          
          {footerConfig.element}
        </Card>
      );
    };

    // Memoize for performance - only re-render if these props change
    return React.memo(GeneratedNode, (prev, next) => 
      prev.id === next.id && 
      prev.selected === next.selected &&
      prev.data.values === next.data.values
    );
  }

  /**
   * Static helper to build a component from schema in one call
   */
  static buildComponent(schema: CustomNodeData): ComponentType<NodeProps> {
    const builder = new NodeComponentBuilder(schema);
    return builder.buildComponent();
  }
}

/**
 * Build multiple node type components from templates
 * 
 * Takes an array of node templates and generates a nodeTypes object
 * suitable for ReactFlow's nodeTypes prop.
 * 
 * @param templates - Array of node templates from Python
 * @returns Record of node type names to React components
 * @throws Error if any template has invalid configuration
 * 
 * @example
 * ```typescript
 * const nodeTypes = buildNodeTypes(nodeTemplates);
 * <ReactFlow nodeTypes={nodeTypes} ... />
 * ```
 */
export function buildNodeTypes(templates: NodeTemplate[]): Record<string, ComponentType<NodeProps>> {
  const nodeTypes: Record<string, ComponentType<NodeProps>> = {};
  
  for (const template of templates) {
    try {
      nodeTypes[template.type] = NodeComponentBuilder.buildComponent(template.defaultData);
    } catch (error) {
      console.error(`Failed to build component for node type "${template.type}":`, error);
      throw error;
    }
  }
  
  return nodeTypes;
}
