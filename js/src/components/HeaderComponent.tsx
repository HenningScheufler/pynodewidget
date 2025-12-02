import * as v from "valibot";

// Valibot schema for HeaderComponent
export const HeaderComponentSchema = v.object({
  id: v.string(),
  type: v.literal("header"),
  label: v.string(),
  icon: v.optional(v.string()),
  bgColor: v.optional(v.string()),
  textColor: v.optional(v.string()),
});

export type HeaderComponent = v.InferOutput<typeof HeaderComponentSchema>;

export function HeaderComponent({ component }: { component: HeaderComponent }) {
  return (
    <div 
      className="component-header px-3 py-2 font-semibold flex items-center gap-2"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: component.bgColor,
        color: component.textColor,
      }}
    >
      {component.icon && <span>{component.icon}</span>}
      <span>{component.label}</span>
    </div>
  );
}
