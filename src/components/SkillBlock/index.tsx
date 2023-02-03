import { useContext } from "react";
import { Context } from "@/contexts/LanguageContext";
import { translation } from '@/lang/language';

interface ISkillBlockProps {
  tech: {
    name: string;
    level: number;
  };
};

export const SkillBlock = ({ tech }: ISkillBlockProps) => {
  const { lang } = useContext(Context);
  const knowledge = [
    translation[lang].skillsSection.one,
    translation[lang].skillsSection.two,
    translation[lang].skillsSection.three,
    translation[lang].skillsSection.four,
    translation[lang].skillsSection.five
  ];
  return (
    <div className="flex w-full items-center p-4 overflow-hidden rounded-xl border border-neutral-800">
      <img src={`/svgs/${tech.name.toLocaleLowerCase()}.svg`} className="w-16 mr-4" />
      <p className="flex flex-col text-left">
        <span className="font-bold uppercase">{tech.name}</span>
        <span className="text-neutral-400">{knowledge[tech.level - 1]}</span>
      </p>
    </div>
  );
}
