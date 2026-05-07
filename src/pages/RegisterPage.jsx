import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FEES = [
  {
    category: "Regular Registration",
    description: "Industry Professionals / External Attendees",
    amount: "₹1,000",
    note: "per participant · Inclusive of 18% GST",
    icon: "🏢",
  },
  {
    category: "Startup Participation",
    description: "Exhibition / Stall / Product Demonstration",
    amount: "₹2,000",
    note: "per organization · Inclusive of 18% GST",
    icon: "🚀",
  },
];

const HOTELS = [
  { name: "WJ Grand Hotel", href: "#" },
  { name: "Golden Tulip",   href: "#" },
  { name: "Ramada",         href: "#" },
];

export default function RegisterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEF4FF] font-body">

      {/* ── Top bar ── */}
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
            className="flex items-center gap-1.5 text-white/70 hover:text-white font-body text-sm
                       transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-8">

        {/* ── Page heading ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          className="text-center"
        >
          <span className="inline-block text-[#1565C0] font-body font-semibold text-xs
                           tracking-widest uppercase mb-3 bg-[#1565C0]/10 px-4 py-1.5
                           rounded-full border border-[#1565C0]/20">
            Registration Information
          </span>
          <h1 className="font-display font-bold text-[#0D2137] text-3xl sm:text-4xl md:text-5xl">
            Register for the Conclave
          </h1>
          <p className="mt-4 text-slate-500 font-body text-base max-w-xl mx-auto">
            Industry-Academia Conclave 2026 &nbsp;·&nbsp; June 5–6, 2026 &nbsp;·&nbsp; NIT Jalandhar
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="bg-white border border-slate-200 text-slate-600 font-body text-sm px-5 py-2 rounded-full shadow-sm">
              🗓 &nbsp;Registration Opens: <span className="font-semibold text-[#0D2137]">8 May 2026</span>
            </div>
            <div className="bg-white border border-red-100 text-slate-600 font-body text-sm px-5 py-2 rounded-full shadow-sm">
              ⏳ &nbsp;Last Date: <span className="font-semibold text-red-600">30 May 2026</span>
            </div>
          </div>
        </motion.div>

        {/* ── Registration Fees ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-100"
        >
          <h2 className="font-display font-bold text-[#0D2137] text-xl sm:text-2xl mb-6">
            Registration Fees
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {FEES.map((fee) => (
              <div key={fee.category}
                className="flex gap-4 p-5 rounded-2xl bg-[#EEF4FF] border border-[#1565C0]/10">
                <span className="text-2xl mt-0.5">{fee.icon}</span>
                <div>
                  <p className="font-display font-bold text-[#0D2137] text-base">{fee.category}</p>
                  <p className="text-slate-500 font-body text-sm mt-0.5">{fee.description}</p>
                  <p className="text-[#1565C0] font-body font-bold text-xl mt-2">{fee.amount}</p>
                  <p className="text-slate-400 font-body text-xs mt-0.5">{fee.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
            <span className="text-green-600 text-lg">✓</span>
            <p className="font-body text-sm text-green-800">
              <span className="font-semibold">No registration fee</span> for NITJ-TBI Startups, Sponsors, NITJ students, NITJ faculty, and NITJ staff.
            </p>
          </div>
        </motion.div>

        {/* ── Important Information ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.15 }}
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-100"
        >
          <h2 className="font-display font-bold text-[#0D2137] text-xl sm:text-2xl mb-6">
            Important Information
          </h2>

          <div className="space-y-5">
            <div className="flex gap-3">
              <span className="text-[#F5A623] text-xl mt-0.5">🎁</span>
              <div>
                <p className="font-body font-semibold text-[#0D2137] text-sm">Registration Benefits</p>
                <p className="font-body text-slate-500 text-sm mt-0.5">
                  Includes welcome kit, access to all sessions, lunch (both days), tea/refreshments, and conclave dinner.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[#F5A623] text-xl mt-0.5">🏨</span>
              <div>
                <p className="font-body font-semibold text-[#0D2137] text-sm">Accommodation</p>
                <p className="font-body text-slate-500 text-sm mt-0.5">
                  Accommodation is not included in the registration fee.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[#F5A623] text-xl mt-0.5">🚌</span>
              <div>
                <p className="font-body font-semibold text-[#0D2137] text-sm">Travel</p>
                <p className="font-body text-slate-500 text-sm mt-0.5">
                  No travel reimbursement will be provided.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[#F5A623] text-xl mt-0.5">🚀</span>
              <div>
                <p className="font-body font-semibold text-[#0D2137] text-sm">Startup Guidelines</p>
                <ul className="font-body text-slate-500 text-sm mt-0.5 space-y-1 list-disc list-inside">
                  <li>Maximum 4 representatives per startup allowed.</li>
                  <li>Up to 10 startups will be shortlisted for exhibition and showcasing.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── CTA Button ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-block px-12 py-4 bg-[#1565C0] text-white font-body font-bold
                       text-base rounded-xl shadow-lg shadow-[#1565C0]/20
                       hover:bg-[#1254a8] transition-colors duration-200"
          >
            Register Now →
          </a>
          <p className="mt-3 text-slate-400 font-body text-xs">
            Please click the button above to complete your registration.
          </p>
        </motion.div>

        {/* ── Accommodation ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-100"
        >
          <h2 className="font-display font-bold text-[#0D2137] text-xl sm:text-2xl mb-2">
            Suggested Accommodation
          </h2>
          <p className="font-body text-slate-400 text-sm mb-6">
            Nearby hotels for outstation participants (not arranged by the institute).
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {HOTELS.map((hotel, i) => (
              <a
                key={hotel.name}
                href={hotel.href}
                className="flex items-center justify-between gap-2 p-4 rounded-2xl
                           bg-[#EEF4FF] border border-[#1565C0]/10
                           hover:border-[#1565C0]/30 hover:bg-[#e2ecff] transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#1565C0]/15 text-[#1565C0] font-bold text-xs
                                   flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-body font-semibold text-[#0D2137] text-sm">{hotel.name}</span>
                </div>
                <span className="text-[#1565C0] opacity-50 group-hover:opacity-100 transition-opacity text-sm">↗</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Contact ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show"
          transition={{ delay: 0.25 }}
          className="text-center py-4"
        >
          <p className="font-body text-slate-400 text-sm">
            For queries, contact{" "}
            <a href="mailto:yadavn@nitj.ac.in"
               className="text-[#1565C0] font-semibold hover:underline">
              Dr. Neha Yadav — yadavn@nitj.ac.in
            </a>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
