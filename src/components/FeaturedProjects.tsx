"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Server, Cpu, Zap } from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP Platform",
    icon: Server,
    problem:
      "Complex inventory and accounting synchronization across multiple warehouses and sales channels.",
    solution:
      "Designed microservice architecture with asynchronous messaging using RabbitMQ and Redis for real-time inventory tracking.",
    impact:
      "Handled high concurrency during flash sales while completely preventing overselling.",
    tech: ["ASP.NET Core", "RabbitMQ", "Redis", "PostgreSQL", "Docker"],
    highlights: [
      "Zero oversells at 10K+ concurrent requests",
      "99.99% order accuracy",
      "Event bus with dead letter queuing",
    ],
    gradient: "from-accent/5",
  },
  {
    title: "AI CRM Assistant",
    icon: Cpu,
    problem:
      "Sales teams spending 60% of time on manual lead qualification and follow-ups.",
    solution:
      "Built an AI-powered CRM layer that analyzes conversations, scores leads, and automates follow-up sequences using LLMs.",
    impact:
      "Reduced response time by 80% and increased lead conversion by 35%.",
    tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Redis"],
    highlights: [
      "LLM-powered lead scoring",
      "Automated conversation analysis",
      "Real-time sentiment tracking",
    ],
    gradient: "from-accent/5",
  },
  {
    title: "Workflow Automation Platform",
    icon: Zap,
    problem:
      "Startup needed a functional SaaS platform with complex automation workflows in under 2 weeks.",
    solution:
      "Leveraged n8n for visual workflow builder, integrated OpenAI for smart routing, and built a scalable backend on FastAPI.",
    impact:
      "Production-ready MVP delivered in 10 days with full automation capabilities.",
    tech: ["n8n", "OpenAI", "FastAPI", "Docker", "Redis"],
    highlights: [
      "10-day MVP delivery",
      "Visual workflow editor",
      "AI-powered task routing",
    ],
    gradient: "from-accent/5",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Featured Work</p>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-description mx-auto mt-3">
            Real engineering challenges solved for startups and enterprises.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass rounded-2xl overflow-hidden card-hover"
              >
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-white/20 font-medium mb-1.5 tracking-wide uppercase">
                            Problem
                          </p>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-white/20 font-medium mb-1.5 tracking-wide uppercase">
                            Solution
                          </p>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-white/20 font-medium mb-1.5 tracking-wide uppercase">
                            Impact
                          </p>
                          <p className="text-sm text-accent/80 font-medium">
                            {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 lg:border-l border-white/[0.06] lg:pl-8">
                      <div className="mb-5">
                        <p className="text-xs text-white/20 font-medium mb-3 tracking-wide uppercase">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/40"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-white/20 font-medium mb-3 tracking-wide uppercase">
                          Key Achievements
                        </p>
                        <ul className="space-y-2">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-sm text-white/40 flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
