import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Trophy, Medal, Star, Award } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Samsung Solve for Tomorrow", detail: "Good Will Award", color: "text-yellow-400" },
  { icon: Star, title: "Best Student Award", detail: "Co-Curricular & Extra-Curricular Activities", color: "text-accent" },
  { icon: Medal, title: "Best Student in Department", detail: "ECE Department Recognition", color: "text-primary" },
  { icon: Award, title: "Best Social Innovation Award", detail: "Recognized for impactful social projects", color: "text-green-400" },
  { icon: Trophy, title: "METI Japan Coding Contest 2025", detail: "Top 0.4–5.8% among 5000+ participants", color: "text-yellow-400" },
  { icon: Star, title: "IEEE YESIST12 – Malaysia", detail: "Finalist", color: "text-accent" },
  { icon: Medal, title: "Indo-Malaysian Hackathon", detail: "Dekathlon 3.0 – Winner", color: "text-primary" },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Achievements & Awards" subtitle="Recognition and milestones">
    <div className="grid md:grid-cols-2 gap-3">
      {achievements.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass rounded-xl p-4 flex items-start gap-4 hover:glow-border transition-all"
        >
          <div className="p-2 bg-primary/5 rounded-lg shrink-0">
            <a.icon size={18} className={a.color} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">{a.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{a.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
