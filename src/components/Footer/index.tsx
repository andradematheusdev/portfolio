import { useContext } from "react";
import { Context } from "@/contexts/LanguageContext";
import { translation } from "@/lang/language";
import Logo from "../Logo";
import { Coffee } from "phosphor-react";

export const Footer = () => {
  const { lang } = useContext(Context);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full bg-zinc-800 px-8 border-t border-zinc-600">
      <div className="flex flex-col md:flex-row w-full py-8">
        <span className="flex flex-1 justify-center md:justify-start mb-6 md:mb-0">
          <Logo className={"fill-violet-500"} url="#" />
        </span>
        <span className="flex flex-1 justify-center md:justify-end text-white">
          {currentYear} - {translation[lang].footer.madeWith} <Coffee className="mx-2" size={24} /> {translation[lang].footer.byMe}
        </span>
      </div>
    </footer>
  );
}
