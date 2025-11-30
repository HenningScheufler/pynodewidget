/**
 * Service for managing node data operations.
 * Provides utilities for updating and retrieving node values.
 */

import type { Node } from "@xyflow/react";
import type { NodeData } from "../contexts/NodeDataContext";
import type { PrimitiveFieldValue, ComponentType } from "../types/schema";

export class NodeDataService {
  /**
   * Update a single field value in a node.
   * Returns a new array with the updated node.
   * 
   * @param nodes - Array of all nodes
   * @param nodeId - ID of the node to update
   * @param key - Field key to update
   * @param value - New value for the field
   * @returns New array of nodes with the updated value
   */
  static updateNodeValue(
    nodes: Node[],
    nodeId: string,
    key: string,
    value: PrimitiveFieldValue
  ): Node[] {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const currentData = node.data as unknown as NodeData;
        return {
          ...node,
          data: {
            ...currentData,
            values: {
              ...currentData.values,
              [key]: value,
            },
          },
        };
      }
      return node;
    });
  }

  /**
   * Check if a field is required based on the node's grid components.
   * 
   * @param node - The node to check
   * @param fieldKey - Field key to check (component ID)
   * @returns True if the field/component is marked as required
   */
  static isFieldRequired(node: Node, fieldKey: string): boolean {
    const data = node.data as unknown as NodeData;
    
    // Search through grid cells for a component with matching ID
    if (!data.grid?.cells) {
      return false;
    }
    
    for (const cell of data.grid.cells) {
      for (const component of cell.components) {
        if (component.id === fieldKey) {
          // Check if component has required property (handles have this)
          return 'required' in component ? (component as any).required === true : false;
        }
      }
    }
    
    return false;
  }

  /**
   * Get all field values from a node.
   * 
   * @param node - The node to get values from
   * @returns Object containing all field values
   */
  static getAllValues(node: Node): Record<string, PrimitiveFieldValue> {
    const data = node.data as unknown as NodeData;
    return data.values || {};
  }

  /**
   * Update multiple field values at once.
   * 
   * @param nodes - Array of all nodes
   * @param nodeId - ID of the node to update
   * @param values - Object with key-value pairs to update
   * @returns New array of nodes with the updated values
   */
  static updateMultipleValues(
    nodes: Node[],
    nodeId: string,
    values: Record<string, PrimitiveFieldValue>
  ): Node[] {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const currentData = node.data as unknown as NodeData;
        return {
          ...node,
          data: {
            ...currentData,
            values: {
              ...currentData.values,
              ...values,
            },
          },
        };
      }
      return node;
    });
  }
}
