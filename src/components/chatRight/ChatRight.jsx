import React, { useContext, useEffect } from "react";
import MessageIcon from "../../images/message.svg";
import ChatFlowContext from "../../context/ChatFlowContext";
import BackIcon from "../../images/backIcon.svg";

const ChatRight = ({ setMessage, message, nodes, setNodes }) => {
  const { selectedNodeId, setSelectedNodeId } = useContext(ChatFlowContext);

  useEffect(() => {
    if (selectedNodeId) {
      const findNode = nodes.find((n) => n.id === selectedNodeId);
      const getMessage = findNode.data.label ?? "";

      setMessage(getMessage);
    }
  }, [selectedNodeId]);

  const goBack = () => setSelectedNodeId(null);

  // Creating new node on click of message box
  const addNode = () => {
    const newNode = {
      id: (nodes.length + 1).toString(), // Generate a new id
      type: "CustomResizerNode",
      data: { label: "Text node" + (nodes.length + 1) },
      position: { x: Math.random() * 1000, y: Math.random() * 600 }, // Random position
      style: {
        background: "#fff",
        width: 200,
        borderRadius: 8,
        fontSize: 12,
        minHeight: 20,
        boxShadow: "9px 6px 25px -2px rgba(153,153,153,0.72)",
      },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <div className="w-1/5 py-4 pr-1">
      {selectedNodeId ? (
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-between mb-1">
            <img
              onClick={goBack}
              className="cursor-pointer"
              src={BackIcon}
              alt="back-icon"
              width={20}
              height={20}
            />
            <h6>Message</h6>
          </div>
          <hr className="mb-2" />
          <h6>Text {selectedNodeId}</h6>
          <textarea
            value={message}
            cols={7}
            onChange={(e) => setMessage(e.target.value)}
            className="outline-2 border rounded p-2"
          />
        </div>
      ) : (
        <div
          onClick={addNode}
          className="cursor-pointer border-2 rounded border-gray-500"
        >
          <div className="flex flex-col gap-y-2 px-4 justify-center items-center py-4">
            <img src={MessageIcon} alt="message-icon" width={30} height={30} />

            <h6>Message</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRight;
