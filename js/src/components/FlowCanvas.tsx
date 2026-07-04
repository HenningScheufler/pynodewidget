import * as React from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Panel,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useReactFlow,
} from "@xyflow/react";
import type {
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { NodeTemplate, ContextMenuState } from "../types/schema";
import { FlowToolbar } from "./FlowToolbar";
import { ContextMenu } from "../ContextMenu";

interface FlowCanvasProps {
  nodes: Node[];
  edges: Edge[];
  nodeTypes: NodeTypes;
  height: string;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  onNodeContextMenu: (event: React.MouseEvent, node: Node) => void;
  onEdgeContextMenu: (event: React.MouseEvent, edge: Edge) => void;
  onPaneClick: () => void;
  contextMenu: ContextMenuState | null;
  onDelete: () => void;
  onCloseContextMenu: () => void;
  onExport: () => void;
  onLayoutVertical: () => void;
  onLayoutHorizontal: () => void;
  isValidConnection?: (connection: Connection | Edge) => boolean;
}

export function FlowCanvas({
  nodes,
  edges,
  nodeTypes,
  height,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onNodeContextMenu,
  onEdgeContextMenu,
  onPaneClick,
  contextMenu,
  onDelete,
  onCloseContextMenu,
  onExport,
  onLayoutVertical,
  onLayoutHorizontal,
  isValidConnection,
}: FlowCanvasProps) {
  const { fitView } = useReactFlow();

  // Fit the view once after nodes first render (and after the on-mount
  // auto-layout has repositioned them) so the whole graph is visible.
  const didFit = React.useRef(false);
  React.useEffect(() => {
    if (didFit.current || nodes.length === 0) return;
    didFit.current = true;
    const timer = setTimeout(() => {
      fitView({ padding: 0.2, duration: 0 });
    }, 300);
    return () => clearTimeout(timer);
  }, [nodes, fitView]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeContextMenu={onNodeContextMenu}
        onEdgeContextMenu={onEdgeContextMenu}
        onPaneClick={onPaneClick}
        isValidConnection={isValidConnection}
        fitView
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
        minZoom={0.1}
        maxZoom={2}
      >
        <Background />
        <Controls />
        <Panel position="top-right">
          <FlowToolbar
            onExport={onExport}
            onLayoutVertical={onLayoutVertical}
            onLayoutHorizontal={onLayoutHorizontal}
          />
        </Panel>
      </ReactFlow>
      {contextMenu && (
        <ContextMenu
          id={contextMenu.id}
          type={contextMenu.type}
          x={contextMenu.x}
          y={contextMenu.y}
          onDelete={onDelete}
          onClose={onCloseContextMenu}
        />
      )}
    </div>
  );
}
