import React from "react";

import Card from "./Card";
import useGetProducts from "../hooks/useGetProducts";

function ProductsMain() {
  const productData = useGetProducts();

  const initialData = new Array(8).fill({ data: null });

  const finalData = productData.length === 0 ? initialData : productData;

  return (
    <section dir="rtl" className="grid justify-items-center mb-10 gap-y-8 md:gap-14 xl:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {finalData.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </section>
  );
}

export default ProductsMain;
