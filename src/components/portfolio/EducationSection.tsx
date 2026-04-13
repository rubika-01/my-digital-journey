import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

const education = [
  {
    year: "2023–2027",
    title: "B.E. Electronics & Communication Engineering",
    institution: "K.P.R. Institute of Engineering and Technology",
    detail: "CGPA: 8.92",
  },
  {
    year: "2024–2027",
    title: "Minors in Software Development Engineering",
    institution: "KPR Institute of Engineering and Technology",
    detail: "Specialization Track",
  },
  {
    year: "2023",
    title: "Honours Diploma in Computer Application (HDCA)",
    institution: "CSC",
    detail: "Completed",
  },
  {
    year: "2022–2023",
    title: "Higher Secondary (Grade 12)",
    institution: "A.R.C. Matric Higher Secondary School",
    detail: "96%",
  },
];

const EducationSection = () => (
  <SectionWrapper id="education" title="Education" subtitle="Academic journey & milestones">
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start gap-4 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />

            {/* Card */}
            <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
              <div className="glass rounded-xl p-5 hover:glow-border transition-all">
                <span className="text-[10px] font-mono text-primary tracking-wider">{edu.year}</span>
                <h3 className="text-sm font-bold text-foreground mt-1">{edu.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{edu.institution}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-primary/10 px-2 py-0.5 rounded-md">
                  <GraduationCap size={10} className="text-primary" />
                  <span className="text-[10px] font-mono text-primary">{edu.detail}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
