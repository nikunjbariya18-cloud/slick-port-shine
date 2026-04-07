import { motion } from "framer-motion";
import { Trophy, Rocket, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";
import dnicaImg from "@/assets/dnica.png";
import meciaImg from "@/assets/mecia.jpg";
import vyomImg from "@/assets/vyom.png";

const achievements = [
  { icon: Trophy, title: "Gold Medal", desc: "Secured 1st Rank at college level for academic excellence.", certificate: dnicaImg },
  { icon: Rocket, title: "Mecia Hacks", desc: "Participated in creative tech event – Hackathon (Mecia Hacks 2.0)", certificate: meciaImg },
  { icon: Users, title: "Vyom Event", desc: "Worked as Co-ordinator in the Vyom Event at SVIT, Vasad.", certificate: vyomImg },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-20 grid-bg">
    <div className="container mx-auto px-4">
      <SectionTitle title="Achievements" />

      <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {achievements.map(({ icon: Icon, title, desc, certificate }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.03 }}
            className="glass-card rounded-xl p-6 text-center hover:glow-border-strong transition-all duration-300 group"
          >
            {certificate && (
              <div className="w-full h-32 rounded-lg overflow-hidden mb-4 bg-muted">
                <img src={certificate} alt={`${title} certificate`} className="w-full h-full object-cover" />
              </div>
            )}
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
