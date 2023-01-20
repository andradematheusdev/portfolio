import { CircleNotch } from "phosphor-react";

type Props = {
  tech: string;
};

export const SkillBlock = ({ tech }: Props) => {
  return (
    <div className="
      flex w-full items-center p-4 cursor-pointer overflow-hidden rounded-xl border border-neutral-700
    ">
      <img src={`/svgs/${tech}logo.svg`} className="w-16 mr-2" />
      <p className="flex flex-col">
        <span className="font-bold">HTML</span>
        <span className="text-violet-400">Marcação de Hypertexto</span>
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
