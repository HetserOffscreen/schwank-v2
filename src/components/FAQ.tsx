import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Language, TranslationContent } from "../types";

interface FAQProps {
  lang: Language;
  translations: TranslationContent;
}

export default function FAQ({ lang, translations }: FAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq-section" className="space-y-12 max-w-4xl mx-auto pt-10">
      
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-violet-400 font-bold">
          {translations.faqs.kicker}
        </span>
        <h2 className="font-display text-4xl font-medium text-white [data-theme=light]:text-slate-900">
          {translations.faqs.title}
        </h2>
        <p className="text-sm text-white/50 [data-theme=light]:text-slate-500 font-body">
          {translations.faqs.description}
        </p>
      </div>

      <div className="space-y-4">
        
        {translations.faqs.items.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div 
              key={idx}
              className="glass rounded-2xl border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between text-white [data-theme=light]:text-slate-900 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="font-display text-lg font-medium">{faq.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-violet-400' : ''}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-white/5 [data-theme=light]:border-slate-200"
                  >
                    <p className="p-6 text-sm text-white/70 [data-theme=light]:text-slate-600 leading-relaxed font-body font-light bg-white/[0.02]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

      </div>

    </section>
  );
}
