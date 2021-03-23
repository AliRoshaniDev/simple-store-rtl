import React from "react";
import PaginationItem from "./PaginationItem";
import useProductPageNumber from "../hooks/useProductPageNumber";

function Pagination() {
  const { totalPageNumber, currentPageNumber } = useProductPageNumber();

  const pageNumbersArray = [];
  for (let i = 1; i <= totalPageNumber; i++) {
    pageNumbersArray.push({ body: i, pageNumber: i, currentPageNumber });
  }

  return (
    <footer className="flex justify-center">
      <div className="flex">
        {pageNumbersArray.map((itemData) => (
          <PaginationItem {...itemData} key={itemData.body} />
        ))}
      </div>
    </footer>
  );
}

export default Pagination;
