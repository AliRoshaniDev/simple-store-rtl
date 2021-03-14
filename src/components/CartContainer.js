import React from "react";

import DropMenu from "./DropMenu";
import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";

import useCartData from "../hooks/useCartData";

function CartContainer() {
  const cartData = useCartData();

  return (
    <>
      <DropMenu type="CART">
        {cartData.length > 0 && <FullCart />}
        {cartData.length === 0 && <EmptyCart />}
      </DropMenu>
    </>
  );
}

export default CartContainer;
