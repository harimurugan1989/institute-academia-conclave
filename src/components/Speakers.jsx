import { useRef, useState } from "react";
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

function SpeakerPortrait({ speaker }) {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(speaker.name);

  if (!speaker.image || imageError) {
    return (
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1565C0]/25 border-2 border-white/25 flex items-center justify-center font-display font-bold text-[#F5A623] text-2xl select-none shrink-0">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={speaker.image}
      alt={speaker.name}
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover border-2 border-white/25 shrink-0"
      onError={() => setImageError(true)}
      loading="lazy"
      decoding="async"
      sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
    />
  );
}

function SpeakerCard({ speaker, index }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay: index * 0.05 }}
      className="group bg-white/5 border border-white/10 rounded-[1.5rem] p-6 sm:p-7
                 hover:bg-white/10 hover:border-[#F5A623]/30 transition-all duration-300
                 flex flex-col items-center text-center"
    >
      <div className="mb-5 mt-3">
        <SpeakerPortrait speaker={speaker} />
      </div>

      <h3 className="font-display font-bold text-white text-lg sm:text-xl leading-tight max-w-[18ch]">
        {speaker.name}
      </h3>

      <p className="mt-2 text-[#F5A623] font-body font-semibold text-sm sm:text-[15px] leading-snug max-w-[28ch]">
        {speaker.designation}
      </p>

      <p className="mt-2 text-white/70 font-body text-sm sm:text-[15px] leading-snug max-w-[28ch]">
        {speaker.affiliation}
      </p>
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
            Speakers
          </h2>
          <p className="mt-5 text-white/55 font-body text-base max-w-xl mx-auto">
            Confirmed speakers for Industry-Academia Conclave 2026, arranged in the order provided.
          </p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {SPEAKERS.map((speaker, i) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}