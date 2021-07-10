import { ReactSVG } from "react-svg";
import useAuth from "../hooks/useAuth";
import useFocusElement from "../hooks/useFocusElement";
import { LegacyRef } from "react";
import DropMenu from "./DropMenu";
import MenuProfileInfo from "./MenuProfileInfo";
import MenuAuth from "./MenuAuth";

export default function NavBarUser() {
  const { isLoggedIn, user } = useAuth();
  const [parentElement, childElement, userIsHover] = useFocusElement();

  return (
    <div ref={parentElement as LegacyRef<HTMLDivElement>} className="justify-self-end h-full cursor-pointer py-2 xl:py-3 relative">
      <div className={`flex items-center h-full bg-transparent hover:bg-mycolor-light ${userIsHover && "bg-mycolor-light"} rounded-lg transition duration-300 ease-in-out px-3`}>
        <span className="mr-2 hidden lg:inline">{user ? user!.user_metadata.full_name : "حساب کاربری"}</span>
        <ReactSVG src="/images/icons/person.svg" />
      </div>
      <div ref={childElement as LegacyRef<HTMLDivElement>}>
        <DropMenu hidden={!userIsHover} xAdjustment="top-13 -right-2" widthAdjustment="w-64 sm:w-72">
          {isLoggedIn ? <MenuProfileInfo /> : <MenuAuth />}
        </DropMenu>
      </div>
    </div>
  );
}
