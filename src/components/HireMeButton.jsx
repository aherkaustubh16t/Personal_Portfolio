import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiSend } from "react-icons/fi";
import { fadeIn } from "../framerMotion/variants"; // adjust path as needed

const HireMeButton = ({ className = "" }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        offset={-60}
        className={`inline-flex items-center gap-2 
          px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
          text-sm sm:text-base md:text-lg 
          rounded-full whitespace-nowrap
          bg-gradient-to-r from-orange-500 to-cyan-500 
          hover:from-orange-600 hover:to-cyan-600 bg-white text-black font-bold
          cursor-pointer hover:text-black hover:bg-orange hover:shadow-cyanShadow 
          transition-all duration-300 ${className}`}
      >
        <FiSend className="text-lg sm:text-xl" />
        Hire Me
      </Link>
    </motion.div>
  );
};

export default HireMeButton;
