"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Server, Cpu, Zap, BarChart3, Workflow } from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP – Microservices Demo",
    icon: Server,
    description: "Full microservices ERP with API Gateway, Rate Limiting, and Saga Pattern. Built with 20+ microservices handling 1M+ transactions daily.",
    tech: ["ASP.NET Core", "RabbitMQ", "Redis", "SQL Server", "Docker"],
    highlights: ["99.6% latency reduction", "96% error reduction", "2,000+ concurrent users"],
    link: "https://github.com/mmdb1234/ERP_Microservices_Demo",
  },
  {
    title: "AI CRM Assistant",
    icon: Cpu,
    description: "OpenAI-powered CRM with sentiment analysis, lead scoring, and smart reply suggestions. Built with Python and FastAPI.",
    tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Redis"],
    highlights: ["Sentiment analysis", "Lead scoring", "Smart reply suggestions"],
    link: "https://github.com/mmdb1234/ai-crm-assistant",
  },
  {
    title: "AI Crypto Trading Bot",
    icon: BarChart3,
    description: "Ensemble ML trading bot combining XGBoost, SVR, and Random Forest models. Achieved 70% win rate in historical backtesting.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "FastAPI"],
    highlights: ["70% win rate", "Ensemble ML models", "Historical backtesting"],
    link: "https://github.com/mmdb1234/AI_crypto_bot",
  },
  {
    title: "SaaS Products Portfolio",
    icon: Workflow,
    description: "Multiple production SaaS applications built from scratch using React, Next.js, FastAPI, PostgreSQL, and Docker.",
    tech: ["React", "Next.js", "FastAPI", "PostgreSQL", "Docker"],
    highlights: ["Full-stack SaaS", "Production deployments", "Scalable architecture"],
    link: "https://github.com/mmdb1234",
  },
  {
    title: "n8n Marketplace",
    icon: Zap,
    description: "Reusable automation workflows and integrations marketplace built on n8n for rapid business process automation.",
    tech: ["n8n", "OpenAI", "Docker", "Redis", "Python"],
    highlights: ["Workflow automation", "Reusable integrations", "OpenAI-powered"],
    link: "https://github.com/mmdb1234",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-description mx-auto mt-3">
            Real engineering challenges solved for enterprises and startups.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl overflow-hidden card-hover group flex flex-col"
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <ul className="space-y-1.5">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs text-white/50 flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent/40 mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-light transition-colors font-medium mt-auto"
                  >
                    View on GitHub
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
