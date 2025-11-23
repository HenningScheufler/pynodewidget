import React from "react";
import { Handle, Position } from "@xyflow/react";

export interface HandleConfig {
  id: string;
  label: string;
  type?: string;
}

interface NodeHandleProps {
  config: HandleConfig;
  handleType: "source" | "target";
  position: number;
  totalHandles: number;
}

export function NodeHandle({ config, handleType, position, totalHandles }: NodeHandleProps) {
  const handlePosition = handleType === "target" ? Position.Left : Position.Right;
  const topPercent = `${((position + 1) * 100) / (totalHandles + 1)}%`;
  const isInput = handleType === "target";

  return (
    <div 
      className={`handle-container ${isInput ? 'handle-container-left' : 'handle-container-right'}`}
      style={{ top: topPercent }}
    >
      <Handle
        type={handleType}
        position={handlePosition}
        id={config.id}
        className="handle-connector"
      />
      <div className="handle-label-box">
        {config.label}
      </div>
    </div>
  );
}
