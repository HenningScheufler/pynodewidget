import { nodeTemplatesByHandleType, gridLayoutExamples } from './constants';

// Get default template data safely
const getDefaultTemplate = () => gridLayoutExamples[0]?.defaultData || {};

export const createMockModel = (templates: any[] = [getDefaultTemplate()]) => {
  // Create sample nodes from the templates
  const sampleNodes = templates.map((template, index) => ({
    id: `node-${index}`,
    type: `template-${index}`,
    position: { x: 250, y: 150 },
    data: template
  }));

  return {
    nodes: sampleNodes,
    edges: [],
    node_templates: templates.map((template, index) => ({
      type: `template-${index}`,
      label: template.label || `Template ${index}`,
      icon: template.header?.icon || '⚙️',
      description: template.description || '',
      defaultData: template
    })),
    node_values: {},
    fit_view: true,
    height: "600px",
    callbacks: {} as Record<string, Function[]>,
    get(key: string) { 
      return (this as any)[key];
    },
    set(key: string, value: any) {
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
