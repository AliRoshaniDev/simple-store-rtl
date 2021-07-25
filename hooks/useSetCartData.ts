import { useContext, useMemo } from "react";
import { SetCartContext } from "../providers/CartProvider";
import { ProductItemType } from "../types/index";

function useSetCartData() {
  const dispatch = useContext(SetCartContext);
  const channel = useMemo(() => new BroadcastChannel("cart_data"), []);

  function deleteAll() {
    const actionCart = {
      type: "DELETE_ALL" as const,
    };
    channel.postMessage(actionCart);

    // dispatch!(actionCart);
  }

  function deleteOne(id: number) {
    const actionCart = {
      type: "DELETE_ONE" as const,
      payload: {
        id,
      },
    };
    channel.postMessage(actionCart);

    // dispatch!(actionCart);
  }

  function addOne(cartItem: ProductItemType) {
    // cartItem is a objcet of item(product) Which we want to add
    const actionCart = {
      type: "ADD_ONE" as const,
      payload: {
        ...cartItem,
        addedNumber: 1,
      },
    };
    channel.postMessage(actionCart);

    // dispatch!(actionCart);
  }

  return { deleteAll, deleteOne, addOne };
}

export default useSetCartData;
