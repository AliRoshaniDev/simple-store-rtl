import { createContext, useState, useEffect } from "react";
import { ChildrenType, AuthContextType } from "../types/index";
import { SetStateAction, Dispatch } from "react";
import Cookie from "js-cookie";
import axios from "axios";

export const AuthContext = createContext<AuthContextType>({ authStatus: null });
export const SetAuthContext = createContext<Dispatch<SetStateAction<AuthContextType>>>({} as Dispatch<SetStateAction<AuthContextType>>);

export default function AuthProvider(props: ChildrenType) {
  const { children } = props;

  let [authData, setAuthData] = useState<AuthContextType>({ authStatus: null });

  useEffect(() => {
    const token = Cookie.get("token");

    if (token) {
      axios
        .get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          baseURL: process.env.NEXT_PUBLIC_BASE_URL
        })
        .then((res) => {
          if (res.statusText === "OK") {
            setAuthData({ user: res.data, authStatus: "LOGGED_IN" });
          } else {
            Cookie.remove("token");
          }
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={authData}>
      <SetAuthContext.Provider value={setAuthData}>{children}</SetAuthContext.Provider>
    </AuthContext.Provider>
  );
}
