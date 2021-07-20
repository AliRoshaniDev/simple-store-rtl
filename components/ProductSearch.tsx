import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useQueryContext from "../hooks/useQueryContext";
import Btn from "./Btn";

export default function ProductSearch() {
  const { search } = useQueryContext();

  return (
    <div className={`flex sm:mr-2 w-full mb-2 sm:mb-0 sm:w-72 rounded-lg bg-transparent`}>
      <Formik
        initialValues={{
          searchProducts: "",
        }}
        validationSchema={Yup.object({
          searchProducts: Yup.string().required("لطفا نام کالا را وارد کنید"),
        })}
        onSubmit={(values) => {
          const { searchProducts } = values;
          if (!search) return;
          search(searchProducts);
        }}
      >
        <Form className="flex w-full sm:w-72">
          <Btn icon="/images/icons/search.svg" type="secondary" width="w-10" height="h-10" optionalStyle="border-r-0 rounded-r-none" />
          <Field name="searchProducts" type="text" className="w-full sm:w-72 h-10 border-2 border-l-0 border-gray-300 focus:border-mycolor-dark rounded-r-lg font-vazir-latin outline-none p-2" placeholder="جستجو" dir="rtl" />
        </Form>
      </Formik>
    </div>
  );
}

/////////////////////////////
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import useQueryContext from "../hooks/useQueryContext";
// import Btn from "./Btn";

// export default function ProductSearch() {
//   const { search } = useQueryContext();

//   return (
//     <div className={`flex sm:mr-2 w-full mb-2 sm:mb-0 sm:w-72 p-2 rounded-lg bg-transparent hover:bg-mycolor-light cursor-pointer transition duration-300 ease-in-out`}>
//       <Formik
//         initialValues={{
//           searchProducts: "",
//         }}
//         validationSchema={Yup.object({
//           searchProducts: Yup.string().required("لطفا نام کالا را وارد کنید"),
//         })}
//         onSubmit={(values) => {
//           const { searchProducts } = values;
//           if (!search) return;
//           search(searchProducts);
//         }}
//       >
//         <Form className="flex w-full">
//           <Btn icon="/images/icons/search.svg" type="secondary" width="w-10" height="h-6" noBorder={true} />
//           <Field
//             name="searchProducts"
//             type="text"
//             className="ml-2 outline-none rounded-md w-full"
//             placeholder="جستجو"
//             dir="rtl"
//           />
//         </Form>
//       </Formik>
//     </div>
//   );
// }
