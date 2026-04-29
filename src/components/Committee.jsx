import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { COMMITTEE } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function getInitial(name) {
  const parts = name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/i, "").trim().split(" ");
  return parts[parts.length - 1][0];
}

function LeaderCard({ role, name, designation, delay = 0, gold = false }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay }}
      className={`flex flex-col items-center text-center p-6 rounded-2xl border
                  transition-all duration-300 hover:-translate-y-1
                  ${gold
                    ? "bg-[#F5A623]/10 border-[#F5A623]/30 hover:border-[#F5A623]/60"
                    : "bg-white/5 border-white/10 hover:border-[#1565C0]/50"
                  }`}
    >
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4
                       border-2 text-3xl font-display font-bold
                       ${gold
                         ? "bg-[#F5A623]/20 border-[#F5A623]/50 text-[#F5A623]"
                         : "bg-[#1565C0]/20 border-[#1565C0]/40 text-[#1565C0]"
                       }`}>
        {getInitial(name)}
      </div>
      <span className={`text-xs font-body font-semibold tracking-widest uppercase mb-2 px-3 py-1 rounded-full
                        ${gold ? "bg-[#F5A623]/15 text-[#F5A623]" : "bg-[#1565C0]/15 text-[#1565C0]"}`}>
        {role}
      </span>
      <h4 className="font-display font-bold text-white text-base leading-snug">{name}</h4>
      <p className="text-white/55 font-body text-xs mt-1 leading-snug">{designation}</p>
    </motion.div>
  );
}

function RowCard({ name, designation, dept }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4
                    flex items-center gap-4 hover:border-[#1565C0]/40 transition-colors">
      <div className="w-10 h-10 rounded-full bg-[#1565C0]/30 border border-[#1565C0]/50
                      flex items-center justify-center font-display font-bold text-[#1565C0] text-sm flex-shrink-0">
        {getInitial(name)}
      </div>
      <div>
        <p className="font-body font-semibold text-white text-sm">{name}</p>
        <p className="text-white/45 font-body text-xs mt-0.5">{designation || dept}</p>
      </div>
    </div>
  );
}

function SectionDivider({ label }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px flex-1 bg-white/10" />
      <span className="text-white/50 font-body text-xs font-semibold tracking-widest uppercase px-4">
        {label}
      </span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export default function Committee() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const visibleCoords = showAll
    ? COMMITTEE.coordinators
    : COMMITTEE.coordinators.slice(0, 6);

  return (
    <section id="committee" ref={ref} className="py-24 bg-[#0D2137] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1565C0]/15 rounded-full
                      blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#F5A623] font-body font-semibold text-sm
                           tracking-widest uppercase mb-3 bg-[#F5A623]/10 px-4 py-1.5
                           rounded-full border border-[#F5A623]/20">
            Organisation
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl
                         section-title [&::after]:bg-[#F5A623]">
            Organising Committee
          </h2>
        </motion.div>

        {/* Chief Patron + Patron */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-8"
        >
          <LeaderCard
            gold
            role={COMMITTEE.chiefPatron.role}
            name={COMMITTEE.chiefPatron.name}
            designation={COMMITTEE.chiefPatron.designation}
          />
          <LeaderCard
            gold
            role={COMMITTEE.patron.role}
            name={COMMITTEE.patron.name}
            designation={COMMITTEE.patron.designation}
            delay={0.1}
          />
        </motion.div>

        {/* Executive General Chairs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <SectionDivider label="Executive General Chairs" />
          <div className="grid sm:grid-cols-3 gap-4">
            {COMMITTEE.executiveGeneralChairs.map((c) => (
              <RowCard key={c.name} name={c.name} designation={c.designation} />
            ))}
          </div>
        </motion.div>

        {/* Program General Chairs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <SectionDivider label="Program General Chairs" />
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {COMMITTEE.programGeneralChairs.map((c) => (
              <RowCard key={c.name} name={c.name} dept={c.dept} />
            ))}
          </div>
        </motion.div>

        {/* Organising Secretaries */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.4 }}
          className="mt-4"
        >
          <SectionDivider label="Organising Secretaries" />

          <AnimatePresence>
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {visibleCoords.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-white/4 border border-white/8 rounded-xl px-5 py-4
                             flex items-center gap-3 hover:border-[#1565C0]/30
                             hover:bg-white/8 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-full bg-[#1565C0]/20 border border-[#1565C0]/30
                                  flex items-center justify-center font-display font-bold
                                  text-[#1565C0] text-xs flex-shrink-0">
                    {getInitial(c.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-body font-medium text-white text-sm truncate">{c.name}</p>
                    <p className="text-white/40 font-body text-xs mt-0.5 truncate">{c.dept}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {COMMITTEE.coordinators.length > 6 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 bg-white/8 hover:bg-white/15 border border-white/15
                           hover:border-white/30 text-white font-body text-sm rounded-xl
                           transition-all duration-200"
              >
                {showAll ? "Show Less ↑" : `Show All ${COMMITTEE.coordinators.length} Members ↓`}
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}