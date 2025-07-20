import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import EducationDetails from "./EducationDetails";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <section className="py-16 px-4 bg-brown text-lightGrey cursor-default">
      {/* Section Heading */}
      <div className="text-center mb-12" id="about">
        <h2 className="text-4xl font-bold uppercase text-orange tracking-wider font-customSerif">
          About Me
        </h2>
        <p className="text-lg text-white mt-2">
          Get to know me professionally and academically.
        </p>
      </div>

      {/* About Me Content */}
      <div className="flex md:flex-row sm:flex-col gap-12 max-w-[1200px] mx-auto items-center">
        {/* Text Section */}
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <AboutMeText />
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <AboutMeImage />
        </motion.div>
      </div>

      {/* Divider */}
      <div
        id="education"
        className="w-16 h-1 bg-orange mx-auto my-10 rounded-full"
      ></div>

      {/* Education Section */}

      <EducationDetails />
    </section>
  );
};

export default AboutMeMain;
