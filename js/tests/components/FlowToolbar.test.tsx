import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FlowToolbar } from "../../src/components/FlowToolbar";

describe("FlowToolbar", () => {
  const mockOnExport = vi.fn();
  const mockOnLayoutVertical = vi.fn();
  const mockOnLayoutHorizontal = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Rendering", () => {
    it("should render all three buttons", () => {
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      expect(screen.getByText("Export to JSON")).toBeTruthy();
      expect(screen.getByText("Layout Vertical")).toBeTruthy();
      expect(screen.getByText("Layout Horizontal")).toBeTruthy();
    });

    it("should render buttons in a flex container", () => {
      const { container } = render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const flexContainer = container.querySelector('.flex');
      expect(flexContainer).toBeTruthy();
    });

    it("should render export button with Download icon", () => {
      const { container } = render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const exportButton = screen.getByText("Export to JSON").closest('button');
      expect(exportButton).toBeTruthy();
      
      // Check for icon by looking for svg in button
      const icon = exportButton!.querySelector('svg');
      expect(icon).toBeTruthy();
    });

    it("should render vertical layout button with icon", () => {
      const { container } = render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const verticalButton = screen.getByText("Layout Vertical").closest('button');
      expect(verticalButton).toBeTruthy();
      
      const icon = verticalButton!.querySelector('svg');
      expect(icon).toBeTruthy();
    });

    it("should render horizontal layout button with icon", () => {
      const { container } = render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const horizontalButton = screen.getByText("Layout Horizontal").closest('button');
      expect(horizontalButton).toBeTruthy();
      
      const icon = horizontalButton!.querySelector('svg');
      expect(icon).toBeTruthy();
    });
  });

  describe("Button Interactions", () => {
    it("should call onExport when export button is clicked", async () => {
      const user = userEvent.setup();
      
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const exportButton = screen.getByText("Export to JSON");
      await user.click(exportButton);

      expect(mockOnExport).toHaveBeenCalledTimes(1);
      expect(mockOnLayoutVertical).not.toHaveBeenCalled();
      expect(mockOnLayoutHorizontal).not.toHaveBeenCalled();
    });

    it("should call onLayoutVertical when vertical button is clicked", async () => {
      const user = userEvent.setup();
      
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const verticalButton = screen.getByText("Layout Vertical");
      await user.click(verticalButton);

      expect(mockOnLayoutVertical).toHaveBeenCalledTimes(1);
      expect(mockOnExport).not.toHaveBeenCalled();
      expect(mockOnLayoutHorizontal).not.toHaveBeenCalled();
    });

    it("should call onLayoutHorizontal when horizontal button is clicked", async () => {
      const user = userEvent.setup();
      
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const horizontalButton = screen.getByText("Layout Horizontal");
      await user.click(horizontalButton);

      expect(mockOnLayoutHorizontal).toHaveBeenCalledTimes(1);
      expect(mockOnExport).not.toHaveBeenCalled();
      expect(mockOnLayoutVertical).not.toHaveBeenCalled();
    });

    it("should handle multiple clicks on export button", async () => {
      const user = userEvent.setup();
      
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const exportButton = screen.getByText("Export to JSON");
      await user.click(exportButton);
      await user.click(exportButton);
      await user.click(exportButton);

      expect(mockOnExport).toHaveBeenCalledTimes(3);
    });
  });

  describe("Button Variants and Styling", () => {
    it("should render export button with primary colors", () => {
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const exportButton = screen.getByText("Export to JSON").closest('button');
      // Button with default variant should have primary background
      expect(exportButton?.className).toContain('bg-primary');
    });

    it("should render layout buttons with outline variant", () => {
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const verticalButton = screen.getByText("Layout Vertical").closest('button');
      const horizontalButton = screen.getByText("Layout Horizontal").closest('button');
      
      // Outline variant buttons should have outline in their class
      expect(verticalButton?.className).toContain('outline');
      expect(horizontalButton?.className).toContain('outline');
    });

    it("should render all buttons with small size", () => {
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button.className).toContain('sm');
      });
    });
  });

  describe("Accessibility", () => {
    it("should render all buttons as button elements", () => {
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
    });

    it("should have readable text labels", () => {
      render(
        <FlowToolbar
          onExport={mockOnExport}
          onLayoutVertical={mockOnLayoutVertical}
          onLayoutHorizontal={mockOnLayoutHorizontal}
        />
      );

      // All button labels should be visible text, not just icons
      expect(screen.getByText("Export to JSON")).toBeTruthy();
      expect(screen.getByText("Layout Vertical")).toBeTruthy();
      expect(screen.getByText("Layout Horizontal")).toBeTruthy();
    });
  });
});
