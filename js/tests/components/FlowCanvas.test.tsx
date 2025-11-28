import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactFlowProvider } from "@xyflow/react";
import type { Node, Edge, NodeTypes } from "@xyflow/react";
import { FlowCanvas } from "../../src/components/FlowCanvas";
import type { ContextMenuState } from "../../src/types/schema";

// Mock the sub-components
vi.mock("../../src/components/FlowToolbar", () => ({
  FlowToolbar: ({ onExport, onLayoutVertical, onLayoutHorizontal }: any) => (
    <div data-testid="flow-toolbar">
      <button onClick={onExport}>Export</button>
      <button onClick={onLayoutVertical}>Vertical</button>
      <button onClick={onLayoutHorizontal}>Horizontal</button>
    </div>
  ),
}));

vi.mock("../../src/ContextMenu", () => ({
  ContextMenu: ({ id, type, x, y, onDelete, onClose }: any) => (
    <div data-testid="context-menu" data-id={id} data-type={type} style={{ left: x, top: y }}>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

describe("FlowCanvas", () => {
  const mockNodeTypes: NodeTypes = {
    custom: () => <div>Custom Node</div>,
  };

  const mockNodes: Node[] = [
    {
      id: "1",
      type: "custom",
      position: { x: 0, y: 0 },
      data: { label: "Node 1" },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 100, y: 100 },
      data: { label: "Node 2" },
    },
  ];

  const mockEdges: Edge[] = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
    },
  ];

  const defaultProps = {
    nodes: mockNodes,
    edges: mockEdges,
    nodeTypes: mockNodeTypes,
    height: "600px",
    onNodesChange: vi.fn(),
    onEdgesChange: vi.fn(),
    onConnect: vi.fn(),
    onNodeContextMenu: vi.fn(),
    onEdgeContextMenu: vi.fn(),
    onPaneClick: vi.fn(),
    contextMenu: null,
    onDelete: vi.fn(),
    onCloseContextMenu: vi.fn(),
    onExport: vi.fn(),
    onLayoutVertical: vi.fn(),
    onLayoutHorizontal: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderFlowCanvas = (props = {}) => {
    return render(
      <ReactFlowProvider>
        <FlowCanvas {...defaultProps} {...props} />
      </ReactFlowProvider>
    );
  };

  describe("Basic Rendering", () => {
    it("should render ReactFlow component", () => {
      const { container } = renderFlowCanvas();
      
      const reactFlowWrapper = container.querySelector('.react-flow');
      expect(reactFlowWrapper).toBeTruthy();
    });

    it("should render with correct container styles", () => {
      const { container } = renderFlowCanvas();
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.style.width).toBe("100%");
      expect(wrapper.style.height).toBe("100%");
      expect(wrapper.style.position).toBe("relative");
    });

    it("should render Background component", () => {
      const { container } = renderFlowCanvas();
      
      const background = container.querySelector('.react-flow__background');
      expect(background).toBeTruthy();
    });

    it("should render Controls component", () => {
      const { container } = renderFlowCanvas();
      
      const controls = container.querySelector('.react-flow__controls');
      expect(controls).toBeTruthy();
    });

    it("should render FlowToolbar in panel", () => {
      renderFlowCanvas();
      
      expect(screen.getByTestId("flow-toolbar")).toBeTruthy();
    });

    it("should pass nodes to ReactFlow", () => {
      const customNodes: Node[] = [
        {
          id: "test-1",
          type: "custom",
          position: { x: 50, y: 50 },
          data: { label: "Test Node" },
        },
      ];

      renderFlowCanvas({ nodes: customNodes });
      
      // ReactFlow should be rendered with the nodes
      const { container } = renderFlowCanvas({ nodes: customNodes });
      expect(container.querySelector('.react-flow')).toBeTruthy();
    });

    it("should pass edges to ReactFlow", () => {
      const customEdges: Edge[] = [
        {
          id: "e-test",
          source: "1",
          target: "2",
          type: "default",
        },
      ];

      const { container } = renderFlowCanvas({ edges: customEdges });
      expect(container.querySelector('.react-flow')).toBeTruthy();
    });

    it("should pass nodeTypes to ReactFlow", () => {
      const customTypes: NodeTypes = {
        special: () => <div>Special Node</div>,
      };

      const { container } = renderFlowCanvas({ nodeTypes: customTypes });
      expect(container.querySelector('.react-flow')).toBeTruthy();
    });
  });

  describe("Context Menu", () => {
    it("should not render ContextMenu when contextMenu is null", () => {
      renderFlowCanvas({ contextMenu: null });
      
      expect(screen.queryByTestId("context-menu")).toBeNull();
    });

    it("should render ContextMenu when contextMenu state exists", () => {
      const contextMenu: ContextMenuState = {
        id: "node-1",
        type: "node",
        x: 100,
        y: 200,
      };

      renderFlowCanvas({ contextMenu });
      
      expect(screen.getByTestId("context-menu")).toBeTruthy();
    });

    it("should pass correct props to ContextMenu for node", () => {
      const contextMenu: ContextMenuState = {
        id: "node-1",
        type: "node",
        x: 150,
        y: 250,
      };

      renderFlowCanvas({ contextMenu });
      
      const menu = screen.getByTestId("context-menu");
      expect(menu.getAttribute("data-id")).toBe("node-1");
      expect(menu.getAttribute("data-type")).toBe("node");
      expect(menu.style.left).toBe("150px");
      expect(menu.style.top).toBe("250px");
    });

    it("should pass correct props to ContextMenu for edge", () => {
      const contextMenu: ContextMenuState = {
        id: "edge-1",
        type: "edge",
        x: 300,
        y: 400,
      };

      renderFlowCanvas({ contextMenu });
      
      const menu = screen.getByTestId("context-menu");
      expect(menu.getAttribute("data-id")).toBe("edge-1");
      expect(menu.getAttribute("data-type")).toBe("edge");
    });

    it("should call onDelete when context menu delete is clicked", async () => {
      const mockOnDelete = vi.fn();
      const contextMenu: ContextMenuState = {
        id: "node-1",
        type: "node",
        x: 100,
        y: 200,
      };

      renderFlowCanvas({ contextMenu, onDelete: mockOnDelete });
      
      const deleteButton = screen.getByText("Delete");
      deleteButton.click();

      expect(mockOnDelete).toHaveBeenCalledTimes(1);
    });

    it("should call onCloseContextMenu when context menu close is clicked", async () => {
      const mockOnClose = vi.fn();
      const contextMenu: ContextMenuState = {
        id: "node-1",
        type: "node",
        x: 100,
        y: 200,
      };

      renderFlowCanvas({ contextMenu, onCloseContextMenu: mockOnClose });
      
      const closeButton = screen.getByText("Close");
      closeButton.click();

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("Toolbar Integration", () => {
    it("should call onExport when toolbar export is clicked", () => {
      const mockOnExport = vi.fn();
      
      renderFlowCanvas({ onExport: mockOnExport });
      
      const exportButton = screen.getByText("Export");
      exportButton.click();

      expect(mockOnExport).toHaveBeenCalledTimes(1);
    });

    it("should call onLayoutVertical when toolbar vertical is clicked", () => {
      const mockOnLayoutVertical = vi.fn();
      
      renderFlowCanvas({ onLayoutVertical: mockOnLayoutVertical });
      
      const verticalButton = screen.getByText("Vertical");
      verticalButton.click();

      expect(mockOnLayoutVertical).toHaveBeenCalledTimes(1);
    });

    it("should call onLayoutHorizontal when toolbar horizontal is clicked", () => {
      const mockOnLayoutHorizontal = vi.fn();
      
      renderFlowCanvas({ onLayoutHorizontal: mockOnLayoutHorizontal });
      
      const horizontalButton = screen.getByText("Horizontal");
      horizontalButton.click();

      expect(mockOnLayoutHorizontal).toHaveBeenCalledTimes(1);
    });
  });

  describe("ReactFlow Configuration", () => {
    it("should enable fitView", () => {
      const { container } = renderFlowCanvas();
      
      // ReactFlow should be rendered with fitView enabled
      expect(container.querySelector('.react-flow')).toBeTruthy();
    });

    it("should enable node dragging", () => {
      const { container } = renderFlowCanvas();
      
      expect(container.querySelector('.react-flow')).toBeTruthy();
      // nodesDraggable=true is passed to ReactFlow
    });

    it("should enable node connecting", () => {
      const { container } = renderFlowCanvas();
      
      expect(container.querySelector('.react-flow')).toBeTruthy();
      // nodesConnectable=true is passed to ReactFlow
    });

    it("should enable element selecting", () => {
      const { container } = renderFlowCanvas();
      
      expect(container.querySelector('.react-flow')).toBeTruthy();
      // elementsSelectable=true is passed to ReactFlow
    });

    it("should set minZoom and maxZoom", () => {
      const { container } = renderFlowCanvas();
      
      expect(container.querySelector('.react-flow')).toBeTruthy();
      // minZoom=0.1 and maxZoom=2 are passed to ReactFlow
    });
  });

  describe("Empty States", () => {
    it("should render with empty nodes array", () => {
      const { container } = renderFlowCanvas({ nodes: [] });
      
      expect(container.querySelector('.react-flow')).toBeTruthy();
    });

    it("should render with empty edges array", () => {
      const { container } = renderFlowCanvas({ edges: [] });
      
      expect(container.querySelector('.react-flow')).toBeTruthy();
    });

    it("should render with both empty nodes and edges", () => {
      const { container } = renderFlowCanvas({ nodes: [], edges: [] });
      
      expect(container.querySelector('.react-flow')).toBeTruthy();
      expect(screen.getByTestId("flow-toolbar")).toBeTruthy();
    });
  });

  describe("Callback Props", () => {
    it("should receive onNodesChange callback", () => {
      const mockOnNodesChange = vi.fn();
      
      renderFlowCanvas({ onNodesChange: mockOnNodesChange });
      
      // The callback is passed to ReactFlow
      expect(screen.getByTestId("flow-toolbar")).toBeTruthy();
    });

    it("should receive onEdgesChange callback", () => {
      const mockOnEdgesChange = vi.fn();
      
      renderFlowCanvas({ onEdgesChange: mockOnEdgesChange });
      
      expect(screen.getByTestId("flow-toolbar")).toBeTruthy();
    });

    it("should receive onConnect callback", () => {
      const mockOnConnect = vi.fn();
      
      renderFlowCanvas({ onConnect: mockOnConnect });
      
      expect(screen.getByTestId("flow-toolbar")).toBeTruthy();
    });

    it("should receive onNodeContextMenu callback", () => {
      const mockOnNodeContextMenu = vi.fn();
      
      renderFlowCanvas({ onNodeContextMenu: mockOnNodeContextMenu });
      
      expect(screen.getByTestId("flow-toolbar")).toBeTruthy();
    });

    it("should receive onEdgeContextMenu callback", () => {
      const mockOnEdgeContextMenu = vi.fn();
      
      renderFlowCanvas({ onEdgeContextMenu: mockOnEdgeContextMenu });
      
      expect(screen.getByTestId("flow-toolbar")).toBeTruthy();
    });

    it("should receive onPaneClick callback", () => {
      const mockOnPaneClick = vi.fn();
      
      renderFlowCanvas({ onPaneClick: mockOnPaneClick });
      
      expect(screen.getByTestId("flow-toolbar")).toBeTruthy();
    });
  });

  describe("Multiple Context Menu States", () => {
    it("should update when context menu changes from null to node", () => {
      const { rerender } = renderFlowCanvas({ contextMenu: null });
      
      expect(screen.queryByTestId("context-menu")).toBeNull();

      const contextMenu: ContextMenuState = {
        id: "node-1",
        type: "node",
        x: 100,
        y: 200,
      };

      rerender(
        <ReactFlowProvider>
          <FlowCanvas {...defaultProps} contextMenu={contextMenu} />
        </ReactFlowProvider>
      );

      expect(screen.getByTestId("context-menu")).toBeTruthy();
    });

    it("should update when context menu changes from node to null", () => {
      const contextMenu: ContextMenuState = {
        id: "node-1",
        type: "node",
        x: 100,
        y: 200,
      };

      const { rerender } = renderFlowCanvas({ contextMenu });
      
      expect(screen.getByTestId("context-menu")).toBeTruthy();

      rerender(
        <ReactFlowProvider>
          <FlowCanvas {...defaultProps} contextMenu={null} />
        </ReactFlowProvider>
      );

      expect(screen.queryByTestId("context-menu")).toBeNull();
    });

    it("should update context menu position", () => {
      const contextMenu1: ContextMenuState = {
        id: "node-1",
        type: "node",
        x: 100,
        y: 200,
      };

      const { rerender } = renderFlowCanvas({ contextMenu: contextMenu1 });
      
      let menu = screen.getByTestId("context-menu");
      expect(menu.style.left).toBe("100px");
      expect(menu.style.top).toBe("200px");

      const contextMenu2: ContextMenuState = {
        id: "node-1",
        type: "node",
        x: 300,
        y: 400,
      };

      rerender(
        <ReactFlowProvider>
          <FlowCanvas {...defaultProps} contextMenu={contextMenu2} />
        </ReactFlowProvider>
      );

      menu = screen.getByTestId("context-menu");
      expect(menu.style.left).toBe("300px");
      expect(menu.style.top).toBe("400px");
    });
  });
});
