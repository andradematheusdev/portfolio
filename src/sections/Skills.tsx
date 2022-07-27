import SectionTitle from "../components/SectionTitle/SectionTitle";
import SkillBlock from "../components/SkillBlock/SkillBlock";
import SkillDescription from "../components/SkillDescription/SkillDescription";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="flex flex-1 flex-col h-screen items-center px-16 bg-section-bg-mask">
        <div className="text-white">
          <SectionTitle title="Conhecimentos" />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="w-2/5 pr-16">
            <SkillDescription />
          </div>
          <div className="grid grid-cols-5 gap-6 w-2/5">
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
