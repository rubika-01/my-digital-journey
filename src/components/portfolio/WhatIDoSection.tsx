import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code2, Cloud, Activity, Brain } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Building backend systems, APIs, and scalable applications focused on performance and maintainability.",
    tech: ["FastAPI", "Flask", "REST APIs", "React", "Databases"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Designing deployment pipelines, containerized applications, and cloud-native infrastructure.",
    tech: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
  {
    icon: Activity,
    title: "Site Reliability Engineering",
    desc: "Improving reliability, observability, automation, and production readiness of systems.",
    tech: ["Monitoring", "Automation", "Troubleshooting", "Resilience", "Ops Excellence"],
  },
  {
    icon: Brain,
    title: "AI & Intelligent Systems",
    desc: "Developing computer vision, accessibility, and intelligent automation solutions.",
    tech: ["TensorFlow", "OpenCV", "MediaPipe", "LLMs", "RAG"],
  },
];

const WhatIDoSection = () => (
  <SectionWrapper id="services" title="What I Do" subtitle="Engineering across the stack — from code to cloud">
    <div className="grid sm:grid-cols-2 gap-4">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          className="group glass rounded-xl p-6 hover:glow-border transition-all relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
          <div className="relative">
            <div className="inline-flex p-3 bg-primary/10 border border-primary/20 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon size={20} className="text-primary" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-xs text-secondary-foreground leading-relaxed mb-4">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono px-2 py-1 bg-secondary/60 border border-border rounded text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhatIDoSection;
