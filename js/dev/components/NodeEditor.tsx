import { useState, useEffect } from 'react';
import { render as renderEditor } from '../../src/index';
import { createMockModel } from '../mockModel';
import { Card } from '../../src/components/ui/card';
import { Label } from '../../src/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../src/components/ui/select';

export function NodeEditor() {
  const [error, setError] = useState<string | null>(null);
  const [handleType, setHandleType] = useState<'base' | 'button' | 'labeled'>('base');
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    const mockModel = createMockModel(handleType);
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
  }, [handleType]);

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
        <div className="flex items-center gap-4">
          <Label htmlFor="handle-type" className="text-sm font-medium">
            Handle Type:
          </Label>
          <Select value={handleType} onValueChange={(value: any) => setHandleType(value)}>
            <SelectTrigger id="handle-type" className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="base">Base</SelectItem>
              <SelectItem value="button">Button</SelectItem>
              <SelectItem value="labeled">Labeled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card 
        id="editor-view" 
        className="w-full h-[600px] overflow-hidden"
      />
    </div>
  );
}
