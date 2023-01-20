import { createContext, useState } from "react";

interface IMeunuContextProps {
  children: React.ReactNode;
};

type MenuContext = {
  menuState: boolean;
  setMenuState: Function;
};

export const Context = createContext({} as MenuContext);

export default function MenuContext({ children }: IMeunuContextProps) {
  const [menuState, setMenuState] = useState(false);
  const menuStatePack = { menuState, setMenuState };

  return <Context.Provider value={menuStatePack}>{children}</Context.Provider>;
}
