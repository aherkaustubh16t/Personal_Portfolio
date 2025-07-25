import { useState, useRef } from "react";
import SkillCard from "./SkillCard";
import SkillsText from "./SkillsText";
import { skillGroups } from "./skillsData";
import { motion } from "framer-motion";

const SkillsMain = () => {
  const [openGroupIndex, setOpenGroupIndex] = useState(null);
  const groupRefs = useRef([]);

  const handleToggle = (index) => {
    const isClosing = openGroupIndex === index;
    setOpenGroupIndex(isClosing ? null : index);

    if (!isClosing) {
      setTimeout(() => {
        const element = groupRefs.current[index];
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: top - 130,
            behavior: "smooth",
          });
        }
      }, 100); // delay to ensure element is rendered before scroll
    }
  };

  return (
    <section className="py-16 text-white bg-gradient-to-br from-[#0f172a] via-[#1a1a1a] to-[#0d0d0d] cursor-default">
      <div className="max-w-6xl px-4 mx-auto" id="skills">
        <SkillsText />

        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            ref={(el) => (groupRefs.current[index] = el)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8"
          >
            {/* Group Header */}
            <div
              onClick={() => handleToggle(index)}
              className="group flex justify-between items-center gap-4 px-6 py-5 rounded-xl border border-orange/40 bg-white/15 cursor-pointer hover:from-[#333333] hover:to-[#444444] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-gradient-to-b from-orange to-cyan rounded-full" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange to-cyan bg-clip-text text-transparent tracking-wide text-orange">
                  {group.title}
                </h3>
              </div>

              <p className="text-sm text-white group-hover:text-white transition">
                {openGroupIndex === index
                  ? "Click to close ▲"
                  : "Click to view ▼"}
              </p>
            </div>

            {/* Skill Cards */}
            {openGroupIndex === index && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mt-6">
                {group.skills.map((skill, i) => (
                  <SkillCard
                    key={i}
                    name={skill.name}
                    Icon={skill.Icon}
                    projectsUsed={skill.projectsUsed}
                    delay={i * 0.1}
                    experience={skill.experience}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMain;
