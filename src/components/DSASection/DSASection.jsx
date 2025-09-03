import { FaCode, FaLaptopCode, FaTrophy, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";   

const DSASection = () => { 
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 }); 
  const controls = useAnimation(); 

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section
      ref={ref}
      id="dsa"
      className="py-16 px-4 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0a0a] text-white cursor-default"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-500 font-customSerif text-orange">
          DSA & Competitive Coding
        </h2>

        <p className="text-lg text-white mt-6 max-w-3xl mx-auto">
          I regularly practice Data Structures and Algorithms to strengthen my
          problem-solving skills. I've solved{" "}
          <span className="text-yellow-400 font-semibold">350+ problems</span>{" "}
          across platforms like LeetCode and CodeChef, and actively participate
          in contests to challenge myself.
        </p>

        {/* Profile Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <a
            href="https://leetcode.com/u/aherkaustubh16t/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-[#1f2937] hover:bg-cyan-500 rounded-lg text-cyan-300 font-medium border border-cyan-600 hover:text-black hover:bg-orange hover:shadow-cyanShadow transition duration-300"
          >
            <SiLeetcode className="text-xl" />
            LeetCode Profile
          </a>

          <a
            href="https://www.codechef.com/users/kaustubh16t/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-[#1f2937] hover:bg-orange-500 rounded-lg text-cyan-300 font-medium border border-orange-400 hover:text-black hover:bg-orange hover:shadow-cyanShadow transition duration-300"
          >
            <SiCodechef className="text-xl" />
            CodeChef Profile
          </a>

          <a
            href="https://github.com/aherkaustubh16t/DSA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-[#1f2937] hover:bg-green-500 rounded-lg text-cyan-300 font-medium border border-green-400 hover:text-black hover:bg-orange hover:shadow-cyanShadow transition duration-300"
          >
            <FaGithub className="text-xl" />
            DSA GitHub Repo
          </a>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left text-lightGrey text-sm">
          {[
            {
              icon: <FaLaptopCode className="text-orange text-xl" />,
              title: "LeetCode",
              text: "Solved 250+ problems on topics like arrays, trees, recursion, and dynamic programming.",
            },
            {
              icon: <FaCode className="text-orange text-xl" />,
              title: "CodeChef",
              text: "Participated in rated contests, enhanced time complexity thinking, and problem-solving under pressure.",
            },
            {
              icon: <FaTrophy className="text-orange text-xl" />,
              title: "Why I Practice",
              text: "Practicing DSA improves logic, supports backend development, and builds efficient, optimized systems.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-orange/30 shadow-lg hover:shadow-orange/30 transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {card.icon}
                <h4 className="text-white font-semibold text-lg">
                  {card.title}
                </h4>
              </div>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DSASection;
