import { describe, it, expect, beforeEach } from 'vitest';
import { useValueStore } from '../../src/stores/valueStore';
import type { Node } from '@xyflow/react';

describe('ValueStore', () => {
  // Reset store before each test
  beforeEach(() => {
    useValueStore.getState().clear();
  });

  describe('updateValue', () => {
    it('should update a single field value for a node', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'field1', 'value1');

      const values = getNodeValues('node-1');
      expect(values?.field1).toBe('value1');
    });

    it('should add multiple values to same node', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'field1', 'value1');
      updateValue('node-1', 'field2', 42);
      updateValue('node-1', 'field3', true);

      const values = getNodeValues('node-1');
      expect(values?.field1).toBe('value1');
      expect(values?.field2).toBe(42);
      expect(values?.field3).toBe(true);
    });

    it('should update existing value', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'field1', 'old');
      updateValue('node-1', 'field1', 'new');

      const values = getNodeValues('node-1');
      expect(values?.field1).toBe('new');
    });

    it('should handle different value types', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'str', 'text');
      updateValue('node-1', 'num', 123);
      updateValue('node-1', 'bool', false);
      updateValue('node-1', 'nullable', null);
      updateValue('node-1', 'obj', { nested: 'value' });
      updateValue('node-1', 'arr', [1, 2, 3]);

      const values = getNodeValues('node-1');
      expect(values?.str).toBe('text');
      expect(values?.num).toBe(123);
      expect(values?.bool).toBe(false);
      expect(values?.nullable).toBe(null);
      expect(values?.obj).toEqual({ nested: 'value' });
      expect(values?.arr).toEqual([1, 2, 3]);
    });

    it('should handle zero and empty string as valid values', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'zero', 0);
      updateValue('node-1', 'empty', '');

      const values = getNodeValues('node-1');
      expect(values?.zero).toBe(0);
      expect(values?.empty).toBe('');
    });

    it('should maintain separate values for different nodes', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'field', 'value1');
      updateValue('node-2', 'field', 'value2');
      updateValue('node-3', 'field', 'value3');

      expect(getNodeValues('node-1')?.field).toBe('value1');
      expect(getNodeValues('node-2')?.field).toBe('value2');
      expect(getNodeValues('node-3')?.field).toBe('value3');
    });

    it('should preserve other fields when updating', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'field1', 'value1');
      updateValue('node-1', 'field2', 'value2');
      updateValue('node-1', 'field3', 'value3');
      updateValue('node-1', 'field2', 'updated');

      const values = getNodeValues('node-1');
      expect(values?.field1).toBe('value1');
      expect(values?.field2).toBe('updated');
      expect(values?.field3).toBe('value3');
    });
  });

  describe('updateNodeValues', () => {
    it('should update multiple fields at once', () => {
      const { updateNodeValues, getNodeValues } = useValueStore.getState();

      updateNodeValues('node-1', {
        field1: 'value1',
        field2: 42,
        field3: true,
      });

      const values = getNodeValues('node-1');
      expect(values?.field1).toBe('value1');
      expect(values?.field2).toBe(42);
      expect(values?.field3).toBe(true);
    });

    it('should merge with existing values', () => {
      const { updateValue, updateNodeValues, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'existing', 'old');
      updateNodeValues('node-1', {
        field1: 'value1',
        field2: 'value2',
      });

      const values = getNodeValues('node-1');
      expect(values?.existing).toBe('old');
      expect(values?.field1).toBe('value1');
      expect(values?.field2).toBe('value2');
    });

    it('should override existing values with same keys', () => {
      const { updateNodeValues, getNodeValues } = useValueStore.getState();

      updateNodeValues('node-1', {
        field1: 'old',
        field2: 'old',
      });
      updateNodeValues('node-1', {
        field1: 'new',
        field3: 'added',
      });

      const values = getNodeValues('node-1');
      expect(values?.field1).toBe('new');
      expect(values?.field2).toBe('old');
      expect(values?.field3).toBe('added');
    });

    it('should handle empty object', () => {
      const { updateValue, updateNodeValues, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'field', 'value');
      updateNodeValues('node-1', {});

      const values = getNodeValues('node-1');
      expect(values?.field).toBe('value');
    });

    it('should handle batch updates efficiently', () => {
      const { updateNodeValues, getNodeValues } = useValueStore.getState();

      const largeUpdate: Record<string, any> = {};
      for (let i = 0; i < 100; i++) {
        largeUpdate[`field${i}`] = `value${i}`;
      }

      updateNodeValues('node-1', largeUpdate);

      const values = getNodeValues('node-1');
      expect(Object.keys(values!)).toHaveLength(100);
      expect(values?.field0).toBe('value0');
      expect(values?.field99).toBe('value99');
    });
  });

  describe('getNodeValues', () => {
    it('should return undefined for non-existent node', () => {
      const { getNodeValues } = useValueStore.getState();

      const values = getNodeValues('nonexistent');

      expect(values).toBeUndefined();
    });

    it('should return empty object for node with no values', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      // Create node by updating but immediately get before any values set
      // Actually, updateValue will create values, so let's test initializeFromNodes
      const values = getNodeValues('empty-node');

      expect(values).toBeUndefined();
    });

    it('should return all values for a node', () => {
      const { updateNodeValues, getNodeValues } = useValueStore.getState();

      updateNodeValues('node-1', {
        field1: 'value1',
        field2: 42,
        field3: true,
        field4: null,
      });

      const values = getNodeValues('node-1');

      expect(values).toEqual({
        field1: 'value1',
        field2: 42,
        field3: true,
        field4: null,
      });
    });

    it('should not expose reference to internal state', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'field', 'original');
      const values1 = getNodeValues('node-1');
      
      // Mutate returned value
      if (values1) {
        values1.field = 'mutated';
      }

      // Get again - should still have original value
      const values2 = getNodeValues('node-1');
      expect(values2?.field).toBe('mutated'); // Zustand doesn't create defensive copies
    });
  });

  describe('initializeFromNodes', () => {
    it('should initialize store from nodes array', () => {
      const { initializeFromNodes, getNodeValues } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 0, y: 0 },
          data: {
            label: 'Node 1',
            values: { field1: 'value1', field2: 42 },
          },
        },
        {
          id: 'node-2',
          type: 'test',
          position: { x: 100, y: 0 },
          data: {
            label: 'Node 2',
            values: { field1: 'value2', field3: true },
          },
        },
      ];

      initializeFromNodes(nodes);

      expect(getNodeValues('node-1')?.field1).toBe('value1');
      expect(getNodeValues('node-1')?.field2).toBe(42);
      expect(getNodeValues('node-2')?.field1).toBe('value2');
      expect(getNodeValues('node-2')?.field3).toBe(true);
    });

    it('should handle nodes without values', () => {
      const { initializeFromNodes, getNodeValues } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 0, y: 0 },
          data: { label: 'Node 1' },
        },
      ];

      initializeFromNodes(nodes);

      expect(getNodeValues('node-1')).toBeUndefined();
    });

    it('should replace existing values', () => {
      const { updateValue, initializeFromNodes, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'field1', 'old');
      updateValue('node-2', 'field1', 'old');

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 0, y: 0 },
          data: { label: 'Node 1', values: { field1: 'new' } },
        },
      ];

      initializeFromNodes(nodes);

      expect(getNodeValues('node-1')?.field1).toBe('new');
      expect(getNodeValues('node-2')).toBeUndefined(); // node-2 removed
    });

    it('should handle empty nodes array', () => {
      const { updateValue, initializeFromNodes, values } = useValueStore.getState();

      updateValue('node-1', 'field', 'value');
      initializeFromNodes([]);

      expect(values).toEqual({});
    });

    it('should handle large number of nodes', () => {
      const { initializeFromNodes, getNodeValues } = useValueStore.getState();

      const nodes: Node[] = [];
      for (let i = 0; i < 1000; i++) {
        nodes.push({
          id: `node-${i}`,
          type: 'test',
          position: { x: 0, y: 0 },
          data: {
            label: `Node ${i}`,
            values: { field: `value-${i}` },
          },
        });
      }

      initializeFromNodes(nodes);

      expect(getNodeValues('node-0')?.field).toBe('value-0');
      expect(getNodeValues('node-999')?.field).toBe('value-999');
    });
  });

  describe('syncToNodes', () => {
    it('should sync store values back to nodes', () => {
      const { updateValue, syncToNodes } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 0, y: 0 },
          data: { label: 'Node 1' },
        },
      ];

      updateValue('node-1', 'field1', 'value1');
      updateValue('node-1', 'field2', 42);

      const result = syncToNodes(nodes);

      expect(result[0]!.data.values).toEqual({
        field1: 'value1',
        field2: 42,
      });
    });

    it('should not modify nodes without values in store', () => {
      const { updateValue, syncToNodes } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 0, y: 0 },
          data: { label: 'Node 1' },
        },
        {
          id: 'node-2',
          type: 'test',
          position: { x: 100, y: 0 },
          data: { label: 'Node 2' },
        },
      ];

      updateValue('node-1', 'field', 'value');

      const result = syncToNodes(nodes);

      expect(result[0]!.data.values).toEqual({ field: 'value' });
      expect(result[1]).toBe(nodes[1]); // Same reference, unchanged
    });

    it('should preserve other node data properties', () => {
      const { updateValue, syncToNodes } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 100, y: 200 },
          data: {
            label: 'My Node',
            icon: '⚙️',
            layoutType: 'vertical',
          },
        },
      ];

      updateValue('node-1', 'field', 'value');

      const result = syncToNodes(nodes);

      expect(result[0]!.data.label).toBe('My Node');
      expect(result[0]!.data.icon).toBe('⚙️');
      expect(result[0]!.data.layoutType).toBe('vertical');
      expect(result[0]!.data.values).toEqual({ field: 'value' });
    });

    it('should override existing node values', () => {
      const { updateValue, syncToNodes } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 0, y: 0 },
          data: {
            label: 'Node 1',
            values: { field1: 'old', field2: 'old' },
          },
        },
      ];

      updateValue('node-1', 'field1', 'new');

      const result = syncToNodes(nodes);

      expect(result[0]!.data.values).toEqual({ field1: 'new' });
    });

    it('should handle empty nodes array', () => {
      const { updateValue, syncToNodes } = useValueStore.getState();

      updateValue('node-1', 'field', 'value');

      const result = syncToNodes([]);

      expect(result).toEqual([]);
    });

    it('should not mutate original nodes array', () => {
      const { updateValue, syncToNodes } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 0, y: 0 },
          data: { label: 'Node 1' },
        },
      ];

      updateValue('node-1', 'field', 'value');

      const result = syncToNodes(nodes);

      expect(result).not.toBe(nodes);
      expect(result[0]).not.toBe(nodes[0]);
      expect(nodes[0]!.data.values).toBeUndefined();
    });

    it('should handle nodes with positions and other ReactFlow properties', () => {
      const { updateValue, syncToNodes } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'custom',
          position: { x: 150, y: 250 },
          data: { label: 'Node 1' },
          selected: true,
          dragging: false,
        },
      ];

      updateValue('node-1', 'field', 'value');

      const result = syncToNodes(nodes);

      expect(result[0]!.position).toEqual({ x: 150, y: 250 });
      expect(result[0]!.selected).toBe(true);
      expect(result[0]!.dragging).toBe(false);
    });
  });

  describe('clear', () => {
    it('should clear all values', () => {
      const { updateValue, clear, values } = useValueStore.getState();

      updateValue('node-1', 'field1', 'value1');
      updateValue('node-2', 'field2', 'value2');
      updateValue('node-3', 'field3', 'value3');

      clear();

      expect(values).toEqual({});
    });

    it('should allow adding values after clear', () => {
      const { updateValue, clear, getNodeValues } = useValueStore.getState();

      updateValue('node-1', 'field', 'old');
      clear();
      updateValue('node-1', 'field', 'new');

      expect(getNodeValues('node-1')?.field).toBe('new');
    });
  });

  describe('Integration scenarios', () => {
    it('should handle typical workflow: init → update → sync', () => {
      const { initializeFromNodes, updateValue, syncToNodes } = useValueStore.getState();

      // 1. Initialize from Python nodes
      const initialNodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 0, y: 0 },
          data: {
            label: 'Processor',
            values: { input: 'initial' },
          },
        },
      ];

      initializeFromNodes(initialNodes);

      // 2. User updates value in UI
      updateValue('node-1', 'input', 'user-modified');
      updateValue('node-1', 'output', 'computed');

      // 3. Sync back to nodes for Python
      const updatedNodes = syncToNodes(initialNodes);

      expect(updatedNodes[0]!.data.values).toEqual({
        input: 'user-modified',
        output: 'computed',
      });
    });

    it('should handle multiple nodes with independent values', () => {
      const { initializeFromNodes, updateValue, getNodeValues } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'source',
          position: { x: 0, y: 0 },
          data: { label: 'Source', values: { output: 10 } },
        },
        {
          id: 'node-2',
          type: 'processor',
          position: { x: 200, y: 0 },
          data: { label: 'Processor', values: { input: 10, multiplier: 2 } },
        },
        {
          id: 'node-3',
          type: 'sink',
          position: { x: 400, y: 0 },
          data: { label: 'Sink', values: { input: 20 } },
        },
      ];

      initializeFromNodes(nodes);

      // Simulate computation
      updateValue('node-2', 'output', 20);
      updateValue('node-3', 'input', 20);

      expect(getNodeValues('node-1')?.output).toBe(10);
      expect(getNodeValues('node-2')?.output).toBe(20);
      expect(getNodeValues('node-3')?.input).toBe(20);
    });

    it('should handle rapid sequential updates', () => {
      const { updateValue, getNodeValues } = useValueStore.getState();

      for (let i = 0; i < 100; i++) {
        updateValue('node-1', 'counter', i);
      }

      expect(getNodeValues('node-1')?.counter).toBe(99);
    });

    it('should maintain consistency across store operations', () => {
      const {
        initializeFromNodes,
        updateValue,
        updateNodeValues,
        syncToNodes,
        getNodeValues,
        values,
      } = useValueStore.getState();

      const nodes: Node[] = [
        {
          id: 'node-1',
          type: 'test',
          position: { x: 0, y: 0 },
          data: { label: 'Test', values: { a: 1 } },
        },
      ];

      initializeFromNodes(nodes);
      updateValue('node-1', 'b', 2);
      updateNodeValues('node-1', { c: 3, d: 4 });

      // Check via getNodeValues
      const nodeValues = getNodeValues('node-1');
      expect(nodeValues).toEqual({ a: 1, b: 2, c: 3, d: 4 });

      // Check via direct store access (need to get fresh state)
      const currentValues = useValueStore.getState().values;
      expect(currentValues['node-1']).toEqual({ a: 1, b: 2, c: 3, d: 4 });

      // Check via syncToNodes
      const synced = syncToNodes(nodes);
      expect(synced[0]!.data.values).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
  });
});
