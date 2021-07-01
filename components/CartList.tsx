import useCartData from "../hooks/useCartData";
import DropMenu from "./DropMenu";
import EmptyCartList from "./EmptyCartList";
import FillCartList from "./FillCartList";

export default function CartList() {
  const cartData = useCartData();

  return (
    <>
      <DropMenu type="cart">{!cartData ? <EmptyCartList /> : <FillCartList />}</DropMenu>
    </>
  );
}
