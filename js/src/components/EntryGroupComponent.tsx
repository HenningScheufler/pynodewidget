import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  EntryGroupValue,
  FieldValue,
  PrimitiveFieldValue,
} from "@/types/schema";
import {
  NodeDataContext,
  useNodeDataContext,
} from "@/contexts/NodeDataContext";
import { ComponentFactory } from "./ComponentFactory";

/**
 * EntryGroupComponent - a named set of entries sharing one field layout.
 *
 * The component's value is `{selected, entries}`: a dict of named entries
 * (e.g. parameter blocks in a YAML file) plus the entry currently shown. A
 * dropdown switches entries; the child fields (given by `fields`) render the
 * selected entry's values through a scoped NodeDataContext, so every child
 * edit is written back into `entries[selected]` under the group's own id.
 *
 * The valibot schema lives in ComponentFactory (EntryGroupComponentSchema)
 * because `fields` recursively references ComponentType — same pattern as
 * GridLayoutComponent.
 */
export type EntryGroupComponent = {
  id: string;
  type: "entry-group";
  label?: string;
  fields: any[]; // ComponentType[] - defined in ComponentFactory
  value?: EntryGroupValue;
};

interface EntryGroupComponentProps {
  component: EntryGroupComponent;
  nodeId: string;
  onValueChange?: (id: string, value: FieldValue) => void;
}

const stopDrag = {
  onMouseDown: (e: React.SyntheticEvent) => e.stopPropagation(),
  onPointerDown: (e: React.SyntheticEvent) => e.stopPropagation(),
};

/** A unique copy-name: "fine-copy", "fine-copy2", ... */
function copyName(base: string, taken: string[]): string {
  let candidate = `${base}-copy`;
  let i = 2;
  while (taken.includes(candidate)) {
    candidate = `${base}-copy${i++}`;
  }
  return candidate;
}

export function EntryGroupComponent({
  component,
  nodeId,
  onValueChange,
}: EntryGroupComponentProps) {
  const context = useNodeDataContext();

  const group: EntryGroupValue = (context?.nodeData.values?.[
    component.id
  ] as EntryGroupValue | undefined) ??
    component.value ?? { selected: "", entries: {} };

  const names = Object.keys(group.entries);
  const selected =
    group.selected in group.entries ? group.selected : names[0] ?? "";

  const commit = React.useCallback(
    (next: EntryGroupValue) => onValueChange?.(component.id, next),
    [component.id, onValueChange]
  );

  // Rename field: local state, committed on blur / Enter.
  const [nameDraft, setNameDraft] = React.useState(selected);
  React.useEffect(() => setNameDraft(selected), [selected]);

  const commitRename = () => {
    const next = nameDraft.trim();
    if (!next || next === selected || next in group.entries) {
      setNameDraft(selected); // reject empty / duplicate, keep current name
      return;
    }
    const entries: EntryGroupValue["entries"] = {};
    for (const [name, values] of Object.entries(group.entries)) {
      entries[name === selected ? next : name] = values;
    }
    commit({ selected: next, entries });
  };

  const addEntry = () => {
    const name = copyName(selected || "entry", names);
    commit({
      selected: name,
      entries: { ...group.entries, [name]: { ...group.entries[selected] } },
    });
  };

  const deleteEntry = () => {
    if (names.length <= 1) return;
    const entries = { ...group.entries };
    delete entries[selected];
    commit({ selected: Object.keys(entries)[0] ?? "", entries });
  };

  // Child fields read the selected entry's values through a scoped context
  // and write back into entries[selected] under the group's id.
  const handleChildChange = React.useCallback(
    (childId: string, value: FieldValue) => {
      commit({
        ...group,
        selected,
        entries: {
          ...group.entries,
          [selected]: {
            ...group.entries[selected],
            [childId]: value as PrimitiveFieldValue,
          },
        },
      });
    },
    [commit, group, selected]
  );

  // Always provide a scoped context so child fields read the selected
  // entry's values (with or without an outer node context).
  const scopedContext = React.useMemo(
    () => ({
      nodeId,
      nodeData: {
        label: component.label ?? component.id,
        grid: { rows: [], columns: [], cells: [] },
        ...(context ? context.nodeData : {}),
        values: group.entries[selected] ?? {},
      },
      onValueChange: handleChildChange,
    }),
    [context, nodeId, component.label, component.id, group, selected, handleChildChange]
  );

  return (
    <div className="component-entry-group nodrag w-full flex flex-col gap-2">
      {component.label && (
        <label className="text-xs text-gray-600">{component.label}</label>
      )}
      <div className="flex items-center gap-1">
        <Select
          value={selected}
          onValueChange={(name) => commit({ ...group, selected: name })}
        >
          <SelectTrigger
            className="h-8 text-xs flex-1"
            {...stopDrag}
            aria-label={component.label ?? component.id}
          >
            <SelectValue placeholder="Select entry..." />
          </SelectTrigger>
          <SelectContent>
            {names.map((name) => (
              <SelectItem key={name} value={name} className="text-xs">
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0"
          {...stopDrag}
          onClick={addEntry}
          aria-label="Add entry"
        >
          <Plus className="h-3 w-3" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 shrink-0"
          {...stopDrag}
          onClick={deleteEntry}
          disabled={names.length <= 1}
          aria-label="Delete entry"
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">name</label>
        <Input
          type="text"
          value={nameDraft}
          onChange={(e) => setNameDraft(e.target.value)}
          onBlur={commitRename}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              (e.target as HTMLInputElement).blur();
            }
          }}
          {...stopDrag}
          aria-label="Entry name"
          className="h-8 text-xs w-full"
        />
      </div>
      <NodeDataContext.Provider value={scopedContext}>
        <div key={selected} className="flex flex-col gap-2">
          {component.fields.map((field) => (
            <ComponentFactory
              key={field.id}
              component={field}
              nodeId={nodeId}
              onValueChange={handleChildChange}
            />
          ))}
        </div>
      </NodeDataContext.Provider>
    </div>
  );
}
