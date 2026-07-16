"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Business Management",
    school: "Payam Noor University",
    year: "2019 - 2021",
    gpa: "18.15 / 20",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Optical Engineering",
    school: "Bonab University",
    year: "2015 - 2019",
    gpa: "16 / 20",
    icon: BookOpen,
  },
];

const languages = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "Upper Intermediate (B2)" },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <p className="section-label mb-3">Education</p>
            <h2 className="section-title">Academic Background</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {education.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-accent/60 mb-1">{item.school}</p>
                      <div className="flex items-center gap-3 text-xs text-white/30">
                        <span>{item.year}</span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span>GPA: {item.gpa}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="glass rounded-xl p-5"
            >
              <p className="text-xs text-white/20 font-medium mb-3 tracking-wide uppercase">
                Languages
              </p>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span className="text-sm text-white/60">{lang.name}</span>
                    <span className="text-xs text-white/30">({lang.level})</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
