import { useReducer, useEffect, useMemo } from "react";
import { initConverter, useIsFirstMount } from "../tools/index";
import { actionInterface, returnedFromHook, QueryParamsDataType } from "../types/index";
import useNextQueryParams from "../hooks/useNextQueryParams";
import { dissoc, assoc, filter, append } from "ramda";
import { useRouter } from "next/router";
import qs from "qs";

export default function useQueryParams(): returnedFromHook {
  const init = useNextQueryParams(); // { [key: string]: string }

  function getInit() {
    if (!init["_start"]) init["_start"] = "0";
    if (!init["_limit"]) init["_limit"] = "8";

    const initQueryObject = initConverter(init);

    const initQueryString = qs.stringify(initQueryObject);

    return { initQueryObject, initQueryString };
  }

  const { initQueryObject, initQueryString } = useMemo(() => getInit(), []);

  const reducer = (state: QueryParamsDataType, action: actionInterface) => {
    let response = { ...state };

    const { filterKey, status, query } = action.payload;

    switch (action.type) {
      case "SEARCH":
        if (query === "") {
          response.queryObject = dissoc("query", response.queryObject);
        } else {
          response.queryObject = assoc("query", query, response.queryObject);
        }
        break;

      case "ONE_FILTER":
        if (!filterKey || typeof status === "undefined") return response;
        if (status === false || state.queryObject[filterKey] === status) {
          response.queryObject = dissoc(filterKey, response.queryObject);
        } else {
          response.queryObject = assoc(filterKey, status, response.queryObject);
        }
        break;

      case "SOME_FILTER":
        if (!filterKey || typeof status !== "string") return response;
        if (state.queryObject[filterKey] && (state.queryObject[filterKey] as string[]).includes(status) && !(response.queryObject[filterKey] as string[]).length) {
          response.queryObject = dissoc(filterKey, response);
        } else if (state.queryObject[filterKey] && (state.queryObject[filterKey] as string[]).includes(status)) {
          response.queryObject[filterKey] = filter((item) => item !== status, response.queryObject[filterKey] as string[]);
        } else {
          response.queryObject[filterKey] = append(status, (response.queryObject[filterKey] as string[]) || []);
        }
        break;

      case "CLEAR":
        if (!filterKey) return response;
        response.queryObject = dissoc(filterKey, response);
        break;

      default:
        return state;
    }

    response.queryString = qs.stringify(response.queryObject);

    return response;
  };

  const [queryParams, dispatch] = useReducer(reducer, { queryObject: initQueryObject, queryString: initQueryString } as QueryParamsDataType);

  const router = useRouter();
  const isFirstMount = useIsFirstMount();
  useEffect(() => {
    if (!isFirstMount) {
      router.push(
        {
          query: { ...queryParams.queryObject },
        },
        undefined,
        { scroll: false }
      );
    }
  }, [queryParams.queryString]); // eslint-disable-line react-hooks/exhaustive-deps

  const search = (query: string) => {
    dispatch({
      type: "SEARCH",
      payload: {
        query,
      },
    });
  };

  const applyOneFilter = (filterKey: string, status: string | boolean | number) => {
    dispatch({
      type: "ONE_FILTER",
      payload: {
        filterKey,
        status,
      },
    });
  };

  const applySomeFilter = (filterKey: string, status: string) => {
    dispatch({
      type: "SOME_FILTER",
      payload: {
        filterKey,
        status,
      },
    });
  };

  const clearFilter = (filterKey: string) => {
    dispatch({
      type: "CLEAR",
      payload: {
        filterKey,
      },
    });
  };

  return [{ ...queryParams }, { search, applyOneFilter, applySomeFilter, clearFilter }];
}
