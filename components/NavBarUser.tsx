import { ReactSVG } from "react-svg";
import useAuth from "../hooks/useAuth";
import useFocusElement from "../hooks/useFocusElement";
import { LegacyRef } from "react";
import DropMenu from "./DropMenu";
import MenuProfile from "./MenuProfile";
import MenuAuth from "./MenuAuth";
import MenuMessage from "./MenuMessage";

export default function NavBarUser() {
  const { authData } = useAuth();
  const [parentElement, childElement, userIsHover] = useFocusElement();

  return (
    <div ref={parentElement as LegacyRef<HTMLDivElement>} className="justify-self-end h-full cursor-pointer py-2 xl:py-3 relative">
      <div className={`flex items-center h-full bg-transparent hover:bg-mycolor-light border-2 border-gray-300 hover:border-mycolor-dark ${userIsHover && "bg-mycolor-light  border-2 border-mycolor-dark"} rounded-lg transition duration-200 ease-in-out px-3`}>
        <span className="mr-2 hidden lg:inline font-vazir-latin">{authData.authStatus === "LOGGED_IN" ? authData.user.username : "حساب کاربری"}</span>
        <ReactSVG src="/images/icons/person.svg" />
      </div>
      <div ref={childElement as LegacyRef<HTMLDivElement>}>
        <DropMenu hidden={!userIsHover} xAdjustment="top-13 -right-2" widthAdjustment="w-64 sm:w-72">
          {authData.authStatus === "ERROR" && <MenuMessage icon="/images/icons/warning.svg" text="خطایی رخ داده است" />}
          {authData.authStatus === "LOADING" && <MenuMessage icon="/images/icons/loading.svg" text="لطفا کمی صبر نمایید" spin={true} />}
          {authData.authStatus === "LOGGED_IN" && <MenuProfile />}
          {authData.authStatus === null && <MenuAuth />}
        </DropMenu>
      </div>
    </div>
  );
}
