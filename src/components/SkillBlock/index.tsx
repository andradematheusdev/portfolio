import { CircleNotch } from "phosphor-react";

type Props = {
  tech: string;
};

export const SkillBlock = ({ tech }: Props) => {
  return (
    <div
      className={`flex w-20 h-20 justify-center items-center p-2 cursor-pointer overflow-hidden rounded-xl bg-nav-bg`}
    >
      <img src={`/svgs/${tech}logo.svg`} className="w-10/12 hover:w-11/12 transition-all" />
    </div>
  );
}

export const SkillBlockLoading = () => {
  return (
    <div className="flex w-20 h-20 justify-center items-center p-2 cursor-pointer overflow-hidden rounded-xl bg-nav-bg">
      <CircleNotch size={32} className="animate-spin" color="#fff" />
    </div>
  );
}