import React from "react";
import type { NodeTemplate } from "./types/schema";
import { Plus } from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface NodeSidebarProps {
  onAddNode: (template: NodeTemplate) => void;
  templates: NodeTemplate[];
}

export function NodeSidebar({ onAddNode, templates }: NodeSidebarProps) {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {templates.map((template, idx) => (
              <SidebarMenuItem key={idx}>
                <SidebarMenuButton
                  onClick={() => onAddNode(template)}
                  tooltip={template.description}
                >
                  <div className="flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground rounded text-sm font-bold">
                    {template.icon || <Plus className="h-3 w-3" />}
                  </div>
                  <span>{template.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
