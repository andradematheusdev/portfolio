import SectionTitle from "../components/SectionTitle/SectionTitle";
import ReactTypingEffect from "react-typing-effect";
import { CaretRight } from "phosphor-react";

export default function AboutMe() {
  return (
    <section id="about" className="flex flex-col w-full  bg-zinc-900 pb-28 min-h-screen">
      <SectionTitle title="SOBRE MIM" />
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-row flex-wrap w-full justify-start">
          <div className="flex w-full md:w-1/3 items-center justify-center mb-16 md:mb-0">
            <img
              src="https://github.com/Heloriel.png"
              className="rounded-full w-80 h-80 border-4 border-violet-700"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 px-8 md:px-20">
            <h1 className="text-white font-bold text-4xl text-center md:text-start">
              EU SOU <span className="text-violet-700">MATHEUS</span>
            </h1>
            <span className="font-light text-white text-3xl mb-8 text-center md:text-start">
              <ReactTypingEffect
                staticText="DESENVOLVEDOR FRONT-END COM"
                text={["REACT", "TYPESCRIPT", "TAILWIND"]}
                speed={50}
                typingDelay={10}
                eraseSpeed={10}
              />
            </span>
            <div className="leading-relaxed space-y-6">
              <p className="text-white text-justify flex items-center">
                <CaretRight size={18} className="inline mr-2" />
                Tenho 27 Anos, sou estudante de programação e estou me graduando em Sistemas para
                Internet.
              </p>
              <p className="text-white text-justify flex items-center">
                <CaretRight size={18} className="inline mr-2" />
                Já tive experiencia profissional trabalhando com desenvolvimento php.
              </p>
              <p className="text-white text-justify flex items-center">
                <CaretRight size={18} className="inline mr-2" />
                Em 2015 comecei a trabalhar como Designer Gráfico. Agora estou em processo de
                migração de carreira para a area de desenvolvimento web.
              </p>
              <p className="text-white text-justify flex items-center">
                <CaretRight size={18} className="inline mr-2" />
                Meu foco e minha paixão é por desenvolvimento front-end com React e TypeScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
