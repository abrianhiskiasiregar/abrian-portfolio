"use client";

const skills = [
  {
    name: "Google Workspace",
    category: "Productivity",
    level: 92,
    desc: "Docs, Sheets, Slides, Drive",
    color: "#4285F4",
    bg: "bg-[#4285F4]/10 border-[#4285F4]/25",
    textColor: "text-[#4285F4]",
    logo: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path fill="#4285F4" d="M4 4h18v18H4z" />
        <path fill="#34A853" d="M26 4h18v18H26z" />
        <path fill="#FBBC05" d="M4 26h18v18H4z" />
        <path fill="#EA4335" d="M26 26h18v18H26z" />
      </svg>
    ),
  },
  {
    name: "VS Code",
    category: "Development",
    level: 90,
    desc: "Code Editor & Debugging",
    color: "#007ACC",
    bg: "bg-[#007ACC]/10 border-[#007ACC]/25",
    textColor: "text-[#007ACC]",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path
          fill="#007ACC"
          d="M17.6 2.2c-.4-.2-.9-.1-1.2.2L9 9.2 5.4 6.5c-.3-.2-.7-.2-1 0L2.3 8c-.4.3-.4.9 0 1.2l3.6 2.8-3.6 2.8c-.4.3-.4.9 0 1.2l2.1 1.5c.3.2.7.2 1 0L9 14.8l7.4 6.8c.3.3.8.4 1.2.2.4-.2.6-.6.6-1V3c0-.4-.2-.8-.6-1z"
        />
      </svg>
    ),
  },
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
        <path
          d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
          fill="#1ABCFE"
        />
        <path
          d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
          fill="#0ACF83"
        />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path
          d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
          fill="#F24E1E"
        />
        <path
          d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
          fill="#A259FF"
        />
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
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <defs>
          <linearGradient
            id="canvaGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00C4CC" />
            <stop offset="100%" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" fill="url(#canvaGradient)" />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="white"
          fontFamily="Arial, sans-serif"
        >
          C
        </text>
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    category: "Analytics",
    level: 80,
    desc: "Web & App Traffic Analysis",
    color: "#F9AB00",
    bg: "bg-[#F9AB00]/10 border-[#F9AB00]/25",
    textColor: "text-[#F9AB00]",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect x="4" y="10" width="4" height="10" rx="2" fill="#F9AB00" />
        <rect x="10" y="6" width="4" height="14" rx="2" fill="#E37400" />
        <rect x="16" y="3" width="4" height="17" rx="2" fill="#F9AB00" />
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
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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
        <path
          d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302-.032.018v10.509a.8.8 0 0 1-.402.694L29.264 45.939a.801.801 0 0 1-.798 0l-9.35-5.387a.802.802 0 0 1-.399-.691V34.367l-9.216-5.307a.802.802 0 0 1-.4-.694V17.394a.801.801 0 0 1 .4-.694l9.55-5.504a.801.801 0 0 1 .798 0l9.35 5.387.032.018 9.208-5.302a.8.8 0 0 1 .797 0l9.35 5.387a.802.802 0 0 1 .24.278z"
          fill="#FF2D20"
        />
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
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Video Editing",
    category: "Creative",
    level: 85,
    desc: "Content Creation & Event Recap",
    color: "#9333EA",
    bg: "bg-[#9333EA]/10 border-[#9333EA]/25",
    textColor: "text-[#9333EA]",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#9333EA">
        <path d="M4 6h12a2 2 0 0 1 2 2v1l4-3v12l-4-3v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-orange-400 text-sm tracking-widest">
            03.
          </span>
          <h2 className="font-display font-bold text-4xl text-white">
            Skills & Tools
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        </div>

        <p className="text-white/50 text-lg mb-14 max-w-2xl">
          The arsenal I use to bring ideas from concept to pixel-perfect
          execution.
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
                <span
                  className={`text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 ${skill.textColor}`}
                >
                  {skill.category}
                </span>
              </div>

              {/* Name + desc */}
              <h3 className="font-display font-bold text-white text-lg mb-1">
                {skill.name}
              </h3>
              <p className="text-white/45 text-sm mb-5">{skill.desc}</p>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/30 font-mono">Proficiency</span>
                  <span
                    className={`font-mono font-semibold ${skill.textColor}`}
                  >
                    {skill.level}%
                  </span>
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
