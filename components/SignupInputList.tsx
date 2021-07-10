import { ChangeEvent } from "react";
import Btn from "./Btn";
import useAuth from "../hooks/useAuth";

export default function SignupInputList() {
  const { signup } = useAuth();

  const handleSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = (event.target.children[1] as HTMLInputElement).value;
    const emailValue = (event.target.children[3] as HTMLInputElement).value;
    const passwordValue = (event.target.children[5] as HTMLInputElement).value;

    signup(emailValue, passwordValue, { full_name: nameValue });
  };

  return (
    <form onSubmit={(event) => handleSubmitForm(event as ChangeEvent<HTMLFormElement>)}>
      <label htmlFor="name-input" className="ml-auto mb-1">
        نام:
      </label>
      <input type="text" required dir="ltr" id="name-input" className="border-2 border-gray-300 focus:border-gray-400 w-full h-10 rounded-lg font-vazir-latin mb-2 p-2 outline-none" />

      <label htmlFor="email-input" className="ml-auto mb-1">
        ایمیل:
      </label>
      <input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="لطفا مقدار ایمیل را به درستی وارد نمایید" dir="ltr" id="email-input" className="border-2 border-gray-300 focus:border-gray-400 w-full h-10 rounded-lg font-vazir-latin mb-2 p-2 outline-none" />

      <label htmlFor="password-input" className="ml-auto mb-1">
        رمز عبور:
      </label>
      <input type="password" required dir="ltr" title="لطفا رمز عبور را وارد نمایید" id="password-input" className="border-2 border-gray-300 focus:border-gray-400 w-full h-10 rounded-lg font-vazir-latin p-2 outline-none" />
      <div className="pt-2 border-t-2 border-gray-100 flex justify-between">
        <Btn text="ثبت نام" type="secondary" size="w-full" />
      </div>
    </form>
  );
}
