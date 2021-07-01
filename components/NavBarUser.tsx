import { ReactSVG } from "react-svg";

export default function NavBarUser() {
  return (
    <div className="justify-self-end h-full cursor-pointer py-2 xl:py-3">
      <div className="flex items-center h-full bg-transparent hover:bg-mycolor-light rounded-lg transition duration-300 ease-in-out px-3">
        <span className="mr-2 hidden lg:inline">ورود</span>
        <ReactSVG src="/images/icons/person.svg" />
      </div>
    </div>
  );
}
