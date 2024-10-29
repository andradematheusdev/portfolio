import { Header, Footer } from '@/components';
import { Wellcome, Challenges, Contact, Projects, AboutMe, Skills, MyGitHub } from './sections';

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
        <MyGitHub />
        <Contact />
      </main>
      <Footer />
    </>
  )
}