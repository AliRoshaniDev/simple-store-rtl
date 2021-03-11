import React from "react";

function DropDownTextItem({ text, onClick }) {
  return (
    <li onClick={onClick} className="text-right p-1 whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-cupcake-light">
      <a className="px-2 py-1" href="http://www.italiansubs.local:8081/forum/profile/">
        <span>{text}</span>
      </a>
    </li>
  );
}

export default DropDownTextItem;
