import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import { ReactFlowProvider } from "@xyflow/react";
import { NodeComponentBuilder } from "../utils/NodeComponentBuilder";
import type { CustomNodeData } from "../types/schema";
import { SetNodeValuesContext } from "../index";
import "@xyflow/react/dist/style.css";
import "../style.css";

function JsonSchemaNodeWidget() {
  const [idRaw] = useModelState("id");
  const [dataRaw] = useModelState("data");
  const [selectedRaw] = useModelState("selected");
  const id = (idRaw ?? "json-schema-node") as string;
  const data = (dataRaw ?? {}) as CustomNodeData;
  const selected = (selectedRaw ?? false) as boolean;
  
  // Build component from schema
  const NodeComponent = React.useMemo(() => {
    try {
      return NodeComponentBuilder.buildComponent(data);
    } catch (error) {
      console.error("Failed to build node component:", error);
      // Return a fallback component that displays the error
      return () => (
        <div style={{ padding: "10px", border: "1px solid red", borderRadius: "4px" }}>
          <strong>Error building node:</strong>
          <pre>{String(error)}</pre>
        </div>
      );
    }
  }, [data]);
  
  // Provide a no-op setNodeValues for standalone widget
  const [, setNodeValues] = React.useState<Record<string, any>>({});
  
  return (
    <ReactFlowProvider>
      <SetNodeValuesContext.Provider value={setNodeValues}>
        <div style={{ padding: "10px" }}>
          <NodeComponent
            id={id}
            data={data}
            selected={selected}
            type={"json-schema-node"}
            dragging={false}
            zIndex={0}
            selectable={true}
            deletable={true}
            draggable={true}
            isConnectable={true}
            positionAbsoluteX={0}
            positionAbsoluteY={0}
          />
        </div>
      </SetNodeValuesContext.Provider>
    </ReactFlowProvider>
  );
}

const render = createRender(JsonSchemaNodeWidget);
export default render;
