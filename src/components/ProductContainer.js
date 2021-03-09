import React from "react";
import Card from "./Card";

import Filter from "./Filter";
import Search from "./Search";

function ProductContainer() {
  return (
    <main className="w-full mb-16">
      <div className="container mx-auto">
        <header className="mb-6 flex items-center flex-col md:flex-row-reverse">
          <section className="mb-2 md:m-0">
            <h2 className="text-gray-800 text-bold text-3xl text-right font-bold">محصولات</h2>
          </section>
          <section className="flex md:mr-auto">
            <Search />
            <Filter />
          </section>
        </header>
        <section dir="rtl" className="grid justify-items-center gap-y-8 md:gap-14 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </main>
  );
}

export default ProductContainer;
