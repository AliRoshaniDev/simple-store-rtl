import { useContext } from "react";
import { ProductContext } from "../providers/ProductProvider";

export default function useQueryContext() {
  const queryParamsData = useContext(ProductContext);

  return { ...queryParamsData };
}
