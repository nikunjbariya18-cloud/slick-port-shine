import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";
import trustopayLogo from "@/assets/trustopay-logo.png";

const experiences = [
  {
    company: "Trustopay Innovations Pvt Ltd",
    logo: trustopayLogo,
    role: "Software Developer Intern",
    type: "Internship (Current)",
    duration: "2026 – Present",
    location: "India",
    description: [
      "Developing and maintaining mobile applications using Flutter & Dart",
      "Collaborating with the team on UI/UX implementation and API integration",
      "Working on real-world fintech solutions and payment features",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4">
      <SectionTitle title="Work Experience" />

      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card rounded-xl p-6 hover:glow-border transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-border bg-card">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-display text-sm font-bold text-primary">
                    {exp.company}
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {exp.type}
                  </span>
                </div>
                <p className="text-base font-semibold text-foreground flex items-center gap-1.5">
                  <Briefcase size={14} className="text-primary" />
                  {exp.role}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-primary" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-primary" />
                    {exp.location}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.description.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-[7px] text-[6px] flex-shrink-0">●</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
