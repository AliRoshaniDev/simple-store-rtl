import React from "react";

import Card from "./Card";
import useGetProducts from "../hooks/useGetProducts";

function ProductsMain() {
  const productData = useGetProducts();

  return (
    <section dir="rtl" className="grid justify-items-center mb-10 gap-y-8 md:gap-14 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productData.map((item) => (
        <Card {...item} />
      ))}
    </section>
  );
}

export default ProductsMain;
