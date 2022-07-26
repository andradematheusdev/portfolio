import SectionTitle from "../components/SectionTitle/SectionTitle";
import SkillBlock from "../components/SkillBlock/SkillBlock";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="bg-section-bg-mask flex flex-1 flex-col h-screen items-center px-16">
        <div className="text-white">
          <SectionTitle title="Conhecimentos" />
        </div>
        <div className="flex flex-row w-full">
          <div className="flex-1">Description</div>
          <div className="grid grid-cols-5 gap-6">
            <SkillBlock tech="html" />
            <SkillBlock tech="css" />
            <SkillBlock tech="sass" />
            <SkillBlock tech="tailwind" />
            <SkillBlock tech="bootstrap" />
            <SkillBlock tech="javascript" />
            <SkillBlock tech="react" />
            <SkillBlock tech="typescript" />
            <SkillBlock tech="nextjs" />
            <SkillBlock tech="laravel" />
            <SkillBlock tech="graphql" />
            <SkillBlock tech="python" />
            <SkillBlock tech="php" />
          </div>
        </div>
      </div>
    </section>
  );
}
