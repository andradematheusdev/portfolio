import { useContext } from "react";
import ReactTypingEffect from "react-typing-effect";
import { RxCaretRight } from "react-icons/rx";
import { SectionTitle } from "@/components";
import { translation } from '@/lang/language';
import { Context } from "@/contexts/LanguageContext";

export const AboutMe = () => {
  const { lang } = useContext(Context);

  return (
    <section className="flex flex-col w-full pb-28 justify-center items-center px-8 lg:px-14">
      <div className="grid lg:grid-rows-1 lg:grid-cols-2 max-w-[1270px] items-center">
        <div className="flex w-full justify-center md:min-w-[480px]">
          <img src="https://github.com/andradematheusdev.png" className="rounded-full w-[400px] h-auto my-8 md:my-0 self-center" />
        </div>
        <div className="flex flex-1 flex-col md:min-w-[520px]">
          <SectionTitle title={translation[lang].sectionsTitle.aboutMe} className="mb-8 text-center md:text-start" />
          <h1 className="text-white font-bold text-4xl text-center md:text-start mb-16 md:mb-0 uppercase">
            {translation[lang].aboutMeSection.hello} <span className="text-violet-500">MATHEUS</span>!
          </h1>
          <div className="flex flex-wrap items-center text-white font-light text-lg mb-8 h-[50px] lg:h-auto">
            <span className="flex flex-nowrap flex-row items-center w-full justify-center md:justify-start text-center md:text-start uppercase">
              <RxCaretRight size={32} className="hidden lg:inline" />
              <ReactTypingEffect
                staticText={translation[lang].aboutMeSection.developerWith}
                text={["REACT", "TYPESCRIPT", "TAILWIND", "SASS", "BOOTSTRAP"]}
                speed={50}
                typingDelay={10}
                eraseSpeed={10}
                cursorClassName="text-white"
              />
            </span>
          </div>
          <div className="leading-relaxed space-y-6 text-justify">
              <p>{translation[lang].aboutMeSection.timeline.one}</p>
              <p>{translation[lang].aboutMeSection.timeline.two}</p>
              <p>{translation[lang].aboutMeSection.timeline.three}</p>
              <p>{translation[lang].aboutMeSection.timeline.four}</p>
              <p>{translation[lang].aboutMeSection.timeline.five}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
