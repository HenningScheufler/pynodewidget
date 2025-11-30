import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ComponentFactory } from "../../src/components/ComponentFactory";
import type { ComponentType } from "../../src/components/ComponentFactory";

describe("Layout Components", () => {
  const mockNodeId = "test-node-1";
  const mockOnValueChange = vi.fn();

  describe("GridLayoutComponent", () => {
    it("should render grid-layout component", () => {
      const component: ComponentType = {
        id: "grid1",
        type: "grid-layout",
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
                label: "Nested Field",
              },
            ],
          },
        ],
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Nested Field")).toBeTruthy();
    });

    it("should render grid-layout with multiple cells", () => {
      const component: ComponentType = {
        id: "grid2",
        type: "grid-layout",
        rows: ["1fr", "1fr"],
        columns: ["1fr", "1fr"],
        gap: "0.5rem",
        cells: [
          {
            id: "cell1",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "header",
                type: "header",
                label: "Cell 1",
              },
            ],
          },
          {
            id: "cell2",
            coordinates: { row: 1, col: 2 },
            components: [
              {
                id: "header2",
                type: "header",
                label: "Cell 2",
              },
            ],
          },
        ],
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Cell 1")).toBeTruthy();
      expect(screen.getByText("Cell 2")).toBeTruthy();
    });

    it("should render nested grid layouts", () => {
      const component: ComponentType = {
        id: "grid-nested",
        type: "grid-layout",
        rows: ["auto"],
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
                        id: "text-nested-1",
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
                        id: "text-nested-2",
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
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Nested 1")).toBeTruthy();
      expect(screen.getByText("Nested 2")).toBeTruthy();
    });

    it("should render grid with empty cells", () => {
      const component: ComponentType = {
        id: "grid-empty",
        type: "grid-layout",
        rows: ["1fr"],
        columns: ["1fr"],
        cells: [],
      };

      const { container } = render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(container.firstChild).toBeTruthy();
    });

    it("should render grid with custom gap", () => {
      const component: ComponentType = {
        id: "grid-gap",
        type: "grid-layout",
        rows: ["1fr", "1fr"],
        columns: ["1fr"],
        gap: "2rem",
        cells: [
          {
            id: "gap-cell-1",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "header-1",
                type: "header",
                label: "Row 1",
              },
            ],
          },
          {
            id: "gap-cell-2",
            coordinates: { row: 2, col: 1 },
            components: [
              {
                id: "header-2",
                type: "header",
                label: "Row 2",
              },
            ],
          },
        ],
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Row 1")).toBeTruthy();
      expect(screen.getByText("Row 2")).toBeTruthy();
    });
  });
});
