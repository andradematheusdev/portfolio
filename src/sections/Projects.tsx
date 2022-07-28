import ProjectCard from "../components/ProjectCard/ProjectCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="projects-section px-4">
      <SectionTitle title="projetos" className="text-lg my-16" />
      <div>
        <ProjectCard />
      </div>
    </section>
  );
}
