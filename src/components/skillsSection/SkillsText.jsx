import { motion } from "framer-motion";

const SkillsText = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-500 font-customSerif text-orange">
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
    </motion.div>
  );
};

export default SkillsText;
