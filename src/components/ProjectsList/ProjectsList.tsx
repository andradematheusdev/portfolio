import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ArrowRight } from "../ProjectsNavigation/ArrowRight";
import { ArrowLeft } from "../ProjectsNavigation/ArrowLeft";
import classNames from "classnames";
import { useEffect, useState } from "react";

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

export default function ProjectsList({data}: Props){
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(()=>{
    const el = document.getElementById("plContainer");
    const isOverflowing = el!.scrollWidth > el!.clientWidth;
    setIsOverflowing(isOverflowing);
  },[]);

  return (
    <div className="flex w-full relative items-center">
    <ArrowLeft />
    <div className={classNames(`flex w-full gap-x-4 overflow-x-scroll pb-8 px-4`, {"justify-center": !isOverflowing})} id="plContainer" >
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
    <ArrowRight />
    </div>
  )
}