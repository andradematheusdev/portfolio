import { useContext } from "react";
import ReactTypingEffect from "react-typing-effect";
import { CaretRight } from "phosphor-react";
import { SectionTitle } from "@/components";
import { translation } from '@/lang/language';
import { Context } from "@/contexts/LanguageContext";

export const AboutMe = () => {
  const context = useContext(Context);

  return (
    <section id="about" className="about-section">
      <div className="grid lg:grid-rows-1 lg:grid-cols-2 max-w-[1270px] items-center">
        <div className="flex w-full justify-center md:min-w-[520px]">
          <img src="https://github.com/andradematheusdev.png" className="rounded-full w-[400px] h-auto my-8 md:my-0 self-center" />
        </div>
        <div className="flex flex-1 flex-col md:min-w-[520px]">
          <SectionTitle title={translation[context.lang].sectionsTitle.aboutMe} className="mb-8 text-center md:text-start" />
          <h1 className="text-white font-bold text-4xl text-center md:text-start mb-16 md:mb-0 uppercase">
            {translation[context.lang].aboutMeSection.hello} <span className="text-violet-500">MATHEUS</span>!
          </h1>
          <div className="flex flex-wrap items-center text-white font-light text-lg mb-8 h-[50px] lg:h-auto">
            <span className="flex flex-nowrap flex-row items-center w-full justify-center md:justify-start text-center md:text-start uppercase">
              <CaretRight size={18} className="mr-2 hidden lg:inline" />
              <ReactTypingEffect
                staticText={translation[context.lang].aboutMeSection.developerWith}
                text={["REACT", "TYPESCRIPT", "TAILWIND", "SASS", "BOOTSTRAP"]}
                speed={50}
                typingDelay={10}
                eraseSpeed={10}
                cursorClassName="text-white"
              />
            </span>
          </div>
          <div className="leading-relaxed space-y-6 text-justify">
              <p>
                Tenho 27 anos, sou de Magé - RJ, estudo programação por conta própria e estou me
                graduando em Sistemas para Internet.
              </p>

              <p>
                Minha jornada na programação começou em 2013 quando comecei a estudar programção web com
                desenvolvimento em php.
              </p>

              <p>Em 2015 comecei a trabalhar como Designer Gráfico.</p>

              <p>
                Alinhando a experiência de 8 anos como Designer com meus estudos de programação percebi que o front-end
                era a área certa para mim.
              </p>

              <p>Hoje o foco dos meus estudos é em desenvolvimento com React e TypeScript.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
