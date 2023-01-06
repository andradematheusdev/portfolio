import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutMeSection from "../../sections/AboutMeSection";
import ChalengeSection from "../../sections/ChalengeSection";
import ContactSection from "../../sections/ContactSection";
import ProjectsSection from "../../sections/ProjectsSection";
import SkillsSection from "../../sections/SkillsSection";
import { Wellcome } from '../../sections/'

export const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Wellcome />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ChalengeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}