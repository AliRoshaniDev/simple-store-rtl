import React from "react";

import CartItem from "./CartItem";
import CartTotalItem from "./CartTotalItem";

import useCartData from "../hooks/useCartData";

function FullCart() {
  const cartData = useCartData();

  return (
    <>
      {cartData.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
      <CartTotalItem />
    </>
  );
}

export default FullCart;
