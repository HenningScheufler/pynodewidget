import { useState, useEffect, useRef } from 'react';
import { render as renderEditor } from '../../src/index';
import { createMockModel } from '../mockModel';
import { nodeExamples } from '../constants';
import { Card } from '../../src/components/ui/card';
import { Label } from '../../src/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../src/components/ui/select';

export function NodeEditor() {
  const [error, setError] = useState<string | null>(null);
  const [selectedLayout, setSelectedLayout] = useState(0);
  const editorElRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (!nodeExamples || nodeExamples.length === 0) {
      setError('Node examples not loaded');
      return;
    }
    
    const selectedExample = nodeExamples[selectedLayout];
    if (!selectedExample || !selectedExample.definition) {
      setError('Selected layout not found');
      return;
    }
    
    const mockModel = createMockModel([selectedExample], selectedLayout);
    const editorEl = editorElRef.current;
    
    if (editorEl) {
      try {
        // Render the editor
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
              Node Example:
            </Label>
            <Select 
              value={selectedLayout.toString()} 
              onValueChange={(value: string) => setSelectedLayout(parseInt(value))}
            >
              <SelectTrigger id="layout-type" className="w-[300px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {nodeExamples.map((example, index) => (
                  <SelectItem key={example.type} value={index.toString()}>
                    {example.icon} {example.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-sm text-muted-foreground pl-[116px]">
            {nodeExamples[selectedLayout]?.description || 'Loading...'}
          </div>
        </div>
      </Card>

      <div 
        key={selectedLayout}
        ref={editorElRef}
        className="w-full h-[600px] overflow-hidden border rounded-lg bg-card text-card-foreground shadow-sm"
      />
    </div>
  );
}
