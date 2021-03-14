import React from "react";

import ProductsContainer from "./ProductsContainer";
import ProductsHeader from "./ProductsHeader";
import ProductsMain from "./ProductsMain";

import Pagination from "./Pagination";

function Products() {
  return (
    <ProductsContainer>
      <ProductsHeader />
      <ProductsMain />
      <Pagination />
    </ProductsContainer>
  );
}

export default Products;
