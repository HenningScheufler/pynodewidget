import type { Layout, HandleType, NodeData } from './types';

export const layouts: Layout[] = [
  { type: 'horizontal', label: 'Horizontal Layout' },
  { type: 'vertical', label: 'Vertical Layout' },
  { type: 'compact', label: 'Compact Layout' }
];

export const handleTypes: HandleType[] = [
  { type: 'base', label: 'Base Handle' },
  { type: 'button', label: 'Button Handle' },
  { type: 'labeled', label: 'Labeled Handle' }
];

export const sampleNodeData: NodeData = {
  label: 'Data Processor',
  parameters: {
    type: 'object',
    properties: {
      name: { 
        type: 'string', 
        title: 'Name', 
        default: 'processor' 
      },
      count: { 
        type: 'number', 
        title: 'Count', 
        default: 10 
      },
      enabled: { 
        type: 'boolean', 
        title: 'Enabled', 
        default: true 
      }
    },
    required: ['name']
  },
  inputs: [
    { id: 'input1', label: 'First Input' },
    { id: 'input2', label: 'Second Input' }
  ],
  outputs: [
    { id: 'output1', label: 'Result' },
    { id: 'output2', label: 'Stats' }
  ],
  values: {
    name: 'processor',
    count: 10,
    enabled: true
  }
};

export const nodeTemplatesByHandleType = {
  base: {
    type: 'base_node',
    label: 'Base Handle Node',
    icon: '⚙️',
    description: 'Node with base handle style',
    defaultData: { ...sampleNodeData, handleType: 'base' as const }
  },
  button: {
    type: 'button_node',
    label: 'Button Handle Node',
    icon: '🔘',
    description: 'Node with button handle style',
    defaultData: { ...sampleNodeData, handleType: 'button' as const }
  },
  labeled: {
    type: 'labeled_node',
    label: 'Labeled Handle Node',
    icon: '🏷️',
    description: 'Node with labeled handle style',
    defaultData: { ...sampleNodeData, handleType: 'labeled' as const }
  }
};
