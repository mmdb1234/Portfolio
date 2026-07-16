"use client";

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/15">
            &copy; {new Date().getFullYear()} Mohammad Barzgar
          </p>
          <div className="flex items-center gap-3 text-xs text-white/15">
            <span>Built with Next.js</span>
            <span className="text-white/5">·</span>
            <span>TypeScript</span>
            <span className="text-white/5">·</span>
            <span>Tailwind CSS</span>
            <span className="text-white/5">·</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
