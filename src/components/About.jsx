import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import logo from "../assets/images/logo.png";

const STATS = [
  { value: "2",  label: "Days",             icon: "📅" },
  { value: "8",  label: "Technical Tracks", icon: "🧩" },
  { value: "5",  label: "Event Formats",    icon: "🎯" },
  { value: "3",  label: "Participant Types", icon: "👥" },
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
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-[#1A1A2E]/80 font-body text-base leading-relaxed">
              In the current rapidly evolving technological landscape, strengthening collaboration
              between academia and industry is essential for fostering innovation, enhancing
              employability, and promoting applied research.
            </p>
            <p className="text-[#1A1A2E]/80 font-body text-base leading-relaxed">
              The Industry–Academia Conclave 2026 aims to create a platform for meaningful
              dialogue, knowledge exchange, and partnership development between academic
              researchers and industry professionals across diverse engineering disciplines.
            </p>
            <p className="text-[#1A1A2E]/80 font-body text-base leading-relaxed">
              Organized by the Dean of Industry &amp; International Affairs at NIT Jalandhar,
              this two-day event will feature keynote talks, technical sessions, panel discussions,
              a speed networking event, and an exhibition zone.
            </p>

            {/* Organizer badge */}
            <div className="flex items-center gap-4 mt-6 bg-white rounded-xl p-4
                            border border-[#1565C0]/15 shadow-sm">
              <img src={logo} alt="NITJ" className="h-14 w-14 object-contain flex-shrink-0" />
              <div>
                <p className="font-display font-bold text-[#0D2137] text-base">
                  Dr. B.R. Ambedkar National Institute of Technology
                </p>
                <p className="text-[#1565C0] font-body text-sm mt-0.5">
                  Jalandhar, Punjab (India) · Est. 1987
                </p>
                <p className="text-[#1A1A2E]/60 font-body text-xs mt-1">
                  Institute of National Importance · Ministry of Education, Govt. of India
                </p>
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
                Established in <strong className="text-[#1565C0]">1987</strong> as Regional Engineering College,
                NIT Jalandhar was granted the status of National Institute of Technology (Deemed University)
                by the Government of India on <strong className="text-[#1565C0]">October 17, 2002</strong>.
              </p>
              <p>
                Declared an Institute of National Importance under the Act of Parliament–2007, the institute
                offers <strong className="text-[#0D2137]">BTech, MTech, MSc, MBA and PhD</strong> programmes
                across several disciplines of Engineering, Technology and Sciences.
              </p>
              <p>
                A large number of reputed industrial houses visit the institution annually, selecting
                final year students as Engineers and Management Trainees.
              </p>
              <div className="pt-3 border-t border-[#EEF4FF] flex flex-wrap gap-2">
                {["Engineering", "Technology", "Sciences", "Management", "Research"].map((tag) => (
                  <span key={tag} className="text-xs bg-[#EEF4FF] text-[#1565C0] px-3 py-1
                                             rounded-full font-medium border border-[#1565C0]/20">
                    {tag}
                  </span>
                ))}
              </div>
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
              <div className="font-display font-bold text-[#1565C0] text-4xl">{stat.value}+</div>
              <div className="text-[#1A1A2E]/60 font-body text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}