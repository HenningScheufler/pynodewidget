import { createRoot } from 'react-dom/client';
import { StandaloneViewer, type WorkflowData } from './StandaloneViewer';

// Expose globally for HTML to use
declare global {
  interface Window {
    PyNodeWidget: {
      render: (elementId: string, workflowData: WorkflowData, options?: {
        height?: string;
        interactive?: boolean;
      }) => void;
      renderFromUrl: (elementId: string, jsonUrl: string, options?: {
        height?: string;
        interactive?: boolean;
      }) => Promise<void>;
    };
  }
}

window.PyNodeWidget = {
  render: (elementId: string, workflowData: WorkflowData, options = {}) => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with id "${elementId}" not found`);
      return;
    }
    
    const root = createRoot(element);
    root.render(
      <StandaloneViewer 
        workflowData={workflowData}
        height={options.height || "600px"}
        interactive={options.interactive !== false}
      />
    );
  },
  
  renderFromUrl: async (elementId: string, jsonUrl: string, options = {}) => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with id "${elementId}" not found`);
      return;
    }
    
    try {
      element.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666;">Loading workflow...</div>';
      
      const response = await fetch(jsonUrl);
      if (!response.ok) {
        throw new Error(`Failed to load workflow: ${response.statusText}`);
      }
      const workflowData = await response.json();
      
      const root = createRoot(element);
      root.render(
        <StandaloneViewer 
          workflowData={workflowData}
          height={options.height || "600px"}
          interactive={options.interactive !== false}
        />
      );
    } catch (error) {
      console.error('Error loading workflow:', error);
      element.innerHTML = `<div style="color: red; padding: 20px;">Error loading workflow: ${error.message}</div>`;
      throw error;
    }
  },
};
