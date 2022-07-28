import SectionTitle from "../components/SectionTitle/SectionTitle";
import SkillBlock from "../components/SkillBlock/SkillBlock";
import SkillDescription from "../components/SkillDescription/SkillDescription";

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section overflow-hidden rounded-t-[48px] sm:rounded-none"
    >
      <div className="flex flex-1 flex-col items-center px-4 lg:px-10">
        <SectionTitle title="Conhecimentos" className="my-16 text-xl" />
        <div className="flex flex-row flex-wrap justify-center lg:justify-between w-full">
          <div className="w-full lg:pr-2 lg:w-2/5 mb-8 lg:mb-0">
            <SkillDescription />
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-3 gap-6 w-full place-items-center lg:place-items-end lg:w-3/5">
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
