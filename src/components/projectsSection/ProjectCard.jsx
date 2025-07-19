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
    >
      <div
        className={`relative group rounded-xl bg-gradient-to-br from-[#1a1a1a]/80 via-[#1f1f1f]/80 to-[#141414]/80 border border-orange/30 
        shadow-[0_0_20px_rgba(255,165,0,0.05)] hover:shadow-orange/40 transition-all duration-500 overflow-hidden 
        transform ${tiltClass} hover:scale-[1.05] will-change-transform`}
      >
        {/* Image Section */}
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          {/* Overlay Description */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-md text-lightGrey text-sm text-center flex items-center justify-center px-4 py-2 
            transition-opacity duration-500 ${
              showDescription ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100`}
          >
            {project.description}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden absolute bottom-3 right-3 bg-orange-500 text-black text-xs px-3 py-1 rounded shadow-md font-semibold transition-transform duration-300 hover:scale-105"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Hide Details" : "View Details"}
          </button>
        </div>

        {/* Text Content */}
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-orange leading-tight">
              {project.name}
            </h3>
            <span className="text-sm text-cyan-400 font-mono">
              {project.date}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-black/30 border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-black hover:bg-orange hover:shadow-cyanShadow transition-all duration-300"
            >
              <FaGithub /> Code
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-black/30 border border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-black hover:bg-orange hover:shadow-cyanShadow transition-all duration-300"
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
