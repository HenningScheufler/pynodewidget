import { describe, it, expect } from 'vitest';
import { NodeComponentBuilder, buildNodeTypes } from '../../src/utils/NodeComponentBuilder';
import type { CustomNodeData, NodeTemplate } from '../../src/types/schema';

describe('NodeComponentBuilder', () => {
  const createMinimalSchema = (): CustomNodeData => ({
    label: 'Test Node',
    grid: {
      rows: ['1fr'],
      columns: ['1fr'],
      cells: []
    },
    values: {},
  });

  describe('constructor', () => {
    it('should create a builder instance with valid schema', () => {
      const schema = createMinimalSchema();
      const builder = new NodeComponentBuilder(schema);

      expect(builder).toBeInstanceOf(NodeComponentBuilder);
    });

    it('should require grid', () => {
      const schema = {
        label: 'Test',
        values: {},
      } as any; // Intentionally missing grid to test error

      // Should throw because grid is required
      expect(() => new NodeComponentBuilder(schema)).toThrow("'grid' property is required in schema. The old 'gridLayout' system has been removed.");
    });

    it('should accept different grid layout types', () => {
      const layouts = [
        { rows: ['1fr'], columns: ['1fr'], cells: [] },
        { rows: ['1fr', '1fr'], columns: ['1fr'], cells: [] },
        { rows: ['auto', 'auto'], columns: ['1fr', '1fr'], cells: [] },
      ];

      layouts.forEach((grid) => {
        const schema: CustomNodeData = {
          label: 'Test',
          grid,
          values: {},
        };

        expect(() => new NodeComponentBuilder(schema)).not.toThrow();
      });
    });
  });

  describe('buildComponent', () => {
    it('should build a React component', () => {
      const schema = createMinimalSchema();
      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      // React.memo returns an object (React component), not a plain function
      expect(Component).toBeDefined();
      expect(typeof Component).toBe('object');
    });

    it('should build component with style configuration', () => {
      const schema: CustomNodeData = {
        label: 'Style Test',
        grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
        style: {
          minWidth: '300px',
          maxWidth: '600px',
          shadow: 'lg',
          className: 'custom-class',
        },
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should build component with numeric width values', () => {
      const schema: CustomNodeData = {
        label: 'Numeric Width',
        grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
        style: {
          minWidth: 200,
          maxWidth: 400,
        },
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should build component with all handle types', () => {
      const handleTypes: Array<'base' | 'button' | 'labeled'> = ['base', 'button', 'labeled'];

      handleTypes.forEach((handleType) => {
        const schema: CustomNodeData = {
          label: 'Handle Test',
          grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
          handleType,
          values: {},
        };

        const builder = new NodeComponentBuilder(schema);
        const Component = builder.buildComponent();

        expect(Component).toBeDefined();
      });
    });

    it('should build component with input and output handle types', () => {
      const schema: CustomNodeData = {
        label: 'Handle Test',
        grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
        handleType: 'base',
        inputHandleType: 'button',
        outputHandleType: 'labeled',
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should build component with inputs and outputs', () => {
      const schema: CustomNodeData = {
        label: 'Handles Test',
        grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
        inputs: [
          { id: 'input1', label: 'Input 1', handle_type: 'base' },
          { id: 'input2', label: 'Input 2', handle_type: 'button' },
        ],
        outputs: [
          { id: 'output1', label: 'Output 1', handle_type: 'labeled' },
        ],
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should build component with validation config', () => {
      const schema: CustomNodeData = {
        label: 'Validation Test',
        grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
        validation: {
          showErrors: true,
          errorPosition: 'inline',
          validateOnChange: true,
        },
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should build component with field configurations', () => {
      const schema: CustomNodeData = {
        label: 'Field Config Test',
        grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
        fieldConfigs: {
          field1: { hidden: true },
          field2: { disabled: true },
          field3: { readonly: true },
        },
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should build component with all shadow sizes', () => {
      const shadows: Array<'sm' | 'md' | 'lg' | 'xl' | 'none'> = [
        'sm',
        'md',
        'lg',
        'xl',
        'none',
      ];

      shadows.forEach((shadow) => {
        const schema: CustomNodeData = {
          label: 'Shadow Test',
          grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
          style: { shadow },
          values: {},
        };

        const builder = new NodeComponentBuilder(schema);
        const Component = builder.buildComponent();

        expect(Component).toBeDefined();
      });
    });

    it('should build component with complex configuration', () => {
      const schema: CustomNodeData = {
        label: 'Complex Node',
        grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
        handleType: 'button',
        inputHandleType: 'labeled',
        outputHandleType: 'base',
        style: {
          minWidth: '250px',
          maxWidth: '500px',
          shadow: 'lg',
          borderRadius: '12px',
          className: 'border-blue-500',
        },
        validation: {
          showErrors: true,
          errorPosition: 'tooltip',
          validateOnChange: false,
        },
        fieldConfigs: {
          field1: {
            hidden: false,
            tooltip: 'Enter value',
            className: 'font-bold',
          },
          field2: {
            disabled: true,
            readonly: true,
          },
        },
        inputs: [
          { id: 'in1', label: 'Input 1' },
          { id: 'in2', label: 'Input 2' },
        ],
        outputs: [
          { id: 'out1', label: 'Output 1' },
        ],
        values: {
          field1: 'value1',
          field2: 42,
        },
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });
  });

  describe('static buildComponent', () => {
    it('should build component directly from schema', () => {
      const schema = createMinimalSchema();
      const Component = NodeComponentBuilder.buildComponent(schema);

      expect(Component).toBeDefined();
    });

    it('should produce same result as instance method', () => {
      const schema = createMinimalSchema();
      
      const Component1 = NodeComponentBuilder.buildComponent(schema);
      const builder = new NodeComponentBuilder(schema);
      const Component2 = builder.buildComponent();

      expect(typeof Component1).toBe(typeof Component2);
    });
  });
});

describe('buildNodeTypes', () => {
  const createTemplate = (type: string, label: string): NodeTemplate => ({
    type,
    label,
    defaultData: {
      label,
      grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
      values: {},
    },
  });

  it('should build node types from templates', () => {
    const templates: NodeTemplate[] = [
      createTemplate('processor', 'Processor'),
      createTemplate('source', 'Source'),
      createTemplate('sink', 'Sink'),
    ];

    const nodeTypes = buildNodeTypes(templates);

    expect(nodeTypes).toHaveProperty('processor');
    expect(nodeTypes).toHaveProperty('source');
    expect(nodeTypes).toHaveProperty('sink');
    expect(nodeTypes.processor).toBeDefined();
    expect(nodeTypes.source).toBeDefined();
    expect(nodeTypes.sink).toBeDefined();
  });

  it('should handle empty templates array', () => {
    const nodeTypes = buildNodeTypes([]);

    expect(nodeTypes).toEqual({});
  });

  it('should handle single template', () => {
    const templates: NodeTemplate[] = [createTemplate('single', 'Single Node')];

    const nodeTypes = buildNodeTypes(templates);

    expect(Object.keys(nodeTypes)).toHaveLength(1);
    expect(nodeTypes.single).toBeDefined();
  });

  it('should build types with complex configurations', () => {
    const templates: NodeTemplate[] = [
      {
        type: 'advanced',
        label: 'Advanced Node',
        description: 'An advanced node',
        icon: '🚀',
        defaultData: {
          label: 'Advanced',
          grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
          handleType: 'button',
          header: {
            show: true,
            icon: '🚀',
            className: 'bg-purple-600',
          },
          footer: {
            show: true,
            text: 'Advanced mode',
          },
          style: {
            minWidth: '300px',
            shadow: 'xl',
          },
          validation: {
            showErrors: true,
            errorPosition: 'inline',
          },
          values: {},
        },
      },
    ];

    const nodeTypes = buildNodeTypes(templates);

    expect(nodeTypes.advanced).toBeDefined();
  });

  it('should handle invalid template configuration gracefully', () => {
    const templates: NodeTemplate[] = [
      {
        type: 'invalid',
        label: 'Invalid',
        defaultData: {
          label: 'Invalid',
          // Missing grid - should throw
          values: {},
        } as any, // Intentionally invalid to test error handling
      },
    ];

    // Should throw because grid is required
    expect(() => buildNodeTypes(templates)).toThrow("'grid' property is required in schema. The old 'gridLayout' system has been removed.");
  });

  it('should handle templates with all layout types', () => {
    const templates: NodeTemplate[] = [
      createTemplate('horizontal', 'Horizontal'),
      {
        ...createTemplate('vertical', 'Vertical'),
        defaultData: { ...createTemplate('vertical', 'Vertical').defaultData, grid: { rows: ["1fr"], columns: ["1fr"], cells: [] } },
      },
      {
        ...createTemplate('compact', 'Compact'),
        defaultData: { ...createTemplate('compact', 'Compact').defaultData, grid: { rows: ["1fr"], columns: ["1fr"], cells: [] } },
      },
    ];

    const nodeTypes = buildNodeTypes(templates);

    expect(Object.keys(nodeTypes)).toHaveLength(3);
    expect(nodeTypes.horizontal).toBeDefined();
    expect(nodeTypes.vertical).toBeDefined();
    expect(nodeTypes.compact).toBeDefined();
  });

  it('should handle templates with different handle configurations', () => {
    const templates: NodeTemplate[] = [
      {
        type: 'base-handles',
        label: 'Base',
        defaultData: {
          label: 'Base',
          grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
          handleType: 'base',
          values: {},
        },
      },
      {
        type: 'button-handles',
        label: 'Button',
        defaultData: {
          label: 'Button',
          grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
          handleType: 'button',
          values: {},
        },
      },
      {
        type: 'labeled-handles',
        label: 'Labeled',
        defaultData: {
          label: 'Labeled',
          grid: { rows: ["1fr"], columns: ["1fr"], cells: [] },
          handleType: 'labeled',
          values: {},
        },
      },
    ];

    const nodeTypes = buildNodeTypes(templates);

    expect(Object.keys(nodeTypes)).toHaveLength(3);
  });

  it('should preserve template type names in result', () => {
    const templates: NodeTemplate[] = [
      createTemplate('custom_type_1', 'Custom 1'),
      createTemplate('custom_type_2', 'Custom 2'),
      createTemplate('another-type', 'Another'),
    ];

    const nodeTypes = buildNodeTypes(templates);

    expect(nodeTypes).toHaveProperty('custom_type_1');
    expect(nodeTypes).toHaveProperty('custom_type_2');
    expect(nodeTypes).toHaveProperty('another-type');
  });
});
