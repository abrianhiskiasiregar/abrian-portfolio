"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Smartphone,
  Monitor,
  Palette,
  ArrowUpRight,
} from "lucide-react";
import { projects } from "@/data/projects";

const typeIcons = {
  "UI/UX Web": <Monitor className="w-4 h-4" />,
  "UI/UX Mobile": <Smartphone className="w-4 h-4" />,
  "Graphic Design": <Palette className="w-4 h-4" />,
};

const typeColors = {
  "UI/UX Web": "text-blue-400 bg-blue-500/10 border-blue-500/25",
  "UI/UX Mobile": "text-purple-400 bg-purple-500/10 border-purple-500/25",
  "Graphic Design": "text-orange-400 bg-orange-500/10 border-orange-500/20",
};

/* ===================== */
/* WEB MOCKUP (REAL IMAGE) */
/* ===================== */
function WebMockup({ image }: { image: string }) {
  return (
    <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 relative bg-black/20">
      {/* Browser chrome */}
      <div className="bg-black/40 px-3 py-2 flex items-center gap-2 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 bg-white/10 rounded h-4 mx-2" />
      </div>

      <div className="relative w-full h-[calc(100%-40px)]">
        <Image
          src={image}
          alt="Project preview"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}

/* ===================== */
/* MOBILE MOCKUP (REAL IMAGE) */
/* ===================== */
function MobileMockup({ image }: { image: string }) {
  return (
    <div className="w-40 mx-auto">
      <div
        className="rounded-[2rem] border-4 border-white/20 overflow-hidden relative bg-black/20"
        style={{ aspectRatio: "9/19" }}
      >
        {/* Status bar */}
        <div className="bg-black/30 h-8 flex items-center justify-center">
          <div className="w-16 h-3 bg-black/50 rounded-full" />
        </div>

        <div className="relative w-full h-[calc(100%-32px)]">
          <Image
            src={image}
            alt="Mobile project"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

/* ===================== */
/* POSTER MOCKUP (REAL IMAGE) */
/* ===================== */
function PosterMockup({ image }: { image: string }) {
  return (
    <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-white/10 relative bg-black/20">
      <Image src={image} alt="Poster project" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

/* ===================== */
/* MAIN COMPONENT */
/* ===================== */
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "UI/UX Web", "UI/UX Mobile", "Graphic Design"];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-orange-400 text-sm tracking-widest">
            05.
          </span>
          <h2 className="font-display font-bold text-4xl text-white">
            My Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        </div>

        <p className="text-white/50 mb-10 text-lg max-w-2xl">
          A selection of UI/UX and design work — from web platforms to mobile
          apps and award-winning competition posters.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-white/5 border border-white/8 text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group bg-[#161616] border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-all hover:-translate-y-1"
            >
              {/* Mockup */}
              <div
                className={`bg-gradient-to-br ${project.color} p-6 relative`}
              >
                {project.type === "UI/UX Web" && (
                  <WebMockup image={project.image} />
                )}
                {project.type === "UI/UX Mobile" && (
                  <MobileMockup image={project.image} />
                )}
                {project.type === "Graphic Design" && (
                  <PosterMockup image={project.image} />
                )}

                <div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full shadow-lg"
                  style={{
                    background: project.accent,
                    boxShadow: `0 0 12px ${project.accent}`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border font-medium mb-4 ${typeColors[project.type]}`}
                >
                  {typeIcons[project.type]}
                  {project.type}
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/40 text-sm mb-3 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-white/5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-white/5 text-white/50 text-xs px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 text-sm font-medium hover:gap-3 transition-all"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
