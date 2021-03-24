import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../providers/ProductProvider";
import useData from "./useData";

//This hook is used to receive product data based on ProductProvider state
function useProductPageNumber() {
  const { pageNumber } = useParams();
  const productStatus = useContext(ProductContext);

  const finalPageNumber = typeof pageNumber === "undefined" ? 1 : pageNumber;
  const productData = useData(`http://localhost:3001/products?${productStatus.inStockFilter ? "?instock=true" : ""}${productStatus.priceSort ? "&_sort=price&_order=desc" : ""}${productStatus.numberSort ? "&_sort=number&_order=desc" : ""}${productStatus.searchInput.length > 0 ? `&q=${productStatus.searchInput}` : ""}`) || [];

  const totalPageNumber = Math.ceil(productData.length / 8);
  const currentPageNumber = parseInt(finalPageNumber);

  return { totalPageNumber, currentPageNumber };
}

export default useProductPageNumber;
