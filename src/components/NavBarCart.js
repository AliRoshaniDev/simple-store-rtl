import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import CartBadge from "./CartBadge";
import CartContainer from "./CartContainer";
import useCartData from "../hooks/useCartData";

import cartIco from "../assets/images/svg/cart.svg";

function NavBarCart() {
  const [cartIsHover, setCartIsHover] = useState(false);
  const cartData = useCartData();

  return (
    <div
      onMouseEnter={() => {
        setCartIsHover(true);
      }}
      onMouseLeave={() => {
        setCartIsHover(false);
      }}
      className="justify-self-start h-full cursor-pointer py-2 xl:py-3 relative"
    >
      <div className={`flex items-center relative h-full bg-transparent hover:bg-mycolor-light ${cartIsHover && "bg-mycolor-light"} rounded-lg transition duration-300 ease-in-out px-3`}>
        {cartData.length > 0 && <CartBadge number={cartData.length} />}
        <span className="mr-2 hidden lg:inline">سبد خرید</span>
        <ReactSVG src={cartIco} />
      </div>
      {cartIsHover && <CartContainer />}
    </div>
  );
}

export default NavBarCart;
