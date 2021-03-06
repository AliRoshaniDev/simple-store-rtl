import React, { ReactNode, Dispatch, SetStateAction } from "react";

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
  picture: [
    {
      id: number;
      name: string;
      formats: {
        medium: {
          url: string;
        };
        small: {
          url: string;
        };
      };
      url: string;
    }
  ];
};

export type SliderItemType = { id: number; picture: [{ url: string }]; pictureAlt: string };

export type ProductsDataType = ProductItemType[] | null;

export type CartItemType = {
  name: string;
  price: number;
  picture: [
    {
      id: number;
      url: string;
    }
  ];
  id: number;
  instock: boolean;
  addedNumber: number;
};

export type ActionCartType =
  | {
      type: "DELETE_ALL";
    }
  | {
      type: "DELETE_ONE";
      payload: {
        id: number;
      };
    }
  | {
      type: "ADD_ONE";
      payload: {
        name: string;
        price: number;
        picture: [
          {
            id: number;
            url: string;
          }
        ];
        id: number;
        instock: boolean;
        addedNumber: number;
      };
    };

// export type ActionCartType = {
//   type: "DELETE_ALL" | "DELETE_ONE" | "ADD_ONE";
//   payload?: {
//     name?: string;
//     price?: number;
//     picture?: [
//       {
//         id: number;
//         url: string;
//       }
//     ];
//     id: number;
//     instock?: boolean;
//     addedNumber?: number;
//   };
// };

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

export type AuthContextType =
  | {
      authStatus: null | "LOADING" | "ERROR";
    }
  | {
      authStatus: "LOGGED_IN";
      user: {
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

export type QueryParamAction =
  | {
      type: "ONE_FILTER";
      payload: {
        filterKey: string;
        status: string | boolean | number;
      };
    }
  | {
      type: "SOME_FILTER";
      payload: {
        filterKey: string;
        status: string;
      };
    }
  | {
      type: "CLEAR";
      payload: {
        filterKey: string;
      };
    };

// export type QueryParamAction = {
//   type: string;
//   payload: {
//     query?: string;
//     filterKey?: string;
//     status?: string | boolean | number;
//   };
// };

export type stateInterface = {
  [filterKey: string]: string[] | string | boolean | number;
};

export type QueryParamsDataType = { queryString: string; queryObject: stateInterface };

export type QueryParamsFunctionsType = {
  applyOneFilter: (filterKey: string, status: string | boolean | number) => void;
  applySomeFilter: (filterKey: string, status: string) => void;
  clearFilter: (filterKey: string) => void;
};

export type QueryParamsOutput = [QueryParamsDataType, QueryParamsFunctionsType];

export type ProductContextType = QueryParamsFunctionsType & QueryParamsDataType & { productsData: ProductsDataType; setProductsData: Dispatch<SetStateAction<ProductsDataType>> };
