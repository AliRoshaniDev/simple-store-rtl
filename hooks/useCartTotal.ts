import useCartData from "../hooks/useCartData";

export default function useCartTotal() {
  const cartData = useCartData();

  return cartData!.reduce(
    (total, item) => {
      return { totalNumber: total.totalNumber + item.numberAdded, totalPrice: total.totalPrice + item.price };
    },
    { totalNumber: 0, totalPrice: 0 }
  );
}
