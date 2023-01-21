import { CircleNotch } from "phosphor-react";

type Props = {
  tech: {
    name: string;
    level: number;
  };
};

export const SkillBlock = ({ tech }: Props) => {
  const knowledge = ["Iniciante", "Básico", "Razoável", "Bom", "Proficiente"];
  return (
    <div className="flex w-full items-center p-4 cursor-pointer overflow-hidden rounded-xl border border-neutral-800">
      <img src={`/svgs/${tech.name.toLocaleLowerCase()}.svg`} className="w-16 mr-4" />
      <p className="flex flex-col text-left">
        <span className="font-bold uppercase">{tech.name}</span>
        <span className="text-neutral-400">{knowledge[tech.level - 1]}</span>
      </p>
    </div>
  );
}

export const SkillBlockLoading = () => {
  return (
    <div className="flex w-full h-20 justify-center items-center p-2 cursor-pointer overflow-hidden rounded-xl bg-nav-bg">
      <CircleNotch size={32} className="animate-spin" color="#fff" />
    </div>
  );
}
