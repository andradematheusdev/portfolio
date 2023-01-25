import { useEffect, useState, useContext } from "react";

import { Context } from "../../contexts/LanguageContext";
import { translation } from "../../lang/language";

import Logo from "../Logo";

import {
  MobileMenuToggle,
  MobileMenu,
  LanguageSelector,
} from '../';

export const Header = () => {
  const context = useContext(Context);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const scrollClasses = scroll ? "bg-nav-bg h-12 backdrop-blur-md" : "bg-none h-20";

  return (
    <>
      <header className={`my-header z-40 ${scrollClasses}`}>
        <div className="w-64">
          <Logo className="fill-white" />
        </div>
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-x-4 font-medium">
            <a href="#home" className="hover:text-violet-700 transition-colors">
              {translation[context.lang].navigation.home}
            </a>
            <a href="#about" className="hover:text-violet-700 transition-colors">
              {translation[context.lang].navigation.about}
            </a>
            <a href="#skills" className="hover:text-violet-700 transition-colors">
              {translation[context.lang].navigation.knowledge}
            </a>
            <a href="#projects" className="hover:text-violet-700 transition-colors">
              {translation[context.lang].navigation.projects}
            </a>
            <a href="#contact" className="hover:text-violet-700 transition-colors">
              {translation[context.lang].navigation.contact}
            </a>
        </nav> 
        <div className="w-64 text-right hidden lg:block">
          <LanguageSelector />
        </div>
        
        <div className="ml-4 flex lg:hidden">
          <MobileMenuToggle />
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
