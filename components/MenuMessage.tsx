import { ReactSVG } from "react-svg";
import useAuth from "../hooks/useAuth";
import Btn from "./Btn";

export default function MenuMessage(props: { icon: string; text: string; spin?: boolean }) {
  const { authData, setAuthData } = useAuth();
  const { icon, text, spin } = props;

  const handleCloseClick = () => {
    setAuthData((pre) => ({ ...pre, authStatus: null }));
  };

  return (
    <div>
      {authData.authStatus !== "LOADING" && <Btn onClick={handleCloseClick} icon="/images/icons/close.svg" type="secondary" width="w-10" buttonStyle="mr-auto" noBorder={true} />}
      <div className="min-h-48 flex flex-col items-center justify-center">
        <ReactSVG src={icon} className={`w-12 h-12 fill-current text-mycolor-dark ${spin && "animate-spin"}`} />
        <span className="mt-6 text-sm md:text-base text-gray-600">{text}</span>
      </div>
    </div>
  );
}
