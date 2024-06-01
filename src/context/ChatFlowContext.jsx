import React, { createContext, useState } from "react";

const ChatFlowContext = createContext();

export const ChatFlowProvider = ({ children }) => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  return (
    <ChatFlowContext.Provider
      value={{
        selectedNodeId,
        setSelectedNodeId,
      }}
    >
      {children}
    </ChatFlowContext.Provider>
  );
};

export default ChatFlowContext;
