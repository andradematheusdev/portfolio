import { gql, useQuery } from "@apollo/client";
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

  const datac = {
    title: "CodeLândia01",
    url: "#",
    desc: "Desafio 01 - Construir o front-end de um blog responsivo. Aproveitei a oportunidade para deixar o blog funcional e praticar requisições ao CMS com GraphQL.",
  };
  return (
    <section className="flex flex-col w-full items-center min-h-[400px] px-16">
      <SectionTitle title="Desafios Recentes" className="my-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 min-h-[250px]">
        {data?.challenges.map((challenge) => {
          return (
            <Challenge
              key={challenge.id}
              title={challenge.title}
              desc={challenge.description}
              url={challenge.url}
            />
          );
        })}
      </div>
    </section>
  );
}
