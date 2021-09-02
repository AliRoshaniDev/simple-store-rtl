import { createContext } from "react";
import useQueryParams from "../hooks/useQueryParams";
import useExternalData from "../hooks/useExternalData";
import { ProductItemType } from "../types/index";

import { ChildrenType, QueryParamsDataType, QueryParamsFunctionsType, ProductsDataType } from "../types/index";

export const QueryContext = createContext<QueryParamsDataType & ProductsDataType>({} as QueryParamsDataType & ProductsDataType);
export const SetQueryContext = createContext<QueryParamsFunctionsType>({} as QueryParamsFunctionsType);

export default function QueryParamsProvider(props: ChildrenType) {
  const { children } = props;

  const [queryParamsData, queryParamsFunctions] = useQueryParams();

  const [productsData] = useExternalData<ProductItemType[]>(`/products?${queryParamsData.queryString}`);

  return (
    <QueryContext.Provider value={{ ...queryParamsData, products: productsData }}>
      <SetQueryContext.Provider value={queryParamsFunctions}>{children}</SetQueryContext.Provider>
    </QueryContext.Provider>
  );
}
