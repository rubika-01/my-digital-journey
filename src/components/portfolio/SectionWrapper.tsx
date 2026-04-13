import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionWrapper = ({ id, title, subtitle, children }: Props) => (
  <section id={id} className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-sm mt-2">{subtitle}</p>
        )}
        <div className="w-16 h-0.5 bg-primary/40 mt-4" />
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
