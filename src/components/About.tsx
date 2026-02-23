"use client";

import { User, Zap, Target, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-orange-400 text-sm tracking-widest">02.</span>
          <h2 className="font-display font-bold text-4xl text-white">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – Text */}
          <div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              I'm{" "}
              <span className="text-white font-semibold">Abrian Hiskia Siregar</span> — an
              Informatics student with an{" "}
              <span className="text-orange-400">unwavering passion</span> for UI/UX design,
              graphic design, and the ever-evolving world of technology.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              I don't just design for aesthetics — I design for{" "}
              <span className="text-white/90">impact</span>. Every pixel, every prototype, every
              poster I craft is driven by a singular goal: to communicate a message so powerfully
              that it stops the scroll and demands attention.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Actively involved in tech communities, organizations, and competitions — I'm the
              kind of person who shows up early, stays late, and ships with pride. My work has
              earned recognition at national competitions, but I know the real work is
              never finished. I'm always{" "}
              <span className="text-orange-400 font-medium">building, learning, and leveling up</span>.
            </p>

            {/* Sigma quote */}
            <div className="relative bg-gradient-to-r from-orange-500/10 to-transparent border-l-2 border-orange-500 pl-6 py-4 rounded-r-xl mb-8">
              <p className="text-white/80 italic text-sm leading-relaxed">
                "I don't wait for opportunities — I engineer them. While others dream of making it,
                I'm in the lab making it happen. Growth isn't a destination; it's my default state."
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-orange-500/25"
              >
                Let's Collaborate
              </a>
              <a
                href="#projects"
                className="text-white/50 hover:text-white text-sm font-medium transition-colors"
              >
                View my work →
              </a>
            </div>
          </div>

          {/* Right – Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <User className="w-5 h-5" />,
                title: "User-Centered",
                desc: "Every design decision starts and ends with the user's needs, goals, and frustrations.",
                color: "text-orange-400",
                bg: "bg-orange-500/10 border-orange-500/20",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Fast Learner",
                desc: "I adapt rapidly to new tools, frameworks, and challenges with a growth mindset.",
                color: "text-blue-400",
                bg: "bg-blue-500/10 border-blue-500/20",
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "Goal-Driven",
                desc: "Whether it's a competition deadline or a client brief, I execute with precision.",
                color: "text-purple-400",
                bg: "bg-purple-500/10 border-purple-500/20",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Community-Active",
                desc: "Engaged in GDG, COMFTIK, campus orgs, and tech communities across Indonesia.",
                color: "text-green-400",
                bg: "bg-green-500/10 border-green-500/20",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`bg-[#161616] border rounded-2xl p-6 card-glow transition-all hover:-translate-y-1 ${card.bg}`}
              >
                <div className={`mb-4 ${card.color}`}>{card.icon}</div>
                <h4 className="font-display font-bold text-white text-base mb-2">{card.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}

            {/* Full-width info bar */}
            <div className="col-span-2 bg-[#161616] border border-white/6 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-white/40 text-xs font-mono mb-1">LOCATION</p>
                <p className="text-white font-medium text-sm">Medan, Sumatera Utara, Indonesia</p>
              </div>
              <div className="h-8 w-px bg-white/8" />
              <div>
                <p className="text-white/40 text-xs font-mono mb-1">STATUS</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-green-400 font-medium text-sm">Open to Work</p>
                </div>
              </div>
              <div className="h-8 w-px bg-white/8" />
              <div>
                <p className="text-white/40 text-xs font-mono mb-1">FOCUS</p>
                <p className="text-white font-medium text-sm">UI/UX & Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
