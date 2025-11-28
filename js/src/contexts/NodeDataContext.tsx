/**
 * NodeDataContext - Provides node data and value change handlers to components
 * 
 * This context allows components within a node to access:
 * - Node ID
 * - Node data (configuration, values, etc.)
 * - Value change handler for field updates
 */

import React from "react";
import type { NodeGrid, NodeStyleConfig, PrimitiveFieldValue } from "../types/schema";

/**
 * Node data interface for runtime rendering
 * Contains merged template definition + instance values
 */
export interface NodeData {
  label: string;
  grid: NodeGrid;
  style?: NodeStyleConfig;
  values: Record<string, PrimitiveFieldValue>;
}

/**
 * Context value interface
 */
export interface NodeDataContextValue {
  nodeId: string;
  nodeData: NodeData;
  onValueChange: (key: string, value: PrimitiveFieldValue) => void;
}

/**
 * Context for passing node data down to components
 */
export const NodeDataContext = React.createContext<NodeDataContextValue | null>(null);

/**
 * Hook to access node data context
 * Returns null if used outside of NodeDataContext.Provider (for testing)
 * In production, context should always be available
 */
export function useNodeDataContext(): NodeDataContextValue | null {
  return React.useContext(NodeDataContext);
}
