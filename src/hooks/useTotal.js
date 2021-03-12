import useCartData from "../hooks/useCartData";

function useTotal() {
  const cartData = useCartData();

  function calcualteTotal(requestedData) {
    let total = 0;
    for (let i = 0; i < cartData.length; i++) {
      // const element = array[i];
      if (requestedData === "NUMBER") total += cartData[i].numberAdded;
      if (requestedData === "PRICE") total += cartData[i].price;
    }
    return total;
  }

  return calcualteTotal;
}

export default useTotal;
