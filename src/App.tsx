import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MenuContext from "./contexts/MobileMenuContext";
import WellcomeSection from "./sections/WellcomeSection";
import AboutMeSection from "./sections/AboutMeSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import { ApolloProvider } from "@apollo/client";
import { client } from "./libs/apollo";
import ChalengeSection from "./sections/ChalengeSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <MenuContext>
        <Header />
      </MenuContext>
      <main className="flex flex-col w-full">
        <ApolloProvider client={client}>
          <WellcomeSection />
          <AboutMeSection />
          <SkillsSection />
          <ProjectsSection />
          <ChalengeSection />
          <ContactSection />
        </ApolloProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
