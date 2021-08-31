import { createContext, useState, useEffect } from "react";
import { ChildrenType, AuthContextType } from "../types/index";
import { SetStateAction, Dispatch } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { BASE_URL } from "../constants/index";

const intiAuthData = { authStatus: null };

export const AuthContext = createContext<AuthContextType>(intiAuthData);
export const SetAuthContext = createContext<Dispatch<SetStateAction<AuthContextType>> | undefined>(undefined);

export default function AuthProvider(props: ChildrenType) {
  const { children } = props;

  let [authData, setAuthData] = useState<AuthContextType>(intiAuthData);

  useEffect(() => {
    const token = Cookie.get("token");

    if (token) {
      axios
        .get(BASE_URL + "/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
