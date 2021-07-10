import { Dispatch, SetStateAction } from "react";
import { SignupDataTypes } from "../types/index";

export default function SignupInputList(props: { setSignupInputs: Dispatch<SetStateAction<SignupDataTypes>> }) {
  const { setSignupInputs } = props;
  return (
    <>
      <label htmlFor="name-input" className="ml-auto mb-1">
        نام:
      </label>
      <input type="text" dir="ltr" id="name-input" onChange={(event) => setSignupInputs((preState) => ({ ...preState, data: { full_name: event.target.value } }))} className="border-2 border-gray-300 focus:border-gray-400 w-full h-10 rounded-lg font-vazir-latin mb-2 p-2 outline-none" />

      <label htmlFor="email-input" className="ml-auto mb-1">
        ایمیل:
      </label>
      <input type="email" dir="ltr" id="email-input" onChange={(event) => setSignupInputs((preState) => ({ ...preState, email: event.target.value }))} className="border-2 border-gray-300 focus:border-gray-400 w-full h-10 rounded-lg font-vazir-latin mb-2 p-2 outline-none" />

      <label htmlFor="password-input" className="ml-auto mb-1">
        رمز عبور:
      </label>
      <input type="password" dir="ltr" id="password-input" onChange={(event) => setSignupInputs((preState) => ({ ...preState, password: event.target.value }))} className="border-2 border-gray-300 focus:border-gray-400 w-full h-10 rounded-lg font-vazir-latin p-2 outline-none" />
    </>
  );
}
