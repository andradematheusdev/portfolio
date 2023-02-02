import { Challenge } from "../";

type Challenge = {
  id: string;
  title: string;
  url: string;
  description: string;
  image: {
    url: string;
  } 
};

interface IChallengeListFullProps {
  data: Challenge[];
}

export const ChallengesListFull = ({data}: IChallengeListFullProps) => {
  const defaultImage = '/images/skillsbg.jpg';

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-4 challenge-container">
      {data.map((challenge) => {
        return (
          <Challenge
            key={challenge.id}
            title={challenge.title}
            desc={challenge.description}
            url={challenge.url}
            image={{ url: challenge.image == null ? defaultImage : challenge.image.url }}
          />
          );
        })}
    </div>
  )
}
