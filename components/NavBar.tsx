import NavBarLogo from "./NavBarLogo";
import NavBarUser from "./NavBarUser";
import NavBarCart from "./NavBarCart";

export default function NavBar() {
  return (
    <nav className="w-full mb-5 2xl:px-12">
      <div className="container mx-auto shadow-lg bg-white grid grid-cols-3 rounded-xl h-16 px-2 xl:px-3">
        <NavBarCart />
        <NavBarLogo />
        <NavBarUser />
      </div>
    </nav>
  );
}
