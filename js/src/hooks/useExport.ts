import { useCallback } from "react";
import type { Node, Edge } from "@xyflow/react";

/**
 * Hook for export functionality
 */
export function useExport(nodes: Node[], edges: Edge[]) {
  const exportToJSON = useCallback(() => {
    const data = {
      nodes,
      edges,
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "nodeflow-data.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [nodes, edges]);

  return { exportToJSON };
}
