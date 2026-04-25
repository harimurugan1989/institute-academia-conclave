import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { THEMES } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Professional SVG icons per theme
const THEME_ICONS = [
  // AI / ML
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
  </svg>,
  // Industry 4.0
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v3M8 12v3M16 12v3"/>
  </svg>,
  // Sustainability
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22V12M12 12C12 7 17 3 22 3c0 5-4 9-10 9zM12 12C12 7 7 3 2 3c0 5 4 9 10 9z"/>
  </svg>,
  // Computing
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>,
  // Startup
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9.5 21C9.5 21 5 17 5 12a7 7 0 0 1 14 0c0 5-4.5 9-4.5 9"/><path d="M12 9v4M12 17h.01"/>
  </svg>,
  // Skill Dev
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>,
  // Research
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>,
  // Emerging Tech
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>,
];

export default function Themes() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="themes" ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#1565C0] font-body font-semibold text-xs
                           tracking-[0.2em] uppercase mb-4 bg-[#1565C0]/10 px-5 py-2 rounded-full">
            Technical Tracks
          </span>
          <h2 className="font-display font-bold text-[#0D2137] text-4xl sm:text-5xl section-title">
            Themes of the Conclave
          </h2>
          <p className="mt-6 text-[#1A1A2E]/60 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Eight focused tracks ensuring targeted discussions and meaningful collaboration
            across cutting-edge domains.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {THEMES.map((theme, i) => (
            <motion.div
              key={theme.id}
              variants={fadeUp}
              className="group relative bg-[#F4F7FF] hover:bg-[#1565C0]
                         rounded-2xl p-6 border border-[#1565C0]/12 hover:border-[#1565C0]
                         transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Track number — watermark only, bottom right */}
              <div className="absolute bottom-3 right-4 font-display font-extrabold text-[72px]
                              leading-none text-[#1565C0]/[0.07] group-hover:text-white/[0.06]
                              transition-colors select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="relative z-10 w-11 h-11 rounded-lg bg-[#1565C0]/12
                              group-hover:bg-white/15 border border-[#1565C0]/20
                              group-hover:border-white/20 flex items-center justify-center
                              text-[#1565C0] group-hover:text-white mb-5
                              transition-all duration-300">
                {THEME_ICONS[i]}
              </div>

              <h3 className="relative z-10 font-body font-semibold text-[#0D2137]
                             group-hover:text-white text-[15px] leading-snug
                             transition-colors duration-300">
                {theme.title}
              </h3>

              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl
                              bg-[#F5A623] scale-y-0 group-hover:scale-y-100
                              transition-transform duration-300 origin-bottom" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-[#0D2137] to-[#1565C0] rounded-2xl
                     p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display font-bold text-white text-2xl">
              Present Your Research
            </h3>
            <p className="text-white/60 font-body text-[15px] mt-1.5">
              Faculty, researchers, and industry experts are invited to submit abstracts
              aligned with any of the above tracks.
            </p>
          </div>
          <div className="group relative flex-shrink-0">
            <button
              disabled
              className="px-7 py-3.5 bg-[#F5A623] text-[#0D2137] font-body font-bold
                         text-[14px] rounded-xl cursor-not-allowed opacity-80 tracking-wide"
            >
              Submit Abstract
            </button>
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5
                             bg-[#0D2137] text-white text-xs rounded-md whitespace-nowrap
                             opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                             border border-white/10 shadow-xl">
              Submission portal opening soon
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}