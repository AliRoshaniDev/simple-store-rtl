import { useState } from "react";
import Btn from "./Btn";
import useAuth from "../hooks/useAuth";
import EmojiAndText from "./EmojiAndText";
import LoginInputList from "./LoginInputList";
import SignupInputList from "./SignupInputList";

export default function MenuAuth() {
  const [userStatus, setUserStatus] = useState<"login" | "signup" | null>(null);

  return (
    <div className="overflow-auto">
      <div className="min-h-48 text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800">
        <div className="flex flex-col py-2 pb-0 h-full">
          <div className="flex flex-col items-center">
            {userStatus === null && <EmojiAndText text="لطفا وارد شوید یا ثبت نام کنید" emoji="/images/icons/smile.png" />}
            {userStatus !== null && <Btn onClick={() => setUserStatus(null)} icon="/images/..." type="secondary" size="w-10" optionalStyle="mr-auto" noBorder={true} />}
            {userStatus === "login" && <LoginInputList />}
            {userStatus === "signup" && <SignupInputList />}
          </div>
        </div>
      </div>
      {userStatus === null && (
        <div className="pt-2 border-t-2 border-gray-100 flex justify-between">
          <Btn onClick={() => setUserStatus("login")} text="ورود" type="primary" size="w-1/2-less" />
          <Btn onClick={() => setUserStatus("signup")} text="ثبت نام" type="secondary" size="w-1/2-less" />
        </div>
      )}
    </div>
  );
}
