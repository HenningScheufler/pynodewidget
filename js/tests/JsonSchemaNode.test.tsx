
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ReactFlowProvider } from '@xyflow/react';
import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { nodeFactory } from '../src/components/NodeFactory';
import { JsonSchemaNode } from '../src/JsonSchemaNode';
import { SetNodeValuesContext } from '../src/index';
import type { NodeProps } from '@xyflow/react';

beforeAll(() => {
  nodeFactory.register('jsonschema', JsonSchemaNode);
});

// Wrapper component that provides the required context
function TestWrapper({ children }: { children: React.ReactNode }) {
  const [nodeValues, setNodeValues] = React.useState<Record<string, any>>({});
  return (
    <ReactFlowProvider>
      <SetNodeValuesContext.Provider value={setNodeValues}>
        {children}
      </SetNodeValuesContext.Provider>
    </ReactFlowProvider>
  );
}

// Helper to render a node by type using the factory
const renderWithReactFlow = (props: NodeProps) => {
  const NodeComponent = nodeFactory.get(props.type);
  if (!NodeComponent) throw new Error(`Node type not registered: ${props.type}`);
  return render(<TestWrapper><NodeComponent {...props} /></TestWrapper>);
};

const createMockNodeProps = (data: any, selected = false): NodeProps => ({
  id: '1',
  data,
  selected,
  type: 'jsonschema',
  dragging: false,
  zIndex: 0,
  isConnectable: true,
  positionAbsoluteX: 0,
  positionAbsoluteY: 0,
  selectable: true,
  deletable: true,
  draggable: true,
});

describe('JsonSchemaNode', () => {
  describe('Node Rendering', () => {
    it('renders node with label', () => {
      const mockData = { label: 'Test Node' };
      renderWithReactFlow(createMockNodeProps(mockData));
      expect(screen.getByText('Test Node')).toBeInTheDocument();
    });

    it('renders input handles when provided', () => {
      const mockData = {
        label: 'Node with Inputs',
        inputs: [
          { id: 'input1', label: 'Input 1' },
          { id: 'input2', label: 'Input 2' },
        ],
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      expect(screen.getByText('Input 1')).toBeInTheDocument();
      expect(screen.getByText('Input 2')).toBeInTheDocument();
    });

    it('renders output handles when provided', () => {
      const mockData = {
        label: 'Node with Outputs',
        outputs: [
          { id: 'output1', label: 'Output 1' },
          { id: 'output2', label: 'Output 2' },
        ],
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      expect(screen.getByText('Output 1')).toBeInTheDocument();
      expect(screen.getByText('Output 2')).toBeInTheDocument();
    });
  });

  describe('Schema Form Inputs', () => {
    it('renders string input', () => {
      const mockData = {
        label: 'String Node',
        parameters: {
          type: 'object',
          properties: {
            name: { type: 'string', title: 'Name', default: 'test' },
          },
        },
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.type).toBe('text');
    });

    it('renders number input with correct step', () => {
      const mockData = {
        label: 'Number Node',
        parameters: {
          type: 'object',
          properties: {
            count: { type: 'number', title: 'Count', default: 5.5 },
          },
        },
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const input = screen.getByRole('spinbutton') as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.step).toBe('any');
      expect(input.value).toBe('5.5');
    });

    it('renders integer input with step=1', () => {
      const mockData = {
        label: 'Integer Node',
        parameters: {
          type: 'object',
          properties: {
            count: { type: 'integer', title: 'Count', default: 10 },
          },
        },
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const input = screen.getByRole('spinbutton') as HTMLInputElement;
      expect(input.step).toBe('1');
      expect(input.value).toBe('10');
    });

    it('renders boolean checkbox', () => {
      const mockData = {
        label: 'Boolean Node',
        parameters: {
          type: 'object',
          properties: {
            enabled: { type: 'boolean', title: 'Enabled', default: true },
          },
        },
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveAttribute('data-state', 'checked');
    });

    it('renders select dropdown for enum', () => {
      const mockData = {
        label: 'Enum Node',
        parameters: {
          type: 'object',
          properties: {
            mode: {
              type: 'string',
              title: 'Mode',
              enum: ['option1', 'option2', 'option3'],
              default: 'option1',
            },
          },
        },
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();
      // Radix UI Select displays the selected value in the trigger
      expect(screen.getByText('option1')).toBeInTheDocument();
    });

    it('shows required marker for required fields', () => {
      const mockData = {
        label: 'Required Node',
        parameters: {
          type: 'object',
          properties: {
            name: { type: 'string', title: 'Name' },
          },
          required: ['name'],
        },
      };
      const { container } = renderWithReactFlow(createMockNodeProps(mockData));
      // Check for the label with the after pseudo-element class that contains the asterisk
      const label = container.querySelector('label[class*="after:content-"]');
      expect(label).toBeInTheDocument();
    });
  });

  describe('Input Interactions', () => {
    it('handles string input change', () => {
      const mockData = {
        label: 'String Node',
        parameters: {
          type: 'object',
          properties: {
            name: { type: 'string', title: 'Name', default: '' },
          },
        },
        values: {},
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const input = screen.getByRole('textbox') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'new value' } });
      expect(input).toBeInTheDocument();
    });

    it('handles number input change', () => {
      const mockData = {
        label: 'Number Node',
        parameters: {
          type: 'object',
          properties: {
            count: { type: 'number', title: 'Count', default: 0 },
          },
        },
        values: {},
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const input = screen.getByRole('spinbutton') as HTMLInputElement;
      fireEvent.change(input, { target: { value: '42' } });
      expect(input).toBeInTheDocument();
    });

    it('handles checkbox toggle', () => {
      const mockData = {
        label: 'Boolean Node',
        parameters: {
          type: 'object',
          properties: {
            enabled: { type: 'boolean', title: 'Enabled', default: false },
          },
        },
        values: {},
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('data-state', 'unchecked');
      fireEvent.click(checkbox);
      expect(checkbox).toBeInTheDocument();
    });

    it('handles select dropdown change', () => {
      const mockData = {
        label: 'Enum Node',
        parameters: {
          type: 'object',
          properties: {
            mode: {
              type: 'string',
              enum: ['option1', 'option2', 'option3'],
              default: 'option1',
            },
          },
        },
        values: {},
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      fireEvent.change(select, { target: { value: 'option2' } });
      expect(select).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles missing schema gracefully', () => {
      const mockData = { label: 'Simple Node' };
      renderWithReactFlow(createMockNodeProps(mockData));
      expect(screen.getByText('Simple Node')).toBeInTheDocument();
      expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    });

    it('uses default value when no value is provided', () => {
      const mockData = {
        label: 'Default Value Node',
        parameters: {
          type: 'object',
          properties: {
            name: { type: 'string', title: 'Name', default: 'default-name' },
          },
        },
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('default-name');
    });

    it('prefers values over defaults', () => {
      const mockData = {
        label: 'Values Node',
        parameters: {
          type: 'object',
          properties: {
            name: { type: 'string', title: 'Name', default: 'default' },
          },
        },
        values: {
          name: 'custom-value',
        },
      };
      renderWithReactFlow(createMockNodeProps(mockData));
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('custom-value');
    });
  });
});
