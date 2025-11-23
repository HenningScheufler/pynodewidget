import { useCallback } from "react";
import type { Node, Edge } from "@xyflow/react";
import dagre from "dagre";

type LayoutDirection = "TB" | "LR";

const DEFAULT_NODE_WIDTH = 250;
const DEFAULT_NODE_HEIGHT = 200;
const NODES_SEP = 120;
const RANK_SEP = 180;

/**
 * Calculate node dimensions based on content
 */
function getNodeDimensions(node: Node): { width: number; height: number } {
  // Check if node has measured dimensions
  if (node.measured?.width && node.measured?.height) {
    return {
      width: node.measured.width,
      height: node.measured.height,
    };
  }
  
  // Estimate based on data
  const data = node.data || {};
  const baseHeight = 80; // Header + padding
  const fieldHeight = 60; // Approximate height per field
  
  // Count fields from parameters
  let fieldCount = 0;
  if (data.parameters?.properties) {
    fieldCount = Object.keys(data.parameters.properties).length;
  }
  
  const estimatedHeight = baseHeight + (fieldCount * fieldHeight);
  
  return {
    width: node.width || DEFAULT_NODE_WIDTH,
    height: Math.max(DEFAULT_NODE_HEIGHT, estimatedHeight),
  };
}

/**
 * Auto-layout function using Dagre
 */
export function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  direction: LayoutDirection = "TB"
): { nodes: Node[]; edges: Edge[] } {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  
  dagreGraph.setGraph({ 
    rankdir: direction, 
    nodesep: NODES_SEP, 
    ranksep: RANK_SEP 
  });

  nodes.forEach((node) => {
    const { width, height } = getNodeDimensions(node);
    dagreGraph.setNode(node.id, { width, height });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const { width, height } = getNodeDimensions(node);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - width / 2,
        y: nodeWithPosition.y - height / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}

/**
 * Hook for auto-layout functionality
 */
export function useAutoLayout(
  nodes: Node[],
  edges: Edge[],
  setNodes: (nodes: Node[]) => void
) {
  const onLayout = useCallback(
    (direction: LayoutDirection) => {
      const { nodes: layoutedNodes } = getLayoutedElements(nodes, edges, direction);
      setNodes(layoutedNodes);
    },
    [nodes, edges, setNodes]
  );

  return { onLayout };
}
