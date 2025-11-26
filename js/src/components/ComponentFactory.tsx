/**
 * Component Factory: Renders components based on discriminated union type
 * 
 * This is the core of the three-layer architecture. It takes a Component
 * discriminated union and renders the appropriate React component.
 */

import React from "react";
import { Handle as ReactFlowHandle, Position } from "@xyflow/react";
import type { ComponentType, Handle, GridLayoutComponent, GridCell } from "../types/schema";

interface ComponentFactoryProps {
  component: ComponentType;
  nodeId: string;
  onValueChange?: (componentId: string, value: any) => void;
}

/**
 * Main component factory - renders any component type
 */
export function ComponentFactory({ component, nodeId, onValueChange }: ComponentFactoryProps) {
  switch (component.type) {
    case "base-handle":
    case "labeled-handle":
    case "button-handle":
      return <HandleComponent component={component as Handle} nodeId={nodeId} />;
    
    case "text":
      return <TextFieldComponent component={component} onValueChange={onValueChange} />;
    
    case "number":
      return <NumberFieldComponent component={component} onValueChange={onValueChange} />;
    
    case "bool":
      return <BoolFieldComponent component={component} onValueChange={onValueChange} />;
    
    case "select":
      return <SelectFieldComponent component={component} onValueChange={onValueChange} />;
    
    case "header":
      return <HeaderComponentView component={component} />;
    
    case "button":
      return <ButtonComponentView component={component} />;
    
    case "divider":
      return <DividerComponentView component={component} />;
    
    case "spacer":
      return <SpacerComponentView component={component} />;
    
    case "grid-layout":
      return <NestedGridLayoutComponent component={component} nodeId={nodeId} onValueChange={onValueChange} />;
    
    default:
      console.warn(`Unknown component type: ${(component as any).type}`);
      return null;
  }
}

/**
 * Handle Component - Renders ReactFlow handles
 */
function HandleComponent({ component, nodeId }: { component: Handle; nodeId: string }) {
  const handleType = component.handle_type; // "input" or "output"
  const rfHandleType = handleType === "input" ? "target" : "source";
  const rfPosition = handleType === "input" ? Position.Left : Position.Right;
  
  // Map component type to visual style
  const styleMap = {
    "base-handle": "base",
    "labeled-handle": "labeled",
    "button-handle": "button",
  } as const;
  
  const visualStyle = styleMap[component.type];
  const handleClass = `handle-${visualStyle}`;
  
  return (
    <div className={`handle-wrapper handle-wrapper-${handleType} ${handleClass}`}>
      <ReactFlowHandle
        type={rfHandleType}
        position={rfPosition}
        id={component.id}
        className={`handle-connector ${handleClass}`}
      />
      <div className="handle-label">
        {component.label}
        {component.required && <span className="text-red-500 ml-1">*</span>}
      </div>
    </div>
  );
}

/**
 * Text Field Component
 */
function TextFieldComponent({ 
  component, 
  onValueChange 
}: { 
  component: Extract<ComponentType, { type: "text" }>; 
  onValueChange?: (id: string, value: any) => void;
}) {
  return (
    <div className="component-text-field">
      <label className="text-xs text-gray-600 mb-1">{component.label}</label>
      <input
        type="text"
        value={component.value || ""}
        placeholder={component.placeholder}
        onChange={(e) => onValueChange?.(component.id, e.target.value)}
        className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
      />
    </div>
  );
}

/**
 * Number Field Component
 */
function NumberFieldComponent({ 
  component, 
  onValueChange 
}: { 
  component: Extract<ComponentType, { type: "number" }>; 
  onValueChange?: (id: string, value: any) => void;
}) {
  return (
    <div className="component-number-field">
      <label className="text-xs text-gray-600 mb-1">{component.label}</label>
      <input
        type="number"
        value={component.value ?? 0}
        min={component.min}
        max={component.max}
        onChange={(e) => onValueChange?.(component.id, parseFloat(e.target.value))}
        className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
      />
    </div>
  );
}

/**
 * Boolean Field Component
 */
function BoolFieldComponent({ 
  component, 
  onValueChange 
}: { 
  component: Extract<ComponentType, { type: "bool" }>; 
  onValueChange?: (id: string, value: any) => void;
}) {
  return (
    <div className="component-bool-field flex items-center gap-2">
      <input
        type="checkbox"
        checked={component.value || false}
        onChange={(e) => onValueChange?.(component.id, e.target.checked)}
        className="w-4 h-4"
      />
      <label className="text-sm text-gray-700">{component.label}</label>
    </div>
  );
}

/**
 * Select Field Component
 */
