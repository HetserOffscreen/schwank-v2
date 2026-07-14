import React from "react";
import { Shield, Clock, Compass, Laptop } from "lucide-react";
import { motion } from "motion/react";
import { Language, TranslationContent } from "../types";

interface SOSProps {
  lang: Language;
  translations: TranslationContent;
}

export default function SOS({ lang, translations }: SOSProps) {
  // Cascading variants for the SOS container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  } as const;

  const cardItemVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 20 },
    show: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 13
      }
    }
  } as const;

  return (
    <motion.section 
      id="sos-info" 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-10"
    >
      
      <div className="lg:col-span-5 space-y-6">
        <motion.span 
          variants={itemVariants}
          className="font-mono text-xs uppercase tracking-widest text-rose-400 font-bold block"
        >
          {translations.sos.kicker}
        </motion.span>
        <motion.h2 
          variants={itemVariants}
          className="font-display text-4xl md:text-5xl font-medium text-white [data-theme=light]:text-slate-900 leading-tight"
        >
          {translations.sos.title}
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-white/70 [data-theme=light]:text-slate-600 font-body leading-relaxed"
        >
          {translations.sos.description}
        </motion.p>
        
        {/* Urgent Coverage badge */}
        <motion.div 
          variants={itemVariants}
          className="glass p-5 rounded-2xl border-white/10 bg-rose-500/5 space-y-3"
        >
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
        </motion.div>
      </div>

      <motion.div 
        variants={cardContainerVariants}
        className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        
        <motion.div 
          variants={cardItemVariants}
          className="glass glass-card border-white/10 p-6 space-y-4"
        >
          <div className="p-3 bg-rose-500/20 text-rose-400 rounded-xl w-fit">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-display text-2xl text-white [data-theme=light]:text-slate-900">
            {translations.sos.cards.security.title}
          </h3>
          <p className="text-sm text-white/60 [data-theme=light]:text-slate-500">
            {translations.sos.cards.security.desc}
          </p>
        </motion.div>

        <motion.div 
          variants={cardItemVariants}
          className="glass glass-card border-white/10 p-6 space-y-4"
        >
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl w-fit">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-display text-2xl text-white [data-theme=light]:text-slate-900">
            {translations.sos.cards.restore.title}
          </h3>
          <p className="text-sm text-white/60 [data-theme=light]:text-slate-500">
            {translations.sos.cards.restore.desc}
          </p>
        </motion.div>

        <motion.div 
          variants={cardItemVariants}
          className="glass glass-card border-white/10 p-6 space-y-4"
        >
          <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl w-fit">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-display text-2xl text-white [data-theme=light]:text-slate-900">
            {translations.sos.cards.wifi.title}
          </h3>
          <p className="text-sm text-white/60 [data-theme=light]:text-slate-500">
            {translations.sos.cards.wifi.desc}
          </p>
        </motion.div>

        <motion.div 
          variants={cardItemVariants}
          className="glass glass-card border-white/10 p-6 space-y-4"
        >
          <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit">
            <Laptop className="w-5 h-5" />
          </div>
          <h3 className="font-display text-2xl text-white [data-theme=light]:text-slate-900">
            {translations.sos.cards.performance.title}
          </h3>
          <p className="text-sm text-white/60 [data-theme=light]:text-slate-500">
            {translations.sos.cards.performance.desc}
          </p>
        </motion.div>

      </motion.div>

    </motion.section>
  );
}
