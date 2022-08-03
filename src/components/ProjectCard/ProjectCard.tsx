import { CircleNotch } from "phosphor-react";
import Button from "../Button/Button";

type Props = {
  name: string;
  description: string;
  stack: string[];
  demo: string;
  image: {
    url: string;
  };
};

export function ProjectCardLoading() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-zinc-800 rounded-xl overflow-hidden">
      <CircleNotch size={32} className="animate-spin" color="#fff" />
    </div>
  );
}

export function ProjectCard({ demo, description, name, stack, image }: Props) {
  let footerBorder = "border-none";
  if (stack.length != 0 || demo) {
    footerBorder = "border-t border-zinc-700";
  }
  return (
    <div className="flex flex-col w-full bg-zinc-800 rounded-xl overflow-hidden">
      <div className="flex w-full h-48 overflow-hidden">
        <img src={image.url} className="w-full object-cover object-center" />
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
              return <img src={`/svgs/${tech}logo.svg`} className="w-8 h-8 mr-4" />;
            })}
          </div>
          <div className="flex flex-row items-center justify-center">
            {demo ? (
              <Button
                text="DEMO"
                className="bg-violet-500 text-white rounded px-8 hover:bg-violet-600 transition-colors"
                url={demo}
                blank
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
