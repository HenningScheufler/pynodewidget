import React from "react";
import type { HandleConfig } from "../../types/schema";
import type { HandleType } from "../handles/HandleFactory";
import { HorizontalLayout } from "./HorizontalLayout";
import { VerticalLayout } from "./VerticalLayout";
import { CompactLayout } from "./CompactLayout";

export interface LayoutProps {
  inputs?: HandleConfig[];
  outputs?: HandleConfig[];
  children?: React.ReactNode;
  handleType?: HandleType;
  inputHandleType?: HandleType;
  outputHandleType?: HandleType;
}

export type LayoutComponent = React.ComponentType<LayoutProps>;

/**
 * Registry of available layout components
 */
const layoutRegistry: Record<string, LayoutComponent> = {
  horizontal: HorizontalLayout,
  vertical: VerticalLayout,
  compact: CompactLayout,
  default: HorizontalLayout, // Explicit default alias
};

/**
 * Get a layout component by type
 * @param layoutType - The layout type identifier
 * @returns The layout component, or HorizontalLayout as fallback
 */
export function getLayout(layoutType?: string): LayoutComponent {
  if (!layoutType) {
    return HorizontalLayout;
  }
  
  return layoutRegistry[layoutType.toLowerCase()] || HorizontalLayout;
}

/**
 * Register a custom layout component
 * @param layoutType - Unique identifier for the layout
 * @param component - React component implementing LayoutProps interface
 */
export function registerLayout(layoutType: string, component: LayoutComponent): void {
  layoutRegistry[layoutType.toLowerCase()] = component;
}

/**
 * Get all registered layout types
 * @returns Array of layout type identifiers
 */
export function getAvailableLayouts(): string[] {
  return Object.keys(layoutRegistry).filter(key => key !== 'default');
}
