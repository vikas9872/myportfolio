import React from 'react'
import { useEffect } from 'react';
import education from '../EducationList/education'
import AOS from 'aos';
import 'aos/dist/aos.css'
const EducationPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); 
  return (
    <div className='flex flex-col pt-10 items-center h-auto'>
      <div className='text-black dark:text-white items-center font-bold text-6xl md:text-7xl font-roboto-condensed p-10' data-aos="fade-right">
        EDUCATION
      </div>
      <div className='flex flex-wrap gap-12 bg-white dark:bg-black justify-center items-center'>
        {
          education.map(edu => (
            <div key={edu.id} className='flex flex-wrap items-center justify-center flex-col h-[200px] w-[200px] sm:w-[400px] border-2 rounded-xl shadow-2xl dark:shadow-2xl dark:shadow-gray-700 dark:border-gray-700' data-aos="flip-right">
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
