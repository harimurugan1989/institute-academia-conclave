import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PANELISTS } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function getInitials(name) {
  const parts = name.replace(/^(Mr\.|Ms\.|Dr\.|Sh\.|Prof\.)\s*/i, "").trim().split(" ");
  return parts.length >= 2
    ? parts[0][0] + parts[parts.length - 1][0]
    : parts[0][0];
}

function PanelistCard({ panelist, index }) {
  const initials = getInitials(panelist.name);

  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay: index * 0.04 }}
      className="group bg-white/5 border border-white/10 rounded-2xl p-5 w-full sm:w-64
                 hover:bg-white/10 hover:border-[#F5A623]/30 transition-all duration-300
                 flex flex-col items-center text-center gap-3"
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1565C0]/25 border-2 border-white/25
                      flex items-center justify-center font-display font-bold text-[#F5A623] text-2xl select-none">
        {initials}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-display font-bold text-white text-base sm:text-[17px] leading-snug">
          {panelist.name}
        </h3>
        <p className="text-[#F5A623] font-body font-semibold text-xs sm:text-sm leading-snug">
          {panelist.designation}
        </p>
        <p className="text-white/60 font-body text-xs sm:text-sm leading-snug">
          {panelist.affiliation}
        </p>
      </div>
    </motion.div>
  );
}

export default function Panelists() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="panelists" ref={ref} className="py-24 bg-[#091a2a] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5A623]/10 rounded-full
                      blur-3xl translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#F5A623] font-body font-semibold text-sm
                           tracking-widest uppercase mb-3 bg-[#F5A623]/10 px-4 py-1.5
                           rounded-full border border-[#F5A623]/20">
            Panel Discussion
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl
                         section-title [&::after]:bg-[#F5A623]">
            Panelists
          </h2>
          <p className="mt-5 text-white/55 font-body text-base max-w-xl mx-auto">
            Industry leaders participating in the MSME panel discussion.
          </p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-5"
        >
          {PANELISTS.map((panelist, i) => (
            <PanelistCard key={panelist.id} panelist={panelist} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
