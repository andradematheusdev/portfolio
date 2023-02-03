import { useContext } from "react";
import { Context } from "@/contexts/LanguageContext";
import { translation } from "@/lang/language";
import { RxCaretRight } from "react-icons/rx";

interface IViewMoreProps {
  url: string;
  blank?: boolean;
  className?: string;
};

export const ViewMore = ({ url, blank = false, className }: IViewMoreProps) => {
  const { lang } = useContext(Context);
  return (
    <a
      href={url}
      target={blank ? "_blank" : "_self"}
      className={`flex flex-row items-center whitespace-nowrap ${className}`}
    >
      {translation[lang].components.viewMore} <RxCaretRight />
    </a>
  );
};
