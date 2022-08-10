import { gql, useQuery } from "@apollo/client";
import { CircleNotch } from "phosphor-react";
import Challenge from "../components/Challenges/Challenge";
import SectionTitle from "../components/SectionTitle/SectionTitle";

interface Challenges {
  id: string;
  title: string;
  description: string;
  url: string;
}

export default function ChalengeSection() {
  const GET_CHALLENGES_QUERY = gql`
    query ChallengeQuery {
      challenges(first: 4, orderBy: publishedAt_ASC) {
        id
        title
        url
        description
      }
    }
  `;

  const { data, loading } = useQuery<{ challenges: Challenges[] }>(GET_CHALLENGES_QUERY);

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
    <section className="flex flex-col w-full items-center min-h-[400px] px-16 pb-16">
      <SectionTitle title="Desafios Recentes" className="my-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 min-h-[250px]">
        {loading ? (
          <>
            <CircleNotch className="animate-spin" size={32} color="#fff" />
            <CircleNotch className="animate-spin" size={32} color="#fff" />
            <CircleNotch className="animate-spin" size={32} color="#fff" />
            <CircleNotch className="animate-spin" size={32} color="#fff" />
          </>
        ) : (
          data?.challenges.map((challenge) => {
            return (
              <Challenge
                key={challenge.id}
                title={challenge.title}
                desc={challenge.description}
                url={challenge.url}
              />
            );
          })
        )}
      </div>
    </section>
  );
}
