import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    level: 5,
    tooltip: "Semantic markup and structuring",
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    level: 4,
    tooltip: "Flexbox, Grid, Animations",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    level: 5,
    tooltip: "ES6+, DOM, async programming",
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    level: 4,
    tooltip: "Static typing, interfaces, generics",
  },
  {
    skill: "ReactJS",
    icon: FaReact,
    level: 5,
    tooltip: "Hooks, JSX, component-driven UI",
  },
  {
    skill: "Redux",
    icon: SiRedux,
    level: 4,
    tooltip: "State management with Redux Toolkit",
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
    level: 4,
    tooltip: "SSR, file-based routing, API routes",
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    level: 5,
    tooltip: "Utility-first responsive design",
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
                level={item.level}
                tooltip={item.tooltip}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
