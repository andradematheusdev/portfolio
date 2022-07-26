import { useContext } from "react";
import { Context, MenuContextType } from "../../contexts/MobileMenuContext";

export default function MobileMenu() {
  const context = useContext<MenuContextType>(Context);

  function handleClick() {
    context.setMenuState(false);
  }

  const menuVisible = context.menuState ? "left-0" : "left-[-300px]";

  return (
    <div className={`mobile-nav ${menuVisible}`}>
      <a href="#" onClick={handleClick}>
        INÍCIO
      </a>
      <a href="#about" onClick={handleClick}>
        SOBRE
      </a>
      <a href="#skills" onClick={handleClick}>
        CONHECIMENTOS
      </a>
      <a href="#projects" onClick={handleClick}>
        PROJETOS
      </a>
      <a
        href="https://www.linkedin.com/in/matheus-andrade-ba2b16226/"
        target={"_blank"}
        onClick={handleClick}
      >
        LINKEDIN
      </a>
      <a href="https://github.com/Heloriel" target={"_blank"} onClick={handleClick}>
        GITHUB
      </a>
      <a href="https://discord.gg/BYZ8pET" target={"_blank"} onClick={handleClick}>
        DISCORD
      </a>
      <a href="" className="last" onClick={handleClick}>
        ENVIAR E-MAIL
      </a>
    </div>
  );
}
