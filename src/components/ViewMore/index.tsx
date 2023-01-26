import { useContext } from "react";
import { Context } from "@/contexts/LanguageContext";
import { translation } from "@/lang/language";
import { CaretRight } from "phosphor-react";

type Props = {
  url: string;
  blank?: boolean;
  className?: string;
};

export const ViewMore = ({ url, blank = false, className }: Props) => {
  const context = useContext(Context);
  return (
    <a
      href={url}
      target={blank ? "_blank" : "_self"}
      className={`flex flex-row items-center whitespace-nowrap ${className}`}
    >
      {translation[context.lang].components.viewMore} <CaretRight />
    </a>
  );
};
