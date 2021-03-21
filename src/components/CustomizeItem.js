import React from "react";

function CustomizeItem({ text, onClick, active = false }) {
  return (
    <div onClick={onClick} className={`text-right p-1 cursor-pointer whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 ${active ? "bg-mycolor-dark text-mycolor-light" : "hover:bg-mycolor-light hover:text-mycolor-dark"}`}>
      <div className="px-2 py-1">
        <span>{text}</span>
      </div>
    </div>
  );
}

export default CustomizeItem;
