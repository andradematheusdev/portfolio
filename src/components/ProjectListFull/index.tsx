import { ProjectCard } from "../";

type Projects = {
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

type Props = {
  data: Projects[];
}

export const ProjectsListFull = ({data}: Props) => { 
  return (
    <div className="grid grid-cols-4 w-full gap-4">
      {data.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            demo={project.demo}
            description={project.description}
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