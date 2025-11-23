import type { HandleProps } from "@xyflow/react";
import { BaseHandle } from "@/components/BaseHandle";
import { ButtonHandle } from "@/components/ButtonHandle";
import { LabeledHandle } from "@/components/LabeledHandle";

/**
 * Available handle types
 */
export type HandleType = "base" | "button" | "labeled";

/**
 * Registry of handle components
 */
const handleRegistry: Record<HandleType, React.ComponentType<any>> = {
  base: BaseHandle,
  button: ButtonHandle,
  labeled: LabeledHandle,
};

/**
 * Get a handle component by type
 * 
 * @param type - The handle type to retrieve
 * @returns The handle component, defaults to BaseHandle if not found
 */
export function getHandle(type?: HandleType): React.ComponentType<any> {
  if (!type || !handleRegistry[type]) {
    return BaseHandle;
  }
  return handleRegistry[type];
}

/**
 * Register a custom handle component
 * 
 * @param type - The handle type identifier
 * @param component - The handle component
 */
export function registerHandle(
  type: string,
  component: React.ComponentType<any>
): void {
  handleRegistry[type as HandleType] = component;
}

/**
 * Get all registered handle types
 * 
 * @returns Array of available handle type identifiers
 */
export function getAvailableHandles(): string[] {
  return Object.keys(handleRegistry);
}

/**
 * Handle factory component - renders the appropriate handle based on type
 */
interface HandleFactoryProps extends HandleProps {
  handleType?: HandleType;
  showButton?: boolean; // For ButtonHandle
  label?: string; // For LabeledHandle
  handleConfig?: { handle_type?: HandleType }; // Per-handle type from config
}

export function HandleFactory({
  handleType = "base",
  showButton,
  label,
  handleConfig,
  ...props
}: HandleFactoryProps) {
  // Prioritize handle_type from config over handleType prop
  const effectiveHandleType = handleConfig?.handle_type || handleType;
  const HandleComponent = getHandle(effectiveHandleType);
  
  // Pass specific props based on handle type
  const componentProps: any = { ...props };
  
  if (effectiveHandleType === "button" && showButton !== undefined) {
    componentProps.showButton = showButton;
  }
  
  if (effectiveHandleType === "labeled" && label) {
    componentProps.label = label;
  }
  
  return <HandleComponent {...componentProps} />;
}
