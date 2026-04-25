import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT } from "../data/content";
import logo from "../assets/images/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-28 bg-[#F4F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-14"
        >
          <span className="inline-block text-[#1565C0] font-body font-semibold text-xs
                           tracking-[0.2em] uppercase mb-4 bg-[#1565C0]/10 px-5 py-2 rounded-full">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-[#0D2137] text-4xl sm:text-5xl leading-tight">
            Contact &amp;<br />
            <span className="text-[#1565C0]">Organisation</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-[#F5A623]" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">

          {/* LEFT — Primary contact (spans 2 cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-[#0D2137] rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Card header */}
            <div className="px-8 pt-8 pb-6 border-b border-white/8">
              <p className="text-[#F5A623] font-body text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
                Primary Contact
              </p>
              <h3 className="font-display font-bold text-white text-2xl leading-tight">
                {CONTACT.name}
              </h3>
              <p className="text-white/50 font-body text-[14px] mt-1.5 leading-snug">
                {CONTACT.role}
              </p>
            </div>

            {/* Contact details */}
            <div className="px-8 py-7 flex flex-col gap-5 flex-1">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1565C0]/25 border border-[#1565C0]/40
                                flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                       strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 text-[#F5A623]"
                       style={{width:"18px",height:"18px"}}>
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 font-body text-[11px] uppercase tracking-widest mb-1">
                    Email Address
                  </p>
                  <a href={`mailto:${CONTACT.email}`}
                     className="text-[#F5A623] font-body text-[15px] font-medium hover:underline break-all">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1565C0]/25 border border-[#1565C0]/40
                                flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                       strokeLinecap="round" strokeLinejoin="round"
                       style={{width:"18px",height:"18px"}} className="text-[#F5A623]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 font-body text-[11px] uppercase tracking-widest mb-1">
                    Mobile
                  </p>
                  <a href={`tel:${CONTACT.phone}`}
                     className="text-white font-body text-[15px] font-medium hover:text-[#F5A623] transition-colors">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              {/* Dept */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1565C0]/25 border border-[#1565C0]/40
                                flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                       strokeLinecap="round" strokeLinejoin="round"
                       style={{width:"18px",height:"18px"}} className="text-[#F5A623]">
                    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 font-body text-[11px] uppercase tracking-widest mb-1">
                    Department
                  </p>
                  <p className="text-white font-body text-[15px] font-medium">
                    Dept. of Mathematics &amp; Computing
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — 3 info cards (spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            {/* Organiser card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-[#1565C0]/12
                         hover:border-[#1565C0]/30 transition-all duration-300 p-7 flex gap-5"
            >
              <img src={logo} alt="NITJ"
                   className="h-16 w-16 object-contain flex-shrink-0 opacity-90" />
              <div>
                <p className="text-[#1565C0] font-body text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
                  Organised By
                </p>
                <h4 className="font-display font-bold text-[#0D2137] text-xl leading-snug">
                  {CONTACT.organizer}
                </h4>
                <p className="text-[#1A1A2E]/60 font-body text-[14px] mt-1.5 leading-snug">
                  {CONTACT.institute}
                </p>
                <p className="text-[#1A1A2E]/40 font-body text-[13px] mt-1">
                  G.T. Road, Amritsar Bypass, Jalandhar – 144 011, Punjab (India)
                </p>
              </div>
            </motion.div>

            {/* Two smaller cards side by side */}
            <div className="grid sm:grid-cols-2 gap-6">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl border border-[#1565C0]/12
                           hover:border-[#1565C0]/30 transition-all duration-300 p-7"
              >
                <p className="text-[#1565C0] font-body text-[11px] font-bold
                              tracking-[0.18em] uppercase mb-3">
                  Event Dates
                </p>
                <p className="font-display font-bold text-[#0D2137] text-3xl leading-tight">
                  June<br />5–6, 2026
                </p>
                <p className="text-[#1A1A2E]/50 font-body text-[13px] mt-2">
                  Two full days of sessions, talks, and networking
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
                  <span className="text-[#0D2137] font-body text-[13px] font-medium">
                    NIT Jalandhar, Punjab
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl border border-[#1565C0]/12
                           hover:border-[#1565C0]/30 transition-all duration-300 p-7"
              >
                <p className="text-[#1565C0] font-body text-[11px] font-bold
                              tracking-[0.18em] uppercase mb-3">
                  Official Website
                </p>
                <a href="https://www.nitj.ac.in" target="_blank" rel="noreferrer"
                   className="font-display font-bold text-[#0D2137] hover:text-[#1565C0]
                              text-xl transition-colors break-all leading-snug block">
                  www.nitj.ac.in
                </a>
                <p className="text-[#1A1A2E]/50 font-body text-[13px] mt-2 leading-snug">
                  Dr. B.R. Ambedkar National Institute of Technology
                </p>
                <div className="mt-4">
                  <a href="https://www.nitj.ac.in" target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-1.5 text-[#1565C0] font-body
                                text-[13px] font-semibold hover:underline">
                    Visit site
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round" style={{width:"13px",height:"13px"}}>
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}