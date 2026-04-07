import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "HarvestHub",
    desc: "An agriculture based e-commerce website.",
    tags: ["ASP.Net", "C#", "Visual Studio"],
    color: "from-green-500/20 to-primary/10",
  },
  {
    title: "Online Voting System",
    desc: "Web-based online voting application (Group Project).",
    tags: ["HTML5", "CSS", "JavaScript"],
    color: "from-blue-500/20 to-primary/10",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 grid-bg">
    <div className="container mx-auto px-4">
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map(({ title, desc, tags, color }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:glow-border-strong transition-all duration-500"
          >
            {/* Gradient header bar */}
            <div className={`h-2 bg-gradient-to-r ${color}`} />
            <div className="p-6">
              {/* Phone mockup icon */}
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <ExternalLink className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
