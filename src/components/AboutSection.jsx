import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Projects" },
  { value: "100+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

const qualities = [
  { title: "Professional Quality", description: "Industry-standard design and production" },
  { title: "Fast Turnaround", description: "Quick delivery without compromising quality" },
  { title: "Community Focused", description: "Deep understanding of Rust community needs" },
  { title: "Affordable Pricing", description: "Competitive rates for premium work" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,232,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#00d4e8" }}>
              Who We Are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-8">
              About Trident
            </h2>
            <p className="text-white/50 leading-relaxed mb-5 text-sm">
              Founded by passionate Rust players tired of copy-and-paste designs, Trident Studios
              specializes in creating professional, premium content for the Rust gaming community.
              With years of experience in graphic design, video production, and branding, we
              understand the unique needs of Rust servers, clans, and content creators.
            </p>
            <p className="text-white/50 leading-relaxed text-sm">
              Our mission is to elevate the Rust community's visual presence through high-quality,
              custom-designed graphics and videos that capture the essence of your brand.
            </p>

            <div className="flex gap-10 mt-12 pt-10 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-3xl font-black" style={{ color: "#00d4e8" }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {qualities.map((q) => (
              <motion.div
                key={q.title}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,212,232,0.15),inset_0_0_0_1px_rgba(0,212,232,0.2)]"
                style={{
                  background: "rgba(4,18,37,0.5)",
                  border: "1px solid rgba(0,212,232,0.08)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mb-4"
                  style={{ background: "#00d4e8", boxShadow: "0 0 8px #00d4e8" }}
                />
                <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white mb-2">
                  {q.title}
                </h4>
                <p className="text-xs text-white/40 leading-relaxed">{q.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}