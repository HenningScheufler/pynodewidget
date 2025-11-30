import { ReactFlow, ReactFlowProvider } from '@xyflow/react';
import { NodeComponentBuilder } from '../../src/utils/NodeComponentBuilder';
import { Card } from '../../src/components/ui/card';
import type { Combination, NodeData } from '../types';
import type { NodeGrid, GridCell, ComponentType } from '../../src/types/schema';
import { useMemo, useState } from 'react';
import { SetNodeValuesContext } from '../../src/index';

interface NodePreviewCardProps {
  combo: Combination;
  sampleNodeData: NodeData;
  showSelected: boolean;
}

/**
 * Extracts the handle type from the template type
 * e.g., 'base_node' -> 'base-handle'
 */
function getHandleTypeFromTemplate(templateType: string): 'base-handle' | 'button-handle' | 'labeled-handle' {
  if (templateType.includes('base')) return 'base-handle';
  if (templateType.includes('button')) return 'button-handle';
  if (templateType.includes('labeled')) return 'labeled-handle';
  return 'button-handle'; // default
}

/**
 * Replaces all handle components in a grid with the specified handle type
 */
function replaceHandleTypes(grid: NodeGrid, newHandleType: 'base-handle' | 'button-handle' | 'labeled-handle'): NodeGrid {
  return {
    ...grid,
    cells: grid.cells.map(cell => ({
      ...cell,
      components: cell.components.map(component => {
        // Check if it's a handle component
        if (component.type === 'base-handle' || 
            component.type === 'button-handle' || 
            component.type === 'labeled-handle') {
          // Replace with new handle type while preserving other properties
          return {
            ...component,
            type: newHandleType
          } as ComponentType;
        }
        return component;
      })
    }))
  };
}

export function NodePreviewCard({ combo, sampleNodeData, showSelected }: NodePreviewCardProps) {
  const nodeId = `node-${combo.layout.type}-${combo.handle.type}`;
  const [, setNodeValues] = useState<Record<string, any>>({});
  
  // Build node component from the layout template's definition
  // Apply the handle type from the combo.handle template
  const nodeComponent = useMemo(() => {
    // Get the handle type from the handle template
    const handleType = getHandleTypeFromTemplate(combo.handle.type);
    
    // Replace all handles in the layout grid with the specified handle type
    const modifiedGrid = replaceHandleTypes(combo.layout.definition.grid, handleType);
    
    const style = combo.layout.definition.style;
    const label = combo.label;
    
    return NodeComponentBuilder.buildComponent(modifiedGrid, style, label);
  }, [combo.layout, combo.handle, combo.label]);
  
  const nodeTypes = useMemo(() => ({ preview: nodeComponent }), [nodeComponent]);
  
  // Also apply handle type replacement to the node data grid
  const nodeGrid = useMemo(() => {
    const handleType = getHandleTypeFromTemplate(combo.handle.type);
    return replaceHandleTypes(combo.layout.definition.grid, handleType);
  }, [combo.layout, combo.handle]);
  
  return (
    <Card className="p-5 bg-muted/50 shadow-md">
      <div className="text-center mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {combo.label}
      </div>
      <div className="w-[500px] h-[450px]">
        <ReactFlowProvider>
          <SetNodeValuesContext.Provider value={setNodeValues}>
            <ReactFlow
              nodes={[{
                id: nodeId,
                type: 'preview',
                position: { x: 100, y: 50 },
                data: {
                  label: combo.label,
                  grid: nodeGrid,
                  style: { minWidth: 280, ...combo.layout.definition.style },
                  values: combo.layout.defaultValues || {}
                }
              }]}
              edges={[]}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.5, minZoom: 1, maxZoom: 1 }}
              nodesDraggable={false}
              nodesConnectable={true}
              elementsSelectable={showSelected}
              panOnDrag={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              preventScrolling={false}
              className="bg-background/50"
            />
          </SetNodeValuesContext.Provider>
        </ReactFlowProvider>
      </div>
    </Card>
  );
}
