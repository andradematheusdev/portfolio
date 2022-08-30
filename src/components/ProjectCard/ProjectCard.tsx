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
};

export function ProjectCardLoading() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-800 rounded-xl overflow-hidden min-h-[450px] min-w-[325px] max-w-[325px]">
      <CircleNotch size={32} className="animate-spin" color="#fff" />
    </div>
  );
}

export function ProjectCard({ demo, description, name, stack, image, figma }: Props) {
  let footerBorder = "border-none";
  if (stack.length != 0 || demo) {
    footerBorder = "border-t border-zinc-700";
  }
  return (
    <div className="flex flex-col w-full bg-zinc-800 rounded-xl overflow-hidden min-h-[450px] min-w-[270px] max-w-[325px]">
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
        <div className={`flex flex-row ${footerBorder} w-full pt-4 text-white`}>
          <div className="flex flex-row flex-1 items-center">
            {stack.map((tech) => {
              return <img src={`/svgs/${tech}logo.svg`} className="w-8 h-8 mr-4" title={tech} />;
            })}
          </div>
          <div className="flex flex-row items-center justify-center">
            {demo && (
              <Button
                text="DEMO"
                className="bg-violet-500 text-white rounded px-8 hover:bg-violet-600 transition-colors"
                url={demo}
                blank
              />
            ) }
          </div>
        </div>
      </div>
    </div>
  );
}
