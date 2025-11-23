import React from "react";
import { Position } from "@xyflow/react";
import type { HandleConfig } from "../../types/schema";
import { Badge } from "@/components/ui/badge";
import { BaseHandle } from "@/components/BaseHandle";

interface VerticalLayoutProps {
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
  children?: React.ReactNode;
}

/**
 * Vertical layout: inputs on top, parameters in middle, outputs on bottom
 * Handles are positioned at top/bottom of the node
 */
export function VerticalLayout({ inputs, outputs, children }: VerticalLayoutProps) {
  return (
    <div className="flex flex-col gap-3 p-3">
      {/* Top row - Input handles */}
      {inputs && inputs.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {inputs.map((input) => (
            <div key={`input-${input.id}`} className="flex flex-col items-center gap-1 relative">
              <BaseHandle
                type="target"
                position={Position.Top}
                id={input.id}
                className="!relative !transform-none"
                style={{ position: 'relative', top: 0, left: 0 }}
              />
              <Badge variant="outline" className="text-[11px] font-medium shadow-sm">
                {input.label}
              </Badge>
            </div>
          ))}
        </div>
      )}

      {/* Middle - Content (form or other) */}
      {children && (
        <div className="flex justify-center">
          {children}
        </div>
      )}

      {/* Bottom row - Output handles */}
      {outputs && outputs.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {outputs.map((output) => (
            <div key={`output-${output.id}`} className="flex flex-col items-center gap-1 relative">
              <Badge variant="outline" className="text-[11px] font-medium shadow-sm">
                {output.label}
              </Badge>
              <BaseHandle
                type="source"
                position={Position.Bottom}
                id={output.id}
                className="!relative !transform-none"
                style={{ position: 'relative', top: 0, left: 0 }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
