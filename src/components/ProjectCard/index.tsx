import { FaCircleNotch, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Button, FigmaLink } from "../";

interface IProjectCardProps {
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

export const ProjectCardLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-800 rounded-xl overflow-hidden min-h-[450px] min-w-[325px] max-w-[325px]">
      <FaCircleNotch size={32} className="animate-spin" color="#fff" />
    </div>
  );
}

export function ProjectCard({ demo, description, name, stack, image, figma, repo }: IProjectCardProps) {
  return (
    <div className="flex flex-col w-full bg-zinc-800 rounded-xl overflow-hidden min-h-[450px] min-w-[325px] max-w-[325px] snap-center">
      <div className="flex w-full h-48 overflow-hidden relative">
        <img src={image.url} className="w-full object-cover object-center" />
        {figma && <FigmaLink url={figma} />}
      </div>
      <div className="flex w-full p-2 text-xl font-bold justify-center text-white py-4">
        <span className="w-full text-center">{name}</span>
      </div>
      <div className="flex flex-1 w-full px-6 justify-center items-center">
        <span className="text-justify text-white text-md">{description}</span>
      </div>
      <div className="flex w-full p-4 text-sm">
        <div className={`grid grid-rows-1 grid-cols-6 w-full pt-4 text-white`}>
            {stack.map((tech) => {
              return <img src={`/svgs/${tech}.svg`} className="w-8 h-8 mr-4" title={tech} key={tech.length + 1} />;
            })}
        </div>
      </div>
      <div className={`flex w-full px-4  text-sm space-x-2`}>
          {repo && (
          <div className="flex-1 mb-4">
              <Button
                text="CÓDIGO"
                iconRight={<FaGithub />}
                className="border-2 border-violet-500 bg-violet-500 hover:bg-violet-600 hover:border-violet-600"
                url={repo}
                blank
              />
          </div>          
            ) }
            {demo && (
              <div className="flex-1 mb-4">
              <Button
                text="ABRIR"
                iconRight={<FaExternalLinkAlt />}
                className="bg-none border-2 border-violet-500 hover:bg-violet-600 hover:border-violet-600 hover:text-white"
                url={demo}
                blank
              />
            </div>
            ) }
          </div>
    </div>
  );
}
