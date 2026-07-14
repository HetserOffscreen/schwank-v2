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

  // Framer Motion Cascade Animation Variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  } as const;

  const titleVariants = {
    hidden: { opacity: 0, y: -25 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14
      }
    }
  } as const;

  const subTextVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14
      }
    }
  } as const;

  const descVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14
      }
    }
  } as const;

  const buttonGroupVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 35 },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
        delay: 0.55 // Service card loads gracefully after left elements cascade
      }
    }
  } as const;

  const tabsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.0 // tab buttons stagger beautifully after card finishes loading
      }
    }
  } as const;

  const tabButtonVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 8 },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    }
  } as const;

  return (
    <section className="w-full">
      <motion.div 
        variants={heroContainerVariants}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        
        {/* Left Hero Column */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6 w-full max-w-[550px]">
          
          {/* Main Display Typography Title */}
          <motion.div variants={titleVariants} className="space-y-2">
            <h1 className="font-display text-5xl md:text-7xl leading-none tracking-tight font-medium bg-gradient-to-r from-white via-slate-100 to-cyan-300 [data-theme=light]:from-slate-900 [data-theme=light]:via-slate-800 [data-theme=light]:to-teal-800 bg-clip-text text-transparent transition-colors w-full max-w-[550px]">
              {(() => {
                const words = translations.hero.title.split(" ");
                if (words.length >= 2) {
                  return (
                    <>
                      <span className="whitespace-nowrap">{words[0]} {words[1]}</span>{" "}
                      {words.slice(2).join(" ")}
                    </>
                  );
                }
                return translations.hero.title;
              })()}
            </h1>
            <p className="font-mono text-xs tracking-widest text-white/40 [data-theme=light]:text-slate-500 uppercase">
              {translations.hero.techSupportSub}
            </p>
          </motion.div>

          {/* Premium Specialist Description */}
          <motion.p 
            variants={descVariants}
            className="text-lg text-white/70 [data-theme=light]:text-slate-600 leading-relaxed max-w-[450px] font-body font-light whitespace-pre-line"
          >
            {translations.hero.description}
          </motion.p>

          {/* Quick action buttons moved to this section */}
          <motion.div 
            variants={buttonGroupVariants}
            className="flex flex-row items-center gap-3 md:gap-4 pt-8 border-t border-white/10 [data-theme=light]:border-slate-300 w-full max-w-[550px]"
          >
            <motion.a 
              href="#estimator" 
              onClick={(e) => scrollToSection(e, "#estimator")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="glass px-5 md:px-6 py-4 rounded-full font-medium text-base bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-400/30 text-emerald-300 [data-theme=light]:text-teal-800 shadow-glow flex items-center justify-center gap-1.5 md:gap-2 cursor-pointer flex-1 whitespace-nowrap overflow-hidden"
            >
              <Sparkles className="w-4 h-4 md:w-4.5 md:h-4.5 text-emerald-400 flex-shrink-0" />
              <span className="truncate">{translations.hero.estimateDiagnostic}</span>
            </motion.a>
            <motion.a 
              href={`https://wa.me/5521936180050?text=${encodeURIComponent("Olá Ernesto! Acessei seu site e gostaria de solicitar um orçamento para o meu aparelho.")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="glass px-5 md:px-6 py-4 rounded-full font-medium text-base border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 text-white/80 hover:text-emerald-300 flex items-center justify-center gap-1.5 md:gap-2 cursor-pointer flex-1 whitespace-nowrap overflow-hidden"
            >
              <MessageSquare className="w-4 h-4 md:w-4.5 md:h-4.5 text-emerald-400 flex-shrink-0" />
              <span className="truncate">Fale Comigo Agora!</span>
            </motion.a>
          </motion.div>

        </div>

        {/* Right Hero Column (Immersive Visual Glass Presentation card) */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-7 relative flex justify-center lg:justify-end w-full"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 rounded-3xl blur-3xl opacity-60"></div>
          
          <div 
            className="apple-liquid-glass-card max-w-[650px] w-full border-white/15 shadow-2xl relative z-10 p-6 md:p-8 flex flex-col justify-between min-h-[580px] md:min-h-[610px] h-auto pb-8"
          >
            <div className="space-y-6 relative z-10">
              {/* Visual Header */}
              <div className="flex flex-col items-center justify-center gap-2 mb-2 text-center w-full">
                <div className="flex items-center gap-2">
                  <Laptop className="w-4.5 h-4.5 text-cyan-400" />
                  <span className="text-xs md:text-sm uppercase font-mono tracking-widest text-cyan-400 font-semibold">
                    {translations.portal.systemIdentity}
                  </span>
                </div>
              </div>

              {/* Compact Horizontal Service Selection Icons (Apple Liquid Tab-bar Style) with Stagger */}
              <motion.div 
                variants={tabsContainerVariants}
                initial="hidden"
                animate="show"
                className="apple-liquid-tabs"
              >
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
                    <motion.button
                      key={srv.id}
                      variants={tabButtonVariants}
                      onClick={() => setActiveTab(srv.id)}
                      className={`apple-tab-btn relative group ${isSelected ? `is-active ${currentStyle.textActive}` : `text-white/40 ${currentStyle.hoverClass}`}`}
                    >
                      <IconComponent className="w-5 h-5 transition-transform duration-300 active:scale-90" />
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Selected Service Detail View (Animated & Stabilized Height - No scrollbars) */}
              <div className="flex-1 min-h-[290px] select-none">
                <AnimatePresence mode="wait">
                  {services.map((srv) => {
                    if (srv.id !== activeTab) return null;
                    const idx = services.findIndex(s => s.id === srv.id);
                    const tabTitleColors = [
                      "text-blue-400 [data-theme=light]:text-blue-600",
                      "text-rose-400 [data-theme=light]:text-rose-600",
                      "text-emerald-400 [data-theme=light]:text-emerald-600",
                      "text-purple-400 [data-theme=light]:text-purple-600",
                      "text-orange-400 [data-theme=light]:text-orange-600"
                    ];
                    const activeTitleColor = tabTitleColors[idx] || "text-white";
                    
                    return (
                      <motion.div
                        key={srv.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-5"
                      >
                        <div className="space-y-1.5">
                          <h4 className={`font-display text-2xl md:text-3xl font-bold ${activeTitleColor} transition-colors duration-300`}>
                            {srv.title}
                          </h4>
                          <p className="font-mono text-xs md:text-sm text-cyan-400/85 font-semibold">
                            {srv.subtitle}
                          </p>
                        </div>

                        <p className="text-sm md:text-base text-white/90 [data-theme=light]:text-slate-800 leading-relaxed font-body">
                          {srv.description}
                        </p>

                        {/* List of points (compact version) */}
                        <div className="grid grid-cols-1 gap-2.5 pt-2">
                          {srv.points.map((point, index) => (
                            <div key={index} className="flex items-center gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              <span className="text-sm md:text-base text-white/90 [data-theme=light]:text-slate-800">
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

          </div>
        </motion.div>
 
      </motion.div>
    </section>
  );
}
