import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/main-building.jpg";
import img2 from "../assets/images/it-building.jpg";
import img3 from "../assets/images/campus-3.jpg";
import logo from "../assets/images/logo.png";

const SLIDES = [img1, img2, img3];

const EVENT_FORMATS = [
  "🎤 Keynote Talks",
  "🏛️ Exhibition Zone",
  "💬 Panel Discussions",
  "⚡ Speed Networking",
  "📋 Technical Sessions",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background image slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={SLIDES[current]}
              alt="NIT Jalandhar Campus"
              className="w-full h-full object-cover kenburns"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay — dark navy to blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2137]/90 via-[#0D2137]/75 to-[#1565C0]/60 z-10" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0D2137] to-transparent z-10" />

        {/* Subtle dot-grid texture */}
        <div className="absolute inset-0 z-10 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 flex flex-col items-center text-center">

        {/* Institute badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm
                     border border-white/20 rounded-full px-5 py-2.5"
        >
          <img src={logo} alt="NITJ" className="h-8 w-8 object-contain" />
          <span className="text-white/90 text-sm font-body font-medium tracking-wide">
            Dr. B.R. Ambedkar National Institute of Technology Jalandhar
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-bold text-white leading-tight
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl"
        >
          Industry–Academia
          <span className="block text-[#F5A623]">Conclave 2026</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-5 text-white/75 font-body text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Bridging Academia and Industry: Pathways to Innovation and Growth
        </motion.p>

        {/* Date + Venue chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-7 flex flex-wrap justify-center gap-3"
        >
          <div className="flex items-center gap-2 bg-[#F5A623] text-[#0D2137] font-body
                          font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-[#F5A623]/25">
            <span>📅</span> June 5–6, 2026
          </div>
        </motion.div>

        {/* Event format pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {EVENT_FORMATS.map((fmt, i) => (
            <span
              key={i}
              className="text-xs font-body font-medium px-4 py-1.5 rounded-full
                         bg-[#1565C0]/40 border border-[#1565C0]/60 text-white/85
                         backdrop-blur-sm"
            >
              {fmt}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <RouterLink
            to="/register"
            className="px-8 py-3 bg-transparent border-2 border-[#F5A623] text-[#F5A623]
                       font-body font-semibold text-sm rounded-lg hover:bg-[#F5A623]/10
                       transition-all duration-200"
          >
            Register Now
          </RouterLink>
        </motion.div>

        {/* Slide indicators */}
        <div className="mt-12 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-8 h-2 bg-[#F5A623]" : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}