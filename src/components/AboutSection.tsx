import { motion } from "framer-motion";
import { Smartphone, Code, Layers, Zap } from "lucide-react";
import SectionTitle from "./SectionTitle";

const highlights = [
  { icon: Smartphone, label: "Mobile Dev", desc: "Android & iOS" },
  { icon: Code, label: "Languages", desc: "C, Java, C++" },
  { icon: Layers, label: "Cross-Platform", desc: "Flutter & FlutterFlow" },
  { icon: Zap, label: "Tools", desc: "Supabase, Figma" },
];

const AboutSection = () => (
  <section id="about" className="py-20 relative grid-bg">
    <div className="container mx-auto px-4">
      <SectionTitle title="About Me" />

      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-center text-base md:text-lg leading-relaxed mb-10"
        >
          Aspiring Software Developer with a solid foundation in C, Java, and C++, eager to build innovative
          and efficient applications. Passionate about cross-platform development, including Android and iOS,
          and dedicated to problem-solving. Seeking an opportunity to apply technical skills in a dynamic and
          growth-oriented environment. Committed to continuous learning and delivering high-quality software solutions.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-xl p-5 text-center group cursor-default hover:glow-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary" size={22} />
              </div>
              <h4 className="font-display text-xs font-semibold text-foreground mb-1">{label}</h4>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
