import type { ComponentProps } from "react";
import { Handle, type HandleProps } from "@xyflow/react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export type BaseHandleProps = HandleProps;

export function BaseHandle({
  className,
  children,
  style,
  ...props
}: ComponentProps<typeof Handle>) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Handle
      {...props}
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
