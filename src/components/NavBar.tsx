import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Language, TranslationContent } from "../types";

interface NavBarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  translations: TranslationContent;
}

export default function NavBar({ lang, setLang, translations }: NavBarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <header className="relative z-50 w-full max-w-7xl mx-auto px-6 pt-6">
      <nav className="glass !overflow-visible rounded-full px-8 py-4 flex items-center justify-between border border-white/10 shadow-lg">
        
        {/* Logo Brand */}
        <div className="flex flex-col">
          <span className="font-[Georgia] text-2xl tracking-wide font-medium text-white [data-theme=light]:text-slate-900 transition-colors">
            {translations.nav.title}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#5ee7df] font-bold">
            {translations.nav.techSupport}
          </span>
        </div>

        {/* Nav pill links & Language switcher */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <a 
              href="#estimator" 
              onClick={(e) => handleScroll(e, "#estimator")}
              className="glass px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border-white/20 bg-white/10 text-emerald-400 [data-theme=light]:text-teal-700 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {translations.nav.freeEstimate}
            </a>
            <a 
              href="#sos-info" 
              onClick={(e) => handleScroll(e, "#sos-info")}
              className="glass px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border-rose-500/20 bg-rose-500/10 text-rose-400 [data-theme=light]:text-rose-600 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {translations.nav.sosZones}
            </a>
            <a 
              href="#faq-section" 
              onClick={(e) => handleScroll(e, "#faq-section")}
              className="glass px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border-violet-500/20 bg-violet-500/10 text-violet-400 [data-theme=light]:text-violet-600 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              FAQ
            </a>
          </div>

          {/* Language Switcher Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-4 py-2.5 rounded-full text-xs font-mono tracking-wider font-semibold border border-white/15 bg-white/10 text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-md"
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
          </div>
        </div>

      </nav>
    </header>
  );
}
