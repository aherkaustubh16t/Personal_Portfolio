import { useRef, useEffect } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = ({ cert, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 50 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col sm:flex-row bg-[#2a2a2a] backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-orange/30 group hover:shadow-orange-500/30 transition-all duration-500"
    >
      {/* Left Image */}
      <div className="sm:w-1/3 w-full p-4 flex justify-center items-center bg-[#111111] border-b sm:border-b-0 sm:border-r border-orange/20">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover rounded-full border-2 border-orange/50 shadow-md group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Right Info */}
      <div className="sm:w-2/3 w-full p-5 text-left">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
          <h3 className="text-lg font-bold text-orange">{cert.title}</h3>
          <span className="text-[10px] px-2 py-1 bg-orange-600 text-black font-bold rounded-full uppercase shadow-sm self-start sm:self-auto bg-white">
            {cert.platform}
          </span>
        </div>

        <p className="text-sm text-lightGrey mb-1">
          Issued by:{" "}
          <span className="text-cyan-400 font-medium">{cert.issuer}</span>
        </p>

        <p className="text-xs text-orange-300 italic">{cert.date}</p>

        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-200 border border-orange-400 px-3 py-1.5 rounded-full hover:bg-orange-500/10 hover:text-black hover:bg-orange hover:shadow-cyanShadow font-bold transition"
        >
          View Certificate <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
