import { Link } from "react-scroll";
import SocialIcons from "../heroSection/SocialIcons";

const footerLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "DSA", to: "dsa" },  
  { label: "Experience", to: "experience" }, 
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
]; 

const FooterMain = () => {
  return (
    <footer className="bg-black text-white px-6 sm:px-12 py-10 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide font-customSerif">
          <span className="text-orange ">KAUSTUBH AHER </span>
          Portfolio
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-gray-300">
          {footerLinks.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
                className="cursor-pointer hover:text-orange transition-colors duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <SocialIcons />
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 border-t border-gray-700 pt-4 w-full text-center">
          © {new Date().getFullYear()} Kaustubh Aher. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;
