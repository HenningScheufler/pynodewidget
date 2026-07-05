import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentFactory } from "../../src/components/ComponentFactory";
import type { ComponentType } from "../../src/components/ComponentFactory";

const mockNodeId = "test-node-1";

function groupComponent(): ComponentType {
  return {
    id: "entries",
    type: "entry-group",
    label: "entries",
    fields: [
      { id: "scheme", type: "text", label: "scheme" },
      { id: "tol", type: "number", label: "tol" },
    ],
    value: {
      selected: "fast",
      entries: {
        fast: { scheme: "explicit", tol: 0.001 },
        exact: { scheme: "implicit", tol: 1e-9 },
      },
    },
  } as ComponentType;
}

describe("EntryGroupComponent", () => {
  const mockOnValueChange = vi.fn();

  beforeEach(() => {
    mockOnValueChange.mockClear();
  });

  function renderGroup(component: ComponentType = groupComponent()) {
    return render(
      <ComponentFactory
        component={component}
        nodeId={mockNodeId}
        onValueChange={mockOnValueChange}
      />
    );
  }

  it("renders the selected entry's name and field values", () => {
    renderGroup();

    // Dropdown trigger shows the selected entry.
    expect(screen.getByRole("combobox")).toHaveTextContent("fast");
    // Name field shows the selected entry name.
    expect(screen.getByLabelText("Entry name")).toHaveValue("fast");
    // Child fields show the selected entry's values (scoped context).
    expect(screen.getByLabelText("scheme")).toHaveValue("explicit");
    expect(screen.getByLabelText("tol")).toHaveValue(0.001);
  });

  it("switching the selection emits the group with the new selected entry", async () => {
    const user = userEvent.setup();
    renderGroup();

    await user.click(screen.getByRole("combobox"));
    await user.click(screen.getByRole("option", { name: "exact" }));

    expect(mockOnValueChange).toHaveBeenCalledWith("entries", {
      selected: "exact",
      entries: {
        fast: { scheme: "explicit", tol: 0.001 },
        exact: { scheme: "implicit", tol: 1e-9 },
      },
    });
  });

  it("add copies the current entry under a unique name and selects it", async () => {
    const user = userEvent.setup();
    renderGroup();

    await user.click(screen.getByLabelText("Add entry"));

    expect(mockOnValueChange).toHaveBeenCalledWith("entries", {
      selected: "fast-copy",
      entries: {
        fast: { scheme: "explicit", tol: 0.001 },
        exact: { scheme: "implicit", tol: 1e-9 },
        "fast-copy": { scheme: "explicit", tol: 0.001 },
      },
    });
  });

  it("rename commits on blur and preserves entry order", async () => {
    const user = userEvent.setup();
    renderGroup();

    const nameInput = screen.getByLabelText("Entry name");
    await user.clear(nameInput);
    await user.type(nameInput, "rapid");
    fireEvent.blur(nameInput);

    expect(mockOnValueChange).toHaveBeenCalledWith("entries", {
      selected: "rapid",
      entries: {
        rapid: { scheme: "explicit", tol: 0.001 },
        exact: { scheme: "implicit", tol: 1e-9 },
      },
    });
    const emitted = mockOnValueChange.mock.calls.at(-1)![1];
    expect(Object.keys(emitted.entries)).toEqual(["rapid", "exact"]);
  });

  it("rename to an existing or empty name is rejected and resets the input", async () => {
    const user = userEvent.setup();
    renderGroup();

    const nameInput = screen.getByLabelText("Entry name");
    await user.clear(nameInput);
    await user.type(nameInput, "exact");
    fireEvent.blur(nameInput);

    expect(mockOnValueChange).not.toHaveBeenCalled();
    expect(nameInput).toHaveValue("fast");

    await user.clear(nameInput);
    fireEvent.blur(nameInput);
    expect(mockOnValueChange).not.toHaveBeenCalled();
    expect(nameInput).toHaveValue("fast");
  });

  it("delete removes the selected entry and selects the next one", async () => {
    const user = userEvent.setup();
    renderGroup();

    await user.click(screen.getByLabelText("Delete entry"));
    expect(mockOnValueChange).toHaveBeenCalledWith("entries", {
      selected: "exact",
      entries: { exact: { scheme: "implicit", tol: 1e-9 } },
    });
  });

  it("delete is disabled for the last remaining entry", () => {
    const single = groupComponent() as any;
    single.value = { selected: "only", entries: { only: { scheme: "x", tol: 1 } } };
    renderGroup(single);

    expect(screen.getByLabelText("Delete entry")).toBeDisabled();
  });

  it("editing a child field writes into the selected entry under the group id", async () => {
    const user = userEvent.setup();
    renderGroup();

    await user.type(screen.getByLabelText("scheme"), "X");

    // The child edit is emitted under the GROUP id, not the field id.
    const [id, value] = mockOnValueChange.mock.calls.at(-1)!;
    expect(id).toBe("entries");
    expect(value.entries.fast.scheme).toBe("explicitX");
    expect(value.entries.exact).toEqual({ scheme: "implicit", tol: 1e-9 });
    expect(value.selected).toBe("fast");
  });
});
