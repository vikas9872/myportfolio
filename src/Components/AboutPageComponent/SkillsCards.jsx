import React from 'react'
import skills from '../SkillsList/skills'
import { useEffect } from 'react';
import AOS from 'aos';
const SkillsCards = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // animation duration
      easing: 'ease-in-out', // easing function
      once: true, // animations only happen once when scrolling into view
    });
  }, []); 
  return (
    <div className='p-2 h-fit w-screen bg-white dark:bg-black flex justify-center items-center text-black dark:text-white flex-wrap gap-12' data-aos="flip-right">
    {
      skills.map(skill=>(
        <div key={skill.id} className='flex h-20 w-60 items-center justify-center border-2 gap-4 bg-[rgba(240,102,37,0)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[20px]'>
          <img src={skill.image} alt={skill.name} />
          {skill.name}
        </div>
      ))
    }
  </div>
  )
}

export default SkillsCards
