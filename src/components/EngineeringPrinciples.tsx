"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, Target, GitBranch, Lightbulb } from "lucide-react";

const principles = [
  {
    icon: Building2,
    title: "Build for Scalability",
    description:
      "Systems designed to grow from day one. Architecture that handles 10x without rewrites.",
  },
  {
    icon: Rocket,
    title: "Ship MVPs Fast",
    description:
      "Production-ready products in weeks, not months. Iterate based on real feedback.",
  },
  {
    icon: Target,
    title: "Business First",
    description:
      "Every technical decision serves a business goal. Code exists to solve problems.",
  },
  {
    icon: GitBranch,
    title: "Clean Architecture",
    description:
      "Separation of concerns, testable code, and maintainable systems that teams love.",
  },
  {
    icon: Lightbulb,
    title: "Solve Problems",
    description:
      "Not just writing code — understanding the domain and delivering real value.",
  },
];

export default function EngineeringPrinciples() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Philosophy</p>
          <h2 className="section-title">Engineering Principles</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass rounded-xl p-5 card-hover"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-4.5 h-4.5 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
