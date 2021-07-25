import { BadgeInputInterface } from "../types/index";

export default function Badge(props: BadgeInputInterface) {
  const { size, number } = props;
  return <div className={`${size === "big" ? "w-5 h-5" : "w-3 h-3"} absolute top-0 right-0 pt-0.5 bg-mycolor-dark text-xs rounded-md text-white flex items-center justify-center`}>{number ? number : ""}</div>;
}
