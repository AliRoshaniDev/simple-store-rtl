import useCartData from "../hooks/useCartData";

export default function useCartTotal() {
  const cartData = useCartData();

  function calcualteTotal(requestedData: "number" | "price") {
    let total = 0;
    for (let i = 0; i < cartData!.length; i++) {
      if (requestedData === "number") total += cartData![i].numberAdded;
      if (requestedData === "price") total += cartData![i].price;
    }
    return total;
  }

  return calcualteTotal;
}
