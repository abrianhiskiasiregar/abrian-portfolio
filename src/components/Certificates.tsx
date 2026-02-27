"use client";

import { Award, Calendar, Tag, ExternalLink, TrendingUp } from "lucide-react";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-orange-400 text-sm tracking-widest">
            08.
          </span>
          <h2 className="font-display font-bold text-4xl text-white">
            Certifications, Achievements & Growth
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        </div>

        <p className="text-white/50 mb-14 text-lg max-w-2xl">
          Continuous learning through competitions, structured programs,
          and hands-on projects that strengthen both technical and
          problem-solving capabilities.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-[#161616] border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Banner */}
              <div
                className={`bg-gradient-to-r ${cert.color} p-6 relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20 dot-pattern" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 text-3xl">
                    {cert.icon}
                  </div>

                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-white text-base leading-tight mb-2 group-hover:text-orange-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-orange-400 text-sm font-medium mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Issued {cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Growth / Impact */}
                {cert.impact && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-orange-400" />
                      <span className="text-white/30 text-xs font-mono">
                        GROWTH & IMPACT
                      </span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {cert.impact}
                    </p>
                  </div>
                )}

                {/* Skills */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3.5 h-3.5 text-white/30" />
                    <span className="text-white/30 text-xs font-mono">
                      SKILLS & COMPETENCIES
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1 rounded-full hover:border-orange-500/40 hover:text-white transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}