import { Coffee } from "phosphor-react";
import Logo from "../Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center flex-row w-full h-16 bg-zinc-900 px-16">
      <div className="flex-1">
        <span>
          <Logo className={"fill-violet-500"} />
        </span>
      </div>
      <div className="flex flex-1">
        <span className="flex items-center justify-end w-full text-white">
          {currentYear} - Feito com <Coffee className="mx-2" size={24} /> por mim.
        </span>
      </div>
    </footer>
  );
}
