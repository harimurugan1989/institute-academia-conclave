import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SPEAKERS } from "../data/content";

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

function SpeakerCard({ speaker, index }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay: index * 0.06 }}
      className="group bg-white/5 border border-white/10 rounded-2xl p-6
                 hover:bg-white/10 hover:border-[#F5A623]/30 transition-all duration-300
                 flex flex-col items-center text-center"
    >
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-[#1565C0]/30 border-2 border-[#1565C0]/40
                      flex items-center justify-center mb-4
                      group-hover:border-[#F5A623]/50 transition-colors duration-300
                      font-display font-bold text-[#F5A623] text-xl select-none">
        {getInitials(speaker.name)}
      </div>

      <h3 className="font-display font-bold text-white text-base leading-snug">
        {speaker.name}
      </h3>

      {speaker.designation && (
        <p className="text-white/60 font-body text-xs mt-1 leading-snug">
          {speaker.designation}
        </p>
      )}

      {speaker.organization && (
        <span className="mt-3 px-3 py-1 bg-[#F5A623]/10 border border-[#F5A623]/25
                         rounded-full text-[#F5A623] text-xs font-body font-medium">
          {speaker.organization}
        </span>
      )}
    </motion.div>
  );
}

export default function Speakers() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="speakers" ref={ref} className="py-24 bg-[#0D2137] relative overflow-hidden">
      {/* bg texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5A623]/10 rounded-full
                      blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#F5A623] font-body font-semibold text-sm
                           tracking-widest uppercase mb-3 bg-[#F5A623]/10 px-4 py-1.5
                           rounded-full border border-[#F5A623]/20">
            Distinguished Guests
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl
                         section-title [&::after]:bg-[#F5A623]">
            Keynote Speakers
          </h2>
          <p className="mt-5 text-white/55 font-body text-base max-w-xl mx-auto">
            Eminent industry leaders and researchers joining us for Industry-Academia Conclave 2026.
          </p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SPEAKERS.map((speaker, i) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}