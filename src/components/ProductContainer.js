import React from "react";
import Card from "./Card";

import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";
import Pagination from "./Pagination";
import useData from "../hooks/useData";

// import db from "../db.json";

function ProductContainer({ match }) {
  const pageNumber = typeof match.params.pageNumber === "undefined" ? "1" : match.params.pageNumber;
  const productData = useData(`http://localhost:3001/products?_page=${pageNumber}&_limit=8`) || [];
  console.log(pageNumber);

  return (
    <main className="w-full mb-16">
      <div className="container mx-auto">
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
        <section dir="rtl" className="grid justify-items-center mb-10 gap-y-8 md:gap-14 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productData.map((item) => (
            <Card {...item} />
          ))}
        </section>
        <footer className="flex justify-center">
          <Pagination />
        </footer>
      </div>
    </main>
  );
}

export default ProductContainer;
