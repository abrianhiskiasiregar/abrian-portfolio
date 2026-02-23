"use client";

const skills = [
  {
    name: "Figma",
    category: "Design",
    level: 90,
    desc: "UI/UX Prototyping",
    color: "#F24E1E",
    bg: "bg-[#F24E1E]/10 border-[#F24E1E]/25",
    textColor: "text-[#F24E1E]",
    logo: (
      <svg viewBox="0 0 38 57" fill="none" className="w-8 h-8">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: "Canva",
    category: "Design",
    level: 95,
    desc: "Graphic Design & Posters",
    color: "#00C4CC",
    bg: "bg-[#00C4CC]/10 border-[#00C4CC]/25",
    textColor: "text-[#00C4CC]",
    logo: (
      <svg viewBox="0 0 200 200" className="w-8 h-8">
        <circle cx="100" cy="100" r="100" fill="#00C4CC"/>
        <path d="M100 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c19.3 0 36.77-7.83 49.49-20.51l-14.14-14.14C126.32 144.37 113.66 150 100 150c-27.61 0-50-22.39-50-50s22.39-50 50-50c13.66 0 26.32 5.63 35.35 14.65l14.14-14.14C136.77 37.83 119.3 30 100 30z" fill="white"/>
        <circle cx="100" cy="100" r="20" fill="white"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "Dev Tools",
    level: 75,
    desc: "Version Control",
    color: "#E6EDF3",
    bg: "bg-white/8 border-white/15",
    textColor: "text-white/80",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: "Laravel",
    category: "Backend",
    level: 60,
    desc: "PHP Framework",
    color: "#FF2D20",
    bg: "bg-[#FF2D20]/10 border-[#FF2D20]/25",
    textColor: "text-[#FF2D20]",
    logo: (
      <svg viewBox="0 0 50 52" className="w-8 h-8">
        <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302-.032.018v10.509a.8.8 0 0 1-.402.694L29.264 45.939a.801.801 0 0 1-.798 0l-9.35-5.387a.802.802 0 0 1-.399-.691V34.367l-9.216-5.307a.802.802 0 0 1-.4-.694V17.394a.801.801 0 0 1 .4-.694l9.55-5.504a.801.801 0 0 1 .798 0l9.35 5.387.032.018 9.208-5.302a.8.8 0 0 1 .797 0l9.35 5.387a.802.802 0 0 1 .24.278z" fill="#FF2D20"/>
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend",
    level: 70,
    desc: "UI Component Library",
    color: "#61DAFB",
    bg: "bg-[#61DAFB]/10 border-[#61DAFB]/25",
    textColor: "text-[#61DAFB]",
    logo: (
      <svg viewBox="-11.5 -10.232 23 20.463" className="w-8 h-8">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Microsoft Office",
    category: "Productivity",
    level: 85,
    desc: "Word, Excel, PowerPoint",
    color: "#D83B01",
    bg: "bg-[#D83B01]/10 border-[#D83B01]/25",
    textColor: "text-[#D83B01]",
    logo: (
      <svg viewBox="0 0 23 23" className="w-8 h-8">
        <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
        <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
        <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
        <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-orange-400 text-sm tracking-widest">03.</span>
          <h2 className="font-display font-bold text-4xl text-white">Skills & Tools</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        </div>

        <p className="text-white/50 text-lg mb-14 max-w-2xl">
          The arsenal I use to bring ideas from concept to pixel-perfect execution.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              style={{ animationDelay: `${i * 80}ms` }}
              className={`group bg-[#161616] border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 card-glow ${skill.bg}`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/8">
                  {skill.logo}
                </div>
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 ${skill.textColor}`}>
                  {skill.category}
                </span>
              </div>

              {/* Name + desc */}
              <h3 className="font-display font-bold text-white text-lg mb-1">{skill.name}</h3>
              <p className="text-white/45 text-sm mb-5">{skill.desc}</p>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/30 font-mono">Proficiency</span>
                  <span className={`font-mono font-semibold ${skill.textColor}`}>{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 delay-300"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(to right, ${skill.color}, ${skill.color}aa)`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
