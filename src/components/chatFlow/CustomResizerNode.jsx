import { memo } from "react";
import { Handle, Position } from "reactflow";
import WhatsAppIcon from "../../images/whatsapp.svg";
import MessageIcon from "../../images/message.svg";

const CustomNode = ({ data, selected }) => {
  return (
    <div className={`${selected ? "border-2 border-blue-600 rounded-lg" : ""}`}>
      <Handle type="target" position={Position.Left} />
      <div className="bg-green-200 py-1 px-3 rounded-t-lg font-bold flex justify-between">
        <div className="flex gap-x-2">
          <img src={MessageIcon} alt="message-icon" width={12} height={12} />
          <h6>Send message</h6>
        </div>
        <img src={WhatsAppIcon} alt="whatsapp-icon" width={20} height={20} />
      </div>
      <div className="my-2 px-4">{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default memo(CustomNode);
