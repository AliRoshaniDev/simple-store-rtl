import { useReducer, useEffect, useMemo, Dispatch } from "react";
import { CartItemType, ActionCartType } from "../types/index";

export default function useCartState(): [CartItemType[] | null, Dispatch<ActionCartType>] {
  function initialize() {
    return JSON.parse(localStorage.getItem("cart")!) || null;
  }

  function reducer(state: CartItemType[] | null, action: ActionCartType) {
    switch (action.type) {
      case "DELETE_ALL": {
        return null;
      }
      case "DELETE_ONE": {
        if (!state) return state;
        const { payload } = action;
        const filteredCart = [...state].filter((cartItem) => cartItem.id !== payload.id);
        return !filteredCart.length ? null : filteredCart;
      }
      case "ADD_ONE": {
        const { payload } = action;
        if (!state) {
          return [action.payload];
        } else if (state.find((cartItem) => cartItem.id === payload.id)) {
          return [...state].map((cartItem) => (cartItem.id === payload.id ? { ...cartItem, addedNumber: cartItem.addedNumber + 1 } : cartItem));
        } else {
          return [...state, payload];
        }
      }
      default:
        return state;
    }
  }

  const [cartState, dispatch] = useReducer(reducer, initialize());

  const channel = useMemo(() => new BroadcastChannel("cart_data"), []);

  useEffect(() => {
    channel.onmessage = (message) => dispatch(message.data);
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  return [cartState, dispatch];
}
