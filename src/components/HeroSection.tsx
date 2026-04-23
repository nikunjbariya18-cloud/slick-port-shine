import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";
import profileImg from "@/assets/pf1_1080x1080.jpg";
import instaIcon from "@/assets/insta.jpeg";
import fbIcon from "@/assets/fb.png";
import lnIcon from "@/assets/ln.png";

const socials = [
  { icon: instaIcon, href: "https://www.instagram.com/nik.bariya4516?igsh=N2gwYndkaDkwdncw", alt: "Instagram" },
  { icon: fbIcon, href: "https://www.facebook.com/nikunj.bariya.167", alt: "Facebook" },
  { icon: lnIcon, href: "https://www.linkedin.com/in/nikunj-bariya-138243357", alt: "LinkedIn" },
];

const roles = ["Mobile App Developer", "Flutter Developer", "Full Stack Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden grid-bg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 order-2 md:order-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Available for hire</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">
            Hello, I'm{" "}
            <span className="text-gradient">Nikunj Bariya</span>
          </h1>

          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <span className="font-display text-sm md:text-base text-primary tracking-wider">
              {"< "}{displayed}<span className="animate-pulse">|</span>{" />"}
            </span>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-md mb-6 mx-auto md:mx-0">
            Aspiring Software Developer passionate about building cross-platform apps for Android and iOS.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mb-6 justify-center md:justify-start">
            {socials.map(({ icon, href, alt }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center overflow-hidden hover:glow-border transition-all duration-300 hover:scale-110"
              >
                <img src={icon} alt={alt} className="w-6 h-6 rounded-full object-cover" />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=nikbariya4516@gmail.com&su=Hiring+Conversation&body=Hi,+I+want+to+hire+you...&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-bold text-sm text-primary-foreground bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_hsl(180_100%_50%/0.4)] transition-all duration-300 hover:scale-105"
            >
              <Mail className="inline mr-2" size={16} />
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-bold text-sm border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Download className="inline mr-2" size={16} />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 order-1 md:order-2 flex items-center justify-center relative"
        >
          <div className="relative">
            <div className="absolute inset-[12px] rounded-full bg-cyan-400/20 blur-[16px] scale-[1.01]" />
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full p-[3px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.55),0_0_18px_rgba(34,211,238,0.3),0_0_28px_rgba(34,211,238,0.14)]">
              <div className="w-full h-full rounded-full p-[6px] bg-[#0b0f14]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Nikunj Bariya"
                    className="w-full h-full object-cover object-center scale-100"
                    width={1080}
                    height={1080}
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 animate-float">
              <img src={heroPhone} alt="Mobile Development" className="w-40 md:w-52 drop-shadow-[0_0_30px_hsl(180_100%_50%/0.3)]" width={512} height={640} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
