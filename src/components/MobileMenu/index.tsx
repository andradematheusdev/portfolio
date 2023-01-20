import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { useContext } from "react";
import { Context, MenuContextType } from "../../contexts/MobileMenuContext";
import { Button } from "../";

export const MobileMenu = () => {
  const context = useContext<MenuContextType>(Context);

  function handleClick() {
    context.setMenuState(false);
  }

  const menuVisible = context.menuState ? "left-0" : "left-[-100%] hidden";

  return (
    <div className={`mobile-nav z-50 ${menuVisible}`}>
      <a href="#" className="link first" onClick={handleClick}>
        INÍCIO
      </a>
      <a href="#about" className="link" onClick={handleClick}>
        SOBRE
      </a>
      <a href="#skills" className="link" onClick={handleClick}>
        CONHECIMENTOS
      </a>
      <a href="#projects" className="link" onClick={handleClick}>
        PROJETOS
      </a>
      <a href="#contact" className="link last" onClick={handleClick}>
        CONTATO
      </a>
      <div className="flex flex-row border-b border-zinc-700">
        <a
          href="https://www.linkedin.com/in/matheus-andrade-ba2b16226/"
          className="text-white flex flex-1 h-16 items-center justify-center px-6"
          target={"_blank"}
        >
          <span className="">
            <LinkedinLogo size={32} />
          </span>
        </a>

        <a
          href="https://github.com/andradematheusdev"
          className="text-white flex flex-1 items-center justify-center px-6"
          target={"_blank"}
        >
          <span className="">
            <GithubLogo size={32} />
          </span>
        </a>
      </div>
      <div className="link border-none px-4" onClick={handleClick}>
        <Button text="ENVIAR E-MAIL" className="border rounded-full w-full" />
      </div>
    </div>
  );
}
