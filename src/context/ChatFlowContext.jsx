import React, { createContext, useState } from "react";
import {
  initialEdges,
  initialNodes,
} from "../components/chatFlow/initial-elements";

const ChatFlowContext = createContext();

export const ChatFlowProvider = ({ children }) => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const updateNodeLabel = (id, label) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, label } } : node
      )
    );
  };
  console.log(nodes);

  return (
    <ChatFlowContext.Provider
      value={{
        nodes,
        setNodes,
        edges,
        setEdges,
        selectedNodeId,
        setSelectedNodeId,
        updateNodeLabel,
      }}
    >
      {children}
    </ChatFlowContext.Provider>
  );
};

export default ChatFlowContext;
