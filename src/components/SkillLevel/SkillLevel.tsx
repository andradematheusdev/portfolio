import { Star } from "phosphor-react";

type Props = {
  level: number;
};

export default function SkillLevel({ level }: Props) {
  const rating = [];

  for (let i = 0; i < level; i++) {
    rating.push(<Star size={22} weight="fill" color="#fff" />);
  }

  if (rating.length < 5) {
    while (rating.length < 5) {
      rating.push(<Star size={22} />);
    }
  }

  return <div className="flex flex-row w-full justify-end">{rating}</div>;
}
