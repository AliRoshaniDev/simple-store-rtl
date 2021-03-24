import React, { createContext, useState } from "react";

export const ProductContext = createContext();
export const SetProductContext = createContext();

function ProductProvider({ children }) {
  const initialProductStatus = { inStockFilter: false, priceSort: false, numberSort: false, searchInput: "" };

  // This state is used for filtering, categorizing and searching products
  const [productStatus, setProductStatus] = useState(initialProductStatus);

  return (
    <ProductContext.Provider value={productStatus}>
      <SetProductContext.Provider value={setProductStatus}>{children}</SetProductContext.Provider>
    </ProductContext.Provider>
  );
}

export default ProductProvider;
