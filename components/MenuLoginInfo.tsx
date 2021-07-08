import Image from "next/image";
import Btn from "./Btn";
import useAuth from "../hooks/useAuth";

export default function MenuLoginInfo() {
  const { open } = useAuth();

  return (
    <div className="overflow-auto">
      <div className="text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800">
        <div className="flex flex-col px-2 py-2 h-full">
          <div className="flex flex-col items-center">
            <div className="w-24 my-6">
              <Image src="/images/icons/smile.png" height={100} width={100} alt="Sad emoji" />
            </div>
            <span>لطفا وارد شوید یا ثبت نام کنید</span>
          </div>
        </div>
      </div>
      <div className="pt-2 border-t-2 border-gray-100 flex justify-between">
        <Btn onClick={() => open("login")} text="ورود" type="primary" size="half" />
        <Btn onClick={() => open("signup")} text="ثبت نام" type="secondary" size="half" />
      </div>
    </div>
  );
}
