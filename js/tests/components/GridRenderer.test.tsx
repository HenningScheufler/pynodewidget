import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NodeGridRenderer } from "../../src/components/GridRenderer";
import type { NodeGrid } from "../../src/types/schema";

describe("GridRenderer", () => {
  const mockNodeId = "test-node-1";
  const mockOnValueChange = vi.fn();

  describe("NodeGridRenderer - Basic Rendering", () => {
    it("should render a basic grid with single cell", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "text1",
                type: "text",
                label: "Test Field",
              },
            ],
          },
        ],
      };

      render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Test Field")).toBeTruthy();
    });

    it("should render empty grid without cells", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const gridElement = container.querySelector('.node-grid');
      expect(gridElement).toBeTruthy();
      expect(gridElement!.children.length).toBe(0);
    });

    it("should render multiple cells in grid", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr", "1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "text1",
                type: "text",
                label: "Field 1",
              },
            ],
          },
          {
            id: "cell2",
            coordinates: { row: 1, col: 2 },
            components: [
              {
                id: "text2",
                type: "text",
                label: "Field 2",
              },
            ],
          },
        ],
      };

      render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Field 1")).toBeTruthy();
      expect(screen.getByText("Field 2")).toBeTruthy();
    });
  });

  describe("NodeGridRenderer - CSS Grid Styles", () => {
    it("should apply correct CSS grid template rows", () => {
      const grid: NodeGrid = {
        rows: ["auto", "1fr", "auto"],
        columns: ["1fr"],
        cells: [],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const gridElement = container.querySelector('.node-grid');
      expect(gridElement!.style.gridTemplateRows).toBe("auto 1fr auto");
    });

    it("should apply correct CSS grid template columns", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["200px", "1fr", "200px"],
        cells: [],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const gridElement = container.querySelector('.node-grid');
      expect(gridElement!.style.gridTemplateColumns).toBe("200px 1fr 200px");
    });

    it("should apply custom gap", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        gap: "16px",
        cells: [],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const gridElement = container.querySelector('.node-grid');
      expect(gridElement!.style.gap).toBe("16px");
    });

    it("should use default gap when not specified", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const gridElement = container.querySelector('.node-grid');
      expect(gridElement!.style.gap).toBe("8px");
    });

    it("should apply full width and height", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const gridElement = container.querySelector('.node-grid');
      expect(gridElement!.style.width).toBe("100%");
      expect(gridElement!.style.height).toBe("100%");
      expect(gridElement!.style.display).toBe("grid");
    });
  });

  describe("NodeGridRenderer - Cell Positioning", () => {
    it("should position cell without spans", () => {
      const grid: NodeGrid = {
        rows: ["1fr", "1fr"],
        columns: ["1fr", "1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 2, col: 2 },
            components: [],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellElement = container.querySelector('.grid-cell');
      expect(cellElement!.style.gridRow).toBe("2 / span 1");
      expect(cellElement!.style.gridColumn).toBe("2 / span 1");
    });

    it("should position cell with row span", () => {
      const grid: NodeGrid = {
        rows: ["1fr", "1fr", "1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1, row_span: 2 },
            components: [
              {
                id: "header",
                type: "header",
                label: "Spanning Cell",
              },
            ],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellElement = container.querySelector('.grid-cell');
      expect(cellElement!.style.gridRow).toBe("1 / span 2");
      expect(cellElement!.style.gridColumn).toBe("1 / span 1");
    });

    it("should position cell with column span", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr", "1fr", "1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1, col_span: 3 },
            components: [
              {
                id: "header",
                type: "header",
                label: "Full Width",
              },
            ],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellElement = container.querySelector('.grid-cell');
      expect(cellElement!.style.gridRow).toBe("1 / span 1");
      expect(cellElement!.style.gridColumn).toBe("1 / span 3");
    });

    it("should position cell with both row and column spans", () => {
      const grid: NodeGrid = {
        rows: ["1fr", "1fr"],
        columns: ["1fr", "1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1, row_span: 2, col_span: 2 },
            components: [
              {
                id: "header",
                type: "header",
                label: "Full Grid",
              },
            ],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellElement = container.querySelector('.grid-cell');
      expect(cellElement!.style.gridRow).toBe("1 / span 2");
      expect(cellElement!.style.gridColumn).toBe("1 / span 2");
    });
  });

  describe("GridCellRenderer - Flex Layout", () => {
    it("should render cell with default flex layout", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "text1",
                type: "text",
                label: "Item 1",
              },
              {
                id: "text2",
                type: "text",
                label: "Item 2",
              },
            ],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellContent = container.querySelector('.grid-cell-content');
      expect(cellContent!.style.display).toBe("flex");
      expect(cellContent!.style.flexDirection).toBe("column");
      expect(cellContent!.style.gap).toBe("4px");
    });

    it("should render cell with custom flex column layout", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            layout: {
              type: "flex",
              direction: "column",
              align: "center",
              justify: "center",
              gap: "8px",
            },
            components: [],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellContent = container.querySelector('.grid-cell-content');
      expect(cellContent!.style.display).toBe("flex");
      expect(cellContent!.style.flexDirection).toBe("column");
      expect(cellContent!.style.alignItems).toBe("center");
      expect(cellContent!.style.justifyContent).toBe("center");
      expect(cellContent!.style.gap).toBe("8px");
    });

    it("should render cell with horizontal flex layout", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            layout: {
              type: "flex",
              direction: "row",
              align: "center",
              justify: "space-between",
              gap: "12px",
            },
            components: [],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellContent = container.querySelector('.grid-cell-content');
      expect(cellContent!.style.display).toBe("flex");
      expect(cellContent!.style.flexDirection).toBe("row");
      expect(cellContent!.style.alignItems).toBe("center");
      expect(cellContent!.style.justifyContent).toBe("space-between");
      expect(cellContent!.style.gap).toBe("12px");
    });

    it("should use default values for missing flex properties", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            layout: {
              type: "flex",
            },
            components: [],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellContent = container.querySelector('.grid-cell-content');
      expect(cellContent!.style.display).toBe("flex");
      expect(cellContent!.style.flexDirection).toBe("column");
      expect(cellContent!.style.alignItems).toBe("start");
      expect(cellContent!.style.justifyContent).toBe("start");
      expect(cellContent!.style.gap).toBe("4px");
    });
  });

  describe("GridCellRenderer - Stack Layout", () => {
    it("should render cell with stack layout", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            layout: {
              type: "stack",
              gap: "12px",
            },
            components: [],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellContent = container.querySelector('.grid-cell-content');
      expect(cellContent!.style.display).toBe("flex");
      expect(cellContent!.style.flexDirection).toBe("column");
      expect(cellContent!.style.gap).toBe("12px");
    });

    it("should use default gap for stack layout", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            layout: {
              type: "stack",
            },
            components: [],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellContent = container.querySelector('.grid-cell-content');
      expect(cellContent!.style.gap).toBe("4px");
    });
  });

  describe("GridCellRenderer - Grid Layout", () => {
    it("should render cell with grid layout", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            layout: {
              type: "grid",
              gap: "16px",
              align: "center",
              justify: "start",
            },
            components: [],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellContent = container.querySelector('.grid-cell-content');
      expect(cellContent!.style.display).toBe("grid");
      expect(cellContent!.style.gap).toBe("16px");
      expect(cellContent!.style.alignItems).toBe("center");
      expect(cellContent!.style.justifyContent).toBe("start");
    });

    it("should use default values for grid layout", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            layout: {
              type: "grid",
            },
            components: [],
          },
        ],
      };

      const { container } = render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const cellContent = container.querySelector('.grid-cell-content');
      expect(cellContent!.style.display).toBe("grid");
      expect(cellContent!.style.gap).toBe("4px");
      expect(cellContent!.style.alignItems).toBe("start");
      expect(cellContent!.style.justifyContent).toBe("start");
    });
  });

  describe("GridCellRenderer - Component Integration", () => {
    it("should render multiple components in cell", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "header",
                type: "header",
                label: "Header",
              },
              {
                id: "text",
                type: "text",
                label: "Text Field",
              },
              {
                id: "number",
                type: "number",
                label: "Number Field",
              },
            ],
          },
        ],
      };

      render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Header")).toBeTruthy();
      expect(screen.getByText("Text Field")).toBeTruthy();
      expect(screen.getByText("Number Field")).toBeTruthy();
    });

    it("should pass nodeId to components", () => {
      const customNodeId = "custom-node-123";
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "field1",
                type: "text",
                label: "Test",
              },
            ],
          },
        ],
      };

      render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={customNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Test")).toBeTruthy();
    });

    it("should pass onValueChange to components", () => {
      const customCallback = vi.fn();
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "field1",
                type: "text",
                label: "Test Field",
              },
            ],
          },
        ],
      };

      render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={customCallback} 
        />
      );

      expect(screen.getByText("Test Field")).toBeTruthy();
      // The callback would be invoked on user interaction
    });
  });

  describe("Complex Grid Scenarios", () => {
    it("should render complex multi-row multi-column grid", () => {
      const grid: NodeGrid = {
        rows: ["auto", "1fr", "auto"],
        columns: ["200px", "1fr", "200px"],
        gap: "1rem",
        cells: [
          {
            id: "header-cell",
            coordinates: { row: 1, col: 1, col_span: 3 },
            components: [
              {
                id: "header",
                type: "header",
                label: "Full Width Header",
              },
            ],
          },
          {
            id: "sidebar-left",
            coordinates: { row: 2, col: 1 },
            components: [
              {
                id: "text1",
                type: "text",
                label: "Left",
              },
            ],
          },
          {
            id: "content",
            coordinates: { row: 2, col: 2 },
            components: [
              {
                id: "text2",
                type: "text",
                label: "Content",
              },
            ],
          },
          {
            id: "sidebar-right",
            coordinates: { row: 2, col: 3 },
            components: [
              {
                id: "text3",
                type: "text",
                label: "Right",
              },
            ],
          },
          {
            id: "footer-cell",
            coordinates: { row: 3, col: 1, col_span: 3 },
            components: [
              {
                id: "footer",
                type: "footer",
                text: "Full Width Footer",
              },
            ],
          },
        ],
      };

      render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Full Width Header")).toBeTruthy();
      expect(screen.getByText("Left")).toBeTruthy();
      expect(screen.getByText("Content")).toBeTruthy();
      expect(screen.getByText("Right")).toBeTruthy();
      expect(screen.getByText("Full Width Footer")).toBeTruthy();
    });

    it("should render nested grid layouts", () => {
      const grid: NodeGrid = {
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [
          {
            id: "outer-cell",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "inner-grid",
                type: "grid-layout",
                rows: ["1fr"],
                columns: ["1fr", "1fr"],
                cells: [
                  {
                    id: "inner-cell-1",
                    coordinates: { row: 1, col: 1 },
                    components: [
                      {
                        id: "nested-text-1",
                        type: "text",
                        label: "Nested 1",
                      },
                    ],
                  },
                  {
                    id: "inner-cell-2",
                    coordinates: { row: 1, col: 2 },
                    components: [
                      {
                        id: "nested-text-2",
                        type: "text",
                        label: "Nested 2",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };

      render(
        <NodeGridRenderer 
          grid={grid} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Nested 1")).toBeTruthy();
      expect(screen.getByText("Nested 2")).toBeTruthy();
    });
  });
});
