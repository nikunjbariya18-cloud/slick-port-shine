import { motion } from "framer-motion";

const SectionTitle = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
      {title}
    </h2>
    <span className="section-glow-line" />
  </motion.div>
);

export default SectionTitle;
