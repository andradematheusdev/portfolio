import { useEffect, useState } from "react";

import Logo from "../Logo";

import {
  MobileMenuToggle,
  MobileMenu,
  LanguageSelector,
} from '../';

export const Header = () => {
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
              Início
            </a>
            <a href="#about" className="hover:text-violet-700 transition-colors">
              Sobre
            </a>
            <a href="#skills" className="hover:text-violet-700 transition-colors">
              Conhecimentos
            </a>
            <a href="#projects" className="hover:text-violet-700 transition-colors">
              Projetos
            </a>
            <a href="#contact" className="hover:text-violet-700 transition-colors">
              Contato
            </a>
        </nav> 
        <div className="w-64 text-right">
          <LanguageSelector />
        </div>
        
        <div className="flex lg:hidden">
          <MobileMenuToggle />
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
