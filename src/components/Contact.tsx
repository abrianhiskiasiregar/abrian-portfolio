"use client";

import {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Send,
} from "lucide-react";
import { useState } from "react";

const contacts = [
  {
    label: "Email",
    value: "abrianhiskiasiregar@gmail.com",
    display: "abrianhiskiasiregar@gmail.com",
    href: "mailto:abrianhiskiasiregar@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    hoverBg: "hover:bg-red-500/15",
  },
  {
    label: "WhatsApp",
    value: "+62 812-6507-4902",
    display: "081265074902",
    href: "https://wa.me/6281265074902",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    hoverBg: "hover:bg-green-500/15",
  },
  {
    label: "GitHub",
    value: "abrianhiskiasiregar",
    display: "github.com/abrianhiskiasiregar",
    href: "https://github.com/abrianhiskiasiregar",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    color: "text-white/80",
    bg: "bg-white/8 border-white/15",
    hoverBg: "hover:bg-white/12",
  },
  {
    label: "LinkedIn",
    value: "abrian hiskia siregar",
    display: "linkedin.com/in/abrian-hiskia-siregar",
    href: "https://www.linkedin.com/in/abrian-hiskia-siregar-83648a314/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    hoverBg: "hover:bg-blue-500/15",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:abrianhiskiasiregar@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-28 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* BG decoration */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-orange-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-orange-400 text-sm tracking-widest">
            07.
          </span>
          <h2 className="font-display font-bold text-4xl text-white">
            Let's Connect
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        </div>

        {/* Hero text */}
        <div className="text-center mb-20">
          <h3 className="font-display font-bold text-4xl lg:text-6xl text-white leading-tight mb-6">
            Have an Awesome
            <br />
            <span className="gradient-text">Project Idea?</span>
          </h3>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Whether it's a design project, collaboration, internship, or just a
            conversation — my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left – Contact cards */}
          <div>
            <h4 className="font-display font-bold text-xl text-white mb-8">
              Find Me Here
            </h4>
            <div className="space-y-4">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 bg-[#161616] border rounded-2xl p-5 transition-all hover:-translate-x-1 group ${c.bg} ${c.hoverBg}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 ${c.color}`}
                  >
                    {c.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/40 text-xs font-mono mb-0.5">
                      {c.label}
                    </p>
                    <p className={`font-medium text-sm truncate ${c.color}`}>
                      {c.display}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 ${c.color} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0`}
                  />
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-8 bg-green-500/8 border border-green-500/20 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-green-400 font-semibold text-sm">
                  Available for Work
                </p>
                <p className="text-white/40 text-xs mt-0.5">
                  Open to internships, freelance & full-time design roles
                </p>
              </div>
            </div>
          </div>

          {/* Right – Quick contact form */}
          <div>
            <h4 className="font-display font-bold text-xl text-white mb-8">
              Send a Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs font-mono mb-2 block">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#161616] border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-mono mb-2 block">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@email.com"
                    required
                    className="w-full bg-[#161616] border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/40 text-xs font-mono mb-2 block">
                  MESSAGE
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Brian, I'd love to work with you on..."
                  required
                  rows={5}
                  className="w-full bg-[#161616] border border-white/8 rounded-xl px-4 py-3.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                />
              </div>
              <a
                href={`mailto:abrianhiskiasiregar@gmail.com?subject=Portfolio%20Inquiry&body=${encodeURIComponent(message)}`}
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </a>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-white/5 pt-10 text-center">
        <p className="text-white/25 text-sm font-mono">
          Designed & Built by{" "}
          <span className="text-orange-400">Abrian Hiskia Siregar</span> ·{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
