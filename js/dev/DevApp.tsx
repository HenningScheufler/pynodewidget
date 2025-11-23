import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ComponentPreview } from './components/ComponentPreview';
import { NodeEditor } from './components/NodeEditor';
import { TabButton } from './components/TabButton';
import '../src/style.css';

type TabType = 'editor' | 'preview';

export function DevApp() {
  const [activeTab, setActiveTab] = useState<TabType>('editor');

  return (
    <div className="min-h-screen bg-background p-5">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          PyNodeWidget Development
        </h1>
        <p className="text-sm text-muted-foreground">
          Interactive development environment for node editor and components
        </p>
      </div>

      <div className="flex gap-2 mb-5 border-b">
        <TabButton
          label="Node Editor"
          icon="🎨"
          isActive={activeTab === 'editor'}
          onClick={() => setActiveTab('editor')}
        />
        <TabButton
          label="Component Preview"
          icon="🔲"
          isActive={activeTab === 'preview'}
          onClick={() => setActiveTab('preview')}
        />
      </div>

      <div>
        {activeTab === 'editor' ? <NodeEditor /> : <ComponentPreview />}
      </div>
    </div>
  );
}

// Mount the app
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<DevApp />);
}
