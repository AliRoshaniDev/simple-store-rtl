import { useState } from "react";
import Btn from "./Btn";
import useAuth from "../hooks/useAuth";
import EmojiAndText from "./EmojiAndText";
import LoginInputList from "./LoginInputList";
import { LoginDataTypes, SignupDataTypes } from "../types/index";
import SignupInputList from "./SignupInputList";

export default function MenuLoginInfo() {
  const [loginInputs, setLoginInputs] = useState<LoginDataTypes>({ email: "null", password: "null" });
  const [signupInputs, setSignupInputs] = useState<SignupDataTypes>({ email: "null", password: "null", data: { full_name: "null" } });

  const { login, signup } = useAuth();
  const [userStatus, setUserStatus] = useState<"login" | "signup" | null>(null);

  return (
    <div className="overflow-auto">
      <div className="min-h-48 text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800">
        <div className="flex flex-col py-2 h-full">
          <div className="flex flex-col items-center">
            {userStatus === null && <EmojiAndText text="لطفا وارد شوید یا ثبت نام کنید" emoji="/images/icons/smile.png" />}
            {userStatus !== null && <Btn onClick={() => setUserStatus(null)} icon="/images/..." type="secondary" size="w-10" optionalStyle="mr-auto" noBorder={true} />}
            {userStatus === "login" && <LoginInputList setLoginInputs={setLoginInputs} />}
            {userStatus === "signup" && <SignupInputList setSignupInputs={setSignupInputs} />}
          </div>
        </div>
      </div>
      <div className="pt-2 border-t-2 border-gray-100 flex justify-between">
        {userStatus !== "signup" && <Btn onClick={userStatus === null ? () => setUserStatus("login") : () => login(loginInputs.email, loginInputs.password)} text="ورود" type="primary" size={userStatus === "login" ? "w-full" : "w-1/2-less"} />}
        {userStatus !== "login" && <Btn onClick={userStatus === null ? () => setUserStatus("signup") : () => signup(signupInputs.email, signupInputs.password, signupInputs.data)} text="ثبت نام" type="secondary" size={userStatus === "signup" ? "w-full" : "w-1/2-less"} />}
      </div>
    </div>
  );
}
