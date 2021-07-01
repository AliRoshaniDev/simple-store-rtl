import Link from "next/link";
import { ReactSVG } from "react-svg";

export default function NavBarLogo() {
  return (
    <Link href="/">
      <a className="justify-self-center h-full rounded-lg cursor-pointer">
        <div className="flex items-center h-full">
          <span className="md:mr-2">فروشگاه ساده</span>
          <ReactSVG src="/images/icons/basket.svg" className="hidden md:inline" alt="basket logo" />
        </div>
      </a>
    </Link>
  );
}
