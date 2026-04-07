import { motion } from "framer-motion";
import { GraduationCap, School, Calendar, Star, Percent } from "lucide-react";
import SectionTitle from "./SectionTitle";

const education = [
  { icon: GraduationCap, school: "SVIT, Vasad", degree: "Master in Computer Application (MCA)", year: "2024–2026", score: "SPI: 8.00", scoreIcon: Star },
  { icon: GraduationCap, school: "DNICA, Anand", degree: "Bachelor in Computer Application (BCA)", year: "2022–2024", score: "CGPA: 9.16", scoreIcon: Star },
  { icon: School, school: "T.B. High School, Bhadran", degree: "12th Science", year: "2018–2019", score: "Per: 53.54", scoreIcon: Percent },
  { icon: School, school: "Sarvajanik High School, Valvod", degree: "10th", year: "2016–2017", score: "Per: 75.00", scoreIcon: Percent },
];

const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="container mx-auto px-4">
      <SectionTitle title="Education" />

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {education.map(({ icon: Icon, school, degree, year, score, scoreIcon: ScoreIcon }, i) => (
          <motion.div
            key={school}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-xl p-5 hover:glow-border transition-all duration-300"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="text-primary" size={18} />
              </div>
              <div>
                <h3 className="font-display text-xs font-bold text-primary">{school}</h3>
                <p className="text-sm font-semibold text-foreground">{degree}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar size={12} className="text-primary" />{year}</span>
              <span className="flex items-center gap-1"><ScoreIcon size={12} className="text-primary" />{score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
