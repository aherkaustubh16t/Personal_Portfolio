import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Typewriter } from "react-simple-typewriter";
import SocialLinks from "./SocialLinks";
 
const HeroText = () => {
  return ( 
    <div className="flex flex-col pt-10 gap-4 h-full justify-center md:text-left sm:text-center">
      {/* Greeting */}
      <motion.h2
        variants={fadeIn("down", 0.2)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-white"
      >
        Hi, I'm 
      </motion.h2>

      {/* Name */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase font-customSerif"
      >
        Kaustubh <br className="sm:hidden md:block" />
        Aher
      </motion.h1>

      {/* Typewriter Roles with Gradient and 'A' */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-xl font-medium"
      >
        <span className="font-bold text-3xl text-lightOrange">A </span>
        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Full-Stack Web Developer",
              "Freelancer",
              "Data Analyst Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </motion.div>

      {/* Short Bio */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 max-w-xl text-lightGrey"
      >
        B.Tech Computer Science Engineering graduate (2025) with hands-on
        experience in full-stack web development using the MERN stack.
        Passionate about building user-centric applications and solving
        real-world problems through clean, efficient code. Currently exploring
        data analysis and visualization using Python, Excel, Power BI and
        PowerPoint
      </motion.p>
      <SocialLinks showHireMe={true} />
    </div>
  );
};

export default HeroText;
