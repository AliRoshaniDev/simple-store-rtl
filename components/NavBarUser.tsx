import { ReactSVG } from "react-svg";
import useAuth from "../hooks/useAuth";
import useHoverElement from "../hooks/useHoverElement";
import { LegacyRef } from "react";
import DropMenu from "./DropMenu";
import MenuUserInfo from "./MenuUserInfo";
import MenuLoginInfo from "./MenuLoginInfo";

export default function NavBarUser() {
  const { authData, open, logout } = useAuth();
  const [element, userIsHover] = useHoverElement();

  return (
    <div ref={element as LegacyRef<HTMLDivElement>} className="justify-self-end h-full cursor-pointer py-2 xl:py-3 relative">
      <div className={`flex items-center h-full bg-transparent hover:bg-mycolor-light ${userIsHover && "bg-mycolor-light"} rounded-lg transition duration-300 ease-in-out px-3`}>
        <span className="mr-2 hidden lg:inline">{authData ? authData.user_metadata.full_name : "حساب کاربری"}</span>
        <ReactSVG src="/images/icons/person.svg" />
      </div>
      {userIsHover && <DropMenu type="user">{authData ? <MenuUserInfo /> : <MenuLoginInfo />}</DropMenu>}
    </div>
  );
}
