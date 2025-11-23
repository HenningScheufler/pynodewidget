import { ReactFlow, ReactFlowProvider } from '@xyflow/react';
import { JsonSchemaNode } from '../../src/JsonSchemaNode';
import { Card } from '../../src/components/ui/card';
import type { Combination, NodeData } from '../types';

interface NodePreviewCardProps {
  combo: Combination;
  sampleNodeData: NodeData;
  showSelected: boolean;
}

export function NodePreviewCard({ combo, sampleNodeData, showSelected }: NodePreviewCardProps) {
  const nodeId = `node-${combo.layout.type}-${combo.handle.type}`;
  
  return (
    <Card className="p-5 bg-muted/50 shadow-md">
      <div className="text-center mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {combo.label}
      </div>
      <div className="w-[350px] h-[400px]">
        <ReactFlowProvider>
          <ReactFlow
            nodes={[{
              id: nodeId,
              type: 'jsonschema',
              position: { x: 0, y: 0 },
              data: {
                ...sampleNodeData,
                layoutType: combo.layout.type,
                handleType: combo.handle.type
              }
            }]}
            edges={[]}
            nodeTypes={{ jsonschema: JsonSchemaNode }}
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
        </ReactFlowProvider>
      </div>
    </Card>
  );
}
