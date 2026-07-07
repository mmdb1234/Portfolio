"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Code2, FileText, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="section-label mb-3">Contact</p>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            Let&apos;s build something
            <br />
            <span className="gradient-text">great together</span>
          </h2>

          <p className="text-base text-white/40 max-w-xl mx-auto mb-10">
            Have a project in mind or looking for an experienced engineer?
            Let&apos;s talk.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a
              href="mailto:mohjammad1@gmail.com"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-white/50 hover:text-white transition-all card-hover"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-barzgar-899476307"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-white/50 hover:text-white transition-all card-hover"
            >
              <Globe className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/mmdb1234"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-white/50 hover:text-white transition-all card-hover"
            >
              <Code2 className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="/MohammadBarzgar.Resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-white/50 hover:text-white transition-all card-hover"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <a
              href="mailto:mailto:mohjammad1@gmail.com"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-white text-base font-medium hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20"
            >
              <Calendar className="w-5 h-5" />
              Schedule an Interview
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
