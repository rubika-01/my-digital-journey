import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Heart, Globe } from "lucide-react";

const activities = [
  "Best Social Innovation Award recipient",
  "Active participant in community-driven tech events",
  "Mentored junior teams in open-source projects",
  "Contributed to IEEE social impact initiatives",
];

const conferences = [
  "IEEE YESIST12 – Malaysia (Finalist)",
  "Indo-Malaysian Hackathon – Dekathlon 3.0 (Winner)",
  "SIH'24 (Smart India Hackathon)",
  "IEEE Xtreme Hackathon",
  "METI Japan Coding Contest 2025",
];

const SocialActivitiesSection = () => (
  <SectionWrapper id="social" title="Social Activities & Conferences" subtitle="Community impact & global participation">
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Heart size={16} className="text-pink-400" />
          <h3 className="text-sm font-bold text-foreground">Social Activities</h3>
        </div>
        <ul className="space-y-2">
          {activities.map((a) => (
            <li key={a} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-pink-400 mt-1.5 shrink-0" />
              <span className="text-xs text-secondary-foreground">{a}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass rounded-xl p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Globe size={16} className="text-primary" />
          <h3 className="text-sm font-bold text-foreground">Conference Participations</h3>
        </div>
        <ul className="space-y-2">
          {conferences.map((c) => (
            <li key={c} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="text-xs text-secondary-foreground">{c}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default SocialActivitiesSection;
