import { gql, useQuery } from "@apollo/client";
import { Footer, ProjectsListFull, SmallHeader, Loading } from "@/components/";

interface Projects {
  id: string;
  name: string;
  description: string;
  stack: string[];
  demo: string;
  image: {
    url: string;
  };
  figma: string;
  repo: string;
}

export const Projects = () => {

  const GET_PROJECTS_QUERY = gql`
  query GetProjects {
    projects(orderBy: order_DESC) {
      demo
      description
      id
      name
      stack
      image {
        url
      }
      figma
      repo
    }
  }
`;

const { data, loading } = useQuery<{ projects: Projects[] }>(GET_PROJECTS_QUERY);

if (loading) {
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <Loading />
    </div>
  );
}

if (!data || !data.projects) {
  return (
    <div className="flex w-full min-h-screen">
      <span>Ops... Não foi possivel carregar o conteúdo 😞</span>
    </div>
  );
}

  return (
    <>
      <SmallHeader />
      <main className="flex flex-col w-full items-center justify-center p-8">
        <ProjectsListFull data={data.projects} />
      </main>
      <Footer />
    </>
  )
}