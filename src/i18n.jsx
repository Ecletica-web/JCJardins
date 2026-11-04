import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import * as pt from './content/landing.js';
import * as en from './content/landing.en.js';
import { altEn } from './content/images.en.js';

/* Customer-facing language: Portuguese (default) or English.
   The choice is remembered in this browser and sets <html lang>. */

const LangContext = createContext({ lang: 'en', setLang: () => {} });
const content = { pt, en };

function readLang() {
  try {
    const saved = window.localStorage.getItem('tq-lang');
    if (saved === 'en' || saved === 'pt') return saved;
  } catch {
    /* storage unavailable */
  }
  return 'en';
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(readLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-PT';
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      window.localStorage.setItem('tq-lang', next);
    } catch {
      /* storage unavailable — choice lasts for this visit */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/* The landing-page copy for the current language. */
export function useContent() {
  return content[useContext(LangContext).lang];
}

/* Image alt text in the current language (falls back to Portuguese). */
export function useAlt() {
  const { lang } = useContext(LangContext);
  return useCallback((key, ptAlt) => (lang === 'en' && altEn[key]) || ptAlt, [lang]);
}
