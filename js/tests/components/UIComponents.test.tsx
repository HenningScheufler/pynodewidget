import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ComponentFactory } from "../../src/components/ComponentFactory";
import type { ComponentType } from "../../src/components/ComponentFactory";

describe("UI Components", () => {
  const mockNodeId = "test-node-1";
  const mockOnValueChange = vi.fn();

  describe("HeaderComponent", () => {
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

    it("should render header without icon", () => {
      const component: ComponentType = {
        id: "header-simple",
        type: "header",
        label: "Simple Header",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Simple Header")).toBeTruthy();
    });
  });

  describe("FooterComponent", () => {
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
  });

  describe("ButtonComponent", () => {
    it("should render button component", () => {
      const component: ComponentType = {
        id: "button1",
        type: "button",
        label: "Click Me",
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

    it("should render button with secondary variant", () => {
      const component: ComponentType = {
        id: "button-secondary",
        type: "button",
        label: "Secondary",
        variant: "secondary",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Secondary")).toBeTruthy();
    });
  });

  describe("DividerComponent", () => {
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
  });

  describe("SpacerComponent", () => {
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

  describe("All UI Component Types", () => {
    it("should render all UI component variants", () => {
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
});
