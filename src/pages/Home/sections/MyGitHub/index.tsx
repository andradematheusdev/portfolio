import { Button } from "@/components"
import { FaRegFolder } from "react-icons/fa";
import { translation } from "@/lang/language";
import { useContext } from "react";
import { Context, LangContextType } from "@/contexts/LanguageContext";

export const MyGitHub = () => {
  const { lang } = useContext<LangContextType>(Context);

  return (
    <section className="bg-zinc-800 flex flex-col w-full py-16 align-middle items-center gap-y-6 px-8">
          <div className="text-center">
            <h2 className="text-3xl py-2">{translation[lang].mygithub.liked}</h2>
            <p className="text-neutral-400">{translation[lang].mygithub.seemore}</p>
          </div>
          <Button
              text="GitHub"
              iconRight={<FaRegFolder />}
              className="bg-none border-2 border-violet-500 hover:bg-violet-600 hover:border-violet-600 hover:text-white w-full md:w-5/12 lg:w-2/12"
              url="https://github.com/andradematheusdev?tab=repositories"
              blank
            />
    </section>
  )
}