import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ComponentFactory } from "../../src/components/ComponentFactory";
import type { ComponentType } from "../../src/components/ComponentFactory";

describe("Field Components", () => {
  const mockNodeId = "test-node-1";
  const mockOnValueChange = vi.fn();

  describe("TextField", () => {
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

    it("should render text field without placeholder", () => {
      const component: ComponentType = {
        id: "text-minimal",
        type: "text",
        label: "Simple Text",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Simple Text")).toBeTruthy();
    });
  });

  describe("NumberField", () => {
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

    it("should render number field without min/max", () => {
      const component: ComponentType = {
        id: "number-simple",
        type: "number",
        label: "Value",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Value")).toBeTruthy();
      expect(screen.getByRole("spinbutton")).toBeTruthy();
    });
  });

  describe("BoolField", () => {
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

    it("should render bool field with different label", () => {
      const component: ComponentType = {
        id: "bool-toggle",
        type: "bool",
        label: "Active",
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Active")).toBeTruthy();
      expect(screen.getByRole("checkbox")).toBeTruthy();
    });
  });

  describe("SelectField", () => {
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

    it("should render select field with multiple options", () => {
      const component: ComponentType = {
        id: "select-multi",
        type: "select",
        label: "Algorithm",
        options: ["quick", "merge", "bubble", "heap"],
      };

      render(
        <ComponentFactory 
          component={component} 
          nodeId={mockNodeId} 
          onValueChange={mockOnValueChange} 
        />
      );

      expect(screen.getByText("Algorithm")).toBeTruthy();
    });
  });

  describe("All Field Types", () => {
    it("should render all field variants", () => {
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
  });

  describe("Value Change Callback", () => {
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
});
