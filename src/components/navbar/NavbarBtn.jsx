import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1a549ZO44vgaAAzVBFBHJfTmmgBKCBlAR/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="mr-6 px-4 py-2 rounded-full text-xl font-bold font-body text-black bg-white border-2 border-orange flex items-center gap-1  transition-all duration-500 hover:scale-110 hover:border-white cursor-pointer hover:text-black hover:bg-orange hover:shadow-cyanShadow"
    >
      Resume
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </a>
  );
};

export default NavbarBtn;