function SelectFieldComponent({ 
  component, 
  onValueChange 
}: { 
  component: Extract<ComponentType, { type: "select" }>; 
  onValueChange?: (id: string, value: any) => void;
}) {
  return (
    <div className="component-select-field">
      <label className="text-xs text-gray-600 mb-1">{component.label}</label>
      <select
        value={component.value || ""}
        onChange={(e) => onValueChange?.(component.id, e.target.value)}
        className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
      >
        <option value="">Select...</option>
        {component.options?.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

/**
 * Header Component
 */
function HeaderComponentView({ 
  component 
}: { 
  component: Extract<ComponentType, { type: "header" }>; 
}) {
  return (
    <div 
      className="component-header px-3 py-2 font-semibold flex items-center gap-2"
      style={{
        backgroundColor: component.bgColor,
        color: component.textColor,
      }}
    >
      {component.icon && <span>{component.icon}</span>}
      <span>{component.label}</span>
    </div>
  );
}

/**
 * Button Component
 */
function ButtonComponentView({ 
  component 
}: { 
  component: Extract<ComponentType, { type: "button" }>; 
}) {
  const isPrimary = component.variant === "primary";
  
  return (
    <button
      className={`component-button px-3 py-1 text-sm rounded ${
        isPrimary 
          ? "bg-blue-500 text-white hover:bg-blue-600" 
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      onClick={() => {
        // Emit action event
        console.log(`Action: ${component.action}`);
      }}
    >
      {component.label}
    </button>
  );
}

/**
 * Divider Component
 */
function DividerComponentView({ 
  component 
}: { 
  component: Extract<ComponentType, { type: "divider" }>; 
}) {
  const isHorizontal = component.orientation !== "vertical";
  
  return (
    <div 
      className={`component-divider ${
        isHorizontal ? "w-full h-px" : "h-full w-px"
      } bg-gray-300`}
    />
  );
}

/**
 * Spacer Component
 */
function SpacerComponentView({ 
  component 
}: { 
  component: Extract<ComponentType, { type: "spacer" }>; 
}) {
  return (
    <div 
      className="component-spacer"
      style={{ 
        width: component.size, 
        height: component.size 
      }}
    />
  );
}

/**
 * Nested Grid Layout Component
 * Renders a grid layout that can be nested within cells
 * This enables recursive composition of layouts
 */
function NestedGridLayoutComponent({
  component,
  nodeId,
  onValueChange,
}: {
  component: GridLayoutComponent;
  nodeId: string;
  onValueChange?: (id: string, value: any) => void;
}) {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: component.rows.join(" "),
    gridTemplateColumns: component.columns.join(" "),
    gap: component.gap || "8px",
    minHeight: component.minHeight,
    minWidth: component.minWidth,
  };

  return (
    <div 
      className={`nested-grid ${component.className || ""}`} 
      style={gridStyle}
    >
      {component.cells.map((cell) => (
        <NestedGridCell
          key={cell.id}
          cell={cell}
          nodeId={nodeId}
          onValueChange={onValueChange}
        />
      ))}
    </div>
  );
}

/**
 * Nested Grid Cell - Renders a cell within a nested grid
 */
function NestedGridCell({
  cell,
  nodeId,
  onValueChange,
}: {
  cell: GridCell;
  nodeId: string;
  onValueChange?: (id: string, value: any) => void;
}) {
  const layout = cell.layout || { type: "flex", direction: "column" };
  const cellStyle = getNestedCellStyle(cell, layout);

  return (
    <div className="nested-grid-cell" style={cellStyle}>
      <div className="nested-grid-cell-content" style={getLayoutStyle(layout)}>
        {cell.components.map((component) => (
          <ComponentFactory
            key={component.id}
            component={component}
            nodeId={nodeId}
            onValueChange={onValueChange}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Get cell positioning style
 */
function getNestedCellStyle(cell: GridCell, layout: any): React.CSSProperties {
  return {
    gridRow: `${cell.coordinates.row} / span ${cell.coordinates.row_span || 1}`,
    gridColumn: `${cell.coordinates.col} / span ${cell.coordinates.col_span || 1}`,
  };
}

/**
 * Get layout style for cell content
 */
function getLayoutStyle(layout: any): React.CSSProperties {
  if (layout.type === "flex" || !layout.type) {
    return {
      display: "flex",
      flexDirection: layout.direction || "column",
      alignItems: layout.align || "start",
      justifyContent: layout.justify || "start",
      gap: layout.gap || "4px",
    };
  }

  if (layout.type === "grid") {
    return {
      display: "grid",
      gap: layout.gap || "4px",
      alignItems: layout.align || "start",
      justifyContent: layout.justify || "start",
    };
  }

  if (layout.type === "stack") {
    return {
      display: "flex",
      flexDirection: "column",
      gap: layout.gap || "4px",
    };
  }

  return {};
}
