import React from "react";

const Header = ({ handleSaveChanges, error }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-200 flex justify-between p-4 items-center">
      <div className="flex flex-grow justify-center">
        {error && (
          <div className="bg-red-300 font-bold px-5 py-2 rounded-md">
            {error}
          </div>
        )}
      </div>
      <div className="flex-none">
        <button
          className="bg-white text-blue-700 border-2 border-blue-700 py-2 px-4 rounded"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </header>
  );
};

export default Header;
