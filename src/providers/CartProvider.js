import React, { createContext } from "react";
import useCartState from "../hooks/useCartState";

export const CartContext = createContext();
export const SetCartContext = createContext();

function CartProvider({ children }) {
  let [cartData, setCartData] = useCartState();

  return (
    <CartContext.Provider value={cartData}>
      <SetCartContext.Provider value={setCartData}>{children}</SetCartContext.Provider>
    </CartContext.Provider>
  );
}

export default CartProvider;
