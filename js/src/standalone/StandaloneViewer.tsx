import * as React from "react";
import {
  applyNodeChanges,
  applyEdgeChanges,
  ReactFlowProvider,
} from "@xyflow/react";
import type { Node as FlowNode, Edge, NodeChange, EdgeChange } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "../style.css";
import { buildNodeTypes } from "../utils/NodeComponentBuilder";
import type { NodeTemplate, NodesDict, NodeValues } from "../types/schema";
import { FlowCanvas } from "../components/FlowCanvas";
import { SetNodesDictContext, SetNodeValuesContext } from "../index";

export interface WorkflowData {
  nodes: NodesDict;
  edges: Edge[];
  node_templates: NodeTemplate[];
  node_values: NodeValues;
  viewport?: { x: number; y: number; zoom: number };
}

interface StandaloneViewerProps {
  workflowData: WorkflowData;
  height?: string;
  interactive?: boolean;
}

function StandaloneViewerComponent({ 
  workflowData, 
  height = "600px",
  interactive = true 
}: StandaloneViewerProps) {
  const [nodesDict, setNodesDict] = React.useState<NodesDict>(workflowData.nodes || {});
  const [edges, setEdges] = React.useState<Edge[]>(workflowData.edges || []);
  const [nodeValues, setNodeValues] = React.useState<NodeValues>(workflowData.node_values || {});
  
  const nodeTemplates = workflowData.node_templates || [];
  
  // Convert nodesDict to array for React Flow
  const nodes = React.useMemo(() => {
    return Object.values(nodesDict || {});
  }, [nodesDict]);
  
  // Build template lookup map
  const templateMap = React.useMemo(() => {
    const map = new Map<string, NodeTemplate>();
    nodeTemplates.forEach(template => {
      map.set(template.type, template);
    });
    return map;
  }, [nodeTemplates]);
  
  // Merge template definition + values into nodes for rendering
  const nodesWithData = React.useMemo(() => {
    if (!nodeValues || Object.keys(nodeValues).length === 0) return nodes;
    
    return nodes.map((node: FlowNode) => {
      const template = templateMap.get(node.type);
      const values = nodeValues[node.id] || {};
      
      if (!template) {
        console.warn(`Template not found for node type: ${node.type}`);
        return node;
      }
      
      return {
        ...node,
        data: {
          ...(node.data || {}),
          definition: template.definition,
          label: template.label,
          icon: template.icon,
          values: values,
        }
      } as FlowNode;
    });
  }, [nodes, templateMap, nodeValues]);
  
  // Build node types from templates
  const nodeTypes = React.useMemo(() => {
    return buildNodeTypes(nodeTemplates);
  }, [nodeTemplates]);
  
  // Handle node changes
  const onNodesChange = React.useCallback((changes: NodeChange[]) => {
    if (!interactive) return;
    
    const updatedNodes = applyNodeChanges(changes, nodesWithData) as FlowNode[];
    const updatedDict: NodesDict = {};
    updatedNodes.forEach((node: FlowNode) => {
      updatedDict[node.id] = node;
    });
    setNodesDict(updatedDict);
  }, [nodesWithData, interactive]);
  
  // Handle edge changes
  const onEdgesChange = React.useCallback((changes: EdgeChange[]) => {
    if (!interactive) return;
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, [interactive]);
  
  return (
    <SetNodesDictContext.Provider value={setNodesDict}>
      <SetNodeValuesContext.Provider value={setNodeValues}>
        <div style={{ width: "100%", height }}>
          <FlowCanvas
            nodes={nodesWithData}
            edges={edges}
            nodeTypes={nodeTypes}
            height={height}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={() => {}}
            onNodeContextMenu={() => {}}
            onEdgeContextMenu={() => {}}
            onPaneClick={() => {}}
            contextMenu={null}
            onDelete={() => {}}
            onCloseContextMenu={() => {}}
            onExport={() => {}}
            onLayoutVertical={() => {}}
            onLayoutHorizontal={() => {}}
          />
        </div>
      </SetNodeValuesContext.Provider>
    </SetNodesDictContext.Provider>
  );
}

export function StandaloneViewer(props: StandaloneViewerProps) {
  return (
    <ReactFlowProvider>
      <StandaloneViewerComponent {...props} />
    </ReactFlowProvider>
  );
}
