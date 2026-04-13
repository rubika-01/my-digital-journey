import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Users, FileText } from "lucide-react";

const roles = [
  { society: "IEEE Education Society", roles: ["Treasurer", "Vice Chair", "Proposal & Project Coordinator"] },
  { society: "SSIT", roles: ["Secretary"] },
  { society: "Women in Engineering (WIE)", roles: ["Member"] },
  { society: "Power & Energy Society", roles: ["EXECOM Member"] },
  { society: "IEEE SB KPRIET", roles: ["Report & Documentation Team"] },
];

const events = [
  "IEEE Xtreme Hackathon",
  "SIH'24 Participant",
  "IEEE YESIST12 – Malaysia Finalist",
  "Indo-Malaysian Hackathon – Dekathlon 3.0",
  "Multiple IEEE events & workshops",
];

const IEEESection = () => (
  <SectionWrapper id="ieee" title="IEEE Activities" subtitle="Leadership & community involvement">
    <div className="grid md:grid-cols-2 gap-6">
      {/* Roles */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Users size={16} className="text-primary" />
          <h3 className="text-sm font-bold text-foreground">Leadership Roles</h3>
        </div>
        <div className="space-y-3">
          {roles.map((r) => (
            <div key={r.society}>
              <p className="text-xs font-semibold text-accent">{r.society}</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {r.roles.map((role) => (
                  <span key={role} className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 text-primary rounded-md">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Events */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass rounded-xl p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <FileText size={16} className="text-primary" />
          <h3 className="text-sm font-bold text-foreground">Events & Participations</h3>
        </div>
        <ul className="space-y-2">
          {events.map((e) => (
            <li key={e} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="text-xs text-secondary-foreground">{e}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 p-3 bg-accent/5 border border-accent/10 rounded-lg">
          <p className="text-[10px] font-mono text-accent">More events to be added soon...</p>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default IEEESection;
