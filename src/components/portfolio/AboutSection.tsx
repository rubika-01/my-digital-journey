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
          I am a highly motivated and fast-learning individual with strong adaptability and a continuous learning mindset.
          I have <span className="text-primary font-semibold">strong fundamentals in DSA, OOP, Cloud, and AI/ML</span>.
          I am quick to grasp new technologies and always ready to take on challenges with a problem-solving approach.
          Proficient in Python, Java, and C, with experience building real-world, algorithm-driven applications.
          I am committed, responsible, and focused on delivering quality work while continuously improving my technical and professional skills.
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