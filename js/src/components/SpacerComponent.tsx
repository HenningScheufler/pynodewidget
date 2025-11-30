import * as v from "valibot";

// Valibot schema for SpacerComponent
export const SpacerComponentSchema = v.object({
  id: v.string(),
  type: v.literal("spacer"),
  size: v.optional(v.string()),
});

export type SpacerComponent = v.InferOutput<typeof SpacerComponentSchema>;

export function SpacerComponent({ component }: { component: SpacerComponent }) {
  return (
    <div 
      className="component-spacer"
      style={{ 
        width: component.size, 
        height: component.size 
      }}
    />
  );
}
