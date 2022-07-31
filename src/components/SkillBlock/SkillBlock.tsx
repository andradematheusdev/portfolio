import { CircleNotch } from "phosphor-react";

type Props = {
  tech: string;
};

export function SkillBlock({ tech }: Props) {
  return (
    <div
      className={`flex w-20 h-20 justify-center items-center p-2 cursor-pointer overflow-hidden rounded-xl bg-nav-bg`}
    >
      <img src={`/svgs/${tech}logo.svg`} className="w-10/12 hover:w-11/12 transition-all" />
    </div>
  );
}

export function SkillBlockLoading() {
  return (
    <div className="flex w-24 h-24 justify-center items-center bg-nav-bg p-2 cursor-pointer overflow-hidden rounded-xl">
      <CircleNotch size={32} className="animate-spin" color="#fff" />
    </div>
  );
}
