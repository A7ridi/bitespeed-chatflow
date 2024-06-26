import ReactFlow, {
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

import CustomResizerNode from "./CustomResizerNode";
import { useCallback, useContext, useState } from "react";
import ChatFlowContext from "../../context/ChatFlowContext";
import ChatRight from "../chatRight/ChatRight";
import { initialEdges, initialNodes } from "./initial-elements";
import Header from "../layout/Header";
import { areAllNodesConnected } from "../../utils/checkAllNodes";

const nodeTypes = {
  CustomResizerNode,
};

export default function NodeToolbarExample() {
  const { setSelectedNodeId, selectedNodeId } = useContext(ChatFlowContext);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onNodeClick = (event, node) => {
    setSelectedNodeId(node.id);
  };

  // Saving node when clicking Save Changes button
  const handleSaveChanges = () => {
    const allConnected = areAllNodesConnected(nodes, edges);

    // Checking if all nodes are connected or not
    if (allConnected) {
      setError("");

      setNodes((prevNodes) =>
        prevNodes.map((node) =>
          node.id === selectedNodeId
            ? { ...node, data: { ...node.data, label: message } }
            : node
        )
      );
    } else {
      // Showing error message on the header
      setError("Cannot save flow");
    }
  };

  return (
    <>
      <Header handleSaveChanges={handleSaveChanges} error={error} />

      <div className="mt-20 h-screen flex">
        {/* Left side - text node reactflow */}
        <div className="w-4/5 p-4">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            className="react-flow-node-resizer-example"
            minZoom={0.2}
            maxZoom={1}
            fitView
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
          >
            <Controls />
          </ReactFlow>
        </div>

        {/* Vertical bar separating left and right side */}
        <div className="w-px bg-gray-400 mx-4"></div>

        {/* Right side of the text node flow */}
        <ChatRight
          setNodes={setNodes}
          setMessage={setMessage}
          message={message}
          nodes={nodes}
        />
      </div>
    </>
  );
}
