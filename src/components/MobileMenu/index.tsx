import { useContext } from "react";
import { Button, LanguageSelector } from "../";
import { translation } from "@/lang/language";
import { Context, MenuContextType } from "../../contexts/MobileMenuContext";
import { Context as LangContext} from "@/contexts/LanguageContext";
import {
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineCode,
  AiFillAppstore,
  AiOutlineMessage,
  AiOutlineGithub,
  AiOutlineLinkedin
} from 'react-icons/ai';
import Logo from "../Logo";

export const MobileMenu = () => {
  const context = useContext<MenuContextType>(Context);
  const { lang } = useContext(LangContext);

  function handleClick() {
    context.setMenuState(false);
  }

  const menuVisible = context.menuState ? "left-0" : "left-[-100%] hidden";

  return (
    <div className={`mobile-nav last:border-b last:border-zinc-700 bg-zinc-900 flex flex-col lg:hidden w-2/3 md:w-2/5 min-h-screen fixed transition-all z-50 ${menuVisible}`}>
      <div className="flex-1">
        <div className="flex w-full items-center justify-center py-4">
          <Logo />
        </div>
        <a href="#" className="link first" onClick={handleClick}><AiOutlineHome size={20} />{translation[lang].navigation.home}</a>
        <a href="#about" className="link" onClick={handleClick}><AiOutlineIdcard size={20} />{translation[lang].navigation.about}</a>
        <a href="#skills" className="link" onClick={handleClick}><AiOutlineCode size={20} />{translation[lang].navigation.skills}</a>
        <a href="#projects" className="link" onClick={handleClick}><AiFillAppstore size={20} />{translation[lang].navigation.projects}</a>
        <a href="#contact" className="link" onClick={handleClick}><AiOutlineMessage size={20} />{translation[lang].navigation.contact}</a>
        <div className="flex flex-row border-b border-zinc-700">
          <a
            href="https://www.linkedin.com/in/matheus-andrade-ba2b16226/"
            className="text-white flex flex-1 h-16 items-center justify-center px-6"
            target={"_blank"}
          >
            <span className=""><AiOutlineLinkedin size={32} /></span>
          </a>
          <a
            href="https://github.com/andradematheusdev"
            className="text-white flex flex-1 items-center justify-center px-6"
            target={"_blank"}
          >
            <span className=""><AiOutlineGithub size={32} /></span>
          </a>
        </div>
        <div className="link border-none px-4" onClick={handleClick}>
          <Button text="ENVIAR E-MAIL" className="border rounded-full w-full" url="mailto:andradematheus.dev@gmail.com" />
        </div>
      </div>
      <div className="flex items-center justify-center h-16">
          <LanguageSelector />
      </div>
    </div>
  );
}
