import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { SPONSORS } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TIERS = [
  {
    name: "Platinum Sponsor",
    amount: "₹3,00,000",
    color: "#E5C97E",
    bg: "from-[#0D2137] to-[#1a3a5c]",
    border: "border-[#E5C97E]/40",
    badge: "bg-[#E5C97E]/20 text-[#E5C97E] border-[#E5C97E]/30",
    benefits: [
      "Keynote speaking opportunity",
      "Premium branding on all materials",
      "Exclusive exhibition stall",
      "Social media promotion",
    ],
  },
  {
    name: "Gold Sponsor",
    amount: "₹2,00,000",
    color: "#F5A623",
    bg: "from-[#0D2137] to-[#1a3a5c]",
    border: "border-[#F5A623]/40",
    badge: "bg-[#F5A623]/20 text-[#F5A623] border-[#F5A623]/30",
    benefits: [
      "Prominent branding",
      "Exhibition stall",
      "Session sponsorship",
      "Promotional inclusion",
    ],
  },
  {
    name: "Silver Sponsor",
    amount: "₹1,00,000",
    color: "#CBD5E1",
    bg: "from-[#0D2137] to-[#1a3a5c]",
    border: "border-slate-400/30",
    badge: "bg-slate-400/20 text-slate-300 border-slate-400/30",
    benefits: [
      "Logo display",
      "Shared exhibition space",
      "Brochure inclusion",
    ],
  },
  {
    name: "Associate Sponsor",
    amount: "₹50,000",
    color: "#94a3b8",
    bg: "from-[#0D2137] to-[#1a3a5c]",
    border: "border-slate-500/30",
    badge: "bg-slate-500/20 text-slate-400 border-slate-500/30",
    benefits: [
      "Logo on brochure",
      "Logo on website",
    ],
  },
];

export default function Sponsors() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sponsors" ref={ref} className="py-28 bg-[#0D2137] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1565C0]/15 rounded-full
                      blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#F5A623] font-body font-semibold text-sm
                           tracking-widest uppercase mb-3 bg-[#F5A623]/10 px-4 py-1.5
                           rounded-full border border-[#F5A623]/20">
            Partnership Opportunity
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl
                         section-title [&::after]:bg-[#F5A623]">
            Become a Sponsor
          </h2>
          <p className="mt-5 text-white/55 font-body text-base max-w-2xl mx-auto">
            Partner with us to connect with 100+ industry professionals, researchers, faculty,
            and startups at India's premier Industry–Academia platform.
          </p>
        </motion.div>

        {/* Confirmed Sponsors */}
        <motion.div
          variants={fadeUp} initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <h3 className="text-center font-display font-bold text-white text-xl sm:text-2xl mb-8">
            Our Sponsors
          </h3>
          {SPONSORS.map((tier) => (
            <div key={tier.tier} className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px flex-1 bg-white/10 max-w-xs" />
                <span
                  className="px-4 py-1.5 rounded-full border font-body font-semibold text-sm"
                  style={{ color: tier.color, borderColor: `${tier.color}40`, background: `${tier.color}15` }}
                >
                  {tier.tier}{tier.amount ? ` · ${tier.amount}` : ""}
                </span>
                <div className="h-px flex-1 bg-white/10 max-w-xs" />
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {tier.companies.map((company) => (
                  <div
                    key={company.name}
                    className="flex flex-col items-center gap-4 bg-white/8 border rounded-2xl p-6 w-96"
                    style={{ borderColor: `${tier.color}30` }}
                  >
                    <div className="bg-white rounded-xl p-6 w-full flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-40 max-w-full object-contain"
                      />
                    </div>
                    {/* <p className="text-white/65 font-body text-xs text-center leading-relaxed">
                      {company.benefits}
                    </p> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Sponsorship Tiers */}
        <motion.div
          variants={fadeUp} initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.15 }}
          className="text-center mb-8"
        >
          <h3 className="font-display font-bold text-white text-xl sm:text-2xl">
            Sponsorship Packages
          </h3>
          <p className="mt-2 text-white/45 font-body text-sm">
            Join our growing list of sponsors — choose the tier that fits your goals.
          </p>
        </motion.div>

        {/* Tier cards */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              className={`relative bg-gradient-to-b ${tier.bg} rounded-2xl p-6
                         border ${tier.border} flex flex-col gap-4
                         hover:scale-[1.02] transition-transform duration-300`}
            >
              <div>
                <span className={`inline-block text-xs font-body font-semibold px-3 py-1
                                  rounded-full border ${tier.badge} mb-3`}>
                  {tier.name}
                </span>
                <p className="font-display font-bold text-white text-3xl">{tier.amount}</p>
              </div>

              <ul className="space-y-2 flex-1">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-white/65 font-body text-sm">
                    <span className="mt-0.5 shrink-0" style={{ color: tier.color }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp} initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            to="/sponsors"
            className="inline-block px-10 py-4 bg-[#F5A623] text-[#0D2137] font-body font-bold
                       text-base rounded-xl shadow-xl shadow-[#F5A623]/20
                       hover:bg-[#e6951a] transition-colors duration-200"
          >
            View Full Sponsorship Details →
          </Link>
          <p className="mt-4 text-white/35 font-body text-xs">
            Contact: Prof. Mamta Khosla &nbsp;·&nbsp; diia@nitj.ac.in &nbsp;·&nbsp; 09888604632
          </p>
        </motion.div>

      </div>
    </section>
  );
}
