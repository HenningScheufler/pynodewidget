import * as v from "valibot";

// Valibot schema for DividerComponent
export const DividerComponentSchema = v.object({
  id: v.string(),
  type: v.literal("divider"),
  orientation: v.optional(v.union([v.literal("horizontal"), v.literal("vertical")])),
});

export type DividerComponent = v.InferOutput<typeof DividerComponentSchema>;

export function DividerComponent({ component }: { component: DividerComponent }) {
  const isHorizontal = component.orientation !== "vertical";
  
  return (
    <div 
      className={`component-divider ${
        isHorizontal ? "w-full h-px" : "h-full w-px"
      } bg-gray-300`}
    />
  );
}
