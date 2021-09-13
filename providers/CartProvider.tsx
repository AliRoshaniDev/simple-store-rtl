import { createContext } from "react";
import useCartState from "../hooks/useCartState";
import { ChildrenType, CartItemType, ActionCartType } from "../types/index";
import { Dispatch } from "react";

export const CartContext = createContext<CartItemType[] | null>(null);
export const SetCartContext = createContext<Dispatch<ActionCartType> | null>(null);

export default function CartProvider(props: ChildrenType) {
  const { children } = props;

  let [cartData, dispatch] = useCartState();

  return (
    <CartContext.Provider value={cartData}>
      <SetCartContext.Provider value={dispatch}>{children}</SetCartContext.Provider>
    </CartContext.Provider>
  );
}
