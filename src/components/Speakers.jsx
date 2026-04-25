import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PLACEHOLDER_COUNT = 6;

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
            Eminent industry leaders and researchers. Speaker announcements coming soon.
          </p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300
                         flex flex-col items-center text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full bg-[#1565C0]/30 border-2 border-[#1565C0]/40
                              flex items-center justify-center mb-4 overflow-hidden
                              group-hover:border-[#F5A623]/50 transition-colors duration-300">
                <svg className="w-12 h-12 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2
                           7.2 9.9 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4
                           c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>

              <div className="w-24 h-3 bg-white/10 rounded-full mb-2" />
              <div className="w-16 h-2.5 bg-white/6 rounded-full mb-1" />
              <div className="w-20 h-2.5 bg-white/6 rounded-full" />

              <div className="mt-4 px-3 py-1 bg-[#F5A623]/10 border border-[#F5A623]/20
                              rounded-full text-[#F5A623]/70 text-xs font-body">
                To Be Announced
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.5 }}
          className="text-center text-white/40 font-body text-sm mt-10"
        >
          Speaker profiles will be updated as confirmations are received.
        </motion.p>

      </div>
    </section>
  );
}