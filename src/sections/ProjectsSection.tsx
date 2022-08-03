import { gql, useQuery } from "@apollo/client";
import { ProjectCard, ProjectCardLoading } from "../components/ProjectCard/ProjectCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";

interface Projects {
  id: string;
  name: string;
  description: string;
  stack: string[];
  demo: string;
  image: {
    url: string;
  };
}

export default function ProjectsSection() {
  const GET_PROJECTS_QUERY = gql`
    query GetProjects {
      projects(first: 50, orderBy: order_ASC) {
        demo
        description
        id
        name
        stack
        image {
          url
        }
      }
    }
  `;

  const { data, loading } = useQuery<{ projects: Projects[] }>(GET_PROJECTS_QUERY);

  if (loading) {
    return (
      <section id="projects" className="projects-section px-4 lg:px-10">
        <SectionTitle title="projetos" className="text-lg my-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full min-h-[350px]">
          <ProjectCardLoading />
          <ProjectCardLoading />
          <ProjectCardLoading />
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
      <SectionTitle title="projetos" className="text-lg my-16" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.projects.map((project) => {
          return (
            <ProjectCard
              demo={project.demo}
              description={project.description}
              key={project.id}
              name={project.name}
              stack={project.stack}
              image={{ url: project.image.url }}
            />
          );
        })}
      </div>
    </section>
  );
}
