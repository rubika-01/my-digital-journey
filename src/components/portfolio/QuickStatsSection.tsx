import { motion } from "framer-motion";
import { GraduationCap, Code, Users, Trophy, BadgeCheck } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "8.92", label: "CGPA" },
  { icon: Code, value: "600+", label: "Coding Problems Solved" },
  { icon: Users, value: "20+", label: "Technical Events Led" },
  { icon: Trophy, value: "20+", label: "Hackathon & Competition Wins" },
  { icon: BadgeCheck, value: "50+", label: "Certifications & Badges" },
];

const QuickStatsSection = () => (
  <section className="py-12 md:py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="glass rounded-xl p-4 text-center hover:glow-border transition-all"
          >
            <s.icon size={18} className="text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-black text-gradient">{s.value}</div>
            <div className="text-[10px] font-mono text-muted-foreground mt-1 uppercase tracking-wider leading-tight">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickStatsSection;
