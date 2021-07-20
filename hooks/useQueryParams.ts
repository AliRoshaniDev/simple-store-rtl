import { useReducer, useState, useEffect } from "react";
import { makeParamsString, compose } from "../tools/index";
import { actionInterface, stateInterface, queryParamsHook } from "../types/index";
import { stringToBoolean, convertValuesToArray } from "../tools/index";
import { dissoc, assoc, filter, append } from "ramda";
import { useRouter } from "next/router";

// function isStringArray(input: boolean | string[]): input is string[] {
//   return (input as string[]).includes !== undefined;
// }

const useQueryParams: queryParamsHook = (init: { [key: string]: string }) => {
  //stringToBoolean converts values like these: "true", "false" to true, false on each property
  const initObject = convertValuesToArray(stringToBoolean(init));

  const initString = makeParamsString(initObject);

  const [queryString, setQuery] = useState(initString);
  const updateQuery = compose(setQuery, makeParamsString);

  const router = useRouter();

  useEffect(() => {
    router.push(queryString);
  }, [queryString]);

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

    updateQuery(response);

    return response;
  };

  const [queryObject, dispatch] = useReducer(reducer, initObject);

  const search = (query: string) => {
    dispatch({
      type: "SEARCH",
      payload: {
        query,
      },
    });
  };

  const applyOneFilter = (filterKey: string, status: string | boolean) => {
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
};

export default useQueryParams;
