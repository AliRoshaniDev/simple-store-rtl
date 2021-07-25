import React, { ReactNode, MouseEvent } from "react";

export interface BadgeInputInterface {
  number?: number;
  size: "big" | "small";
}

// export type ProductType = {
//   name: string;
//   price: number;
//   numberAdded: number;
//   picture: string;
//   id: 4;
// };

export type ProductItemType = {
  name: string;
  price: number;
  picture: string;
  id: number;
  instock: boolean;
};

export type CartItemType = {
  name: string;
  price: number;
  picture: string;
  id: number;
  instock: boolean;
  addedNumber: number;
};

export type ActionCartType = {
  type: "DELETE_ALL" | "DELETE_ONE" | "ADD_ONE";
  payload?: {
    name?: string;
    price?: number;
    picture?: string;
    id: number;
    instock?: boolean;
    addedNumber?: number;
  };
};

// export type CartDataType = {
//   name: string;
//   price: number;
//   numberAdded: number;
//   picture: string;
//   id: 4;
// }[];

export type ChildrenType = {
  children: ReactNode;
};

export type BtnProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  text?: string;
  icon?: string;
  buttonStyle?: string;
  iconStyle?: string;
  type: "primary" | "secondary" | "warning";
  width: "w-full" | "w-1/2-less" | "w-10" | string;
  height?: string;
  noBorder?: boolean;
};

export type DropMenuProps = { xAdjustment: string; widthAdjustment: string; hidden: boolean };

export type LoginDataTypes = { email: string; password: string };

export type SignupDataTypes = { email: string; password: string; data: { full_name: string } };

export type AuthContextType = { authStatus: null | "LOADING" | "ERROR" | "OK" };

export interface actionInterface {
  type: string;
  payload: {
    query?: string;
    filterKey?: string;
    status?: string | boolean | number;
  };
}

export interface queryInterface {
  query?: string;
}

export type filterKeyInterface = {
  [filterKey: string]: string[] | string | boolean | number;
};

export type stateInterface = queryInterface & filterKeyInterface;

export type QueryParamsDataType = { queryString: string; queryObject: stateInterface };

export type QueryParamsFunctionsType = {
  search: (query: string) => void;
  applyOneFilter: (filterKey: string, status: string | boolean | number) => void;
  applySomeFilter: (filterKey: string, status: string) => void;
  clearFilter: (filterKey: string) => void;
};

type returnedFromHook = [QueryParamsDataType, QueryParamsFunctionsType];

export type queryParamsHook = () => returnedFromHook;
