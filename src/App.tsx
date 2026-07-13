import React, { useState, useEffect } from "react";
import { translations } from "./translations";
import { Language } from "./types";
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import Wizard from "./components/Wizard";
import SOS from "./components/SOS";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  // Multi-language support state
  const [lang, setLang] = useState<Language>("pt");

  // Apply dark theme to HTML tag
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const t = translations[lang];

  return (
    <div className="relative min-h-screen text-white transition-colors duration-400 pb-20 select-none overflow-x-hidden">
      
      {/* ─── SCENE BACKGROUND BLOBS ─── */}
      <div className="scene" aria-hidden="true">
        <div className="scene__blob scene__blob--1"></div>
        <div className="scene__blob scene__blob--2"></div>
        <div className="scene__blob scene__blob--3"></div>
      </div>

      {/* ─── HEADER & NAVIGATION ─── */}
      <NavBar lang={lang} setLang={setLang} translations={t} />

      {/* ─── MAIN APPLET BODY ─── */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 md:mt-24">
        
        {/* FrontPage section */}
        <FrontPage lang={lang} translations={t} />

        {/* Divider */}
        <div id="estimator" className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 [data-theme=light]:via-slate-300 to-transparent my-20"></div>

        {/* Interactive Estimate Configurator section (Wizard) */}
        <section className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 [data-theme=light]:text-emerald-600 font-bold">
              {t.estimator.kicker}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white [data-theme=light]:text-slate-900">
              {t.estimator.title}
            </h2>
            <p className="text-sm text-white/50 [data-theme=light]:text-slate-500 font-body">
              {t.estimator.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Wizard translations={t} lang={lang} />
          </div>

        </section>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 [data-theme=light]:via-slate-300 to-transparent my-20"></div>

        {/* SOS section */}
        <SOS lang={lang} translations={t} />

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 [data-theme=light]:via-slate-300 to-transparent my-20"></div>

        {/* FAQ section */}
        <FAQ lang={lang} translations={t} />

        {/* Footer */}
        <Footer lang={lang} translations={t} />

      </main>

    </div>
  );
}
