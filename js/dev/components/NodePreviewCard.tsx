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
  
  // Build node component from schema
  const nodeComponent = useMemo(() => {
    const schema: CustomNodeData = {
      ...sampleNodeData,
      layoutType: combo.layout.type,
      handleType: combo.handle.type
    };
    return NodeComponentBuilder.buildComponent(schema);
  }, [combo.layout.type, combo.handle.type, sampleNodeData]);
  
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
                  ...sampleNodeData,
                  layoutType: combo.layout.type,
                  handleType: combo.handle.type
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
