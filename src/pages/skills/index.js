import React from 'react';
import SkillContainer from '../../components/layout/container/skills'
import SkillBar from '../../components/skillbar'
import data from './data.js'

export default function Skills() {
  return (
    <section id="skills" className="md:w-4/5 mx-auto pt-20 md:pt-32 mb-12 md:mb-24 flex flex-col items-start justify-center">

      <div className="relative flex items-start">
        <h1 className="mb-1 text-3xl font-medium">Skills</h1>

        {/** Notice about swipe feature on mobile devices */}
        <span className="h-auto ml-1.5 py-0.5 px-1 xl:hidden text-xs font-bold uppercase tracking-wide bg-blue-300 text-gray-900 rounded">swipe</span>
      </div>

      {/** Hide scroll bar for bigger devices than mobile  */}
      <div className="w-full flex flex-row justify-between overflow-x-scroll xl:overflow-hidden">

        <SkillContainer category="Web Development">
          {data.web.map((skill) => <SkillBar name={skill.name} level={skill.level} yearsExperience={skill.yearsExperience} />)}
        </SkillContainer>

        <SkillContainer category="Desktop Development">
          {data.desktop.map((skill) => <SkillBar name={skill.name} level={skill.level} yearsExperience={skill.yearsExperience} />)}
        </SkillContainer>

        <SkillContainer category="Command Line">
          {data.cli.map((skill) => <SkillBar name={skill.name} level={skill.level} yearsExperience={skill.yearsExperience} />)}
        </SkillContainer>

      </div>
    </section>
  )
}