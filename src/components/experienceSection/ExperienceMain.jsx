import { motion } from "framer-motion";
import { FaUserTie, FaProjectDiagram } from "react-icons/fa"; 

const experienceData = [
  {
    title: "Full Stack Developer Intern", 
    company: "SRW Softwares",
    period: "Jan 2025 – May 2025",
    type: "Internship", 
    icon: <FaUserTie />,
    description: [
      "Worked on internal tools using React, API integration & RESTful services.", 
      "Contributed to backend development using Node.js and MongoDB.",
      "Followed agile practices and collaborated via GitHub & JIRA.",
    ],
    tech: ["React", "Node.js", "MongoDB", "GitHub"],
  },
  // {
  //   title: "Freelance Full Stack Developer",
  //   company: "Sports Club Website",
  //   period: "March 2025 – April 2025",
  //   type: "Freelance Project",
  //   icon: <FaProjectDiagram />,
  //   description: [
  //     "Built a complete web solution for managing sports events, teams, and announcements.",
  //     "Designed responsive UI using React.js and Tailwind CSS.",
  //     "Set up backend with Node.js, Express.js & MongoDB.",
  //     "Delivered within 3 weeks, deployed on Render/Netlify.",
  //   ],
  //   tech: ["React", "Tailwind", "MongoDB", "Express", "Node.js", "Render"],
  // },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-[#0f172a] via-[#1a1a1a] to-[#0a0a0a] py-20 px-6 text-white cursor-default"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title & Description Centered */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-500 font-customSerif text-orange">
          Experience
        </h2>
        <p className="text-lg text-white text-center max-w-3xl mx-auto mb-14">
          Here’s a glimpse of my journey—contributing to real-world projects
          through internships and delivering full-stack freelance solutions with
          focus on clean code, client needs, and on-time delivery.
        </p>

        {/* Flex Row: Experience Cards + Image */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Timeline Cards */}
          <div className="w-full lg:w-2/3 relative border-l border-orange/30 pl-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-10 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-7 top-2 w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-orange flex items-center justify-center shadow-md">
                  <span className="text-orange text-lg">{exp.icon}</span>
                </div>

                {/* Card Content */}
                <div className="bg-[#1a1a1a] rounded-xl shadow-md border border-orange/20 p-6 hover:shadow-orange/30 transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-orange mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-400 font-medium text-sm mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-sm italic text-lightGrey mb-3">
                    {exp.type}
                  </p>
                  <ul className="list-disc list-inside text-lightGrey text-sm space-y-1">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-orange/20 text-orange text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image Centered (Hidden on Small Screens) */}
          <div className="hidden lg:flex w-1/3 items-center justify-center">
            <img
              src="/images/experience-image.png" // update to correct path
              alt="Experience Illustration"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
