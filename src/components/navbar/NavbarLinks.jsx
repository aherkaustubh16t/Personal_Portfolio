import { Link } from "react-scroll";
import "./Navbar.css";
const links = [
  { link: "Home", section: "hero" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "DSA", section: "dsa" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact Me", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col justify-center items-center sm:rounded-3xl gap-6 border sm:border-black md:text-xl text-[#F5F5DC] font-body lg:relative sm:absolute sm:top-[120%] text-center sm:left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:gap-6 sm:py-5 bg-black backdrop-blur-lg md:py-4 sm:w-full">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            activeClass="active"
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="cursor-pointer py-4 text-[#F5F5DC] hover:text-orange transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-orange w-0 group-hover:w-full h-[2px] transition-all duration-500 active-underline"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
