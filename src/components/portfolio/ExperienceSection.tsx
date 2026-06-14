import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Student Developer & PCB Designer",
    company: "ARC Club, KPRIET",
    period: "Jan 2025 – Dec 2025",
    points: [
      "Contributed to interdisciplinary projects — TheraFun, Drowsy Sentry, robotics, and embedded prototypes spanning AI, hardware, and simulation",
      "Designed custom PCBs for InMoov humanoid robot using Altium, improving circuit efficiency by 95% via compact routing and reliable servo–sensor integration",
      "Built and simulated a Line Follower Robot in Proteus, reducing debugging time by 30% through early-stage circuit validation",
      "Strengthened hardware–software integration, cloud-connected systems, and collaborative engineering workflows",
    ],
  },
  {
    role: "DevOps & Cloud Automation Intern",
    company: "RISE 4.0 — Tamizhan Skills",
    period: "Mar 2026 – Present",
    points: [
      "Hands-on training in Linux, Git, CI/CD workflows, cloud automation, and deployment fundamentals",
      "Practiced scripting, version control workflows, and cloud deployment patterns for scalable application delivery",
      "Built understanding of cloud-native engineering practices through structured project tasks",
    ],
  },
  {
    role: "Manufacturing Intern",
    company: "Lumens System",
    period: "Aug 2024 (12–17)",
    points: ["Assembled over 50+ printed circuit boards, showcasing attention to detail and hardware skills"],
  },
  {
    role: "Process Optimization Intern",
    company: "Pioneer Circuits",
    period: "Jul 2024 – Aug 2024",
    points: [
      "Analyzed PCB manufacturing workflows and assembly processes end-to-end",
      "Redesigned assembly process, improving operational efficiency by 31%",
      "Documented standardized procedures for newcomers and shop-floor reference",
      "Supported quality-control and manufacturing optimization initiatives",
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
