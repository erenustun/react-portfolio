import React from 'react'
import ProjectList from '../../components/layout/list/project'
import data from './data.json'

export default function Projects() {
  return (
    <section id="projects" className="md:w-4/5 mx-auto pt-20 md:pt-32 mb-12 md:mb-24 flex flex-col justify-center sm:justify-start">
      <h1 className="mb-2 text-3xl font-medium">Projects</h1>

      {/** Display list of projects */}
      <ProjectList data={data} />
    </section>
  )
}