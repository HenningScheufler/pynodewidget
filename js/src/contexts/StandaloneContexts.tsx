import * as React from "react";
import type { NodesDict, NodeValues } from "../types/schema";

// Context to provide setNodesDict
export const SetNodesDictContext = React.createContext<React.Dispatch<React.SetStateAction<NodesDict>> | null>(null);
export const SetNodeValuesContext = React.createContext<React.Dispatch<React.SetStateAction<NodeValues>> | null>(null);

export const useSetNodesDict = () => {
  const setNodesDict = React.useContext(SetNodesDictContext);
  if (!setNodesDict) {
    throw new Error('useSetNodesDict must be used within SetNodesDictContext.Provider');
  }
  return setNodesDict;
};

export const useSetNodeValues = () => {
  const setNodeValues = React.useContext(SetNodeValuesContext);
  if (!setNodeValues) {
    throw new Error('useSetNodeValues must be used within SetNodeValuesContext.Provider');
  }
  return setNodeValues;
};
