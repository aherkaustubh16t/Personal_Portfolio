import { motion } from "framer-motion";
import { useState } from "react";

const SkillCard = ({ name, Icon, projectsUsed, delay, experience }) => {
  const [showExp, setShowExp] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setShowExp(true)}
      onMouseLeave={() => setShowExp(false)}
      className="relative group flex flex-col items-center gap-4 p-6 bg-[#1a1a1a] border border-orange/40 rounded-xl shadow-xl hover:scale-105 hover:drop-shadow-glow transition-all duration-500 w-full max-w-[200px] cursor-pointer"
    >
      {/* Icon */}
      <Icon className="text-5xl text-orange animate-pulse-slow" />

      {/* Name */}
      <h4 className="text-lg font-bold bg-gradient-to-r from-orange to-cyan bg-clip-text text-transparent text-center">
        {name}
      </h4>

      {/* Projects Used Count */}
      <p className="text-sm text-lightGrey text-center">
        Used in{" "}
        <span className="text-yellow-400 font-semibold">{projectsUsed}</span>{" "}
        project{projectsUsed > 1 ? "s" : ""}
      </p>

      {/* Experience Tooltip */}
      <div
        className={`absolute z-30 w-48 bg-black text-white text-xs px-3 py-2 rounded shadow-lg text-center transition-opacity duration-300 ${
          showExp ? "opacity-100" : "opacity-0"
        } bottom-[110%]`}
      >
        {experience}
      </div>
    </motion.div>
  );
};

export default SkillCard;
