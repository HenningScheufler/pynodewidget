import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import { ReactFlowProvider } from "@xyflow/react";
import { JsonSchemaNode } from "../JsonSchemaNode";
import "@xyflow/react/dist/style.css";
import "../style.css";

function JsonSchemaNodeWidget() {
  const [idRaw] = useModelState("id");
  const [dataRaw] = useModelState("data");
  const [selectedRaw] = useModelState("selected");
  const id = (idRaw ?? "json-schema-node") as string;
  const data = (dataRaw ?? {}) as Record<string, unknown>;
  const selected = (selectedRaw ?? false) as boolean;
  
  return (
    <ReactFlowProvider>
      <div style={{ padding: "10px" }}>
        <JsonSchemaNode
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
    </ReactFlowProvider>
  );
}

const render = createRender(JsonSchemaNodeWidget);
export default render;
