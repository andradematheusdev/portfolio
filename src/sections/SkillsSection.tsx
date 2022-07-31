import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

import SectionTitle from "../components/SectionTitle/SectionTitle";
import { SkillBlock, SkillBlockLoading } from "../components/SkillBlock/SkillBlock";
import {
  SkillDescription,
  SkillDescriptionLoading,
} from "../components/SkillDescription/SkillDescription";

interface Skills {
  id: string;
  name: string;
  icon: string;
  description: string;
  footerNote: string;
}

function SkillsLoading() {
  return (
    <section
      id="skills"
      className="skills-section overflow-hidden rounded-t-[32px] sm:rounded-none"
    >
      <div className="flex flex-1 flex-col items-center px-4 lg:px-10">
        <SectionTitle title="Conhecimentos" className="my-16 text-xl" />
        <div className="flex flex-row flex-wrap justify-center lg:justify-between w-full">
          <div className="w-full lg:pr-2 lg:w-2/5 mb-8 lg:mb-0">
            <SkillDescriptionLoading />
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-3 gap-6 w-full place-items-center place-content-start lg:w-3/5">
            <SkillBlockLoading />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsFailOrEmpty() {
  return (
    <section
      id="skills"
      className="skills-section overflow-hidden rounded-t-[32px] sm:rounded-none"
    >
      <div className="flex flex-1 flex-col items-center px-4 lg:px-10">
        <SectionTitle title="Conhecimentos" className="my-16 text-xl" />
        <div className="flex justify-center w-full">
          <span className="text-white text-3xl">Não foi possivel carregar o conteúdo 😞</span>
        </div>
      </div>
    </section>
  );
}

export default function SkillsSection() {
  const GET_SKILLS_QUERY = gql`
    query GetSkills {
      skills(orderBy: order_ASC, first: 30) {
        id
        name
        icon
        description
        footerNote
        order
      }
    }
  `;

  const [skillTitle, setSkillTitle] = useState("");
  const [skillDesc, setSkillDesc] = useState("");
  const [skillFooter, setSkillFooter] = useState("");
  const [skillActive, setSkillActive] = useState(false);

  const { loading, data } = useQuery<{ skills: Skills[] }>(GET_SKILLS_QUERY);

  console.log(data);

  if (loading) {
    return <SkillsLoading />;
  }

  if (!data || !data.skills) {
    return <SkillsFailOrEmpty />;
  }

  function handleSkillClick(skill: Skills) {
    setSkillTitle(skill.name);
    setSkillDesc(skill.description);
    setSkillFooter(skill.footerNote);
    setSkillActive(true);
  }

  return (
    <section
      id="skills"
      className="skills-section overflow-hidden rounded-t-[32px] sm:rounded-none"
    >
      <div className="flex flex-1 flex-col items-center px-4 lg:px-10">
        <SectionTitle title="Conhecimentos" className="my-16 text-xl" />
        <div className="flex flex-row flex-wrap justify-center lg:justify-between w-full">
          <div className="w-full sm:px-16 lg:px-0 lg:pr-2 lg:w-2/5 mb-8 lg:mb-0">
            <SkillDescription title={skillTitle} desc={skillDesc} footerNote={skillFooter} />
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-3 gap-6 w-full place-items-center place-content-start lg:w-2/5">
            {data.skills.map((skill) => {
              return (
                <button
                  onMouseEnter={() => {
                    handleSkillClick(skill);
                  }}
                  onClick={() => {
                    handleSkillClick(skill);
                  }}
                >
                  <SkillBlock key={skill.id} tech={skill.icon} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}