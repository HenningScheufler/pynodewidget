/**
 * Service for managing node layout and handle type operations.
 * Provides utilities for updating node layouts and handle configurations.
 */

import type { Node } from "@xyflow/react";
import type { CustomNodeData, HandleConfig } from "../types/schema";
import type { HandleType } from "@/components/handles/HandleFactory";

export class NodeLayoutService {
  /**
   * Update the layout type of a node.
   * 
   * @param nodes - Array of all nodes
   * @param nodeId - ID of the node to update
   * @param layoutType - New layout type (e.g., "horizontal", "vertical", "compact")
   * @returns New array of nodes with the updated layout
   */
  static updateNodeLayout(
    nodes: Node[],
    nodeId: string,
    layoutType: string
  ): Node[] {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const currentData = node.data as unknown as CustomNodeData;
        return {
          ...node,
          data: {
            ...currentData,
            layoutType,
          },
        };
      }
      return node;
    });
  }

  /**
   * Update the handle type for a specific handle.
   * 
   * @param nodes - Array of all nodes
   * @param nodeId - ID of the node containing the handle
   * @param handleId - ID of the handle to update
   * @param handleType - New handle type ("base", "button", or "labeled")
   * @param isInput - Whether this is an input handle (true) or output handle (false)
   * @returns New array of nodes with the updated handle type
   */
  static updateHandleType(
    nodes: Node[],
    nodeId: string,
    handleId: string,
    handleType: HandleType,
    isInput: boolean
  ): Node[] {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const currentData = node.data as unknown as CustomNodeData;
        const handleKey = isInput ? "inputs" : "outputs";
        const handles = currentData[handleKey] || [];
        
        return {
          ...node,
          data: {
            ...currentData,
            [handleKey]: handles.map((h: HandleConfig) =>
              h.id === handleId ? { ...h, handle_type: handleType } : h
            ),
          },
        };
      }
      return node;
    });
  }

  /**
   * Update handle types for all input handles of a node.
   * 
   * @param nodes - Array of all nodes
   * @param nodeId - ID of the node to update
   * @param handleType - New handle type for all inputs
   * @returns New array of nodes with updated input handle types
   */
  static updateAllInputHandleTypes(
    nodes: Node[],
    nodeId: string,
    handleType: HandleType
  ): Node[] {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const currentData = node.data as unknown as CustomNodeData;
        const inputs = currentData.inputs || [];
        
        return {
          ...node,
          data: {
            ...currentData,
            inputs: inputs.map((h: HandleConfig) => ({
              ...h,
              handle_type: handleType,
            })),
          },
        };
      }
      return node;
    });
  }

  /**
   * Update handle types for all output handles of a node.
   * 
   * @param nodes - Array of all nodes
   * @param nodeId - ID of the node to update
   * @param handleType - New handle type for all outputs
   * @returns New array of nodes with updated output handle types
   */
  static updateAllOutputHandleTypes(
    nodes: Node[],
    nodeId: string,
    handleType: HandleType
  ): Node[] {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const currentData = node.data as unknown as CustomNodeData;
        const outputs = currentData.outputs || [];
        
        return {
          ...node,
          data: {
            ...currentData,
            outputs: outputs.map((h: HandleConfig) => ({
              ...h,
              handle_type: handleType,
            })),
          },
        };
      }
      return node;
    });
  }

  /**
   * Update handle types for all handles (both inputs and outputs) of a node.
   * 
   * @param nodes - Array of all nodes
   * @param nodeId - ID of the node to update
   * @param handleType - New handle type for all handles
   * @returns New array of nodes with updated handle types
   */
  static updateAllHandleTypes(
    nodes: Node[],
    nodeId: string,
    handleType: HandleType
  ): Node[] {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const currentData = node.data as unknown as CustomNodeData;
        const inputs = currentData.inputs || [];
        const outputs = currentData.outputs || [];
        
        return {
          ...node,
          data: {
            ...currentData,
            inputs: inputs.map((h: HandleConfig) => ({
              ...h,
              handle_type: handleType,
            })),
            outputs: outputs.map((h: HandleConfig) => ({
              ...h,
              handle_type: handleType,
            })),
          },
        };
      }
      return node;
    });
  }

  /**
   * Get the handle type for a specific handle.
   * 
   * @param node - The node containing the handle
   * @param handleId - ID of the handle
   * @param isInput - Whether this is an input handle
   * @returns The handle type, or "base" as default
   */
  static getHandleType(
    node: Node,
    handleId: string,
    isInput: boolean
  ): HandleType {
    const currentData = node.data as unknown as CustomNodeData;
    const handleKey = isInput ? "inputs" : "outputs";
    const handles = currentData[handleKey] || [];
    const handle = handles.find((h: HandleConfig) => h.id === handleId);
    
    return (handle?.handle_type as HandleType) || "base";
  }

  /**
   * Get the layout type of a node.
   * 
   * @param node - The node to get the layout from
   * @returns The layout type, or "horizontal" as default
   */
  static getLayoutType(node: Node): string {
    const currentData = node.data as unknown as CustomNodeData;
    return currentData.layoutType || "horizontal";
  }
}
