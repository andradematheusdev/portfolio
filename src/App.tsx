import Header from "./components/Header/Header";
import AboutMe from "./sections/AboutMe";
import Wellcome from "./sections/Wellcome";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Wellcome />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
