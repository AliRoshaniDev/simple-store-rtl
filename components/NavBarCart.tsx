import { ReactSVG } from "react-svg";

import { LegacyRef } from "react";

import Badge from "./Badge";
import CartList from "./CartList";
import useCartData from "../hooks/useCartData";
import useHoverElement from "../hooks/useHoverElement";

export default function NavBarCart() {
  const [element, cartIsHover] = useHoverElement();
  const cartData = useCartData();

  return (
    <div ref={element as LegacyRef<HTMLDivElement>} className="justify-self-start h-full cursor-pointer py-2 xl:py-3 relative">
      <div className={`flex items-center relative h-full bg-transparent hover:bg-mycolor-light ${cartIsHover && "bg-mycolor-light"} rounded-lg transition duration-300 ease-in-out px-3`}>
        {cartData && <Badge number={cartData.length} size="big" />}
        <span className="mr-2 hidden lg:inline">سبد خرید</span>
        <ReactSVG src="/images/icons/cart.svg" />
      </div>
      {cartIsHover && <CartList />}
    </div>
  );
}
