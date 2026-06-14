import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(10, "Message is too short").max(1000),
  // Honeypot - must be empty
  website: z.string().max(0, "Spam detected").optional(),
});

const RECIPIENT = "rubikaofficial95@gmail.com";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const firstErr = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0] ?? "Invalid input";
      toast.error(firstErr);
      setStatus("error");
      return;
    }

    try {
      // FormSubmit.co — production-grade, no signup, delivers to recipient inbox
      const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
          _subject: `Portfolio Contact from ${parsed.data.name}`,
          _template: "table",
          _captcha: "true",
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "", website: "" });
      setStatus("success");
    } catch {
      // Fallback: open user's email client
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.open(`mailto:${RECIPIENT}?subject=${subject}&body=${body}`, "_blank");
      toast.error("Couldn't send directly. Opened your email app as fallback.");
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" title="Contact Me" subtitle="Let's connect and build something amazing">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-sm text-secondary-foreground leading-relaxed">
            I'm actively seeking <span className="text-primary font-semibold">SDE, SRE, Cloud, and Backend Engineering</span> internship & full-time opportunities. Always open to collaboration — reach out anytime.
          </p>

          <div className="space-y-3">
            <a href={`mailto:${RECIPIENT}`} className="flex items-center gap-3 glass rounded-xl p-4 hover:glow-border transition-all group">
              <Mail size={18} className="text-primary group-hover:text-accent transition-colors" />
              <span className="text-xs text-foreground">{RECIPIENT}</span>
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

        <motion.form
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Honeypot - hidden from real users */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
            required
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            required
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            required
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg py-3 text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" && <><Loader2 size={14} className="animate-spin" /> Sending...</>}
            {status === "success" && <><CheckCircle2 size={14} /> Sent!</>}
            {status === "error" && <><AlertCircle size={14} /> Try Again</>}
            {status === "idle" && <><Send size={14} /> Send Message</>}
          </button>
          <p className="text-[10px] font-mono text-muted-foreground text-center">
            Messages are delivered directly to my inbox.
          </p>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
