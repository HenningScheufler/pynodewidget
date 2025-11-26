import type { CustomNodeData } from '../src/types/schema';

export interface GridLayoutExample {
  type: string;
  label: string;
  icon: string;
  description: string;
  defaultData: CustomNodeData;
}

export interface HandleTypeTemplate {
  type: string;
  label: string;
  icon: string;
  description: string;
  defaultData: CustomNodeData;
}

// Re-export CustomNodeData as NodeData for dev convenience
export type NodeData = CustomNodeData;

export interface Combination {
  layout: GridLayoutExample;
  handle: HandleTypeTemplate;
  label: string;
}
