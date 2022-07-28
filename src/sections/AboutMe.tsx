import SectionTitle from "../components/SectionTitle/SectionTitle";
import ReactTypingEffect from "react-typing-effect";
import { CaretRight } from "phosphor-react";

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <SectionTitle title="SOBRE MIM" />
      <div className="flex flex-1 justify-center items-center">
        <div className="flex md:w-4/12 items-center justify-center mb-16 md:mb-0">
          <img src="https://github.com/Heloriel.png" className="rounded-lg w-80 h-auto" />
        </div>
        <div className="flex flex-col md:w-5/12 justify-center md:px-16">
          <h1 className="text-white font-bold text-4xl text-center md:text-start">
            OLÁ, EU SOU O MATHEUS!
          </h1>
          <span className="flex items-center text-white font-light text-xl mb-8 text-center md:text-start">
            <CaretRight size={18} className="mr-2" />
            <span>DESENVOLVEDOR FRONT-END COM</span>
            <ReactTypingEffect
              text={["REACT", "TYPESCRIPT", "TAILWIND"]}
              speed={50}
              typingDelay={10}
              eraseSpeed={10}
              className="text-violet-500 ml-1"
              cursorClassName="text-white"
            />
          </span>
          <div className="leading-relaxed space-y-6">
            <p className="text-white flex items-center">
              <span>
                Meu nome é Matheus, tenho 27 Anos, sou de Magé - RJ, estududo programação e estou me
                graduando em Sistemas para Internet.
              </span>
            </p>
            <p className="text-white">
              <span>
                Minha jornada na programação começou em 2013 quando comecei a trabalhar com
                desenvolvimento php, hoje o foco dos meus estudos é em desenvolvimento front-end com
                React e TypeScript.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
