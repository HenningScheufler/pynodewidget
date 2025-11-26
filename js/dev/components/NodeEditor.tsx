import { useState, useEffect } from 'react';
import { render as renderEditor } from '../../src/index';
import { createMockModel } from '../mockModel';
import { gridLayoutExamples } from '../constants';
import { Card } from '../../src/components/ui/card';
import { Label } from '../../src/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../src/components/ui/select';

export function NodeEditor() {
  const [error, setError] = useState<string | null>(null);
  const [selectedLayout, setSelectedLayout] = useState(0);
  
  useEffect(() => {
    if (!gridLayoutExamples || gridLayoutExamples.length === 0) {
      setError('Grid layout examples not loaded');
      return;
    }
    
    const selectedExample = gridLayoutExamples[selectedLayout];
    if (!selectedExample || !selectedExample.defaultData) {
      setError('Selected layout not found');
      return;
    }
    
    const mockModel = createMockModel([selectedExample.defaultData]);
    const editorEl = document.getElementById('editor-view');
    
    if (editorEl) {
      // Clear previous content
      editorEl.innerHTML = '';
      
      try {
        renderEditor({ model: mockModel as any, el: editorEl, experimental: {} as any });
      } catch (err: any) {
        console.error('Error rendering editor:', err);
        setError(`${err.message}\n${err.stack}`);
      }
    }
  }, [selectedLayout]);

  if (error) {
    return (
      <Card className="w-full h-[600px] p-5 overflow-auto">
        <pre className="text-destructive m-0">{error}</pre>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="layout-type" className="text-sm font-medium min-w-[100px]">
              Grid Layout:
            </Label>
            <Select 
              value={selectedLayout.toString()} 
              onValueChange={(value: string) => setSelectedLayout(parseInt(value))}
            >
              <SelectTrigger id="layout-type" className="w-[300px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {gridLayoutExamples.map((example, index) => (
                  <SelectItem key={example.type} value={index.toString()}>
                    {example.icon} {example.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-sm text-muted-foreground pl-[116px]">
            {gridLayoutExamples[selectedLayout]?.description || 'Loading...'}
          </div>
        </div>
      </Card>

      <Card 
        id="editor-view" 
        className="w-full h-[600px] overflow-hidden"
      />
    </div>
  );
}
