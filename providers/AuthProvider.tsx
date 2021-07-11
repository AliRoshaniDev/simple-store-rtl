import { createContext, useState, useEffect } from "react";
import { ChildrenType, AuthContextType } from "../types/index";
import { SetStateAction, Dispatch } from "react";
import useAuth from "../hooks/useAuth";

export const AuthContext = createContext<AuthContextType>({ authIsLoading: false });
export const SetAuthContext = createContext<Dispatch<SetStateAction<AuthContextType>> | false>(false);

export default function AuthProvider(props: ChildrenType) {
  const { isLoggedIn } = useAuth();
  const { children } = props;

  let [authData, setAuthData] = useState<AuthContextType>({ authIsLoading: false });

  useEffect(() => {
    setAuthData((preState) => ({ ...preState, authIsLoading: false }));
  }, [isLoggedIn, setAuthData]);

  return (
    <AuthContext.Provider value={authData}>
      <SetAuthContext.Provider value={setAuthData}>{children}</SetAuthContext.Provider>
    </AuthContext.Provider>
  );
}
