import React from "react";
import { Link } from "react-router-dom";

function PaginationItem({ body, pageNumber, disabled = false, currentPageNumber }) {
  return (
    <Link to={!disabled && `/page/${pageNumber}`} class={`mx-1 px-3 py-2 bg-gray-200 ${currentPageNumber === pageNumber ? "bg-mycolor-dark text-mycolor-light" : "bg-mycolor-light text-mycolor-dark"} hover:text-mycolor-light hover:bg-mycolor-dark cursor-pointer rounded-lg`}>
      <div class={`flex items-center font-bold`}>{body}</div>
    </Link>
  );
}

export default PaginationItem;
