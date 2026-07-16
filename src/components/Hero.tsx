"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const titles = [
  "Senior Backend Engineer",
  "Distributed Systems Architect",
  "AI Integration Expert",
  ".NET / Python Developer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentTitle.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const nodes = [
    { label: "C#", color: "#2E8BC0" },
    { label: "Python", color: "#4FA8D9" },
    { label: "SQL", color: "#2E8BC0" },
    { label: "Docker", color: "#4FA8D9" },
    { label: "Redis", color: "#2E8BC0" },
    { label: "AI", color: "#4FA8D9" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-white/40 font-medium">
                Open to Remote & Relocation
              </span>
            </motion.div>

            <p className="text-sm sm:text-base text-accent font-medium mb-3 tracking-wide">
              Hi, I&apos;m
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-4 text-balance">
              Mohammad
              <br />
              <span className="gradient-text">Barzgar</span>
            </h1>

            <div className="h-8 sm:h-10 mb-6">
              <span className="text-lg sm:text-xl text-white/50 font-mono">
                {titles[titleIndex].substring(0, charIndex)}
                <span className="inline-block w-[3px] h-5 sm:h-6 bg-accent ml-1 animate-typing-cursor" />
              </span>
            </div>

            <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-xl mb-8">
              Senior Backend Engineer with 5+ years of experience designing
              enterprise-scale distributed systems. Expert in C# (.NET Core),
              Python, and AI integration.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20"
              >
                View Projects
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/mmdb1234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-barzgar-899476307"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="mailto:mohjammad200@gmail.com"
                className="text-white/30 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-white/10 text-sm">·</span>
              <span className="text-xs text-white/20">
                mohjammad200@gmail.com
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="aspect-square max-w-[500px] mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl" />

                <div className="relative w-full h-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 400"
                    fill="none"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    <circle cx="200" cy="200" r="32" stroke="#2E8BC0" strokeWidth="1.5" fill="rgba(46,139,192,0.08)" />
                    <circle cx="200" cy="200" r="8" fill="#2E8BC0" opacity="0.6" />

                    {nodes.map((node, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const x = 200 + 120 * Math.cos(angle);
                      const y = 200 + 120 * Math.sin(angle);

                      return (
                        <g key={node.label}>
                          <circle cx={x} cy={y} r="24" stroke={node.color} strokeWidth="1" fill={node.color + "10"} />
                          <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="central" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="var(--font-inter)" fontWeight="500">{node.label}</text>
                        </g>
                      );
                    })}

                    {[0, 1, 2, 3, 4, 5].map((i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const x = 200 + 120 * Math.cos(angle);
                      const y = 200 + 120 * Math.sin(angle);
                      return <line key={i} x1="200" y1="200" x2={x} y2={y} stroke="rgba(46,139,192,0.15)" strokeWidth="1" strokeDasharray="4 4" />;
                    })}

                    <circle cx="200" cy="200" r="120" stroke="rgba(46,139,192,0.06)" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
