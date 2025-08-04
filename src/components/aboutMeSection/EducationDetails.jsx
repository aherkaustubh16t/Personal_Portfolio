import React from "react";
import {
  FaUniversity,
  FaCalendarAlt,
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";
import { educationData } from "./educationData";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { useInView } from "framer-motion";

// Pre-rendered icon components
const iconMap = {
  FaGraduationCap: <FaGraduationCap className="text-4xl text-orange mt-1" />,
  FaSchool: <FaSchool className="text-4xl text-orange mt-1" />,
};

// Animation variants
const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.4, ease: "easeIn" } },
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
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      id="education"
      variants={fadeVariants}
      initial="hidden"
      animate={controls}
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
