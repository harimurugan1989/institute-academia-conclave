import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { OBJECTIVES } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// Map objective IDs to Lucide-style SVG icons (inline, no dep issues)
const ICONS = [
  // Bridge / Link
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M4 12h16M4 12a8 8 0 0 1 8-8M4 12a8 8 0 0 0 8 8M20 12a8 8 0 0 1-8 8M20 12a8 8 0 0 0-8-8M12 4v16"/>
  </svg>,
  // Handshake / Collaboration
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>,
  // Graduation / Internship
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>,
  // Trend / Innovation
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>,
  // Funding / Lightbulb
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1 4.5-3 6l-1 3H9l-1-3C6 13.5 5 11.5 5 9a7 7 0 0 1 7-7z"/>
  </svg>,
];

export default function Objectives() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="objectives" ref={ref} className="py-28 bg-[#0D2137] relative overflow-hidden">

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1565C0]/15 rounded-full
                      blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F5A623]/8 rounded-full
                      blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-18"
        >
          <span className="inline-block text-[#F5A623] font-body font-semibold text-xs
                           tracking-[0.2em] uppercase mb-4 bg-[#F5A623]/10 px-5 py-2
                           rounded-full border border-[#F5A623]/20">
            Why Attend
          </span>
          <h2 className="font-display font-bold text-white text-4xl sm:text-5xl section-title
                         [&::after]:bg-[#F5A623] [&::after]:mx-auto">
            Objectives of the Conclave
          </h2>
          <p className="mt-6 text-white/65 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Designed to create meaningful, long-lasting connections between the worlds of
            research and real-world application.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.11 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {OBJECTIVES.map((obj, i) => (
            <motion.div
              key={obj.id}
              variants={fadeUp}
              className={`group relative bg-white/[0.05] border border-white/[0.10] rounded-2xl
                          p-8 hover:bg-[#1565C0]/25 hover:border-[#1565C0]/60
                          transition-all duration-350 cursor-default overflow-hidden
                          ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Large background number — bottom right, no overlap with content */}
              <div className="absolute bottom-4 right-5 font-display font-extrabold text-[96px]
                              leading-none text-white/[0.04] group-hover:text-white/[0.07]
                              transition-colors select-none pointer-events-none">
                {String(obj.id).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-[#1565C0]/30
                              border border-[#1565C0]/50 flex items-center justify-center
                              text-[#F5A623] mb-6 group-hover:bg-[#F5A623]/15
                              group-hover:border-[#F5A623]/40 transition-all duration-300">
                {ICONS[i]}
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="font-display font-bold text-white text-xl mb-3 leading-snug">
                  {obj.title}
                </h3>
                <p className="text-white/60 font-body text-[15px] leading-relaxed
                              group-hover:text-white/75 transition-colors duration-300">
                  {obj.desc}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl
                              bg-gradient-to-r from-[#F5A623] to-[#1565C0]
                              scale-x-0 group-hover:scale-x-100
                              transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}