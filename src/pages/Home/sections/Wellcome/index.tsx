import { useContext } from "react";
import { BackgroundElement } from "../../../../components";
import { Button } from "../../../../components/";
import { Context, LangContextType } from "../../../../contexts/LanguageContext";
import { translation } from '../../../../lang/language';

export const Wellcome = () => {
  const context = useContext<LangContextType>(Context);

  return (
    <>
    <section id="home" className="wellcome-section">
      <div className="flex flex-col flex-1 px-6 mt-20 lg:px-20 max-w-[1270px] lg:mt-0">
        <div className="flex items-center flex-col mb-8">
          <h2 className="lg:text-3xl block text-center">{ translation[context.lang].wellcomeSection.helloWorld }</h2>
          <h1 className="
            text-4xl lg:text-6xl font-bold block text-center
            bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent background-animate
          ">
            {translation[context.lang].wellcomeSection.frontEnd}
          </h1>
          <p className="max-w-[720px] text-center my-16">
            {translation[context.lang].wellcomeSection.about}          
          </p>
        </div>
        <div className="flex flex-row w-full space-x-2 justify-center">
          <Button
            text="GitHub"
            className="bg-violet-500 hover:bg-violet-600 w-full md:w-5/12 lg:w-2/12"
            url="https://github.com/andradematheusdev"
            blank
          />

          <Button
            text="LinkedIn"
            className="bg-none border-2 border-violet-500 hover:bg-violet-600 hover:border-violet-600 hover:text-white w-full md:w-5/12 lg:w-2/12"
            url="https://www.linkedin.com/in/matheus-andrade-ba2b16226/"
            blank
          />
        </div>
      </div>
    </section>
    <BackgroundElement size={200} color={"#2563eb"} x={50} y={40} />
    <BackgroundElement size={150} color={"#7e22ce"} x={25} y={50} />
    <BackgroundElement size={100} color={"#9d174d"} x={40} y={20} />
    </>
  );
}
