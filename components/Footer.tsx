import { ReactSVG } from "react-svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container mx-auto shadow-lg bg-white flex justify-center items-center rounded-xl h-16 px-2 xl:px-3">
        <div className="justify-self-end h-full cursor-pointer py-2 xl:py-3 relative">
          <div className={`flex items-center h-full bg-transparent hover:bg-mycolor-light border-2 border-gray-300 hover:border-mycolor-dark bg-white rounded-lg transition duration-200 ease-in-out px-3`}>
            <Image width={25} height={25} src="/images/icons/code.png" alt="code" />
            <span className="mx-2 font-bold text-xl">
              {" by"}
              <a href="https://github.com/alimoallem27" className="px-2 text-mycolor-dark underline">
                Ali Moallem
              </a>
              {"at "}
            </span>
            <Image width={22} height={22} src="/images/icons/moon.png" alt="code" />
          </div>
        </div>
      </div>
    </footer>
  );
}
