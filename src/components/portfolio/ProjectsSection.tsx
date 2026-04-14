import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Bot, Cloud, Heart, Eye, Hand, Brain, ArrowUpRight, CheckCircle } from "lucide-react";

const projects = [
  {
    icon: Heart,
    name: "TheraFun",
    desc: "Gamification kit for autism therapy — real-world implementation. Improved therapy engagement by ~99% through gamified feedback and adaptive logic.",
    tags: ["Unity", "Healthcare", "Gamification"],
    completed: true,
  },
  {
    icon: Bot,
    name: "AttendAI+",
    desc: "AI-powered intelligent attendance tracking and behavioral analytics using computer vision and AI-based pattern analysis.",
    tags: ["Computer Vision", "AI", "Analytics"],
    completed: true,
  },
  {
    icon: Eye,
    name: "Drowsy Sentry System",
    desc: "Real-time monitoring system using OpenCV and algorithmic state detection to identify fatigue patterns. Improved detection reliability by ~25%.",
    tags: ["OpenCV", "Safety", "Real-time"],
    completed: true,
  },
  {
    icon: Hand,
    name: "Green Grid – E-Waste Recycling",
    desc: "Software-driven system to calculate recycling credits and securely track e-waste deposits. Improved transaction accuracy by ~30%.",
    tags: ["E-Waste", "Backend", "Auth"],
    completed: true,
  },
  {
    icon: Cloud,
    name: "Cloud-Native AI Workflow System",
    desc: "Multi-agent AI automation platform that decomposes complex tasks using LLM-based reasoning and execution pipelines.",
    tags: ["LLM", "Multi-Agent", "Cloud-Native"],
    completed: true,
  },
  {
    icon: Brain,
    name: "LifeOS",
    desc: "Personal AI assistant for productivity, task management, and decision support with AI-driven contextual recommendations.",
    tags: ["AI Assistant", "Productivity", "NLP"],
    completed: true,
  },
  {
    icon: Eye,
    name: "Eye Blink & MediaPipe Assistive System",
    desc: "Computer vision accessibility system using MediaPipe and eye blink detection for hands-free interaction.",
    tags: ["MediaPipe", "OpenCV", "Accessibility"],
    completed: true,
  },
  {
    icon: Hand,
    name: "Gesture-Based Hospital Management",
    desc: "OpenCV-based gesture recognition system for hospital management, enabling touchless interaction.",
    tags: ["OpenCV", "Gesture", "Healthcare"],
    completed: true,
  },
];

const moreProjects = [
  "InMoov Open-Source Humanoid PCB Design",
  "More projects to be added with details...",
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects" subtitle="Building intelligent solutions">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass rounded-xl p-5 group hover:glow-border transition-all relative"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <p.icon size={18} className="text-primary" />
            </div>
            <div className="flex items-center gap-1.5">
              {p.completed && (
                <span className="flex items-center gap-1 text-[9px] font-mono text-green-400">
                  <CheckCircle size={10} /> Done
                </span>
              )}
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
          <h3 className="text-sm font-bold text-foreground mb-2">{p.name}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="text-[9px] font-mono px-2 py-0.5 bg-primary/5 text-primary/80 rounded-md border border-primary/10">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* More projects */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-6 glass rounded-xl p-5"
    >
      <h4 className="text-xs font-mono text-primary mb-3 uppercase tracking-wider">Coming Soon — More Details Later</h4>
      <div className="flex flex-wrap gap-2">
        {moreProjects.map((p) => (
          <span key={p} className="text-xs px-3 py-1.5 bg-secondary rounded-lg text-secondary-foreground">
            {p}
          </span>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default ProjectsSection;
