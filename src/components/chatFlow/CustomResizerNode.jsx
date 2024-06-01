import { memo } from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data, selected }) => {
  return (
    <div className={`${selected ? "border-2 border-blue-600 rounded-lg" : ""}`}>
      <Handle type="target" position={Position.Left} />
      <div className="bg-green-200 py-1 px-3 rounded-t-lg font-bold">
        Send message
      </div>
      <div className="my-2 px-4">{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default memo(CustomNode);
