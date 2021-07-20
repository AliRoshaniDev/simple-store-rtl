import { createContext } from "react";
import useQueryParams from "../hooks/useQueryParams";
import useNextQueryParams from "../hooks/useNextQueryParams";

import { ChildrenType, QueryParamsDataType, QueryParamsFunctionsType } from "../types/index";

export const QueryContext = createContext<QueryParamsDataType | undefined>(undefined);
export const SetQueryContext = createContext<QueryParamsFunctionsType | undefined>(undefined);

export default function QueryParamsProvider(props: ChildrenType) {
  const { children } = props;
  const intialQueryObject = useNextQueryParams();

  const [queryParamsData, queryParamsFunctions] = useQueryParams(intialQueryObject);

  return (
    <QueryContext.Provider value={queryParamsData}>
      <SetQueryContext.Provider value={queryParamsFunctions}>{children}</SetQueryContext.Provider>
    </QueryContext.Provider>
  );
}
