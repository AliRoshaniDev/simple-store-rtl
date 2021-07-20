import { BtnProps } from "../types/index";
import { ReactSVG } from "react-svg";

export default function Btn(props: BtnProps) {
  const { onClick, text, icon, type, width, height, noBorder, optionalStyle } = props;

  return (
    <button onClick={onClick} className={`${width} ${optionalStyle ? optionalStyle : ""} ${height ? height : "h-10"} ${type === "secondary" ? `text-mycolor-dark bg-mycolor-light ${!noBorder && "border-2 border-mycolor-dark"} hover:text-mycolor-light hover:bg-mycolor-dark` : type === "primary" && "text-mycolor-light bg-mycolor-dark"} rounded-lg group transition duration-200 ease-in-out flex justify-center items-center`}>
      {icon ? <ReactSVG src={icon} className="w-4 h-4 fill-current text-mycolor-dark group-hover:text-mycolor-light transition duration-200 ease-in-out flex justify-center items-center" /> : text}
    </button>
  );
}
