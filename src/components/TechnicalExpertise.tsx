"use client";

import { motion } from "framer-motion";
import { Server, Code2, Database, Cloud, Brain, GitBranch } from "lucide-react";

const categories = [
  {
    title: "Core",
    icon: Code2,
    items: [
      { name: "C#", level: 95 },
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "ASP.NET Core", level: 95 },
      { name: "FastAPI", level: 85 },
      { name: "Django", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Data & Messaging",
    icon: Database,
    items: [
      { name: "SQL Server", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 85 },
      { name: "RabbitMQ", level: 85 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    items: [
      { name: "OpenAI APIs", level: 85 },
      { name: "XGBoost", level: 75 },
      { name: "Scikit-learn", level: 80 },
      { name: "Pandas", level: 85 },
    ],
  },
  {
    title: "Architecture",
    icon: GitBranch,
    items: [
      { name: "Microservices", level: 95 },
      { name: "DDD / CQRS", level: 90 },
      { name: "Event Sourcing", level: 85 },
      { name: "RESTful APIs", level: 95 },
      { name: "Docker / Linux", level: 85 },
    ],
  },
];

export default function TechnicalExpertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Technical Skills</p>
          <h2 className="section-title">Technologies I Work With</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-white/40">{item.name}</span>
                        <span className="text-xs text-white/20">{item.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                        />
                      </div>
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
