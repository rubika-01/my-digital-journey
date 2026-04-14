import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <SectionWrapper id="contact" title="Contact Me" subtitle="Let's connect and build something amazing">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-sm text-secondary-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. 
            Feel free to reach out!
          </p>

          <div className="space-y-3">
            <a href="mailto:rubikaofficial95@gmail.com" className="flex items-center gap-3 glass rounded-xl p-4 hover:glow-border transition-all group">
              <Mail size={18} className="text-primary group-hover:text-accent transition-colors" />
              <span className="text-xs text-foreground">rubikaofficial95@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/rubika-nataraj-864990293" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 glass rounded-xl p-4 hover:glow-border transition-all group">
              <Linkedin size={18} className="text-primary group-hover:text-accent transition-colors" />
              <span className="text-xs text-foreground">linkedin.com/in/rubika-nataraj-864990293</span>
            </a>
            <a href="https://github.com/1Rubika" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 glass rounded-xl p-4 hover:glow-border transition-all group">
              <Github size={18} className="text-primary group-hover:text-accent transition-colors" />
              <span className="text-xs text-foreground">github.com/1Rubika</span>
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Send size={14} />
            Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
