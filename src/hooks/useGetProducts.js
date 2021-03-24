import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../providers/ProductProvider";
import useData from "./useData";

//This hook is used to receive product data based on ProductProvider state
function useGetProducts() {
  const { pageNumber } = useParams();
  const productStatus = useContext(ProductContext);

  const finalPageNumber = typeof pageNumber === "undefined" ? "1" : pageNumber;
  const productData = useData(`http://localhost:3001/products?_page=${finalPageNumber}&_limit=8${productStatus.inStockFilter ? "&instock=true" : ""}${productStatus.priceSort ? "&_sort=price&_order=desc" : ""}${productStatus.numberSort ? "&_sort=number&_order=desc" : ""}${productStatus.searchInput.length > 0 ? `&q=${productStatus.searchInput}` : ""}`) || [];

  return productData;
}

export default useGetProducts;
