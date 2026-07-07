"use client";

import { motion } from "framer-motion";

const items = [
  { label: "5+ Years Experience" },
  { label: "ERP Systems" },
  { label: "AI Applications" },
  { label: "Fast MVP Delivery" },
  { label: "Microservices" },
];

export default function TrustSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="glass rounded-xl px-5 py-3"
            >
              <span className="text-sm text-white/50 whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
