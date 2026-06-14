import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certs = [
  { name: "RISE Internship – DevOps & Cloud Automation", issuer: "Tamizhan Skills" },
  { name: "Cisco-AICTE Virtual Internship", issuer: "Networking, Cybersecurity, Packet Tracer" },
  { name: "Microsoft Azure Skill Badges (50+)", issuer: "Cloud Fundamentals & Infra" },
  { name: "AWS AI Practitioner Course Completion", issuer: "GenAI — 2 Projects" },
  { name: "Infosys Internship 7.0 – Java Technology Stack", issuer: "Core Java, OOP, JDBC, Backend" },
  { name: "Java Certification", issuer: "Infosys Springboard" },
  { name: "Visteon Scholar Program", issuer: "Automotive & Embedded Systems" },
  { name: "Programming, Data Structures & Algorithms (Python)", issuer: "NPTEL – Elite" },
  { name: "Introduction to Industrial IoT 4.0", issuer: "NPTEL" },
  { name: "CV & Image Processing Fundamentals", issuer: "NPTEL – Elite" },
  { name: "Python (Basic)", issuer: "HackerRank" },
  { name: "Problem Solving (Basic)", issuer: "HackerRank" },
  { name: "Honours Diploma in Computer Application (HDCA)", issuer: "CSC" },
  { name: "Generative AI Workshop", issuer: "Workshop" },
  { name: "5+ Technical Workshops", issuer: "AI/ML, Cloud, IoT, DevOps" },
];

const CERT_PORTFOLIO = "https://rubika-ai-certificates.lovable.app";

const CertificationsSection = () => (
  <SectionWrapper id="certifications" title="Certifications" subtitle="Continuous learning & skill validation">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {certs.map((c, i) => (
        <motion.a
          key={i}
          href={CERT_PORTFOLIO}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="glass rounded-xl p-4 hover:glow-border transition-all group block"
        >
          <BadgeCheck size={16} className="text-primary mb-2 group-hover:text-accent transition-colors" />
          <h3 className="text-xs font-bold text-foreground leading-tight">{c.name}</h3>
          <p className="text-[10px] text-muted-foreground mt-1 font-mono">{c.issuer}</p>
        </motion.a>
      ))}
    </div>
    <motion.a
      href={CERT_PORTFOLIO}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 mt-6 text-xs font-mono text-primary hover:text-accent transition-colors"
    >
      View all 50+ certificates <ExternalLink size={12} />
    </motion.a>
  </SectionWrapper>
);

export default CertificationsSection;
