import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ComponentFactory } from "@/components/ComponentFactory";
import type { ComponentType } from "@/components/ComponentFactory";

describe("GridLayoutComponent - Complex Patterns", () => {
  it("renders header with multi-column body pattern", () => {
    const gridComponent: ComponentType = {
      id: "header-multi-column",
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
              label: "Dashboard Header",
              bgColor: "#e3f2fd",
            },
          ],
        },
        {
          coordinates: { row: 2, col: 1 },
          components: [
            { id: "col1", type: "text", label: "Column 1" },
          ],
        },
        {
          coordinates: { row: 2, col: 2 },
          components: [
            { id: "col2", type: "text", label: "Column 2" },
          ],
        },
        {
          coordinates: { row: 2, col: 3 },
          components: [
            { id: "col3", type: "text", label: "Column 3" },
          ],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    // Verify header spans all columns
    const cells = container.querySelectorAll(".nested-grid-cell");
    expect(cells[0]).toHaveStyle({ gridColumn: "1 / span 3" });

    // Verify all content
    expect(screen.getByText("Dashboard Header")).toBeInTheDocument();
    expect(screen.getByText("Column 1")).toBeInTheDocument();
    expect(screen.getByText("Column 2")).toBeInTheDocument();
    expect(screen.getByText("Column 3")).toBeInTheDocument();
  });

  it("renders sidebar with header-body pattern", () => {
    const gridComponent: ComponentType = {
      id: "sidebar-header-body",
      type: "grid-layout",
      rows: ["60px", "1fr"],
      columns: ["250px", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1, row_span: 2 },
          components: [
            { id: "sidebar", type: "text", label: "Sidebar" },
          ],
        },
        {
          coordinates: { row: 1, col: 2 },
          components: [
            { id: "header", type: "header", label: "Content Header" },
          ],
        },
        {
          coordinates: { row: 2, col: 2 },
          components: [
            { id: "body", type: "text", label: "Content Body" },
          ],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    // Verify sidebar spans rows
    const cells = container.querySelectorAll(".nested-grid-cell");
    expect(cells[0]).toHaveStyle({ gridRow: "1 / span 2" });

    expect(screen.getByText("Sidebar")).toBeInTheDocument();
    expect(screen.getByText("Content Header")).toBeInTheDocument();
    expect(screen.getByText("Content Body")).toBeInTheDocument();
  });

  it("renders dashboard with featured content pattern", () => {
    const gridComponent: ComponentType = {
      id: "dashboard-featured",
      type: "grid-layout",
      rows: ["60px", "200px", "1fr"],
      columns: ["1fr", "1fr", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1, col_span: 3 },
          components: [
            { id: "header", type: "header", label: "Dashboard" },
          ],
        },
        {
          coordinates: { row: 2, col: 1, col_span: 2 },
          components: [
            { id: "featured", type: "text", label: "Featured Content" },
          ],
        },
        {
          coordinates: { row: 2, col: 3 },
          components: [
            { id: "stats", type: "text", label: "Stats" },
          ],
        },
        {
          coordinates: { row: 3, col: 1 },
          components: [
            { id: "widget1", type: "text", label: "Widget 1" },
          ],
        },
        {
          coordinates: { row: 3, col: 2 },
          components: [
            { id: "widget2", type: "text", label: "Widget 2" },
          ],
        },
        {
          coordinates: { row: 3, col: 3 },
          components: [
            { id: "widget3", type: "text", label: "Widget 3" },
          ],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    const cells = container.querySelectorAll(".nested-grid-cell");
    
    // Header spans all 3 columns
    expect(cells[0]).toHaveStyle({ gridColumn: "1 / span 3" });
    
    // Featured content spans 2 columns
    expect(cells[1]).toHaveStyle({ gridColumn: "1 / span 2" });

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Featured Content")).toBeInTheDocument();
    expect(screen.getByText("Stats")).toBeInTheDocument();
    expect(screen.getByText("Widget 1")).toBeInTheDocument();
  });

  it("renders asymmetric grid pattern", () => {
    const gridComponent: ComponentType = {
      id: "asymmetric",
      type: "grid-layout",
      rows: ["100px", "100px", "100px"],
      columns: ["1fr", "1fr", "1fr"],
      cells: [
        {
          coordinates: { row: 1, col: 1, row_span: 2, col_span: 2 },
          components: [
            { id: "large", type: "text", label: "Large Area" },
          ],
        },
        {
          coordinates: { row: 1, col: 3 },
          components: [
            { id: "small1", type: "text", label: "Small 1" },
          ],
        },
        {
          coordinates: { row: 2, col: 3 },
          components: [
            { id: "small2", type: "text", label: "Small 2" },
          ],
        },
        {
          coordinates: { row: 3, col: 1 },
          components: [
            { id: "bottom1", type: "text", label: "Bottom 1" },
          ],
        },
        {
          coordinates: { row: 3, col: 2 },
          components: [
            { id: "bottom2", type: "text", label: "Bottom 2" },
          ],
        },
        {
          coordinates: { row: 3, col: 3 },
          components: [
            { id: "bottom3", type: "text", label: "Bottom 3" },
          ],
        },
      ],
    };

    const { container } = render(
      <ComponentFactory component={gridComponent} nodeId="test-node" />
    );

    const cells = container.querySelectorAll(".nested-grid-cell");
    
    // Large area spans 2x2
    expect(cells[0]).toHaveStyle({
      gridRow: "1 / span 2",
      gridColumn: "1 / span 2",
    });

    expect(screen.getByText("Large Area")).toBeInTheDocument();
    expect(screen.getByText("Small 1")).toBeInTheDocument();
    expect(screen.getByText("Bottom 3")).toBeInTheDocument();
  });
});
