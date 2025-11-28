/**
 * NodeDataContext - Provides node data and value change handlers to components
 * 
 * This context allows components within a node to access:
 * - Node ID
 * - Node data (configuration, values, etc.)
 * - Value change handler for field updates
 */

import React from "react";
import type { CustomNodeData, PrimitiveFieldValue } from "../types/schema";

/**
 * Context value interface
 */
export interface NodeDataContextValue {
  nodeId: string;
  nodeData: CustomNodeData;
  onValueChange: (key: string, value: PrimitiveFieldValue) => void;
}

/**
 * Context for passing node data down to components
 */
export const NodeDataContext = React.createContext<NodeDataContextValue | null>(null);

/**
 * Hook to access node data context
 * Throws if used outside of NodeDataContext.Provider
 */
export function useNodeDataContext(): NodeDataContextValue {
  const context = React.useContext(NodeDataContext);
  if (!context) {
    throw new Error('useNodeDataContext must be used within NodeDataContext.Provider');
  }
  return context;
}
