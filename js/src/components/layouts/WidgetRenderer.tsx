/**
 * Widget renderer with discriminated union handling.
 * 
 * This component routes widget rendering based on the widget's "kind" field,
 * implementing a discriminated union pattern for type-safe widget rendering.
 * 
 * Supported widget types:
 * - text: Simple text display
 * - plot: Canvas for plotting (placeholder for future integration)
 * - image: Image display
 * - inputs: Node input handles
 * - outputs: Node output handles
 * - parameters: Node parameters/fields form
 * - custom: Custom user-defined components
 * - layout: Recursive nested grid layout
 */

import React from "react";
import { Position } from "@xyflow/react";
import type { Widget } from "../../types/grid";
import type { CustomNodeData, FieldValue, HandleConfig } from "../../types/schema";
import type { HandleType } from "../handles/HandleFactory";
import { HandleFactory } from "../handles/HandleFactory";
import { Badge } from "@/components/ui/badge";
import { GridLayout } from "./GridLayout";
import { NodeForm } from "../NodeForm";

/**
 * Context for passing node data down to widgets
 */
export interface NodeDataContextValue {
  nodeId: string;
  nodeData: CustomNodeData;
  onValueChange: (key: string, value: FieldValue) => void;
}

export const NodeDataContext = React.createContext<NodeDataContextValue | null>(null);

interface WidgetRendererProps {
  widget: Widget;
}

/**
 * WidgetRenderer - renders different widget types based on discriminated union
 */
export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  // Get node context if available
  const context = React.useContext(NodeDataContext);
  
  switch (widget.kind) {
    case "text":
      return (
        <div
          className={`widget-text ${widget.class_name || ""}`.trim()}
          style={widget.style}
        >
          {widget.value}
        </div>
      );
    
    case "plot":
      return (
        <canvas
          className="widget-plot"
          data-source={widget.source}
          data-plot-type={widget.plot_type}
        />
      );
    
    case "image":
      return (
        <img
          className="widget-image"
          src={widget.url}
          alt={widget.alt || ""}
        />
      );
    
    case "inputs":
      return <InputsContainer handleType={widget.handle_type as HandleType} />;
    
    case "outputs":
      return <OutputsContainer handleType={widget.handle_type as HandleType} />;
    
    case "parameters":
      return <ParametersContainer fields={widget.fields} />;
    
    case "custom":
      return <CustomWidgetContainer component={widget.component} props={widget.props} />;
    
    case "layout":
      // Recursive: nested grid layout
      return <GridLayout layout={widget.layout} />;
    
    default:
      // TypeScript exhaustiveness check
      const _exhaustive: never = widget;
      return <div>Unknown widget type</div>;
  }
};

// =============================================================================
// WIDGET CONTAINER COMPONENTS
// =============================================================================

/**
 * InputsContainer - renders input handles from node data context
 */
const InputsContainer: React.FC<{ handleType?: HandleType }> = ({ handleType = "base" }) => {
  const context = React.useContext(NodeDataContext);
  
  if (!context) {
    return <div className="inputs-container flex flex-col gap-2" data-handle-type={handleType} />;
  }
  
  const { nodeData } = context;
  const inputs = nodeData.inputs || [];
  const inputType = nodeData.inputHandleType || handleType;
  
  return (
    <div className="inputs-container flex flex-col gap-2">
      {inputs.map((input) => (
        <div key={`input-${input.id}`} className="flex items-center gap-2 relative min-h-8 justify-start">
          <HandleFactory
            type="target"
            position={Position.Left}
            id={input.id}
            handleType={inputType}
            handleConfig={input}
            label={input.label}
          />
          <Badge variant="outline" className="text-[11px] font-medium shadow-sm">
            {input.label}
          </Badge>
        </div>
      ))}
    </div>
  );
};

/**
 * OutputsContainer - renders output handles from node data context
 */
const OutputsContainer: React.FC<{ handleType?: HandleType }> = ({ handleType = "base" }) => {
  const context = React.useContext(NodeDataContext);
  
  if (!context) {
    return <div className="outputs-container flex flex-col gap-2" data-handle-type={handleType} />;
  }
  
  const { nodeData } = context;
  const outputs = nodeData.outputs || [];
  const outputType = nodeData.outputHandleType || handleType;
  
  return (
    <div className="outputs-container flex flex-col gap-2">
      {outputs.map((output) => (
        <div key={`output-${output.id}`} className="flex items-center gap-2 relative min-h-8 justify-end">
          <Badge variant="outline" className="text-[11px] font-medium shadow-sm">
            {output.label}
          </Badge>
          <HandleFactory
            type="source"
            position={Position.Right}
            id={output.id}
            handleType={outputType}
            handleConfig={output}
            label={output.label}
          />
        </div>
      ))}
    </div>
  );
};

/**
 * ParametersContainer - renders parameter form fields from node data context
 */
const ParametersContainer: React.FC<{ fields?: string[] }> = ({ fields }) => {
  const context = React.useContext(NodeDataContext);
  
  if (!context) {
    return <div className="parameters-container p-3">No node context available</div>;
  }
  
  const { nodeId, nodeData, onValueChange } = context;
  
  if (!nodeData.parameters) {
    return null;
  }
  
  return (
    <div className="parameters-container">
      <NodeForm
        nodeId={nodeId}
        parameters={nodeData.parameters}
        values={nodeData.values}
        onValueChange={onValueChange}
        fieldConfigs={nodeData.fieldConfigs}
        validation={nodeData.validation}
      />
    </div>
  );
};

/**
 * CustomWidgetContainer - renders custom user-defined widgets
 * TODO: Implement widget registry for custom components
 */
const CustomWidgetContainer: React.FC<{ 
  component: string; 
  props?: Record<string, unknown>;
}> = ({ component, props }) => {
  return (
    <div 
      className="custom-widget p-3" 
      data-component={component}
    >
      <div className="text-sm text-muted-foreground">
        Custom widget: {component}
      </div>
      {props && (
        <pre className="text-xs mt-2 p-2 bg-muted rounded">
          {JSON.stringify(props, null, 2)}
        </pre>
      )}
    </div>
  );
};
