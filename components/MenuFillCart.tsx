import MenuFillCartItem from "./MenuFillCartItem";
import CartMenuTotal from "./CartMenuTotal";

import useCartData from "../hooks/useCartData";
import useWindowSize from "../hooks/useWindowSize";

export default function MenuFillCart() {
  const cartData = useCartData();
  const { height } = useWindowSize();

  return (
    <div>
      <div className={`${height <= 330 ? "max-h-32" : height <= 600 ? "max-h-60" : height <= 820 ? "max-h-96" : "max-h-112"} max-h-60 overflow-auto`}>
        {cartData!.map((item) => (
          <MenuFillCartItem {...item} key={item.id} />
        ))}
      </div>
      <CartMenuTotal />
    </div>
  );
}
