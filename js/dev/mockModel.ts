import { nodeTemplatesByHandleType, nodeExamples } from './constants';
import type { NodeTemplate } from '../src/types/schema';

// Get default template safely
const getDefaultTemplate = () => nodeExamples[0] || {};

/**
 * Validate that node template has the required definition structure
 */
function validateNodeTemplate(template: any): template is NodeTemplate {
  if (!template || typeof template !== 'object') {
    return false;
  }
  
  // Must have definition field
  if (!template.definition || typeof template.definition !== 'object') {
    console.error('Node template missing required "definition" field:', template);
    return false;
  }
  
  // Definition must have grid field
  if (!template.definition.grid || typeof template.definition.grid !== 'object') {
    console.error('Node definition missing "grid" field:', template.definition);
    return false;
  }
  
  // Grid must have cells array
  if (!Array.isArray(template.definition.grid.cells)) {
    console.error('Node grid missing "cells" array:', template.definition.grid);
    return false;
  }
  
  return true;
}

export const createMockModel = (templates: NodeTemplate[] = [getDefaultTemplate()], startIndex: number = 0) => {
  // Validate all templates have definition structure
  templates.forEach((template, index) => {
    if (!validateNodeTemplate(template)) {
      throw new Error(`Template ${index} is missing required definition structure. All nodes must use grid+components architecture.`);
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
      data: {
        label: template.label,
        ...template.definition,  // grid, style
        values: template.defaultValues || {}
      }
    };
  });

  const nodeTemplates = templates;

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
      // Validate templates have definition structure when being set
      if (key === 'node_templates' && Array.isArray(value)) {
        value.forEach((template, index) => {
          if (!validateNodeTemplate(template)) {
            throw new Error(`Template ${index} (type: ${template.type}) is missing required definition structure`);
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
