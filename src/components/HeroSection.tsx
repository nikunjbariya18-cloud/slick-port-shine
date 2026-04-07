import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden grid-bg">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
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
              {"< Mobile App Developer />"}
            </span>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-md mb-6 mx-auto md:mx-0">
            Aspiring Software Developer passionate about building cross-platform apps for Android and iOS.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mb-6 justify-center md:justify-start">
            {[
              { icon: Instagram, href: "https://www.instagram.com/nik_bariya4516/" },
              { icon: Facebook, href: "https://www.facebook.com/nikunj.bariya.167" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nikunj-bariya-138243357" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300"
              >
                <Icon size={18} />
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
              href="#contact"
              className="px-6 py-3 rounded-lg font-bold text-sm border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right: Profile + Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex flex-col items-center relative"
        >
          {/* Profile image */}
          <div className="relative mb-4">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/50 animate-pulse-glow">
              <img src={profileImg} alt="Nikunj Bariya" className="w-full h-full object-cover" width={512} height={512} />
            </div>
          </div>

          {/* Floating phone */}
          <div className="animate-float">
            <img src={heroPhone} alt="Mobile Development" className="w-56 md:w-72 drop-shadow-[0_0_30px_hsl(180_100%_50%/0.3)]" width={512} height={640} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-primary/50" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
