import { createRoot } from 'react-dom/client';
import { renderStandalone } from '../src/standalone_entry';
import workflowData from './export_demo_workflow.json';
import '../src/style.css';

const container = document.getElementById('container');
if (container) {
  const root = createRoot(container);
  root.render(renderStandalone(workflowData));
}
