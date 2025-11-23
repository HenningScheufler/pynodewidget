import { nodeTemplatesByHandleType } from './constants';

export const createMockModel = (handleType: 'base' | 'button' | 'labeled' = 'base') => ({
  nodes: [],
  edges: [],
  node_templates: [nodeTemplatesByHandleType[handleType]],
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
});
