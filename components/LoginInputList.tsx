import { ChangeEvent, useEffect } from "react";
import Btn from "./Btn";
import useAuth from "../hooks/useAuth";

export default function LoginInputList() {
  const { login, setAuthStatus } = useAuth();

  const handleSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailValue = (event.target.children[1] as HTMLInputElement).value;
    const passwordValue = (event.target.children[3] as HTMLInputElement).value;
    setAuthStatus("LOADING");
    login(emailValue, passwordValue);
  };

  return (
    <form onSubmit={(event) => handleSubmitForm(event as ChangeEvent<HTMLFormElement>)}>
      <label htmlFor="email-input" className="ml-auto mb-1">
        ایمیل:
      </label>
      <input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="لطفا مقدار ایمیل را به درستی وارد نمایید" dir="ltr" id="email-input" className="border-2 border-gray-300 focus:border-gray-400 w-full h-10 rounded-lg font-vazir-latin mb-2 p-2 outline-none" />
      <label htmlFor="password-input" className="ml-auto mb-1">
        رمز عبور:
      </label>
      <input type="password" required id="password-input" title="لطفا رمز عبور را وارد نمایید" dir="ltr" className="border-2 border-gray-300 focus:border-gray-400 w-full h-10 mb-2 rounded-lg font-vazir-latin p-2 outline-none" />
      <div className="pt-2 border-t-2 border-gray-100 flex justify-between">
        <Btn text="ورود" type="primary" size="w-full" />
      </div>
    </form>
  );
}
