import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Brain, Cpu, Eye, Zap } from "lucide-react";

const skills = [
  { icon: Brain, label: "AI / ML", desc: "Deep Learning, LLMs, Multi-Agent Systems" },
  { icon: Eye, label: "Computer Vision", desc: "OpenCV, MediaPipe, Object Detection" },
  { icon: Cpu, label: "Hardware + PCB", desc: "Altium, Proteus, Circuit Design" },
  { icon: Zap, label: "Cloud & DevOps", desc: "Cloud-Native, Workflow Automation" },
];

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me" subtitle="Who I am & what drives me">
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-6"
      >
        <p className="text-sm text-secondary-foreground leading-relaxed">
          I am a highly motivated and fast-learning individual with strong adaptability and a continuous learning mindset. 
          I am quick to grasp new technologies and always ready to take on challenges with a problem-solving approach. 
          I am committed, responsible, and focused on delivering quality work while continuously improving my technical and professional skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-4 hover:glow-border transition-all group"
          >
            <s.icon size={18} className="text-primary mb-2 group-hover:text-accent transition-colors" />
            <h3 className="text-xs font-bold text-foreground mb-1">{s.label}</h3>
            <p className="text-[10px] text-muted-foreground leading-tight">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
