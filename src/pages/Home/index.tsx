import { Header } from '../../components';
import Footer from "../../components/Footer/Footer";
import { Wellcome, Challenges, Contact, Projects, AboutMe, Skills } from '../../sections/';

export const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Wellcome />
        <AboutMe />
        <Skills />
        <Projects />
        <Challenges />
        <Contact />
      </main>
      <Footer />
    </>
  )
}