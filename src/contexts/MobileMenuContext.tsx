import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export type MenuContextType = {
  menuState: boolean;
  setMenuState: Function;
};

export const Context = createContext({} as MenuContextType);

export default function MenuContext({ children }: Props) {
  const [menuState, setMenuState] = useState(false);
  const menuStatePack = { menuState, setMenuState };

  return <Context.Provider value={menuStatePack}>{children}</Context.Provider>;
}
