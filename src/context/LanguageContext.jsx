"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ initialLang = "en", children }) {
  const [language, setLanguage] = useState(() => initialLang || "en");
  const lastInitialRef = useRef(initialLang);

  useEffect(() => {
    if (initialLang && initialLang !== lastInitialRef.current) {
      lastInitialRef.current = initialLang;
      setLanguage(initialLang);
    }
  }, [initialLang]);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
