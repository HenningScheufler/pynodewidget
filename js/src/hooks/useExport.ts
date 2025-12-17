import { useCallback } from "react";
import type { Node, Edge } from "@xyflow/react";
import type { NodeValues } from "../types/schema";

/**
 * Hook for export functionality
 */
export function useExport(nodes: Node[], edges: Edge[], nodeValues: NodeValues) {
  const exportToJSON = useCallback(() => {
    const data = {
      nodes,
      edges,
      nodeValues: nodeValues || {},
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "nodeflow-data.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [nodes, edges, nodeValues]);

  return { exportToJSON };
}
