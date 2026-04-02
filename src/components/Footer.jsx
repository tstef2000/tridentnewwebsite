import { Link } from "react-router-dom";

const LOGO = "/logo.png";

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: "rgba(2,8,20,0.85)", borderTop: "1px solid rgba(0,212,232,0.1)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <img
                src={LOGO}
                alt="Trident Studios"
                className="h-9 w-9 object-contain group-hover:drop-shadow-[0_0_12px_rgba(0,212,232,0.8)] transition-all"
              />
              <span className="font-heading font-black text-sm uppercase tracking-[0.15em] text-white">
                Trident Studios
              </span>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm">
              Premium creative services for the Rust gaming community — logos, trailers, branding, and more.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-white/50 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/#services" },
                { label: "Portfolio", href: "/#portfolio" },
                { label: "About", href: "/#about" },
                { label: "Artists", href: "/artists" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-xs text-white/35 hover:text-[#00d4e8] transition-colors uppercase tracking-wider">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-white/50 mb-5">Socials</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://discord.gg/FdhYmQu8rb" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-white/35 hover:text-[#00d4e8] transition-colors uppercase tracking-wider">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@TridentGraphic" target="_blank" rel="noopener noreferrer"
                  className="text-xs text-white/35 hover:text-[#00d4e8] transition-colors uppercase tracking-wider">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs text-white/20">© {new Date().getFullYear()} Trident Studios. All rights reserved.</p>
          <p className="text-xs text-white/20">Premium Rust community creative services</p>
        </div>
      </div>
    </footer>
  );
}