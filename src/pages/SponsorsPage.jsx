import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import { SPONSORS } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WHY_SPONSOR = [
  {
    icon: "🎯",
    title: "Targeted Brand Visibility",
    desc: "Reach a focused audience of academicians, researchers, and industry professionals.",
  },
  {
    icon: "🎓",
    title: "Access to Talent Pool",
    desc: "Connect with high-quality students for recruitment and internships.",
  },
  {
    icon: "🔬",
    title: "Research Collaboration",
    desc: "Partner with faculty and researchers for funded projects and consultancy.",
  },
  {
    icon: "💡",
    title: "Thought Leadership",
    desc: "Showcase your organization as an innovation and industry leader.",
  },
  {
    icon: "🤝",
    title: "Direct Engagement",
    desc: "Interact with policymakers, experts, and innovators in a focused setting.",
  },
];

const OUTCOMES = [
  "MoUs and strategic partnerships",
  "Internship and placement opportunities",
  "Joint research and consultancy projects",
  "Institute website & social media promotion",
  "Industry network outreach",
  "Press and media coverage",
];

const TIERS = [
  {
    name: "Platinum Sponsor",
    amount: "₹3,00,000",
    highlight: true,
    color: "#E5C97E",
    headerBg: "bg-gradient-to-r from-[#0D2137] to-[#1a3a5c]",
    border: "border-[#E5C97E]/50",
    ring: "ring-2 ring-[#E5C97E]/30",
    benefits: [
      "Keynote speaking opportunity",
      "Premium branding on all event materials",
      "Exclusive exhibition stall",
      "Logo on all digital & print materials",
      "Social media promotion",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Gold Sponsor",
    amount: "₹2,00,000",
    highlight: false,
    color: "#F5A623",
    headerBg: "bg-gradient-to-r from-[#0D2137] to-[#1565C0]",
    border: "border-[#F5A623]/40",
    ring: "ring-1 ring-[#F5A623]/20",
    benefits: [
      "Prominent branding at the event",
      "Exhibition stall",
      "Session sponsorship",
      "Promotional inclusion in brochure",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Silver Sponsor",
    amount: "₹1,00,000",
    highlight: false,
    color: "#CBD5E1",
    headerBg: "bg-gradient-to-r from-[#374151] to-[#4B5563]",
    border: "border-slate-200",
    ring: "",
    benefits: [
      "Logo display at the event",
      "Shared exhibition space",
      "Brochure inclusion",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Associate Sponsor",
    amount: "₹50,000",
    highlight: false,
    color: "#94a3b8",
    headerBg: "bg-[#475569]",
    border: "border-slate-200",
    ring: "",
    benefits: [
      "Logo on event brochure",
      "Logo on official website",
      "Certificate of appreciation",
    ],
  },
];

export default function SponsorsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEF4FF] font-body">

      {/* ── Top bar ── */}
      <header className="bg-[#0D2137] shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="NITJ Logo" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <p className="text-white font-display font-bold text-sm tracking-wide">NIT Jalandhar</p>
              <p className="text-[#F5A623] text-[11px] font-body font-medium tracking-wider uppercase">
                Industry–Academia Conclave 2026
              </p>
            </div>
          </div>
          <Link to="/" className="flex items-center gap-1.5 text-white/70 hover:text-white
                                   font-body text-sm transition-colors duration-200">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">

        {/* ── Page heading ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="text-center">
          <span className="inline-block text-[#1565C0] font-body font-semibold text-xs
                           tracking-widest uppercase mb-3 bg-[#1565C0]/10 px-4 py-1.5
                           rounded-full border border-[#1565C0]/20">
            Sponsorship Invitation
          </span>
          <h1 className="font-display font-bold text-[#0D2137] text-3xl sm:text-4xl md:text-5xl">
            Partner With Us
          </h1>
          <p className="mt-4 text-slate-500 font-body text-base max-w-2xl mx-auto">
            Industry–Academia Conclave 2026 &nbsp;·&nbsp; June 5–6, 2026 &nbsp;·&nbsp; NIT Jalandhar
          </p>
        </motion.div>

        {/* ── Why Sponsor ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.05 }}
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-100">
          <h2 className="font-display font-bold text-[#0D2137] text-xl sm:text-2xl mb-2">
            Why Sponsor This Conclave?
          </h2>
          <p className="text-slate-400 font-body text-sm mb-7">
            Strategic benefits for your organisation.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_SPONSOR.map((item) => (
              <div key={item.title}
                className="flex gap-4 p-5 rounded-2xl bg-[#EEF4FF] border border-[#1565C0]/10">
                <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <p className="font-display font-bold text-[#0D2137] text-sm">{item.title}</p>
                  <p className="text-slate-500 font-body text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Confirmed Sponsors ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.08 }}
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-slate-100">
          <h2 className="font-display font-bold text-[#0D2137] text-xl sm:text-2xl mb-2">
            Our Sponsors
          </h2>
          <p className="text-slate-400 font-body text-sm mb-8">
            Thank you to our confirmed sponsors for their generous support.
          </p>
          {SPONSORS.map((tier) => (
            <div key={tier.tier} className="mb-6 last:mb-0">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="px-3 py-1 rounded-full border font-body font-semibold text-xs"
                  style={{ color: tier.color, borderColor: `${tier.color}50`, background: `${tier.color}18` }}
                >
                  {tier.tier}
                </span>
                {tier.amount && <span className="font-display font-bold text-[#0D2137] text-sm">{tier.amount}</span>}
              </div>
              <div className="flex flex-wrap gap-5">
                {tier.companies.map((company) => (
                  <div
                    key={company.name}
                    className="flex flex-col gap-4 border rounded-2xl p-6 w-96 bg-[#EEF4FF]"
                    style={{ borderColor: `${tier.color}40` }}
                  >
                    <div className="bg-white rounded-xl p-6 flex items-center justify-center w-full">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-40 max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Expected Participation & Outcomes ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2">

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
            <h2 className="font-display font-bold text-[#0D2137] text-lg sm:text-xl mb-5">
              Expected Participation
            </h2>
            <ul className="space-y-3">
              {[
                { icon: "👥", text: "100+ participants" },
                { icon: "🏢", text: "Industry leaders & professionals" },
                { icon: "🔬", text: "Faculty, researchers, and PhD scholars" },
                { icon: "🚀", text: "Startups and innovation hubs" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-slate-600 font-body text-sm">
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
            <h2 className="font-display font-bold text-[#0D2137] text-lg sm:text-xl mb-5">
              Expected Outcomes
            </h2>
            <ul className="space-y-2">
              {OUTCOMES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600 font-body text-sm">
                  <span className="text-[#1565C0] font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Sponsorship Packages ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.15 }}>
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-[#0D2137] text-2xl sm:text-3xl">
              Sponsorship Packages
            </h2>
            <p className="mt-2 text-slate-400 font-body text-sm">
              Choose the tier that best suits your organisation's goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier) => (
              <div key={tier.name}
                className={`bg-white rounded-2xl border ${tier.border} ${tier.ring}
                            shadow-sm overflow-hidden flex flex-col`}>
                <div className={`${tier.headerBg} px-5 py-5`}>
                  <p className="font-display font-bold text-white text-base">{tier.name}</p>
                  <p className="font-display font-bold mt-1" style={{ color: tier.color, fontSize: "1.6rem" }}>
                    {tier.amount}
                  </p>
                </div>
                <ul className="px-5 py-5 space-y-2.5 flex-1">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-slate-600 font-body text-sm">
                      <span className="mt-0.5 shrink-0 font-bold" style={{ color: tier.color }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Call for Sponsorship / Contact ── */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#0D2137] via-[#1565C0] to-[#0D2137]
                     rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl">
              Call for Sponsorship
            </h2>
            <p className="mt-3 text-white/65 font-body text-base max-w-xl mx-auto">
              We invite your esteemed organisation to partner with us in this prestigious initiative
              and contribute to shaping the future of industry–academia collaboration.
            </p>

            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4
                            bg-white/10 border border-white/20 rounded-2xl px-8 py-6">
              <div className="text-left">
                <p className="font-display font-bold text-white text-lg">Prof. Mamta Khosla</p>
                <p className="text-white/60 font-body text-sm mt-0.5">Dean, Industry &amp; International Affairs</p>
              </div>
              <div className="sm:border-l border-white/20 sm:pl-6 space-y-1 text-left">
                <a href="mailto:diia@nitj.ac.in"
                   className="flex items-center gap-2 text-[#F5A623] font-body text-sm hover:underline">
                  ✉ diia@nitj.ac.in
                </a>
                <a href="tel:09888604632"
                   className="flex items-center gap-2 text-white/70 font-body text-sm hover:text-white">
                  📞 09888604632
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
