"use client";

import { useState, useEffect } from "react";
import { BadgeCheck, Download, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const roles = [
    "Tech Builder & Problem Solver",
    "UI/UX Engineer",
    "Community-Driven Developer",
  ];
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % roles.length),
      2800,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden dot-pattern"
    >
      {/* BG glow blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-orange-500/4 blur-[100px] pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0F0F0F]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tight">
            <span className="gradient-text">Brian</span>
            <span className="text-white/40">.</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "organizations",
              "workshops",
              "certificates",
              "contact",
            ].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="capitalize hover:text-orange-400 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-orange-500/25"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-400 text-sm font-medium font-mono">
                Available for work
              </span>
            </div>

            <h1 className="font-display font-bold leading-[1.05] mb-3">
              <span className="text-5xl lg:text-6xl xl:text-7xl text-white block">
                Hi, I'm
              </span>
              <span className="text-5xl lg:text-6xl xl:text-7xl gradient-text block">
                Abrian Hiskia
              </span>
              <span className="text-5xl lg:text-6xl xl:text-7xl text-white block">
                Siregar
              </span>
            </h1>

            {/* Pronouns + verified */}
            <div className="flex items-center gap-3 my-4">
              <span className="text-white/40 text-sm font-mono">He/Him</span>
              <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                <BadgeCheck className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-xs font-medium">
                  Verified
                </span>
              </div>
            </div>

            {/* Animated role */}
            <div className="h-10 mb-6 overflow-hidden">
              <p
                key={roleIdx}
                className="text-2xl font-semibold text-orange-400 animate-fade-up"
              >
                {roles[roleIdx]}
              </p>
            </div>

            <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-xl">
              I design and build impactful digital experiences that solve real
              problems. Passionate about technology, product thinking, and
              community growth. Actively contributing through projects,
              leadership, and continuous learning.
            </p>
            <p className="text-orange-400 text-sm font-medium mb-8">
              • Building solutions • Empowering communities • Growing with
              technology
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-10">
              {[
                { num: "3+", label: "Awards Won" },
                { num: "5+", label: "Projects Done" },
                { num: "2+", label: "Years Learning" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl text-white">
                    {s.num}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                See My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/images/CVabrian-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                View CV
              </a>
            </div>
          </div>

          {/* Right – Profile Card */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 blur-2xl scale-105" />

              <div className="relative bg-[#161616] border border-white/10 rounded-3xl p-7">
                {/* Avatar */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 ring-1 ring-white/10">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Abrian Hiskia Siregar"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-xl text-white">
                      Abrian Hiskia Siregar
                    </h3>
                    <BadgeCheck className="w-5 h-5 text-blue-400" />
                  </div>

                  <p className="text-orange-400 text-sm font-medium">
                    • Tech Builder • UI/UX Engineer • Design Enthusiast
                  </p>

                  <p className="text-white/55 text-sm leading-relaxed">
                    Informatics student focused on building meaningful digital
                    products, solving real-world problems, and contributing to
                    tech communities through leadership and collaboration.
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 pt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                    <span className="text-white/40 text-xs ml-2">
                      Community Contributor
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "Problem Solver",
                    "Product Thinking",
                    "UI/UX Design",
                    "Community Driven",
                  ].map((t) => (
                    <span
                      key={t}
                      className="bg-white/5 border border-white/10 text-white/60 text-xs px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-10 -left-5 bg-orange-500 rounded-2xl px-3 py-3 shadow-xl shadow-orange-500/30">
                <p className="text-white font-semibold text-sm">2nd Place 🏆</p>
                <p className="text-white/80 text-xs">COMFTIK Nasional 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs font-mono tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
