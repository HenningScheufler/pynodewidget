import React from "react";
import { Position } from "@xyflow/react";
import type { HandleConfig } from "../types/schema";
import { Badge } from "@/components/ui/badge";
import { HandleFactory, type HandleType } from "@/components/handles/HandleFactory";

interface NodeHandlesProps {
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
  children?: React.ReactNode;
  handleType?: HandleType; // Type of handle to use for all handles
  inputHandleType?: HandleType; // Type of handle for inputs (overrides handleType)
  outputHandleType?: HandleType; // Type of handle for outputs (overrides handleType)
}

export function NodeHandles({ 
  inputs, 
  outputs, 
  children,
  handleType = "base",
  inputHandleType,
  outputHandleType,
}: NodeHandlesProps) {
  const inputType = inputHandleType || handleType;
  const outputType = outputHandleType || handleType;
  
  return (
    <div className="flex p-3 gap-3 items-start">
      {/* Left column - Input handles */}
      <div className="flex flex-col gap-2 mr-auto pl-0">
        {inputs && Array.isArray(inputs) && inputs.map((input) => (
          <div key={`input-${input.id}`} className="flex items-center gap-2 relative min-h-8 justify-start">
            <HandleFactory
              type="target"
              position={Position.Left}
              id={input.id}
              handleType={inputType}
              handleConfig={input}
              label={input.label}
            />
            <Badge variant="outline" className="text-[11px] font-medium shadow-sm">
              {input.label}
            </Badge>
          </div>
        ))}
      </div>

      {/* Center - Content (form or other) */}
      {children}

      {/* Right column - Output handles */}
      <div className="flex flex-col gap-2 ml-auto pr-0">
        {outputs && Array.isArray(outputs) && outputs.map((output) => (
          <div key={`output-${output.id}`} className="flex items-center gap-2 relative min-h-8 justify-end">
            <Badge variant="outline" className="text-[11px] font-medium shadow-sm">
              {output.label}
            </Badge>
            <HandleFactory
              type="source"
              position={Position.Right}
              id={output.id}
              handleType={outputType}
              handleConfig={output}
              label={output.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
