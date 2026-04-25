import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";

const NAV_LINKS = [
  { label: "About",      to: "about" },
  { label: "Objectives", to: "objectives" },
  { label: "Themes",     to: "themes" },
  { label: "Activities", to: "activities" },
  { label: "Speakers",   to: "speakers" },
  { label: "Committee",  to: "committee" },
  { label: "Contact",    to: "contact" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D2137]/96 backdrop-blur-md shadow-lg shadow-black/25 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo + name */}
        <div className="flex items-center gap-3.5">
          <img
            src={logo}
            alt="NITJ Logo"
            className="h-14 w-14 object-contain drop-shadow-lg flex-shrink-0"
          />
          <div className="hidden sm:block leading-tight">
            <p className="text-white font-display font-bold text-[15px] tracking-wide">
              NIT Jalandhar
            </p>
            <p className="text-[#F5A623] text-[12px] font-body font-medium tracking-wider uppercase">
              Industry–Academia Conclave 2026
            </p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              onSetActive={() => setActiveSection(link.to)}
              className={`px-3.5 py-2 text-[13.5px] font-body font-medium rounded-md cursor-pointer
                          transition-all duration-200 tracking-wide
                          ${activeSection === link.to
                            ? "text-[#F5A623] bg-white/10"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                          }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4 relative group">
            <button
              disabled
              className="px-5 py-2 bg-[#F5A623] text-[#0D2137] text-[13px] font-body
                         font-bold rounded-md opacity-80 cursor-not-allowed tracking-wide"
            >
              Register
            </button>
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5
                             bg-[#0D2137] text-white text-xs rounded-md whitespace-nowrap
                             opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                             border border-white/10 shadow-xl">
              Registration opens soon
            </span>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0D2137]/98 backdrop-blur-md px-4 pb-5 pt-2 flex flex-col gap-1
                        border-t border-white/10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-md
                         cursor-pointer text-[15px] font-body font-medium transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 px-4 py-2.5 text-center bg-[#F5A623]/15 text-[#F5A623] text-sm
                          font-body rounded-md border border-[#F5A623]/30">
            Registration opens soon
          </div>
        </div>
      </div>
    </header>
  );
}