import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";

const contactCards = [
  { icon: Mail, title: "Email", value: "nikbariya4516@gmail.com" },
  { icon: Phone, title: "Phone", value: "+91 9023829347" },
  { icon: MapPin, title: "Location", value: "Vadodara, Gujarat, India" },
];

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <SectionTitle title="Contact" />

      <div className="flex flex-wrap justify-center gap-5 mb-12">
        {contactCards.map(({ icon: Icon, title, value }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="glass-card rounded-xl p-6 w-64 text-center hover:glow-border transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display text-sm font-bold text-foreground mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground">{value}</p>
          </motion.div>
        ))}
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        action="https://formspree.io/f/xjkrnykv"
        method="post"
        className="glass-card rounded-2xl p-8 max-w-xl mx-auto"
      >
        <h3 className="font-display text-xl font-bold text-foreground text-center mb-6">Send Message</h3>
        <div className="space-y-4">
          {[
            { name: "name", placeholder: "Your Name", type: "text" },
            { name: "email", placeholder: "Your Email", type: "email" },
            { name: "subject", placeholder: "Subject", type: "text" },
          ].map(({ name, placeholder, type }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              required
              className="w-full px-4 py-3 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all text-sm"
            />
          ))}
          <textarea
            name="Message"
            placeholder="Message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all text-sm resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold text-sm text-primary-foreground bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_hsl(180_100%_50%/0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Send size={16} /> Send Message
          </button>
        </div>
      </motion.form>
    </div>
  </section>
);

export default ContactSection;
