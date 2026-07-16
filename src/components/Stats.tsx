"use client";

import { motion } from "framer-motion";
import { Database, Zap, Clock, Users, TrendingUp, Bug } from "lucide-react";

const stats = [
  { value: "1M+", label: "Transactions per Day", icon: Database },
  { value: "99.6%", label: "Latency Reduction", icon: Zap },
  { value: "96%", label: "Error Reduction", icon: Bug },
  { value: "20+", label: "Microservices", icon: Clock },
  { value: "2,000+", label: "Concurrent Users", icon: Users },
  { value: "70%", label: "ML Win Rate", icon: TrendingUp },
];

export default function Stats() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass rounded-xl p-5 text-center card-hover"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-white/40">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
