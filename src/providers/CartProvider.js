import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
export const SetCartContext = createContext();

function CartProvider({ children }) {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  let [cartData, setCartData] = useState(initialCart);

  const channel = React.useMemo(() => new BroadcastChannel("cart_data"), []);

  useEffect(() => {
    channel.onmessage = (message) => setCartData(message.data);
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData, channel]);

  return (
    <CartContext.Provider value={cartData}>
      <SetCartContext.Provider value={setCartData}>{children}</SetCartContext.Provider>
    </CartContext.Provider>
  );
}

export default CartProvider;
