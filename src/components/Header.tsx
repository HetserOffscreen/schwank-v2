import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Language, TranslationContent } from "../types";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  translations: TranslationContent;
}

export default function Header({ lang, setLang, translations }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Compute fixed positioning style for the scrolled ball so it lines up with the right column (Y-axis of the language button)
  const scrolledStyle = isScrolled ? {
    position: "fixed" as const,
    top: "1.5rem", // pt-6
    right: "max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))", // Aligns with the far-right edge of the 1280px container, or right-6 on smaller screens
    width: "4.5rem", // Perfect 72px ball size
    height: "4.5rem",
    padding: "0",
    borderRadius: "9999px",
    zIndex: 100,
  } : {};

  return (
    <header className="relative z-50 w-full max-w-7xl mx-auto px-6 pt-6 h-24 md:h-28">
      <motion.nav
        layout
        style={scrolledStyle}
        className={`glass !overflow-visible border border-white/10 shadow-lg transition-all duration-500 ease-out ${
          isScrolled
            ? "cursor-pointer flex items-center justify-center rounded-full hover:scale-105 active:scale-95 border-cyan-500/30 shadow-cyan-500/5 hover:border-cyan-400/50"
            : "rounded-full px-8 py-4 grid grid-cols-3 items-center"
        }`}
        onClick={isScrolled ? handleBackToTop : undefined}
      >
        <AnimatePresence mode="wait">
          {isScrolled ? (
            // --- SCROLLED BALL STATE: ONLY CAT IMAGE ---
            <motion.div
              key="scrolled-cat"
              initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 25 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="flex items-center justify-center w-full h-full relative group"
              title="Voltar ao topo"
            >
              <img
                src="/gato-profissional.png"
                alt="Gato Profissional"
                className="w-12 h-12 object-cover rounded-full select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ) : (
            // --- NORMAL HEADER STATE: centered layout ---
            <React.Fragment key="full-header">
              {/* Left Column: Nav links */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-center justify-start gap-2.5"
              >
                <div className="hidden md:flex items-center gap-2.5">
                  <a
                    href="#estimator"
                    onClick={(e) => handleScroll(e, "#estimator")}
                    className="px-4.5 py-2 rounded-full text-[13px] uppercase tracking-wider font-semibold bg-slate-950/40 backdrop-blur-md border border-white/10 text-emerald-400 [data-theme=light]:bg-slate-900/80 [data-theme=light]:text-emerald-300 hover:scale-105 active:scale-95 hover:bg-slate-900/60 hover:border-white/20 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-500 ease-out"
                  >
                    {translations.nav.freeEstimate}
                  </a>
                  <a
                    href="#sos-info"
                    onClick={(e) => handleScroll(e, "#sos-info")}
                    className="px-4.5 py-2 rounded-full text-[13px] uppercase tracking-wider font-semibold bg-slate-950/40 backdrop-blur-md border border-rose-500/30 text-rose-400 [data-theme=light]:bg-slate-900/80 [data-theme=light]:text-rose-300 hover:scale-105 active:scale-95 hover:bg-slate-900/60 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-500 ease-out"
                  >
                    {translations.nav.sosZones}
                  </a>
                  <a
                    href="#faq-section"
                    onClick={(e) => handleScroll(e, "#faq-section")}
                    className="px-4.5 py-2 rounded-full text-[13px] uppercase tracking-wider font-semibold bg-slate-950/40 backdrop-blur-md border border-violet-500/30 text-violet-400 [data-theme=light]:bg-slate-900/80 [data-theme=light]:text-violet-300 hover:scale-105 active:scale-95 hover:bg-slate-900/60 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-500 ease-out"
                  >
                    FAQ
                  </a>
                </div>
              </motion.div>

              {/* Center Column: Logo Brand (centered) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex justify-center"
              >
                <a
                  href="#"
                  onClick={handleBackToTop}
                  className="flex items-center gap-2 cursor-pointer group select-none"
                >
                  <motion.img
                    src="/gato-profissional.png"
                    alt="Gato Profissional"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-20 h-20 object-cover -my-4 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col justify-center group-hover:translate-x-0.5 transition-transform duration-300 text-left">
                    <span className="font-[Georgia] text-2xl md:text-3xl tracking-wide font-medium text-white [data-theme=light]:text-slate-900 transition-colors leading-tight">
                      {translations.nav.title}
                    </span>
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#5ee7df] font-bold">
                      {translations.nav.techSupport}
                    </span>
                  </div>
                </a>
              </motion.div>

              {/* Right Column: Language selector dropdown */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex justify-end relative"
                ref={dropdownRef}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-4.5 py-2 rounded-full text-[13px] font-mono tracking-wider font-semibold bg-slate-950/40 backdrop-blur-md border border-white/10 text-white [data-theme=light]:bg-slate-900/80 [data-theme=light]:border-slate-800 hover:scale-105 active:scale-95 hover:bg-slate-900/60 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-500 ease-out flex items-center gap-1.5 cursor-pointer shadow-md"
                  id="language-selector-btn"
                  title="Select language"
                >
                  <span>{lang === "pt" ? "🇧🇷 Português" : lang === "en" ? "🇺🇸 English" : "🇪🇸 Español"}</span>
                  <ChevronDown className={`w-3 h-3 text-white/50 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="!absolute right-0 mt-2 w-44 rounded-2xl border border-white/15 bg-slate-950/95 shadow-2xl p-2 z-40 flex flex-col gap-1 overflow-hidden"
                    >
                      <button
                        onClick={() => {
                          setLang("pt");
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                          lang === "pt"
                            ? "bg-white/10 text-cyan-400 font-bold"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>🇧🇷 Português</span>
                        {lang === "pt" && <span className="text-[9px] text-cyan-400 font-mono">●</span>}
                      </button>

                      <button
                        onClick={() => {
                          setLang("en");
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                          lang === "en"
                            ? "bg-white/10 text-cyan-400 font-bold"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>🇺🇸 English</span>
                        {lang === "en" && <span className="text-[9px] text-cyan-400 font-mono">●</span>}
                      </button>

                      <button
                        onClick={() => {
                          setLang("es");
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                          lang === "es"
                            ? "bg-white/10 text-cyan-400 font-bold"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>🇪🇸 Español</span>
                        {lang === "es" && <span className="text-[9px] text-cyan-400 font-mono">●</span>}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </React.Fragment>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
