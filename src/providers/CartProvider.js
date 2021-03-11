import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const SetCartContext = createContext();

function UserProvider({ children }) {
  // const initialCart = { name: "", price: 0, number: 0 , picture: "/images/unknown.png" };
  const initialCart = [];

  let [cartData, setCartData] = useState(initialCart);

  //   useEffect(() => {
  //     fetch("http://localhost:3001/user")
  //       .then((res) => res.json())
  //       .then((userInfo) => setUserData(userInfo));
  //   }, []);

  return (
    <CartContext.Provider value={cartData}>
      <SetCartContext.Provider value={setCartData}>{children}</SetCartContext.Provider>
    </CartContext.Provider>
  );
}

export default UserProvider;
