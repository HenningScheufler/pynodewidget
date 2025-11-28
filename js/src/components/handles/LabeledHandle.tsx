import React, { type ComponentProps } from "react";
import { type HandleProps, Position } from "@xyflow/react";
import * as v from "valibot";

import { cn } from "@/lib/utils";
import { BaseHandle } from "@/components/handles/BaseHandle";

// Valibot schema for LabeledHandle component
export const LabeledHandleSchema = v.object({
  id: v.string(),
  type: v.literal("labeled-handle"),
  handle_type: v.union([v.literal("input"), v.literal("output")]),
  label: v.string(),
  dataType: v.optional(v.string()),
  required: v.optional(v.boolean()),
});

export type LabeledHandle = v.InferOutput<typeof LabeledHandleSchema>;

const flexDirections = {
  top: "flex-col",
  right: "flex-row-reverse justify-end",
  bottom: "flex-col-reverse justify-end",
  left: "flex-row",
};

type LabeledHandleComponentProps = 
  | (HandleProps & ComponentProps<"div"> & {
      title: string;
      handleClassName?: string;
      labelClassName?: string;
    })
  | { component: LabeledHandle };

export function LabeledHandle(props: LabeledHandleComponentProps) {
  // If schema component is passed, transform it to ReactFlow props
  if ('component' in props) {
    const { component } = props;
    const type = component.handle_type === "input" ? "target" : "source";
    const position = component.handle_type === "input" ? Position.Left : Position.Right;
    const title = component.label + (component.required ? " *" : "");
    
    return <LabeledHandle type={type} position={position} id={component.id} title={title} />;
  }
  
  // Otherwise handle ReactFlow props directly
  const {
    className,
    labelClassName,
    handleClassName,
    title,
    position,
    ...restProps
  } = props;
  const { ref, ...handleProps } = restProps;

  return (
    <div
      title={title}
      className={cn(
        "relative flex items-center",
        flexDirections[position],
        className,
      )}
      ref={ref}
    >
      <BaseHandle
        position={position}
        className={handleClassName}
        {...handleProps}
      />
      <label className={cn("text-foreground px-3", labelClassName)}>
        {title}
      </label>
    </div>
  );
}
