import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import translations from './translations';

// Keeps the current language (ar / en) for the whole site.
// t('key')       → interface text from translations.js
// pick({ar, en}) → picks the right side of any { ar, en } object from src/data/
const LanguageContext = createContext(null);
const STORAGE_KEY = 'sf-lang';

function readSavedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ar';
  } catch {
    return 'ar';
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSavedLanguage);
  const isEnglish = lang === 'en';

  const t = useCallback((key) => translations[key]?.[lang] ?? key, [lang]);
  const pick = useCallback((value) => (value ? value[lang] : ''), [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((current) => {
      const next = current === 'ar' ? 'en' : 'ar';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }, []);

  // Direction, page title and description follow the language.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = isEnglish ? 'ltr' : 'rtl';
    document.title = translations.title[lang];
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations.desc[lang]);
  }, [lang, isEnglish]);

  const value = useMemo(
    () => ({ lang, isEnglish, t, pick, toggleLanguage }),
    [lang, isEnglish, t, pick, toggleLanguage],
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
