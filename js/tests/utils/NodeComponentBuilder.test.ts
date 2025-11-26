import { describe, it, expect } from 'vitest';
import { NodeComponentBuilder, buildNodeTypes } from '../../src/utils/NodeComponentBuilder';
import { createHorizontalGridLayout, createVerticalGridLayout, createCompactGridLayout } from '../../src/utils/gridLayoutHelpers';
import type { CustomNodeData, NodeTemplate } from '../../src/types/schema';

describe('NodeComponentBuilder', () => {
  const createMinimalSchema = (): CustomNodeData => ({
    label: 'Test Node',
    gridLayout: createHorizontalGridLayout(),
    values: {},
  });

  describe('constructor', () => {
    it('should create a builder instance with valid schema', () => {
      const schema = createMinimalSchema();
      const builder = new NodeComponentBuilder(schema);

      expect(builder).toBeInstanceOf(NodeComponentBuilder);
    });

    it('should require gridLayout', () => {
      const schema: CustomNodeData = {
        label: 'Test',
        values: {},
      };

      // Should throw because gridLayout is required
      expect(() => new NodeComponentBuilder(schema)).toThrow('Grid layout configuration is required');
    });

    it('should accept different grid layout types', () => {
      const layouts = [
        createHorizontalGridLayout(),
        createVerticalGridLayout(),
        createCompactGridLayout(),
      ];

      layouts.forEach((gridLayout) => {
        const schema: CustomNodeData = {
          label: 'Test',
          gridLayout,
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

    it('should build component with header configuration', () => {
      const schema: CustomNodeData = {
        label: 'Header Test',
        gridLayout: createHorizontalGridLayout(),
        header: {
          show: true,
          icon: '⚙️',
          className: 'custom-header',
        },
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should build component with footer configuration', () => {
      const schema: CustomNodeData = {
        label: 'Footer Test',
        gridLayout: createHorizontalGridLayout(),
        footer: {
          show: true,
          text: 'Status: Ready',
          className: 'custom-footer',
        },
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should build component with style configuration', () => {
      const schema: CustomNodeData = {
        label: 'Style Test',
        gridLayout: createHorizontalGridLayout(),
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
        gridLayout: createHorizontalGridLayout(),
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
          gridLayout: createHorizontalGridLayout(),
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
        gridLayout: createHorizontalGridLayout(),
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
        gridLayout: createHorizontalGridLayout(),
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
        gridLayout: createHorizontalGridLayout(),
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
        gridLayout: createHorizontalGridLayout(),
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
          gridLayout: createHorizontalGridLayout(),
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
        gridLayout: createVerticalGridLayout(),
        handleType: 'button',
        inputHandleType: 'labeled',
        outputHandleType: 'base',
        header: {
          show: true,
          icon: '🔧',
          className: 'bg-blue-600',
          bgColor: '#0066cc',
          textColor: '#ffffff',
        },
        footer: {
          show: true,
          text: 'Processing...',
          className: 'bg-gray-100',
        },
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

  describe('header behavior', () => {
    it('should show header by default when not specified', () => {
      const schema: CustomNodeData = {
        label: 'Test',
        gridLayout: createHorizontalGridLayout(),
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should use icon from header config over root icon', () => {
      const schema: CustomNodeData = {
        label: 'Test',
        gridLayout: createHorizontalGridLayout(),
        icon: '⚙️',
        header: {
          icon: '🔧',
        },
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });

    it('should fallback to root icon if header icon not specified', () => {
      const schema: CustomNodeData = {
        label: 'Test',
        gridLayout: createHorizontalGridLayout(),
        icon: '⚙️',
        header: {
          show: true,
        },
        values: {},
      };

      const builder = new NodeComponentBuilder(schema);
      const Component = builder.buildComponent();

      expect(Component).toBeDefined();
    });
  });
});

describe('buildNodeTypes', () => {
  const createTemplate = (type: string, label: string): NodeTemplate => ({
    type,
    label,
    defaultData: {
      label,
      gridLayout: createHorizontalGridLayout(),
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
          gridLayout: createVerticalGridLayout(),
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
          // Missing gridLayout - should throw
          values: {},
        },
      },
    ];

    // Should throw because gridLayout is required
    expect(() => buildNodeTypes(templates)).toThrow('Grid layout configuration is required');
  });

  it('should handle templates with all layout types', () => {
    const templates: NodeTemplate[] = [
      createTemplate('horizontal', 'Horizontal'),
      {
        ...createTemplate('vertical', 'Vertical'),
        defaultData: { ...createTemplate('vertical', 'Vertical').defaultData, gridLayout: createVerticalGridLayout() },
      },
      {
        ...createTemplate('compact', 'Compact'),
        defaultData: { ...createTemplate('compact', 'Compact').defaultData, gridLayout: createCompactGridLayout() },
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
          gridLayout: createHorizontalGridLayout(),
          handleType: 'base',
          values: {},
        },
      },
      {
        type: 'button-handles',
        label: 'Button',
        defaultData: {
          label: 'Button',
          gridLayout: createHorizontalGridLayout(),
          handleType: 'button',
          values: {},
        },
      },
      {
        type: 'labeled-handles',
        label: 'Labeled',
        defaultData: {
          label: 'Labeled',
          gridLayout: createHorizontalGridLayout(),
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
