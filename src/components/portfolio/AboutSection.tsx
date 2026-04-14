import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Brain, Cpu, Eye, Zap, Code, Database, Wrench, Terminal } from "lucide-react";

const allSkills = [
  "Python", "Java", "C", "OOP", "DSA", "Deep Learning", "LLMs",
  "Multi-Agent Systems", "Computer Vision", "OpenCV", "MediaPipe",
  "Object Detection", "Image Processing", "Git", "Unity", "Arduino",
  "ESP8266", "Packet Tracer", "Linux", "Altium", "Proteus", "Circuit Design",
  "PCB Layout", "Cloud-Native", "Workflow Automation", "DevOps", "CI/CD",
  "API Integration", "Algorithm Design", "Problem Solving"
];

const skillCategories = [
  {
    icon: Code,
    label: "Programming",
    skills: ["Python", "Java", "C"],
  },
  {
    icon: Database,
    label: "DSA",
    skills: ["Arrays & Strings", "Stacks & Queues", "Linked Lists", "Recursion", "Sorting & Searching", "Hashing", "Time & Space Complexity"],
  },
  {
    icon: Brain,
    label: "AI / ML",
    skills: ["Deep Learning", "LLMs", "Multi-Agent Systems", "Computer Vision"],
  },
  {
    icon: Terminal,
    label: "Software Dev",
    skills: ["OOP", "Problem Solving", "Debugging", "API Integration", "Algorithm Design"],
  },
  {
    icon: Wrench,
    label: "Tools & Tech",
    skills: ["OpenCV", "MediaPipe", "Git", "Unity", "Arduino", "ESP8266", "Packet Tracer", "Linux"],
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
    skills: ["Cloud-Native", "Workflow Automation", "DevOps", "CI/CD", "Linux"],
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

      {/* All Skills - Tag Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-6"
      >
        <h3 className="text-sm font-bold text-foreground mb-4">All Skills</h3>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="text-xs font-mono px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Categorized Skills */}
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
            <h3 className="text-xs font-bold text-foreground mb-3">{s.label}</h3>
            <div className="space-y-1.5">
              {s.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/60" />
                  <span className="text-[10px] font-mono text-secondary-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
