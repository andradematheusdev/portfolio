import Header from "./components/Header/Header";
import Wellcome from "./sections/Wellcome";

function App() {
  return (
    <>
      <Header />
      <main className="flex w-full h-screen items-center justify-center">
        <Wellcome />
      </main>
    </>
  );
}

export default App;
