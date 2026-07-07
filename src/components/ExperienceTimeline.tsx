"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Backend Engineer",
    context: "Enterprise ERP & CRM Systems",
    challenges: [
      "Redesigned monolithic ERP into scalable microservices",
      "Implemented distributed transaction handling across services",
      "Built event-driven architecture for real-time inventory sync",
    ],
  },
  {
    role: "Backend & AI Engineer",
    context: "AI-Powered Automation Platform",
    challenges: [
      "Integrated LLMs for intelligent task routing and automation",
      "Designed multi-tenant SaaS backend with isolated data layers",
      "Optimized API response times from 500ms to under 50ms",
    ],
  },
  {
    role: "Full Stack Developer",
    context: "CRM & Business Systems",
    challenges: [
      "Built real-time collaboration features using WebSockets",
      "Designed database schemas handling millions of records",
      "Implemented RBAC with fine-grained permission system",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="section-title">Engineering Journey</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

            <div className="space-y-10 md:space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative pl-14"
                >
                  <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent" />
                  <div className="absolute left-[18px] top-[7px] w-2 h-2 rounded-full bg-accent" />

                  <div className="glass rounded-xl p-5 md:p-6">
                    <h3 className="text-base font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-accent/60 mt-0.5 mb-4">
                      {exp.context}
                    </p>

                    <ul className="space-y-2">
                      {exp.challenges.map((c) => (
                        <li
                          key={c}
                          className="text-sm text-white/40 flex items-start gap-2.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/20 mt-2 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
