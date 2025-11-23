import React from "react";
import type { NodeProps } from "@xyflow/react";
import type { CustomNodeData } from "./types/schema";
import { NodeForm } from "./components/NodeForm";
import { getLayout } from "./components/layouts/LayoutFactory";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSetNodeValues } from "./index";

/**
 * JsonSchemaNode - Configurable node builder component
 * 
 * This component serves as a universal node renderer that can be configured
 * entirely from Python without requiring JavaScript code. It supports:
 * 
 * - Custom layouts (horizontal, vertical, compact, or custom registered layouts)
 * - Multiple handle types (base, button, labeled) with per-handle customization
 * - Field-level configuration (visibility, validation, styling)
 * - Header/footer customization
 * - Style theming and variants
 * - Validation display options
 * 
 * Configuration is driven by the CustomNodeData structure passed from Python.
 */
export function JsonSchemaNode({ id, data, selected }: NodeProps) {
  const nodeData = data as unknown as CustomNodeData;
  const setNodeValues = useSetNodeValues();

  const handleInputChange = React.useCallback((key: string, value: string | number | boolean | null) => {
    setNodeValues((prevValues) => {
      const existingValues = prevValues[id] || {};
      return {
        ...prevValues,
        [id]: {
          ...existingValues,
          [key]: value
        }
      };
    });
  }, [id, setNodeValues]);

  // Get the appropriate layout component based on layoutType
  const Layout = getLayout(nodeData.layoutType);
  
  // Destructure configuration with defaults
  const showHeader = nodeData.header?.show !== false; // Default: true
  const showFooter = nodeData.footer?.show === true; // Default: false
  const headerIcon = nodeData.header?.icon || nodeData.icon;
  
  // Build dynamic styles
  const cardStyle = React.useMemo(() => {
    const style: React.CSSProperties = {};
    if (nodeData.style?.minWidth) {
      style.minWidth = typeof nodeData.style.minWidth === 'number' 
        ? `${nodeData.style.minWidth}px` 
        : nodeData.style.minWidth;
    }
    if (nodeData.style?.maxWidth) {
      style.maxWidth = typeof nodeData.style.maxWidth === 'number'
        ? `${nodeData.style.maxWidth}px`
        : nodeData.style.maxWidth;
    }
    if (nodeData.style?.borderRadius) {
      style.borderRadius = nodeData.style.borderRadius;
    }
    return style;
  }, [nodeData.style]);
  
  // Shadow class mapping
  const shadowClass = nodeData.style?.shadow 
    ? `shadow-${nodeData.style.shadow}`
    : "shadow-md";

  return (
    <Card 
      className={cn(
        "min-w-[200px] border-2 transition-all overflow-hidden p-0 gap-0",
        shadowClass,
        selected && "border-primary shadow-lg ring-2 ring-primary/20",
        nodeData.style?.className
      )}
      style={cardStyle}
    >
      {showHeader && (
        <CardHeader 
          className={cn(
            "p-2.5 space-y-0 px-2.5",
            nodeData.header?.className || "bg-primary text-primary-foreground"
          )}
          style={{
            backgroundColor: nodeData.header?.bgColor,
            color: nodeData.header?.textColor,
          }}
        >
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            {headerIcon && <span className="text-base">{headerIcon}</span>}
            {nodeData.label}
          </CardTitle>
        </CardHeader>
      )}

      <Layout 
        inputs={nodeData.inputs} 
        outputs={nodeData.outputs}
        handleType={nodeData.handleType}
        inputHandleType={nodeData.inputHandleType}
        outputHandleType={nodeData.outputHandleType}
      >
        {nodeData.parameters && (
          <NodeForm
            nodeId={id}
            parameters={nodeData.parameters}
            values={nodeData.values}
            onValueChange={handleInputChange}
            fieldConfigs={nodeData.fieldConfigs}
            validation={nodeData.validation}
          />
        )}
      </Layout>
      
      {showFooter && nodeData.footer && (
        <CardFooter 
          className={cn(
            "p-2 px-2.5 text-xs text-muted-foreground border-t",
            nodeData.footer.className
          )}
        >
          {nodeData.footer.text}
        </CardFooter>
      )}
    </Card>
  );
}