import ReactFlow, { MiniMap, Controls } from "reactflow";

import "reactflow/dist/style.css";

import CustomResizerNode from "./CustomResizerNode";
import { useContext } from "react";
import ChatFlowContext from "../../context/ChatFlowContext";

const nodeTypes = {
  CustomResizerNode,
};

export default function NodeToolbarExample() {
  const { nodes, edges, setSelectedNodeId } = useContext(ChatFlowContext);
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = (event, node) => {
    setSelectedNodeId(node.id);
  };

  return (
    <ReactFlow
      defaultNodes={nodes}
      defaultEdges={edges}
      className="react-flow-node-resizer-example"
      minZoom={0.2}
      maxZoom={1.1}
      fitView
      nodeTypes={nodeTypes}
      onNodeClick={onNodeClick}
      // onNodesChange={onNodesChange}
      // onEdgesChange={onEdgesChange}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
