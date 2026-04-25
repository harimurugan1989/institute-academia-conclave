import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const PARTICIPANTS = [
  {
    title: "Industry Professionals",
    subtitle: "Engineers, Managers & Leaders",
    desc: "Senior professionals, technical managers, and decision-makers from reputed organisations across manufacturing, IT, energy, healthcare, and emerging technology sectors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
           strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12h.01M8 12h.01M16 12h.01"/>
      </svg>
    ),
    stat: "Corporates & PSUs",
  },
  {
    title: "Faculty & Researchers of NITJ",
    subtitle: "Academics & Scientists",
    desc: "Faculty members and research scholars of Dr B R Ambedkar National Institute of Technology Jalandhar looking to forge industry partnerships, secure funding, and publish applied research.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
           strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    stat: "NITJ",
  },
  {
    title: "Startups & Innovation Hubs",
    subtitle: "Founders & Entrepreneurs",
    desc: "Early-stage startups, incubatees, and innovation hubs seeking mentorship, pilot partnerships, talent pipelines, and exposure to deep-tech research coming out of academia.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
           strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    stat: "Incubators & Innovation Labs",
  },
];

export default function Participants() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="participants" ref={ref} className="py-28 bg-white">
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
            Who Should Attend
          </span>
          <h2 className="font-display font-bold text-[#0D2137] text-4xl sm:text-5xl section-title">
            Target Participants
          </h2>
          <p className="mt-6 text-[#1A1A2E]/55 font-body text-lg max-w-xl mx-auto leading-relaxed">
            The conclave welcomes participants from three key communities — each with a
            distinct role in driving the innovation ecosystem.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {PARTICIPANTS.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group relative bg-[#F4F7FF] rounded-2xl border border-[#1565C0]/12
                         hover:border-[#1565C0]/40 hover:shadow-xl hover:shadow-[#1565C0]/8
                         transition-all duration-350 overflow-hidden"
            >
              {/* Top accent stripe */}
              <div className="h-1 bg-gradient-to-r from-[#1565C0] to-[#F5A623]
                              scale-x-0 group-hover:scale-x-100
                              transition-transform duration-400 origin-left" />

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#0D2137] flex items-center
                                justify-center text-[#F5A623] mb-6
                                group-hover:bg-[#1565C0] group-hover:text-white
                                transition-all duration-300 shadow-lg shadow-[#0D2137]/20">
                  {p.icon}
                </div>

                {/* Text */}
                <p className="text-[#1565C0] font-body text-[12px] font-semibold
                              tracking-[0.15em] uppercase mb-2">
                  {p.subtitle}
                </p>
                <h3 className="font-display font-bold text-[#0D2137] text-2xl mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-[#1A1A2E]/60 font-body text-[15px] leading-relaxed">
                  {p.desc}
                </p>

                {/* Stat badge */}
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2
                                bg-white border border-[#1565C0]/15 rounded-full
                                text-[#0D2137] font-body text-[13px] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                  {p.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom info strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.45 }}
          className="mt-10 bg-[#0D2137] rounded-2xl px-8 py-6
                     flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/70 font-body text-[15px] text-center sm:text-left">
            Join us on{" "}
            <span className="text-[#F5A623] font-semibold">June 5–6, 2026</span>
            {" "}at NIT Jalandhar for two days of focused dialogue, collaboration, and networking.
          </p>
          <div className="flex-shrink-0 text-white font-body text-sm border border-white/80
                          px-4 py-2 rounded-full whitespace-nowrap">
            📍 Jalandhar, Punjab
          </div>
        </motion.div>

      </div>
    </section>
  );
}