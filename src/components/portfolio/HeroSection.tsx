import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import profileImg from "@/assets/Screenshot_20251017_213313.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(210 100% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(210 100% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        {/* Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden glow-border animate-pulse-glow">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 bg-primary/10 border border-primary/20 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-primary">Open to work</span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <Sparkles size={16} className="text-accent" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
              Enthusiastic Learner
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            <span className="text-gradient">AI / ML</span>
            <br />
            <span className="text-foreground">Engineer</span>
          </h1>

          <p className="text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed mb-8">
            Exploring the frontiers of Artificial Intelligence, Computer Vision, and Cloud-Native systems. 
            Building intelligent solutions that make a difference.
          </p>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
