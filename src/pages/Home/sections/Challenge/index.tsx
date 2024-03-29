import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Challenge, Loading, SectionTitle, ViewMore } from "@/components/";
import { Context } from "@/contexts/LanguageContext";
import { translation } from "@/lang/language";

interface Challenges {
  id: string;
  title: string;
  description: string;
  url: string;
  image: {
    url: string;
  };
}

export const Challenges = () => {
  const { lang } = useContext(Context);

  const GET_CHALLENGES_QUERY = gql`
    query ChallengeQuery {
      challenges(first: 4, orderBy: createdAt_DESC) {
        id
        title
        url
        description
        image {
          url
        }
      }
    }
  `;

  const { data, loading } = useQuery<{ challenges: Challenges[] }>(GET_CHALLENGES_QUERY);

  if (loading) {
    return <Loading size={32} dots />;
  }

  if (!data || !data.challenges) {
    return (
      <section className="flex flex-col w-full items-center min-h-[400px] px-16">
        <SectionTitle title="Desafios Recentes" className="my-8" />
        <div className="flex flex-1 justify-center w-full">
          <span className="text-white">Ops... Não foi possivel carregar o conteúdo 😞</span>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-full items-center min-h-[400px] px-8 md:px-16 pb-16">
      <div className={"flex justify-center w-full my-8"}>
        <SectionTitle title={translation[lang].sectionsTitle.challenges} />
        {data.challenges.length >= 4 && (
          <div className="flex-1 flex justify-end">
            <ViewMore
              url={"/challenges"}
              className="text-white hover:text-neutral-300 transition-colors"
            />
          </div>
        )}
      </div>
      <div className="challenge-container grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 items-start grid-flow-col gap-8 min-h-[150px]">
        {data?.challenges.map((challenge) => {
          return (
            <Challenge
              key={challenge.id}
              title={challenge.title}
              desc={challenge.description}
              url={challenge.url}
              image={challenge.image}
            />
          );
        })}
      </div>
    </section>
  );
};
