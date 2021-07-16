import React, { ReactNode, MouseEvent } from "react";

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

export type BtnProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  text?: string;
  icon?: string;
  optionalStyle?: string;
  type: "primary" | "secondary";
  size: "w-full" | "w-1/2-less" | "w-10" | string;
  noBorder?: boolean;
};

export type DropMenuProps = { xAdjustment: string; widthAdjustment: string; hidden: boolean };

export type LoginDataTypes = { email: string; password: string };

export type SignupDataTypes = { email: string; password: string; data: { full_name: string } };

export type AuthContextType = { authStatus: null | "LOADING" | "ERROR" | "OK" };
