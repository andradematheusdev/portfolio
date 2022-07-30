import { useEffect, useState } from "react";
import Button from "../Button/Button";

interface IDogApi {
  message: string;
}

export default function ProjectCard() {
  const [dog, setDog] = useState("");

  function fetchDog<T>(url: string) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  useEffect(() => {
    fetchDog<{ message: string }>("https://dog.ceo/api/breeds/image/random")
      .then(({ message }) => {
        setDog(message);
      })
      .catch((error) => {
        return "";
      });
  }, []);

  return (
    <div className="flex flex-col w-full bg-zinc-800 rounded-xl overflow-hidden backdrop-blur-md">
      <div className="flex w-full h-64 overflow-hidden">
        <img src={dog} className="w-full object-cover object-center" />
      </div>
      <div className="flex w-full p-2 text-xl font-bold justify-center text-white py-4">
        <span>Blog</span>
      </div>
      <div className="flex w-full px-6">
        <span className="text-justify text-white text-md">
          Desafio 01 da Codelândia onde a proposta era construir o front-end de um blog responsivo,
          aproveitei a oportunidade para deixar o blog funcional e por em pratica meus conhecimentos
          com GraphQL e GraphCMS.
        </span>
      </div>
      <div className="flex w-full p-4 text-sm">
        <div className="flex flex-row border-t border-zinc-700 w-full pt-4 text-white">
          <div className="flex flex-row flex-1 items-center">
            <img src="/svgs/reactlogo.svg" className="w-8 h-8 mr-4" />
            <img src="/svgs/tailwindlogo.svg" className="w-8 h-8 mr-4" />
            <img src="/svgs/graphqllogo.svg" className="w-8 h-8 mr-4" />
          </div>
          <div className="flex flex-row items-center justify-center">
            <Button text="DEMO" className="bg-violet-500 text-white rounded px-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
