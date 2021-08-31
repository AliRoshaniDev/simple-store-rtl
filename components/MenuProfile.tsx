import Image from "next/image";
import useAuth from "../hooks/useAuth";
import Btn from "./Btn";

export default function MenuProfile() {
  const { authData, logout } = useAuth();

  const { user } = authData;

  return (
    <div className="max-h-60 overflow-auto">
      <div className="h-14 mb-1 text-right w-full whitespace-no-wrap rounded-lg text-base text-gray-600 hover:text-gray-800 hover:bg-mycolor-light transition duration-200 ease-in-out">
        <div className="flex h-full">
          <figure className="h-14 w-14 relative">
            <Image className="rounded-lg" layout="fill" objectFit="cover" src="/images/others/default-profile.png" alt="profile picture" />
          </figure>
          <div className="w-userItemText flex flex-col pr-2">
            <span className="whitespace-nowrap text-gray-700 overflow-hidden font-vazir-latin">{user?.username}</span>
            <span dir="ltr" className="text-gray-400 font-vazir-latin whitespace-nowrap truncate">
              {user?.email}
            </span>
          </div>
        </div>
      </div>
      <div className="pt-2 border-t-2 border-gray-100">
        <Btn onClick={() => logout()} text="خروج از حساب" type="secondary" width="w-full" />
      </div>
    </div>
  );
}
