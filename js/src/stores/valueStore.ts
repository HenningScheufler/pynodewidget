import { create } from 'zustand';
import type { Node } from '@xyflow/react';
import type { PrimitiveFieldValue } from '../types/schema';

/**
 * Value store for managing dynamic node values separately from structural data.
 * 
 * This store handles mutable values (like progress, input fields, etc.) that change
 * frequently, while keeping the structural node data (schema, layout, connections)
 * in the main React Flow state.
 * 
 * Benefits:
 * - Avoids re-rendering entire node structure when only values change
 * - Provides centralized value management for updates from Python
 * - Enables efficient batched updates
 */

export interface NodeValues {
  [nodeId: string]: {
    [fieldName: string]: PrimitiveFieldValue;
  };
}

interface ValueStoreState {
  /** All node values indexed by node ID */
  values: NodeValues;
  
  /** Update a single field value for a node */
  updateValue: (nodeId: string, fieldName: string, value: PrimitiveFieldValue) => void;
  
  /** Update multiple fields for a node at once */
  updateNodeValues: (nodeId: string, values: Record<string, PrimitiveFieldValue>) => void;
  
  /** Get all values for a specific node */
  getNodeValues: (nodeId: string) => Record<string, PrimitiveFieldValue> | undefined;
  
  /** Initialize values from nodes array (called on mount/Python sync) */
  initializeFromNodes: (nodes: Node[]) => void;
  
  /** Sync store values back to nodes array */
  syncToNodes: (nodes: Node[]) => Node[];
  
  /** Clear all values */
  clear: () => void;
}

export const useValueStore = create<ValueStoreState>((set, get) => ({
  values: {},
  
  updateValue: (nodeId, fieldName, value) =>
    set((state) => ({
      values: {
        ...state.values,
        [nodeId]: {
          ...state.values[nodeId],
          [fieldName]: value,
        },
      },
    })),
  
  updateNodeValues: (nodeId, values) =>
    set((state) => ({
      values: {
        ...state.values,
        [nodeId]: {
          ...state.values[nodeId],
          ...values,
        },
      },
    })),
  
  getNodeValues: (nodeId) => get().values[nodeId],
  
  initializeFromNodes: (nodes) => {
    const values: NodeValues = {};
    nodes.forEach((node) => {
      if (node.data?.values) {
        values[node.id] = { ...node.data.values };
      }
    });
    set({ values });
  },
  
  syncToNodes: (nodes) => {
    const { values } = get();
    return nodes.map((node) => {
      if (values[node.id]) {
        return {
          ...node,
          data: {
            ...node.data,
            values: { ...values[node.id] },
          },
        };
      }
      return node;
    });
  },
  
  clear: () => set({ values: {} }),
}));
