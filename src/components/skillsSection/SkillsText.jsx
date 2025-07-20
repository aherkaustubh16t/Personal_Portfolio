import { motion } from "framer-motion";
import img from "../../../public/images/skills.avif";

const SkillsText = () => {
  return (
    <motion.div
      className="text-center flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Text Section */}
      <div className="sm:w-2/3">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text text-orange font-customSerif">
          MY SKILLS
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto mt-4">
          I have hands-on experience in full-stack development using the MERN
          stack, Spring Boot, and cloud technologies like AWS and Docker. I've
          worked on developing responsive web applications and used tools like
          MongoDB and MySQL to manage data efficiently and support backend
          functionality.
        </p>
        <p className="text-lg text-white max-w-2xl mx-auto mt-2">
          Below are the tools and technologies I've worked with during projects,
          internships, and learning.
        </p>
      </div>

      {/* Image Section */}
      <div className="sm:w-1/3 hidden sm:block">
        <img
          src={img}
          alt="Skills Illustration"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </motion.div>
  );
};

export default SkillsText;
