import { describe, it, expect } from 'vitest';
import { NodeLayoutService } from '../../src/services/nodeLayoutService';
import type { Node } from '@xyflow/react';
import type { CustomNodeData, HandleConfig } from '../../src/types/schema';
import type { HandleType } from '../../src/components/handles/HandleFactory';

describe('NodeLayoutService', () => {
  // Helper to create a test node with handles
  const createTestNode = (
    id: string,
    data: Partial<CustomNodeData>,
    inputs: HandleConfig[] = [],
    outputs: HandleConfig[] = []
  ): Node => ({
    id,
    type: 'test',
    position: { x: 0, y: 0 },
    data: {
      label: 'Test Node',
      inputs,
      outputs,
      ...data,
    } as unknown as Record<string, unknown>,
  });

  describe('updateNodeLayout', () => {
    it('should update the layout type of the specified node', () => {
      const nodes: Node[] = [
        createTestNode('node-1', { layoutType: 'horizontal' }),
        createTestNode('node-2', { layoutType: 'vertical' }),
      ];

      const result = NodeLayoutService.updateNodeLayout(nodes, 'node-1', 'compact');

      expect((result[0]!.data as CustomNodeData).layoutType).toBe('compact');
      expect((result[1]!.data as CustomNodeData).layoutType).toBe('vertical');
    });

    it('should preserve other node data when updating layout', () => {
      const nodes: Node[] = [
        createTestNode('node-1', {
          label: 'My Node',
          layoutType: 'horizontal',
          icon: '⚙️',
        }),
      ];

      const result = NodeLayoutService.updateNodeLayout(nodes, 'node-1', 'vertical');
      const data = result[0]!.data as CustomNodeData;

      expect(data.layoutType).toBe('vertical');
      expect(data.label).toBe('My Node');
      expect(data.icon).toBe('⚙️');
    });

    it('should not mutate the original array', () => {
      const nodes: Node[] = [createTestNode('node-1', { layoutType: 'horizontal' })];
      const original = nodes[0];

      const result = NodeLayoutService.updateNodeLayout(nodes, 'node-1', 'vertical');

      expect(result).not.toBe(nodes);
      expect(result[0]).not.toBe(original);
      expect((original!.data as CustomNodeData).layoutType).toBe('horizontal');
    });

    it('should not modify nodes that do not match the nodeId', () => {
      const nodes: Node[] = [
        createTestNode('node-1', { layoutType: 'horizontal' }),
        createTestNode('node-2', { layoutType: 'vertical' }),
      ];

      const result = NodeLayoutService.updateNodeLayout(nodes, 'node-1', 'compact');

      expect(result[1]).toBe(nodes[1]); // Same reference
    });

    it('should handle empty nodes array', () => {
      const result = NodeLayoutService.updateNodeLayout([], 'any-id', 'compact');
      expect(result).toEqual([]);
    });

    it('should handle various layout type strings', () => {
      const nodes: Node[] = [createTestNode('node-1', { layoutType: 'horizontal' })];

      const types = ['vertical', 'compact', 'grid', 'custom-layout'];
      types.forEach((type) => {
        const result = NodeLayoutService.updateNodeLayout(nodes, 'node-1', type);
        expect((result[0]!.data as CustomNodeData).layoutType).toBe(type);
      });
    });
  });

  describe('updateHandleType', () => {
    it('should update the handle type for a specific input handle', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
        { id: 'input-2', label: 'Input 2', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, [])];

      const result = NodeLayoutService.updateHandleType(
        nodes,
        'node-1',
        'input-1',
        'button',
        true
      );

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs?.[0]?.handle_type).toBe('button');
      expect(data.inputs?.[1]?.handle_type).toBe('base');
    });

    it('should update the handle type for a specific output handle', () => {
      const outputs: HandleConfig[] = [
        { id: 'output-1', label: 'Output 1', handle_type: 'base' },
        { id: 'output-2', label: 'Output 2', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, [], outputs)];

      const result = NodeLayoutService.updateHandleType(
        nodes,
        'node-1',
        'output-1',
        'labeled',
        false
      );

      const data = result[0]!.data as CustomNodeData;
      expect(data.outputs?.[0]?.handle_type).toBe('labeled');
      expect(data.outputs?.[1]?.handle_type).toBe('base');
    });

    it('should preserve other handle properties when updating type', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'My Input', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, [])];

      const result = NodeLayoutService.updateHandleType(
        nodes,
        'node-1',
        'input-1',
        'button',
        true
      );

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs?.[0]?.id).toBe('input-1');
      expect(data.inputs?.[0]?.label).toBe('My Input');
      expect(data.inputs?.[0]?.handle_type).toBe('button');
    });

    it('should not modify handles that do not match the handleId', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
        { id: 'input-2', label: 'Input 2', handle_type: 'labeled' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, [])];

      const result = NodeLayoutService.updateHandleType(
        nodes,
        'node-1',
        'input-1',
        'button',
        true
      );

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs?.[1]).toEqual(inputs[1]);
    });

    it('should handle empty handles array', () => {
      const nodes: Node[] = [createTestNode('node-1', {}, [], [])];

      const result = NodeLayoutService.updateHandleType(
        nodes,
        'node-1',
        'input-1',
        'button',
        true
      );

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs).toEqual([]);
    });

    it('should handle missing handles array', () => {
      const nodes: Node[] = [createTestNode('node-1', {})];

      const result = NodeLayoutService.updateHandleType(
        nodes,
        'node-1',
        'input-1',
        'button',
        true
      );

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs).toEqual([]);
    });

    it('should not mutate the original array', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, [...inputs], [])];
      const original = nodes[0];

      const result = NodeLayoutService.updateHandleType(
        nodes,
        'node-1',
        'input-1',
        'button',
        true
      );

      expect(result).not.toBe(nodes);
      expect(result[0]).not.toBe(original);
      expect(((original!.data as CustomNodeData).inputs?.[0] as HandleConfig).handle_type).toBe(
        'base'
      );
    });
  });

  describe('updateAllInputHandleTypes', () => {
    it('should update all input handle types', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
        { id: 'input-2', label: 'Input 2', handle_type: 'labeled' },
        { id: 'input-3', label: 'Input 3', handle_type: 'button' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, [])];

      const result = NodeLayoutService.updateAllInputHandleTypes(nodes, 'node-1', 'button');

      const data = result[0]!.data as CustomNodeData;
      data.inputs?.forEach((handle) => {
        expect(handle.handle_type).toBe('button');
      });
    });

    it('should not modify output handles', () => {
      const inputs: HandleConfig[] = [{ id: 'input-1', label: 'Input 1', handle_type: 'base' }];
      const outputs: HandleConfig[] = [
        { id: 'output-1', label: 'Output 1', handle_type: 'labeled' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, outputs)];

      const result = NodeLayoutService.updateAllInputHandleTypes(nodes, 'node-1', 'button');

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs?.[0]?.handle_type).toBe('button');
      expect(data.outputs?.[0]?.handle_type).toBe('labeled');
    });

    it('should preserve other handle properties', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'My Input', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, [])];

      const result = NodeLayoutService.updateAllInputHandleTypes(nodes, 'node-1', 'button');

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs?.[0]?.id).toBe('input-1');
      expect(data.inputs?.[0]?.label).toBe('My Input');
    });

    it('should handle empty inputs array', () => {
      const nodes: Node[] = [createTestNode('node-1', {}, [], [])];

      const result = NodeLayoutService.updateAllInputHandleTypes(nodes, 'node-1', 'button');

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs).toEqual([]);
    });

    it('should handle missing inputs array', () => {
      const nodes: Node[] = [createTestNode('node-1', {})];

      const result = NodeLayoutService.updateAllInputHandleTypes(nodes, 'node-1', 'button');

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs).toEqual([]);
    });

    it('should not mutate the original array', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, [...inputs], [])];
      const original = nodes[0];

      const result = NodeLayoutService.updateAllInputHandleTypes(nodes, 'node-1', 'button');

      expect(result).not.toBe(nodes);
      expect(result[0]).not.toBe(original);
    });
  });

  describe('updateAllOutputHandleTypes', () => {
    it('should update all output handle types', () => {
      const outputs: HandleConfig[] = [
        { id: 'output-1', label: 'Output 1', handle_type: 'base' },
        { id: 'output-2', label: 'Output 2', handle_type: 'labeled' },
        { id: 'output-3', label: 'Output 3', handle_type: 'button' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, [], outputs)];

      const result = NodeLayoutService.updateAllOutputHandleTypes(nodes, 'node-1', 'labeled');

      const data = result[0]!.data as CustomNodeData;
      data.outputs?.forEach((handle) => {
        expect(handle.handle_type).toBe('labeled');
      });
    });

    it('should not modify input handles', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'button' },
      ];
      const outputs: HandleConfig[] = [
        { id: 'output-1', label: 'Output 1', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, outputs)];

      const result = NodeLayoutService.updateAllOutputHandleTypes(nodes, 'node-1', 'labeled');

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs?.[0]?.handle_type).toBe('button');
      expect(data.outputs?.[0]?.handle_type).toBe('labeled');
    });

    it('should handle empty outputs array', () => {
      const nodes: Node[] = [createTestNode('node-1', {}, [], [])];

      const result = NodeLayoutService.updateAllOutputHandleTypes(nodes, 'node-1', 'labeled');

      const data = result[0]!.data as CustomNodeData;
      expect(data.outputs).toEqual([]);
    });

    it('should handle missing outputs array', () => {
      const nodes: Node[] = [createTestNode('node-1', {})];

      const result = NodeLayoutService.updateAllOutputHandleTypes(nodes, 'node-1', 'labeled');

      const data = result[0]!.data as CustomNodeData;
      expect(data.outputs).toEqual([]);
    });
  });

  describe('updateAllHandleTypes', () => {
    it('should update all input and output handle types', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
        { id: 'input-2', label: 'Input 2', handle_type: 'labeled' },
      ];
      const outputs: HandleConfig[] = [
        { id: 'output-1', label: 'Output 1', handle_type: 'button' },
        { id: 'output-2', label: 'Output 2', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, outputs)];

      const result = NodeLayoutService.updateAllHandleTypes(nodes, 'node-1', 'labeled');

      const data = result[0]!.data as CustomNodeData;
      data.inputs?.forEach((handle) => {
        expect(handle.handle_type).toBe('labeled');
      });
      data.outputs?.forEach((handle) => {
        expect(handle.handle_type).toBe('labeled');
      });
    });

    it('should preserve handle IDs and labels', () => {
      const inputs: HandleConfig[] = [{ id: 'input-1', label: 'My Input', handle_type: 'base' }];
      const outputs: HandleConfig[] = [
        { id: 'output-1', label: 'My Output', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, outputs)];

      const result = NodeLayoutService.updateAllHandleTypes(nodes, 'node-1', 'button');

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs?.[0]?.id).toBe('input-1');
      expect(data.inputs?.[0]?.label).toBe('My Input');
      expect(data.outputs?.[0]?.id).toBe('output-1');
      expect(data.outputs?.[0]?.label).toBe('My Output');
    });

    it('should handle nodes with no handles', () => {
      const nodes: Node[] = [createTestNode('node-1', {})];

      const result = NodeLayoutService.updateAllHandleTypes(nodes, 'node-1', 'button');

      const data = result[0]!.data as CustomNodeData;
      expect(data.inputs).toEqual([]);
      expect(data.outputs).toEqual([]);
    });

    it('should not modify other nodes', () => {
      const inputs1: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
      ];
      const inputs2: HandleConfig[] = [
        { id: 'input-2', label: 'Input 2', handle_type: 'labeled' },
      ];
      const nodes: Node[] = [
        createTestNode('node-1', {}, inputs1, []),
        createTestNode('node-2', {}, inputs2, []),
      ];

      const result = NodeLayoutService.updateAllHandleTypes(nodes, 'node-1', 'button');

      expect(result[1]).toBe(nodes[1]);
    });

    it('should not mutate the original array', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, [...inputs], [])];
      const original = nodes[0];

      const result = NodeLayoutService.updateAllHandleTypes(nodes, 'node-1', 'button');

      expect(result).not.toBe(nodes);
      expect(result[0]).not.toBe(original);
    });
  });

  describe('getHandleType', () => {
    it('should return the handle type for an input handle', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'button' },
      ];
      const node = createTestNode('node-1', {}, inputs, []);

      const handleType = NodeLayoutService.getHandleType(node, 'input-1', true);

      expect(handleType).toBe('button');
    });

    it('should return the handle type for an output handle', () => {
      const outputs: HandleConfig[] = [
        { id: 'output-1', label: 'Output 1', handle_type: 'labeled' },
      ];
      const node = createTestNode('node-1', {}, [], outputs);

      const handleType = NodeLayoutService.getHandleType(node, 'output-1', false);

      expect(handleType).toBe('labeled');
    });

    it('should return "base" as default if handle not found', () => {
      const node = createTestNode('node-1', {}, [], []);

      const handleType = NodeLayoutService.getHandleType(node, 'nonexistent', true);

      expect(handleType).toBe('base');
    });

    it('should return "base" as default if handle_type is undefined', () => {
      const inputs: HandleConfig[] = [{ id: 'input-1', label: 'Input 1' }];
      const node = createTestNode('node-1', {}, inputs, []);

      const handleType = NodeLayoutService.getHandleType(node, 'input-1', true);

      expect(handleType).toBe('base');
    });

    it('should handle missing inputs/outputs arrays', () => {
      const node = createTestNode('node-1', {});

      const handleType = NodeLayoutService.getHandleType(node, 'input-1', true);

      expect(handleType).toBe('base');
    });

    it('should distinguish between input and output handles with same ID', () => {
      const inputs: HandleConfig[] = [
        { id: 'handle-1', label: 'Input', handle_type: 'button' },
      ];
      const outputs: HandleConfig[] = [
        { id: 'handle-1', label: 'Output', handle_type: 'labeled' },
      ];
      const node = createTestNode('node-1', {}, inputs, outputs);

      expect(NodeLayoutService.getHandleType(node, 'handle-1', true)).toBe('button');
      expect(NodeLayoutService.getHandleType(node, 'handle-1', false)).toBe('labeled');
    });
  });

  describe('getLayoutType', () => {
    it('should return the layout type of a node', () => {
      const node = createTestNode('node-1', { layoutType: 'vertical' });

      const layoutType = NodeLayoutService.getLayoutType(node);

      expect(layoutType).toBe('vertical');
    });

    it('should return "horizontal" as default if layoutType is undefined', () => {
      const node = createTestNode('node-1', {});

      const layoutType = NodeLayoutService.getLayoutType(node);

      expect(layoutType).toBe('horizontal');
    });

    it('should handle custom layout types', () => {
      const node = createTestNode('node-1', { layoutType: 'custom-grid-layout' });

      const layoutType = NodeLayoutService.getLayoutType(node);

      expect(layoutType).toBe('custom-grid-layout');
    });
  });

  describe('Edge cases and integration', () => {
    it('should handle all three handle types', () => {
      const handleTypes: HandleType[] = ['base', 'button', 'labeled'];
      const inputs: HandleConfig[] = [{ id: 'input-1', label: 'Input 1', handle_type: 'base' }];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, [])];

      handleTypes.forEach((type) => {
        const result = NodeLayoutService.updateHandleType(nodes, 'node-1', 'input-1', type, true);
        expect((result[0]!.data as CustomNodeData).inputs?.[0]?.handle_type).toBe(type);
      });
    });

    it('should handle nodes with mixed handle configurations', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
        { id: 'input-2', label: 'Input 2', handle_type: 'button' },
      ];
      const outputs: HandleConfig[] = [
        { id: 'output-1', label: 'Output 1', handle_type: 'labeled' },
        { id: 'output-2', label: 'Output 2' }, // No handle_type
      ];
      const nodes: Node[] = [createTestNode('node-1', {}, inputs, outputs)];

      expect(NodeLayoutService.getHandleType(nodes[0]!, 'input-1', true)).toBe('base');
      expect(NodeLayoutService.getHandleType(nodes[0]!, 'input-2', true)).toBe('button');
      expect(NodeLayoutService.getHandleType(nodes[0]!, 'output-1', false)).toBe('labeled');
      expect(NodeLayoutService.getHandleType(nodes[0]!, 'output-2', false)).toBe('base');
    });

    it('should preserve node properties across multiple updates', () => {
      const inputs: HandleConfig[] = [
        { id: 'input-1', label: 'Input 1', handle_type: 'base' },
      ];
      const nodes: Node[] = [
        createTestNode('node-1', { layoutType: 'horizontal', icon: '🔧' }, inputs, []),
      ];

      let result = NodeLayoutService.updateNodeLayout(nodes, 'node-1', 'vertical');
      result = NodeLayoutService.updateHandleType(result, 'node-1', 'input-1', 'button', true);

      const data = result[0]!.data as CustomNodeData;
      expect(data.layoutType).toBe('vertical');
      expect(data.icon).toBe('🔧');
      expect(data.inputs?.[0]?.handle_type).toBe('button');
    });
  });
});
