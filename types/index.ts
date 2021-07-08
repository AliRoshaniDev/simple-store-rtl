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
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
  type: "primary" | "secondary";
  size: "full" | "half";
};

export type DropMenuProps = { xAdjustment: string; widthAdjustment: string };
