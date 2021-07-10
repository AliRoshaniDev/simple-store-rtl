import { useIdentityContext } from "react-netlify-identity";

export default function useAuth() {
  const { signupUser, loginUser, isLoggedIn, user, logoutUser } = useIdentityContext();

  function login(email: string, password: string, remember: boolean = true) {
    loginUser(email, password, remember);
  }

  function signup(email: string, password: string, data: Object = {}, directLogin: boolean = true) {
    signupUser(email, password, data, directLogin);
  }

  function logout() {
    logoutUser();
  }

  return { login, signup, logout, isLoggedIn, user };
}
