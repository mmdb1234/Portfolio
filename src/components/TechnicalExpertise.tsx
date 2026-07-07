"use client";

import { motion } from "framer-motion";
import { Server, Code2, Database, Cloud, Brain } from "lucide-react";

const categories = [
  {
    title: "Backend",
    icon: Server,
    items: ["ASP.NET Core", "Python", "FastAPI", "Django"],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "SQL Server", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["Docker", "Linux", "Nginx"],
  },
  {
    title: "AI",
    icon: Brain,
    items: ["OpenAI", "LLMs", "AI Agents", "n8n"],
  },
];

export default function TechnicalExpertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Technical Expertise</p>
          <h2 className="section-title">Technologies I Work With</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass rounded-xl p-5 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="text-sm text-white/40 hover:text-white/60 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
