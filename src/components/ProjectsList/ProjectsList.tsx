import { gql, useQuery } from "@apollo/client";
import { ProjectCard, ProjectCardLoading } from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";

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

export default function ProjectsList(){
  
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
    <div className="flex justify-center w-full gap-x-3 overflow-x-auto">
        {data.projects.map((project) => {
          return (
            <ProjectCard
              demo={project.demo}
              description={project.description}
              key={project.id}
              name={project.name}
              stack={project.stack}
              image={{ url: project.image.url }}
              figma={project.figma}
              repo={project.repo}
            />
          );
        })}
    </div>
  )
}