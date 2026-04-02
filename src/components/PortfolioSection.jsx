import { motion } from "framer-motion";
import { portfolioItems } from "../config/portfolio";
import React, { useRef } from "react";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#00d4e8" }}>
            Our Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Portfolio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ aspectRatio: "4/3", boxShadow: "0 0 0 1px rgba(0,212,232,0.08)" }}
            >
              {/* Media — image or video */}
              {item.type === "video" ? (
                <VideoCard src={item.media} poster={item.poster} />
              ) : (
                <img
                  src={item.media}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              {/* Default vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020d1f]/60 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{ background: "linear-gradient(to top, rgba(2,13,31,0.95) 0%, rgba(2,13,31,0.6) 50%, rgba(2,13,31,0.1) 100%)" }}
              >
                {/* Neon border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ boxShadow: "inset 0 0 0 1.5px rgba(0,212,232,0.45), 0 0 24px rgba(0,212,232,0.12)" }}
                />
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1.5" style={{ color: "#00d4e8" }}>
                    Portfolio
                  </p>
                  <h3 className="font-heading text-lg font-black uppercase tracking-wide text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
                  {item.watermark && (
                    <span className="block text-[11px] text-slate-400 mt-2">Made By {item.watermark}</span>
                  )}
                </div>
              </div>

              {/* Default title */}
              <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// VideoCard component for optimized video playback
function VideoCard({ src, poster }) {
  const videoRef = useRef(null);
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Use Intersection Observer to pause/play
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-110"
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      poster={poster || undefined}
      tabIndex={-1}
      style={{
        objectFit: 'cover',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
