import { motion } from "framer-motion";
import { Palette, Video, Image, Fingerprint, Star, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Custom, professional logos for clans, servers, and communities that stand out.",
    features: ["Clan Logos", "Server Branding", "Esports Teams", "Custom Variations"],
  },
  {
    icon: Video,
    title: "Trailer Production",
    description: "High-impact video trailers showcasing server features and gameplay highlights.",
    features: ["Server Trailers", "Event Promotion", "Cinematic Clips", "Custom Animations"],
    featured: true,
  },
  {
    icon: Image,
    title: "Key Art & Graphics",
    description: "Eye-catching promotional artwork for banners, thumbnails, and social media.",
    features: ["Social Media Graphics", "YouTube Thumbnails", "Promotional Banners", "In-Game Assets"],
  },
  {
    icon: Fingerprint,
    title: "Brand Identity",
    description: "Complete branding packages including style guides and cohesive visual identity.",
    features: ["Style Guides", "Color Palettes", "Consistent Branding", "Visual Assets"],
  },
  {
    icon: Star,
    title: "Premium Packages",
    description: "Full-service creative solutions with dedicated support and unlimited revisions.",
    features: ["Custom Projects", "Unlimited Revisions", "Dedicated Support", "Fast Turnaround"],
  },
  {
    icon: MessageCircle,
    title: "Discord Design",
    description: "Custom Discord server setups, channel organization, and unique community branding.",
    features: ["Server Setup", "Channel Organization", "Role Hierarchies", "Custom Emojis & Branding"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#00d4e8" }}>
            What We Do
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-8 rounded-2xl cursor-default transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(0,212,232,0.18),inset_0_0_0_1px_rgba(0,212,232,0.25)]"
              style={{
                background: "rgba(4,18,37,0.55)",
                border: "1px solid rgba(0,212,232,0.1)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              {service.featured && (
                <div
                  className="absolute top-0 left-8 right-8 h-px rounded-full"
                  style={{ background: "linear-gradient(90deg, transparent, #00d4e8, transparent)" }}
                />
              )}
              {/* Hover glow layer */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(0,212,232,0.07) 0%, transparent 70%)" }}
              />

              <div className="relative">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(0,212,232,0.4)]"
                  style={{ background: "rgba(0,212,232,0.1)", border: "1px solid rgba(0,212,232,0.2)" }}
                >
                  <service.icon className="w-5 h-5" style={{ color: "#00d4e8" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-bold mb-3 uppercase tracking-wide text-white">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-white/40 flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#00d4e8" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}