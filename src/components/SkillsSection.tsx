import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skills = [
  { name: "C", icon: "🔷" },
  { name: "C++", icon: "🔶" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Java", icon: "☕" },
  { name: "React JS", icon: "⚛️" },
  { name: ".NET", icon: "🟣" },
  { name: "C#", icon: "🟢" },
  { name: "PHP", icon: "🐘" },
  { name: "Python", icon: "🐍" },
  { name: "MySQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "NodeJS", icon: "🟩" },
  { name: "Android Studio", icon: "📱" },
  { name: "Flutter", icon: "🦋" },
  { name: "FlutterFlow", icon: "🔧" },
  { name: "Supabase", icon: "⚡" },
  { name: "Figma", icon: "🎯" },
];

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-4">
      <SectionTitle title="Skills" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map(({ name, icon }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.08, y: -5 }}
            className="glass-card rounded-xl p-4 text-center cursor-default group hover:glow-border transition-all duration-300"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{icon}</div>
            <p className="text-sm font-semibold text-foreground">{name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
