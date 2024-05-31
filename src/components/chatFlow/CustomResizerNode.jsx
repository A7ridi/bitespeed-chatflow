import { memo } from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className="bg-green-200 py-1 px-3 rounded-t-lg font-bold">
        Send message
      </div>
      <div className="my-2 px-4">{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(CustomNode);
