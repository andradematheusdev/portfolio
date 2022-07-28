import { useEffect, useState } from "react";

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
    <div className="flex flex-col w-full sm:max-w-[350px] bg-zinc-800 rounded-xl overflow-hidden backdrop-blur-md">
      <div className="flex w-full h-64 overflow-hidden">
        <img src={dog} className="w-full object-cover object-center" />
      </div>
      <div className="flex w-full p-2 text-xl font-bold justify-center text-white py-6">
        <span>Blog</span>
      </div>
      <div className="flex w-full px-6 text-lg">
        <span className="text-justify text-white">
          Desafio 01 da Codelândia onde a proposta era construir o front-end de um blog responsivo,
          aproveitei a oportunidade para deixar o blog funcional e por em pratica meus conhecimentos
          com GraphQL e GraphCMS.
        </span>
      </div>
      <div className="flex w-full p-4 text-sm">
        <span className="border-t border-zinc-700 w-full pt-4 text-white">Footer</span>
      </div>
    </div>
  );
}
