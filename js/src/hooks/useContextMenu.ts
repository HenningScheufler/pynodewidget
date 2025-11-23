import { useState, useCallback } from "react";
import type { Node, Edge } from "@xyflow/react";
import type { ContextMenuState } from "../types/schema";

/**
 * Hook for context menu management
 */
export function useContextMenu(
  setNodes: (updater: (nodes: Node[]) => Node[]) => void,
  setEdges: (updater: (edges: Edge[]) => Edge[]) => void
) {
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);

  const onNodeContextMenu = useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.preventDefault();
      setContextMenu({
        id: node.id,
        type: "node",
        x: event.clientX,
        y: event.clientY,
      });
    },
    []
  );

  const onEdgeContextMenu = useCallback(
    (event: React.MouseEvent, edge: Edge) => {
      event.preventDefault();
      setContextMenu({
        id: edge.id,
        type: "edge",
        x: event.clientX,
        y: event.clientY,
      });
    },
    []
  );

  const onPaneClick = useCallback(() => {
    setContextMenu(null);
  }, []);

  const onDelete = useCallback(() => {
    if (!contextMenu) return;

    if (contextMenu.type === "node") {
      setNodes((nds) => nds.filter((n) => n.id !== contextMenu.id));
      // Also remove connected edges
      setEdges((eds) =>
        eds.filter(
          (e) => e.source !== contextMenu.id && e.target !== contextMenu.id
        )
      );
    } else {
      setEdges((eds) => eds.filter((e) => e.id !== contextMenu.id));
    }

    setContextMenu(null);
  }, [contextMenu, setNodes, setEdges]);

  const closeContextMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  return {
    contextMenu,
    onNodeContextMenu,
    onEdgeContextMenu,
    onPaneClick,
    onDelete,
    closeContextMenu,
  };
}
