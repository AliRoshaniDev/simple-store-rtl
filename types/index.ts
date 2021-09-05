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
  id: number;
  name: string;
  price: number;
  instock: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  picture: [
    {
      id: number;
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: {
        medium: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          path: any;
          url: string;
        };
        small: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          path: any;
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: any;
      provider: string;
      provider_metadata: any;
      created_at: string;
      updated_at: string;
    }
  ];
};

export type sliderItemType = { id: number; picture: [{ url: string }]; pictureAlt: string };

export type ProductsDataType = { products: ProductItemType[] | undefined };

export type CartItemType = {
  name: string;
  price: number;
  picture: [
    {
      height: number;
      id: number;
      name: string;
      provider: string;
      size: number;
      updated_at: string;
      url: string;
      width: number;
    }
  ];
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

export type AuthContextType = {
  authStatus: null | "LOADING" | "ERROR" | "LOGGED_IN";
  user?: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: {
      id: number;
      name: string;
      description: string;
      type: string;
    };
    created_at: string;
    updated_at: string;
  };
};

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

export type returnedFromHook = [QueryParamsDataType, QueryParamsFunctionsType];

export type queryParamsHook = () => returnedFromHook;
