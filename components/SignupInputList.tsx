import Btn from "./Btn";
import useAuth from "../hooks/useAuth";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MenuInput from "./MenuInput";

export default function SignupInputList() {
  const { signup } = useAuth();

  return (
    <Formik
      initialValues={{
        userName: "",
        userEmail: "",
        userPassword: "",
      }}
      validationSchema={Yup.object({
        userName: Yup.string().required("لطفا نام را وارد کنید"),
        userEmail: Yup.string().email("لطفا ایمیل را به درستی وارد نمایید").required("لطفا ایمیل را وارد کنید"),
        userPassword: Yup.string().required("لطفا رمز عبور را وارد کنید"),
      })}
      onSubmit={(values) => {
        const { userName, userEmail, userPassword } = values;
        signup(userEmail, userPassword, userName);
      }}
    >
      <Form className="w-full" autoComplete="off">
        <MenuInput name="userName" labelBody="نام کاربری: " type="text" />

        <MenuInput name="userEmail" labelBody="ایمیل:" type="email" />

        <MenuInput name="userPassword" labelBody="رمز عبور:" type="password" />

        <div className="pt-2 border-t-2 border-gray-100 flex justify-between">
          <Btn text="ثبت نام" type="secondary" width="w-full" />
        </div>
      </Form>
    </Formik>
  );
}
