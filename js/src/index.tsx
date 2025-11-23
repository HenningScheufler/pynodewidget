import React from "react";
import { createRoot } from "react-dom/client";
import { ReactFlow, Node, Edge, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

interface Model {
  get(key: string): any;
  set(key: string, value: any): void;
  on(event: string, callback: Function): void;
  save_changes(): void;
}

function NodeFlowComponent({ model }: { model: Model }) {
  const [nodes, setNodes] = React.useState<Node[]>(model.get("nodes") || []);
  const [edges, setEdges] = React.useState<Edge[]>(model.get("edges") || []);

  React.useEffect(() => {
    const handleNodesChange = () => setNodes(model.get("nodes") || []);
    const handleEdgesChange = () => setEdges(model.get("edges") || []);
    
    model.on("change:nodes", handleNodesChange);
    model.on("change:edges", handleEdgesChange);
  }, [model]);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView={model.get("fit_view")}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export function render({ model, el }: { model: Model; el: HTMLElement }) {
  const root = createRoot(el);
  root.render(<NodeFlowComponent model={model} />);
  
  return () => root.unmount();
}
