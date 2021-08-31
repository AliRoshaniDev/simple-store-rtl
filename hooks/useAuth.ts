import axios from "axios";
import { useContext } from "react";
import { AuthContext, SetAuthContext } from "../providers/AuthProvider";
import { BASE_URL } from "../constants/index";
import Cookie from "js-cookie";

export default function useAuth() {
  const authData = useContext(AuthContext);
  const setAuthData = useContext(SetAuthContext);

  function login(email: string, password: string) {
    if (!setAuthData || typeof window === "undefined") return;

    setAuthData((pre) => ({ ...pre, authStatus: "LOADING" }));

    axios
      .post(BASE_URL + "/auth/local", {
        identifier: email,
        password,
      })
      .then((res) => {
        setAuthData({ ...res.data, authStatus: "LOGGED_IN" });
        Cookie.set("token", res.data.jwt);
      })
      .catch((err) => setAuthData((pre) => ({ ...pre, authStatus: "ERROR" })));
  }

  function signup(email: string, password: string, username: string) {
    if (!setAuthData || typeof window === "undefined") return;

    setAuthData((pre) => ({ ...pre, authStatus: "LOADING" }));

    axios
      .post(BASE_URL + "/auth/local/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        setAuthData({ ...res.data, authStatus: "LOGGED_IN" });
        Cookie.set("token", res.data.jwt);
      })
      .catch((err) => setAuthData((pre) => ({ ...pre, authStatus: "ERROR" })));
  }

  function logout() {
    if (!setAuthData) return;

    setAuthData({ authStatus: null });
    Cookie.remove("token");
  }

  return { login, signup, logout, authData };
}
