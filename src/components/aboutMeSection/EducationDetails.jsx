import React from "react";
import {
  FaUniversity,
  FaCalendarAlt,
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";
import { educationData } from "./educationData";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { useInView } from "framer-motion";

// Pre-rendered icon components
const iconMap = {
  FaGraduationCap: <FaGraduationCap className="text-2xl text-white" />,
  FaSchool: <FaSchool className="text-2xl text-white" />,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
  exit: { 
    opacity: 0, 
    y: 20, 
    transition: { duration: 0.4, ease: "easeIn" } 
  },
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(255, 107, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Memoized card component
const EducationCard = React.memo(({ edu, index }) => {
  const icon = useMemo(() => iconMap[edu.icon], [edu.icon]);
  
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, threshold: 0.1 });
  const cardControls = useAnimation();

  useEffect(() => {
    if (cardInView) {
      cardControls.start("visible");
    }
  }, [cardInView, cardControls]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={cardControls}
      whileHover="hover"
      className="relative"
    >
      {/* Timeline connector */}
      {index < educationData.length - 1 && (
        <div className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-orange to-transparent z-0" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-5 top-5 w-3 h-3 bg-orange rounded-full z-10 shadow-lg shadow-orange/30" />
      
      <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] border-l-4 border-orange rounded-xl p-6 shadow-lg max-w-2xl mx-auto mb-8 ml-8 relative overflow-hidden group">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-orange/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
        
        <div className="flex items-start gap-6 relative z-10">
          {/* Icon container */}
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
            {icon}
          </div>
          
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange transition-colors duration-300">
              {edu.level}
            </h4>
            
            <div className="space-y-2 text-gray-300">
              {/* Institute with location */}
              <div className="flex items-center gap-3">
                <FaUniversity className="text-orange flex-shrink-0" />
                <span className="font-medium text-white">{edu.institute}</span>
                {edu.location && (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <FaMapMarkerAlt className="text-orange/70" />
                      {edu.location}
                    </span>
                  </>
                )}
              </div>
              
              {/* Duration */}
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-orange flex-shrink-0" />
                <span className="text-sm">{edu.duration}</span>
                {edu.gpa && (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="flex items-center gap-1 text-sm text-amber-400 font-medium">
                      <FaAward className="text-amber-400" />
                      GPA: {edu.gpa}
                    </span>
                  </>
                )}
              </div>
              
              {/* Description */}
              {edu.description && (
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  {edu.description}
                </p>
              )}
              
              {/* Skills */}
              {edu.skills && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-orange/10 text-orange text-xs rounded-full border border-orange/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const EducationDetails = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section ref={ref} id="education" className="py-16 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white mb-4 font-customSerif"
            >
              Education <span className="text-orange">Journey</span>
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={inView ? { opacity: 1, width: 100 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-transparent via-orange to-transparent mx-auto"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 mt-4 max-w-2xl mx-auto"
            >
              My academic path and educational achievements
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange/30 via-orange/50 to-orange/30 z-0" />
            
            {/* Education Cards */}
            <div className="space-y-2">
              {educationData.map((edu, index) => (
                <EducationCard key={edu.id} edu={edu} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationDetails;
