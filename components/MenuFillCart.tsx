import MenuFillCartItem from "./MenuFillCartItem";
import MenuFillCartTotal from "./MenuFillCartTotal";

import useCartData from "../hooks/useCartData";
import useWindowSize from "../hooks/useWindowSize";

export default function MenuFillCart() {
  const cartData = useCartData();
  const { height } = useWindowSize();

  let maxMenuHight: string;
  switch (true) {
    case height <= 330:
      maxMenuHight = "max-h-32";
      break;
    case height <= 600:
      maxMenuHight = "max-h-60";
      break;
    case height <= 820:
      maxMenuHight = "max-h-96";
      break;
    default:
      maxMenuHight = "max-h-112";
      break;
  }

  return (
    <div>
      <div className={`${maxMenuHight} max-h-60 overflow-auto`}>
        {cartData!.map((item) => (
          <MenuFillCartItem {...item} key={item.id} />
        ))}
      </div>
      <MenuFillCartTotal />
    </div>
  );
}
