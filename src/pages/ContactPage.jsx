import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import { CONTACTS, CONTACT } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ContactCard({ person, delay }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ delay }}
      className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
    >
      {/* Top band */}
      <div className="bg-[#0D2137] px-8 pt-8 pb-6 flex items-center gap-5">
        {person.image && !imageError ? (
          <img
            src={person.image}
            alt={person.name}
            onError={() => setImageError(true)}
            className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#F5A623]/50 flex-shrink-0"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-[#1565C0]/30 border-2 border-[#F5A623]/50
                          flex items-center justify-center font-display font-bold text-[#F5A623] text-2xl flex-shrink-0">
            {person.name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/i, "").trim()[0]}
          </div>
        )}
        <div>
          <span className="text-[#F5A623] font-body text-[11px] font-bold tracking-[0.2em] uppercase">
            {person.role}
          </span>
          <h3 className="font-display font-bold text-white text-xl mt-1 leading-snug">
            {person.name}
          </h3>
          <p className="text-white/50 font-body text-sm mt-1 leading-snug">
            {person.designation}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="px-8 py-7 space-y-5">
        {/* Department */}
        <div className="flex items-start gap-4">
          <div className="w-9 h-9 rounded-xl bg-[#1565C0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                 strokeLinecap="round" strokeLinejoin="round" style={{width:"16px",height:"16px"}}
                 className="text-[#1565C0]">
              <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
              <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"/>
            </svg>
          </div>
          <div>
            <p className="text-slate-400 font-body text-[11px] uppercase tracking-widest mb-0.5">Department</p>
            <p className="text-[#0D2137] font-body text-sm font-medium">{person.dept}</p>
          </div>
        </div>

        {/* Email */}
        {person.email && (
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#1565C0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                   strokeLinecap="round" strokeLinejoin="round" style={{width:"16px",height:"16px"}}
                   className="text-[#1565C0]">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <p className="text-slate-400 font-body text-[11px] uppercase tracking-widest mb-0.5">Email</p>
              <a href={`mailto:${person.email}`}
                 className="text-[#1565C0] font-body text-sm font-semibold hover:underline break-all">
                {person.email}
              </a>
            </div>
          </div>
        )}

        {/* Phone */}
        {person.phone && (
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#1565C0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                   strokeLinecap="round" strokeLinejoin="round" style={{width:"16px",height:"16px"}}
                   className="text-[#1565C0]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="text-slate-400 font-body text-[11px] uppercase tracking-widest mb-0.5">Phone</p>
              <a href={`tel:${person.phone}`}
                 className="text-[#0D2137] font-body text-sm font-semibold hover:text-[#1565C0] transition-colors">
                {person.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEF4FF] font-body">

      {/* Header */}
      <header className="bg-[#0D2137] shadow-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="NITJ Logo" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <p className="text-white font-display font-bold text-sm tracking-wide">NIT Jalandhar</p>
              <p className="text-[#F5A623] text-[11px] font-body font-medium tracking-wider uppercase">
                Industry–Academia Conclave 2026
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-white/70 hover:text-white font-body text-sm transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-8">

        {/* Page heading */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          className="text-center"
        >
          <span className="inline-block text-[#1565C0] font-body font-semibold text-xs
                           tracking-widest uppercase mb-3 bg-[#1565C0]/10 px-4 py-1.5
                           rounded-full border border-[#1565C0]/20">
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-[#0D2137] text-3xl sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-slate-500 font-body text-base max-w-xl mx-auto">
            Reach out to our organising committee for any queries about the conclave.
          </p>
        </motion.div>

        {/* Contact person cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {CONTACTS.map((person, i) => (
            <ContactCard key={person.name} person={person} delay={0.1 + i * 0.1} />
          ))}
        </div>

        {/* Institution info */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-100
                     flex flex-col sm:flex-row gap-6 items-start"
        >
          <img src={logo} alt="NITJ" className="h-16 w-16 object-contain flex-shrink-0 opacity-90" />
          <div>
            <p className="text-[#1565C0] font-body text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
              Organised By
            </p>
            <h4 className="font-display font-bold text-[#0D2137] text-xl leading-snug">
              {CONTACT.organizer}
            </h4>
            <p className="text-slate-500 font-body text-sm mt-1.5 leading-snug">
              {CONTACT.institute}
            </p>
            <p className="text-slate-400 font-body text-sm mt-1">
              G.T. Road, Amritsar Bypass, Jalandhar – 144 011, Punjab (India)
            </p>
          </div>
        </motion.div>

        {/* Event details */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
            <p className="text-[#1565C0] font-body text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              Event Dates
            </p>
            <p className="font-display font-bold text-[#0D2137] text-3xl leading-tight">
              June<br />5–6, 2026
            </p>
            <p className="text-slate-400 font-body text-sm mt-2">
              Two full days of sessions, talks, and networking
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
              <span className="text-[#0D2137] font-body text-sm font-medium">
                NIT Jalandhar, Punjab
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
            <p className="text-[#1565C0] font-body text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              Official Website
            </p>
            <a href="https://www.nitj.ac.in" target="_blank" rel="noreferrer"
               className="font-display font-bold text-[#0D2137] hover:text-[#1565C0]
                          text-xl transition-colors break-all leading-snug block">
              www.nitj.ac.in
            </a>
            <p className="text-slate-400 font-body text-sm mt-2 leading-snug">
              Dr. B.R. Ambedkar National Institute of Technology
            </p>
            <div className="mt-4">
              <a href="https://www.nitj.ac.in" target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-1.5 text-[#1565C0] font-body
                            text-sm font-semibold hover:underline">
                Visit site
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round" style={{width:"13px",height:"13px"}}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
