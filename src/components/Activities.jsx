import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ACTIVITIES = [
  {
    number: "01",
    title: "Keynote Talks",
    subtitle: "Vision from the Industry",
    desc: "Invited talks by leading industry professionals sharing insights into current trends, technological innovations, and skill requirements. Includes case studies highlighting real-world applications and problem-solving approaches.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8"/>
      </svg>
    ),
    accent: "#F5A623",
  },
  {
    number: "02",
    title: "Technical Sessions",
    subtitle: "Deep-Dive Research Presentations",
    desc: "Thematic sessions aligned with the identified focus areas. Presentations by faculty members, researchers, and industry experts on recent advancements, open challenges, and emerging research opportunities across disciplines.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    accent: "#1565C0",
  },
  {
    number: "03",
    title: "Panel Discussions",
    subtitle: "Open Dialogue, Expert Perspectives",
    desc: "Interactive sessions involving experts from both academia and industry. Deliberations on bridging the skill gap, research collaboration, and future technologies — with open Q&A sessions to encourage audience participation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    accent: "#F5A623",
  },
  {
    number: "04",
    title: "Speed Networking",
    subtitle: "Connections That Count",
    desc: "Dedicated structured sessions enabling direct interaction between industry professionals, faculty, and researchers. Designed to spark collaborative research proposals, internship pipelines, and consultancy relationships.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    accent: "#1565C0",
  },
  {
    number: "05",
    title: "Exhibition Zone",
    subtitle: "Showcase of Innovation",
    desc: "A curated exhibition space for research prototypes, startup demonstrations, and industry innovation showcases. An open floor for participants to explore live demonstrations, engage with inventors, and identify collaboration opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    accent: "#F5A623",
  },
];

export default function Activities() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="activities" ref={ref} className="py-28 bg-[#F4F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16"
        >
          <span className="inline-block text-[#1565C0] font-body font-semibold text-xs
                           tracking-[0.2em] uppercase mb-4 bg-[#1565C0]/10 px-5 py-2 rounded-full">
            Programme
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display font-bold text-[#0D2137] text-4xl sm:text-5xl leading-tight">
              Proposed<br />
              <span className="text-[#1565C0]">Activities</span>
            </h2>
            <p className="text-[#1A1A2E]/55 font-body text-[15px] max-w-sm leading-relaxed sm:text-right">
              A structured two-day programme to maximise engagement,
              knowledge exchange, and industry collaboration.
            </p>
          </div>
          {/* Decorative line */}
          <div className="mt-8 h-px bg-gradient-to-r from-[#1565C0]/30 via-[#F5A623]/40 to-transparent" />
        </motion.div>

        {/* Activities — large editorial list */}
        <div className="space-y-4">
          {ACTIVITIES.map((act, i) => (
            <motion.div
              key={act.number}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-[#1565C0]/10
                         hover:border-[#1565C0]/35 hover:shadow-xl hover:shadow-[#1565C0]/6
                         transition-all duration-350 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-stretch">

                {/* Left: number + icon column */}
                <div className={`flex sm:flex-col items-center justify-center gap-4 sm:gap-3
                                 px-7 py-6 sm:py-8 sm:w-28 flex-shrink-0
                                 bg-[#0D2137] group-hover:bg-[#1565C0]/90
                                 transition-colors duration-350`}>
                  <span className="font-display font-bold text-white/20
                                   group-hover:text-white/30 text-3xl sm:text-4xl
                                   transition-colors select-none leading-none">
                    {act.number}
                  </span>
                  <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                    {act.icon}
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1 px-7 sm:px-10 py-7 flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-3">
                    <h3 className="font-display font-bold text-[#0D2137] text-2xl sm:text-[1.6rem]
                                   group-hover:text-[#1565C0] transition-colors duration-300 leading-tight">
                      {act.title}
                    </h3>
                    <span className="text-[#F5A623] font-body text-[13px] font-semibold
                                     tracking-wider uppercase">
                      {act.subtitle}
                    </span>
                  </div>
                  <p className="text-[#1A1A2E]/60 font-body text-[15px] leading-relaxed max-w-2xl">
                    {act.desc}
                  </p>
                </div>

                {/* Right arrow indicator */}
                <div className="hidden sm:flex items-center pr-8 text-[#1565C0]/20
                                group-hover:text-[#1565C0]/60 transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                       strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}