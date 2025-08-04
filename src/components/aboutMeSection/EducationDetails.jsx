import React from "react";
import {
  FaUniversity,
  FaCalendarAlt,
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";
import { educationData } from "./educationData";
import { fadeIn } from "../../framerMotion/variants";
import { motion } from "framer-motion";
import { useMemo } from "react";

// Pre-render icon components
const iconMap = {
  FaGraduationCap: <FaGraduationCap className="text-4xl text-orange mt-1" />,
  FaSchool: <FaSchool className="text-4xl text-orange mt-1" />,
};

// Memoized card component
const EducationCard = React.memo(({ edu }) => {
  const icon = useMemo(() => iconMap[edu.icon], [edu.icon]);

  return (
    <div className="bg-[#1f1f1f] border border-orange/20 rounded-xl p-6 shadow-lg max-w-2xl mx-auto mb-6 flex items-start gap-4 transition duration-300 transform hover:scale-105 hover:drop-shadow-glow">
      {icon}
      <div>
        <h4 className="text-xl font-bold text-white mb-1">{edu.level}</h4>
        <div className="flex flex-col text-lightGrey text-sm">
          <span className="flex items-center gap-2">
            <FaUniversity className="text-orange" />
            {edu.institute}
          </span>
          <span className="flex items-center gap-2 mt-1">
            <FaCalendarAlt className="text-orange" />
            {edu.duration}
          </span>
        </div>
      </div>
    </div>
  );
});

const EducationDetails = () => {
  return (
    <motion.div
      id="education"
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className="mt-12"
    >
      <h3 className="text-3xl font-semibold text-orange uppercase mb-6 text-center font-customSerif">
        Education Details
      </h3>

      {educationData.map((edu) => (
        <EducationCard key={edu.id} edu={edu} />
      ))}
    </motion.div>
  );
};

export default EducationDetails;
