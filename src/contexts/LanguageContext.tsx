import { createContext, useState } from "react";

interface ILanguageContextProps {
  children: React.ReactNode;
};

export type LangContextType = {
  lang: string;
  setLang: Function;
};

export const Context = createContext({} as LangContextType);

export const LangContextProvider = ({ children }: ILanguageContextProps) => {
  const [lang, setLang] = useState("pt_br");

  return <Context.Provider value={{lang, setLang}}>{children}</Context.Provider>;
}