import { useReducer, useState, useEffect } from "react";
import { compose, initConverter, useIsFirstMount } from "../tools/index";
import { actionInterface, stateInterface, returnedFromHook } from "../types/index";
import useNextQueryParams from "../hooks/useNextQueryParams";
import { dissoc, assoc, filter, append } from "ramda";
import { useRouter } from "next/router";
import qs from "qs";

// function isStringArray(input: boolean | string[]): input is string[] {
//   return (input as string[]).includes !== undefined;
// }

export default function useQueryParams(): returnedFromHook {
  //stringToBoolean converts values like these: "true", "false" to true, false on each property
  const init = useNextQueryParams(); // { [key: string]: string }
  if (!init["page"]) init["page"] = "1"; // this mutate maybe isn't good ///////////

  const initQueryObject = initConverter(init);

  const initString = qs.stringify(initQueryObject);

  const [queryString, setQueryString] = useState(initString);
  const updateQueryString = compose(setQueryString, qs.stringify);

  const reducer = (state: stateInterface, action: actionInterface) => {
    let response: stateInterface = {};
    response = { ...state };

    const { filterKey, status, query } = action.payload;

    switch (action.type) {
      case "SEARCH":
        if (query === "") {
          response = dissoc("query", response);
        } else {
          response = assoc("query", query, response);
        }
        break;

      case "ONE_FILTER":
        if (!filterKey || typeof status === "undefined") return response;
        if (status === false || state[filterKey] === status) {
          response = dissoc(filterKey, response);
        } else {
          response = assoc(filterKey, status, response);
        }
        break;

      case "SOME_FILTER":
        if (!filterKey || typeof status !== "string") return response;
        if (state[filterKey] && (state[filterKey] as string[]).includes(status) && !(response[filterKey] as string[]).length) {
          response = dissoc(filterKey, response);
        } else if (state[filterKey] && (state[filterKey] as string[]).includes(status)) {
          response[filterKey] = filter((item) => item !== status, response[filterKey] as string[]);
        } else {
          response[filterKey] = append(status, (response[filterKey] as string[]) || []);
        }
        break;

      case "CLEAR":
        if (!filterKey) return response;
        response = dissoc(filterKey, response);
        break;

      default:
        return state;
    }

    updateQueryString(response);

    return response;
  };

  const [queryObject, dispatch] = useReducer(reducer, initQueryObject as stateInterface);

  const router = useRouter();
  const isFirstMount = useIsFirstMount();
  useEffect(() => {
    if (!isFirstMount) {
      router.push(
        {
          query: { ...queryObject },
        },
        undefined,
        { scroll: false }
      );
    }
  }, [queryString]); // eslint-disable-line react-hooks/exhaustive-deps

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

  return [
    { queryString, queryObject },
    { search, applyOneFilter, applySomeFilter, clearFilter },
  ];
}
