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
      <div class="flex">
        {pageNumbersArray.map((itemData) => (
          <PaginationItem {...itemData} />
        ))}
      </div>
    </footer>
  );
}

export default Pagination;

// const pageNumbersArray = [];
// for (let i = 1; i <= totalPageNumber; i++) {
//   if(totalPageNumber > 3) {
//     i === 4 && pageNumbersArray.push({body: '...', pageNumber: i, disabled: true});
//   }
//   if (i <=  && ) {

//   }
//   pageNumbersArray.push({body: i, pageNumber: i});
// }

// return (
//   <footer className="flex justify-center">
//     <div class="flex">
//       <PaginationItem body="1" pageNumber={1} />
//       {pageNumbersArray.map((number) => (
//         <PaginationItem body={number} pageNumber={number} />
//       ))}
//       <PaginationItem body="2" />
//     </div>
//   </footer>
// );
