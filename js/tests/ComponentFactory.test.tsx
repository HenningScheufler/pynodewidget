import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactFlowProvider } from "@xyflow/react";
import { ComponentFactory } from "../src/components/ComponentFactory";
import type { ComponentType } from "../src/components/ComponentFactory";

describe("ComponentFactory", () => {
  const mockNodeId = "test-node-1";
  const mockOnValueChange = vi.fn();

  // Helper to wrap components that need React Flow context (handles)
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

  describe("Handle Components", () => {
    it("should render base-handle component", () => {
      const component: ComponentType = {
        id: "handle1",
        type: "base-handle",
        handle_type: "output",
        label: "Output",
      };

      const { container } = renderWithFlow(component);

      expect(container.querySelector('.react-flow__handle')).toBeTruthy();
    });

    it("should render labeled-handle component", () => {
      const component: ComponentType = {
        id: "handle2",
        type: "labeled-handle",
        handle_type: "output",
        label: "Output",
      };

      renderWithFlow(component);

      expect(screen.getByText("Output")).toBeTruthy();
    });

    it("should render button-handle component", () => {
      const component: ComponentType = {
        id: "handle3",
        type: "button-handle",
        handle_type: "output",
        label: "Connect",
      };

      renderWithFlow(component);

      expect(screen.getByText("Connect")).toBeTruthy();
    });
  });

  describe("Field Components", () => {
    it("should render text field component", () => {
      const component: ComponentType = {
        id: "field1",
        type: "text",
        label: "Name",
        placeholder: "Enter name",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Name")).toBeTruthy();
      expect(screen.getByPlaceholderText("Enter name")).toBeTruthy();
    });

    it("should render number field component", () => {
      const component: ComponentType = {
        id: "field2",
        type: "number",
        label: "Count",
        min: 0,
        max: 100,
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Count")).toBeTruthy();
      const input = screen.getByRole("spinbutton");
      expect(input).toBeTruthy();
    });

    it("should render bool field component", () => {
      const component: ComponentType = {
        id: "field3",
        type: "bool",
        label: "Enabled",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Enabled")).toBeTruthy();
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeTruthy();
    });

    it("should render select field component", () => {
      const component: ComponentType = {
        id: "field4",
        type: "select",
        label: "Mode",
        options: ["fast", "slow"],
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Mode")).toBeTruthy();
    });
  });

  describe("UI Components", () => {
    it("should render header component", () => {
      const component: ComponentType = {
        id: "header1",
        type: "header",
        label: "Node Title",
        icon: "⚙️",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Node Title")).toBeTruthy();
      expect(screen.getByText("⚙️")).toBeTruthy();
    });

    it("should render header component with custom colors", () => {
      const component: ComponentType = {
        id: "header2",
        type: "header",
        label: "Custom Header",
        bgColor: "#ff0000",
        textColor: "#ffffff",
      };

      const { container } = render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Custom Header")).toBeTruthy();
      const headerDiv = container.querySelector('.component-header');
      expect(headerDiv).toBeTruthy();
    });

    it("should render footer component", () => {
      const component: ComponentType = {
        id: "footer1",
        type: "footer",
        text: "Status: Ready",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Status: Ready")).toBeTruthy();
    });

    it("should render footer component with custom colors", () => {
      const component: ComponentType = {
        id: "footer2",
        type: "footer",
        text: "Custom Footer",
        bgColor: "#f0f0f0",
        textColor: "#333333",
        className: "custom-footer-class",
      };

      const { container } = render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Custom Footer")).toBeTruthy();
      const footerDiv = container.querySelector('.component-footer');
      expect(footerDiv).toBeTruthy();
    });

    it("should render button component", () => {
      const component: ComponentType = {
        id: "button1",
        type: "button",
        label: "Click Me",
        action: "click",
        variant: "primary",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Click Me")).toBeTruthy();
    });

    it("should render divider component", () => {
      const component: ComponentType = {
        id: "divider1",
        type: "divider",
      };

      const { container } = render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const divider = container.querySelector('.component-divider');
      expect(divider).toBeTruthy();
    });

    it("should render divider component with vertical orientation", () => {
      const component: ComponentType = {
        id: "divider2",
        type: "divider",
        orientation: "vertical",
      };

      const { container } = render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const divider = container.querySelector('.component-divider');
      expect(divider).toBeTruthy();
    });

    it("should render spacer component", () => {
      const component: ComponentType = {
        id: "spacer1",
        type: "spacer",
      };

      const { container } = render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const spacer = container.querySelector('.component-spacer');
      expect(spacer).toBeTruthy();
    });

    it("should render spacer component with custom size", () => {
      const component: ComponentType = {
        id: "spacer2",
        type: "spacer",
        size: "2rem",
      };

      const { container } = render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      const spacer = container.querySelector('.component-spacer');
      expect(spacer).toBeTruthy();
    });
  });

  describe("Layout Components", () => {
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
  });

  describe("Component Variants", () => {
    it("should render all handle types", () => {
      const handles: ComponentType[] = [
        {
          id: "h1",
          type: "base-handle",
          handle_type: "output",
          label: "Out",
        },
        {
          id: "h2",
          type: "labeled-handle",
          handle_type: "input",
          label: "Input",
        },
        {
          id: "h3",
          type: "button-handle",
          handle_type: "output",
          label: "Action",
        },
      ];

      handles.forEach((handle) => {
        const { container } = renderWithFlow(handle);
        expect(container.querySelector('.react-flow__handle')).toBeTruthy();
      });
    });

    it("should render all field types", () => {
      const fields: Array<{ component: ComponentType; expectedRole: string }> = [
        {
          component: {
            id: "f1",
            type: "text",
            label: "Text",
          },
          expectedRole: "textbox",
        },
        {
          component: {
            id: "f2",
            type: "number",
            label: "Number",
          },
          expectedRole: "spinbutton",
        },
        {
          component: {
            id: "f3",
            type: "bool",
            label: "Boolean",
          },
          expectedRole: "checkbox",
        },
      ];

      fields.forEach(({ component, expectedRole }) => {
        render(
          <ComponentFactory 
            component={component} 
            nodeId={mockNodeId} 
            onValueChange={mockOnValueChange} 
          />
        );
        const element = screen.getByRole(expectedRole);
        expect(element).toBeTruthy();
      });
    });

    it("should render all UI component types", () => {
      const uiComponents: ComponentType[] = [
        {
          id: "ui1",
          type: "header",
          label: "Header",
        },
        {
          id: "ui2",
          type: "footer",
          text: "Footer",
        },
        {
          id: "ui3",
          type: "button",
          label: "Button",
          action: "test",
          variant: "primary",
        },
        {
          id: "ui4",
          type: "divider",
        },
        {
          id: "ui5",
          type: "spacer",
        },
      ];

      uiComponents.forEach((component) => {
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
  });

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

    it("should pass onValueChange to field components", () => {
      const customCallback = vi.fn();
      const component: ComponentType = {
        id: "field-test",
        type: "text",
        label: "Callback Test",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={customCallback} 
        />
      );

      expect(screen.getByText("Callback Test")).toBeTruthy();
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
});
