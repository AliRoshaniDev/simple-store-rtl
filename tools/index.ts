import { stateInterface, queryInterface } from "../types/index";

export function compose(g: any, f: any) {
  return function (params: any) {
    g(f(params));
  };
}

export function makeParamsObject(params: string) {
  // input e.g:     '?query=FFFF&collection_id=FFFFFF&draft=true...'
  // output e.g:    {query: "FFFF", collection_id: "FFFFFF", draft: "true"}

  return params
    .substring(1)
    .split("&")
    .reduce((final: stateInterface, query: string) => {
      const [key, value] = query.split("=");
      // final[key] = value;
      final[key] = [value];
      return final;
    }, {});
}

export function makeParamsString(params: stateInterface) {
  // input e.g:   {query: "FFFF", collection_id: "FFFFFF", draft: "true"}
  // output e.g:  '?query=FFFF&collection_id=FFFFFF&draft=true...'

  return Object.keys(params)
    .reduce((final: string[], item: string, index: number) => {
      final.push(`${index === 0 ? "?" : "&"}${item}=${params[item]}`);
      return final;
    }, [])
    .join("");
}

export function stringToBoolean(object: { [key: string]: string | boolean }) {
  return Object.keys(object).reduce((convertedObject: { [key: string]: string | boolean }, currentProp: string) => {
    switch (object[currentProp]) {
      case "true":
        convertedObject[currentProp] = true;
        break;
      case "false":
        convertedObject[currentProp] = false;
        break;
      default:
        convertedObject[currentProp] = object[currentProp];
        break;
    }
    return convertedObject;
  }, {});
}

export function convertValuesToArray(object: queryInterface & { [key: string]: string | boolean }) {
  return Object.keys(object).reduce((convertedObject: stateInterface, currentProp: string) => {
    if (currentProp === "query") {
      convertedObject.query = object[currentProp];
    } else if (typeof object[currentProp] === "string") {
      // convertedObject[currentProp] = object[currentProp].split(","); ========> error?
      convertedObject[currentProp] = (object[currentProp] as string).split(",");
    } else if (typeof object[currentProp] === "boolean") {
      convertedObject[currentProp] = object[currentProp] as boolean;
    }
    return convertedObject;
  }, {});
}
