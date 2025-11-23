import { describe, it, expect } from 'vitest';
import { NodeDataService } from '../../src/services/nodeDataService';
import type { Node } from '@xyflow/react';
import type { CustomNodeData, JsonSchemaProperty } from '../../src/types/schema';

describe('NodeDataService', () => {
  // Helper to create a test node
  const createTestNode = (id: string, data: Partial<CustomNodeData>): Node => ({
    id,
    type: 'test',
    position: { x: 0, y: 0 },
    data: {
      label: 'Test Node',
      values: {},
      ...data,
    } as unknown as Record<string, unknown>,
  });

  describe('updateNodeValue', () => {
    it('should update a single field value in the specified node', () => {
      const nodes: Node[] = [
        createTestNode('node-1', { values: { field1: 'old' } }),
        createTestNode('node-2', { values: { field1: 'unchanged' } }),
      ];

      const result = NodeDataService.updateNodeValue(nodes, 'node-1', 'field1', 'new');

      expect(result).toHaveLength(2);
      expect((result[0].data as CustomNodeData).values?.field1).toBe('new');
      expect((result[1].data as CustomNodeData).values?.field1).toBe('unchanged');
    });

    it('should add a new field if it does not exist', () => {
      const nodes: Node[] = [createTestNode('node-1', { values: {} })];

      const result = NodeDataService.updateNodeValue(nodes, 'node-1', 'newField', 'value');

      expect((result[0].data as CustomNodeData).values?.newField).toBe('value');
    });

    it('should preserve other field values when updating', () => {
      const nodes: Node[] = [
        createTestNode('node-1', {
          values: { field1: 'value1', field2: 'value2', field3: 'value3' },
        }),
      ];

      const result = NodeDataService.updateNodeValue(nodes, 'node-1', 'field2', 'updated');

      const values = (result[0].data as CustomNodeData).values;
      expect(values?.field1).toBe('value1');
      expect(values?.field2).toBe('updated');
      expect(values?.field3).toBe('value3');
    });

    it('should handle different value types', () => {
      const nodes: Node[] = [createTestNode('node-1', { values: {} })];

      // Test string
      let result = NodeDataService.updateNodeValue(nodes, 'node-1', 'str', 'text');
      expect((result[0].data as CustomNodeData).values?.str).toBe('text');

      // Test number
      result = NodeDataService.updateNodeValue(result, 'node-1', 'num', 42);
      expect((result[0].data as CustomNodeData).values?.num).toBe(42);

      // Test boolean
      result = NodeDataService.updateNodeValue(result, 'node-1', 'bool', true);
      expect((result[0].data as CustomNodeData).values?.bool).toBe(true);

      // Test null
      result = NodeDataService.updateNodeValue(result, 'node-1', 'nullable', null);
      expect((result[0].data as CustomNodeData).values?.nullable).toBe(null);
    });

    it('should return a new array, not mutate the original', () => {
      const nodes: Node[] = [createTestNode('node-1', { values: { field: 'old' } })];
      const original = nodes[0];

      const result = NodeDataService.updateNodeValue(nodes, 'node-1', 'field', 'new');

      expect(result).not.toBe(nodes);
      expect(result[0]).not.toBe(original);
      expect((original.data as CustomNodeData).values?.field).toBe('old');
    });

    it('should not modify nodes that do not match the nodeId', () => {
      const nodes: Node[] = [
        createTestNode('node-1', { values: { field: 'value1' } }),
        createTestNode('node-2', { values: { field: 'value2' } }),
      ];

      const result = NodeDataService.updateNodeValue(nodes, 'node-1', 'field', 'updated');

      expect(result[1]).toBe(nodes[1]); // Same reference, not modified
    });

    it('should handle empty nodes array', () => {
      const result = NodeDataService.updateNodeValue([], 'any-id', 'field', 'value');
      expect(result).toEqual([]);
    });

    it('should handle updating a node that does not exist', () => {
      const nodes: Node[] = [createTestNode('node-1', { values: {} })];

      const result = NodeDataService.updateNodeValue(nodes, 'nonexistent', 'field', 'value');

      expect(result).toHaveLength(1);
      expect(result[0]).toBe(nodes[0]); // Unchanged
    });
  });

  describe('getFieldValue', () => {
    it('should return the field value if it exists', () => {
      const node = createTestNode('node-1', { values: { field: 'myValue' } });
      const property: JsonSchemaProperty = { type: 'string' };

      const value = NodeDataService.getFieldValue(node, 'field', property);

      expect(value).toBe('myValue');
    });

    it('should return the default value if field value is undefined', () => {
      const node = createTestNode('node-1', { values: {} });
      const property: JsonSchemaProperty = { type: 'string', default: 'defaultValue' };

      const value = NodeDataService.getFieldValue(node, 'field', property);

      expect(value).toBe('defaultValue');
    });

    it('should return the default value if field value is null', () => {
      const node = createTestNode('node-1', { values: { field: null } });
      const property: JsonSchemaProperty = { type: 'string', default: 'defaultValue' };

      const value = NodeDataService.getFieldValue(node, 'field', property);

      expect(value).toBe('defaultValue');
    });

    it('should return null if no value and no default', () => {
      const node = createTestNode('node-1', { values: {} });
      const property: JsonSchemaProperty = { type: 'string' };

      const value = NodeDataService.getFieldValue(node, 'field', property);

      expect(value).toBe(null);
    });

    it('should prioritize actual value over default', () => {
      const node = createTestNode('node-1', { values: { field: 'actualValue' } });
      const property: JsonSchemaProperty = { type: 'string', default: 'defaultValue' };

      const value = NodeDataService.getFieldValue(node, 'field', property);

      expect(value).toBe('actualValue');
    });

    it('should handle different value types correctly', () => {
      const node = createTestNode('node-1', {
        values: { str: 'text', num: 0, bool: false },
      });

      expect(NodeDataService.getFieldValue(node, 'str', { type: 'string' })).toBe('text');
      expect(NodeDataService.getFieldValue(node, 'num', { type: 'number' })).toBe(0);
      expect(NodeDataService.getFieldValue(node, 'bool', { type: 'boolean' })).toBe(false);
    });

    it('should handle zero and empty string as valid values', () => {
      const node = createTestNode('node-1', { values: { zero: 0, empty: '' } });

      expect(
        NodeDataService.getFieldValue(node, 'zero', { type: 'number', default: 10 })
      ).toBe(0);
      expect(
        NodeDataService.getFieldValue(node, 'empty', { type: 'string', default: 'default' })
      ).toBe('');
    });
  });

  describe('isFieldRequired', () => {
    it('should return true if field is in required array', () => {
      const node = createTestNode('node-1', {
        parameters: {
          type: 'object',
          properties: {},
          required: ['field1', 'field2'],
        },
      });

      expect(NodeDataService.isFieldRequired(node, 'field1')).toBe(true);
      expect(NodeDataService.isFieldRequired(node, 'field2')).toBe(true);
    });

    it('should return false if field is not in required array', () => {
      const node = createTestNode('node-1', {
        parameters: {
          type: 'object',
          properties: {},
          required: ['field1'],
        },
      });

      expect(NodeDataService.isFieldRequired(node, 'field2')).toBe(false);
    });

    it('should return false if required array is empty', () => {
      const node = createTestNode('node-1', {
        parameters: {
          type: 'object',
          properties: {},
          required: [],
        },
      });

      expect(NodeDataService.isFieldRequired(node, 'field1')).toBe(false);
    });

    it('should return false if required array is undefined', () => {
      const node = createTestNode('node-1', {
        parameters: {
          type: 'object',
          properties: {},
        },
      });

      expect(NodeDataService.isFieldRequired(node, 'field1')).toBe(false);
    });

    it('should return false if parameters is undefined', () => {
      const node = createTestNode('node-1', {});

      expect(NodeDataService.isFieldRequired(node, 'field1')).toBe(false);
    });
  });

  describe('getAllValues', () => {
    it('should return all field values from a node', () => {
      const node = createTestNode('node-1', {
        values: { field1: 'value1', field2: 42, field3: true },
      });

      const values = NodeDataService.getAllValues(node);

      expect(values).toEqual({ field1: 'value1', field2: 42, field3: true });
    });

    it('should return an empty object if values is undefined', () => {
      const node = createTestNode('node-1', {});

      const values = NodeDataService.getAllValues(node);

      expect(values).toEqual({});
    });

    it('should return an empty object if values is empty', () => {
      const node = createTestNode('node-1', { values: {} });

      const values = NodeDataService.getAllValues(node);

      expect(values).toEqual({});
    });

    it('should return the same reference as node values', () => {
      const original = { field1: 'value1', field2: 'value2' };
      const node = createTestNode('node-1', { values: { ...original } });

      const values = NodeDataService.getAllValues(node);
      
      // The service returns the values object directly (no defensive copy)
      expect(values).toBe((node.data as CustomNodeData).values);
    });
  });

  describe('updateMultipleValues', () => {
    it('should update multiple field values at once', () => {
      const nodes: Node[] = [
        createTestNode('node-1', { values: { field1: 'old1', field2: 'old2' } }),
      ];

      const result = NodeDataService.updateMultipleValues(nodes, 'node-1', {
        field1: 'new1',
        field2: 'new2',
        field3: 'new3',
      });

      const values = (result[0].data as CustomNodeData).values;
      expect(values?.field1).toBe('new1');
      expect(values?.field2).toBe('new2');
      expect(values?.field3).toBe('new3');
    });

    it('should preserve existing values not included in the update', () => {
      const nodes: Node[] = [
        createTestNode('node-1', {
          values: { field1: 'value1', field2: 'value2', field3: 'value3' },
        }),
      ];

      const result = NodeDataService.updateMultipleValues(nodes, 'node-1', {
        field2: 'updated',
      });

      const values = (result[0].data as CustomNodeData).values;
      expect(values?.field1).toBe('value1');
      expect(values?.field2).toBe('updated');
      expect(values?.field3).toBe('value3');
    });

    it('should handle updating with an empty object', () => {
      const nodes: Node[] = [createTestNode('node-1', { values: { field1: 'value1' } })];

      const result = NodeDataService.updateMultipleValues(nodes, 'node-1', {});

      expect((result[0].data as CustomNodeData).values?.field1).toBe('value1');
    });

    it('should not modify other nodes', () => {
      const nodes: Node[] = [
        createTestNode('node-1', { values: { field: 'value1' } }),
        createTestNode('node-2', { values: { field: 'value2' } }),
      ];

      const result = NodeDataService.updateMultipleValues(nodes, 'node-1', {
        field: 'updated',
      });

      expect((result[1].data as CustomNodeData).values?.field).toBe('value2');
      expect(result[1]).toBe(nodes[1]); // Same reference
    });

    it('should return a new array without mutating the original', () => {
      const nodes: Node[] = [createTestNode('node-1', { values: { field: 'old' } })];
      const original = nodes[0];

      const result = NodeDataService.updateMultipleValues(nodes, 'node-1', {
        field: 'new',
        field2: 'added',
      });

      expect(result).not.toBe(nodes);
      expect(result[0]).not.toBe(original);
      expect((original.data as CustomNodeData).values?.field).toBe('old');
      expect((original.data as CustomNodeData).values?.field2).toBeUndefined();
    });

    it('should handle multiple value types in one update', () => {
      const nodes: Node[] = [createTestNode('node-1', { values: {} })];

      const result = NodeDataService.updateMultipleValues(nodes, 'node-1', {
        str: 'text',
        num: 42,
        bool: true,
        nullable: null,
      });

      const values = (result[0].data as CustomNodeData).values;
      expect(values?.str).toBe('text');
      expect(values?.num).toBe(42);
      expect(values?.bool).toBe(true);
      expect(values?.nullable).toBe(null);
    });

    it('should handle updating a node that does not exist', () => {
      const nodes: Node[] = [createTestNode('node-1', { values: { field: 'value' } })];

      const result = NodeDataService.updateMultipleValues(nodes, 'nonexistent', {
        field: 'updated',
      });

      expect(result[0]).toBe(nodes[0]); // Unchanged
    });

    it('should handle empty nodes array', () => {
      const result = NodeDataService.updateMultipleValues([], 'any-id', { field: 'value' });
      expect(result).toEqual([]);
    });
  });

  describe('Edge cases and type safety', () => {
    it('should handle nodes with missing data.values gracefully', () => {
      const node: Node = {
        id: 'node-1',
        type: 'test',
        position: { x: 0, y: 0 },
        data: { label: 'Test' } as unknown as Record<string, unknown>,
      };

      const result = NodeDataService.updateNodeValue([node], 'node-1', 'field', 'value');
      expect((result[0].data as CustomNodeData).values?.field).toBe('value');
    });

    it('should preserve other node data properties when updating values', () => {
      const nodes: Node[] = [
        createTestNode('node-1', {
          label: 'My Node',
          icon: '🔥',
          values: { field: 'old' },
          parameters: { type: 'object', properties: {} },
        }),
      ];

      const result = NodeDataService.updateNodeValue(nodes, 'node-1', 'field', 'new');
      const data = result[0].data as CustomNodeData;

      expect(data.label).toBe('My Node');
      expect(data.icon).toBe('🔥');
      expect(data.parameters).toBeDefined();
      expect(data.values?.field).toBe('new');
    });
  });
});
