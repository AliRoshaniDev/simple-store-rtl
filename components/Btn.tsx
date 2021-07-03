import { BtnProps } from "../types/index";

export default function Btn(props: BtnProps) {
  const { onClick, text, type, size } = props;

  return (
    <button onClick={onClick} className={`${size === "full" ? "w-full" : size === "half" && "w-1/2-less"} h-10 ${type === "secondary" ? "text-mycolor-dark bg-mycolor-light border-2 border-mycolor-dark hover:text-mycolor-light hover:bg-mycolor-dark" : type === "primary" && "text-mycolor-light bg-mycolor-dark"} rounded-lg transition duration-200 ease-in-out`}>
      {text}
    </button>
  );
}
