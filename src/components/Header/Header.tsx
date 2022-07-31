import Logo from "../Logo";

import { DiscordLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import MobileMenuToggle from "../MobileMenuToggle/MobileMenuToggle";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
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
        <div>
          <a href="#home">
            <Logo className="fill-white" />
          </a>
        </div>
        <div className="hidden lg:flex h-full items-center justify-center">
          <div>
            <a href="#home" className="hover:text-violet-700">
              INÍCIO
            </a>
          </div>
          <div>
            <a href="#about" className="hover:text-violet-700">
              SOBRE
            </a>
          </div>
          <div>
            <a href="#skills" className="hover:text-violet-700">
              CONHECIMENTOS
            </a>
          </div>
          <div>
            <a href="#projects" className="hover:text-violet-700">
              PROJETOS
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/matheus-andrade-ba2b16226/"
              className="text-white flex flex-1 items-center justify-center px-6"
              target={"_blank"}
            >
              <span className="header-icon">
                <LinkedinLogo />
              </span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Heloriel"
              className="text-white flex flex-1 items-center justify-center px-6"
              target={"_blank"}
            >
              <span className="header-icon">
                <GithubLogo />
              </span>
            </a>
          </div>
          <div>
            <a
              href="https://discord.gg/BYZ8pET"
              className="text-white flex flex-1 items-center justify-center px-6"
              target={"_blank"}
            >
              <span className="header-icon">
                <DiscordLogo />
              </span>
            </a>
          </div>
          <div>
            <Button
              text="ENVIAR E-MAIL"
              className="text-white border border-white hover:border-violet-700 transition-colors ml-2 hover:bg-header-icon-bg-hover leading-none"
              url="mailto:andradematheus.dev@gmail.com"
            />
          </div>
        </div>
        <div className="flex lg:hidden">
          <MobileMenuToggle />
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
