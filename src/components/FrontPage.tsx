import React, { useState } from "react";
import { 
  Laptop, 
  Globe, 
  Zap, 
  Home, 
  Languages, 
  FileCheck, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Language, TranslationContent, ServiceDetail } from "../types";

interface FrontPageProps {
  lang: Language;
  translations: TranslationContent;
}

export default function FrontPage({ lang, translations }: FrontPageProps) {
  // Interactive Tab for Capabilities - internal to FrontPage
  const [activeTab, setActiveTab] = useState<string>("remote");

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Ernesto Scheffer Business Data
  const services: ServiceDetail[] = [
    {
      id: "remote",
      title: translations.capabilities.services.remote.title,
      subtitle: translations.capabilities.services.remote.subtitle,
      tag: translations.capabilities.services.remote.tag,
      description: translations.capabilities.services.remote.description,
      icon: Globe,
      gradient: "from-cyan-400 to-blue-500",
      points: translations.capabilities.services.remote.points
    },
    {
      id: "sos",
      title: translations.capabilities.services.sos.title,
      subtitle: translations.capabilities.services.sos.subtitle,
      tag: translations.capabilities.services.sos.tag,
      description: translations.capabilities.services.sos.description,
      icon: Zap,
      gradient: "from-amber-400 to-rose-500",
      points: translations.capabilities.services.sos.points
    },
    {
      id: "home",
      title: translations.capabilities.services.home.title,
      subtitle: translations.capabilities.services.home.subtitle,
      tag: translations.capabilities.services.home.tag,
      description: translations.capabilities.services.home.description,
      icon: Home,
      gradient: "from-emerald-400 to-teal-500",
      points: translations.capabilities.services.home.points
    },
    {
      id: "multilingual",
      title: translations.capabilities.services.multilingual.title,
      subtitle: translations.capabilities.services.multilingual.subtitle,
      tag: translations.capabilities.services.multilingual.tag,
      description: translations.capabilities.services.multilingual.description,
      icon: Languages,
      gradient: "from-indigo-400 to-purple-500",
      points: translations.capabilities.services.multilingual.points
    },
    {
      id: "estimate",
      title: translations.capabilities.services.estimate.title,
      subtitle: translations.capabilities.services.estimate.subtitle,
      tag: translations.capabilities.services.estimate.tag,
      description: translations.capabilities.services.estimate.description,
      icon: FileCheck,
      gradient: "from-pink-400 to-rose-500",
      points: translations.capabilities.services.estimate.points
    }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Hero Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 w-full max-w-[550px]">
          
          {/* Main Display Typography Title */}
          <div className="space-y-2">
            <h1 className="font-display text-5xl md:text-7xl leading-none tracking-tight font-medium bg-gradient-to-r from-white via-slate-100 to-cyan-300 [data-theme=light]:from-slate-900 [data-theme=light]:via-slate-800 [data-theme=light]:to-teal-800 bg-clip-text text-transparent transition-colors">
              {translations.hero.title}
            </h1>
            <p className="font-mono text-xs tracking-widest text-white/40 [data-theme=light]:text-slate-500 uppercase">
              {translations.hero.techSupportSub}
            </p>
          </div>

          {/* Premium Specialist Description */}
          <p className="text-lg text-white/70 [data-theme=light]:text-slate-600 leading-relaxed max-w-[450px] font-body font-light whitespace-pre-line">
            {translations.hero.description}
          </p>

          {/* Quick action buttons moved to this section */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10 [data-theme=light]:border-slate-300 w-full max-w-lg">
            <a 
              href="#estimator" 
              onClick={(e) => scrollToSection(e, "#estimator")}
              className="glass px-8 py-4 rounded-full font-medium text-sm bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-400/30 text-emerald-300 [data-theme=light]:text-teal-800 hover:scale-105 hover:border-emerald-400/50 active:scale-95 shadow-glow transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              {translations.hero.estimateDiagnostic}
            </a>
            <a 
              href={`https://wa.me/5521936180050?text=${encodeURIComponent("Olá Ernesto! Acessei seu site e gostaria de solicitar um orçamento para o meu aparelho.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-full font-medium text-sm border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 text-white/80 hover:text-emerald-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Fale Comigo Agora!
            </a>
          </div>

        </div>

        {/* Right Hero Column (Immersive Visual Glass Presentation card) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full">
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 rounded-3xl blur-3xl opacity-60"></div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="apple-liquid-glass-card max-w-lg w-full border-white/15 shadow-2xl relative z-10 p-6 md:p-8 flex flex-col justify-between h-[540px]"
          >
            <div className="space-y-6 relative z-10">
              {/* Visual Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400">
                  {translations.portal.systemIdentity}
                </span>
                <Laptop className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Compact Horizontal Service Selection Icons (Apple Liquid Tab-bar Style) */}
              <div className="apple-liquid-tabs">
                {/* Sliding active pill indicator */}
                <AnimatePresence>
                  {services.map((srv) => {
                    if (activeTab !== srv.id) return null;
                    const idx = services.findIndex(s => s.id === srv.id);
                    // Sequence: blue, red, green, purple, orange
                    const pillColors = [
                      { bg: "rgba(59, 130, 246, 0.18)", border: "rgba(59, 130, 246, 0.35)", shadow: "0 4px 12px rgba(59, 130, 246, 0.3)" },
                      { bg: "rgba(239, 68, 68, 0.18)", border: "rgba(239, 68, 68, 0.35)", shadow: "0 4px 12px rgba(239, 68, 68, 0.3)" },
                      { bg: "rgba(16, 185, 129, 0.18)", border: "rgba(16, 185, 129, 0.35)", shadow: "0 4px 12px rgba(16, 185, 129, 0.3)" },
                      { bg: "rgba(139, 92, 246, 0.18)", border: "rgba(139, 92, 246, 0.35)", shadow: "0 4px 12px rgba(139, 92, 246, 0.3)" },
                      { bg: "rgba(249, 115, 22, 0.18)", border: "rgba(249, 115, 22, 0.35)", shadow: "0 4px 12px rgba(249, 115, 22, 0.3)" }
                    ];
                    const activeColor = pillColors[idx] || pillColors[0];
                    return (
                      <motion.div
                        key="active-pill"
                        layoutId="activeServiceTab"
                        className="apple-tab-pill"
                        style={{
                          width: "calc(20% - 6px)",
                          left: `calc(${idx * 20}% + ${idx === 0 ? '4px' : idx === 4 ? '2px' : '3px'})`,
                          backgroundColor: activeColor.bg,
                          borderColor: activeColor.border,
                          boxShadow: activeColor.shadow
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    );
                  })}
                </AnimatePresence>

                {services.map((srv, idx) => {
                  const IconComponent = srv.icon;
                  const isSelected = activeTab === srv.id;
                  const tabStyles = [
                    { textActive: "text-blue-400 [data-theme=light]:text-blue-600", hoverClass: "hover:text-blue-400 group-hover:text-blue-400" },
                    { textActive: "text-rose-400 [data-theme=light]:text-rose-600", hoverClass: "hover:text-rose-400 group-hover:text-rose-400" },
                    { textActive: "text-emerald-400 [data-theme=light]:text-emerald-600", hoverClass: "hover:text-emerald-400 group-hover:text-emerald-400" },
                    { textActive: "text-purple-400 [data-theme=light]:text-purple-600", hoverClass: "hover:text-purple-400 group-hover:text-purple-400" },
                    { textActive: "text-orange-400 [data-theme=light]:text-orange-600", hoverClass: "hover:text-orange-400 group-hover:text-orange-400" }
                  ];
                  const currentStyle = tabStyles[idx] || tabStyles[0];
                  return (
                    <button
                      key={srv.id}
                      onClick={() => setActiveTab(srv.id)}
                      title={srv.title}
                      className={`apple-tab-btn relative group ${isSelected ? `is-active ${currentStyle.textActive}` : `text-white/40 ${currentStyle.hoverClass}`}`}
                    >
                      <IconComponent className="w-5 h-5 transition-transform duration-300 active:scale-90" />
                      {/* Tooltip on hover */}
                      <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-[10px] rounded text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-md">
                        {srv.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Service Detail View (Animated & Stabilized Height - No scrollbars) */}
              <div className="h-[240px] md:h-[250px] overflow-hidden select-text">
                <AnimatePresence mode="wait">
                  {services.map((srv) => {
                    if (srv.id !== activeTab) return null;
                    return (
                      <motion.div
                        key={srv.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1">
                          <h4 className="font-display text-xl font-medium text-white">
                            {srv.title}
                          </h4>
                          <p className="font-mono text-xs text-cyan-400/85 font-semibold">
                            {srv.subtitle}
                          </p>
                        </div>

                        <p className="text-xs md:text-sm text-white/70 leading-relaxed font-body font-light">
                          {srv.description}
                        </p>

                        {/* List of points (compact version) */}
                        <div className="grid grid-cols-1 gap-2 pt-2">
                          {srv.points.map((point, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              <span className="text-xs text-white/80">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Badge containing online status */}
            <div className="mt-6 pt-6 border-t border-white/10 [data-theme=light]:border-slate-200 flex justify-center w-full relative z-10">
              <div className="flex w-full items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] md:text-xs uppercase font-mono tracking-wider">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span></span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
