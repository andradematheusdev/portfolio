import { Star } from "phosphor-react";

type Props = {
  level: number;
};

export default function SkillLevel({ level }: Props) {
  const rating = [];
  const knowledge = ["APRENDENDO", "BÁSICO", "ACEITÁVEL", "BOM ENTENDIMENTO", "SÓLIDO"];

  for (let i = 0; i < level; i++) {
    rating.push(<Star size={22} weight="fill" color="#fff" />);
  }

  while (rating.length < 5) {
    rating.push(<Star size={22} />);
  }

  return (
    <div className="flex flex-row w-full items-center justify-end">
      <span className="hidden sm:flex whitespace-nowrap bg-zinc-500 text-white rounded p-1 mr-2">
        {knowledge[level - 1]}
      </span>
      <span className="flex flex-row justify-end">{rating}</span>
    </div>
  );
}
