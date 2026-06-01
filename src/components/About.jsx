import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "2",  label: "Days",              icon: "📅", showPlus: false },
  { value: "4",  label: "Technical Tracks",  icon: "🧩", showPlus: false },
  { value: "5",  label: "Event Formats",     icon: "🎯", showPlus: true },
  { value: "3",  label: "Participant Types", icon: "👥", showPlus: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-[#EEF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#1565C0] font-body font-semibold text-sm
                           tracking-widest uppercase mb-3 bg-[#1565C0]/10 px-4 py-1.5 rounded-full">
            About the Conclave
          </span>
          <h2 className="font-display font-bold text-[#0D2137] text-3xl sm:text-4xl md:text-5xl section-title">
            Background &amp; Rationale
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          
          {/* Left — text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl border border-[#1565C0]/10 shadow-md overflow-hidden"
          >
            <div className="bg-[#1565C0] px-6 py-4">
              <h3 className="font-display font-bold text-white text-xl">About the Conclave</h3>
              <p className="text-white/70 text-xs font-body mt-1 tracking-wide">
                Industry–Academia Conclave 2026
              </p>
            </div>

            <div className="px-6 py-6 space-y-3 text-[#1A1A2E]/75 font-body text-sm leading-relaxed">
              <p>
                In the current rapidly evolving technological landscape, strengthening collaboration
                between academia and industry is essential for fostering{" "}
                <strong className="text-[#1565C0]">innovation</strong>, enhancing employability,
                and promoting applied research.
              </p>
              <p>
                The Industry–Academia Conclave 2026 aims to create a platform for meaningful
                dialogue, knowledge exchange, and partnership development between academic
                researchers and industry professionals across diverse engineering disciplines.
              </p>
              <p>
                This two-day event will feature keynote talks, technical sessions, panel discussions,
                a speed networking event, and an exhibition zone — bringing together leaders from
                industry, academia, and the startup ecosystem.
              </p>
              <p>
                Organised by the <strong className="text-[#0D2137]">Dean, Industry &amp; International Affairs</strong>,
                NIT Jalandhar, this conclave is envisioned as an annual flagship event to build
                lasting collaborations and drive impactful research partnerships.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#1A1A2E]/60">
                  <span className="text-[#F5A623]">📅</span>
                  <span><strong className="text-[#0D2137]">Dates:</strong> June 5–6, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1A1A2E]/60">
                  <span className="text-[#F5A623]">📍</span>
                  <span><strong className="text-[#0D2137]">Venue:</strong> Dr. B.R. Ambedkar NIT Jalandhar, Punjab</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1A1A2E]/60">
                  <span className="text-[#F5A623]">🏛️</span>
                  <span><strong className="text-[#0D2137]">Organiser:</strong> Dean, Industry &amp; International Affairs</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — about NITJ card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-[#1565C0]/10 shadow-md overflow-hidden"
          >
            <div className="bg-[#0D2137] px-6 py-4">
              <h3 className="font-display font-bold text-white text-xl">About NITJ</h3>
              <p className="text-[#F5A623] text-xs font-body mt-1 tracking-wide">
                National Institute of Technology Jalandhar
              </p>
            </div>

            <div className="px-6 py-6 space-y-3 text-[#1A1A2E]/75 font-body text-sm leading-relaxed">
              <p>
                Dr. B. R. Ambedkar National Institute of Technology was established in{" "}
                <strong className="text-[#1565C0]">1987</strong> as a Regional Engineering College.
              </p>
              <p>
                It was granted the status of National Institute of Technology (Deemed University)
                by the Government of India on{" "}
                <strong className="text-[#1565C0]">October 17, 2002</strong>, and later declared an{" "}
                <strong className="text-[#0D2137]">Institute of National Importance</strong> under
                the Act of Parliament–2007.
              </p>
              <p>
                As one of the premier NITs, the institute is committed to providing high-quality
                education in Engineering, Technology, and Sciences, producing competent technical
                and scientific professionals for the nation.
              </p>
              <p>
                The institute offers{" "}
                <strong className="text-[#0D2137]">BTech, MTech, MSc, MBA, and PhD</strong> programmes
                across multiple disciplines, with strong industry engagement and excellent placement
                opportunities.
              </p>

              <a
                href="https://www.nitj.ac.in/admin/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#1565C0] text-xs font-medium mt-2 hover:underline"
              >
                Learn more about NITJ →
              </a>

            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 text-center border border-[#1565C0]/10
                         shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-display font-bold text-[#1565C0] text-4xl">
                {stat.value}{stat.showPlus ? "+" : ""}
              </div>
              <div className="text-[#1A1A2E]/60 font-body text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}