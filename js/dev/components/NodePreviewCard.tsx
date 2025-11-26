import { ReactFlow, ReactFlowProvider } from '@xyflow/react';
import { NodeComponentBuilder } from '../../src/utils/NodeComponentBuilder';
import { Card } from '../../src/components/ui/card';
import type { Combination, NodeData } from '../types';
import type { CustomNodeData } from '../../src/types/schema';
import { useMemo, useState } from 'react';
import { SetNodeValuesContext } from '../../src/index';

interface NodePreviewCardProps {
  combo: Combination;
  sampleNodeData: NodeData;
  showSelected: boolean;
}

export function NodePreviewCard({ combo, sampleNodeData, showSelected }: NodePreviewCardProps) {
  const nodeId = `node-${combo.layout.type}-${combo.handle.type}`;
  const [, setNodeValues] = useState<Record<string, any>>({});
  
  // Build node component from schema with grid layout and handle type combined
  const nodeComponent = useMemo(() => {
    // Combine grid layout data with handle type
    const schema: CustomNodeData = {
      ...combo.layout.defaultData,  // Grid layout data (includes gridLayout property)
      handleType: combo.handle.type as any,  // Override with selected handle type
      label: combo.label,  // Combined label
      header: {
        ...combo.layout.defaultData.header,
        icon: `${combo.layout.icon} ${combo.handle.icon}`  // Combine icons
      }
    };
    
    return NodeComponentBuilder.buildComponent(schema);
  }, [combo.layout, combo.handle]);
  
  const nodeTypes = useMemo(() => ({ preview: nodeComponent }), [nodeComponent]);
  
  return (
    <Card className="p-5 bg-muted/50 shadow-md">
      <div className="text-center mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {combo.label}
      </div>
      <div className="w-[350px] h-[400px]">
        <ReactFlowProvider>
          <SetNodeValuesContext.Provider value={setNodeValues}>
            <ReactFlow
              nodes={[{
                id: nodeId,
                type: 'preview',
                position: { x: 0, y: 0 },
                data: {
                  ...combo.layout.defaultData,
                  handleType: combo.handle.type as any,
                  label: combo.label
                }
              }]}
              edges={[]}
              nodeTypes={nodeTypes}
              fitView
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
