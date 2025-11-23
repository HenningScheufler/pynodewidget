import * as React from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDownWideNarrow, ArrowRightFromLine } from "lucide-react";

interface FlowToolbarProps {
  onExport: () => void;
  onLayoutVertical: () => void;
  onLayoutHorizontal: () => void;
}

export function FlowToolbar({
  onExport,
  onLayoutVertical,
  onLayoutHorizontal,
}: FlowToolbarProps) {
  return (
    <div className="flex gap-2">
      <Button onClick={onExport} variant="default" size="sm">
        <Download className="h-4 w-4 mr-2" />
        Export to JSON
      </Button>
      <Button onClick={onLayoutVertical} variant="outline" size="sm">
        <ArrowDownWideNarrow className="h-4 w-4 mr-2" />
        Layout Vertical
      </Button>
      <Button onClick={onLayoutHorizontal} variant="outline" size="sm">
        <ArrowRightFromLine className="h-4 w-4 mr-2" />
        Layout Horizontal
      </Button>
    </div>
  );
}
