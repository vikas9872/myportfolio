import React, { useEffect } from 'react'
import Cards from './ProjectsCards'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProjectPage = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
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
