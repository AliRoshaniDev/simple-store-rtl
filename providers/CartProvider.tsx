import { createContext } from "react";
import useCartState from "../hooks/useCartState";
import { ChildrenType, CartDataType } from "../types/index";
import { SetStateAction, Dispatch } from "react";

export const CartContext = createContext<CartDataType | undefined>(undefined);
export const SetCartContext = createContext<Dispatch<SetStateAction<CartDataType>> | undefined>(undefined);

export default function CartProvider(props: ChildrenType) {
  const { children } = props;

  let [cartData, setCartData] = useCartState();

  return (
    <CartContext.Provider value={cartData}>
      <SetCartContext.Provider value={setCartData}>{children}</SetCartContext.Provider>
    </CartContext.Provider>
  );
}
