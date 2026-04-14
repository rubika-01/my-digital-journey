import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Brain, Cpu, Eye, Zap, Code, Database, Wrench, Terminal } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    label: "Programming",
    skills: ["Python", "Java", "C"],
  },
  {
    icon: Database,
    label: "DSA",
    skills: ["Arrays, Strings, Hashing", "Stacks, Queues, Linked Lists", "Recursion, Sorting, Searching", "Time & Space Complexity"],
  },
  {
    icon: Brain,
    label: "AI / ML",
    skills: ["Deep Learning", "LLMs", "Multi-Agent Systems", "Computer Vision"],
  },
  {
    icon: Terminal,
    label: "Software Dev",
    skills: ["OOP", "Problem Solving & Debugging", "API Integration", "Algorithm Design"],
  },
  {
    icon: Wrench,
    label: "Tools & Tech",
    skills: ["OpenCV", "MediaPipe", "Git", "Unity", "Arduino", "ESP8266", "Packet Tracer"],
  },
  {
    icon: Eye,
    label: "Computer Vision",
    skills: ["OpenCV", "MediaPipe", "Object Detection", "Image Processing"],
  },
  {
    icon: Cpu,
    label: "Hardware & PCB",
    skills: ["Altium", "Proteus", "Circuit Design", "PCB Layout"],
  },
  {
    icon: Zap,
    label: "Cloud & DevOps",
    skills: ["Cloud-Native", "Workflow Automation", "DevOps", "CI/CD"],
  },
];

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me" subtitle="Who I am & what drives me">
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-6"
      >
        <p className="text-sm text-secondary-foreground leading-relaxed">
          I am a highly motivated and fast-learning individual with strong adaptability and a continuous learning mindset. 
          I am quick to grasp new technologies and always ready to take on challenges with a problem-solving approach. 
          Proficient in Python, Java, and C, with experience building real-world, algorithm-driven applications.
          I am committed, responsible, and focused on delivering quality work while continuously improving my technical and professional skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {skillCategories.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass rounded-xl p-4 hover:glow-border transition-all group"
          >
            <s.icon size={18} className="text-primary mb-2 group-hover:text-accent transition-colors" />
            <h3 className="text-xs font-bold text-foreground mb-2">{s.label}</h3>
            <div className="flex flex-wrap gap-1">
              {s.skills.map((skill) => (
                <span key={skill} className="text-[9px] font-mono px-1.5 py-0.5 bg-primary/5 text-primary/80 rounded border border-primary/10">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
