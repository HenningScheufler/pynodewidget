import { nodeTemplatesByHandleType, nodeExamples } from './constants';
import type { CustomNodeData } from '../src/types/schema';

// Get default template data safely
const getDefaultTemplate = () => nodeExamples[0]?.defaultData || {};

/**
 * Validate that node data has the required grid structure
 */
function validateNodeHasGrid(data: any): data is CustomNodeData {
  if (!data || typeof data !== 'object') {
    return false;
  }
  
  // Must have grid field
  if (!data.grid || typeof data.grid !== 'object') {
    console.error('Node data missing required "grid" field:', data);
    return false;
  }
  
  // Grid must have cells array
  if (!Array.isArray(data.grid.cells)) {
    console.error('Node grid missing "cells" array:', data.grid);
    return false;
  }
  
  return true;
}

export const createMockModel = (templates: any[] = [getDefaultTemplate()], startIndex: number = 0) => {
  // Validate all templates have grid structure
  templates.forEach((template, index) => {
    if (!validateNodeHasGrid(template)) {
      throw new Error(`Template ${index} is missing required grid structure. All nodes must use grid+components architecture.`);
    }
  });
  
  // Create sample nodes from the templates
  const sampleNodes = templates.map((template, templateIndex) => {
    // Use the provided startIndex to correctly map to nodeExamples
    const exampleIndex = startIndex + templateIndex;
    const nodeType = nodeExamples[exampleIndex]?.type || `template-${exampleIndex}`;
    
    return {
      id: `node-${templateIndex}`,
      type: nodeType,
      position: { x: 250, y: 150 },
      data: template
    };
  });

  const nodeTemplates = templates.map((template, templateIndex) => {
    const exampleIndex = startIndex + templateIndex;
    const nodeType = nodeExamples[exampleIndex]?.type || `template-${exampleIndex}`;
    return {
      type: nodeType,
      label: template.label || `Template ${exampleIndex}`,
      icon: template.header?.icon || '⚙️',
      description: template.description || '',
      defaultData: template
    };
  });

  return {
    nodes: sampleNodes,
    edges: [],
    node_templates: nodeTemplates,
    node_values: {},
    fit_view: true,
    height: "600px",
    callbacks: {} as Record<string, Function[]>,
    get(key: string) { 
      return (this as any)[key];
    },
    set(key: string, value: any) {
      // Validate nodes have grid structure when being set
      if (key === 'nodes' && Array.isArray(value)) {
        value.forEach((node, index) => {
          if (node.data && !validateNodeHasGrid(node.data)) {
            throw new Error(`Node ${index} (id: ${node.id}) is missing required grid structure`);
          }
        });
      }
      
      (this as any)[key] = value;
      const changeEvent = `change:${key}`;
      if (this.callbacks[changeEvent]) {
        this.callbacks[changeEvent].forEach(callback => callback());
      }
    },
    on(event: string, callback: Function) {
      if (!this.callbacks[event]) this.callbacks[event] = [];
      this.callbacks[event].push(callback);
    },
    off(event: string, callback: Function) {
      if (this.callbacks[event]) {
        this.callbacks[event] = this.callbacks[event].filter(cb => cb !== callback);
      }
    },
    save_changes() {}
  };
};
