import SectionTitle from "../components/SectionTitle/SectionTitle";
import ReactTypingEffect from "react-typing-effect";

export default function AboutMe() {
  return (
    <section id="about" className="flex flex-col w-full justify-center bg-black pb-16">
      <SectionTitle title="SOBRE MIM" />
      <div className="flex flex-row w-full justify-start">
        <div className="flex w-1/3 items-center justify-center">
          <img
            src="https://github.com/Heloriel.png"
            className="rounded-full w-80 h-80 border-4 border-violet-700"
          />
        </div>
        <div className="flex flex-col flex-1 px-20">
          <h1 className="text-white font-bold text-4xl">
            EU SOU <span className="text-violet-700">MATHEUS</span>
          </h1>
          {/* <span className="font-light text-white text-3xl">DESENVOLVEDOR FRONT-END</span> */}
          <span className="font-light text-white text-3xl mb-8">
            <ReactTypingEffect
              staticText="DESENVOLVEDOR FRONT-END COM"
              text={["REACT", "TYPESCRIPT", "TAILWIND"]}
              speed={50}
              typingDelay={10}
              eraseSpeed={10}
            />
          </span>
          <div className="leading-relaxed space-y-6">
            <p className="text-white">
              Tenho 27 Anos, sou estudante de programação e estou me graduando em Sistemas para
              Internet.
            </p>

            <p className="text-white">
              Já tive experiencia profissional trabalhando com desenvolvimento php.
            </p>

            <p className="text-white">
              Em 2015 comecei a trabalhar como Designer Gráfico. Agora estou em processo de migração
              de carreira para a area de desenvolvimento web.
            </p>

            <p className="text-white">
              Meu foco e minha paixão é por desenvolvimento front-end com React e TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
