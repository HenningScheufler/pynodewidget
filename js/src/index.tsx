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
import { NodeComponentBuilder, buildNodeTypes } from "./utils/NodeComponentBuilder";
import { NodeSidebar } from "./NodeSidebar";
import type { NodeTemplate, NodesDict, NodeValues } from "./types/schema";
import { FlowCanvas } from "./components/FlowCanvas";
import { useAutoLayout } from "./hooks/useAutoLayout";
import { useExport } from "./hooks/useExport";
import { useContextMenu } from "./hooks/useContextMenu";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

// Context to provide setNodesDict from useModelState to nodes
const SetNodesDictContext = React.createContext<React.Dispatch<React.SetStateAction<NodesDict>> | null>(null);

// Context to provide setNodeValues for syncing values separately
const SetNodeValuesContext = React.createContext<React.Dispatch<React.SetStateAction<NodeValues>> | null>(null);

// Export contexts for testing
export { SetNodesDictContext, SetNodeValuesContext };

export const useSetNodesDict = () => {
  const setNodesDict = React.useContext(SetNodesDictContext);
  if (!setNodesDict) {
    throw new Error('useSetNodesDict must be used within SetNodesDictContext.Provider');
  }
  return setNodesDict;
};

export const useSetNodeValues = () => {
  const setNodeValues = React.useContext(SetNodeValuesContext);
  if (!setNodeValues) {
    throw new Error('useSetNodeValues must be used within SetNodeValuesContext.Provider');
  }
  return setNodeValues;
};

// Export context
export { NodeDataContext } from "./contexts/NodeDataContext";
export { useNodeDataContext } from "./contexts/NodeDataContext";
export type { NodeDataContextValue } from "./contexts/NodeDataContext";

// Export handle components
export { BaseHandle } from "./components/handles/BaseHandle";
export { LabeledHandle } from "./components/handles/LabeledHandle";
export { ButtonHandle } from "./components/handles/ButtonHandle";
export type { BaseHandleProps } from "./components/handles/BaseHandle";

// Export node builder utilities
export { NodeComponentBuilder, buildNodeTypes } from "./utils/NodeComponentBuilder";

// Export core types from schema
export type { 
  // Value types
  FieldValue,
  PrimitiveFieldValue,
  // Component types (from ComponentFactory)
  ComponentType,
  Handle,
  GridCell,
  NodeGrid,
  // Individual component types
  BaseHandle as BaseHandleType,
  LabeledHandle as LabeledHandleType,
  ButtonHandle as ButtonHandleType,
  TextField,
  NumberField,
  BoolField,
  SelectField,
  HeaderComponent,
  FooterComponent,
  ButtonComponent,
  DividerComponent,
  SpacerComponent,
  GridLayoutComponent,
  GridCoordinates,
  CellLayout,
  // Node types
  CustomNodeData, 
  NodeTemplate,
  HandleConfig,
  NodeHeaderConfig,
  NodeFooterConfig,
  NodeStyleConfig,
  ValidationConfig,
  FieldConfig,
  FieldCondition,
  ContextMenuState,
  // New architecture types
  NodeDefinition,
  NodeTemplateV2,
  NodesDict,
  NodeValues,
} from "./types/schema";

// Backwards compatibility: export setNodes as alias to setNodesDict
export const useSetNodes = useSetNodesDict;

function NodeFlowComponent() {
  // Get state from Python via anywidget - this is the source of truth
  // CHANGED: nodes is now a dict keyed by ID
  const [nodesDict, setNodesDict] = useModelState<NodesDict>("nodes");
  const [edges, setEdges] = useModelState<Edge[]>("edges");
  const [nodeTemplates] = useModelState<NodeTemplate[]>("node_templates");
  const [height] = useModelState<string>("height");
  
  // Watch node values separately - this is a dict keyed by node ID
  const [nodeValues, setNodeValues] = useModelState<NodeValues>("node_values");
  
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
    
    return nodes.map(node => {
      const template = templateMap.get(node.type);
      const values = nodeValues[node.id] || {};
      
      if (!template) {
        console.warn(`Template not found for node type: ${node.type}`);
        return node;
      }
      
      return {
        ...node,
        data: {
          ...node.data,
          ...template.defaultData,  // Merge template data (includes grid, label, etc.)
          values                     // Add field values
        }
      };
    });
  }, [nodes, templateMap, nodeValues]);

  // Handle node changes from React Flow and sync to Python
  // Convert array changes back to dict updates
  const onNodesChange = React.useCallback(
    (changes: NodeChange[]) => {
      setNodesDict((prevDict) => {
        // Convert dict to array, apply changes, convert back to dict
        const nodesArray = Object.values(prevDict);
        const updatedArray = applyNodeChanges(changes, nodesArray);
        
        // Convert back to dict
        const newDict: NodesDict = {};
        updatedArray.forEach(node => {
          newDict[node.id] = node;
        });
        
        return newDict;
      });
    },
    [setNodesDict]
  );

  // Handle edge changes from React Flow and sync to Python
  const onEdgesChange = React.useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );

  // Build node types directly from templates using buildNodeTypes utility
  const nodeTypes = React.useMemo<NodeTypes>(() => {
    return buildNodeTypes(nodeTemplates);
  }, [nodeTemplates]);

  const onConnect = React.useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
    [setEdges]
  );

  const onAddNode = React.useCallback(
    (template: NodeTemplate) => {
      const nodeId = `node-${Date.now()}`;
      const newNode: Node = {
        id: nodeId,
        type: template.type,
        position: { x: 100, y: 100 },
        data: {},  // Empty data - all config in template
      };
      
      // Add to dict
      setNodesDict((prev) => ({
        ...prev,
        [nodeId]: newNode
      }));
      
      // Initialize values if template has defaults
      if (template.defaultData?.values) {
        setNodeValues((prev) => ({
          ...prev,
          [nodeId]: { ...template.defaultData.values }
        }));
      }
    },
    [setNodesDict, setNodeValues]
  );

  // Use custom hooks for separated concerns
  const { exportToJSON } = useExport(nodes, edges);
  
  // Note: useAutoLayout expects setNodes callback, need to adapt
  const setNodesArray = React.useCallback((updater: (nodes: Node[]) => Node[]) => {
    setNodesDict(prev => {
      const nodesArray = Object.values(prev);
      const updated = typeof updater === 'function' ? updater(nodesArray) : updater;
      const newDict: NodesDict = {};
      updated.forEach(node => { newDict[node.id] = node; });
      return newDict;
    });
  }, [setNodesDict]);
  
  const { onLayout } = useAutoLayout(nodes, edges, setNodesArray);
  const {
    contextMenu,
    onNodeContextMenu,
    onEdgeContextMenu,
    onPaneClick,
    onDelete,
    closeContextMenu,
  } = useContextMenu(setNodesArray, setEdges);

  return (
    <div style={{ width: "100%", height: height, display: "flex", position: "relative", overflow: "hidden" }}>
      <SetNodesDictContext.Provider value={setNodesDict}>
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
                  nodes={nodesWithData}
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
      </SetNodesDictContext.Provider>
    </div>
  );
}

export const render = createRender(NodeFlowComponent);

export default { render };
