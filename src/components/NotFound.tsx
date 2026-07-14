import React from "react";
import { motion } from "motion/react";
import { Language, TranslationContent } from "../types";
import Header from "./Header";
import Footer from "./Footer";

interface NotFoundProps {
  lang: Language;
  setLang: (lang: Language) => void;
  translations: TranslationContent;
  onNavigateHome: () => void;
}

export default function NotFound({ lang, setLang, translations, onNavigateHome }: NotFoundProps) {
  const t = translations;

  return (
    <div className="relative min-h-screen text-white pb-20 select-none overflow-x-hidden">
      {/* ─── SCENE BACKGROUND BLOBS ─── */}
      <div className="scene" aria-hidden="true">
        <div className="scene__blob scene__blob--1 bg-rose-500/20"></div>
        <div className="scene__blob scene__blob--2 bg-violet-500/10"></div>
        <div className="scene__blob scene__blob--3 bg-cyan-500/10"></div>
      </div>

      {/* Header navigation */}
      <Header lang={lang} setLang={setLang} translations={t} />

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 mt-20 md:mt-28 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="w-full max-w-lg bg-slate-950/40 backdrop-blur-xl border border-rose-500/20 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-rose-500/5 relative overflow-hidden"
          id="notfound-card"
        >
          {/* Decorative Corner Grid lines */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-rose-500/40 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rose-500/40 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-rose-500/40 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-rose-500/40 rounded-br-xl" />

          {/* Animated Diagnostics Cat Scanning Sphere */}
          <div className="flex justify-center mb-8 relative">
            {/* Outer scanning circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute w-32 h-32 rounded-full border border-dashed border-rose-500/30 -m-2 flex items-center justify-center"
            />
            {/* Pulse glow background */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute w-28 h-28 rounded-full bg-rose-500/10 filter blur-xl"
            />
            {/* Float wrapper for the Cat */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-28 h-28 rounded-full border-2 border-rose-500/30 overflow-hidden bg-slate-900"
            >
              <img
                src="/gato-profissional.png"
                alt="Scanning Cat"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Error Banner */}
          <div className="inline-block px-3 py-1 bg-rose-500/10 border border-rose-500/30 rounded-full text-[10px] md:text-xs font-mono text-rose-400 tracking-wider mb-6">
            {t.notFound.errorCode}
          </div>

          {/* Large display code */}
          <h1 className="font-display text-7xl md:text-8xl font-medium text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            404
          </h1>

          {/* Translated Title */}
          <h2 className="text-xl md:text-2xl font-sans font-medium text-white mb-3">
            {t.notFound.title}
          </h2>

          {/* Translated Description */}
          <p className="text-sm text-white/60 font-body mb-8 leading-relaxed max-w-sm mx-auto">
            {t.notFound.description}
          </p>

          {/* Home Button CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateHome}
            className="px-8 py-3.5 rounded-full text-sm font-semibold bg-white text-slate-950 font-sans hover:bg-rose-500 hover:text-white hover:shadow-xl hover:shadow-rose-500/20 active:scale-95 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
          >
            <span>🏠</span>
            <span>{t.notFound.homeButton}</span>
          </motion.button>
        </motion.div>

        {/* Footer */}
        <div className="w-full max-w-4xl">
          <Footer lang={lang} translations={t} />
        </div>
      </main>
    </div>
  );
}
