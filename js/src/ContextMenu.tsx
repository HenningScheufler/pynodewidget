import React from "react";
import type { Node, Edge } from "@xyflow/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface ContextMenuProps {
  id: string;
  type: "node" | "edge";
  x: number;
  y: number;
  onDelete: () => void;
  onClose: () => void;
}

export function ContextMenu({ x, y, onDelete, onClose }: ContextMenuProps) {
  React.useEffect(() => {
    const handleClickOutside = () => onClose();
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <Card
      className="fixed z-[1000] min-w-[150px] p-1 shadow-md"
      style={{ top: y, left: x }}
      onClick={(e) => e.stopPropagation()}
    >
      <Button 
        variant="ghost" 
        className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
        onClick={onDelete}
      >
        <Trash2 className="h-4 w-4" />
        Delete
      </Button>
    </Card>
  );
}
