import { useField } from "formik";

type MenuInputProps = {
  name: string;
  type: string;
  labelBody: string;
};

export default function MenuInput(props: MenuInputProps) {
  const [field, meta] = useField(props);
  console.log(meta);

  const { name, type, labelBody } = props;

  return (
    <div className="w-full mb-2">
      <label htmlFor={name} className="ml-auto">
        {labelBody}
      </label>
      <input type={type} dir="auto" className={`${meta.touched && meta.error ? "border-red-500" : ""} border-2 border-gray-300 focus:border-gray-400 w-full h-10 rounded-lg font-vazir-latin outline-none mt-1 p-2 `} {...field} />
      {meta.touched && meta.error && <div className="text-red-500 text-sm">{meta.error}</div>}
    </div>
  );
}
