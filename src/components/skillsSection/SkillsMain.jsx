import SkillCard from "./SkillCard";
import SkillsText from "./SkillsText";
import { skillGroups } from "./skillsData";
import { motion } from "framer-motion";

const SkillsMain = () => {
  return (
    <section className="py-16 text-white bg-gradient-to-br from-[#0f172a] via-[#1a1a1a] to-[#0d0d0d]">
      <div className="max-w-6xl px-4 mx-auto" id="skills">
        <SkillsText />

        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-orange mb-6 text-center sm:text-left">
              {group.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMain;
