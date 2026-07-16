"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const terminalLines = [
  { command: "$ whoami", output: ["Mohammad Barzgar", "Senior Backend Engineer | Distributed Systems & AI"] },
  { command: "$ experience", output: ["5+ years building enterprise-scale distributed systems", "20+ microservice ERP platform processing 1M+ transactions/day", "Multiple SaaS products built from scratch"] },
  { command: "$ expertise", output: ["C# (.NET Core), Python, TypeScript", "Microservices, DDD, CQRS, Event Sourcing", "AI Integration (OpenAI, LLMs, XGBoost)", "System Design & Scalable Architecture"] },
  { command: "$ focus", output: ["Building AI-powered automation and distributed systems", "Turning complex problems into simple, scalable solutions"] },
  { command: "$ status", output: ["Open to Remote Opportunities & Relocation"] },
];

export default function AboutTerminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [visibleOutputs, setVisibleOutputs] = useState<Record<number, number>>({});

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    terminalLines.forEach((_, lineIdx) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, lineIdx]);
        }, 600 + lineIdx * 1200)
      );

      timers.push(
        setTimeout(() => {
          setVisibleOutputs((prev) => ({ ...prev, [lineIdx]: 0 }));

          const outputs = terminalLines[lineIdx].output;
          outputs.forEach((_, outIdx) => {
            timers.push(
              setTimeout(() => {
                setVisibleOutputs((prev) => ({ ...prev, [lineIdx]: outIdx + 1 }));
              }, 200 + outIdx * 150)
            );
          });
        }, 1100 + lineIdx * 1200)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="section-label mb-3">About</p>
            <h2 className="section-title">Developer Profile</h2>
            <p className="section-description mx-auto mt-3">
              Senior Backend Engineer with 5+ years of experience designing
              enterprise-scale distributed systems. Expert in C# (.NET Core),
              Python, and AI integration. Built multiple SaaS products from scratch.
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
              <span className="text-xs text-white/15 ml-2 font-mono">terminal</span>
            </div>

            <div className="p-5 md:p-6 font-mono space-y-5">
              {terminalLines.map((line, lineIdx) => (
                <div key={lineIdx}>
                  {visibleLines.includes(lineIdx) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="terminal-line text-white/30">
                        {line.command}
                        <span className="inline-block w-2 h-4 bg-white/20 ml-1 animate-pulse" />
                      </p>
                      <div className="mt-1.5 space-y-0.5">
                        {line.output.map((text, outIdx) =>
                          visibleOutputs[lineIdx] !== undefined &&
                          outIdx < visibleOutputs[lineIdx] ? (
                            <motion.p
                              key={outIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2 }}
                              className="terminal-line"
                            >
                              {text}
                            </motion.p>
                          ) : null
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
