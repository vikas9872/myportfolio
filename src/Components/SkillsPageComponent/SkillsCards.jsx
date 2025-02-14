import React from 'react'
import skills from '../SkillsList/skills'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
const SkillsCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); 
  return (
    <div className='h-auto w-screen bg-white dark:bg-black flex justify-center items-center text-black dark:text-white flex-wrap gap-12 p-12'>
    {
      skills.map(skill=>(
        <div key={skill.id} className='flex flex-wrap h-20 w-60 items-center justify-center border-2 rounded-xl shadow-2xl dark:shadow-2xl dark:shadow-gray-700 dark:border-gray-700' data-aos="flip-right" >
          <img src={skill.skillimage} alt={skill.name} class="w-12 h-12"/>
          <span>{skill.name}</span>
        </div>
      ))
    }
  </div>
  )
}

export default SkillsCards