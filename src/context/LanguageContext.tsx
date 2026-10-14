'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, TRANSLATIONS, Translations } from '@/data/translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
  t: TRANSLATIONS.de,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to 'de' since the overwhelming majority of paid traffic is from Germany!
  const [language, setLanguageState] = useState<SupportedLanguage>('de');

  useEffect(() => {
    // 1. Check if user already picked a preference
    const saved = localStorage.getItem('pettoh_user_lang') as SupportedLanguage;
    if (saved && (saved === 'de' || saved === 'nl' || saved === 'en')) {
      setLanguageState(saved);
      return;
    }

    // 2. Auto-detect browser language
    if (typeof window !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('nl')) {
        setLanguageState('nl');
      } else if (browserLang.startsWith('de')) {
        setLanguageState('de');
      } else {
        // Default to German for DE/NL ads campaign
        setLanguageState('de');
      }
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pettoh_user_lang', lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: TRANSLATIONS[language] || TRANSLATIONS.de,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
