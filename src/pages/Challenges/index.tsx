import { gql, useQuery } from "@apollo/client";
import { ProjectCardLoading, Footer, SmallHeader, ChallengesListFull  } from "../../components/";

interface Challenge {
  id: string;
  title: string;
  description: string;
  url: string;
  image: {
    url: string;
  }
}

export const Challenges = () => {

  const GET_CHALLENGES_QUERY = gql`
    query ChallengeQuery {
      challenges(orderBy: publishedAt_DESC) {
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

const { data, loading } = useQuery<{ challenges: Challenge[] }>(GET_CHALLENGES_QUERY);

if (loading) {
  return (
    <section id="projects" className="projects-section px-4 lg:px-10">
      <div className="flex w-full justify-center">
        <ProjectCardLoading />
      </div>
    </section>
  );
}

if (!data || !data.challenges) {
  return (
    <div className="flex w-full min-h-screen">
      <span>Ops... Não foi possivel carregar o conteúdo 😞</span>
    </div>
  );
}

  return (
    <>
      <SmallHeader />
      <main className="flex flex-col w-full items-center justify-start p-8 min-h-screen">
        <ChallengesListFull data={data.challenges} />
      </main>
      <Footer />
    </>
  )
}