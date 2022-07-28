type Props = {
  tech: string;
};

export default function SkillBlock({ tech }: Props) {
  return (
    <div className="flex w-24 h-24 justify-center items-center bg-nav-bg p-2 cursor-pointer overflow-hidden rounded-xl">
      <img src={`/svgs/${tech}logo.svg`} className="w-10/12 hover:w-11/12 transition-all" />
    </div>
  );
}
