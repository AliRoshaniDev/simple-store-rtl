import Image from "next/image";
import useAuth from "../hooks/useAuth";
import Btn from "./Btn";

export default function MenuUserInfo() {
  const { authData, logout } = useAuth();

  return (
    <div className="max-h-60 overflow-auto">
      <div className="h-14 mb-1 text-right w-full whitespace-no-wrap rounded-lg text-base text-gray-600 hover:text-gray-800 hover:bg-mycolor-light transition duration-200 ease-in-out">
        <div className="flex h-full">
          <figure className="h-14 w-14">
            <Image className="object-cover h-14 w-full rounded-lg" src="/images/others/default-profile.png" width={56} height={56} alt="prifle picture" />
          </figure>
          <div className="w-userItemText flex flex-col pr-2">
            <span className="whitespace-nowrap text-gray-700 overflow-hidden font-vazir-latin">{authData!.user_metadata.full_name}</span>
            <span className="text-gray-400 font-vazir-lati">{authData!.email}</span>
          </div>
        </div>
      </div>
      <div className="pt-2 border-t-2 border-gray-100">
        <Btn onClick={() => logout()} text="خروج از حساب" type="secondary" size="full" />
      </div>
    </div>
  );
}
