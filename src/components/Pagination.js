import React from "react";
import PaginationItem from "./PaginationItem";
import useProductPageNumber from "../hooks/useProductPageNumber";

function Pagination() {
  const { totalPageNumber, currentPageNumber } = useProductPageNumber();

  const pageNumbersArray = [];
  for (let i = 1; i <= totalPageNumber; i++) {
    // if (totalPageNumber > 5) {
    //   i === 1 && pageNumbersArray.push({ body: i, pageNumber: i });
    //   i === currentPageNumber && pageNumbersArray.push({ body: i, pageNumber: i });
    //   i === currentPageNumber - 1 && pageNumbersArray.push({ body: i, pageNumber: i });
    //   i === currentPageNumber + 1 && pageNumbersArray.push({ body: i, pageNumber: i });
    //   i === currentPageNumber + 2 && pageNumbersArray.push({ body: "...", disabled: true });
    //   i === totalPageNumber && pageNumbersArray.push({ body: i, pageNumber: i });
    //   console.log(currentPageNumber);
    // }
    // if (totalPageNumber <= 5) {
    //   pageNumbersArray.push({ body: i, pageNumber: i });
    // }
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
