import * as v from "valibot";
import { Button } from "@/components/ui/button";
import type { PrimitiveFieldValue } from "@/types/schema";
import { useNodeDataContext } from "@/contexts/NodeDataContext";

// Valibot schema for ButtonComponent
export const ButtonComponentSchema = v.object({
  id: v.string(),
  type: v.literal("button"),
  label: v.string(),
  action: v.string(),
  value: v.optional(v.number()),
  variant: v.optional(v.union([
    v.literal("default"),
    v.literal("destructive"),
    v.literal("outline"),
    v.literal("secondary"),
    v.literal("ghost"),
    v.literal("link"),
  ])),
  size: v.optional(v.union([
    v.literal("default"),
    v.literal("sm"),
    v.literal("lg"),
    v.literal("icon"),
  ])),
  disabled: v.optional(v.boolean()),
  bgColor: v.optional(v.string()),
  textColor: v.optional(v.string()),
});

export type ButtonComponent = v.InferOutput<typeof ButtonComponentSchema>;

interface ButtonComponentProps {
  component: ButtonComponent;
  onValueChange?: (id: string, value: PrimitiveFieldValue) => void;
}

export function ButtonComponent({ component, onValueChange }: ButtonComponentProps) {
  const context = useNodeDataContext();
  
  // Get current counter value from nodeData, default to component.value or 0
  const currentCount = (context?.nodeData.values?.[component.id] as number) ?? component.value ?? 0;
  
  const handleClick = () => {
    // Increment the counter
    const newCount = currentCount + 1;
    onValueChange?.(component.id, newCount);
  };
  
  return (
    <Button
      variant={component.variant || "default"}
      size={component.size || "default"}
      disabled={component.disabled || false}
      onClick={handleClick}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
      className="w-full"
      style={{
        backgroundColor: component.bgColor,
        color: component.textColor,
        width: '100%',
        height: '100%',
      }}
    >
      {component.label}
    </Button>
  );
}
