import { useState } from 'react';
import { ComponentFactory } from '../../src/components/ComponentFactory';
import type { ComponentType } from '../../src/components/ComponentFactory';

type TestComponentType = 'header' | 'footer' | 'button' | 'divider' | 'text' | 'number' | 'bool' | 'select' | 'spacer';

/**
 * Visual test gallery for grid spanning patterns
 * Similar to Tailwind CSS grid examples - shows how components span across grid cells
 */
export function GridSpanningGallery() {
  const [componentType, setComponentType] = useState<TestComponentType>('header');
  return (
    <div className="p-10 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Grid Spanning Examples</h1>
        <p className="text-muted-foreground mb-4">
          Visual test suite for grid cell spanning. Each example demonstrates how components
          span across multiple rows and columns using CSS Grid.
        </p>
        
        {/* Component Selector */}
        <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
          <label htmlFor="component-select" className="font-medium">
            Test Component:
          </label>
          <select
            id="component-select"
            value={componentType}
            onChange={(e) => setComponentType(e.target.value as TestComponentType)}
            className="px-3 py-2 border rounded-md bg-background"
          >
            <option value="header">Header Component</option>
            <option value="footer">Footer Component</option>
            <option value="button">Button Component</option>
            <option value="divider">Divider Component</option>
            <option value="text">Text Field</option>
            <option value="number">Number Field</option>
            <option value="bool">Boolean Field</option>
            <option value="select">Select Field</option>
            <option value="spacer">Spacer Component</option>
          </select>
          <span className="text-sm text-muted-foreground">Select a component to test spanning behavior</span>
        </div>
      </div>

      <div className="space-y-12">
        {/* Column Spanning Examples */}
        <ExampleSection
          title="Spanning Columns"
          description="Use col_span to make elements span across multiple columns"
          componentType={componentType}
        >
          <GridExample
            title="col-span-2"
            componentType={componentType}
            gridConfig={{
              id: 'col-span-2-grid',
              rows: ['80px', '80px'],
              columns: ['1fr', '1fr', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1 }, label: '01', bgColor: '#dbeafe' },
                { coordinates: { row: 1, col: 2 }, label: '02', bgColor: '#dbeafe' },
                { coordinates: { row: 1, col: 3 }, label: '03', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 1, col_span: 2 }, label: '04 (col-span-2)', bgColor: '#3b82f6' },
                { coordinates: { row: 2, col: 3 }, label: '05', bgColor: '#dbeafe' },
              ],
            }}
          />

          <GridExample
            title="col-span-3"
            componentType={componentType}
            gridConfig={{
              id: 'col-span-3-grid',
              rows: ['80px', '80px'],
              columns: ['1fr', '1fr', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1 }, label: '01', bgColor: '#dbeafe' },
                { coordinates: { row: 1, col: 2 }, label: '02', bgColor: '#dbeafe' },
                { coordinates: { row: 1, col: 3 }, label: '03', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 1, col_span: 3 }, label: '04 (col-span-3)', bgColor: '#3b82f6' },
              ],
            }}
          />

          <GridExample
            title="col-span-4"
            componentType={componentType}
            gridConfig={{
              id: 'col-span-4-grid',
              rows: ['80px', '80px'],
              columns: ['1fr', '1fr', '1fr', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1 }, label: '01', bgColor: '#dbeafe' },
                { coordinates: { row: 1, col: 2 }, label: '02', bgColor: '#dbeafe' },
                { coordinates: { row: 1, col: 3 }, label: '03', bgColor: '#dbeafe' },
                { coordinates: { row: 1, col: 4 }, label: '04', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 1, col_span: 4 }, label: '05 (col-span-4)', bgColor: '#3b82f6' },
              ],
            }}
          />
        </ExampleSection>

        {/* Row Spanning Examples */}
        <ExampleSection
          title="Spanning Rows"
          description="Use row_span to make elements span across multiple rows"
          componentType={componentType}
        >
          <GridExample
            title="row-span-2"
            componentType={componentType}
            gridConfig={{
              id: 'row-span-2-grid',
              rows: ['80px', '80px', '80px'],
              columns: ['1fr', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1, row_span: 2 }, label: '01 (row-span-2)', bgColor: '#3b82f6' },
                { coordinates: { row: 1, col: 2 }, label: '02', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 2 }, label: '03', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 1 }, label: '04', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 2 }, label: '05', bgColor: '#dbeafe' },
              ],
            }}
          />

          <GridExample
            title="row-span-3"
            componentType={componentType}
            gridConfig={{
              id: 'row-span-3-grid',
              rows: ['80px', '80px', '80px'],
              columns: ['1fr', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1, row_span: 3 }, label: '01 (row-span-3)', bgColor: '#3b82f6' },
                { coordinates: { row: 1, col: 2 }, label: '02', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 2 }, label: '03', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 2 }, label: '04', bgColor: '#dbeafe' },
              ],
            }}
          />
        </ExampleSection>

        {/* Combined Spanning */}
        <ExampleSection
          title="Spanning Rows and Columns"
          description="Combine row_span and col_span for complex layouts"
          componentType={componentType}
        >
          <GridExample
            title="row-span-2 col-span-2"
            componentType={componentType}
            gridConfig={{
              id: 'both-span-grid',
              rows: ['80px', '80px', '80px'],
              columns: ['1fr', '1fr', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1, row_span: 2, col_span: 2 }, label: '01 (row-span-2 col-span-2)', bgColor: '#3b82f6' },
                { coordinates: { row: 1, col: 3 }, label: '02', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 3 }, label: '03', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 1 }, label: '04', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 2 }, label: '05', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 3 }, label: '06', bgColor: '#dbeafe' },
              ],
            }}
          />
        </ExampleSection>

        {/* Real-world Patterns */}
        <ExampleSection
          title="Real-World Layout Patterns"
          description="Common layout patterns using grid spanning"
          componentType={componentType}
        >
          <GridExample
            title="Header-Body Layout"
            componentType={componentType}
            gridConfig={{
              id: 'header-body-grid',
              rows: ['60px', '1fr'],
              columns: ['1fr', '1fr', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1, col_span: 3 }, label: 'Header (col-span-3)', bgColor: '#0ea5e9' },
                { coordinates: { row: 2, col: 1 }, label: 'Column 1', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 2 }, label: 'Column 2', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 3 }, label: 'Column 3', bgColor: '#dbeafe' },
              ],
            }}
          />

          <GridExample
            title="Sidebar Layout"
            componentType={componentType}
            gridConfig={{
              id: 'sidebar-grid',
              rows: ['60px', '120px', '60px'],
              columns: ['200px', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1, row_span: 3 }, label: 'Sidebar (row-span-3)', bgColor: '#06b6d4' },
                { coordinates: { row: 1, col: 2 }, label: 'Header', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 2 }, label: 'Content', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 2 }, label: 'Footer', bgColor: '#dbeafe' },
              ],
            }}
          />

          <GridExample
            title="Holy Grail Layout"
            componentType={componentType}
            gridConfig={{
              id: 'holy-grail-grid',
              rows: ['60px', '200px', '40px'],
              columns: ['1fr', '2fr', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1, col_span: 3 }, label: 'Header (col-span-3)', bgColor: '#0ea5e9' },
                { coordinates: { row: 2, col: 1 }, label: 'Left', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 2 }, label: 'Main', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 3 }, label: 'Right', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 1, col_span: 3 }, label: 'Footer (col-span-3)', bgColor: '#0ea5e9' },
              ],
            }}
          />

          <GridExample
            title="Dashboard with Featured"
            componentType={componentType}
            gridConfig={{
              id: 'dashboard-grid',
              rows: ['80px', '80px', '80px'],
              columns: ['1fr', '1fr', '1fr'],
              gap: '8px',
              cellsTemplate: [
                { coordinates: { row: 1, col: 1, row_span: 2, col_span: 2 }, label: 'Featured (row-span-2 col-span-2)', bgColor: '#8b5cf6' },
                { coordinates: { row: 1, col: 3 }, label: 'Widget 1', bgColor: '#dbeafe' },
                { coordinates: { row: 2, col: 3 }, label: 'Widget 2', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 1 }, label: 'Info 1', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 2 }, label: 'Info 2', bgColor: '#dbeafe' },
                { coordinates: { row: 3, col: 3 }, label: 'Info 3', bgColor: '#dbeafe' },
              ],
            }}
          />
        </ExampleSection>
      </div>
    </div>
  );
}

