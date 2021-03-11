import React from "react";
import PaginationItem from "./PaginationItem";
import useData from "../hooks/useData";

function Pagination() {
  const productData = useData(`http://localhost:3001/products`) || [];
  const pageNumbersArray = [];
  for (let i = 1; i <= productData.length / 8; i++) {
    pageNumbersArray.push(i);
  }
  return (
    <div class="flex">
      <PaginationItem body="قبلی" disabled={true} />
      {pageNumbersArray.map((number) => (
        <PaginationItem body={number} pageNumer={number} />
      ))}
      <PaginationItem body="بعدی" />
    </div>
  );
}

export default Pagination;
