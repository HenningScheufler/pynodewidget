import React from "react";
import { Position } from "@xyflow/react";
import type { HandleConfig } from "../../types/schema";
import { Badge } from "@/components/ui/badge";
import { BaseHandle } from "@/components/BaseHandle";

interface CompactLayoutProps {
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
  children?: React.ReactNode;
}

/**
 * Compact layout: minimal spacing, condensed badges, smaller handles
 * Inputs on left, outputs on right, but with tighter spacing than horizontal
 */
export function CompactLayout({ inputs, outputs, children }: CompactLayoutProps) {
  return (
    <div className="flex p-2 gap-2 items-start">
      {/* Left column - Input handles (compact) */}
      <div className="flex flex-col gap-1">
        {inputs && Array.isArray(inputs) && inputs.map((input) => (
          <div key={`input-${input.id}`} className="flex items-center gap-1 relative min-h-6">
            <BaseHandle
              type="target"
              position={Position.Left}
              id={input.id}
              className="w-2 h-2"
            />
            <Badge variant="outline" className="text-[10px] font-normal py-0 px-1 h-5">
              {input.label}
            </Badge>
          </div>
        ))}
      </div>

      {/* Center - Content (form or other) with minimal padding */}
      {children}

      {/* Right column - Output handles (compact) */}
      <div className="flex flex-col gap-1">
        {outputs && Array.isArray(outputs) && outputs.map((output) => (
          <div key={`output-${output.id}`} className="flex items-center gap-1 relative min-h-6 justify-end">
            <Badge variant="outline" className="text-[10px] font-normal py-0 px-1 h-5">
              {output.label}
            </Badge>
            <BaseHandle
              type="source"
              position={Position.Right}
              id={output.id}
              className="w-2 h-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
