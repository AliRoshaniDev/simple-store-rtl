type ProductMenuCheckPropsType = {
  text: string;
  checked: boolean | undefined;
  onChange: () => void;
};

export default function ProductMenuCheck(props: ProductMenuCheckPropsType) {
  const { text, checked, onChange } = props;
  return (
    <label className={`block text-right p-1 cursor-pointer whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:bg-mycolor-light hover:text-mycolor-dark`}>
      <div className="px-2 py-1 flex items-center">
        <input type="checkbox" className="w-4 h-4 ml-2" checked={checked} onChange={() => onChange()} />
        <span className="select-none">{text}</span>
      </div>
    </label>
  );
}
