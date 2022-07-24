import Logo from "../Logo";

import { DiscordLogo, LinkedinLogo, GithubLogo } from "phosphor-react";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const scrollClasses = scroll ? "bg-header-scroll-bg h-12" : "bg-none h-20";

  return (
    <header
      className={`flex items-center justify-between px-16 fixed top-0  w-full ${scrollClasses} transition-all`}
    >
      <div className="">
        <a href="#home">
          <Logo />
        </a>
      </div>
      <div className="flex h-full items-center justify-center">
        <div>
          <a href="#home" className="text-white flex flex-1 items-center justify-center px-6">
            INÍCIO
          </a>
        </div>
        <div>
          <a href="#about" className="text-white flex flex-1 items-center justify-center px-6">
            SOBRE
          </a>
        </div>
        <div>
          <a href="#" className="text-white flex flex-1 items-center justify-center px-6">
            CONHECIMENTOS
          </a>
        </div>
        <div>
          <a href="#" className="text-white flex flex-1 items-center justify-center px-6">
            PROJETOS
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/matheus-andrade-ba2b16226/"
            className="text-white flex flex-1 items-center justify-center px-6"
            target={"_blank"}
          >
            <span className="bg-header-icon-bg p-2 border border-white rounded-full">
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
            <span className="bg-header-icon-bg p-2 border border-white rounded-full">
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
            <span className="bg-header-icon-bg p-2 border border-white rounded-full">
              <DiscordLogo />
            </span>
          </a>
        </div>
        <div>
          <Button
            text="ENVIAR E-MAIL"
            className="text-white border border-white hover:bg-header-icon-bg leading-none"
          />
        </div>
      </div>
    </header>
  );
}
