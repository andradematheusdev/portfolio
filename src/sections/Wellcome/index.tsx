import Button from "../../components/Button/Button";

export const Wellcome = () => {
  return (
    <section id="home" className="wellcome-section">
      <div className="flex flex-col flex-1 px-6 mt-16 lg:px-20 max-w-full lg:items-start items-center">
        <div className="mb-8 space-y-4">
          <span className="text-white text-3xl block text-center lg:text-start">OLÁ MUNDO!</span>
          <h1 className="text-white text-6xl font-bold block text-center lg:text-start">
            BEM VINDO AO MEU ESPAÇO.
          </h1>
        </div>
        <div className="flex flex-row w-full space-x-2 justify-center lg:justify-start">
          <Button
            text="GitHub"
            className="bg-violet-700 text-white hover:bg-violet-900 w-full md:w-5/12 lg:w-2/12"
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
  );
}
