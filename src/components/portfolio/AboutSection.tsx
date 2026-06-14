import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillSections = [
  {
    title: "Programming",
    items: ["Python", "Java", "C"],
  },
  {
    title: "DSA",
    items: ["Arrays", "Strings", "Stacks", "Queues", "Linked Lists", "Trees", "Graphs", "Recursion", "Sorting", "Searching", "Hashing", "Dynamic Programming"],
  },
  {
    title: "OOP",
    items: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction", "Design Patterns"],
  },
  {
    title: "AI / ML",
    items: ["Deep Learning", "LLMs", "Multi-Agent Systems", "Computer Vision", "NLP", "Model Training"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Cloud-Native", "CI/CD", "Docker", "Workflow Automation", "Linux", "DevOps"],
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "MediaPipe", "Object Detection", "Image Processing", "Eye Tracking"],
  },
  {
    title: "Networking",
    items: ["TCP/IP", "OSI Model", "IPv4 Addressing", "Subnetting", "Routing & Switching", "VLANs", "Cisco Packet Tracer", "Network Troubleshooting", "Network Security Fundamentals"],
  },
  {
    title: "Tools & Tech",
    items: ["Git", "Unity", "Arduino", "ESP8266", "Packet Tracer", "Linux", "VS Code"],
  },
  {
    title: "Hardware & PCB",
    items: ["Altium", "Proteus", "Circuit Design", "PCB Layout", "Soldering"],
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
          I enjoy turning ideas into real, production-ready solutions using <span className="text-primary font-semibold">software engineering, cloud technologies, and intelligent automation</span> to solve meaningful problems.
          I focus on building systems that are <span className="text-accent font-semibold">reliable, scalable, accessible</span>, and designed to make a lasting impact.
          I enjoy learning new technologies, solving complex challenges, and continuously improving my skills.
          Whether working with a team or independently, I bring curiosity, initiative, and a strong commitment to delivering high-quality solutions that create real value.
        </p>
      </motion.div>

      {/* Skills Grid - each section with individual skill chips */}
      <div className="space-y-4">
        {skillSections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-xl p-5 hover:glow-border transition-all"
          >
            <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">{section.title}</h3>
            <div className="flex flex-wrap gap-2">
              {section.items.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-mono px-3 py-1.5 bg-primary/8 text-foreground border border-primary/15 rounded-md hover:bg-primary/15 hover:border-primary/30 transition-all"
                >
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