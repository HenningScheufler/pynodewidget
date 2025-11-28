import * as v from "valibot";

// Valibot schema for ButtonComponent
export const ButtonComponentSchema = v.object({
  id: v.string(),
  type: v.literal("button"),
  label: v.string(),
  action: v.string(),
  variant: v.optional(v.union([v.literal("primary"), v.literal("secondary")])),
});

export type ButtonComponent = v.InferOutput<typeof ButtonComponentSchema>;

export function ButtonComponent({ component }: { component: ButtonComponent }) {
  const isPrimary = component.variant === "primary";
  
  return (
    <button
      className={`component-button px-3 py-1 text-sm rounded ${
        isPrimary 
          ? "bg-blue-500 text-white hover:bg-blue-600" 
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      onClick={() => {
        // Emit action event
        console.log(`Action: ${component.action}`);
      }}
    >
      {component.label}
    </button>
  );
}
