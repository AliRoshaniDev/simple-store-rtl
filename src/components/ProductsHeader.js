import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";

function ProductsHeader() {
  return (
    <header className="mb-6 flex items-center flex-col md:flex-row-reverse">
      <section className="mb-2 md:m-0">
        <h2 className="text-gray-800 text-bold text-3xl text-right font-bold">محصولات</h2>
      </section>
      <section className="flex w-full sm:w-auto px-6 sm:px-0 md:mr-auto justify-center flex-col sm:flex-row items-center">
        <Search />
        <div className="flex">
          <Filter />
          <Sort />
        </div>
      </section>
    </header>
  );
}

export default ProductsHeader;
