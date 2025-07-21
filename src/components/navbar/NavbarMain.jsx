import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="w-full fixed z-20 left-1/2 -translate-x-1/2 px-4 mt-2 cursor-default">
      <div className="max-w-[1300px] mx-auto flex items-center  justify-between bg-black p-2 sm:p-4 rounded-full border border-orange backdrop-blur-lg">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
        <div className="ml-4 flex lg:hidden sm:block p-1 bg-orange items-center justify-center rounded-full border border-orange">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
