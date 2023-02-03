import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { Context, MenuContextType } from "../../contexts/MobileMenuContext";

export const MobileMenuToggle = () => {
  const context = useContext<MenuContextType>(Context);

  function handleToggle() {
    context.setMenuState(!context.menuState);
  }

  return (
    <a className="flex min-w-[46] min-h-46" onClick={handleToggle}>
      {context.menuState ? <CgClose size={30} color={"#fff"} /> : <RxHamburgerMenu size={30} color={"#fff"} />}
    </a>
  );
}
