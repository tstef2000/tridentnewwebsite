import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarField from "../components/StarField";
import { team } from "../config/artist";

const LOGO = "/logo.png";

// Discord SVG icon
const DiscordIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// YouTube SVG icon
const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);



function ArtistCard({ member, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(4,18,37,0.55)",
        border: "1px solid rgba(0,212,232,0.1)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        minHeight: "280px",
      }}
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(0,212,232,0.35), 0 0 30px rgba(0,212,232,0.1)" }}
      />
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(0,212,232,0.07) 0%, transparent 70%)" }}
      />

      {/* DEFAULT STATE — always visible, hidden on hover */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 h-full transition-all duration-400 group-hover:opacity-0 group-hover:scale-95">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-5"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,232,0.15), rgba(0,144,176,0.1))",
            border: "1.5px solid rgba(0,212,232,0.25)",
            boxShadow: "0 0 30px rgba(0,212,232,0.12)",
          }}
        >
          <span className="font-heading text-3xl font-black" style={{ color: "#00d4e8" }}>
            {member.name.charAt(0)}
          </span>
        </div>
        <h3 className="font-heading text-xl font-black uppercase tracking-wide text-white text-center mb-1">
          {member.name}
        </h3>
        <p className="text-xs text-center uppercase tracking-widest" style={{ color: "#00d4e8" }}>
          {member.role}
        </p>
      </div>

      {/* HOVER STATE — revealed on hover */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400"
      >
        {/* Small avatar */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,232,0.2), rgba(0,144,176,0.15))",
            border: "1.5px solid rgba(0,212,232,0.3)",
          }}
        >
          <span className="font-heading text-lg font-black" style={{ color: "#00d4e8" }}>
            {member.name.charAt(0)}
          </span>
        </div>

        <h3 className="font-heading text-lg font-black uppercase tracking-wide text-white text-center mb-1">
          {member.name}
        </h3>
        <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: "#00d4e8" }}>
          {member.role}
        </p>
        <p className="text-xs text-white/50 text-center leading-relaxed mb-6 px-2">
          {member.description}
        </p>

        {Object.keys(member.socials).length > 0 && (
          <div className="flex items-center justify-center gap-4 pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", width: "100%" }}
          >
            {member.socials.discord && (
              <a
                href={member.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#5865F2] transition-colors duration-200"
                title="Discord"
              >
                <DiscordIcon />
              </a>
            )}
            {member.socials.youtube && (
              <a
                href={member.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#FF0000] transition-colors duration-200"
                title="YouTube"
              >
                <YouTubeIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Artists() {
  return (
    <div className="min-h-screen font-body" style={{ background: "#020d1f" }}>
      <StarField />
      <Navbar />

      <div
        className="relative pt-36 pb-20 px-6 text-center"
        style={{ borderBottom: "1px solid rgba(0,212,232,0.08)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#00d4e8" }}>
            The Crew
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
            Our Artists
          </h1>
          <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
            The talented creators behind every Trident Studios project — passionate Rust players turned
            professional designers and artists.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <ArtistCard key={member.name} member={member} i={i} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}