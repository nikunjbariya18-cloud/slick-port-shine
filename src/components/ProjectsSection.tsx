import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import harvestHubImg from "@/assets/hh_1.png";
import tpInvoiceImg from "@/assets/TP_Brandmark_Color_Logo-100.png";
import curiosityHubImg from "@/assets/Curioisityhub.png";
import harvestHubLegacyImg from "@/assets/harvesthub-1-logo.png";
import ovsImg from "@/assets/ovs-transparent.png";
import farmAlertImg from "@/assets/farm-alert-logo.png";
import travelMateImg from "@/assets/travelmate-logo.png";
import portfolioImg from "@/assets/portfolio-screenshot.png";

const projects = [
  {
    title: "HarvestHub",
    desc: "An agriculture based e-commerce website.",
    tags: ["ASP.Net", "C#", "Visual Studio"],
    color: "from-green-500/20 to-primary/10",
    image: harvestHubLegacyImg,
    imageBg: "bg-white",
  },
  {
    title: "Online Voting System",
    desc: "Web-based online voting application (Group Project).",
    tags: ["HTML5", "CSS", "JavaScript"],
    color: "from-blue-500/20 to-primary/10",
    image: ovsImg,
    imageBg: "bg-zinc-50",
  },
  {
    title: "HarvestHub 2.0",
    desc: "An updated agriculture Android application built to support smarter farming workflows and a cleaner mobile-first experience.",
    tags: ["Android Studio", "Firebase", "Firestore"],
    color: "from-green-500/20 to-emerald-400/10",
    image: harvestHubImg,
    imageBg: "bg-white",
  },
  {
    title: "TPInvoice Bill",
    desc: "An invoice and billing application focused on streamlined bill management, designed for efficient business use.",
    tags: ["FlutterFlow", "Firebase"],
    color: "from-violet-500/20 to-fuchsia-400/10",
    image: tpInvoiceImg,
    imageBg: "bg-zinc-50",
  },
  {
    title: "CuriosityHub",
    desc: "A student-focused innovation and experience platform built to help learners explore ideas, share experiences, and grow together.",
    tags: ["Figma", "FlutterFlow", "Supabase"],
    color: "from-blue-500/20 to-amber-400/10",
    image: curiosityHubImg,
    imageBg: "bg-white",
  },
  {
    title: "Farm-Alert",
    desc: "A Gen-AI web application providing real-time weather forecasts, news updates, and agricultural advisory tips tailored for modern farming.",
    tags: ["React", "Tailwind CSS", "Supabase"],
    color: "from-emerald-500/20 to-green-400/10",
    image: farmAlertImg,
    imageBg: "bg-white",
  },
  {
    title: "TravelMate",
    desc: "A Gen-AI based travel companion app that automates trip planning, itinerary creation, and budget tracking for seamless travel experiences.",
    tags: ["React", "Tailwind CSS", "Gemini API"],
    color: "from-amber-500/20 to-orange-400/10",
    image: travelMateImg,
    imageBg: "bg-white",
  },
  {
    title: "Personal Portfolio",
    desc: "A sleek, responsive portfolio website showcasing career information, skills, projects, and achievements.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    color: "from-cyan-500/20 to-blue-400/10",
    image: portfolioImg,
    imageBg: "bg-transparent",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 grid-bg">
    <div className="container mx-auto px-4">
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map(({ title, desc, tags, color, image, imageBg }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:glow-border-strong transition-all duration-500"
          >
            <div className={`h-2 bg-gradient-to-r ${color}`} />
            <div className="p-6">
              <div className={`w-full h-44 rounded-xl overflow-hidden mb-4 ${imageBg ?? "bg-muted/60"} flex items-center justify-center ${title === "Personal Portfolio" ? "" : "p-5"}`}>
                <img src={image} alt={title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4 min-h-[72px]">{desc}</p>
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
