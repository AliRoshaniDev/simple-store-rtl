import { ReactSVG } from "react-svg";
import useAuth from "../hooks/useAuth";
import useFocusElement from "../hooks/useFocusElement";
import { LegacyRef } from "react";
import DropMenu from "./DropMenu";
import MenuProfile from "./MenuProfile";
import MenuAuth from "./MenuAuth";
import MenuMessage from "./MenuMessage";

export default function NavBarUser() {
  const { isLoggedIn, user, authStatus } = useAuth();
  const [parentElement, childElement, userIsHover] = useFocusElement();

  return (
    <div ref={parentElement as LegacyRef<HTMLDivElement>} className="justify-self-end h-full cursor-pointer py-2 xl:py-3 relative">
      <div className={`flex items-center h-full bg-transparent hover:bg-mycolor-light ${userIsHover && "bg-mycolor-light"} rounded-lg transition duration-300 ease-in-out px-3`}>
        <span className="mr-2 hidden lg:inline font-vazir-latin">{user ? user!.user_metadata.full_name : "حساب کاربری"}</span>
        <ReactSVG src="/images/icons/person.svg" />
      </div>
      <div ref={childElement as LegacyRef<HTMLDivElement>}>
        <DropMenu hidden={!userIsHover} xAdjustment="top-13 -right-2" widthAdjustment="w-64 sm:w-72">
          {authStatus === "ERROR" && <MenuMessage icon="/images/icons/warning.svg" text="این ایمیل در سایت وجود دارد" />}
          {authStatus === "LOADING" && <MenuMessage icon="/images/icons/loading.svg" text="لطفا کمی صبر نمایید" spin={true} />}
          {isLoggedIn && authStatus !== "LOADING" ? <MenuProfile /> : authStatus === null && <MenuAuth />}
        </DropMenu>
      </div>
    </div>
  );
}
