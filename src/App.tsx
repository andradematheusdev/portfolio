import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MenuContext from "./contexts/MobileMenuContext";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Wellcome from "./sections/Wellcome";

function App() {
  return (
    <>
      <MenuContext>
        <Header />
      </MenuContext>
      <main className="flex flex-col w-full">
        <Wellcome />
        <AboutMe />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
