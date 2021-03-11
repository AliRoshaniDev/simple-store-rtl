import React from "react";
import { Link } from "react-router-dom";

function PaginationItem({ body, pageNumer, disabled = false }) {
  return (
    <Link to={`/page/${pageNumer}`} class={`mx-1 px-3 py-2 bg-gray-200 ${disabled ? "text-gray-500 cursor-default" : "cursor-pointer text-gray-700 hover:bg-gray-700 hover:text-gray-200"} rounded-lg`}>
      <div class={`flex items-center font-bold`}>{body}</div>
    </Link>
  );
}

export default PaginationItem;

// function PaginationItem({ body, pageNumer, disabled = false }) {
//   return (
//     <li class={`mx-1 px-3 py-2 bg-gray-200 ${disabled ? "text-gray-500 cursor-default" : "cursor-pointer text-gray-700 hover:bg-gray-700 hover:text-gray-200"}  rounded-lg`}>
//       <Link class={`flex items-center font-bold ${disabled ? "cursor-default" : "cursor-pointer"}`} to={`/page/${pageNumer}`}>
//         {disabled ? <span class="mx-1">{body}</span> : body}
//       </Link>
//     </li>
//   );
// }
