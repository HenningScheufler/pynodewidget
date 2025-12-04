import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ComponentFactory } from "@/components/ComponentFactory";
import type { ComponentType } from "@/components/ComponentFactory";

describe("GridLayoutComponent - Basic Tests", () => {
  it("renders a simple 2x2 grid with correct structure", () => {
    const gridComponent: ComponentType = {
      id: "test-grid",
      type: "grid-layout",
      rows: ["100px", "100px"],
      columns: ["1fr", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1 },
          components: [
            {
              id: "text-1",
              type: "text",
              label: "Cell 1-1",
            },
          ],
        },
        {
          coordinates: { row: 1, col: 2 },
          components: [
            {
              id: "text-2",
              type: "text",
              label: "Cell 1-2",
            },
          ],
        },
        {
          coordinates: { row: 2, col: 1 },
          components: [
            {
              id: "text-3",
              type: "text",
              label: "Cell 2-1",
            },
          ],
        },
        {
          coordinates: { row: 2, col: 2 },
          components: [
            {
              id: "text-4",
              type: "text",
              label: "Cell 2-2",
            },
          ],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    // Verify grid container exists
    const gridContainer = container.querySelector(".nested-grid");
    expect(gridContainer).toBeInTheDocument();

    // Verify grid has correct CSS properties
    expect(gridContainer).toHaveStyle({
      display: "grid",
      gridTemplateRows: "100px 100px",
      gridTemplateColumns: "1fr 1fr",
    });

    // Verify all cells are rendered
    expect(screen.getByText("Cell 1-1")).toBeInTheDocument();
    expect(screen.getByText("Cell 1-2")).toBeInTheDocument();
    expect(screen.getByText("Cell 2-1")).toBeInTheDocument();
    expect(screen.getByText("Cell 2-2")).toBeInTheDocument();
  });

  it("applies custom gap to grid", () => {
    const gridComponent: ComponentType = {
      id: "test-grid-gap",
      type: "grid-layout",
      rows: ["100px"],
      columns: ["1fr", "1fr"],
      gap: "20px",
      cells: [
        {
          coordinates: { row: 1, col: 1 },
          components: [{ id: "text-1", type: "text", label: "Cell 1" }],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    const gridContainer = container.querySelector(".nested-grid");
    expect(gridContainer).toHaveStyle({ gap: "20px" });
  });

  it("renders grid with flexible row/column sizes", () => {
    const gridComponent: ComponentType = {
      id: "test-grid-flexible",
      type: "grid-layout",
      rows: ["auto", "1fr", "2fr"],
      columns: ["100px", "1fr", "minmax(200px, 1fr)"],
      cells: [
        {
          coordinates: { row: 1, col: 1 },
          components: [{ id: "text-1", type: "text", label: "Auto row" }],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    const gridContainer = container.querySelector(".nested-grid");
    expect(gridContainer).toHaveStyle({
      gridTemplateRows: "auto 1fr 2fr",
      gridTemplateColumns: "100px 1fr minmax(200px, 1fr)",
    });
  });

  it("renders empty grid without errors", () => {
    const gridComponent: ComponentType = {
      id: "test-grid-empty",
      type: "grid-layout",
      rows: ["100px"],
      columns: ["1fr"],
      cells: [],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    const gridContainer = container.querySelector(".nested-grid");
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer?.children.length).toBe(0);
  });

  it("handles single cell grid", () => {
    const gridComponent: ComponentType = {
      id: "test-grid-single",
      type: "grid-layout",
      rows: ["100px"],
      columns: ["1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1 },
          components: [
            { id: "text-1", type: "text", label: "Single cell" },
          ],
        },
      ],
    };

    render(<ComponentFactory component={gridComponent} nodeId="test-node" />);
    expect(screen.getByText("Single cell")).toBeInTheDocument();
  });
});
