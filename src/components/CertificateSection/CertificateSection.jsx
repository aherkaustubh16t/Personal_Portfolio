import { motion } from "framer-motion";
import { certificates } from "./certificateData";
import CertificateCard from "./CertificateCard";

const CertificateSection = () => {
  return (
    <section
      id="certificates"
      className="py-20 px-6 bg-gradient-to-br from-[#1e1b1b] via-[#161616] to-[#0c0c0c] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-500 mb-6 font-customSerif text-orange"
        >
          Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-lightGrey max-w-3xl mx-auto mb-12"
        >
          These certifications validate my hands-on expertise and learning
          journey in frontend, backend, and full-stack development technologies.
        </motion.p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
