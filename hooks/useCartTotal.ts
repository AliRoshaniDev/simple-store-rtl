import useCartData from "../hooks/useCartData";

export default function useCartTotal() {
  const cartData = useCartData();

  return cartData!.reduce(
    (total, item) => {
      const { totalNumber, totalPrice } = total;
      const { addedNumber, price } = item;
      return { totalNumber: totalNumber + addedNumber, totalPrice: totalPrice + addedNumber * price };
    },
    { totalNumber: 0, totalPrice: 0 }
  );
}
