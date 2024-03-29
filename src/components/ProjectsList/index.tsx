import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { ProjectCard, ArrowRight, ArrowLeft } from "../";

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
};

interface IProjectListProps {
  data: Projects[];
}

export const ProjectsList = ({ data }: IProjectListProps) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const defaultImage = "/images/skillsbg.jpg";

  useEffect(() => {
    const el = document.getElementById("plContainer");
    const isOverflowing = el!.scrollWidth > el!.clientWidth;
    setIsOverflowing(isOverflowing);
  }, []);

  const listRef = useRef(null);

  return (
    <div className="flex w-full relative items-center">
      {isOverflowing && <ArrowLeft listRef={listRef} />}
      <div
        className={classNames(
          `flex w-full gap-x-4 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory`,
          { "justify-center": !isOverflowing }
        )}
        id="plContainer"
        ref={listRef}
      >
        {data.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              demo={project.demo}
              description={project.description}
              name={project.name}
              stack={project.stack}
              image={{ url: project.image == null ? defaultImage : project.image.url }}
              figma={project.figma}
              repo={project.repo}
            />
          );
        })}
      </div>
      {isOverflowing && <ArrowRight listRef={listRef} />}
    </div>
  );
};
