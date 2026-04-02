import { motion } from "framer-motion";

const team = [
  {
    name: "Moonkie",
    role: "Founder, Artist & Editor",
    socials: {
      discord: "https://discord.gg/dPj6S5Vc2A",
      youtube: "https://www.youtube.com/@MoonkieYT",
    },
  },
  {
    name: "Krynn",
    role: "Founder & Artist",
    socials: {
      discord: "https://discord.gg/dPj6S5Vc2A",
      youtube: "https://www.youtube.com/@KrynnRust",
    },
  },
  {
    name: "Rose",
    role: "Senior Artist",
    socials: {
      discord: "https://discord.gg/dPj6S5Vc2A",
      youtube: "https://www.youtube.com/@boringrose123",
    },
  },
  {
    name: "Washed",
    role: "Senior Artist",
    socials: {
      discord: "https://discord.gg/dPj6S5Vc2A",
      youtube: "https://www.youtube.com/@Washedrust",
    },
  },
  {
    name: "Ghoul",
    role: "Discord Designer & Digital Artist",
    socials: {
      discord: "https://discord.gg/tridentfx",
    },
  },
  {
    name: "Echo",
    role: "3D Artist",
    socials: {},
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-32 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">The Crew</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Meet Our Artists
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card border border-border/50 p-8 text-center hover:border-primary/30 transition-all duration-500"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-6">{member.role}</p>

              <div className="flex items-center justify-center gap-4">
                {member.socials.discord && (
                  <a
                    href={member.socials.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    Discord
                  </a>
                )}
                {member.socials.youtube && (
                  <a
                    href={member.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    YouTube
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}