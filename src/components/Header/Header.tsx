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

  const scrollClasses = scroll ? "bg-nav-bg h-16 md:h-12 backdrop-blur-md" : "bg-none h-20";

  return (
    <>
      <header className={`my-header ${scrollClasses}`}>
        <div>
          <a href="#home">
            <Logo className="fill-white" />
          </a>
        </div>
        <div className="hidden md:flex h-full items-center justify-center">
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
              <span className="bg-header-icon-bg p-2 border border-white rounded-full hover:border-violet-700 transition-colors hover:bg-header-icon-bg-hover">
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
              <span className="bg-header-icon-bg p-2 border border-white rounded-full hover:border-violet-700 transition-colors hover:bg-header-icon-bg-hover">
                <DiscordLogo />
              </span>
            </a>
          </div>
          <div>
            <Button
              text="ENVIAR E-MAIL"
              className="text-white border border-white hover:border-violet-700 transition-colors hover:bg-header-icon-bg-hover leading-none"
            />
          </div>
        </div>
        <div className="flex md:hidden">
          <MobileMenuToggle />
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
