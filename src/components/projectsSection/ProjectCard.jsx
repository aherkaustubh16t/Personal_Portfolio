import { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const ProjectCard = ({ project, tiltDirection = "right" }) => {
  const [showDescription, setShowDescription] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  const tiltClass =
    tiltDirection === "left" ? "hover:-rotate-2" : "hover:rotate-2";

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <div
        className={`relative group rounded-xl bg-gradient-to-br from-[#1a1a1a]/80 via-[#1f1f1f]/80 to-[#141414]/80 
        border border-orange/30 shadow-[0_0_20px_rgba(255,165,0,0.05)] 
        hover:shadow-orange/40 transition-all duration-500 overflow-hidden 
        transform ${tiltClass} hover:scale-[1.05] will-change-transform`}
      >
        {/* Image Section */}
        <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full object-cover rounded-xl 
             h-40 sm:h-52 md:h-64 lg:h-72 xl:h-80"
          />

          {/* Overlay Description */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-md text-white text-sm sm:text-base text-center 
            flex items-center justify-center px-4 py-2 transition-opacity duration-500 
            ${
              showDescription ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100`}
          >
            {project.description}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden absolute bottom-3 right-3 bg-orange-500 text-black text-xs sm:text-sm px-3 py-1 rounded 
              shadow-md font-semibold transition-transform duration-300 hover:scale-105"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Hide Details" : "View Details"}
          </button>
        </div>

        {/* Text Content */}
        <div className="p-4 sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-orange leading-tight text-start">
              {project.name}
            </h3>
            <span className="text-sm text-cyan-400 font-mono text-end sm:text-start">
              {project.date}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-full 
              bg-black/30 border border-cyan-500 text-cyan-300 
              hover:bg-cyan-500 hover:text-black hover:shadow-cyanShadow 
              transition-all duration-300 font-bold"
            >
              <FaGithub /> Code
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-full 
              bg-black/30 border border-orange-400 text-orange-300 
              hover:bg-orange-400 hover:text-black hover:shadow-cyanShadow 
              transition-all duration-300 font-bold"
            >
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
