import { motion } from "framer-motion";
import { Trophy, Code, Rocket, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";

const achievements = [
  { icon: Trophy, title: "Gold Medal", desc: "Secured 1st Rank at college level for academic excellence." },
  { icon: Code, title: "Blind Coding", desc: "Participated in Blind Coding competition at college level." },
  { icon: Rocket, title: "Mecia Hacks", desc: "Participated in creative tech event – Hackathon (Mecia Hacks 2.0)" },
  { icon: Users, title: "Event Coordinator", desc: "Worked as Co-ordinator in the Vyom Event." },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-20 grid-bg">
    <div className="container mx-auto px-4">
      <SectionTitle title="Achievements" />

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {achievements.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.03 }}
            className="glass-card rounded-xl p-6 text-center hover:glow-border-strong transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon className="text-primary" size={26} />
            </div>
            <h3 className="font-display text-sm font-bold text-primary mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
