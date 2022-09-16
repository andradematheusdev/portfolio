import { CircleNotch } from "phosphor-react";
import Button from "../Button/Button";
import FigmaLink from "../FigmaLink/FigmaLink";

type Props = {
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

export function ProjectCardLoading() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-800 rounded-xl overflow-hidden min-h-[450px] min-w-[325px] max-w-[325px]">
      <CircleNotch size={32} className="animate-spin" color="#fff" />
    </div>
  );
}

export function ProjectCard({ demo, description, name, stack, image, figma, repo }: Props) {
  return (
    <div className="flex flex-col w-full bg-zinc-800 rounded-xl overflow-hidden min-h-[450px] min-w-[325px] max-w-[325px]">
      <div className="flex w-full h-48 overflow-hidden relative">
        <img src={image.url} className="w-full object-cover object-center" />
        {figma && <FigmaLink url={figma} />}
      </div>
      <div className="flex w-full p-2 text-xl font-bold justify-center text-white py-4">
        <span>{name}</span>
      </div>
      <div className="flex flex-1 w-full px-6 justify-center items-center">
        <span className="text-justify text-white text-md">{description}</span>
      </div>
      <div className="flex w-full p-4 text-sm">
        <div className={`grid grid-rows-1 grid-cols-6 w-full pt-4 text-white`}>
            {stack.map((tech) => {
              return <img src={`/svgs/${tech}logo.svg`} className="w-8 h-8 mr-4" title={tech} key={tech.length + 1} />;
            })}
        </div>
      </div>
      <div className={`flex w-full px-4  text-sm space-x-2`}>
          {repo && (
          <div className="flex-1 mb-4">
              <Button
                text="REPO"
                className="bg-transparent border border-violet-500 text-white rounded px-8 hover:bg-violet-600 hover:border-violet-600 transition-colors"
                url={repo}
                blank
              />
          </div>          
            ) }
            {demo && (
              <div className="flex-1 mb-4">
              <Button
                text="DEMO"
                className="bg-violet-500 border border-violet-500 text-white rounded px-8 hover:bg-violet-600 hover:border-violet-600 transition-colors"
                url={demo}
                blank
              />
            </div>
            ) }
          </div>
    </div>
  );
}
