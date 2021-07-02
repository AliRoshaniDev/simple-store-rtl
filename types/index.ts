import { ReactNode } from "react";

export interface BadgeInputInterface {
  number: number;
  size: "big" | "small";
}

export type CartDataType = {
  name: string;
  price: number;
  numberAdded: number;
  picture: string;
  id: 4;
}[];

export type ProductType = {
  name: string;
  price: number;
  numberAdded: number;
  picture: string;
  id: 4;
};

export type ChildrenType = {
  children: ReactNode;
};

export interface AuthProps {
  token: {
    access_token: string;
  };
  user_metadata: {
    full_name: string;
  };
}
