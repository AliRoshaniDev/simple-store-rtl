import Btn from "./Btn";
import useAuth from "../hooks/useAuth";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MenuInput from "./MenuInput";

export default function LoginInputList() {
  const { login, setAuthStatus } = useAuth();

  return (
    <Formik
      initialValues={{
        userEmail: "",
        userPassword: "",
      }}
      validationSchema={Yup.object({
        userEmail: Yup.string().email("لطفا ایمیل را به درستی وارد نمایید").required("لطفا ایمیل را وارد کنید"),
        userPassword: Yup.string().required("لطفا رمز عبور را وارد کنید"),
      })}
      onSubmit={(values) => {
        const { userEmail, userPassword } = values;
        setAuthStatus("LOADING");
        login(userEmail, userPassword);
      }}
    >
      <Form className="w-full" autoComplete="off">
        <MenuInput name="userEmail" labelBody="ایمیل:" type="email" />

        <MenuInput name="userPassword" labelBody="رمز عبور:" type="password" />

        <div className="pt-2 border-t-2 border-gray-100 flex justify-between">
          <Btn text="ورود" type="primary" width="w-full" />
        </div>
      </Form>
    </Formik>
  );
}
