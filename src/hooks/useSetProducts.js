import { useContext } from "react";
import { SetProductContext } from "../providers/ProductProvider";

function useSetProducts() {
  const setProductStatus = useContext(SetProductContext);

  function productStatusSetter(key, value) {
    setProductStatus((pre) => ({ ...pre, [key]: value }));
  }
  return productStatusSetter;
}

export default useSetProducts;
