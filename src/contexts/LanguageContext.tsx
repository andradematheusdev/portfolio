import { createContext, useState } from "react";

type SuportedLangs = string;

interface ILanguageContextProps {
  children: React.ReactNode;
};

export type LangContextType = {
  lang: string;
  setLang: Function;
};

export const Context = createContext({} as LangContextType);

export const LangContextProvider = ({ children }: ILanguageContextProps) => {
  const startLang = localStorage.getItem("lang") ?? "pt_br";
  const [lang, setLang] = useState<SuportedLangs>(startLang);

  return <Context.Provider value={{lang, setLang}}>{children}</Context.Provider>;
}