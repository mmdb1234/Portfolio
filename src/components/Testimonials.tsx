"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "One of the most technically proficient engineers I've worked with. Delivered complex backend architecture ahead of schedule.",
    author: "Alex Chen",
    role: "CTO, SaaS Company",
  },
  {
    quote:
      "The AI automation system he built transformed our customer operations. Response times dropped by 80%.",
    author: "Sarah Williams",
    role: "VP of Product",
  },
  {
    quote:
      "His architecture decisions were instrumental in scaling our platform from thousands to millions of requests.",
    author: "James Park",
    role: "Engineering Lead",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="section-title">What People Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass rounded-xl p-6 md:p-8"
            >
              <Quote className="w-5 h-5 text-accent/20 mb-4" />
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium text-white">{t.author}</p>
                <p className="text-xs text-white/30 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
