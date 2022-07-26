import Header from "./components/Header/Header";
import MenuContext from "./contexts/MobileMenuContext";
import AboutMe from "./sections/AboutMe";
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
      </main>
    </>
  );
}

export default App;
