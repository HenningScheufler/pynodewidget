import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  ReactFlowProvider,
} from "@xyflow/react";
import type { Node, Edge, NodeChange, EdgeChange, Connection, NodeTypes } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./style.css";
import { JsonSchemaNode } from "./JsonSchemaNode";
import { nodeFactory } from "./components/NodeFactory";
import { NodeSidebar } from "./NodeSidebar";
import type { NodeTemplate } from "./types/schema";
import { FlowCanvas } from "./components/FlowCanvas";
import { useAutoLayout } from "./hooks/useAutoLayout";
import { useExport } from "./hooks/useExport";
import { useContextMenu } from "./hooks/useContextMenu";
import { fieldRegistry } from "./components/fields/FieldRegistry";
import type { FieldRenderer } from "./types/fieldRenderer";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

// Context to provide setNodes from useModelState to nodes
const SetNodesContext = React.createContext<React.Dispatch<React.SetStateAction<Node[]>> | null>(null);

// Context to provide setNodeValues for syncing values separately
const SetNodeValuesContext = React.createContext<React.Dispatch<React.SetStateAction<Record<string, any>>> | null>(null);

// Export contexts for testing
export { SetNodesContext, SetNodeValuesContext };

export const useSetNodes = () => {
  const setNodes = React.useContext(SetNodesContext);
  if (!setNodes) {
    throw new Error('useSetNodes must be used within SetNodesContext.Provider');
  }
  return setNodes;
};

export const useSetNodeValues = () => {
  const setNodeValues = React.useContext(SetNodeValuesContext);
  if (!setNodeValues) {
    throw new Error('useSetNodeValues must be used within SetNodeValuesContext.Provider');
  }
  return setNodeValues;
};

// Export fieldRegistry and FieldRenderer for custom field type registration
export { fieldRegistry, type FieldRenderer };

// Export layout registry for custom layouts
export { getLayout, registerLayout, getAvailableLayouts } from "./components/layouts/LayoutFactory";
export type { LayoutComponent, LayoutProps } from "./components/layouts/LayoutFactory";

// Export handle registry for custom handles
export { getHandle, registerHandle, getAvailableHandles } from "./components/handles/HandleFactory";
export type { HandleType } from "./components/handles/HandleFactory";

// Export node builder utilities
export * from "./utils/nodeBuilder";

// Export core types
export type { 
  FieldValue, 
  JsonSchema, 
  JsonSchemaProperty, 
  CustomNodeData, 
  NodeTemplate,
  HandleConfig,
  NodeHeaderConfig,
  NodeFooterConfig,
  NodeStyleConfig,
  ValidationConfig,
  FieldConfig,
  FieldCondition,
} from "./types/schema";

function NodeFlowComponent() {
  // Get state from Python via anywidget - this is the source of truth
  const [nodes, setNodes] = useModelState<Node[]>("nodes");
  const [edges, setEdges] = useModelState<Edge[]>("edges");
  const [nodeTemplates] = useModelState<NodeTemplate[]>("node_templates");
  const [height] = useModelState<string>("height");
  
  // Watch node values separately - this is a dict keyed by node ID
  const [nodeValues, setNodeValues] = useModelState<Record<string, any>>("node_values");
  
  // Merge node values into nodes when they change from Python
  const nodesWithValues = React.useMemo(() => {
    if (!nodeValues || Object.keys(nodeValues).length === 0) return nodes;
    
    return nodes.map(node => {
      const values = nodeValues[node.id];
      if (values) {
        return {
          ...node,
          data: {
            ...node.data,
            values
          }
        };
      }
      return node;
    });
  }, [nodes, nodeValues]);

  // Handle node changes from React Flow and sync to Python
  const onNodesChange = React.useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );

  // Handle edge changes from React Flow and sync to Python
  const onEdgesChange = React.useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );

  // Register JsonSchemaNode as fallback for all parameters-based nodes
  React.useEffect(() => {
    // Set JsonSchemaNode as the fallback for unregistered types
    nodeFactory.setFallback(JsonSchemaNode);
    
    // Register all Python-defined node templates as parameters nodes
    nodeTemplates.forEach((template) => {
      nodeFactory.registerParameters(template.type, JsonSchemaNode);
    });
  }, [nodeTemplates]);

  // Only expose node types specified in nodeTemplates, using the registered components from nodeFactory
  const nodeTypes = React.useMemo<NodeTypes>(() => {
    const types: NodeTypes = {};
    const all = nodeFactory.getAll();
    nodeTemplates.forEach((template) => {
      const comp = all[template.type];
      if (comp !== undefined) types[template.type] = comp;
    });
    return types;
  }, [nodeTemplates, nodes]);

  const onConnect = React.useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges]
  );

  const onAddNode = React.useCallback(
    (template: NodeTemplate) => {
      const newNode: Node = {
        id: `node-${Date.now()}`,
        type: template.type,
        position: { x: 100, y: 100 },
        data: template.defaultData,
      };
      setNodes((nds) => [...nds, newNode]);
    },
    [setNodes]
  );

  // Use custom hooks for separated concerns
  const { exportToJSON } = useExport(nodes, edges);
  const { onLayout } = useAutoLayout(nodes, edges, setNodes);
  const {
    contextMenu,
    onNodeContextMenu,
    onEdgeContextMenu,
    onPaneClick,
    onDelete,
    closeContextMenu,
  } = useContextMenu(setNodes, setEdges);

  return (
    <div style={{ width: "100%", height: height, display: "flex", position: "relative", overflow: "hidden" }}>
      <SetNodesContext.Provider value={setNodes}>
        <SetNodeValuesContext.Provider value={setNodeValues}>
          <ReactFlowProvider>
            <SidebarProvider defaultOpen={true} className="!min-h-0 !h-full">
              <Sidebar collapsible="icon" className="!relative !inset-auto !h-full">
                <SidebarHeader className="flex flex-row items-center justify-between border-b">
                  <span className="text-sm font-semibold">Add Nodes</span>
                  <SidebarTrigger />
                </SidebarHeader>
                <NodeSidebar onAddNode={onAddNode} templates={nodeTemplates} />
              </Sidebar>
              <div style={{ flex: 1, height: "100%", position: "relative" }}>
                <FlowCanvas
                  nodes={nodesWithValues}
                  edges={edges}
                  nodeTypes={nodeTypes}
                  height={height}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  onNodeContextMenu={onNodeContextMenu}
                  onEdgeContextMenu={onEdgeContextMenu}
                  onPaneClick={onPaneClick}
                  contextMenu={contextMenu}
                  onDelete={onDelete}
                  onCloseContextMenu={closeContextMenu}
                  onExport={exportToJSON}
                  onLayoutVertical={() => onLayout("TB")}
                  onLayoutHorizontal={() => onLayout("LR")}
                />
              </div>
            </SidebarProvider>
        </ReactFlowProvider>
      </SetNodeValuesContext.Provider>
    </SetNodesContext.Provider>
          </div>
  );
}

export const render = createRender(NodeFlowComponent);

export default { render };
