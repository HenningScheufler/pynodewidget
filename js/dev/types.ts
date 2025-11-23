export interface Layout {
  type: string;
  label: string;
}

export interface HandleType {
  type: string;
  label: string;
}

export interface NodeData {
  label: string;
  parameters: any;
  inputs: Array<{ id: string; label: string }>;
  outputs: Array<{ id: string; label: string }>;
  values: Record<string, any>;
  layoutType?: string;
  handleType?: string;
}

export interface Combination {
  layout: Layout;
  handle: HandleType;
  label: string;
}
