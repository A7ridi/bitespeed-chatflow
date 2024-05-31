import React, { useContext } from "react";
import ChatFlowContext from "../../context/ChatFlowContext";

const Header = ({ message }) => {
  const { selectedNodeId, updateNodeLabel } = useContext(ChatFlowContext);

  const handleSaveChanges = () => {
    if (selectedNodeId) {
      updateNodeLabel(selectedNodeId, message);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-200 flex justify-end p-4">
      <button
        className="bg-white text-blue-700 border-2 border-blue-700 py-2 px-4 rounded mr-10"
        onClick={handleSaveChanges}
      >
        Save Changes
      </button>
    </header>
  );
};

export default Header;
