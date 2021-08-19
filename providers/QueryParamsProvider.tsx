import { createContext } from "react";
import useQueryParams from "../hooks/useQueryParams";
import useExternalData from "../hooks/useExternalData";
import { ProductItemType } from "../types/index";

import { ChildrenType, QueryParamsDataType, QueryParamsFunctionsType, ProductsDataType } from "../types/index";
import { boolean, string } from "yup/lib/locale";
import { number } from "yup";

export const QueryContext = createContext<(QueryParamsDataType & ProductsDataType) | undefined>(undefined);
export const SetQueryContext = createContext<QueryParamsFunctionsType | undefined>(undefined);

export default function QueryParamsProvider(props: ChildrenType) {
  const { children } = props;

  const [queryParamsData, queryParamsFunctions] = useQueryParams();

  const productsData = useExternalData<ProductItemType[]>(`/.netlify/functions/products?${queryParamsData.queryString}`) as any as ProductsDataType;

  return (
    <QueryContext.Provider value={{ ...queryParamsData, ...productsData }}>
      <SetQueryContext.Provider value={queryParamsFunctions}>{children}</SetQueryContext.Provider>
    </QueryContext.Provider>
  );
}
