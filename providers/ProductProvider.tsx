import { createContext, useState } from "react";
import useQueryParams from "../hooks/useQueryParams";
import { ChildrenType, ProductContextType, ProductsDataType } from "../types/index";

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export default function ProductProvider(props: ChildrenType) {
  const { children } = props;
  const [productsData, setProductsData] = useState<ProductsDataType>(null);

  const [queryParamsData, queryParamsFunctions] = useQueryParams();

  return <ProductContext.Provider value={{ ...queryParamsFunctions, setProductsData, productsData, ...queryParamsData }}>{children}</ProductContext.Provider>;
}
