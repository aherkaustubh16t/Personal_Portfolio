import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectData";
import CertificateSection from "../CertificateSection/CertificateSection";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  return (
    <section id="projects">
      <div className="py-20 px-6 bg-gradient-to-b from-[#221a17] via-[#1c1a18] to-[#0f0d0a] text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-500 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-lg text-lightGrey max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Each project I’ve built is a testament to my passion for crafting
            seamless and visually engaging user interfaces, writing clean and
            scalable code, and approaching every challenge with a
            problem-solving mindset. Whether it’s building full-stack
            applications or interactive websites, I strive to deliver
            experiences that are both functional and aesthetically refined.
          </motion.p>

          {/* Project Cards Grid */}
          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                tiltDirection={index % 2 === 0 ? "right" : "left"}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <CertificateSection />
    </section>
  );
};

export default ProjectSection;
