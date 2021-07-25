import { useContext } from "react";
import { QueryContext, SetQueryContext } from "../providers/QueryParamsProvider";

export default function useQueryContext() {
  const queryParamsData = useContext(QueryContext);

  const queryParamsFunctions = useContext(SetQueryContext);

  return { ...queryParamsData, ...queryParamsFunctions };
}
