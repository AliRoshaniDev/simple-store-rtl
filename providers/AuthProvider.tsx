import { createContext, useState, useEffect } from "react";
import { ChildrenType } from "../types/index";
import { SetStateAction, Dispatch } from "react";
import netlifyIdentity, { User } from "netlify-identity-widget";

export const AuthContext = createContext<User | null>(null);
export const SetAuthContext = createContext<Dispatch<SetStateAction<User>> | null>(null);
// export const SetAuthContext = createContext<Dispatch<SetStateAction<AuthProps>>>(Object as Dispatch<SetStateAction<AuthProps>>);

export default function AuthProvider(props: ChildrenType) {
  const { children } = props;

  let [authData, setAuthData] = useState<User | null>(null);

  useEffect(() => {
    netlifyIdentity.on("logout", () => {
      setAuthData(null);
      console.log("logout Event");
    });

    netlifyIdentity.on("login", (user: User) => {
      setAuthData(user);
      netlifyIdentity.close();
      console.log("login Event");
    });

    netlifyIdentity.on("init", (user: User | null) => {
      setAuthData(user);
      console.log("init Event");
    });

    // init netlify identity connection
    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("init");
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  return (
    <AuthContext.Provider value={authData}>
      <SetAuthContext.Provider value={setAuthData as Dispatch<SetStateAction<User>>}>{children}</SetAuthContext.Provider>
    </AuthContext.Provider>
  );
}
