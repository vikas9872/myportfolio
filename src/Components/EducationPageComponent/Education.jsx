import React from 'react'
import education from '../EducationList/education'
const EducationPage = () => {
  return (
    <div className='flex flex-col pt-10 items-center h-auto'>
      <div className='text-black dark:text-white items-center font-bold text-6xl md:text-7xl font-roboto-condensed p-10' data-aos="fade-right">
        EDUCATION
      </div>
      <div className='flex flex-wrap gap-12 bg-white dark:bg-black justify-center items-center'>
        {
          education.map(edu => (
            <div key={edu.id} className='h-[250px] w-[250px] border-2 rounded shadow-2xl dark:shadow-2xl dark:shadow-gray-800 dark:border-gray-700'>
              <p className='text-black dark:text-white'>{edu.name}</p>
              <p className='text-black dark:text-white'>{edu.yoc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EducationPage
