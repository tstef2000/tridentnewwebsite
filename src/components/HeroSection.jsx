import { motion } from "framer-motion";

const LOGO = "/logo.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://tridentstudios.store/videos/hero-bg.mp4" type="video/mp4" />
        <source src="https://tridentstudios.store/videos/hero-bg.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#020d1f]/70 via-[#041225]/50 to-[#020d1f]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041225]/40 via-transparent to-[#041225]/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >


          <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight leading-none">
            <span className="text-white drop-shadow-[0_0_40px_rgba(0,200,220,0.3)]">Trident</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #00d4e8 0%, #00a8c6 50%, #0090b0 100%)" }}
            >
              Studios
            </span>
          </h1>

          <p className="text-base sm:text-xl text-white/60 max-w-md mx-auto font-body tracking-widest uppercase">
            Where your dreams become reality
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a
              href="#portfolio"
              className="px-10 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,232,0.5)]"
              style={{
                background: "linear-gradient(135deg, #00d4e8, #0090b0)",
                color: "#020d1f",
                boxShadow: "0 0 24px rgba(0,200,220,0.3)",
              }}
            >
              View Our Work
            </a>
            <a
              href="https://discord.gg/FdhYmQu8rb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3.5 text-sm font-bold uppercase tracking-widest rounded-full border border-white/20 text-white/80 hover:border-[#00d4e8]/60 hover:text-[#00d4e8] transition-all duration-300 backdrop-blur-sm"
            >
              Join Community
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}