/**
 * LayoutFactory - Grid layout system
 * 
 * This module provides the grid-based layout system for nodes.
 * Legacy layout types (horizontal, vertical, compact) have been removed
 * in favor of the flexible grid system.
 */

import React from "react";
import type { NodeGridLayoutConfig } from "../../types/grid";
import { GridLayout } from "./GridLayout";

export interface LayoutFactoryProps {
  config: NodeGridLayoutConfig;
}

/**
 * LayoutFactory component - renders grid layouts
 */
export const LayoutFactory: React.FC<LayoutFactoryProps> = ({ config }) => {
  if (config.type === "grid") {
    return <GridLayout layout={config.layout} />;
  }
  
  // Fallback for invalid config
  console.error("Invalid layout configuration:", config);
  return <div className="p-3 text-red-500">Invalid layout type: {config.type}</div>;
};