import { useReducer, useEffect } from "react";
import { initConverter, useIsFirstMount } from "../tools/index";
import { QueryParamAction, QueryParamsOutput, QueryParamsDataType } from "../types/index";
import useNextQueryParams from "../hooks/useNextQueryParams";
import { dissoc, assoc, filter, append } from "ramda";
import { useRouter } from "next/router";
import qs from "qs";
import { POSTS_PER_PAGE } from "../constants/index";

export default function useQueryParams(): QueryParamsOutput {
  const init = useNextQueryParams(); // { [key: string]: string }

  function getInit() {
    if (!init["_start"]) init["_start"] = "0";
    if (!init["_limit"]) init["_limit"] = `${POSTS_PER_PAGE}`;

    const initQueryObject = initConverter(init);

    const initQueryString = qs.stringify(initQueryObject);

    return { queryString: initQueryString, queryObject: initQueryObject };
  }

  const reducer = (state: QueryParamsDataType, action: QueryParamAction) => {
    let response = { ...state };
    const queryObjectValue = state.queryObject[action.payload.filterKey];

    switch (action.type) {
      case "ONE_FILTER": {
        const { filterKey, status } = action.payload;

        if ((!status && status !== 0) || queryObjectValue === status) {
          response.queryObject = dissoc(filterKey, response.queryObject);
        } else {
          response.queryObject = assoc(filterKey, status, response.queryObject);
        }
        break;
      }

      case "SOME_FILTER": {
        const { filterKey, status } = action.payload;

        if (!Array.isArray(queryObjectValue)) return response;

        if (queryObjectValue.includes(status) && queryObjectValue.length === 0) {
          response.queryObject = dissoc(filterKey, response);
        } else if (queryObjectValue.includes(status)) {
          response.queryObject[filterKey] = filter((item) => item !== status, queryObjectValue);
        } else {
          response.queryObject[filterKey] = append(status, queryObjectValue || []);
        }
        break;
      }
      case "CLEAR": {
        const { filterKey } = action.payload;

        response.queryObject = dissoc(filterKey, response);
        break;
      }

      default:
        break;
    }

    response.queryString = qs.stringify(response.queryObject);

    return response;
  };

  const [queryParams, dispatch] = useReducer(reducer, getInit());

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

  return [{ ...queryParams }, { applyOneFilter, applySomeFilter, clearFilter }];
}
