import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NodeSidebar } from '../src/NodePanel';
import type { NodeTemplate } from '../src/types/schema';
import { describe, it, expect, vi } from 'vitest';
import { SidebarProvider } from '../src/components/ui/sidebar';

// Wrapper component for SidebarProvider
function TestWrapper({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}

describe('NodePanel', () => {
  const mockTemplates: NodeTemplate[] = [
    {
      type: 'input',
      label: 'Input Node',
      defaultData: { label: 'Input' },
    },
    {
      type: 'process',
      label: 'Process Node',
      defaultData: { label: 'Process' },
    },
    {
      type: 'output',
      label: 'Output Node',
      defaultData: { label: 'Output' },
    },
  ];

  it('renders all node templates', () => {
    const onAddNode = vi.fn();

    render(<TestWrapper><NodeSidebar onAddNode={onAddNode} templates={mockTemplates} /></TestWrapper>);

    expect(screen.getByText('Input Node')).toBeInTheDocument();
    expect(screen.getByText('Process Node')).toBeInTheDocument();
    expect(screen.getByText('Output Node')).toBeInTheDocument();
  });

  it('calls onAddNode when template is clicked', () => {
    const onAddNode = vi.fn();

    render(<TestWrapper><NodeSidebar onAddNode={onAddNode} templates={mockTemplates} /></TestWrapper>);

    const inputButton = screen.getByText('Input Node');
    fireEvent.click(inputButton);

    expect(onAddNode).toHaveBeenCalledWith(mockTemplates[0]);
    expect(onAddNode).toHaveBeenCalledTimes(1);
  });

  it('handles empty templates array', () => {
    const onAddNode = vi.fn();

    const { container } = render(<TestWrapper><NodeSidebar onAddNode={onAddNode} templates={[]} /></TestWrapper>);

    // The sidebar should still render its structure even with no templates
    expect(container.querySelector('[data-sidebar="content"]')).toBeInTheDocument();
  });

  it('renders multiple templates correctly', () => {
    const onAddNode = vi.fn();
    const manyTemplates = Array.from({ length: 10 }, (_, i) => ({
      type: `type-${i}`,
      label: `Node ${i}`,
      defaultData: { label: `Node ${i}` },
    }));

    render(<TestWrapper><NodeSidebar onAddNode={onAddNode} templates={manyTemplates} /></TestWrapper>);

    manyTemplates.forEach((template) => {
      expect(screen.getByText(template.label)).toBeInTheDocument();
    });
  });
});
