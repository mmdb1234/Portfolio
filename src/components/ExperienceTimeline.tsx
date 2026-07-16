"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior .NET Backend Developer",
    company: "Arvand Fan Pars",
    period: "Dec 2024 - Present",
    items: [
      "Built enterprise ERP with 20+ microservices (SCM, Inventory, Production, HR, Accounting, BPMS, Notification, Gateway, Orchestrator) using ASP.NET Core and Python. Delivered a 2.5B IRR project for 2,000+ concurrent users.",
      "Engineered event-driven inventory system with RabbitMQ - dropped errors from 30% to <1%.",
      "Optimized concurrent request handling: 1,000 transactions from 30 min to 7 seconds (99.6% improvement).",
      "Applied DDD, CQRS, Event Sourcing, and Saga Pattern for distributed transaction consistency.",
      "Scaled horizontally with on-demand workers - supported 2,000+ concurrent users.",
      "Leveraged Redis for caching, IP rate-limiting, and cross-domain entity snapshots.",
      "Maintained 80%+ code coverage with xUnit, NUnit, Integration, and Selenium tests.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Tiger Company",
    period: "Jun 2022 - Feb 2023",
    items: [
      "Built automated payroll calculator - 100% reduction in processing time.",
      "Implemented bulk data entry - reduced input time by 60%.",
      "Delivered 5,000+ tasks across 9 months with consistently high quality.",
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
          <h2 className="section-title">Work History</h2>
          <p className="section-description mx-auto mt-3">
            5+ years of experience building enterprise-scale distributed systems
            and SaaS products.
          </p>
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
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-accent/60">{exp.company}</p>
                      </div>
                      <span className="text-xs text-white/20 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.items.map((item) => (
                        <li
                          key={item.substring(0, 20)}
                          className="text-sm text-white/40 flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/20 mt-2 shrink-0" />
                          {item}
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
