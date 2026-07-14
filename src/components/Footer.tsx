import React from "react";
import { Language, TranslationContent } from "../types";

interface FooterProps {
  lang: Language;
  translations: TranslationContent;
}

export default function Footer({ lang, translations }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-28 pt-8 border-t border-white/10 [data-theme=light]:border-slate-300 text-center space-y-3">
      <p className="text-xs text-white/30 [data-theme=light]:text-slate-500 font-mono uppercase tracking-widest">
        Ernesto Scheffer · {translations.nav.techSupport}
      </p>
      <p className="text-[11px] text-white/20 [data-theme=light]:text-slate-400 font-body">
        {translations.footer.text} · © {currentYear}
      </p>
    </footer>
  );
}
