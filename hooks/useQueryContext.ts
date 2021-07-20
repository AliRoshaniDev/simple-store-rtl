import { useContext } from "react";
import { QueryContext, SetQueryContext } from "../providers/QueryParamsProvider";

export default function useQueryParamsContext() {
  const queryParamsData = useContext(QueryContext);

  const queryParamsFunctions = useContext(SetQueryContext);

  return { ...queryParamsData, ...queryParamsFunctions };
}
