import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

export default function Register() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="register" ref={ref} className="py-24 bg-[#EEF4FF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-[#0D2137] via-[#1565C0] to-[#0D2137]
                     rounded-3xl p-10 sm:p-14 text-center overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#F5A623]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#1565C0]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            <span className="inline-block text-[#F5A623] font-body font-semibold text-xs
                             tracking-widest uppercase mb-4 bg-[#F5A623]/10 px-4 py-1.5
                             rounded-full border border-[#F5A623]/25">
              Registration Open
            </span>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Register for the Conclave
            </h2>
            <p className="mt-5 text-white/65 font-body text-base max-w-lg mx-auto leading-relaxed">
              Participation is open to industry professionals, faculty members, researchers, and startups.
              Registration closes <span className="text-[#F5A623] font-semibold">30 May 2026</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-7">
              <div className="bg-white/10 border border-white/20 text-white font-body text-sm px-5 py-2 rounded-full">
                📅 &nbsp;June 5–6, 2026
              </div>
              <div className="bg-white/10 border border-white/20 text-white font-body text-sm px-5 py-2 rounded-full">
                📍 &nbsp;NIT Jalandhar, Punjab
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/register"
                className="inline-block px-10 py-4 bg-[#F5A623] text-[#0D2137] font-body font-bold
                           text-base rounded-xl shadow-xl shadow-[#F5A623]/20
                           hover:bg-[#e6951a] transition-colors duration-200"
              >
                Register Now →
              </Link>
            </div>

            <p className="mt-5 text-white/35 font-body text-xs">
              Contact Dr. Neha Yadav at yadavn@nitj.ac.in for queries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
