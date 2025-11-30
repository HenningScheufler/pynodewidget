import { Position, type HandleProps } from "@xyflow/react";
import * as v from "valibot";
import { BaseHandle } from "@/components/handles/BaseHandle";

// Valibot schema for ButtonHandle component
export const ButtonHandleSchema = v.object({
  id: v.string(),
  type: v.literal("button-handle"),
  handle_type: v.union([v.literal("input"), v.literal("output")]),
  label: v.string(),
  dataType: v.optional(v.string()),
  required: v.optional(v.boolean()),
});

export type ButtonHandle = v.InferOutput<typeof ButtonHandleSchema>;

const wrapperClassNames: Record<Position, string> = {
  [Position.Top]:
    "flex-col-reverse left-1/2 -translate-y-full -translate-x-1/2",
  [Position.Bottom]: "flex-col left-1/2 translate-y-[10px] -translate-x-1/2",
  [Position.Left]:
    "flex-row-reverse top-1/2 -translate-x-full -translate-y-1/2",
  [Position.Right]: "top-1/2 -translate-y-1/2 translate-x-[10px]",
};

type ButtonHandleComponentProps = 
  | (HandleProps & { showButton?: boolean })
  | { component: ButtonHandle };

export function ButtonHandle(props: ButtonHandleComponentProps) {
  // If schema component is passed, transform it to ReactFlow props
  if ('component' in props) {
    const { component } = props;
    const type = component.handle_type === "input" ? "target" : "source";
    const position = component.handle_type === "input" ? Position.Left : Position.Right;
    
    return (
      <ButtonHandle type={type} position={position} id={component.id} showButton={true}>
        <div className="px-3 py-1.5 bg-secondary border-2 border-border rounded text-sm font-semibold cursor-pointer hover:bg-accent transition-colors">
          {component.label}
          {component.required && <span className="text-red-500 ml-1">*</span>}
        </div>
      </ButtonHandle>
    );
  }
  
  // Otherwise handle ReactFlow props directly
  const {
    showButton = true,
    position = Position.Bottom,
    children,
    ...restProps
  } = props;
  const wrapperClassName = wrapperClassNames[position || Position.Bottom];
  const vertical = position === Position.Top || position === Position.Bottom;

  return (
    <BaseHandle position={position} id={restProps.id} {...restProps}>
      {showButton && (
        <div
          className={`absolute flex items-center ${wrapperClassName} pointer-events-none`}
        >
          <div
            className={`bg-gray-300 ${vertical ? "h-10 w-px" : "h-px w-10"}`}
          />
          <div className="nodrag nopan pointer-events-auto">{children}</div>
        </div>
      )}
    </BaseHandle>
  );
}
