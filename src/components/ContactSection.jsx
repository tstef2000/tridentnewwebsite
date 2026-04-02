import { motion } from "framer-motion";
import { MessageCircle, Clock, Users } from "lucide-react";

const cards = [
  { Icon: MessageCircle, title: "Message", desc: "Open a ticket in our Discord" },
  { Icon: Users, title: "Community", desc: "Join our server to connect" },
  { Icon: Clock, title: "Response Time", desc: "Usually within 24 hours" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,232,0.3), transparent)" }}
      />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#00d4e8" }}>
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-5">
            Ready to elevate your brand?
          </h2>
          <p className="text-white/40 max-w-xl mx-auto mb-16 text-sm leading-relaxed">
            Contact us today. We're here to bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
        >
          {cards.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,212,232,0.15),inset_0_0_0_1px_rgba(0,212,232,0.2)]"
              style={{
                background: "rgba(4,18,37,0.5)",
                border: "1px solid rgba(0,212,232,0.08)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              <Icon className="w-5 h-5 mx-auto mb-4" style={{ color: "#00d4e8" }} strokeWidth={1.5} />
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-1">{title}</h4>
              <p className="text-xs text-white/40">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://discord.gg/FdhYmQu8rb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-14 py-4 text-sm font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,232,0.45)]"
            style={{
              background: "linear-gradient(135deg, #00d4e8, #0090b0)",
              color: "#020d1f",
              boxShadow: "0 0 28px rgba(0,200,220,0.25)",
            }}
          >
            Open a Ticket
          </a>
        </motion.div>
      </div>
    </section>
  );
}