import * as v from "valibot";

// Valibot schema for FooterComponent
export const FooterComponentSchema = v.object({
  id: v.string(),
  type: v.literal("footer"),
  text: v.string(),
  className: v.optional(v.string()),
  bgColor: v.optional(v.string()),
  textColor: v.optional(v.string()),
});

export type FooterComponent = v.InferOutput<typeof FooterComponentSchema>;

export function FooterComponent({ component }: { component: FooterComponent }) {
  return (
    <div 
      className={`component-footer px-3 py-2 text-xs text-muted-foreground border-t ${component.className || ''}`}
      style={{
        backgroundColor: component.bgColor,
        color: component.textColor,
      }}
    >
      {component.text}
    </div>
  );
}
