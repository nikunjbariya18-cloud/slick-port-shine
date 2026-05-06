import { motion } from "framer-motion";
import { Trophy, Rocket, Users, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";
import dnicaImg from "@/assets/dnica.png";
import meciaImg from "@/assets/mecia.jpg";
import sarjan2026Img from "@/assets/sarjan-2026-certificate.jpg";
import vyomImg from "@/assets/vyom.png";

const achievements = [
  {
    icon: Trophy,
    title: "Gold Medal",
    desc: "Achieved the gold medal in college sem-2 🥇🎓",
    certificate: dnicaImg,
    imageClass: "object-cover object-center scale-[1.04]",
  },
  {
    icon: Rocket,
    title: "Mecia Hacks",
    desc: "Participated in creative tech event – Hackathon (Mecia Hacks 2.0) 🚀💻",
    certificate: meciaImg,
    imageClass: "object-cover object-center scale-[1.04]",
  },
  {
    icon: Users,
    title: "Vyom Event",
    desc: "Worked as Co-ordinator in the Vyom Event at SVIT, Vasad. 🤝👨‍💻",
    certificate: vyomImg,
    imageClass: "object-cover object-center scale-[1.05]",
  },
  {
    icon: Award,
    title: "SARJAN 2026",
    desc: "Listed in top project name sarjan event 🏆✨",
    certificate: sarjan2026Img,
    imageClass: "object-cover object-center scale-[1.04]",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-20 grid-bg">
    <div className="container mx-auto px-4">
      <SectionTitle title="Achievements" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {achievements.map(({ icon: Icon, title, desc, certificate, imageClass, featured }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.03 }}
            className={`glass-card rounded-xl p-6 text-center hover:glow-border-strong transition-all duration-300 group ${
              featured ? "sm:col-span-2 lg:col-span-3 max-w-5xl mx-auto w-full p-2" : ""
            }`}
          >
            {certificate && (
              <div className={`w-full rounded-xl bg-white border border-black/5 shadow-sm ${
                featured ? "" : "aspect-[4/3] overflow-hidden mb-4"
              }`}>
                <img
                  src={certificate}
                  alt={`${title} certificate`}
                  className={featured ? imageClass : `w-full h-full ${imageClass}`}
                />
              </div>
            )}
            {!featured && Icon && (
              <>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={26} />
                </div>
                <h3 className="font-display text-sm font-bold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
