import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { BadgeCheck } from "lucide-react";

const certs = [
  { name: "Python (Basic)", issuer: "HackerRank" },
  { name: "Problem Solving (Basic)", issuer: "HackerRank" },
  { name: "Programming, Data Structures & Algorithms Using Python", issuer: "NPTEL" },
  { name: "Introduction to Industrial IoT 4.0", issuer: "NPTEL" },
  { name: "CV & Image Processing Fundamentals", issuer: "NPTEL – Elite" },
  { name: "Honours Diploma in Computer Application (HDCA)", issuer: "CSC" },
  { name: "Generative AI Workshop", issuer: "Workshop" },
  { name: "5+ Technical Workshops", issuer: "Various" },
];

const CertificationsSection = () => (
  <SectionWrapper id="certifications" title="Certifications" subtitle="Continuous learning & skill validation">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {certs.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="glass rounded-xl p-4 hover:glow-border transition-all group"
        >
          <BadgeCheck size={16} className="text-primary mb-2 group-hover:text-accent transition-colors" />
          <h3 className="text-xs font-bold text-foreground leading-tight">{c.name}</h3>
          <p className="text-[10px] text-muted-foreground mt-1 font-mono">{c.issuer}</p>
        </motion.div>
      ))}
    </div>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-[10px] font-mono text-muted-foreground mt-4"
    >
      * More certifications can be added later
    </motion.p>
  </SectionWrapper>
);

export default CertificationsSection;
