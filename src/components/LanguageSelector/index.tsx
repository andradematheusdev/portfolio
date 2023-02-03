import classNames from "classnames";
import { useContext } from "react"
import { Context, LangContextType } from "../../contexts/LanguageContext"

export const LanguageSelector = () => {
  const {lang, setLang} = useContext<LangContextType>(Context);

  function handleClick(lang: string){
    localStorage.setItem("lang",lang);
    setLang(lang);
  }
  
  return (
    <div className="flex justify-end gap-x-4">
      <button
        className={classNames({"bg-white text-black": lang == "pt_br"},"rounded-md leading-none w-6 h-6 text-xs font-bold")}
        onClick={() => handleClick("pt_br")}
      >
        PT
      </button>
      <button
        className={classNames({"bg-white text-black": lang == "en"},"rounded-md leading-none w-6 h-6 text-xs font-bold")}
        onClick={() => handleClick("en")}
      >
        EN
      </button>
    </div>
  )
}
