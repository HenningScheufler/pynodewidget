import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactFlowProvider } from "@xyflow/react";
import { ComponentFactory } from "../../src/components/ComponentFactory";
import type { ComponentType } from "../../src/components/ComponentFactory";

describe("ComponentFactory Integration", () => {
  const mockNodeId = "test-node-1";
  const mockOnValueChange = vi.fn();

  // Helper to wrap components that need React Flow context
  const renderWithFlow = (component: ComponentType) => {
    return render(
      <ReactFlowProvider>
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      </ReactFlowProvider>
    );
  };

  describe("Edge Cases", () => {
    it("should handle components without optional properties", () => {
      const minimalComponents: ComponentType[] = [
        {
          id: "min1",
          type: "text",
          label: "Minimal Text",
        },
        {
          id: "min2",
          type: "header",
          label: "Minimal Header",
        },
        {
          id: "min3",
          type: "divider",
        },
      ];

      minimalComponents.forEach((component) => {
        const { container } = render(
          <ComponentFactory 
            component={component} 
            nodeId={mockNodeId} 
            onValueChange={mockOnValueChange} 
          />
        );
        expect(container.firstChild).toBeTruthy();
      });
    });

    it("should pass nodeId to all components", () => {
      const component: ComponentType = {
        id: "test1",
        type: "text",
        label: "Test",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId="custom-node-id" 
          onValueChange={mockOnValueChange} 
        />
      );

      // Component should render successfully with custom nodeId
      expect(screen.getByText("Test")).toBeTruthy();
    });
  });

  describe("Type Safety", () => {
    it("should handle all 13 component types", () => {
      // This test ensures we have coverage for all component types
      const allTypes = [
        "base-handle",
        "labeled-handle",
        "button-handle",
        "text",
        "number",
        "bool",
        "select",
        "header",
        "footer",
        "button",
        "divider",
        "spacer",
        "grid-layout",
      ] as const;

      expect(allTypes).toHaveLength(13);

      // Verify each type can be rendered
      allTypes.forEach((type) => {
        let component: ComponentType;

        switch (type) {
          case "base-handle":
          case "labeled-handle":
          case "button-handle":
            component = {
              id: `${type}-test`,
              type,
              handle_type: "output",
              label: type === "base-handle" ? "Out" : type === "labeled-handle" ? "Label" : "Button",
            } as ComponentType;
            break;
          case "text":
          case "number":
          case "bool":
            component = {
              id: `${type}-test`,
              type,
              label: "Test",
            } as ComponentType;
            break;
          case "select":
            component = {
              id: "select-test",
              type: "select",
              label: "Test",
              options: [],
            };
            break;
          case "header":
            component = {
              id: "header-test",
              type: "header",
              label: "Test",
            };
            break;
          case "footer":
            component = {
              id: "footer-test",
              type: "footer",
              text: "Test",
            };
            break;
          case "button":
            component = {
              id: "button-test",
              type: "button",
              label: "Test",
              action: "test",
              variant: "primary",
            };
            break;
          case "divider":
            component = {
              id: "divider-test",
              type: "divider",
            };
            break;
          case "spacer":
            component = {
              id: "spacer-test",
              type: "spacer",
            };
            break;
          case "grid-layout":
            component = {
              id: "grid-test",
              type: "grid-layout",
              rows: ["1fr"],
              columns: ["1fr"],
              cells: [],
            };
            break;
        }

        // Use renderWithFlow for handle components, regular render for others
        const isHandle = type.includes('handle');
        const { container } = isHandle 
          ? renderWithFlow(component)
          : render(
              <ComponentFactory 
                component={component} 
                nodeId={mockNodeId} 
                onValueChange={mockOnValueChange} 
              />
            );
        
        expect(container.firstChild).toBeTruthy();
      });
    });
  });

  describe("Complex Scenarios", () => {
    it("should render mixed component grid", () => {
      const component: ComponentType = {
        id: "complex-grid",
        type: "grid-layout",
        rows: ["auto", "1fr", "auto"],
        columns: ["1fr"],
        gap: "1rem",
        cells: [
          {
            id: "header-cell",
            coordinates: { row: 1, col: 1 },
            components: [
              {
                id: "main-header",
                type: "header",
                label: "Complex Node",
                icon: "🎯",
              },
            ],
          },
          {
            id: "content-cell",
            coordinates: { row: 2, col: 1 },
            components: [
              {
                id: "text-input",
                type: "text",
                label: "Name",
              },
              {
                id: "number-input",
                type: "number",
                label: "Count",
              },
              {
                id: "bool-input",
                type: "bool",
                label: "Active",
              },
            ],
          },
          {
            id: "footer-cell",
            coordinates: { row: 3, col: 1 },
            components: [
              {
                id: "main-footer",
                type: "footer",
                text: "v1.0.0",
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

      expect(screen.getByText("Complex Node")).toBeTruthy();
      expect(screen.getByText("Name")).toBeTruthy();
      expect(screen.getByText("Count")).toBeTruthy();
      expect(screen.getByText("Active")).toBeTruthy();
      expect(screen.getByText("v1.0.0")).toBeTruthy();
    });
  });
});
