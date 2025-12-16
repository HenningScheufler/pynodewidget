import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  ReactFlowProvider,
} from "@xyflow/react";
import type { Node, Edge, NodeChange, EdgeChange, Connection } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./style.css";
import { buildNodeTypes } from "./utils/NodeComponentBuilder";
import type { NodeTemplate, NodesDict, NodeValues } from "./types/schema";
import { FlowCanvas } from "./components/FlowCanvas";
import { NodeSidebar } from "./NodeSidebar";
import { useAutoLayout } from "./hooks/useAutoLayout";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import {
  SetNodesDictContext,
  SetNodeValuesContext,
  useSetNodesDict,
  useSetNodeValues,
} from "./contexts/StandaloneContexts";

export { useSetNodesDict, useSetNodeValues };

interface StandaloneFlowData {
  nodes: NodesDict;
  edges: Edge[];
  viewport?: { x: number; y: number; zoom: number };
  node_templates: NodeTemplate[];
  node_values: NodeValues;
  height?: string;
  interactive?: boolean;
}

function StandaloneFlow({ data }: { data: StandaloneFlowData }) {
  const [nodesDict, setNodesDict] = React.useState<NodesDict>(data.nodes);
  const [nodeValues, setNodeValues] = React.useState<NodeValues>(data.node_values);
  const [edges, setEdges] = React.useState<Edge[]>(data.edges);
  const [contextMenu, setContextMenu] = React.useState<any>(null);
  
  const height = data.height || "600px";
  const interactive = data.interactive !== false;

  // Build node types from templates
  const nodeTypes = React.useMemo(() => {
    return buildNodeTypes(data.node_templates);
  }, [data.node_templates]);

  // Convert nodesDict to nodes array for ReactFlow
  const nodes = React.useMemo(() => {
    return Object.entries(nodesDict).map(([id, nodeData]) => ({
      id,
      ...nodeData,
    }));
  }, [nodesDict]);

  const onNodesChange = React.useCallback(
    (changes: NodeChange[]) => {
      if (!interactive) return;
      
      const updatedNodes = applyNodeChanges(changes, nodes);
      const newNodesDict: NodesDict = {};
      updatedNodes.forEach((node) => {
        const { id, ...rest } = node;
        newNodesDict[id] = rest as any;
      });
      setNodesDict(newNodesDict);
    },
    [nodes, interactive]
  );

  const onEdgesChange = React.useCallback(
    (changes: EdgeChange[]) => {
      if (!interactive) return;
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [interactive]
  );

  const onConnect = React.useCallback(
    (connection: Connection) => {
      if (!interactive) return;
      setEdges((eds) => addEdge(connection, eds));
    },
    [interactive]
  );

  const onNodeContextMenu = React.useCallback(
    (event: React.MouseEvent, node: Node) => {
      if (!interactive) return;
      event.preventDefault();
      setContextMenu({
        id: node.id,
        type: "node",
        x: event.clientX,
        y: event.clientY,
      });
    },
    [interactive]
  );

  const onEdgeContextMenu = React.useCallback(
    (event: React.MouseEvent, edge: Edge) => {
      if (!interactive) return;
      event.preventDefault();
      setContextMenu({
        id: edge.id,
        type: "edge",
        x: event.clientX,
        y: event.clientY,
      });
    },
    [interactive]
  );

  const onPaneClick = React.useCallback(() => {
    setContextMenu(null);
  }, []);

  const onDelete = React.useCallback(() => {
    if (!interactive || !contextMenu) return;
    
    if (contextMenu.type === "node") {
      setNodesDict((prev) => {
        const newDict = { ...prev };
        delete newDict[contextMenu.id];
        return newDict;
      });
      setEdges((eds) =>
        eds.filter(
          (edge) =>
            edge.source !== contextMenu.id && edge.target !== contextMenu.id
        )
      );
    } else if (contextMenu.type === "edge") {
      setEdges((eds) => eds.filter((edge) => edge.id !== contextMenu.id));
    }
    setContextMenu(null);
  }, [contextMenu, interactive]);

  const onAddNode = React.useCallback(
    (template: NodeTemplate) => {
      if (!interactive) return;
      
      const nodeId = `${template.type}-${Date.now()}`;
      const newNode = {
        type: template.type,
        position: { x: 250, y: 250 },
        data: {},
      };
      
      setNodesDict((prev) => ({
        ...prev,
        [nodeId]: newNode,
      }));
    },
    [interactive]
  );

  // Adapter to convert nodes array updates to nodesDict updates
  const setNodesArray = React.useCallback(
    (updater: Node[] | ((nodes: Node[]) => Node[])) => {
      setNodesDict((prev) => {
        const nodesArray = Object.entries(prev).map(([id, nodeData]) => ({
          id,
          ...nodeData,
        }));
        const updated =
          typeof updater === "function" ? updater(nodesArray) : updater;
        const newDict: NodesDict = {};
        updated.forEach((node) => {
          const { id, ...nodeData } = node;
          newDict[id] = nodeData;
        });
        return newDict;
      });
    },
    [setNodesDict]
  );

  const { onLayout } = useAutoLayout(nodes, edges, setNodesArray);

  const layoutVertical = React.useCallback(() => {
    onLayout("TB");
  }, [onLayout]);

  const layoutHorizontal = React.useCallback(() => {
    onLayout("LR");
  }, [onLayout]);

  // Auto-layout on initial load
  React.useEffect(() => {
    if (nodes.length > 0) {
      // Delay to ensure layout is ready
      setTimeout(() => {
        layoutVertical();
      }, 100);
    }
  }, []); // Run once on mount

  const onExport = React.useCallback(() => {
    const exportData = {
      nodes: nodesDict,
      edges,
      node_values: nodeValues,
      node_templates: data.node_templates,
    };
    
    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "workflow.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [nodesDict, edges, nodeValues, data.node_templates]);

  return (
    <div style={{ width: "100%", height, display: "flex", position: "relative", overflow: "hidden" }}>
      <SetNodesDictContext.Provider value={setNodesDict}>
        <SetNodeValuesContext.Provider value={setNodeValues}>
            <ReactFlowProvider>
              <SidebarProvider defaultOpen={interactive} className="!min-h-0 !h-full !w-full">
                {interactive && (
                  <Sidebar collapsible="icon" className="!relative !inset-auto !h-full">
                    <SidebarHeader className="flex flex-row items-center justify-between border-b">
                      <span className="text-sm font-semibold">Add Nodes</span>
                      <SidebarTrigger />
                    </SidebarHeader>
                    <NodeSidebar onAddNode={onAddNode} templates={data.node_templates} />
                  </Sidebar>
                )}
                <div style={{ flex: 1, height: "100%", position: "relative" }}>
                  <FlowCanvas
                    nodes={nodes}
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
                    onCloseContextMenu={() => setContextMenu(null)}
                    onExport={onExport}
                    onLayoutVertical={layoutVertical}
                    onLayoutHorizontal={layoutHorizontal}
                  />
                </div>
              </SidebarProvider>
            </ReactFlowProvider>
        </SetNodeValuesContext.Provider>
      </SetNodesDictContext.Provider>
    </div>
  );
}

// Initialize the standalone flow when DOM is ready
export function initStandaloneFlow(containerId: string, data: StandaloneFlowData) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }

  const root = createRoot(container);
  root.render(<StandaloneFlow data={data} />);
}

// Auto-initialize if data is embedded in the page
if (typeof window !== "undefined") {
  const initialize = () => {
    const dataElement = document.getElementById("pynodewidget-data");
    if (dataElement && dataElement.textContent) {
      try {
        const data = JSON.parse(dataElement.textContent);
        initStandaloneFlow("pynodewidget-root", data);
      } catch (error) {
        console.error("Failed to parse pynodewidget data:", error);
      }
    }
  };

  // If DOM is already loaded (script loaded after DOMContentLoaded), run immediately
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM already loaded, run immediately
    initialize();
  }
}

// Export for manual initialization
(window as any).PyNodeWidget = {
  initStandaloneFlow,
};
