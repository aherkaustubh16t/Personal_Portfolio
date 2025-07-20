import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { fadeIn } from "../../framerMotion/variants"; // adjust the path as needed

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

const SocialIcons = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-wrap justify-center gap-4 sm:gap-5 text-2xl"
    >
      {links.map(({ href, label, icon, color }, index) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeIn("up", 0.4 + index * 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className={`relative group ${color} hover:text-white transition duration-300`}
        >
          <div className="text-3xl hover:drop-shadow-glow hover:scale-125 transition-transform duration-300">
            {icon}
          </div>
          <span className="absolute bottom-[-2.4rem] font-bold left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
            {label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
