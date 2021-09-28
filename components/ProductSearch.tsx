import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useQueryContext from "../hooks/useQueryContext";
import Btn from "./Btn";

export default function ProductSearch() {
  const { queryObject, applyOneFilter } = useQueryContext();

  function getQueryValue(): string {
    if (typeof queryObject["name_contains"] === "string") {
      return queryObject["name_contains"];
    } else {
      return "";
    }
  }

  return (
    <div className={`flex sm:mr-2 w-full mb-2 sm:mb-0 sm:w-72 rounded-lg bg-transparent`}>
      <Formik
        initialValues={{
          searchProducts: getQueryValue(),
        }}
        validationSchema={Yup.object({
          searchProducts: Yup.string().required("لطفا نام کالا را وارد کنید"),
        })}
        onSubmit={(values, actions) => {
          const { searchProducts } = values;
          if (queryObject["_start"] !== 0) applyOneFilter("_start", 0);
          applyOneFilter("name_contains", searchProducts);
        }}
      >
        <Form className="flex w-full sm:w-72">
          <Btn icon="/images/icons/search.svg" type="secondary" width="w-10" height="h-10" buttonStyle="border-r-0 rounded-r-none" iconStyle="flex items-center justify-center" />
          <Field name="searchProducts" type="text" className="w-full sm:w-72 h-10 border-2 border-l-0 border-gray-300 focus:border-mycolor-dark hover:border-mycolor-dark rounded-r-lg font-vazir-latin outline-none p-2" placeholder="جستجو" dir="rtl" />
        </Form>
      </Formik>
    </div>
  );
}
