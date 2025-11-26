/**
 * Content renderer for grid items.
 * 
 * This component renders different content area types (inputs, outputs, parameters)
 * using existing node components. It accesses node data from context.
 */

import React from "react";
import { Position } from "@xyflow/react";
import type { ContentArea } from "../../types/grid";
import type { CustomNodeData, FieldValue, HandleConfig } from "../../types/schema";
import type { HandleType } from "../handles/HandleFactory";
import { HandleFactory } from "../handles/HandleFactory";
import { Badge } from "@/components/ui/badge";
import { NodeForm } from "../NodeForm";

/**
 * Context for passing node data down to content areas
 */
export interface NodeDataContextValue {
  nodeId: string;
  nodeData: CustomNodeData;
  onValueChange: (key: string, value: FieldValue) => void;
}

export const NodeDataContext = React.createContext<NodeDataContextValue | null>(null);

interface ContentRendererProps {
  content: ContentArea;
}

/**
 * ContentRenderer - renders different content types based on ContentArea
 */
export const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const context = React.useContext(NodeDataContext);
  
  if (!context) {
    return <div className="text-muted-foreground text-xs">No node context available</div>;
  }
  
  const { nodeId, nodeData, onValueChange } = context;
  
  switch (content.type) {
    case "inputs":
      return <InputsContainer 
        inputs={nodeData.inputs || []} 
        handleType={content.handleType as HandleType || nodeData.inputHandleType as HandleType || "base"}
      />;
    
    case "outputs":
      return <OutputsContainer 
        outputs={nodeData.outputs || []} 
        handleType={content.handleType as HandleType || nodeData.outputHandleType as HandleType || "base"}
      />;
    
    case "parameters":
      if (!nodeData.parameters) {
        return null;
      }
      return (
        <NodeForm
          nodeId={nodeId}
          parameters={nodeData.parameters}
          values={nodeData.values}
          onValueChange={onValueChange}
          fieldConfigs={nodeData.fieldConfigs}
          validation={nodeData.validation}
        />
      );
    
    default:
      return <div>Unknown content type</div>;
  }
};

// =============================================================================
// CONTENT AREA COMPONENTS
// =============================================================================

/**
 * InputsContainer - renders input handles
 */
interface InputsContainerProps {
  inputs: HandleConfig[];
  handleType: HandleType;
}

const InputsContainer: React.FC<InputsContainerProps> = ({ inputs, handleType }) => {
  if (inputs.length === 0) {
    return null;
  }
  
  return (
    <div className="inputs-container flex flex-col gap-2">
      {inputs.map((input) => (
        <div key={`input-${input.id}`} className="flex items-center gap-2 relative min-h-8 justify-start">
          <HandleFactory
            type="target"
            position={Position.Left}
            id={input.id}
            handleType={input.handle_type as HandleType || handleType}
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
 * OutputsContainer - renders output handles
 */
interface OutputsContainerProps {
  outputs: HandleConfig[];
  handleType: HandleType;
}

const OutputsContainer: React.FC<OutputsContainerProps> = ({ outputs, handleType }) => {
  if (outputs.length === 0) {
    return null;
  }
  
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
            handleType={output.handle_type as HandleType || handleType}
            handleConfig={output}
            label={output.label}
          />
        </div>
      ))}
    </div>
  );
};