function ExampleSection({ 
  title, 
  description, 
  componentType,
  children 
}: { 
  title: string; 
  description: string; 
  componentType: TestComponentType;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </section>
  );
}

function GridExample({ 
  title, 
  gridConfig,
  componentType,
}: { 
  title: string; 
  gridConfig: {
    id: string;
    rows: string[];
    columns: string[];
    gap: string;
    cellsTemplate: Array<{
      coordinates: { row: number; col: number; row_span?: number; col_span?: number };
      label: string;
      bgColor: string;
    }>;
  };
  componentType: TestComponentType;
}) {
  const grid: ComponentType = {
    ...gridConfig,
    type: 'grid-layout',
    cells: gridConfig.cellsTemplate.map((cell, idx) => ({
      id: `${gridConfig.id}-cell-${idx}`,
      coordinates: cell.coordinates,
      components: [createCell(cell.label, cell.bgColor, componentType)],
    })),
  };

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="border rounded-lg p-4 bg-background">
        <ComponentFactory component={grid} nodeId="test-node" />
      </div>
    </div>
  );
}

function createCell(label: string, bgColor: string, componentType: TestComponentType) {
  const isDark = bgColor === '#3b82f6' || bgColor === '#8b5cf6' || bgColor === '#0ea5e9' || bgColor === '#06b6d4';
  const textColor = isDark ? '#ffffff' : '#1e293b';
  
  switch (componentType) {
    case 'header':
      return {
        id: `cell-${label}`,
        type: 'header' as const,
        label,
        bgColor,
        textColor,
      };
    
    case 'footer':
      return {
        id: `cell-${label}`,
        type: 'footer' as const,
        text: label,
        bgColor,
        textColor,
      };
    
    case 'button':
      return {
        id: `cell-${label}`,
        type: 'button' as const,
        label,
        action: 'test',
        bgColor,
        textColor,
      };
    
    case 'divider':
      return {
        id: `cell-${label}`,
        type: 'divider' as const,
        orientation: 'horizontal' as const,
      };
    
    case 'text':
      return {
        id: `cell-${label}`,
        type: 'text' as const,
        label,
        value: label,
        placeholder: 'Enter text',
      };
    
    case 'number':
      return {
        id: `cell-${label}`,
        type: 'number' as const,
        label,
        value: 42,
        min: 0,
        max: 100,
      };
    
    case 'bool':
      return {
        id: `cell-${label}`,
        type: 'bool' as const,
        label,
        value: isDark,
      };
    
    case 'select':
      return {
        id: `cell-${label}`,
        type: 'select' as const,
        label,
        value: 'option1',
        options: ['option1', 'option2', 'option3'],
      };
    
    case 'spacer':
      return {
        id: `cell-${label}`,
        type: 'spacer' as const,
        size: '20px',
      };
    
    default:
      return {
        id: `cell-${label}`,
        type: 'header' as const,
        label,
        bgColor,
        textColor,
      };
  }
}
