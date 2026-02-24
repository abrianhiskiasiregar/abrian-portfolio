"use client";

import { MapPin, Calendar, Briefcase, CheckCircle } from "lucide-react";
import { experiences } from "@/data/experiences";

export default function Timeline() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-orange-400 text-sm tracking-widest">05.</span>
          <h2 className="font-display font-bold text-4xl text-white">Work Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="relative md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-orange-500 border-4 border-[#0F0F0F] shadow-lg shadow-orange-500/40 hidden md:block z-10" />

                <div className="bg-[#161616] border border-white/8 rounded-2xl p-8 card-glow hover:border-orange-500/20 transition-all">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Company logo placeholder */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-white leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-orange-400 font-semibold mt-1">{exp.company}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="bg-orange-500/15 text-orange-400 text-xs px-3 py-0.5 rounded-full border border-orange-500/20 font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-col gap-2 lg:text-right flex-shrink-0">
                      <div className="flex items-center gap-2 text-white/50 text-sm lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-sm lg:justify-end">
                        <span className="font-mono text-xs bg-white/5 px-2 py-0.5 rounded">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-sm lg:justify-end">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-xs">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-5">{exp.description}</p>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {exp.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/60 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="pt-5 border-t border-white/5">
                    <p className="text-white/30 text-xs font-mono mb-3">SKILLS GAINED</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-white/5 border border-white/8 text-white/60 text-xs px-3 py-1.5 rounded-full hover:border-orange-500/30 hover:text-white/80 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* "Open to opportunities" card */}
            <div className="relative md:pl-24">
              <div className="absolute left-5 top-6 w-7 h-7 rounded-full border-2 border-dashed border-white/20 hidden md:flex items-center justify-center z-10">
                <span className="w-2 h-2 rounded-full bg-white/30" />
              </div>
              <div className="bg-gradient-to-r from-orange-500/5 to-transparent border border-orange-500/15 rounded-2xl p-8 text-center">
                <p className="text-white/40 text-sm mb-2">What comes next?</p>
                <h4 className="font-display font-bold text-2xl text-white mb-2">
                  Your Company / Project
                </h4>
                <p className="text-white/50 mb-6">I'm open to internships, freelance, and full-time design opportunities.</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-orange-500/25"
                >
                  Let's Work Together →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
