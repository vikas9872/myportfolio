import React from 'react'
import projects from '../ProjectsList/projects'

const Cards = () => {
  return (
    <div className='h-auto w-screen bg-white dark:bg-black flex justify-center items-center text-black dark:text-white flex-wrap gap-12 p-12'>
      {
        projects.map(project=>(
          <div key={project.id} className='flex flex-wrap border-2 rounded-xl shadow-2xl h-90 w-80 dark:shadow-2xl dark:shadow-gray-700 dark:border-gray-700'>
            <img src={project.projectpic} alt={project.projectname} className='rounded-xl' />
            <div className='pl-2 flex align-center w-full'>
              <p className='text-2xl font-bold'>{project.projectname}</p>
            </div>
            <div className='pl-2'>
              <p className='dark:text-white'>{project.projectdescription}</p>
            </div>
            <div className='flex justify-between w-full p-2'>
              <button className='border-2 border-[#000000] dark:border-[#ffff] p-2 rounded-xl dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' onClick={()=>window.open(project.githubLink,"_blank")}>
                <p>source code</p>
              </button>
              <button className={`border-2 border-[#000000] dark:border-[#ffff] p-2 rounded-xl ${project.demoLink ? 'dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' : 'cursor-not-allowed'}`}>
                <p>live demo</p>
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cards
