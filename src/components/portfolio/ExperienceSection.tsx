import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Student Developer & PCB Designer",
    company: "ARC Club, KPRIET",
    period: "Jan 2025 – Dec 2025",
    points: [
      "Designed custom PCBs for InMoov humanoid robot using Altium, improving circuit efficiency by 95%",
      "Built and simulated a Line Follower Robot using Design Thinking in Proteus",
      "Built open-source circuits and mentored junior teams",
    ],
  },
  {
    role: "DevOps & Cloud Automation Intern",
    company: "RISE 4.0 by TamizhAnSkills",
    period: "Mar 2026 – Present",
    points: [
      "Gained hands-on experience in DevOps practices and cloud automation",
      "Worked with CI/CD pipelines and infrastructure automation tools",
    ],
  },
  {
    role: "Manufacturing Intern",
    company: "Lumens System",
    period: "Aug 2024 (12–17)",
    points: ["Assembled over 50+ printed circuit boards, showcasing attention to detail and hardware skills"],
  },
  {
    role: "PCB Intern",
    company: "Pioneer Circuits",
    period: "Jul 2024 – Aug 2024",
    points: [
      "Optimized PCB layout and assembly workflow, resulting in 31% improvement in efficiency",
      "Documented assembly best practices for newcomers",
    ],
  },
  {
    role: "Virtual Internship – Network Engineer",
    company: "Cisco-AICTE",
    period: "May 2024 – Jul 2024",
    points: [
      "Developed foundational skills in networking and cyber-security",
      "Completed Packet Tracer labs, simulated router-split networks, and resolved routing protocol conflicts",
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" title="Experience" subtitle="Internships & hands-on work">
    <div className="space-y-4">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass rounded-xl p-5 hover:glow-border transition-all"
        >
          <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{exp.role}</h3>
                <p className="text-xs text-accent">{exp.company}</p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground">{exp.period}</span>
          </div>
          <ul className="space-y-1.5 ml-11">
            {exp.points.map((p, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                <span className="text-xs text-secondary-foreground leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
