import React from "react";

function CustomizeItem({ text, onClick }) {
  return (
    <div onClick={onClick} className="text-right p-1 cursor-pointer whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-mycolor-light">
      <div className="px-2 py-1">
        <span>{text}</span>
      </div>
    </div>
  );
}

export default CustomizeItem;
