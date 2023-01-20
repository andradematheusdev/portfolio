import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ReactTypingEffect from "react-typing-effect";
import { CaretRight } from "phosphor-react";

export const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-1 items-center justify-center mb-8 lg:mb-0 min-w-[80px]">
          <img src="https://github.com/andradematheusdev.png" className="rounded-full w-80 h-auto" />
        </div>
        <div className="flex flex-1 flex-col">
          <SectionTitle title="SOBRE MIM" className="mb-8 text-center md:text-start" />
          <h1 className="text-white font-bold text-4xl text-center md:text-start mb-16 md:mb-0">
            OLÁ, EU SOU O <span className="text-violet-500">MATHEUS</span>!
          </h1>
          <div className="flex flex-wrap items-center text-white font-light text-lg mb-8 h-[50px] lg:h-auto">
            <span className="flex flex-nowrap flex-row items-center w-full justify-center md:justify-start text-center md:text-start">
              <CaretRight size={18} className="mr-2 hidden lg:inline" />
              <ReactTypingEffect
                staticText="DESENVOLVEDOR FRONT-END COM"
                text={["REACT", "TYPESCRIPT", "TAILWIND", "SASS", "BOOTSTRAP"]}
                speed={50}
                typingDelay={10}
                eraseSpeed={10}
                cursorClassName="text-white"
              />
            </span>
          </div>
          <div className="leading-relaxed space-y-6">
            <p className="text-white text-justify sm:text-start">
              Tenho 27 anos, sou de Magé - RJ, estudo programação por conta própria e estou me
              graduando em Sistemas para Internet.
            </p>
            <p className="text-justify sm:text-start">
              Minha jornada na programação começou em 2013 quando comecei a estudar programção web com
              desenvolvimento em php.
            </p>
            <p className="text-justify sm:text-start">
              Em 2015 comecei a trabalhar como Designer Gráfico.
            </p>
            <p className="text-justify sm:text-start">
              Alinhando a experiência de 8 anos como Designer com meus estudos de programação percebi que o front-end
              era a área certa para mim.
            </p>
            <p className="text-justify sm:text-start">
              Hoje o foco dos meus estudos é em desenvolvimento com React e TypeScript.
            </p>            
          </div>
        </div>
      </div>
    </section>
  );
}
