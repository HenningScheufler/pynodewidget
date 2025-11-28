/**
 * NodeComponentBuilder - Builds React components from schema definitions
 * 
 * This builder takes a schema/configuration object from Python and generates
 * an optimized React component that can be registered in ReactFlow's nodeTypes.
 * 
 * Key features:
 * - Uses three-layer grid system (NodeGrid → GridCell → ComponentType)
 * - Returns memoized component for optimal performance
 * - Validates schema structure and throws clear errors
 */

import * as React from "react";
import type { NodeProps } from "@xyflow/react";
import type { ComponentType } from "react";
import type { 
  CustomNodeData, 
  NodeTemplate,
  PrimitiveFieldValue,
  FieldValue,
} from "../types/schema";
import { NodeGridRenderer } from "../components/GridRenderer";
import { NodeDataContext } from "../contexts/NodeDataContext";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSetNodeValues } from "../index";

/**
 * Convert PrimitiveFieldValue to FieldValue discriminated union
 */
function toFieldValue(value: PrimitiveFieldValue): FieldValue {
  if (value === null) {
    return { type: 'null', value: null };
  }
  if (typeof value === 'string') {
    return { type: 'string', value };
  }
  if (typeof value === 'number') {
    return { type: 'number', value };
  }
  if (typeof value === 'boolean') {
    return { type: 'boolean', value };
  }
  throw new Error(`Unexpected value type: ${typeof value}`);
}

/**
 * NodeComponentBuilder class
 * 
 * @example
 * ```typescript
 * const schema: CustomNodeData = {
 *   label: "Processor",
 *   grid: {
 *     rows: ["auto", "1fr", "auto"],
 *     columns: ["1fr"],
 *     cells: [...]
 *   }
 * };
 * 
 * const component = NodeComponentBuilder.buildComponent(schema);
 * ```
 */
export class NodeComponentBuilder {
  private schema: CustomNodeData;

  constructor(schema: CustomNodeData) {
    this.schema = schema;
    
    // Validate that grid is provided
    if (!schema.grid) {
      throw new Error("'grid' property is required in schema. The old 'gridLayout' system has been removed.");
    }
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
   * Build the complete React component
   * 
   * Returns a memoized component that only re-renders when necessary
   * (when id, selected, or values change).
   */
  buildComponent(): ComponentType<NodeProps> {
    const { schema } = this;
    const styleConfig = this.buildStyleConfig();

    // Generate component with all config baked into closure
    const GeneratedNode: React.FC<NodeProps> = ({ id, data, selected }) => {
      const nodeData = data as CustomNodeData;
      const setNodeValues = useSetNodeValues();

      const handleInputChange = React.useCallback((key: string, value: PrimitiveFieldValue) => {
        setNodeValues(prev => ({
          ...prev,
          [id]: { ...prev[id], [key]: toFieldValue(value) }
        }));
      }, [id, setNodeValues]);

      // Use grid from runtime data or fallback to schema
      const grid = nodeData.grid || schema.grid;

      // Create context value
      const contextValue = React.useMemo(() => ({
        nodeId: id,
        nodeData,
        onValueChange: handleInputChange
      }), [id, nodeData, handleInputChange]);

      return (
        <Card 
          className={cn(
            styleConfig.className,
            selected && "border-primary shadow-lg ring-2 ring-primary/20"
          )}
          style={styleConfig.style}
        >
          <NodeDataContext.Provider value={contextValue}>
            <NodeGridRenderer 
              grid={grid}
              nodeId={id}
              onValueChange={handleInputChange}
            />
          </NodeDataContext.Provider>
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
      // Only log in non-test environments to avoid cluttering test output
      if (process.env.NODE_ENV !== 'test' && typeof process.env.VITEST === 'undefined') {
        console.error(`Failed to build component for node type "${template.type}":`, error);
      }
      throw error;
    }
  }
  
  return nodeTypes;
}
