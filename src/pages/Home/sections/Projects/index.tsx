import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import classNames from "classnames";
import {
  ProjectCardLoading,
  SectionTitle,
  ProjectsList,
  ViewMore
} from "@/components/";
import { Context } from "@/contexts/LanguageContext";
import { translation } from "@/lang/language";

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
  const context = useContext(Context);
    
  const GET_PROJECTS_QUERY = gql`
  query GetProjects {
    projects(first: 10, orderBy: order_DESC) {
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
    <section id="projects" className="projects-section px-4 lg:px-10">
      <SectionTitle title="projetos" className="text-lg my-16" />
      <div className="flex w-full justify-center">
        <ProjectCardLoading />
      </div>
    </section>
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
    <section id="projects" className="projects-section px-4 lg:px-10">
      <div className="flex w-full items-center px-8 md:px-16">
        <SectionTitle title={translation[context.lang].sectionsTitle.projects} className={classNames("text-lg my-16 flex-1",{"text-center": data.projects.length < 10})} />
        {
          data.projects.length >= 10 &&
          <div className="flex-1 flex justify-end">
            <ViewMore url={"/projects"} className="text-white hover:text-neutral-300 transition-colors" />
          </div>
        }
      </div>
      <ProjectsList data={data.projects} />
    </section>
  );
}
