import type { NodeTemplate, NodeDefinition } from '../src/types/schema';
import type { NodeData } from '../src/contexts/NodeDataContext';

// Re-export NodeTemplate for dev convenience
export type { NodeTemplate, NodeDefinition, NodeData };

// Use NodeTemplate for both layout and handle templates
export interface Combination {
  layout: NodeTemplate;
  handle: NodeTemplate;
  label: string;
}
