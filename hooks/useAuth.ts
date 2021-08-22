import { useContext } from "react";
import { useIdentityContext } from "react-netlify-identity";
import { AuthContext, SetAuthContext } from "../providers/AuthProvider";

export default function useAuth() {
  const { signupUser, loginUser, isLoggedIn, user, logoutUser, setUser } = useIdentityContext();

  const { authStatus } = useContext(AuthContext);
  const setAuthContext = useContext(SetAuthContext);

  function login(email: string, password: string, remember: boolean = true) {
    loginUser(email, password, remember).catch(() => setAuthStatus("ERROR"));
  }

  function signup(email: string, password: string, data: Object = {}, directLogin: boolean = false) {
    signupUser(email, password, data, directLogin)
      .then(() => loginUser(email, password, true).catch(() => setAuthStatus("ERROR")))
      .catch(() => setAuthStatus("ERROR"));
  }

  function logout() {
    try {
      logoutUser();
    } catch (error) {
      setUser(undefined);
    }
  }

  function setAuthStatus(inputValue: "LOADING" | "ERROR" | "OK" | null) {
    if (setAuthContext) setAuthContext((previousState) => ({ ...previousState, authStatus: inputValue }));
  }

  return { login, signup, logout, isLoggedIn, user, authStatus, setAuthStatus };
}
