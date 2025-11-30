import type { ComponentProps } from "react";
import { Handle, type HandleProps, Position } from "@xyflow/react";
import { useState } from "react";
import * as v from "valibot";

import { cn } from "@/lib/utils";

// Valibot schema for BaseHandle component
export const BaseHandleSchema = v.object({
  id: v.string(),
  type: v.literal("base-handle"),
  handle_type: v.union([v.literal("input"), v.literal("output")]),
  label: v.string(),
  dataType: v.optional(v.string()),
  required: v.optional(v.boolean()),
});

export type BaseHandle = v.InferOutput<typeof BaseHandleSchema>;

export type BaseHandleProps = HandleProps;

type BaseHandleComponentProps = 
  | ComponentProps<typeof Handle>
  | { component: BaseHandle };

export function BaseHandle(props: BaseHandleComponentProps) {
  // If schema component is passed, transform it to ReactFlow props
  if ('component' in props) {
    const { component } = props;
    const type = component.handle_type === "input" ? "target" : "source";
    const position = component.handle_type === "input" ? Position.Left : Position.Right;
    
    return <BaseHandle type={type} position={position} id={component.id} />;
  }
  
  // Otherwise handle ReactFlow props directly
  const {
    className,
    children,
    style,
    ...restProps
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Handle
      {...restProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // CSS custom properties for handle styling
        // These can be overridden from Python via container-level CSS
        width: 'var(--pynodeflow-handle-size, 11px)',
        height: 'var(--pynodeflow-handle-size, 11px)',
        borderWidth: 'var(--pynodeflow-handle-border-width, 2px)',
        borderColor: 'var(--pynodeflow-handle-border-color, #000000ff)',
        backgroundColor: isHovered 
          ? 'var(--pynodeflow-handle-hover-bg, #747474ff)'
          : 'var(--pynodeflow-handle-bg, #000000ff)',
        ...style,
      }}
      className={cn(
        "h-[11px] w-[11px] rounded-full border border-slate-300 bg-slate-100 transition",
        "dark:border-secondary dark:bg-secondary",
        className,
      )}
    >
      {children}
    </Handle>
  );
}
