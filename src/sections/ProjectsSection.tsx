import ProjectsList from "../components/ProjectsList/ProjectsList";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ViewMore from "../components/ViewMore/ViewMore";


export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section px-4 lg:px-10">
      <div className="flex w-full items-center px-16">
        <SectionTitle title="projetos" className="text-lg my-16 flex-1" />
        <div className="flex-1 flex justify-end">
          <ViewMore url={"#"} className="text-white hover:text-neutral-300 transition-colors" />
        </div>
      </div>
      <ProjectsList />
    </section>
  );
}
