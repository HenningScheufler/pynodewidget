import { describe, it, expect, vi } from "vitest";
import { nodeFactory } from "../src/components/NodeFactory";
import type { NodeProps } from "@xyflow/react";
import React from "react";

const DummyNode: React.FC<NodeProps> = (props) => <div>Dummy {props.id}</div>;

describe("NodeFactory", () => {
  it("registers and retrieves a node component by type", () => {
    nodeFactory.register("dummy", DummyNode);
    const result = nodeFactory.get("dummy");
    expect(result).toBe(DummyNode);
  });

  it("returns undefined for unknown type", () => {
    expect(nodeFactory.get("unknown_type")).toBeUndefined();
  });

  it("getAll returns all registered types", () => {
    nodeFactory.register("dummy2", DummyNode);
    const all = nodeFactory.getAll();
    expect(all["dummy"]).toBe(DummyNode);
    expect(all["dummy2"]).toBe(DummyNode);
  });
});
