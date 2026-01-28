import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DICT, getInitialLang } from "./i18n";

const LangCtx = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang());

  useEffect(() => {
    localStorage.setItem("ta_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => DICT[lang] || DICT.en, [lang]);

  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>
  );
}

export function useLang() {
  const v = useContext(LangCtx);
  if (!v) throw new Error("useLang must be used inside LanguageProvider");
  return v;
}
