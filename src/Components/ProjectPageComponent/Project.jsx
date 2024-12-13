import React from 'react'
import Cards from './ProjectsCards'
const ProjectPage = () => {
  return (
    <div className='flex flex-col pt-10 items-center h-auto'>
      <div className='text-black dark:text-white items-center font-bold text-6xl md:text-7xl font-roboto-condensed p-10' data-aos="fade-right">
          PROJECTS
      </div>
      <Cards/>
    </div>
  )
}

export default ProjectPage
