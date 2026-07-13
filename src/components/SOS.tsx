import React from "react";
import { Shield, Clock, Compass, Laptop } from "lucide-react";
import { Language, TranslationContent } from "../types";

interface SOSProps {
  lang: Language;
  translations: TranslationContent;
}

export default function SOS({ lang, translations }: SOSProps) {
  return (
    <section id="sos-info" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-10">
      
      <div className="lg:col-span-5 space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-rose-400 font-bold">
          {translations.sos.kicker}
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white [data-theme=light]:text-slate-900 leading-tight">
          {translations.sos.title}
        </h2>
        <p className="text-white/70 [data-theme=light]:text-slate-600 font-body leading-relaxed">
          {translations.sos.description}
        </p>
        
        {/* Urgent Coverage badge */}
        <div className="glass p-5 rounded-2xl border-white/10 bg-rose-500/5 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-rose-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            {translations.sos.coverageHeader}
          </h4>
          <p className="text-sm font-semibold text-white [data-theme=light]:text-slate-800">
            {translations.sos.neighborhoods}
          </p>
          <p className="text-xs text-white/50 [data-theme=light]:text-slate-500">
            {translations.sos.coverageDesc}
          </p>
        </div>
      </div>

      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <div className="glass glass-card border-white/10 p-6 space-y-4">
          <div className="p-3 bg-rose-500/20 text-rose-400 rounded-xl w-fit">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-display text-2xl text-white [data-theme=light]:text-slate-900">
            {translations.sos.cards.security.title}
          </h3>
          <p className="text-sm text-white/60 [data-theme=light]:text-slate-500">
            {translations.sos.cards.security.desc}
          </p>
        </div>

        <div className="glass glass-card border-white/10 p-6 space-y-4">
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl w-fit">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-display text-2xl text-white [data-theme=light]:text-slate-900">
            {translations.sos.cards.restore.title}
          </h3>
          <p className="text-sm text-white/60 [data-theme=light]:text-slate-500">
            {translations.sos.cards.restore.desc}
          </p>
        </div>

        <div className="glass glass-card border-white/10 p-6 space-y-4">
          <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl w-fit">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-display text-2xl text-white [data-theme=light]:text-slate-900">
            {translations.sos.cards.wifi.title}
          </h3>
          <p className="text-sm text-white/60 [data-theme=light]:text-slate-500">
            {translations.sos.cards.wifi.desc}
          </p>
        </div>

        <div className="glass glass-card border-white/10 p-6 space-y-4">
          <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit">
            <Laptop className="w-5 h-5" />
          </div>
          <h3 className="font-display text-2xl text-white [data-theme=light]:text-slate-900">
            {translations.sos.cards.performance.title}
          </h3>
          <p className="text-sm text-white/60 [data-theme=light]:text-slate-500">
            {translations.sos.cards.performance.desc}
          </p>
        </div>

      </div>

    </section>
  );
}
