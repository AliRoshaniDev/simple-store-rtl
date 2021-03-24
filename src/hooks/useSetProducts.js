import { useContext } from "react";
import { SetProductContext } from "../providers/ProductProvider";

//This hook is used to set ProductsProvider state in order to change the display of prodcuts
function useSetProducts() {
  const setProductStatus = useContext(SetProductContext);

  function productStatusSetter(key, value) {
    setProductStatus((pre) => ({ ...pre, [key]: value }));
  }
  return productStatusSetter;
}

export default useSetProducts;
