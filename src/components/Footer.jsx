import logo from "../assets/images/logo.png";
import { Link } from "react-scroll";

const LINKS = [
  { label: "About",      to: "about" },
  { label: "Objectives", to: "objectives" },
  { label: "Themes",     to: "themes" },
  { label: "Activities", to: "activities" },
  { label: "Speakers",   to: "speakers" },
  { label: "Committee",  to: "committee" },
  { label: "Contact",    to: "contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/8">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="NITJ" className="h-12 w-12 object-contain opacity-90" />
              <div>
                <p className="font-display font-bold text-white text-sm">NIT Jalandhar</p>
                <p className="text-[#F5A623] font-body text-xs">Industry-Academia Conclave 2026</p>
              </div>
            </div>
            <p className="text-white/40 font-body text-xs leading-relaxed max-w-xs">
              Dr. B.R. Ambedkar National Institute of Technology Jalandhar,
              G.T. Road, Amritsar Bypass, Jalandhar – 144 011, Punjab (India)
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-body font-semibold text-sm mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    smooth
                    duration={600}
                    offset={-80}
                    className="text-white/45 hover:text-[#F5A623] font-body text-sm
                               cursor-pointer transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event details */}
          <div>
            <h4 className="text-white font-body font-semibold text-sm mb-4 tracking-wide">
              Event Details
            </h4>
            <div className="space-y-3 text-white/45 font-body text-sm">
              <p>📅 &nbsp;June 5–6, 2026</p>
              <p>📍 &nbsp;NIT Jalandhar, Punjab</p>
              <p>✉️ &nbsp;
                <a href="mailto:yadavn@nitj.ac.in"
                   className="hover:text-[#F5A623] transition-colors">
                  yadavn@nitj.ac.in
                </a>
              </p>
              <p>📞 &nbsp;7310751691</p>
              <a href="https://www.nitj.ac.in" target="_blank" rel="noreferrer"
                 className="block mt-3 text-[#1565C0] hover:text-[#F5A623] transition-colors text-xs">
                www.nitj.ac.in →
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 font-body text-xs">
            © 2026 Dr. B.R. Ambedkar National Institute of Technology Jalandhar. All rights reserved.
          </p>
          <p className="text-white/70 font-body text-xs">
            Organised by Dean, Industry &amp; International Affairs
          </p>
        </div>
      </div>
    </footer>
  );
}