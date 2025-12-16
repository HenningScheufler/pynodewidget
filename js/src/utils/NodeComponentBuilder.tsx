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
  NodeTemplate,
  NodeGrid,
  NodeStyleConfig,
  PrimitiveFieldValue,
  FieldValue,
} from "../types/schema";
import { NodeGridRenderer } from "../components/GridRenderer";
import { NodeDataContext, type NodeData } from "../contexts/NodeDataContext";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSetNodeValues } from "../contexts/StandaloneContexts";

/**
 * NodeComponentBuilder class
 * 
 * @example
 * ```typescript
 * const definition = {
 *   grid: {
 *     rows: ["auto", "1fr", "auto"],
 *     columns: ["1fr"],
 *     cells: [...]
 *   },
 *   style: { minWidth: "200px" }
 * };
 * 
 * const component = NodeComponentBuilder.buildComponent(definition, "Processor");
 * ```
 */
export class NodeComponentBuilder {
  private grid: NodeGrid;
  private style?: NodeStyleConfig;
  private label: string;

  constructor(grid: NodeGrid, style?: NodeStyleConfig, label: string = "Node") {
    this.grid = grid;
    this.style = style;
    this.label = label;
    
    // Validate that grid is provided
    if (!grid) {
      throw new Error("'grid' property is required in node definition.");
    }
  }

  /**
   * Build style configuration and compute CSS properties
   */
  private buildStyleConfig() {
    const { style } = this;
    
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
    const { grid, label } = this;
    const styleConfig = this.buildStyleConfig();

    // Generate component with all config baked into closure
    const GeneratedNode: React.FC<NodeProps> = ({ id, data, selected }) => {
      const nodeData = data as unknown as NodeData;
      const setNodeValues = useSetNodeValues();

      const handleInputChange = React.useCallback((key: string, value: PrimitiveFieldValue) => {
        setNodeValues(prev => ({
          ...prev,
          [id]: { ...prev[id], [key]: value }
        }));
      }, [id, setNodeValues]);

      // Use grid from runtime data or fallback to template grid
      const currentGrid = nodeData.grid || grid;

      // Create context value
      const contextValue = React.useMemo(() => ({
        nodeId: id,
        nodeData: nodeData || { label, grid, values: {} },
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
              grid={currentGrid}
              nodeId={id}
              onValueChange={handleInputChange}
            />
          </NodeDataContext.Provider>
        </Card>
      );
    };

    // Memoize for performance - only re-render if these props change
    // Use JSON.stringify for deep comparison of values object
    return React.memo(GeneratedNode, (prev, next) => {
      if (prev.id !== next.id || prev.selected !== next.selected) {
        return false; // Props changed, re-render
      }
      // Deep compare values
      const prevValues = prev.data.values;
      const nextValues = next.data.values;
      if (prevValues === nextValues) return true; // Same reference
      if (!prevValues || !nextValues) return prevValues === nextValues;
      return JSON.stringify(prevValues) === JSON.stringify(nextValues);
    });
  }

  /**
   * Static helper to build a component from grid and style in one call
   */
  static buildComponent(grid: NodeGrid, style?: NodeStyleConfig, label: string = "Node"): ComponentType<NodeProps> {
    const builder = new NodeComponentBuilder(grid, style, label);
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
      // Use template.definition (NodeDefinition) which contains grid and style
      nodeTypes[template.type] = NodeComponentBuilder.buildComponent(
        template.definition.grid,
        template.definition.style,
        template.label
      );
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
