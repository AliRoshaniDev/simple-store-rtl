import { ReactSVG } from "react-svg";
import useAuth from "../hooks/useAuth";
import Btn from "./Btn";

export default function MenuMessage(props: { icon: string; text: string; spin?: boolean }) {
  const { authStatus, setAuthStatus } = useAuth();
  const { icon, text, spin } = props;

  return (
    <div>
      {authStatus !== "LOADING" && <Btn onClick={() => setAuthStatus(null)} icon="/images/icons/close.svg" type="secondary" size="w-10" optionalStyle="mr-auto" noBorder={true} />}
      <div className="min-h-48 flex flex-col items-center justify-center">
        <ReactSVG src={icon} className={`w-12 h-12 fill-current text-mycolor-dark ${spin && "animate-spin"}`} />
        <span className="mt-6 text-sm md:text-base text-gray-600">{text}</span>
      </div>
    </div>
  );
}
