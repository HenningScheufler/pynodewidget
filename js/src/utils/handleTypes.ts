import type { Connection, Edge } from "@xyflow/react";
import type { NodeTemplate } from "../types/schema";

/**
 * Utilities for typed handles: connection validation and port coloring driven
 * by each handle's optional `dataType`.
 */

type HandleTypeMap = Record<string, string | null>;
type TemplateHandleTypes = Record<string, HandleTypeMap>;

function collectHandleTypes(grid: any, out: HandleTypeMap): void {
  for (const cell of grid?.cells || []) {
    for (const comp of cell?.components || []) {
      if (
        typeof comp?.type === "string" &&
        comp.type.endsWith("-handle") &&
        comp.id
      ) {
        out[comp.id] = comp.dataType ?? null;
      }
    }
  }
}

/**
 * Build a lookup of `nodeType -> handleId -> dataType` from node templates.
 * All instances of a type share the same ports, so the type is enough.
 */
export function buildTemplateHandleTypes(
  templates: NodeTemplate[] | undefined
): TemplateHandleTypes {
  const map: TemplateHandleTypes = {};
  for (const template of templates || []) {
    const handles: HandleTypeMap = {};
    collectHandleTypes((template as any)?.definition?.grid, handles);
    map[template.type] = handles;
  }
  return map;
}

/**
 * Create an `isValidConnection` predicate that only allows a connection when the
 * source and target handles share the same `dataType`. Handles without a
 * declared type (dataType null/undefined) are unconstrained, so untyped graphs
 * keep working exactly as before.
 */
export function makeIsValidConnection(
  nodesDict: Record<string, { type?: string }> | undefined,
  handleTypes: TemplateHandleTypes
) {
  return (connection: Connection | Edge): boolean => {
    const sourceType = connection.source
      ? nodesDict?.[connection.source]?.type
      : undefined;
    const targetType = connection.target
      ? nodesDict?.[connection.target]?.type
      : undefined;

    const sourceDataType =
      sourceType && connection.sourceHandle
        ? handleTypes[sourceType]?.[connection.sourceHandle]
        : undefined;
    const targetDataType =
      targetType && connection.targetHandle
        ? handleTypes[targetType]?.[connection.targetHandle]
        : undefined;

    // Unconstrained if either side is untyped.
    if (sourceDataType == null || targetDataType == null) return true;
    return sourceDataType === targetDataType;
  };
}

/**
 * Deterministic color for a data type, so matching ports read as the same color
 * across the graph. Returns undefined for untyped handles (keep the default).
 */
export function colorForDataType(dataType?: string | null): string | undefined {
  if (!dataType) return undefined;
  let hue = 0;
  for (let i = 0; i < dataType.length; i++) {
    hue = (hue * 31 + dataType.charCodeAt(i)) % 360;
  }
  return `hsl(${hue} 65% 45%)`;
}
