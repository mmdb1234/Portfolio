"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

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
                Available for Remote Opportunities
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 text-balance">
              Backend Engineer building
              <br />
              <span className="gradient-text">AI-powered business</span>
              <br />
              systems.
            </h1>

            <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-xl mb-10">
              I help startups build scalable backend platforms, AI integrations,
              automation systems and production-ready SaaS products.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20"
              >
                Let&apos;s Work Together
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-sm font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>
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
                    {/* Central node */}
                    <circle
                      cx="200"
                      cy="200"
                      r="32"
                      stroke="#6C63FF"
                      strokeWidth="1.5"
                      fill="rgba(108,99,255,0.08)"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="8"
                      fill="#6C63FF"
                      opacity="0.6"
                    />

                    {/* Orbiting nodes */}
                    {[
                      { cx: 200, cy: 80, label: "API", color: "#6C63FF" },
                      { cx: 320, cy: 140, label: "AI", color: "#8B85FF" },
                      { cx: 340, cy: 270, label: "DB", color: "#6C63FF" },
                      { cx: 200, cy: 330, label: "Docker", color: "#8B85FF" },
                      { cx: 60, cy: 210, label: "Redis", color: "#6C63FF" },
                      { cx: 100, cy: 100, label: "Queue", color: "#8B85FF" },
                    ].map((node, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const radius = 120;
                      const x = 200 + radius * Math.cos(angle);
                      const y = 200 + radius * Math.sin(angle);

                      return (
                        <g key={node.label}>
                          <circle
                            cx={x}
                            cy={y}
                            r="24"
                            stroke={node.color}
                            strokeWidth="1"
                            fill={`${node.color}10`}
                          />
                          <text
                            x={x}
                            y={y + 1}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fill="rgba(255,255,255,0.6)"
                            fontSize="10"
                            fontFamily="var(--font-inter)"
                            fontWeight="500"
                          >
                            {node.label}
                          </text>
                        </g>
                      );
                    })}

                    {/* Connecting lines */}
                    {[
                      [200, 200, 200, 80],
                      [200, 200, 320, 140],
                      [200, 200, 340, 270],
                      [200, 200, 200, 330],
                      [200, 200, 60, 210],
                      [200, 200, 100, 100],
                    ].map(([x1, y1, x2, y2], i) => (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="rgba(108,99,255,0.15)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    ))}

                    {/* Outer ring */}
                    <circle
                      cx="200"
                      cy="200"
                      r="120"
                      stroke="rgba(108,99,255,0.06)"
                      strokeWidth="1"
                      fill="none"
                    />
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
