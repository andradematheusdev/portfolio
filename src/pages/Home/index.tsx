import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutMeSection from "../../sections/AboutMeSection";
import ContactSection from "../../sections/ContactSection";
import ProjectsSection from "../../sections/ProjectsSection";
import SkillsSection from "../../sections/SkillsSection";
import { Wellcome, Challenges } from '../../sections/'

export const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Wellcome />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <Challenges />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}