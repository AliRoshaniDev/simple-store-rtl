import { useContext } from "react";
import { useIdentityContext } from "react-netlify-identity";
import { AuthContext, SetAuthContext } from "../providers/AuthProvider";

export default function useAuth() {
  const { signupUser, loginUser, isLoggedIn, user, logoutUser } = useIdentityContext();

  const { authIsLoading } = useContext(AuthContext);
  const setAuthContext = useContext(SetAuthContext);

  function login(email: string, password: string, remember: boolean = true) {
    loginUser(email, password, remember);
  }

  function signup(email: string, password: string, data: Object = {}, directLogin: boolean = true) {
    signupUser(email, password, data, directLogin);
  }

  function logout() {
    logoutUser();
  }

  function setAuthIsLoading(inputValue: boolean) {
    if (setAuthContext) setAuthContext((previousState) => ({ ...previousState, authIsLoading: inputValue }));
  }

  return { login, signup, logout, isLoggedIn, user, authIsLoading, setAuthIsLoading };
}
