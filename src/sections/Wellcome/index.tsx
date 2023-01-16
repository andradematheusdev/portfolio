import { BackgroundElement } from "../../components";
import Button from "../../components/Button/Button";

export const Wellcome = () => {
  return (
    <>
    <section id="home" className="wellcome-section">
      <div className="flex flex-col flex-1 px-6 mt-16 lg:px-20 max-w-full items-center">
        <div className="mb-8 space-y-4">
          <span className="text-3xl block text-center">OLÁ MUNDO!</span>
          <h1 className="text-6xl font-bold block text-center">
            BEM VINDO AO MEU ESPAÇO.
          </h1>
        </div>
        <div className="flex flex-row w-full space-x-2 justify-center">
          <Button
            text="GitHub"
            className="bg-violet-700 hover:bg-violet-900 w-full md:w-5/12 lg:w-2/12"
            url="https://github.com/andradematheusdev"
            blank
          />

          <Button
            text="LinkedIn"
            className="bg-none border-2 border-violet-700 text-white hover:bg-violet-700 hover:text-white w-full md:w-5/12 lg:w-2/12"
            url="https://www.linkedin.com/in/matheus-andrade-ba2b16226/"
            blank
          />
        </div>
      </div>
    </section>
    <BackgroundElement size={190} color={"#2563eb"} x={50} y={40} />
    <BackgroundElement size={110} color={"#7e22ce"} x={30} y={50} />
    <BackgroundElement size={150} color={"#9d174d"} x={40} y={20} />
    </>
  );
}
