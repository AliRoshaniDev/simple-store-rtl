import { createContext } from "react";
import useQueryParams from "../hooks/useQueryParams";
import useNextQueryParams from "../hooks/useNextQueryParams";
import useExternalData from "../hooks/useExternalData";

import { ChildrenType, QueryParamsDataType, QueryParamsFunctionsType, ProductItemType } from "../types/index";

export const QueryContext = createContext<(QueryParamsDataType & { productsData: ProductItemType[] }) | undefined>(undefined);
export const SetQueryContext = createContext<QueryParamsFunctionsType | undefined>(undefined);

export default function QueryParamsProvider(props: ChildrenType) {
  const { children } = props;

  const [queryParamsData, queryParamsFunctions] = useQueryParams();

  const productsData = useExternalData(`/.netlify/functions/products?${queryParamsData.queryString}`) as ProductItemType[];

  return (
    <QueryContext.Provider value={{ ...queryParamsData, productsData }}>
      <SetQueryContext.Provider value={queryParamsFunctions}>{children}</SetQueryContext.Provider>
    </QueryContext.Provider>
  );
}
