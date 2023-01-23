import { createContext, useState } from "react";

interface IMeunuContextProps {
  children: React.ReactNode;
};

export type MenuContextType = {
  menuState: boolean;
  setMenuState: Function;
};

export const Context = createContext({} as MenuContextType);

export const MenuContextProvider = ({ children }: IMeunuContextProps) => {
  const [menuState, setMenuState] = useState(false);

  return <Context.Provider value={{menuState, setMenuState}}>{children}</Context.Provider>;
}