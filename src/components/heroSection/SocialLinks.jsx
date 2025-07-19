// components/common/SocialLinks.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const links = [
  {
    href: "https://github.com/aherkaustubh16t",
    label: "GitHub",
    icon: <FaGithub />,
    color: "text-orange-400",
  },
  {
    href: "https://www.linkedin.com/in/aherkaustubh16/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    color: "text-blue-500",
  },
  {
    href: "https://www.instagram.com/aher_kaustubh_16/",
    label: "Instagram",
    icon: <FaInstagram />,
    color: "text-pink-500",
  },
  {
    href: "https://leetcode.com/u/aherkaustubh16t/",
    label: "LeetCode",
    icon: <SiLeetcode />,
    color: "text-yellow-500",
  },
  {
    href: "https://www.codechef.com/users/kaustubh16t",
    label: "CodeChef",
    icon: <SiCodechef />,
    color: "text-purple-500",
  },
];

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex gap-5 mt-4 text-2xl ${className}`}>
      {links.map(({ href, label, icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative group ${color} hover:text-white transition duration-300`}
        >
          <div className="hover:drop-shadow-glow text-2xl hover:scale-125 transition-transform">
            {icon}
          </div>
          <span className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
