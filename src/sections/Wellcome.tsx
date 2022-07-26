import Button from "../components/Button/Button";

export default function Wellcome() {
  return (
    <section
      id="home"
      className="flex min-h-screen bg-[url(/images/bg.jpg)] bg-no-repeat bg-center bg-cover bg-fixed items-center justify-center flex-wrap"
    >
      <div className="flex flex-col flex-1 px-6 mt-16 md:px-16 max-w-full">
        <div className="mb-8 space-y-4">
          <span className="text-white text-3xl ">OLÁ MUNDO!</span>
          <h1 className="text-white text-6xl  font-bold">BEM VINDO AO MEU ESPAÇO.</h1>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="flex-1 md:flex-none md:w-[200px]">
            <Button
              text="GitHub"
              className="bg-violet-700 text-white hover:bg-violet-900"
              url="https://github.com/Heloriel"
              blank
            />
          </div>
          <div className="flex-1 md:flex-none md:w-[200px]">
            <Button
              text="LinkedIn"
              className="bg-none border-2 border-violet-700 text-white hover:bg-violet-700 hover:text-white "
              url="https://www.linkedin.com/in/matheus-andrade-ba2b16226/"
              blank
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center px-2 min-w-full md:px-16 md:min-w-[610px]">
        <img src="/images/PC.png" />
      </div>
    </section>
  );
}
