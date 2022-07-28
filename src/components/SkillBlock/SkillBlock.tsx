type Props = {
  tech: string;
};

export default function SkillBlock({ tech }: Props) {
  return (
    <div className="flex w-24 h-24 justify-center items-center bg-nav-bg p-2 border border-violet-700 backdrop-blur-lg cursor-pointer">
      <img src={`/svgs/${tech}logo.svg`} className="w-10/12 hover:w-11/12 transition-all" />
    </div>
  );
}
