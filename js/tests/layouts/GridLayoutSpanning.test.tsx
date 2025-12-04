import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ComponentFactory } from "@/components/ComponentFactory";
import type { ComponentType } from "@/components/ComponentFactory";

describe("GridLayoutComponent - Spanning Tests", () => {
  it("renders cell with column span correctly", () => {
    const gridComponent: ComponentType = {
      id: "test-grid-colspan",
      type: "grid-layout",
      rows: ["100px", "100px"],
      columns: ["1fr", "1fr", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1, col_span: 3 },
          components: [
            {
              id: "header",
              type: "header",
              label: "Spanning Header",
            },
          ],
        },
        {
          coordinates: { row: 2, col: 1 },
          components: [{ id: "text-1", type: "text", label: "Cell 1" }],
        },
        {
          coordinates: { row: 2, col: 2 },
          components: [{ id: "text-2", type: "text", label: "Cell 2" }],
        },
        {
          coordinates: { row: 2, col: 3 },
          components: [{ id: "text-3", type: "text", label: "Cell 3" }],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    // Verify spanning cell exists
    const cells = container.querySelectorAll(".nested-grid-cell");
    expect(cells.length).toBe(4);

    // Get the first cell (spanning header)
    const spanningCell = cells[0];
    expect(spanningCell).toHaveStyle({
      gridColumn: "1 / span 3",
      gridRow: "1 / span 1",
    });

    // Verify header content
    expect(screen.getByText("Spanning Header")).toBeInTheDocument();
  });

  it("renders cell with row span correctly", () => {
    const gridComponent: ComponentType = {
      id: "test-grid-rowspan",
      type: "grid-layout",
      rows: ["100px", "100px", "100px"],
      columns: ["200px", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1, row_span: 3 },
          components: [
            {
              id: "sidebar",
              type: "text",
              label: "Sidebar",
            },
          ],
        },
        {
          coordinates: { row: 1, col: 2 },
          components: [{ id: "text-1", type: "text", label: "Content 1" }],
        },
        {
          coordinates: { row: 2, col: 2 },
          components: [{ id: "text-2", type: "text", label: "Content 2" }],
        },
        {
          coordinates: { row: 3, col: 2 },
          components: [{ id: "text-3", type: "text", label: "Content 3" }],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    const cells = container.querySelectorAll(".nested-grid-cell");
    const spanningCell = cells[0];

    expect(spanningCell).toHaveStyle({
      gridRow: "1 / span 3",
      gridColumn: "1 / span 1",
    });

    expect(screen.getByText("Sidebar")).toBeInTheDocument();
  });

  it("renders cell with both row and column span", () => {
    const gridComponent: ComponentType = {
      id: "test-grid-both-span",
      type: "grid-layout",
      rows: ["100px", "100px", "100px"],
      columns: ["1fr", "1fr", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1, row_span: 2, col_span: 2 },
          components: [
            {
              id: "featured",
              type: "text",
              label: "Featured Content",
            },
          ],
        },
        {
          coordinates: { row: 1, col: 3 },
          components: [{ id: "text-1", type: "text", label: "Side 1" }],
        },
        {
          coordinates: { row: 2, col: 3 },
          components: [{ id: "text-2", type: "text", label: "Side 2" }],
        },
        {
          coordinates: { row: 3, col: 1 },
          components: [{ id: "text-3", type: "text", label: "Bottom 1" }],
        },
        {
          coordinates: { row: 3, col: 2 },
          components: [{ id: "text-4", type: "text", label: "Bottom 2" }],
        },
        {
          coordinates: { row: 3, col: 3 },
          components: [{ id: "text-5", type: "text", label: "Bottom 3" }],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    const cells = container.querySelectorAll(".nested-grid-cell");
    const spanningCell = cells[0];

    expect(spanningCell).toHaveStyle({
      gridRow: "1 / span 2",
      gridColumn: "1 / span 2",
    });

    expect(screen.getByText("Featured Content")).toBeInTheDocument();
  });

  it("handles partial column spanning", () => {
    const gridComponent: ComponentType = {
      id: "test-grid-partial-span",
      type: "grid-layout",
      rows: ["100px"],
      columns: ["1fr", "1fr", "1fr", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1, col_span: 2 },
          components: [{ id: "text-1", type: "text", label: "Span 2" }],
        },
        {
          coordinates: { row: 1, col: 3, col_span: 2 },
          components: [{ id: "text-2", type: "text", label: "Span 2" }],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    const cells = container.querySelectorAll(".nested-grid-cell");
    
    expect(cells[0]).toHaveStyle({ gridColumn: "1 / span 2" });
    expect(cells[1]).toHaveStyle({ gridColumn: "3 / span 2" });
  });

  it("handles non-spanning cells alongside spanning cells", () => {
    const gridComponent: ComponentType = {
      id: "test-grid-mixed",
      type: "grid-layout",
      rows: ["100px", "100px"],
      columns: ["1fr", "1fr", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1, col_span: 2 },
          components: [{ id: "text-1", type: "text", label: "Spanning" }],
        },
        {
          coordinates: { row: 1, col: 3 },
          components: [{ id: "text-2", type: "text", label: "Normal" }],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    const cells = container.querySelectorAll(".nested-grid-cell");
    
    // Spanning cell
    expect(cells[0]).toHaveStyle({
      gridColumn: "1 / span 2",
      gridRow: "1 / span 1",
    });

    // Normal cell (no explicit span, defaults to 1)
    expect(cells[1]).toHaveStyle({
      gridColumn: "3 / span 1",
      gridRow: "1 / span 1",
    });
  });

  it("renders header component spanning full width", () => {
    const gridComponent: ComponentType = {
      id: "test-header-body",
      type: "grid-layout",
      rows: ["60px", "1fr"],
      columns: ["1fr", "1fr", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1, col_span: 3 },
          components: [
            {
              id: "header",
              type: "header",
              label: "Full Width Header",
              icon: "📊",
              bgColor: "#e3f2fd",
            },
          ],
        },
        {
          coordinates: { row: 2, col: 1 },
          components: [{ id: "text-1", type: "text", label: "Column 1" }],
        },
        {
          coordinates: { row: 2, col: 2 },
          components: [{ id: "text-2", type: "text", label: "Column 2" }],
        },
        {
          coordinates: { row: 2, col: 3 },
          components: [{ id: "text-3", type: "text", label: "Column 3" }],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    // Verify header component exists and has correct styling
    const headerComponent = container.querySelector(".component-header");
    expect(headerComponent).toBeInTheDocument();
    expect(headerComponent).toHaveStyle({
      width: "100%",
      backgroundColor: "#e3f2fd",
    });

    // Verify header cell spans correctly
    const cells = container.querySelectorAll(".nested-grid-cell");
    expect(cells[0]).toHaveStyle({ gridColumn: "1 / span 3" });

    // Verify all content is rendered
    expect(screen.getByText("Full Width Header")).toBeInTheDocument();
    expect(screen.getByText("📊")).toBeInTheDocument();
    expect(screen.getByText("Column 1")).toBeInTheDocument();
  });
});
