import { CaretRight, CircleNotch } from "phosphor-react";
import { SkillLevel } from "../";

type Props = {
  title: string;
  desc: string;
  level: number;
};

export const SkillDescription = ({ title, desc, level }: Props) => {
  if (!desc) {
    return (
      <div className="flex flex-col w-full bg-nav-bg rounded-lg p-8 min-h-[350px]">
        <span className="text-white flex flex-1 items-center justify-center text-center">
          Passe o mouse ou clique para ver a descrição{" "}
          <CaretRight size={24} className="hidden lg:inline" />
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full bg-nav-bg rounded-lg px-8 pt-8 min-h-[350px]">
        <h2 className="text-violet-300 text-3xl font-bold mb-8">{title}</h2>
        <p className="text-white leading-relaxed text-justify flex-1">{desc}</p>
        <p className="flex w-full border-t border-zinc-600 mt-4 py-4 items-center">
          <span className="flex flex-1 text-zinc-400 text-xs uppercase">Conhecimento:</span>
          <span className="flex flex-row flex-1 text-zinc-400 text-xs uppercase">
            <SkillLevel level={level} />
          </span>
        </p>
      </div>
    );
  }
}

export const SkillDescriptionLoading = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-nav-bg rounded-lg p-8 min-h-[350px]">
      <CircleNotch size={32} className="animate-spin" color="#fff" />
    </div>
  );
}