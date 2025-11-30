import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactFlowProvider } from "@xyflow/react";
import { ComponentFactory } from "../../src/components/ComponentFactory";
import type { ComponentType } from "../../src/components/ComponentFactory";

describe("Handle Components", () => {
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

  describe("BaseHandle", () => {
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

    it("should render base-handle with input type", () => {
      const component: ComponentType = {
        id: "handle-input",
        type: "base-handle",
        handle_type: "input",
        label: "Input",
      };

      const { container } = renderWithFlow(component);

      expect(container.querySelector('.react-flow__handle')).toBeTruthy();
    });
  });

  describe("LabeledHandle", () => {
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

    it("should render labeled-handle with custom label", () => {
      const component: ComponentType = {
        id: "handle-labeled",
        type: "labeled-handle",
        handle_type: "input",
        label: "Custom Input Label",
      };

      renderWithFlow(component);

      expect(screen.getByText("Custom Input Label")).toBeTruthy();
    });
  });

  describe("ButtonHandle", () => {
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

    it("should render button-handle with custom label", () => {
      const component: ComponentType = {
        id: "handle-button",
        type: "button-handle",
        handle_type: "input",
        label: "Receive Data",
      };

      renderWithFlow(component);

      expect(screen.getByText("Receive Data")).toBeTruthy();
    });
  });

  describe("All Handle Types", () => {
    it("should render all handle variants", () => {
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
  });
});
