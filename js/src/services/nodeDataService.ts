/**
 * Service for managing node data operations.
 * Provides utilities for updating and retrieving node values.
 */

import type { Node } from "@xyflow/react";
import type { CustomNodeData, JsonSchemaProperty, FieldValue } from "../types/schema";

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
    value: FieldValue
  ): Node[] {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const currentData = node.data as unknown as CustomNodeData;
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
   * Get a field value with fallback to default from parameters.
   * 
   * @param node - The node to get the value from
   * @param key - Field key
   * @param property - Parameter property definition
   * @returns The field value, or default if not set
   */
  static getFieldValue(
    node: Node,
    key: string,
    property: JsonSchemaProperty
  ): FieldValue {
    const data = node.data as unknown as CustomNodeData;
    const value = data.values?.[key];
    
    // Return value if it exists, otherwise use default from parameters
    if (value !== undefined && value !== null) {
      return value;
    }
    
    return property.default ?? null;
  }

  /**
   * Check if a field is required based on the node's parameters.
   * 
   * @param node - The node to check
   * @param fieldKey - Field key to check
   * @returns True if the field is required
   */
  static isFieldRequired(node: Node, fieldKey: string): boolean {
    const data = node.data as unknown as CustomNodeData;
    return data.parameters?.required?.includes(fieldKey) ?? false;
  }

  /**
   * Get all field values from a node.
   * 
   * @param node - The node to get values from
   * @returns Object containing all field values
   */
  static getAllValues(node: Node): Record<string, FieldValue> {
    const data = node.data as unknown as CustomNodeData;
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
    values: Record<string, FieldValue>
  ): Node[] {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const currentData = node.data as unknown as CustomNodeData;
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
