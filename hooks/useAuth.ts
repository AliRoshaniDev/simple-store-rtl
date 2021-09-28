import axios from "axios";
import { useContext } from "react";
import { AuthContext, SetAuthContext } from "../providers/AuthProvider";
import Cookie from "js-cookie";

export default function useAuth() {
  const authData = useContext(AuthContext);
  const setAuthData = useContext(SetAuthContext);

  function login(email: string, password: string) {
    if (typeof window === "undefined") return;

    setAuthData((pre) => ({ ...pre, authStatus: "LOADING" }));

    axios
      .post("/auth/local", {
        identifier: email,
        password,
      }, {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL
      })
      .then((res) => {
        setAuthData({ ...res.data, authStatus: "LOGGED_IN" });
        Cookie.set("token", res.data.jwt);
      })
      .catch((err) => setAuthData((pre) => ({ ...pre, authStatus: "ERROR" })));
  }

  function signup(email: string, password: string, username: string) {
    if (typeof window === "undefined") return;

    setAuthData((pre) => ({ ...pre, authStatus: "LOADING" }));

    axios
      .post("/auth/local/register", {
        username,
        email,
        password,
      }, {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL
      })
      .then((res) => {
        setAuthData({ ...res.data, authStatus: "LOGGED_IN" });
        Cookie.set("token", res.data.jwt);
      })
      .catch((err) => setAuthData((pre) => ({ ...pre, authStatus: "ERROR" })));
  }

  function logout() {
    setAuthData({ authStatus: null });
    Cookie.remove("token");
  }

  return { login, signup, logout, setAuthData, authData };
}
